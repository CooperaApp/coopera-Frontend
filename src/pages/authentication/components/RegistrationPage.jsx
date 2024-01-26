import { useState } from "react";
import EyeIcon from "../../../assets/images/svg/EyeIcon.svg";
import ArrowBack from "../../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";
import DashboardImage from "../../../assets/images/svg/DashboardImg.svg";
// import { RegisterCooperative } from "../../../utils/api/CooperativeAPICalls";
// import BlurImage from "../../../utils/reusable-components/BlurredImage";
import {BASE_URL} from "../../../utils/api/API_BASE_URL.jsx";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    cooperativeName: "",
    rcNumber: "",
    cooperativeAddress: "",
    password: "",
    logo: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCooperativeRegistration = async () => {
    const formPayload = new FormData();
    formPayload.append("cooperativeName", formData.cooperativeName);
    formPayload.append("rcNumber", formData.rcNumber);
    formPayload.append("cooperativeEmail", formData.cooperativeAddress);
    formPayload.append("password", formData.password);
    formPayload.append("logo", formData.logo);

    try {
      const response = await fetch(`${BASE_URL}/cooperative/register`, {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        console.log("Registration successful!");
      } else {
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCooperativeRegistration()
      .then((responseData) => {
        console.log("Registration successful!");
        console.log("Response data:", responseData);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
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
          <p className="mb-5 authentication-big-font-style">
            Build your Cooperative Society using Coopera
          </p>
          <p className="authentication-small-font-style">
            With Coopera, managing your cooperative society is seamless. Elevate
            efficiency and foster financial growth
          </p>
        </div>
        <div className="mt-3 mr-3 ">
          <img
            className="relative w-96 ml-28"
            src={DashboardImage}
            style={{height: "705px", width: "489px"}}
          />
          <div className=""></div>
        </div>
      </div>

      <div className="h-full w-1/2 p-10 pt-20 overflow-y-auto">
        <img src={CooperaLogo} alt="Logo" className="h-9 w-9 mb-2 -mt-5" />
        <h2 className="mb-8 get-started-big-font-style">Get Started</h2>

        <form onSubmit={handleSubmit} className="">
          <div className="mb-5">
            <label className="sub-text-font-style">Cooperative Name</label>
            <input
              type="text"
              className="w-full h-10 px-4 text-xs"
              style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
              placeholder="Cooperative name"
              onChange={handleInputChange}
              value={formData.cooperativeName}
              name="cooperativeName"
            />
          </div>

          <div className="mb-5">
            <label className="sub-text-font-style">Company CAC No.</label>{" "}
            <br />
            <input
              type="text"
              className="w-full h-10 px-4 text-xs"
              style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
              placeholder="Company CAC No."
              onChange={handleInputChange}
              value={formData.rcNumber}
              name="rcNumber"
            />
          </div>

          <div className="mb-5">
            <label className="sub-text-font-style">Cooperative Address</label>
            <br />
            <input
              type="text"
              className="w-full h-10 px-4 text-xs"
              style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
              placeholder="Cooperative Address"
              onChange={handleInputChange}
              value={formData.cooperativeAddress}
              name="cooperativeAddress"
            ></input>
          </div>

          <div className="mb-5 relative">
            <label className="sub-text-font-style">Password</label>
            <div className="relative">
              <input
                type="text"
                style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
                className="w-full h-10 px-4 text-xs"
                placeholder="Choose a password"
                onChange={handleInputChange}
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

          <div className="">
            <label className="sub-text-font-style">Select Logo</label> <br />
            <input
              type="text"
              style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
              className="w-full h-9 mt-1 px-4 text-xs"
              onChange={handleInputChange}
              accept="image/*"
              value={formData.logo}
              name="logo"
            />
          </div>

          <div className="w-full mt-10 h-10 px-4 rounded-md mb-2 bg-[#7C39DE] cursor-pointer border-2 border-[#7C39DE] text-white flex items-center justify-center font-bold">
            <button type="submit">
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mb-2">
          <p className="account-exists-font-style">Already have an account? </p>
          <a className="account-exists-login-style" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
