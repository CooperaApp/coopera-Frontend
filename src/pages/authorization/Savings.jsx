import TopNav from "../../utils/reusable-components/TopNav";
import SideBar from "../../utils/reusable-components/SideBar";
import Table from "../molecule/Table";
import GreenArrow from "../../assets/images/svg/Green-Arrow.svg";
import CooperaDatePicker from "../../utils/reusable-components/CooperaDatePicker";
import { Column } from "@ant-design/plots";

import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
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
    color: ({ type }) => {
      return "#7C39DE";
    },
  };

  return (
    <div
      className="flex flex-row bg-white-100 overflow-x-auto"
      style={{ backgroundColor: "#F8F8F9" }}
    >
      <div>
        <SideBar />
      </div>

      <div className="w-full h-full">
        <TopNav />
        <div className=" flex justify-between mx-4 mt-5 mb-5">
          <div className="text-1xl font-bold">Savings</div>

          <div className="flex gap-3">
            <div>
              <button className="bg-[#7C39DE] mt-2 px-3 h-7 rounded-md text-sm text-[#FFFFFF] font-light">
                Add Savings +
              </button>
            </div>
            <div>
              <CooperaDatePicker />
            </div>
          </div>
        </div>
        <div className="mb-10 ">
          <p className="card-title pl-[400px]">Total Savings</p>
          <p className="mt-3 w-full card-amount pl-[350px] mb-4">
            #1,545,607.00
          </p>

          <div className=" flex pl-[350px] mb-5">
            <div
              className="flex rounded h-full w-20"
              style={{ backgroundColor: "#E7F8F0" }}
            >
              <img src={GreenArrow} alt="No Img" />
              <p
                className="percentage-figure pl-2 mt-0.5"
                style={{ color: "#12B76A" }}
              >
                17%
              </p>
            </div>
            <div className="  h-full flex border h-4 w-30 ml-3">
              <p className="previous-month-styling ml-2">vs previous month</p>
              <img
                src={ArrowOptions}
                alt="No Img"
                className="w-4 h-4 ml-1 mt-0"
              />
            </div>
          </div>
        </div>
        <Column {...config} />;
        <Table />
      </div>
    </div>
  );
};

export default Savings;
