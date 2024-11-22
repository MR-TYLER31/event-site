import { NavLink } from "react-router-dom";

const ActiveNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `transition ease-in-out p-2 block text-gray-300 hover:bg-teal-600 hover:text-white max-w-64 rounded-lg ${
        isActive
          ? "bg-teal-600 text-white max-w-64 rounded-lg hover:text-white"
          : ""
      }`
    }
  >
    {children}
  </NavLink>
);

export default ActiveNavLink;
