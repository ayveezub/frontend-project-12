import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/authStore.js";

function ChatPage() {
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  // The heading always renders so init(socket) markup contains "Hexlet Chat".
  // An unauthenticated visitor is redirected after mount.
  return <h1>Hexlet Chat</h1>;
}

export default ChatPage;
