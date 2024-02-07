import { useState } from "react";
import EyeIcon from "../../../assets/images/svg/EyeIcon.svg";
import ArrowBack from "../../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";
import DashboardImage from "../../../assets/images/svg/DashboardImg.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../../utils/api/API_BASE_URL.jsx";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    rcNumber: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const notifySuccess = (arg) => {
    toast.success(arg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      })
  };


  const notifyError = (arg) => {
    toast.error(arg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
   
      });
  };

  const inputConfig = [
    { label: "Company Name", placeholder: "Company name", name: "companyName" },
    {
      label: "Company CAC No.",
      placeholder: "Company CAC No.",
      name: "rcNumber",
    },
    {
      label: "Cooperative Name",
      placeholder: "Cooperative name",
      name: "name",
    },
    { label: "Email Address", placeholder: "Email Address", name: "email" },
    { label: "Password", placeholder: "Choose a password", name: "password" },
    {
      label: "Confirm Password",
      placeholder: "Enter password again",
      name: "confirmPassword",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: undefined,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let response = null;

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      response = await axios.post(`${BASE_URL}/cooperative/register`, formData);
      notifySuccess("Registration Successful, Please login!");
      navigate("/login");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach((validationError) => {
          newErrors[validationError.path] = validationError.message;
        });
        setErrors(newErrors);
      } else {
        console.log(response);
        notifyError("Invalid");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // const toggleVisibility = (inputName) => {
  //   if (inputName === "password") {
  //     setShowPassword(!showPassword);
  //   } else if (inputName === "confirmPassword") {
  //     setShowConfirmPassword(!showConfirmPassword);
  //   }
  // };

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Required"),
    rcNumber: Yup.string().required("Required"),
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

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
            style={{ height: "705px", width: "489px" }}
          />
          <div className=""></div>
        </div>
      </div>

      <div className="h-full w-1/2 p-10 pt-20 overflow-y-auto">
        <img src={CooperaLogo} alt="Logo" className="h-9 w-9 mb-2 -mt-5" />
        <h2 className="mb-8 get-started-big-font-style">Get Started</h2>

        <form onSubmit={handleFormSubmit} className="">
          {inputConfig.map((input) => (
            <div className="mb-5" key={input.name}>
              <label className="sub-text-font-style">{input.label}</label>
              <div className="relative">
                <input
                  type={
                    input.name.includes("password")
                      ? input.name === "password"
                        ? showPassword
                          ? "text"
                          : "password"
                        : showConfirmPassword
                          ? "text"
                          : "password"
                      : "text"
                  }
                  className="w-full h-10 px-4 text-xs"
                  style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
                  placeholder={input.placeholder}
                  onChange={handleInputChange}
                  value={formData[input.name]}
                  name={input.name}
                />

                {input.name.includes("password") && (
                  <div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer appearance-none"
                    onClick={() => togglePasswordVisibility(input.name)}
                  >
                    <img src={EyeIcon} alt="Eye Icon" className="h-4 w-4" />
                  </div>
                )}

                {input.name.includes("confirmPassword") && (
                  <div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer appearance-none"
                    onClick={() => toggleConfirmPasswordVisibility(input.name)}
                  >
                    <img src={EyeIcon} alt="Eye Icon" className="h-4 w-4" />
                  </div>
                )}
              </div>
              {errors[input.name] && (
                <div className="text-red-500 text-xs mt-1">
                  {errors[input.name]}
                </div>
              )}
            </div>
          ))}

          <div className="w-full mt-10 h-10 px-4 rounded-md hover:bg-purple-500 hover:border-purple-500 mb-2 bg-[#7C39DE] cursor-pointer border-2 border-[#7C39DE] text-white flex items-center justify-center font-bold">
            <button
              type="submit"
              className="hover:bg-purple-500 cursor-pointer"
            >
              Register
            </button>
            <ToastContainer/>
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
