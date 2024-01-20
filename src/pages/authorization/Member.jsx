import SideBar from "../../utils/reusable-components/SideBar";
import TopNav from "../../utils/reusable-components/TopNav";
import MemberBody from "../body/MemberBody";

const Member = () => {
  return (
    <div
      className="flex flex-row bg-white-100 h-screen overflow-x-auto"
      style={{ backgroundColor: "#F8F8F9" }}
    >
      <div>
        <SideBar />
      </div>

      <div className="w-full h-full">
        <TopNav />
        <MemberBody />
      </div>
    </div>
  );
};

export default Member;