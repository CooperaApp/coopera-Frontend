import EmptyCircle from "../../assets/images/svg/EmptyCircle.svg";
import ArrowDown from "../../assets/images/svg/ArrowDown.svg";
import { useState } from "react";

const Compliance = () => {
  const [complianceArrow, setComplianceArrow] = useState(true);

  const [profileUpdate, setProfileUpdate] = useState(true);
  const [bankUpdate, setBankUpdate] = useState(false);
  const [loanUpdate, setLoanUpdate] = useState(false);

  const toggleComplianceArrow = () => {
    setComplianceArrow((previousState) => !previousState);
  };

  const toggleUpdateProfile = () => {
    setProfileUpdate((previousState) => !previousState);
  };

  const toggleBankProfile = () => {
    setBankUpdate((previousState) => !previousState);
  };

  const toggleLoanProfile = () => {
    setLoanUpdate((previousState) => !previousState);
  };

  return (
    <div className="container">
      <div className="first-container flex flex-row justify-between mr-3">
        <div>
          <p className="get-started font-semibold text-lg">Get Started Guide</p>
          <p className="text">Use this personalized guide to get started</p>
        </div>

        <div className="progress-bar flex flex-row w-64 justify-between">
          <div className="w-56">
            <p className="text ml-14">1 of 3 tasks completed</p>
            <div className="w-full bg-[#9EE1C2] h-1 rounded-md">{}</div>
          </div>

          <div className="cursor-pointer" onClick={toggleComplianceArrow}>
            <img src={ArrowDown} alt="" id="arrow" />
          </div>
        </div>
      </div>
      <br />

      {complianceArrow ? (
        <div className="second-container mr-3 -mt-3">
          <div>
            <div
              className="update-profile p-3 flex flex-row cursor-pointer"
              onClick={toggleUpdateProfile}
            >
              <img src={EmptyCircle} alt="Image loading" className="w-6" />
              <div>
                <p className="ml-7 font-semibold text-lg">Update Profile</p>

              </div>
            </div>

            {profileUpdate ? (
              <div className="update-profile-expanded -mt-5">
                <p className="ml-16 sub-title">Update your cooperative profile</p>
                <button className="mt-5 w-48 h-10 cursor-pointer rounded-md ml-16 bg-[#7838D6] text-white font-bold">
                  Update Profile
                </button>
              </div>
            ) : (
              ""
            )}
          </div>

          <br />

          <div>
            <div
              className="update-bank-details p-3 flex flex-row cursor-pointer -mt-3"
              onClick={toggleBankProfile}
            >
              <img src={EmptyCircle} alt="Image loading" className="w-6" />
              <div>
                <p className="ml-7 font-semibold text-lg">
                  Update your bank details
                </p>
              </div>
            </div>

            {bankUpdate ? (
              <div className="update-profile-expanded -mt-5">
                <p className="ml-16 sub-title">Update bank information</p>
                <button className="mt-5 w-48 h-10 cursor-pointer rounded-md ml-16 bg-[#7838D6] text-white font-bold">
                  Update Bank Details
                </button>
              </div>
            ) : (
              ""
            )}
          </div>

          <br />

          <div>
            <div
              className="update-loan-settings p-3 flex flex-row cursor-pointer -mt-3"
              onClick={toggleLoanProfile}
            >
              <img src={EmptyCircle} alt="Image loading" className="w-6" />
              <div>
                <p className="ml-7 font-semibold text-lg">
                  Update your loan settings
                </p>
              </div>
            </div>

            {loanUpdate ? (
              <div className="update-profile-expanded -mt-5">
                <p className="ml-16 sub-title">Update loan information</p>
                <button className="mt-5 w-48 h-10 cursor-pointer rounded-md ml-16 bg-[#7838D6] text-white font-bold">
                  Update Loan Settings
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Compliance;
