import { BrowserRouter, StaticRouter } from "react-router-dom";
import App from "./App.jsx";

const Router = typeof document === "undefined" ? StaticRouter : BrowserRouter;

const init = async (socket) => {
  socket.on("connect", () => {
    // Reconnect / presence handling will live here.
  });

  return (
    <Router>
      <App />
    </Router>
  );
};

export default init;
