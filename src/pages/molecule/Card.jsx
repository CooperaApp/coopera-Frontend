import AccountBalanceIcon from "../../assets/images/svg/Card-Icon-1.svg";
import TotalSavingsIcon from "../../assets/images/svg/Card-Icon-2.svg";
import LoanDisbursed from "../../assets/images/svg/LoanDisbursedIcon.svg";
import LoanRepaid from "../../assets/images/svg/LoanRepaidIcon.svg";
import RedArrow from "../../assets/images/svg/Red-Arrow.svg";
import GreenArrow from "../../assets/images/svg/Green-Arrow.svg";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";

const Card = () => {
  return (
    <div className="mr-3 h-80 flex flex-row flex-shrink-0">
      <div className="">
        <div className="flex">
          <div className="bg-white p-3 w-64 h-36 rounded-xl ">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Account Balance</p>
                  <p className="mt-3 w-full card-amount">#1,545,607.00</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#EBF5FF" }}
                >
                  <img src={AccountBalanceIcon} alt="No Img" />
                </div>
              </div>
              <div className="justify-between mt-4 flex h-7">
                <div
                  className="flex rounded h-full w-20"
                  style={{ backgroundColor: "#FEECEB" }}
                >
                  <img src={RedArrow} alt="No Img" className="" />
                  <p
                    className="percentage-figure pl-2 mt-0.5"
                    style={{ color: "#F04438" }}
                  >
                    17%
                  </p>
                </div>
                <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                  <p className="previous-month-styling ml-2">
                    vs previous month
                  </p>
                  <img
                    src={ArrowOptions}
                    alt="No Img"
                    className="w-4 h-4 ml-1 mt-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 w-64 h-36 rounded-xl ml-3">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Total Savings</p>
                  <p className="mt-3 w-full card-amount">#1,545,607.00</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#F2EBFB" }}
                >
                  <img src={TotalSavingsIcon} alt="No Img" />
                </div>
              </div>
              <div className="justify-between mt-4 flex h-7">
                <div
                  className="flex rounded h-full w-20"
                  style={{ backgroundColor: "#E7F8F0" }}
                >
                  <img src={GreenArrow} alt="No Img" className="" />
                  <p
                    className="percentage-figure pl-2 mt-0.5"
                    style={{ color: "#12B76A" }}
                  >
                    17%
                  </p>
                </div>
                <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                  <p className="previous-month-styling ml-2">
                    vs previous month
                  </p>
                  <img
                    src={ArrowOptions}
                    alt="No Img"
                    className="w-4 h-4 ml-1 mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-7">
          <div className="bg-white p-3 w-64 h-36 rounded-xl ">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Loan Disbursed</p>
                  <p className="mt-3 w-full card-amount">#1,545,607.00</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#E7F9F4" }}
                >
                  <img src={LoanDisbursed} alt="No Img" />
                </div>
              </div>
              <div className="justify-between mt-4 flex h-7">
                <div
                  className="flex rounded h-full w-20"
                  style={{ backgroundColor: "#E7F8F0" }}
                >
                  <img src={GreenArrow} alt="No Img" className="" />
                  <p
                    className="percentage-figure pl-2 mt-0.5"
                    style={{ color: "#12B76A" }}
                  >
                    17%
                  </p>
                </div>
                <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                  <p className="previous-month-styling ml-2">
                    vs previous month
                  </p>
                  <img
                    src={ArrowOptions}
                    alt="No Img"
                    className="w-4 h-4 ml-1 mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 w-64 h-36 rounded-xl ml-3">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Loan Repaid</p>
                  <p className="mt-3 w-full card-amount">#1,545,607.00</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#FFE8DE" }}
                >
                  <img src={LoanRepaid} alt="No Img" />
                </div>
              </div>
              <div className="justify-between mt-4 flex h-7">
                <div
                  className="flex rounded h-full w-20"
                  style={{ backgroundColor: "#FEECEB" }}
                >
                  <img src={RedArrow} alt="No Img" className="" />
                  <p
                    className="percentage-figure pl-2 mt-0.5"
                    style={{ color: "#F04438" }}
                  >
                    17%
                  </p>
                </div>
                <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                  <p className="previous-month-styling ml-2">
                    vs previous month
                  </p>
                  <img
                    src={ArrowOptions}
                    alt="No Img"
                    className="w-4 h-4 ml-1 mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
