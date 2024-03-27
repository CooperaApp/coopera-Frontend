import Month from "./Month";
import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  //   Rectangle,
  //   Cell,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
  //   Legend,
  ResponsiveContainer,
} from "recharts";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import "../../../src/styles/Tailwind.css";

// const currentMonth = "Oct";
const data = [
  {
    name: "Jan",
    repaid: 4000,
    disbursed: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    repaid: 3000,
    disbursed: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    repaid: 2000,
    disbursed: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    repaid: 2780,
    disbursed: 3908,
    amt: 2000,
  },
  {
    name: "May",
    repaid: 1890,
    disbursed: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    repaid: 2390,
    disbursed: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    repaid: 3490,
    disbursed: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    repaid: 3490,
    disbursed: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    repaid: 3490,
    disbursed: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    repaid: 3490,
    disbursed: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    repaid: 3490,
    disbursed: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    repaid: 3490,
    disbursed: 4300,
    amt: 2100,
  },
];

const dat = [
  {
    name: "Jan",
    savings: 4000,
    amt: 2400,
  },
  {
    name: "Feb",
    savings: 3000,
    amt: 2210,
  },
  {
    name: "Mar",
    savings: 2000,
    amt: 2290,
  },
  {
    name: "Apr",
    savings: 2780,
    amt: 2000,
  },
  {
    name: "May",
    savings: 1890,
    amt: 2181,
  },
  {
    name: "Jun",
    savings: 2390,
    amt: 2500,
  },
  {
    name: "Jul",
    savings: 3490,
    amt: 2100,
  },
  {
    name: "Aug",
    savings: 3490,
    amt: 2100,
  },
  {
    name: "Sep",
    savings: 3490,
    amt: 2100,
  },
  {
    name: "Oct",
    savings: 3490,
    amt: 2100,
  },
  {
    name: "Nov",
    savings: 3490,
    amt: 2100,
  },
  {
    name: "Dec",
    savings: 3490,
    amt: 2100,
  },
];


const Statistics = () => {

  const [loanChartDropDown, setLoanChartDropDown] = useState(false);
  const [savingsChartDropDown, setSavingsChartDropDown] = useState(false);

  return (
    <div>
      <div className="h-96 flex flex-shrink-0 mt-7 overview-x-hidden" id="dash-stats-box">
        <div className="border p-4 bg-white h-full rounded-md w-1/2 mr-3" id="dash-first-stat">
          <div className="justify-between flex" id="loan-stat-top-sect">
            <p className="heading" id="loan-stats-header">Loan Statistics</p>
            <div className="ml-12 flex" id="loan-text-container">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                id="loan-circle1"
                style={{ backgroundColor: "#7838D6" }}
              ></div>
              <span className="pie-chart-labels"id="loan-stats-text">Loans Disbursed</span>
              <div
                className="ml-7 w-2 h-2 rounded-full mt-2 mr-1"
                id="loan-circle2"
                style={{ backgroundColor: "#0EBE8D" }}
              ></div>
              <span className="pie-chart-labels"id="loan-stats-text">Loans Repaid</span>
            </div>
            <div className="border flex relative">
              <p className="previous-month-styling ml-2"id="loan-stats-text">Monthly</p>
              <img
                src={ArrowOptions}
                alt="Dropdown Trigger"
                className="w-4 h-4 ml-1 mt-1 cursor-pointer"
                onClick={() => setLoanChartDropDown(!loanChartDropDown)}
              />
              {loanChartDropDown && (
                <div className="absolute w-20 mt-6 right-0 border bg-white rounded-md max-h-48 overflow-y-auto">
                  <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                    <Month />
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="h-full pt-4 pb-4 " id="loan-stat-diagram">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                tick={{}}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 12,
                    fill: "#A9A9AA",
                    fontWeight: "700",
                  }}
                />
                <YAxis
                  tick={{
                    fontSize: 12,
                    fill: "#A9A9AA",
                    fontWeight: "700",
                  }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="repaid"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="disbursed" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border h-full bg-white rounded-md w-1/2 ml-1 mr-4 p-4" id="dash-second-stat">
          <div className="flex justify-between">
            <p className="heading">Savings</p>
            <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
              <p className="previous-month-styling ml-2">Monthly</p>
              <img
                src={ArrowOptions}
                alt="No Img"
                className="w-4 h-4 ml-1 mt-0 cursor-pointer"
                onClick={() => setSavingsChartDropDown(!savingsChartDropDown)}
              />
              {savingsChartDropDown && (
                <div className="absolute w-20 mt-6 right-0 border bg-white rounded-md max-h-48 overflow-y-auto">
                  <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                    <Month />
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="h-full pt-4 pb-4 pr-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={dat}>
                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 12,
                    fill: "#A9A9AA",
                    fontWeight: "700",
                  }}
                />
                <YAxis
                  tick={{
                    fontSize: 12,
                    fill: "#A9A9AA",
                    fontWeight: "700",
                  }}
                />
                <Bar dataKey="savings" fill="#B18CE7" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
