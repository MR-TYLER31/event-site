import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link, linkOptions } from "@tanstack/react-router";

const options = [
  linkOptions({
    to: "/dashboard",
    label: "Dashboard",
    activeOptions: { exact: false },
    icon: <HomeOutlinedIcon className="mr-2" />,
  }),
  linkOptions({
    to: "/jobs",
    label: "Job Center",
    icon: <FolderOutlinedIcon className="mr-2" />,
  }),
  linkOptions({
    to: "/search-jobs",
    label: "Search Jobs",
    icon: <SearchIcon className="mr-2" />,
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
    <nav className="row-span-4 border-r-2 bg-teal-600 text-white p-4">
      <div className="flex items-center justify-between max-w-7xl mr-2">
        <div className="flex items-center">
          <img
            src="/images/iALogo.png" // Update with the correct path
            alt="iApplied Logo"
            className="h-8 w-auto mr-2" // Adjust height and spacing as needed
          />
          <div className="font-bold text-lg">iApplied</div>
        </div>
        <button
          onClick={toggleMenu}
          className="transition ease-in-out text-white focus:outline-none"
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
              activeProps={{ className: `bg-white text-teal-600` }}
              className="transition ease-in-out text-md text-bold p-2 block hover:bg-white hover:text-teal-600 max-w-64 rounded-lg"
            >
              {option.icon}
              {option.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default SideNav;
