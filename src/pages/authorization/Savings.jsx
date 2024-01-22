import TopNav from "../../utils/reusable-components/TopNav";
import SideBar from "../../utils/reusable-components/SideBar";
import Table from "../tables/Table";
import GreenArrow from "../../assets/images/svg/Green-Arrow.svg";
import { Column } from "@ant-design/plots";
import Flower from "../../assets/images/svg/SavingsFlower.svg";
import FlowerTwo from "../../assets/images/svg/SavingsFlower2.svg";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import CustomDatePicker from "../molecule/CustomDatePicker";
import Filter from "../../assets/images/svg/Filter.svg";
import { LuSearch } from "react-icons/lu";

const Savings = () => {
  const data = [
    { year: "Jan", value: 3 },
    { year: "Feb", value: 4 },
    { year: "Mar", value: 3.5 },
    { year: "Apr", value: 5 },
    { year: "May", value: 4.9 },
    { year: "June", value: 6 },
    { year: "July", value: 7 },
    { year: "Aug", value: 9 },
    { year: "Sep", value: 13 },
    { year: "Oct", value: 13 },
    { year: "Nov", value: 13 },
    { year: "Dec", value: 13 },
  ];
  const config = {
    data,
    xField: "year",
    yField: "value",
    color: () => "#7C39DE",
    style: {
      fill: "#7C39DE",
      stroke: "#7C39DE",
      lineWidth: 0,
    },
    height: 250,
    width: 900,
  };

  return (
    <div
      className="flex flex-row bg-white-100 overflow-x-hidden"
      style={{ backgroundColor: "#F8F8F9" }}
    >
      <div>
        <SideBar />
      </div>

      <div className="w-full h-full">
        <TopNav />
        <div className=" flex justify-between mx-4 mt-2 mb-2">
          <div className="dashboard-header">Savings</div>

          <div className="flex gap-2">
            <div className="">
              <button className="bg-[#7C39DE] rounded-md mt-1 w-28 h-6 text-xs text-[#FFFFFF]">
                Add Savings +
              </button>
            </div>
            <div>
              <CustomDatePicker />
            </div>
          </div>
        </div>

        <div className="mb-10 h-60 ml-4 mr-4 mb-7 flex bg-[#FFFFFF] rounded-lg relative">
          <div className="absolute bottom-0 left-0">
            <img src={Flower} alt="Flower One" />
          </div>

          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <p className="total-savings font-semibold text-xl mb-3">
              Total Savings
            </p>
            <p className="total-savings-amount  mb-4">#1,545,607.00</p>

            <div className="flex mb-5">
              <div
                className="flex rounded h-full w-20"
                style={{ backgroundColor: "#E7F8F0" }}
              >
                <img src={GreenArrow} alt="Green Arrow" />
                <p
                  className="percentage-figure pl-2 mt-0.5"
                  style={{ color: "#12B76A" }}
                >
                  17%
                </p>
              </div>
              <div className="flex items-center ml-3">
                <div className="border flex h-6 rounded-sm w-30">
                  <p className="previous-month-styling ml-2">
                    vs previous month
                  </p>
                  <img
                    src={ArrowOptions}
                    alt="Arrow Options"
                    className="w-4 h-4 ml-1 mt-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0">
            <img src={FlowerTwo} alt="Flower Two" />
          </div>
        </div>

        <div className="rounded-lg bg-[#FFFFFF] h-80 mb-7 ml-4 mr-5 border p-5">
          <div className="flex justify-between mb-4">
            <p className="heading">Savings</p>
            <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
              <p className="previous-month-styling ml-2">Monthly</p>
              <img
                src={ArrowOptions}
                alt="No Img"
                className="w-4 h-4 ml-1 mt-0"
              />
            </div>
          </div>
          <Column {...config} />
        </div>

        <div className="border p-5 bg-white ml-4 mt-7 rounded-md mr-4 w-12/12">
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
                <img src={Filter} alt="No Img" className="w-4 h-4 ml-2 mt-0" />
              </div>
            </div>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Savings;
