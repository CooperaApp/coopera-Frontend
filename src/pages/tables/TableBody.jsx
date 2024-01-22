import { DUMMY_DATA } from "../../utils/constant/DummyData";
import { getStatusColor, getTextColor } from "../../utils/functions/Colors";


const TableBody = () => {
  return (
    <div>
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
    </div>
  );
};

export default TableBody;
