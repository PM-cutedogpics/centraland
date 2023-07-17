/* eslint-disable react/jsx-no-undef */
import { Avatar, Group, Header, Title, Text, Input, Flex } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoginModal from "@/components/LoginModal";
import { useDisclosure } from "@mantine/hooks";
import SignUpModal from "./SignUpModal";
import { IconSearch } from "@tabler/icons";
import SearchIcon from "./Icons/SearchIcon";
import { useRouter } from "next/router";

const WebsiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [opened, { open, close }] = useDisclosure(false);
  const [signUpOpen, handlers] = useDisclosure(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const router = useRouter();

  const handleSearch = () => {
    router.query.search = search;
    router.push(router);
  };

  return (
    <Header
      height={70}
      p="xs"
      sx={{
        //borderColor: "black",
        boxShadow: '0px 0px 8px 0px #00000040;'
      }}
    >
      <SignUpModal
        opened={signUpOpen}
        close={handlers.close}
        loginOpened={open}
      />
      <LoginModal
        onClose={closeLoginModal}
        opened={opened}
        close={close}
        loginOpened={open}
      />
      <Group
        position="apart"
        align="center"
        sx={{ fontFamily: "Montserrat !important" }}
      >
        <Group>
          <Link href="/">
            <Image
              width={50}
              height={50}
              src="/cph-logo.png"
              alt="CentralandPH Logo"
            />
          </Link>

          <Link href="/">
            <Text weight={700} size={30} color="black">
              CentralandPH
            </Text>
          </Link>
        </Group>
        <Flex
          style={{
            flexGrow: 1,
            maxWidth: 700,
          }}
        >
          <Input
            placeholder="Search"
            icon={<SearchIcon size={14} />}
            radius="xl"
            sx={{
              flexGrow: 1,
            }}
            style={{}}
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </Flex>

        <Group position="apart" spacing="xl">
          <Link className="nav-item" href="all">
            <Text weight={700} size={20}>
              All
            </Text>
          </Link>
          <Link className="nav-item" href="games">
            <Text weight={700} size={20}>
              Games
            </Text>
          </Link>
          <Link className="nav-item" href="consoles">
            <Text weight={700} size={20}>
              Consoles
            </Text>
          </Link>
          <Link className="nav-item" href="pc">
            <Text weight={700} size={20}>
              PC
            </Text>
          </Link>
          <Link className="nav-item" href="peripherals">
            <Text weight={700} size={20}>
              Peripherals
            </Text>
          </Link>

          <div style={{ position: "relative" }}>
            <Image
              width={50}
              height={50}
              src="/account-icon.png"
              alt="Dropdown"
              className="dropdown-toggle"
              onClick={toggleDropdown}
            />
            {isOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button className="button" onClick={open}>
                    Login
                  </button>
                </li>
                <li>
                  <a
                    className="text-center cursor-pointer"
                    onClick={handlers.open}
                  >
                    Signup
                  </a>
                </li>
              </ul>
            )}
          </div>
        </Group>
      </Group>
    </Header>
  );
};

export default WebsiteNavbar;
