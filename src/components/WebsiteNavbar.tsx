/* eslint-disable react/jsx-no-undef */
import { Avatar, Group, Header, Title, Text } from "@mantine/core";
//import { Link } from "react-router-dom";
import Link from 'next/link';

// TODO: Do header
const WebsiteNavbar = () => {
    return (  
        <Header height={60} p="xs" >

            <Group position="apart" align="center" sx={{
                    fontFamily: "Montserrat !important"
                }}>

                <Group>
                    <Avatar></Avatar>
                    <Text   size={30} 
                            weight={700}>
                            
                        CentralandPH
                        </Text>
                </Group>


                <Group >
                    <Link href="all"><Text weight={700}>All</Text></Link>
                    <Link href="games"><Text weight={700}>Games</Text></Link>
                    <Link href="consoles"><Text weight={700}>Consoles</Text></Link>
                    <Link href="pc"><Text weight={700}>PC</Text></Link>
                    <Link href="peripherals"><Text weight={700}>Peripherals</Text></Link>
                    <Avatar></Avatar>
                </Group>
            </Group>
        </Header>
    );
}
 
export default WebsiteNavbar;