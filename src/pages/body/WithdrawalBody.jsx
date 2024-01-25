import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import RedArrow from "../../assets/images/svg/Red-Arrow.svg";
import WithdrawalHistory from "../tables/WithdrawalHistory";
import { LuSearch } from "react-icons/lu";
import Filter from "../../assets/images/svg/Filter.svg";


const WithdrawalBody = () => {
  return (
    <div className="mt-1 ml-4">
      <div className="flex mt-2 mb-2 flex-shrink-0 justify-between w-full w-5/6">
        <div className="dashboard-header">Withdrawal</div>
        <div className="">
          <button className="bg-[#7C39DE] rounded-md mt-1 w-28 mr-6 h-6 text-xs text-[#FFFFFF]">
              Add Withdrawal +
          </button>
        </div>
      </div>

      <div className="flex space-x-5 mr-5 ">
        <div className="bg-white  p-4 w-1/2 h-44 rounded-xl ">
          <div className="h-32 p-0 ">
            <div className="p-0 flex justify-between mb-2">
              <div className="">
                <p className="text-xl font-semibold ml-36">Total Withdrawal</p>
                <p className="mt-3 w-full card-amount ml-48">78</p>
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
          <div className="h-32  p-0 ">
            <div className="p-0 flex justify-between mb-2">
              <div>
                <p className="text-xl font-semibold ml-28">Total Withdrawal Value</p>
                <p className="mt-3 w-full card-amount ml-36">#585,607.00</p>
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

      <div className="border p-5 bg-white mt-5 rounded-md mr-4 w-12/12 ">
        <div className="mb-5 flex w-full justify-between h-8">
          <div>
            <p className="heading">Recent Activities</p>
          </div>

          <div className="flex  justify-between">
            <div className=" relative flex items-center text-gray-200 focus-within:text-gray-400">
              <LuSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
              <input
                type="text"
                name="search"
                placeholder="       Search members..."
                autoComplete="off"
                aria-label="Search"
                className="search-bar  pr-3 pl-10 py-2 font-normal text-sm h-8 w-44 placeholder-gray-600  rounded-sm border-none ring-2 ring-gray-100 focus:ring-gray-500 focus:ring-2"
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </div>
            <div className="border items-center justify-center flex ml-3 h-7 w-20 mt-0.5 rounded-sm">
              <p className="font-normal text-sm ">Filter</p>
              <img
                src={Filter}
                alt="No Img"
                className="w-4 h-4 ml-2 mt-0"
              />

            </div>
          </div>
        </div>

        <WithdrawalHistory />
      </div>

    </div>
  );
};

export default WithdrawalBody;
