import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterFormPage from "../pages/RegisterFormPage";
import ReadingPage from "../pages/ReadingPage";
import LoginFormPage from "../pages/LoginPage";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<RegisterFormPage />} />
        <Route path="/" element={<LoginFormPage />} />
        <Route path="/readings" element={<ReadingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
