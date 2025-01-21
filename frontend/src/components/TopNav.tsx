import { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-stone-50 border-b-2 text-black py-6 flex items-center justify-between">
      <div>
        <h1 className="font-heading text-lg ml-4 font-semibold">
          Welcome back, Tyler
        </h1>
      </div>
      <div>
        <form className="flex p-1.5 items-center border-1 shadow rounded-lg w-96 bg-white">
          <SearchIcon className="text-gray-500" />
          <input
            type="text"
            placeholder="Search anything here"
            className="flex-grow px-1 border-none outline-none focus:ring-0 rounded-l-md"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-2 py-1 rounded-md text-sm"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex items-center space-x-6">
        <button className="">
          <NotificationsNoneIcon />
        </button>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={handleToggleMenu}
            className="flex items-center p-2 w-64 bg-stone-50"
          >
            <img
              src="https://via.placeholder.com/40" // Replace with your image URL
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3 text-left">
              <p className="text-md font-semibold text-gray-900">
                Tyler Snyder
              </p>
              <p className="text-sm text-gray-500">Admin</p>
            </div>
            <svg
              className={`w-5 h-5 mx-8 text-gray-500 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute transition ease-in-out right-12 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                My account
              </a>
              <button className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNav;
