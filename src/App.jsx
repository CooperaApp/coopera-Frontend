import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/components/RegistrationPage";
import LoginPage from "./pages/components/Login";
import ForgotPassword from "./pages/components/ForgotPassword";
import LandingPage from "./pages/components/LandingPage";
import ChangePassword from "./pages/components/ChangePassword";
import Dashboard from "./pages/components/Dashboard";
import Member from "./pages/components/Member";
import Savings from "./pages/components/Savings";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ChangePassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/member" element={<Member />} />
          <Route path="/savings" element={<Savings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
