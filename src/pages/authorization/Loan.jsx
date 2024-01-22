import SideBar from "../../utils/reusable-components/SideBar";
import TopNav from "../../utils/reusable-components/TopNav";
import LoanBody from "../body/LoanBody";

function Loan() {
  return (
    <div
      className="flex flex-row bg-white-100 overview-x-hidden"
      style={{ backgroundColor: "#F8F8F9", overflowX: "hidden"}}
    >
      <div>
        <SideBar />
      </div>

      <div className="w-full h-full">
        <TopNav />
        <LoanBody/>
      </div>

    </div>
  );
}

export default Loan;
