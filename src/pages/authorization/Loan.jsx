import SideBar from "../../utils/reusable-components/SideBar";
import TopNav from "../../utils/reusable-components/TopNav";
import LoanBody from "../body/LoanBody";
import { useState } from "react";

function Loan() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className="flex flex-row bg-white-100 overview-x-auto"
      style={{ backgroundColor: "#F8F8F9"}}
    >
      <div>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      </div>

      <div className="w-full h-full">
        <TopNav />
        <LoanBody/>
      </div>

    </div>
  );
}

export default Loan;
