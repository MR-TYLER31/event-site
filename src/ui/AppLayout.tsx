import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[250px_1fr] h-screen">
      {/* Sidebar */}
      <div className="row-span-2 border-r-2 bg-white text-teal-600 p-4">
        <h2 className="text-xl font-bold mb-6">iApplied</h2>
        <nav className="space-y-4">
          <NavLink
            to="/dashboard"
            className="block text-gray-300 hover:text-gray-400 active:bg-teal-600 active:text-white"
          >
            Dashboard
          </NavLink>
          <a
            href="#"
            className="block text-gray-300 hover:text-gray-400 active:bg-teal-600 active:text-white"
          >
            Analytics
          </a>
          <NavLink
            to="/settings"
            className="block text-gray-300 hover:text-gray-400 active:bg-teal-600 active:text-white"
          >
            Settings
          </NavLink>
        </nav>
      </div>

      {/* Top Navbar */}
      <div className="bg-white border-b-2 text-teal-600 p-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div>
          <button className="bg-teal-600 px-4 py-2 rounded text-sm text-white">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <Outlet />
        <p>This is where your main content will go.</p>
      </div>
    </div>
  );
}

export default AppLayout;
