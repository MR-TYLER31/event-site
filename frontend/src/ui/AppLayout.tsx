import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[250px_1fr] h-screen">
      <SideNav />
      <TopNav />

      {/* Main Content */}
      <div className="p-4 overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
