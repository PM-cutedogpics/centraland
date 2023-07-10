import { useState, ChangeEvent, FormEvent } from "react";
import "../app/globals.css";
import { Container, Group, Modal, Space, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SignUpModal from "./SignUpModal";

interface LoginModalProps {
  onClose: Function;
  opened: any;
  close: any;
  loginOpened: any;
}

const LoginModal = (props: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [opened, { open, close }] = useDisclosure(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform login logic here
    // You can use the email and password variables

    // Clear form fields
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <SignUpModal
        opened={opened}
        close={close}
        loginOpened={props.loginOpened}
      />
      <Modal opened={props.opened} onClose={props.close} radius="md" size="lg">
        <img src="/cph-logo.png" className="company-icon"></img>
        <h1 className="greeting">Login</h1>

        <Space h="xl" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="label">
              <label>Email</label>
            </div>
            <input
              className="inputSign" // Replace with the appropriate class name from your globals.css file
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <div className="label">
              <label>Password</label>
            </div>
            <input
              className="inputSign" // Replace with the appropriate class name from your globals.css file
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <Container w={510}>
            <button
              className="button" // Replace with the appropriate class name from your globals.css file
              type="submit"
            >
              Log in
            </button>
          </Container>
        </form>
        <Group position="center">
          <Text sx={{ fontFamily: "Montserrat !important" }}>
            New to CentralandPH?{" "}
            <Text
              color="#9CD9A5"
              span
              sx={{ fontFamily: "Montserrat !important" }}
              onClick={() => {
                open();
                props.close();
              }}
            >
              Join Now
            </Text>
          </Text>
        </Group>
        <Space h={100} />
      </Modal>
    </>
  );
};

export default LoginModal;
