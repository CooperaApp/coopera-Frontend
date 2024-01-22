import React from "react";
import LoanCards from "../molecule/LoanCards";
import ReLineChart from "../molecule/reLineChart";
import sort from "../../assets/images/svg/sort.svg";
import { LuSearch } from "react-icons/lu";
import LoanTable from "../molecule/LoanTable";
import CalendarPicker from "../molecule/CalenderPicker";


function LoanBody() {
  return (
    <div className="p-2 overview-y-scroll">
      <div className="flex flex-shrink-0 justify-between w-5/6 p-2 m-2">
        <div className="loan-header">Loans</div>
        <div className="loanHeader-buttons">
          <button
            className="mr-4 p-2 rounded w-28 "
            style={{ background: "#7C39DE", color: "white" }}
          >
            Add Loan
          </button>
          <button
            className=" p-2 rounded w-28 "
            style={{ border: "solid 1pt #7C39DE" }}
          >
            Repay Loan
          </button>
          <div >
            <CalendarPicker/>
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

          <div className="border flex justify-between">
            <div className="w-full max-w-md relative flex items-center text-gray-400 focus-within:text-gray-600">
              <LuSearch className="w-5 h-5 absolute ml-3 pointer-events-none mr-2" />
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
            <div className="border items-center justify-center flex ml-3 p-2">
              <p className="previous-month-styling ml-2">Filter</p>
              <img src={sort} alt="No Img" className="w-4 h-4 ml-1 mt-0" />
            </div>
          </div>
        </div>

        <LoanTable />
      </div>
    </div>
  );
}

export default LoanBody;
