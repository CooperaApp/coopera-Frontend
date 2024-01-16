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
  BarElement
);

<<<<<<< HEAD
const BarData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Savings",
      data: [
        4311000, 458000, 664000, 7666000, 665000, 890000, 9100000, 620000,
        5110000, 380000, 2140000, 9122000,
      ],
      borderColor: "#7838D6",
      backgroundColor: "#7838D6",
    },
  ],
};

const LineData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Loan disbursed",
      data: [
        11000, 4258000, 664000, 7666000, 665000, 890000, 9100000, 620000,
        5110000, 380000, 2140000, 9122000,
      ],
      borderColor: "#0EBE8D",
    },
    {
      label: "Loan repaid",
      data: [
        10000000, 9000000, 7000000, 6000000, 7700000, 10000000, 120000, 122000,
        9000000, 180000, 6000000, 82000,
      ],
      borderColor: "#7838D6",
    },
  ],
};

const LineOptions = {
  scales: {
    y: {
      suggestedMin: 30000, // Set your minimum value
      suggestedMax: 150000, // Set your maximum value
    },
  },
};

const data = {
  //   labels: ["Savings", "Loan", "Withdraw", "Hire Purchase"],
  datasets: [
    {
      data: [25, 25, 25, 25],
      backgroundColor: ["#7838D6", "#0EBE8D", "#FF6A24", "#0079FF"],
      hoverBackgroundColor: ["#7838D6", "#0EBE8D", "#FF6A24", "#0079FF"],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  width: 50,
  height: 50,
  output: 50,
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "#E7F8F0";
    case "approved":
      return "#E7F8F0";
    case "cancelled":
      return "#FEECEB";
    case "pending":
      return "#FEF4E6";
    default:
      return "";
  }
};

const getTextColor = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "#12B76A";
    case "approved":
      return "#12B76A";
    case "cancelled":
      return "#F04438";
    case "pending":
      return "#F79009";
    default:
      return "";
  }
};

