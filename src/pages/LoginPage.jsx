import { Alert, Button, Center, Container, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/authStore.js";

function LoginPage() {
  const token = useAuthStore((state) => state.token);
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
  });

  if (token) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = async (values) => {
    setError(null);
    try {
      const response = await fetch("/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("login failed");
      }
      const data = await response.json();
      setAuth(data);
      navigate("/");
    } catch {
      setError("Wrong username or password");
    }
  };

  return (
    <Center mih="100dvh">
      <Container w="100%" maw="65ch">
        <h1>Login</h1>
        {error && (
          <Alert mb="md" color="red" role="alert">
            {error}
          </Alert>
        )}
        <form onSubmit={form.onSubmit(onSubmit)}>
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
