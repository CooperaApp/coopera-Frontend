import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import Card from "./Card";
import PieChart from "./PieChart";
import { LuSearch } from "react-icons/lu";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
} from "chart.js";

import Table from "./Table";
import Statistics from "./Statistics";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
);

const DashboardBody = () => {
  return (
    <div className="h-full mt-1 ml-4 overflow-y-hidden">
      <div className="flex flex-shrink-0 justify-between w-5/6">
        <div className="dashboard-header">Dashboard Overview</div>
        <div>{/* <CalenderPicker /> */}</div>
      </div>

      <div className="w-full h-80 flex flex-row flex-shrink-0">
        <Card />
        <PieChart />
      </div>

      <Statistics />

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

        <Table />
      </div>
    </div>
  );
};

export default DashboardBody;
