// import React from 'react';
import ArrowBack from "../../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";

const ForgotPassword = () => {
  return (
    <div className="flex h-screen overflow-y-hidden pt-0">
      <div className="w-1/2 bg-purple-700 flex items-center justify-center">
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
        <h2 className="text-1xl font-bold foto-mono pt-2 mb-6">Forgotten your Password?</h2>
        <p className='text-sm'>No worries! We will send reset instructions to you</p>
        <form className="">

          <div className="mb-4">
            <label className="text-xs font-bold">Email Address</label>
            <br />
            <input
              className="w-full h-8 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Enter your email address"
            ></input>
          </div>

          <div className="w-full h-8 px-4 rounded-md mb-2 bg-purple-700 cursor-pointer border-2 border-purple-700 text-white flex items-center justify-center font-bold">
            <button type="submit">Reset Password</button>
          </div>
        </form>

        <div className="flex shrink-0 items-center justify-center">
          <a className="text-sm text-purple-700 font-bold" href="#">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
