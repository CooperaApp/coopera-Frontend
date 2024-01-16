import ArrowBack from "../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../assets/images/svg/CooperaLogo.svg";
import DashboardImage from "../../assets/images/svg/DashboardImg.svg";
import BackIcon from "../../assets/images/svg/Back-Icon.svg";

const ForgotPassword = () => {
  return (
    <div className="flex h-screen overflow-y-hidden pt-0">
      <div className="w-1/2 bg-[#7C39DE]">
        <div>
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
        <div className="h-40 w-96 mt-20 ml-20 ">
          <p className="mb-5 authentication-big-font-style">Build your Cooperative Society using Coopera</p>
          <p className="authentication-small-font-style">With Coopera, managing your cooperative society is seamless. Elevate efficiency and foster financial growth</p>
        </div>
        <div className="mt-10 ">
          <img
            className="w-96"
            src={DashboardImage}
            alt="Your Image"
            style={{ height: "705px", width: "778px"}}
          />
        </div>
      </div>

      <div className="w-1/2 p-8 mt-40">
        <img src={CooperaLogo} alt="Logo" className="h-10 w-10 -mt-6" />
        <h2 className="forgotten-password-big-font">Forgotten Password?</h2>
        <p className='forgotten-password-small-font'>No worries! We will send reset instructions to you</p>
        <form className="">

          <div className="mb-4">
            <label className="email-address-big-font">Email Address</label>
            <br />
            <input
              className="w-full h-8 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Enter your email address"
            ></input>
          </div>

          <div className="w-full h-8 px-4 rounded-md mb-2 bg-[#7C39DE] mt-12 cursor-pointer border-2 border-[#7C39DE] text-white flex items-center justify-center font-bold">
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