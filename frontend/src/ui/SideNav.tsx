import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link, linkOptions } from "@tanstack/react-router";

const options = [
  linkOptions({
    to: "/",
    label: "Dashboard",
    activeOptions: { exact: true },
    icon: <HomeOutlinedIcon className="mr-2" />,
  }),
  linkOptions({
    to: "/jobs",
    label: "Jobs",
    icon: <FolderOutlinedIcon className="mr-2" />,
  }),
  linkOptions({
    to: "/settings",
    label: "Settings",
    icon: <SettingsOutlinedIcon className="mr-2" />,
  }),
];

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
        {options.map((option) => {
          return (
            <Link
              {...option}
              key={option.to}
              activeProps={{ className: `bg-teal-600 text-white` }}
              className="transition ease-in-out p-2 block text-gray-300 hover:bg-teal-600 hover:text-white max-w-64 rounded-lg"
            >
              {option.icon}
              {option.label}
            </Link>
          );
        })}
        {/* <Link
          to="/"
          className={`transition ease-in-out p-2 block text-gray-300 hover:bg-teal-600 hover:text-white max-w-64 rounded-lg ${useMatch({ from: "/" }) ? "bg-teal-600 text-white" : ""}`}
        >
          <HomeOutlinedIcon className="mr-2" />
          Dashboard
        </Link>
        <Link
          to="/jobs"
          className={
            "transition ease-in-out p-2 block text-gray-300 hover:bg-teal-600 hover:text-white max-w-64 rounded-lg"
          }
        >
          <FolderOutlinedIcon className="mr-2" />
          Manager
        </Link>
        <Link
          to="/settings"
          className={
            "transition ease-in-out p-2 block text-gray-300 hover:bg-teal-600 hover:text-white max-w-64 rounded-lg"
          }
        >
          <SettingsOutlinedIcon className="mr-2" />
          Settings
        </Link> */}
      </div>
    </nav>
  );
}

export default SideNav;
