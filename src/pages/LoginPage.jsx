import { Button, Center, Container, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

function LoginPage() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Center mih="100dvh">
      <Container w="100%" maw="65ch">
        <h1>Login</h1>
        <form onSubmit={form.onSubmit(() => {})}>
          <TextInput
            label="Username"
            placeholder="Username"
            key={form.key("username")}
            {...form.getInputProps("username")}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <Button type="submit">Log In</Button>
        </form>
      </Container>
    </Center>
  );
}

export default LoginPage;
