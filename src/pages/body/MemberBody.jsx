import GreenMemberIcon from "../../assets/images/svg/Green-Member-Icon.svg";
import YellowMemberIcon from "../../assets/images/svg/Yellow-Member-Icon.svg";
import RedMemberIcon from "../../assets/images/svg/Red-Member-Icon.svg";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import RedArrow from "../../assets/images/svg/Red-Arrow.svg";
import { LuSearch } from "react-icons/lu";
import Filter from "../../assets/images/svg/Filter.svg";
import MemberHistory from "../tables/MemberHistory";


const MemberBody = () => {
  return (
    <div className="mt-1 ml-4">
      <div className="flex mt-2 mb-2 flex-shrink-0 justify-between w-full w-5/6">
        <div className="dashboard-header">Members</div>
        <div className="">
          <button className="bg-[#7C39DE] rounded-md mt-1 w-28 mr-6 h-6 text-xs text-[#FFFFFF]">
              Add Member +
          </button>
        </div>
      </div>

      <div className="flex space-x-5 mr-5 ">
        <div className="bg-white p-4 w-1/3 h-40 rounded-xl ">
          <div className="h-32  p-0 ">
            <div className="p-0 flex justify-between mb-2">
              <div>
                <p className="text-xl font-semibold">Approved Members</p>
                <p className="mt-3 w-full card-amount">500</p>
              </div>
              <div
                className="ml-5 h-7 w-7 rounded-md items-center"
                style={{ backgroundColor: "#E7F8F0" }}
              >
                <img src={GreenMemberIcon} alt="No Img" className="w-6 h-6 ml-0.5 mt-0.5"/>
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

        <div className="bg-white p-4 w-1/3 h-40 rounded-xl ">
          <div className="h-32  p-0 ">
            <div className="p-0 flex justify-between mb-2">
              <div>
                <p className="text-xl font-semibold">Pending Members</p>
                <p className="mt-3 w-full card-amount">100</p>
              </div>
              <div
                className="ml-5 h-7 w-7 rounded-md items-center"
                style={{ backgroundColor: "#FEF4E6" }}
              >
                <img src={YellowMemberIcon} alt="No Img" className="w-6 h-6 ml-0.5 mt-0.5"/>
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
                  0.7%
                </p>
              </div>
              <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
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

        <div className="bg-white p-4 w-1/3 h-40 rounded-xl ">
          <div className="h-32  p-0 ">
            <div className="p-0 flex justify-between mb-2">
              <div>
                <p className="text-xl font-semibold">Exited Members</p>
                <p className="mt-3 w-full card-amount">100</p>
              </div>
              <div
                className="ml-5 h-7 w-7 rounded-md items-center"
                style={{ backgroundColor: "#FEECEB" }}
              >
                <img src={RedMemberIcon} alt="No Img" className="w-6 h-6 ml-0.5 mt-0.5"/>
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

        <MemberHistory />
      </div>
    </div>
  );
};

export default MemberBody;
