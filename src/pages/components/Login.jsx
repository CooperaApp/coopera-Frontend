// import React from 'react';
import EyeIcon from "../../assets/images/svg/EyeIcon.svg";
import ArrowBack from "../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../assets/images/svg/CooperaLogo.svg";

const Login = () => {
  return (
    <div className="flex h-screen overflow-y-hidden pt-0">
      <div className="w-1/2 bg-[#7C39DE] flex items-center justify-center">
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
        {/* <img
          src={Image}
          alt="Your Image"
          className="object-center"
          style={{ maxHeight: '80%', maxWidth: '80%' }}
        /> */}
      </div>

      <div className="w-1/2 p-8 mt-40">
        <img src={CooperaLogo} alt="Logo" className="h-8 w-8 -mt-6" />
        <h2 className="text-1xl font-bold foto-mono pt-2 mb-6">Welcome back!</h2>
        <form className="">

          <div className="mb-4">
            <label className="text-xs font-bold">Company email(optional)</label>
            <br />
            <input
              className="w-full h-8 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Company email"
            ></input>
          </div>

          <div className="mb-9 relative">
            <label className="text-xs font-bold block mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full h-8 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
                placeholder="Password"
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

          <div className="w-full h-8 px-4 rounded-md mb-2 bg-[#7C39DE] cursor-pointer border-2 border-[#7C39DE] text-white flex items-center justify-center font-bold">
            <button type="submit">Login</button>
          </div>
        </form>

        <div className="flex shrink-0 items-center justify-center">
          <p className="text-sm">Dont have an account? </p>
          <a className="text-sm text-[#7C39DE] font-bold" href="#">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
