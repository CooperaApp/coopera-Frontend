import LoanCards from "../molecule/LoanCards";
import ReLineChart from "../molecule/reLineChart";
import add from "../../assets/images/svg/AddVector.svg";
import { LuSearch } from "react-icons/lu";
import LoanTable from "../molecule/LoanTable";
import CustomDatePicker from "../molecule/CustomDatePicker";
import Filter from "../../assets/images/svg/Filter.svg";
import LoanActivityTable from "../molecule/LoanActivityTable";

function LoanBody() {
  return (
    <div className="overview-y-scroll  overview-x-hidden pb-10 ">
      <div className="flex flex-shrink-0 justify-betweennd w-full p-2 mt-2  ">
        <div className="dashboard-header ml-8">Loans</div>

        <div className=" ml-auto mr-2">
          <CustomDatePicker />
        </div>
      </div>

      <div>
        <LoanCards />
      </div>
      <div>
        <ReLineChart />
      </div>
      <div
        className="border p-5 bg-white mt-7  ml-8 rounded-md mr-4"
        style={{ width: "94.5%" }}
      >
        <div className="mb-5 flex w-full justify-between h-8">
          <div>
            <p className="heading">Loan Request</p>
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
        <div className="flex items-center justify-between px-4 py-2" style={{color: '#808080'}}>
          <div>10 Entries per page</div>
          <div>Page 1 of 1</div>
          <div className="flex items-center">
            <button className="mr-2">&lt; Prev</button>
            <button>Next &gt;</button>
          </div>
        </div>
      </div>

      <div
        className="border p-5 bg-white mt-7  ml-8 rounded-md mr-4"
        style={{ width: "94.5%" }}
      >
        <div className="mb-5 flex w-full justify-between h-8">
          <div>
            <p className="heading">Loan Activities</p>
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

        <LoanActivityTable />
        <div className="flex items-center justify-between px-4 py-2" style={{color: '#808080'}}>
          <div>10 Entries per page</div>
          <div>Page 1 of 1</div>
          <div className="flex items-center">
            <button className="mr-2">&lt; Prev</button>
            <button>Next &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanBody;
