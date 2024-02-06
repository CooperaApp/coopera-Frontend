import { useState } from "react";
import ArrowBack from "../../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";
import DashboardImage from "../../../assets/images/svg/DashboardImg2.svg";
import BackIcon from  "../../../assets/images/svg/Back-Icon.svg";
import { ForgetPassword } from "../../../utils/api/CooperativeAPICalls";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
  
  const navigate = useNavigate();

  let initialState = {
    email: "",
  };

  const [data, setData] = useState(initialState);

  function handleChange (event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  const forgotPassword = async () => {
    try {
      const res = ForgetPassword(initialState.email);
    toast.success("Email sent, please check you mail");
    navigate("/reset-password")
    } catch (error) {
    toast.error("reset.password.failed");
    }
  }

  return (
    <div className="flex h-screen overflow-y-hidden pt-0">
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

        <div className="mt-10 transition-all duration-300 rounded-lg blur-sm hover:blur-none ">
          <img
            className="w-96 ml-28 -m-32"
            src={DashboardImage}
            alt="Your Image"
            style={{ height: "705px", width: "489px"}}
          />
        </div>
      </div>

      <div className="w-1/2 p-10 mt-20">
        <img src={CooperaLogo} alt="Logo" className="h-10 w-10 -mt-6" />
        <h2 className="forgotten-password-big-font">Forgotten Password?</h2>
        <p className='forgotten-password-small-font'>No worries! We will send reset instructions to you</p>
        <form className="" onSubmit={forgotPassword}>

          <div className="mb-5">
            <label className="sub-text-font-style">Cooperative Email</label>
            <br />
            <input
              type="email"
              className="w-full h-10 px-4 text-xs"
              style={{backgroundColor: "#F3F3F3", borderRadius: "4px"}}
              placeholder="Cooperative Email"
              onChange={handleChange}
              value={data.email}
            ></input>
          </div>

          <div className="w-full h-10 px-4 rounded-md mb-2 bg-[#7C39DE] mt-12 cursor-pointer border-2 border-[#7C39DE] text-white flex items-center justify-center font-bold">
            <button className="font-semibold font-20 font-sans " type="submit">Reset Password</button>
          </div>
        </form>

        <div className="flex shrink-0 items-center justify-center">
          <a className="text-sm text-[#7C39DE] flex font-sans whitespace-break-spaces font-bold" href="#">
            <img src={BackIcon}/> Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;