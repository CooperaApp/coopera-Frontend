import SideBar from "../../utils/reusable-components/SideBar.jsx";
import TopNav from "../../utils/reusable-components/TopNav.jsx";
import HiredPurchaseBody from "../body/HiredPurchaseBody.jsx";

const HiredPurchase = () => {
  return (
    <div
      className="flex flex-row bg-white-100 h-full overflow-x-hidden"
      style={{ backgroundColor: "#F8F8F9" }}
    >
      <div>
        <SideBar />
      </div>

      <div className="w-full h-full">
        <TopNav />
        <HiredPurchaseBody />
      </div>
    </div>
  );
};

export default HiredPurchase;
