import GreenMemberIcon from "../../assets/images/svg/Green-Member-Icon.svg";
import YellowMemberIcon from "../../assets/images/svg/Yellow-Member-Icon.svg";
import RedMemberIcon from "../../assets/images/svg/Red-Member-Icon.svg";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import RedArrow from "../../assets/images/svg/Red-Arrow.svg";
import TableHeading from "../molecule/TableHeading";
import { LuSearch } from "react-icons/lu";
import TableBody from "../molecule/TableBody";

const MemberBody = () => {
  return (
    <div className="mt-1 ml-8 ">
      <div className="flex flex-shrink-0 justify-between w-5/6">
        <div className="dashboard-header">Members</div>
        <div>{/* <CalenderPicker /> */}</div>
      </div>

      <div className="flex">
        <div className="bg-white p-3 w-72 mr-8 h-40 rounded-xl ">
          <div className="h-32  p-0 ">
            <div className="p-0 flex justify-between mb-2">
              <div>
                <p className="card-title">Approved Members</p>
                <p className="mt-3 w-full card-amount">500</p>
              </div>
              <div
                className="ml-4 h-7 rounded-md items-center"
                style={{ backgroundColor: "#E7F8F0" }}
              >
                <img src={GreenMemberIcon} alt="No Img" />
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

        <div className="bg-white p-3 w-72 mr-8 h-40 rounded-xl ">
          <div className="h-32  p-0 ">
            <div className="p-0 flex justify-between mb-2">
              <div>
                <p className="card-title">Pending Members</p>
                <p className="mt-3 w-full card-amount">100</p>
              </div>
              <div
                className="ml-4 h-7 rounded-md items-center"
                style={{ backgroundColor: "#FEF4E6" }}
              >
                <img src={YellowMemberIcon} alt="No Img" />
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

        <div className="bg-white p-3 w-72  h-40 rounded-xl ">
          <div className="h-32  p-0 ">
            <div className="p-0 flex justify-between mb-2">
              <div>
                <p className="card-title">Exited Members</p>
                <p className="mt-3 w-full card-amount">100</p>
              </div>
              <div
                className="ml-4 h-7 rounded-md items-center"
                style={{ backgroundColor: "#FEECEB" }}
              >
                <img src={RedMemberIcon} alt="No Img" />
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

      <div className="border p-5 bg-white mt-7 rounded-md mr-4 w-12/12 ">
        <div className="mb-5 flex w-full justify-between h-8">
          <div>
            <p className="heading">Recent Activities</p>
          </div>

          <div className="border flex justify-between">
            <div className="w-full max-w-md relative flex items-center text-gray-400 focus-within:text-gray-600">
              <LuSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
              <input
                type="text"
                name="search"
                placeholder="Search members..."
                autoComplete="off"
                aria-label="Search"
                className="search-bar pr-3 pl-10 py-2 font-semibold h-8 w-40 placeholder-gray-100 text-blue rounded-sm border-none ring-2 ring-gray-100 focus:ring-gray-500 focus:ring-2"
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </div>
            <div className="border items-center justify-center flex ml-3">
              <p className="previous-month-styling ml-2">Monthly</p>
              <img
                src={ArrowOptions}
                alt="No Img"
                className="w-4 h-4 ml-1 mt-0"
              />
            </div>
          </div>
        </div>

        <TableHeading headerOne="Date" headerTwo="MemberID" headerThree="Full Name"
          headerFour="Phone Number" headerFive="Role" headerSix="Status" />
        <TableBody />
      </div>
    </div>
  );
};

export default MemberBody;
