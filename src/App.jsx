import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
