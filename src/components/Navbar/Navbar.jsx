import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../main";

const Navbar = () => {
  const { theme } = use(AuthContext);

  const menus = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "border border-info" : "")}
        to="/"
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "border border-info" : "")}
        to="/products"
      >
        <li>
          <a>Products</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "border border-info" : "")}
        to="/exports"
      >
        <li>
          <a>My Exports</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "border border-info" : "")}
        to="/imports"
      >
        <li>
          <a>My Imports</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "border border-info" : "")}
        to="/add"
      >
        <li>
          <a>Add Export</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "border border-info" : "")}
        to="/about"
      >
        <li>
          <a>About Us</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "border border-info" : "")}
        to="/privacy"
      >
        <li>
          <a>Privacy Policy</a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar hidden lg:flex">
          <ul
            className={`menu menu-horizontal space-x-4 text-gray-600  ${
              theme === "light" ? "text-gray-600" : "text-white"
            }`}
          >
            {menus}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
