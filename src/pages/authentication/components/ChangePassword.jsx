import { useState } from "react";
import EyeIcon from "../../../assets/images/svg/EyeIcon.svg";
import ArrowBack from "../../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";
import DashboardImage from "../../../assets/images/svg/DashboardImg2.svg";
import { ResetPassword }  from "../../../utils/api/CooperativeAPICalls";

const ChangePassword = () => {

  let initialState = {
    newPassword: "",
    confirmPassword: "",
  };

  const [data, setData] = useState(initialState);

  function handleChange (event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  const resetPassword = async () => {
    try {
      const res = ResetPassword(data); 
    toast.success("Password reset was successful, please login");
    navigate("/login")
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
        <div className="mt-3 mr-3">
          <img
            className="w-96 ml-28 -m-32"
            src={DashboardImage}
            alt="Your Image"
            style={{ height: "705px", width: "489px"}}
          />
        </div>
      </div>

      <div className="w-1/2 p-8 mt-40">
        <img src={CooperaLogo} alt="Logo" className="h-8 w-8 -mt-6" />
        <h2 className="text-1xl font-bold foto-mono pt-2 mb-6">Now reset your password!</h2>
        <form className="" onSubmit={resetPassword}>

          <div className="mb-12 relative">
            <label className="sub-text-font-style">New Password</label>
            <div className="relative">
              <input
                type="text"
                style={{backgroundColor: "#F3F3F3", borderRadius: "4px"}}
                className="w-full h-10 px-4 text-xs"
                placeholder="Enter new password"
                onChange={handleChange}
                value={data.newPassword}
                name="newPassword"
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

          <div className="mb-12 relative">
            <label className="sub-text-font-style">Confirm New Password</label>
            <div className="relative">
              <input
                type="text"
                style={{backgroundColor: "#F3F3F3", borderRadius: "4px"}}
                className="w-full h-10 px-4 text-xs"
                placeholder="Re-enter new Password"
                onChange={handleChange}
                value={data.confirmPassword}
                name="confirmPassword"
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
            <button type="submit">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
