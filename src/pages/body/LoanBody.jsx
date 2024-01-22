import LoanCards from "../molecule/LoanCards";
import ReLineChart from "../molecule/reLineChart";
// import sort from "../../assets/images/svg/sort.svg";
import { LuSearch } from "react-icons/lu";
import LoanTable from "../molecule/LoanTable";
import CustomDatePicker from "../molecule/CustomDatePicker";
import Filter from "../../assets/images/svg/Filter.svg";

function LoanBody() {
  return (
    <div className="overview-y-scroll">
      <div className="flex flex-shrink-0 justify-between w-5/6 p-2 m-2">
        <div className="dashboard-header">Loans</div>

        <div className="flex -mr-40">
          <div>
            <button
              className="mr-4 p-1 rounded w-28 h-7 text-sm "
              style={{ background: "#7C39DE", color: "white" }}
            >
              Add Loan
            </button>
          </div>

          <div>
            <button
              className="p-1 rounded w-28 cursor-pointer text-sm h-7"
              style={{ border: "solid 1pt #7C39DE" }}
            >
              Repay Loan
            </button>
          </div>

          <div className="ml-4">
            <CustomDatePicker />
          </div>
        </div>
      </div>

      <div>
        <LoanCards />
      </div>
      <div>
        <ReLineChart />
      </div>
      <div className="border p-5 bg-white mt-7  ml-3 rounded-md mr-4 w-12/12 ">
        <div className="mb-5 flex w-full justify-between h-8">
          <div>
            <p className="heading">Loan History</p>
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

        <LoanTable />
      </div>
    </div>
  );
}

export default LoanBody;
