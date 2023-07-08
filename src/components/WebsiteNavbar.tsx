/* eslint-disable react/jsx-no-undef */
import { Avatar, Group, Header, Title, Text } from "@mantine/core";
import React, { useState } from 'react';
import Link from 'next/link';
import LoginModal from '@/components/LoginModal';

const WebsiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (  
    <Header height={60} p="xs">
      <Group position="apart" align="center" sx={{ fontFamily: "Montserrat !important" }}>
        <Group>
          <Avatar></Avatar>
          <Text size={30} weight={700}>
            CentralandPH
          </Text>
        </Group>

        <Group>
          <Link href="all"><Text weight={700}>All</Text></Link>
          <Link href="games"><Text weight={700}>Games</Text></Link>
          <Link href="consoles"><Text weight={700}>Consoles</Text></Link>
          <Link href="pc"><Text weight={700}>PC</Text></Link>
          <Link href="peripherals"><Text weight={700}>Peripherals</Text></Link>

          <div style={{ position: 'relative' }}>
            <img
              style={{width:"30px"}}
              src="favicon.png"
              alt="Dropdown"
              className="dropdown-toggle"
              onClick={toggleDropdown}
            />
            {isOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button className="button" onClick={openLoginModal}>Login</button>
                </li>
                <li>
                  <a href="signup">Signup</a>
                </li>
              </ul>
            )}
          </div>
        </Group>
      </Group>
      {isLoginModalOpen && (
        <LoginModal onClose={closeLoginModal} />
      )}
    </Header>
  );
};

export default WebsiteNavbar;
