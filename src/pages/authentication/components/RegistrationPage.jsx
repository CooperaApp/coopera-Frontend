import { useState } from "react";
import EyeIcon from "../../../assets/images/svg/EyeIcon.svg";
import ArrowBack from "../../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";
import DashboardImage from "../../../assets/images/svg/DashboardImg.svg";
// import { RegisterCooperative } from "../../../utils/api/CooperativeAPICalls";
// import BlurImage from "../../../utils/reusable-components/BlurredImage";

const RegistrationPage = () => {
  let initialState = {
    name: "",
    logo: "",
    companyName: "",
    rcNumber: "",
    address: "",
  };

  const [data, setData] = useState(initialState);

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function cooperativeRegistration() {
    // const res = new RegisterCooperative(payload);
  }

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
        <div className="mt-3 mr-3">
          <img
            className="w-96 ml-28"
            src={DashboardImage}
            alt="Your Image"
            style={{ height: "705px", width: "489px"}}
          />
        </div>
      </div>

      <div className="h-full w-1/2 p-10 pt-20 overflow-y-auto">
        <img src={CooperaLogo} alt="Logo" className="h-9 w-9 mb-2 -mt-5" />
        <h2 className="mb-8 get-started-big-font-style">Get Started</h2>

        <form className="">
          <div className="mb-5">
            <label className="sub-text-font-style">Cooperative Name</label>
            <input
              type="text"
              className="w-full h-10 px-4 text-xs"
              style={{backgroundColor: "#F3F3F3", borderRadius: "4px"}}
              placeholder="Cooperative name"
              onChange={handleChange}
              value={data.name}
            />
          </div>


          <div className="mb-5">
            <label className="sub-text-font-style">Company CAC No.</label> <br />
            <input
              type="text"
              className="w-full h-10 px-4 text-xs"
              style={{backgroundColor: "#F3F3F3", borderRadius: "4px"}}
              placeholder="Company CAC No."
              onChange={handleChange}
              value={data.companyName}
            />
          </div>


          <div className="mb-5">
            <label className="sub-text-font-style">Cooperative Email</label>
            <br />
            <input
              type="email"
              className="w-full h-10 px-4 text-xs"
              style={{backgroundColor: "#F3F3F3", borderRadius: "4px"}}
              placeholder="Cooperative Email"
              onChange={handleChange}
              value={data.rcNumber}
            ></input>
          </div>


          <div className="mb-5 relative">
            <label className="sub-text-font-style">Password</label>
            <div className="relative">
              <input
                type="text"
                style={{backgroundColor: "#F3F3F3", borderRadius: "4px"}}
                className="w-full h-10 px-4 text-xs"
                placeholder="Choose a password"
                onChange={handleChange}
                value={data.address}
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
              type="file"
              style={{backgroundColor: "#F3F3F3", borderRadius: "4px"}}
              className="w-full h-9 mt-1 px-4 text-xs"
              onChange={handleChange}
              value={data.logo}
            />
          </div>

          <div className="w-full mt-10 h-10 px-4 rounded-md mb-2 bg-[#7C39DE] cursor-pointer border-2 border-[#7C39DE] text-white flex items-center justify-center font-bold">
            <button type="submit" onClick={() => cooperativeRegistration()}>Register</button>
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
