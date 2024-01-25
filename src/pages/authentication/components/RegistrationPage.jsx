import EyeIcon from "../../../assets/images/svg/EyeIcon.svg";
import ArrowBack from "../../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";
import DashboardImage from "../../../assets/images/svg/DashboardImg.svg";


const RegistrationPage = () => {
  return (
    <div className="flex h-screen overflow-y-hidden pt-0">
      <div className="w-1/2 bg-[#7C39DE]">
        <div className="">
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

      <div className="w-1/2 p-8 -mt-19 pt-20">
        <img src={CooperaLogo} alt="Logo" className="h-10 w-10 -mt-6" />
        <h2 className="get-started-big-font-style">Get Started</h2>
        <form className="">
          <div className="mb-2">
            <label className="text-xs font-bold">Company Name</label> <br />
            <input
              className="w-full h-8 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Company name"
            />
          </div>

          <div className="mb-2">
            <label className="text-xs font-bold">Company CAC No</label> <br />
            <input
              className="w-full h-8 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Company name"
            />
          </div>

          <div className="mb-2">
            <label className="sub-text-font-style">Cooperative Name</label> <br />
            <input
              className="w-full h-8 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Company name"
            />
          </div>

          <div className="mb-3">
            <label className="sub-text-font-style">Company email(optional)</label>
            <br />
            <input
              className="w-full h-8 px-4 rounded-md bg-gray-300 border-2 text-xs border-gray-300"
              placeholder="Company email"
            ></input>
          </div>

          <div className="mb-3 relative">
            <label className="sub-text-font-style">Password</label>
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

          <div className="mb-8 relative">
            <label className="sub-text-font-style">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full h-8 px-4 rounded-md bg-gray-300 border-2 border-gray-300 text-xs"
                placeholder="Confirm Password"
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
            <button type="submit">Register</button>
          </div>
        </form>

        <div className="flex shrink-0 items-center justify-center">
          <p className="account-exists-font-style">Already have an account? </p>
          <a className="account-exists-login-style" href="#">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
