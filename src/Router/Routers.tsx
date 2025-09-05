import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterFormPage from "../pages/RegisterFormPage";
import ReadingPage from "../pages/ReadingPage";
import LoginFormPage from "../pages/LoginPage";



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<RegisterFormPage />} />
        < Route path="/" element={< LoginFormPage />} />
         <Route path="/readings" element={<ReadingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
