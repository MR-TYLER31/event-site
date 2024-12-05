import { useState } from "react";
import ActiveNavLink from "./Navlink";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="row-span-4 border-r-2 bg-white text-teal-600 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-teal-600 font-bold text-lg">iApplied</div>
        <button
          onClick={toggleMenu}
          className="transition ease-in-out text-gray-400 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="space-y-4 mt-8">
        <ActiveNavLink to="/dashboard">Dashboard</ActiveNavLink>
        <ActiveNavLink to="/manager">
          <FolderOutlinedIcon className="mr-2" />
          Manager
        </ActiveNavLink>
        <ActiveNavLink to="/settings">
          <SettingsOutlinedIcon className="mr-2" />
          Settings
        </ActiveNavLink>
      </div>
    </nav>
  );
}

export default SideNav;
