import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5002,
    proxy: {
      // Proxy API requests
      "/api": {
        target: "http://localhost:5001",
      },
      // Proxy WebSocket connections
      "/socket.io": {
        target: "ws://localhost:5001",
        ws: true,
        rewriteWsOrigin: true,
      },
    },
  },
});
