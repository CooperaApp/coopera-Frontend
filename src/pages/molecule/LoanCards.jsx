import RedArrow from "../../assets/images/svg/Red-Arrow.svg";
import GreenArrow from "../../assets/images/svg/Green-Arrow.svg";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";

function LoanCards() {
  return (
    <div className="flex space-x-5 mr-4 mb-7 ">
      <div className="bg-white ml-4 p-4 w-1/2 h-44 rounded-xl ">
        <div className="h-32 p-0 mt-2">
          <div className="p-0 flex justify-between mb-2">
            <div className="">
              <p className="text-xl font-semibold ml-36">Loan Disbursed</p>
              <p className="mt-3 w-full card-amount ml-40">#1,545,607.00</p>
            </div>
          </div>
          <div className="justify-between mt-4 flex h-7">
            <div
              className="flex ml-24 rounded h-full w-20"
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
            <div className="items-center justify-center h-full flex border h-4 w-30 mr-24">
              <p className="previous-month-styling ml-2">vs previous month</p>
              <img
                src={ArrowOptions}
                alt="No Img"
                className="w-4 h-4 ml-1 mt-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 w-1/2 h-44 rounded-xl ">
        <div className="h-32  p-0 mt-2">
          <div className="p-0 flex justify-between mb-2">
            <div>
              <p className="text-xl font-semibold ml-40">Loan Repaid</p>
              <p className="mt-3 w-full card-amount ml-36">#405,607.00</p>
            </div>
          </div>
          <div className="justify-between mt-4 flex h-7">
            <div
              className="flex ml-24 rounded h-full w-20"
              style={{ backgroundColor: "#FEECEB" }}
            >
              <img src={RedArrow} alt="No Img" className="" />
              <p
                className="percentage-figure pl-2 mt-0.5"
                style={{ color: "#F04438" }}
              >
                65%
              </p>
            </div>
            <div className="items-center justify-center h-full flex border h-4 w-30 mr-20">
              <p className="previous-month-styling ml-2">vs previous month</p>
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
  );
}

export default LoanCards;

{
  /* <div>
      <div className="flex">
        <div className="bg-white p-3 w-2/2 h-36 rounded-xl ml-3 mr-8 pl-14  items-center">
          <div className="h-32  p-0 ">
            <div className="p-0 flex justify-between mb-2">
              <div>
                <p className="card-title ml-40">Loan Disbursed</p>
                <p className="mt-3 w-full card-amount ml-32">#1,545,607.00</p>
              </div>
              <div
                className="ml-4 h-7 rounded-md items-center"
                style={{ backgroundColor: "#F2EBFB" }}
              >

              </div>
            </div>
            <div className="justify-between mt-4 flex h-7 ">
              <div
                className="flex rounded h-full w-20 ml-24 mr-4"
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
              <div className="items-center justify-center h-full flex border h-4 w-30 mr-32">
                <p className="previous-month-styling ml-2">vs previous month</p>
                <img
                  src={ArrowOptions}
                  alt="No Img"
                  className="w-4 h-4 ml-1 mt-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-2/2 h-36 p-3 rounded-xl pl-14  ml-8">
          <div className="h-32  p-0 ">
            <div className="p-0 flex justify-between mb-2">
              <div>
                <p className="card-title ml-40">Loan Repaid</p>
                <p className="mt-3 w-full card-amount ml-32">#1,545,607.00</p>
              </div>
              <div
                className="ml-4 h-7 rounded-md items-center"
                style={{ backgroundColor: "#EBF5FF" }}
              >

              </div>
            </div>
            <div className="justify-between mt-4 flex h-7">
              <div
                className="flex rounded h-full w-20 ml-24 mr-4"
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
              <div className="items-center justify-center h-full flex border h-4 w-30 mr-32">
                <p className="previous-month-styling ml-2">vs previous month</p>
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
    </div> */
}
