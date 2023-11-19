import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from "../src/component/landing-page/landing-page";
import RegistrationPage from '../src/pages/Authentication/registration/RegistrationPage';
// import LoginPage from "../src/component/login/Login";
// import ForgotPassword from "./component/forgot-password/forgot-password";
// import ChangePassword from "./component/change-password/Change-Password";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          {/* <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/change-password" element={<ChangePassword />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
