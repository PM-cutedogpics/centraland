import { useState, ChangeEvent, FormEvent } from "react";
import "../app/globals.css";
import { Container, Modal, Space } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface LoginModalProps {
  onClose: Function;
  opened: any;
  close: any;
}

const LoginModal = (props: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <div className="text-center">
        New to CentralandPH?
        <a href="signup"> Join Now</a>
      </div>
      <Space h={100} />
    </Modal>
  );
};

export default LoginModal;
