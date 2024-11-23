import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[250px_1fr] h-screen">
      {/* Sidebar */}
      {/* <div className="row-span-2 border-r-2 bg-white text-teal-600 p-4">
        <div className="flex">
          <h2 className="text-xl font-bold mb-6">iApplied</h2>
          <SideNav />
        </div>

        <nav className="space-y-4">
          <ActiveNavLink to="/dashboard">Dashboard</ActiveNavLink>
          <ActiveNavLink to="/analytics">Analytics</ActiveNavLink>
          <ActiveNavLink to="/settings">Settings</ActiveNavLink>
        </nav>
      </div> */}
      <SideNav />

      <TopNav />

      {/* Main Content */}
      <div className="p-4">
        <Outlet />
        <p>This is where your main content will go.</p>
      </div>
    </div>
  );
}

export default AppLayout;
