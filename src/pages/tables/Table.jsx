import { DASHBOARD_DATA } from "../../utils/constant/DummyData";
import { getStatusColor, getTextColor } from "../../utils/functions/Colors";

const Table = () => {
  return (
    <div className="ml-5 mr-5">
      <table className="table-auto w-full">
        <thead className="border">
          <tr className="">
            <th className="activities-heading px-4 py-2 text-left">Activity</th>
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
          {DASHBOARD_DATA.map((item, index) => (
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
    </div>
  );
};

export default Table;
