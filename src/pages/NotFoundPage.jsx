import { Center, Container } from "@mantine/core";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Center mih="100dvh">
      <Container w="100%" maw="65ch">
        <h1>404 — Page not found</h1>
        <Link to="/">Go home</Link>
      </Container>
    </Center>
  );
}

export default NotFoundPage;
