/* eslint-disable react/jsx-no-undef */
import { Avatar, Group, Header, Title, Text } from "@mantine/core";

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
                    <Text weight={700}>All</Text>
                    <Text weight={700}>Games</Text>
                    <Text weight={700}>Consoles</Text>
                    <Text weight={700}>PC</Text>
                    <Text weight={700}>Peripherals</Text>
                    <Avatar></Avatar>
                </Group>
            </Group>
        </Header>
    );
}
 
export default WebsiteNavbar;