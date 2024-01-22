import {HP_DUMMY_DATA} from "../../utils/constant/HpDummyData.jsx";
import {getStatusColor, getTextColor} from "../../utils/functions/Colors.jsx";

const HpTable = () => {
    return (
        <div>
            <table className="table-auto w-full">
                <thead className="border">
                <tr className="">
                    <th className="activities-heading px-4 py-2 text-left">
                        Members ID
                    </th>
                    <th className="activities-heading px-4 py-2 text-left">
                        Full Name
                    </th>
                    <th className="activities-heading px-4 py-2 text-left">
                        Hire Purchased Item
                    </th>
                    <th className="activities-heading px-4 py-2 text-left">
                        Amount paid</th>
                    <th className="activities-heading px-4 py-2 text-left">
                        Rem. Balance
                    </th>
                    <th className="activities-heading px-4 py-2 text-left">
                        date
                    </th>
                    <th className="activities-heading px-4 py-2 text-left">
                        Status
                    </th>
                </tr>
                </thead>
                <tbody>
                {HP_DUMMY_DATA.map((item, index) => (
                    <tr key={index}>
                        <td
                            style={{ color: "#484949" }}
                            className="recent-activities-data  px-4 py-2"
                        >
                            {item.membersId}
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
                            {item.hirePurchasedItem}
                        </td>
                        <td
                            style={{ color: "#484949" }}
                            className="recent-activities-data  px-4 py-2"
                        >
                            {item.amountPaid}
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

export default HpTable;