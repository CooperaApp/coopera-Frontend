import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "../src/pages/Authentication/registration/RegistrationPage";
import LoginPage from "../src/pages/Authorization/login/Login";
import ForgotPassword from "../src/pages/Authorization/password/ForgotPassword";
import LandingPage from "./pages/components/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
