import React from "react";
import { LOAN_DUMMY_DATA } from "../../utils/constant/LoanTableData";
import { getStatusColor, getTextColor } from "../../utils/functions/Colors";
import check from '../../assets/images/svg/check.svg'
import cancel from '../../assets/images/svg/cancel.svg'

const LoanTable = () => {
  return (
    <div>
      <table className="table-auto w-full">
        <thead className="border">
          <tr className="">
            <th className="activities-heading px-4 py-2 text-left">Loan Type</th>
            <th className="activities-heading px-4 py-2 text-left">
              Member ID
            </th>
            <th className="activities-heading px-4 py-2 text-left">
              Amount Paid
            </th>
            <th className="activities-heading px-4 py-2 text-left">Princ.Amount</th>
            <th className="activities-heading px-4 py-2 text-left">
              Rem.Balance
            </th>
            <th className="activities-heading px-4 py-2 text-left">Date</th>
            <th className="activities-heading px-4 py-2 text-left">Status</th>
            <th className="activities-heading px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {LOAN_DUMMY_DATA.map((item, index) => (
            <tr key={index}>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.loanDate}
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
                {item.loanTotal}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.principal}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.interest}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.period}
              </td>
              <td className="px-4 py-2 flex justify-around">
                <img
                  type="checkbox"
                  checked={item.action.checked}
                  src={check}
                />
              
                <img
                  type="checkbox"
                  checked={item.action.cancelled}
                  src={cancel}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;
