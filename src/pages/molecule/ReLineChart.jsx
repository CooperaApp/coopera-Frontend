// import { BarData, LineOptions } from "../../utils/constant/ChartData";
// import { Bar } from "react-chartjs-2";
import {
  LineChart,
  Line,

  //   Rectangle,
  //   Cell,
  XAxis,
  YAxis,
  CartesianGrid,
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

const ReLineChart = () => {
  return (
    <div
      className="  overview-x-hidden ml-8   mt-4 rounded-xl"
              style={{ backgroundColor: "#7838D6",height: "22rem", width: "68.2rem"  }}
              
    >
      <div className="border p-4 bg-white h-full rounded-md w-1/2.2 overview-x-hidden ">
        <div className="justify-between flex">
          <p className="heading ml-10 ">Loan Statistics</p>
          <div className="ml-12 flex">
            <div
              className="w-2 h-2 rounded-full mt-2 mr-1"
              style={{ backgroundColor: "#7838D6" }}
            ></div>
            <span className="pie-chart-labels">Loans Disbursed</span>
            <div
              className="ml-7 w-2 h-2 rounded-full mt-2 mr-1"
              style={{ backgroundColor: "#0EBE8D" }}
            ></div>
            <span className="pie-chart-labels">Loans Repaid</span>
          </div>
          <div className="items-center mr-2 justify-center h-full flex border h-4 w-30 ">
            <p className="previous-month-styling ml-2">Monthly</p>
            <img
              src={ArrowOptions}
              alt="No Img"
              className="w-4 h-4 ml-1 mt-0"
            />
          </div>
        </div>

        <div className="h-full pt-4 pb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={400}
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
             <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{
                  fontSize: 12,
                  fill: "#A9A9AA",
                  fontWeight: "700",
                }}
                axisLine={false}
              />
              <YAxis
              
                tick={{
                  fontSize: 12,
                  fill: "#A9A9AA",
                  fontWeight: "700",
                }}
                axisLine={false}
              />
              <Tooltip
               wrapperStyle={{
                backgroundColor: '#7838D6',
                borderRadius: '20px',
              }}
              contentStyle={{
                fontSize: '14px',
                color: '#fff',
                background:'none',
                border: 'none'
              }}
              labelStyle={{
                fontWeight: 'bold',
                color: '#fff'
              }}
              itemStyle={{
                color: '#fff'
              }}
              />
              <Line
                type="monotone"
                dataKey="repaid"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                dot={false}
                strokeWidth={3}
              />
              <Line type="monotone" dataKey="disbursed" stroke="#82ca9d"   dot={false} strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReLineChart;
