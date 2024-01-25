import TopNav from "../../utils/reusable-components/TopNav";
import SideBar from "../../utils/reusable-components/SideBar";
import WithdrawalBody from "../body/WithdrawalBody";

const Withdrawal = () => {
  return (
    <div
      className="flex flex-row h-screen bg-white-100 overflow-x-auto"
      style={{ backgroundColor: "#F8F8F9" }}
    >
      <div>
        <SideBar />
      </div>

      <div className="w-full h-full">
        <TopNav />
        <WithdrawalBody />
      </div>
    </div>
  );
};

export default Withdrawal;