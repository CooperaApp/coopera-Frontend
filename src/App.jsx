import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "../src/pages/authentication/components/RegistrationPage";
import LoginPage from "../src/pages/authentication/components/Login";
import ForgotPassword from "../src/pages/authentication/components/ForgotPassword";
import LandingPage from "../src/pages/dashboard/components/LandingPage";
import ChangePassword from "../src/pages/authentication/components/ChangePassword";
import Dashboard from "../src/pages/dashboard/components/Dashboard";
import SideBar from "../src/utils/reusable-components/SideBar";
import TopNav from "../src/utils/reusable-components/TopNav";
import DashboardBody from "../src/pages/molecule/DashboardBody";

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
          <Route path="/side-bar" element={<SideBar />} />
          <Route path="/top-nav" element={<TopNav />} />
          <Route path="/body" element={<DashboardBody />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
