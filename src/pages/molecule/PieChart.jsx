import { useState } from "react";
import { options, data } from "../../utils/constant/ChartData";
import { Doughnut } from "react-chartjs-2";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import Month from "./Month";

const PieChart = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="border bg-white rounded-md w-6/12 h-full mr-4">
      <div className="p-3 -mt-2">
        <div className="justify-between pt-2 flex flex-row">
          <p className="cooperative-overview">Cooperative Overview</p>
          <div className="border flex relative">
            <p className="previous-month-styling ml-2">Monthly</p>
            <img
              src={ArrowOptions}
              alt="Dropdown Trigger"
              className="w-4 h-4 ml-1 mt-1 cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown && (
              <div className="absolute w-20 mt-6 right-0 border bg-white rounded-md max-h-48 overflow-y-auto">
                <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                  <Month />
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="ml-6 w-68 h-56">
          <Doughnut data={data} options={options} />
        </div>

        <div className="">
          <div className="flex space-x-4">
            <div className="flex">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#0079FF" }}
              ></div>
              <span className="pie-chart-labels">Loans</span>
            </div>

            <div className="flex">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#FF6A24" }}
              ></div>
              <span className="pie-chart-labels">Savings</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#0EBE8D" }}
              ></div>
              <span className="pie-chart-labels">Hire Purchase</span>
            </div>

            <div className="flex">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#7838D6" }}
              ></div>
              <span className="pie-chart-labels">Withdraw</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;

