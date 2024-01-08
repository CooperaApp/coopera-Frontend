import { options, data } from "../../utils/constant/ChartData";
import { Doughnut } from "react-chartjs-2";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";

const PieChart = () => {
  return (
    <div className="border bg-white rounded-md w-5/12 h-full mr-4">
      <div className="p-3">
        <div className="justify-between pt-2 flex flex-row">
          <p className="cooperative-overview">Cooperative Overview</p>
          <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
            <p className="previous-month-styling ml-2">Monthly</p>
            <img
              src={ArrowOptions}
              alt="No Img"
              className="w-4 h-4 ml-1 mt-0"
            />
          </div>
        </div>

        <div className="ml-6 mt-1 w-64 h-48">
          <Doughnut data={data} options={options} />
        </div>

        <div className="mt-6">
          <div className="flex space-x-4">
            <div className="flex ">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#0079FF" }}
              ></div>
              <span className="pie-chart-labels">Loans</span>
            </div>

            <div className="flex ">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#FF6A24" }}
              ></div>
              <span className="pie-chart-labels">Savings</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex ">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#0EBE8D" }}
              ></div>
              <span className="pie-chart-labels">Hire Purchase</span>
            </div>

            <div className="flex ">
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
