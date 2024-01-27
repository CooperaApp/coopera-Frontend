import { useState } from "react";
import EyeIcon from "../../../assets/images/svg/EyeIcon.svg";
import ArrowBack from "../../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";
import DashboardImage from "../../../assets/images/svg/DashboardImg2.svg";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../../../utils/api/API_BASE_URL.jsx";
// import { LoginCooperative } from "../../../utils/api/CooperativeAPICalls";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cooperativeName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/cooperative/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/dashboard");
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="flex h-screen pt-0 overflow-hidden">
      <div className="border border-purple-100 w-1/2 bg-[#7C39DE] overflow-hidden">
        <div className="relative">
          <img
            src={ArrowBack}
            alt="Arrow Back"
            style={{
              maxWidth: "2%",
              maxHeight: "2%",
              position: "absolute",
              top: "3%",
              left: "2%",
              filter: "invert(1)",
            }}
          />
        </div>
        <div className="h-40 w-96 mt-12 ml-28 ">
          <p className="mb-5 authentication-big-font-style">Build your Cooperative Society using Coopera</p>
          <p className="authentication-small-font-style">With Coopera, managing your cooperative society is seamless. Elevate efficiency and foster financial growth</p>
        </div>
        <div className="mr-3">
          <img
            className="w-96 ml-28 -m-32"
            src={DashboardImage}
            alt="Your Image"
            style={{ height: "705px", width: "489px"}}
          />
        </div>
      </div>

      <div className="w-1/2 p-10 pt-1 mt-32">
        <img src={CooperaLogo} alt="Logo" className="h-9 w-9 mb-2 -mt-5" />
        <h2 className="welcome-back-big-font-style mb-7">Welcome back!</h2>
        <form onSubmit={handleLogin}>

          <div className="mb-5">
            <label className="sub-text-font-style">Cooperative Name</label>
            <br />
            <input
              type="text"
              className="w-full h-10 px-4 text-xs"
              style={{backgroundColor: "#F3F3F3", borderRadius: "4px"}}
              placeholder="Cooperative Name"
              onChange={handleChange}
              value={formData.cooperativeName}
              name="cooperativeName"
            ></input>
          </div>


          <div className="mb-12 relative">
            <label className="sub-text-font-style">Password</label>
            <div className="relative">
              <input
                type="password"
                style={{backgroundColor: "#F3F3F3", borderRadius: "4px"}}
                className="w-full h-10 px-4 text-xs"
                placeholder="Choose a password"
                onChange={handleChange}
                value={formData.password}
                name="password"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src={EyeIcon}
                  alt="Eye Icon"
                  className="h-4 w-4 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-10 px-4 rounded-md mb-2 bg-[#7C39DE] cursor-pointer border-2 border-[#7C39DE] text-white flex items-center justify-center font-bold">
            <button type="submit">Login</button>
          </div>
        </form>

        <div className="flex shrink-0 items-center justify-center mb-2">
          <p className="account-does-not-exist-font-style">Dont have an account? </p>
          <a className="account-does-not-exist-register-style" href="/registration">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
