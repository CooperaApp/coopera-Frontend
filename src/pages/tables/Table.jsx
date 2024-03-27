import { DASHBOARD_DATA } from "../../utils/constant/DummyData";
import { getStatusColor, getTextColor } from "../../utils/functions/Colors";

const Table = () => {
  return (
    <div className="">
      <table className="table-auto w-full">
        <thead className="border">
          <tr className="" id="rec-header-box">
            <th className="activities-heading px-4 py-2 text-left" id="rec-activity-header">Activity</th>
            <th className="activities-heading px-4 py-2 text-left" id="rec-memberId-header">
              Member ID
            </th>
            <th className="activities-heading px-4 py-2 text-left" id="rec-fullName-header">
              Full Name
            </th>
            <th className="activities-heading px-4 py-2 text-left" id="rec-amount-header">Amount</th>
            <th className="activities-heading px-4 py-2 text-left" id="rec-date-header">
              Date and Time
            </th>
            <th className="activities-heading px-4 py-2 text-left" id="rec-status-header">Status</th>
          </tr>
        </thead>
        <tbody>
          {DASHBOARD_DATA.map((item, index) => (
            <tr key={index}>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
                id="dash-rec-activity"
              >
                {item.activity}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
                id="dash-rec-memberId"
              >
                {item.memberId}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
                id="dash-rec-fullName"
              >
                {item.fullName}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
                id="dash-rec-amount"
              >
                {item.amount}
              </td>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
                id="dash-rec-date"
              >
                {item.date}
              </td>
              <td className="px-4 py-2" id="dash-rec-status">
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

export default Table;
