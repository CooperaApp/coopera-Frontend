import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "../src/pages/authentication/components/RegistrationPage";
import LoginPage from "../src/pages/authentication/components/Login";
import ForgotPassword from "../src/pages/authentication/components/ForgotPassword";
import LandingPage from "./pages/authentication/components/LandingPage";
import ChangePassword from "../src/pages/authentication/components/ChangePassword";
import Dashboard from "./pages/authorization/Dashboard";
import Member from "../src/pages/authorization/Member";
import Savings from "../src/pages/authorization/Savings";
import HiredPurchase from "./pages/authorization/HiredPurchase.jsx";
import Withdrawal from "./pages/authorization/Withdrawal.jsx";
import Loan from "./pages/authorization/Loan";
import Settings from "./pages/body/Settings.jsx";

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
          <Route path="/members" element={<Member />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/hired-purchase" element={<HiredPurchase />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/loan" element={<Loan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
