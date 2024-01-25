import { LOAN_DUMMY_DATA } from "../../utils/constant/LoanTableData";
import { getStatusColor, getTextColor } from "../../utils/functions/Colors";

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
          </tr>
        </thead>
        <tbody>
          {LOAN_DUMMY_DATA.map((item, index) => (
            <tr key={index}>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.LoanType}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.AmountPaid}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.princAmount}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.remBalance}
              </td>

              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.date}
              </td>

              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.status}
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
    </div>
  );
};

export default LoanTable;
