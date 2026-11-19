import { MantineProvider } from "@mantine/core";
import { BrowserRouter, StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import "@mantine/core/styles.css";

const Router = typeof document === "undefined" ? StaticRouter : BrowserRouter;

const init = async (socket) => {
  socket.on("connect", () => {
    // Reconnect / presence handling will live here.
  });

  return (
    <MantineProvider>
      <Router>
        <App />
      </Router>
    </MantineProvider>
  );
};

export default init;
