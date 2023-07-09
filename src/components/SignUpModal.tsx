import {
  Button,
  Checkbox,
  Group,
  Modal,
  PasswordInput,
  SimpleGrid,
  Stack,
  TextInput,
  Image,
  Text,
  Space,
} from "@mantine/core";
import { useForm } from "@mantine/form";

interface SignUpModalProps {
  opened: any;
  close: any;
  loginOpened: any;
}

const SignUpModal = ({ opened, close, loginOpened }: SignUpModalProps) => {
  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmpass: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Modal
      opened={opened}
      onClose={close}
      sx={{
        fontFamily: "Montserrat !important",
        fontWeight: 500,
        fontSize: 18,
      }}
      size="lg"
      radius="md"
      shadow="xl"
    >
      <Stack align="center" w="100%">
        <Image src="cph-logo.png" maw={80} alt="Logo" />
        <Text weight={700} size="30px">
          Welcome to CentralandPH
        </Text>

        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <SimpleGrid
            cols={1}
            verticalSpacing="sm"
            sx={{
              width: "23rem",
            }}
          >
            <TextInput
              label="Email Address"
              {...form.getInputProps("email")}
              radius="md"
              styles={{
                input: {
                  width: "23rem !important",
                },
              }}
            />

            <TextInput
              label="Username"
              {...form.getInputProps("username")}
              radius="md"
              styles={{
                input: {
                  width: "23rem !important",
                },
              }}
            />

            <PasswordInput
              label="Password"
              {...form.getInputProps("password")}
              radius="md"
              styles={{
                input: {
                  width: "23rem !important",
                },
              }}
            />

            <PasswordInput
              label="Confirm Password"
              {...form.getInputProps("confirmpass")}
              radius="md"
              styles={{
                input: {
                  width: "23rem !important",
                },
              }}
            />

            <Button
              type="submit"
              radius="md"
              sx={{
                background: "#9CD9A5 !important",
                color: "black",
              }}
            >
              Sign Up
            </Button>
          </SimpleGrid>
        </form>
        <Text weight={400} size="16px">
          By signing up, you agree to our &nbsp;
          <Text span weight={400} size="16px" color="#9CD9A5">
            Terms and Conditions.
          </Text>
        </Text>
        <Space h="xs" />
        <Text weight={400} size="16px">
          Already have an account? &nbsp;
          <Text
            span
            weight={400}
            size="16px"
            color="#9CD9A5"
            onClick={() => {
              close();
              loginOpened();
            }}
          >
            Login
          </Text>
        </Text>
        <Space h={50} />
      </Stack>
    </Modal>
  );
};

export default SignUpModal;
