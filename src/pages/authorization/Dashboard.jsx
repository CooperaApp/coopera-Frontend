// Dashboard.js
import { useState } from "react";
import TopNav from "../../utils/reusable-components/TopNav";
import SideBar from "../../utils/reusable-components/SideBar";
import DashboardBody from "../body/DashboardBody";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="flex flex-row bg-white-100 overflow-x-auto"
      style={{ backgroundColor: "#F8F8F9" }}
    >
      <div>
        <SideBar isOpen={isSidebarOpen} />
      </div>

      <div className="w-full h-full">
        <TopNav toggleSidebar={toggleSidebar} />
        <DashboardBody />
      </div>
    </div>
  );
};

export default Dashboard;
