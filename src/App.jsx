import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/components/RegistrationPage";
import LoginPage from "./pages/components/Login";
import ForgotPassword from "./pages/components/ForgotPassword";
import LandingPage from "./pages/components/LandingPage";
import ChangePassword from "./pages/components/ChangePassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset-password" element={<ChangePassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
