import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[250px_1fr] h-screen bg-stone-50">
      <SideNav />
      <TopNav />
      {/* Main Content */}
      <div className="overflow-x-auto">
        <Outlet />

        {/* For Development */}
        <TanStackRouterDevtools />
      </div>
    </div>
  );
}

export default AppLayout;
