import React from "react";
import { LOAN_Activity_DATA } from "../../utils/constant/LoanTableData";
import { getStatusColor, getTextColor } from "../../utils/functions/Colors";

const LoanActivityTable = () => {
  return (
    <div className="">
      <table className="table-auto w-full">
        <thead className="border">
          <tr className="">
            <th className="activities-heading px-4 py-2 text-left">
              Loan Date
            </th>
            <th className="activities-heading px-4 py-2 text-left">
              Member ID
            </th>
            <th className="activities-heading px-4 py-2 text-left">
              Full Name
            </th>
            <th className="activities-heading px-4 py-2 text-left">
              Loan Total
            </th>
            <th className="activities-heading px-4 py-2 text-left">Interest</th>
            <th className="activities-heading px-4 py-2 text-left">Balance</th>
            <th className="activities-heading px-4 py-2 text-left">Period</th>
            <th className="activities-heading px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {LOAN_Activity_DATA.map((item, index) => (
            <tr key={index}>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data px-4 py-2"
              >
                {item.loanDate}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data px-4 py-2"
              >
                {item.memberId}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data px-4 py-2"
              >
                {item.fullName}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data px-4 py-2"
              >
                {item.loanTotal}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data px-4 py-2"
              >
                {item.interest}
              </td>
              <td
                style={{ color: "red" }}
                className="recent-activities-data px-4 py-2"
              >
                {item.balance}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data px-4 py-2"
              >
                {item.period}
              </td>
              <td className="px-4 py-2">
                {item.action && (
                  <div
                    className="rounded-full items-align h-6 inline-block"
                    style={{
                      backgroundColor: getStatusColor(item.action),
                      color: getTextColor(item.action),
                    }}
                  >
                    <span className="recent-activities-data p-2">
                      {item.action}
                    </span>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanActivityTable;