=======
>>>>>>> d3940da60f5b2991132cb9f9997ec70a7b703cf3
const DashboardBody = () => {
  return (
    <div className="h-full mt-1 ml-4 overflow-y-hidden">
      <div className="flex flex-shrink-0 justify-between w-5/6">
        <div className="dashboard-header">Dashboard Overview</div>
        <div>{/* <CalenderPicker /> */}</div>
      </div>

<<<<<<< HEAD
      <div className="border-blue-500 w-full h-80 flex flex-row flex-shrink-0">
        <div className="w-8/12 ">
          <div className="flex">
            <div className="bg-white p-3 w-64 h-36 rounded-xl ">
              <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Account Balance</p>
                    <p className="mt-3 w-full card-amount">#1,545,607.00</p>
                  </div>
                  <div
                    className="ml-4 h-7 rounded-md items-center"
                    style={{ backgroundColor: "#EBF5FF" }}
                  >
                    <img src={AccountBalanceIcon} alt="No Img" />
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
                    <p className="previous-month-styling ml-2">
                      vs previous month
                    </p>
                    <img
                      src={ArrowOptions}
                      alt="No Img"
                      className="w-4 h-4 ml-1 mt-0"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 w-64 h-36 rounded-xl ml-3">
              <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Total Savings</p>
                    <p className="mt-3 w-full card-amount">#1,545,607.00</p>
                  </div>
                  <div
                    className="ml-4 h-7 rounded-md items-center"
                    style={{ backgroundColor: "#F2EBFB" }}
                  >
                    <img src={TotalSavingsIcon} alt="No Img" />
                  </div>
                </div>
                <div className="justify-between mt-4 flex h-7">
                  <div
                    className="flex rounded h-full w-20"
                    style={{ backgroundColor: "#E7F8F0" }}
                  >
                    <img src={GreenArrow} alt="No Img" className="" />
                    <p
                      className="percentage-figure pl-2 mt-0.5"
                      style={{ color: "#12B76A" }}
                    >
                      17%
                    </p>
                  </div>
                  <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                    <p className="previous-month-styling ml-2">
                      vs previous month
                    </p>
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

          <div className="flex mt-7">
            <div className="bg-white p-3 w-64 h-36 rounded-xl ">
              <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Loan Disbursed</p>
                    <p className="mt-3 w-full card-amount">#1,545,607.00</p>
                  </div>
                  <div
                    className="ml-4 h-7 rounded-md items-center"
                    style={{ backgroundColor: "#E7F9F4" }}
                  >
                    <img src={LoanDisbursed} alt="No Img" />
                  </div>
                </div>
                <div className="justify-between mt-4 flex h-7">
                  <div
                    className="flex rounded h-full w-20"
                    style={{ backgroundColor: "#E7F8F0" }}
                  >
                    <img src={GreenArrow} alt="No Img" className="" />
                    <p
                      className="percentage-figure pl-2 mt-0.5"
                      style={{ color: "#12B76A" }}
                    >
                      17%
                    </p>
                  </div>
                  <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                    <p className="previous-month-styling ml-2">
                      vs previous month
                    </p>
                    <img
                      src={ArrowOptions}
                      alt="No Img"
                      className="w-4 h-4 ml-1 mt-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 w-64 h-36 rounded-xl ml-3">
              <div className="h-32  p-0 ">
                <div className="p-0 flex justify-between mb-2">
                  <div>
                    <p className="card-title">Loan Repaid</p>
                    <p className="mt-3 w-full card-amount">#1,545,607.00</p>
                  </div>
                  <div
                    className="ml-4 h-7 rounded-md items-center"
                    style={{ backgroundColor: "#FFE8DE" }}
                  >
                    <img src={LoanRepaid} alt="No Img" />
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
                    <p className="previous-month-styling ml-2">
                      vs previous month
                    </p>
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
        </div>

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
=======
      <div className="w-full h-80 flex flex-row flex-shrink-0">
        <Card />
        <PieChart />
>>>>>>> d3940da60f5b2991132cb9f9997ec70a7b703cf3
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

<<<<<<< HEAD
        <table className="table-auto w-full">
          <thead className="border">
            <tr className="">
              <th className="activities-heading px-4 py-2 text-left">
                Activity
              </th>
              <th className="activities-heading px-4 py-2 text-left">
                Member ID
              </th>
              <th className="activities-heading px-4 py-2 text-left">
                Full Name
              </th>
              <th className="activities-heading px-4 py-2 text-left">Amount</th>
              <th className="activities-heading px-4 py-2 text-left">
                Date and Time
              </th>
              <th className="activities-heading px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_DATA.map((item, index) => (
              <tr key={index}>
                <td
                  style={{ color: "#484949" }}
                  className="recent-activities-data  px-4 py-2"
                >
                  {item.activity}
                </td>
                <td
                  style={{ color: "#484949" }}
                  className="recent-activities-data  px-4 py-2"
                >
                  {item.memberId}
                </td>
                <td
                  style={{ color: "#484949" }}
                  className="recent-activities-data  px-4 py-2"
                >
                  {item.fullName}
                </td>
                <td
                  style={{ color: "#484949" }}
                  className="recent-activities-data  px-4 py-2"
                >
                  {item.amount}
                </td>
                <td
                  style={{ color: "#484949" }}
                  className="recent-activities-data  px-4 py-2"
                >
                  {item.date}
                </td>
                <td className="px-4 py-2">
                  {item.status && (
                    <div
                      className=" rounded-full items-align h-6 inline-block"
                      style={{
                        backgroundColor: getStatusColor(item.status),
                        color: getTextColor(item.status),
                      }}
                    >
                      {item.status && (
                        <span className="recent-activities-data p-2">
                          {item.status}
                        </span>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
=======
        <Table />
>>>>>>> d3940da60f5b2991132cb9f9997ec70a7b703cf3
      </div>
    </div>
  );
};

export default DashboardBody;
