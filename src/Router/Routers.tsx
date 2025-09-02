import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterFormPage from "../pages/RegisterFormPage";
import ReadingPage from "../pages/ReadingPage";



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterFormPage />} />
         <Route path="/readings" element={<ReadingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
