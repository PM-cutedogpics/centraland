/* eslint-disable react/jsx-no-undef */
import { Avatar, Group, Header, Title, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import LoginModal from '@/components/LoginModal';
import { useDisclosure } from '@mantine/hooks';
import SignUpModal from './SignUpModal';

const WebsiteNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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

	return (
		<Header height={60} p='xs'>
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
				position='apart'
				align='center'
				sx={{ fontFamily: 'Montserrat !important' }}
			>
				<Group>
					<Link href='/'>
						<Image
							width={160}
							height={100}
							src='/cph-logo-long.png'
							alt='CentralandPH Logo'
						/>
					</Link>
				</Group>

				<Group>
					<Link className='nav-item' href='all'>
						<Text weight={700}>All</Text>
					</Link>
					<Link className='nav-item' href='games'>
						<Text weight={700}>Games</Text>
					</Link>
					<Link className='nav-item' href='consoles'>
						<Text weight={700}>Consoles</Text>
					</Link>
					<Link className='nav-item' href='pc'>
						<Text weight={700}>PC</Text>
					</Link>
					<Link className='nav-item' href='peripherals'>
						<Text weight={700}>Peripherals</Text>
					</Link>

					<div style={{ position: 'relative' }}>
						<Image
							width={30}
							height={30}
							src='/account-icon.png'
							alt='Dropdown'
							className='dropdown-toggle'
							onClick={toggleDropdown}
						/>
						{isOpen && (
							<ul className='dropdown-menu'>
								<li>
									<button className='button' onClick={open}>
										Login
									</button>
								</li>
								<li>
									<a
										className='text-center cursor-pointer'
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
