import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../main";
import toast from "react-hot-toast";

// All Products,My Exports, My Imports, Add Export routes
// Login/Register

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const menus = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-gray-500 underline font-bold" : ""
        }
        to="/"
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-gray-500 underline font-bold" : ""
        }
        to="/products"
      >
        <li>
          <a>Products</a>
        </li>
      </NavLink>
      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gray-500 underline font-bold" : ""
            }
            to="/exports"
          >
            <li>
              <a>My Exports</a>
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gray-500 underline font-bold" : ""
            }
            to="/imports"
          >
            <li>
              <a>My Imports</a>
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-gray-500 underline font-bold" : ""
            }
            to="/add"
          >
            <li>
              <a>Add Export</a>
            </li>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menus}
            </ul>
          </div>
          <Link to="/">
            <a className="text-xl">
              <img src={logo} alt="logo" className="h-12" />
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">{menus}</ul>
        </div>

        {user ? (
          <div className="navbar-end flex gap-2 items-center">
            <button
              className="btn btn-outline btn-sm rounded-full"
              onClick={handleLogout}
            >
              Logout
            </button>
            <div
              className="tooltip tooltip-left cursor-pointer"
              data-tip={user?.displayName || "User"}
            >
              <img
                src={user?.photoURL}
                className="w-10 h-10 rounded-full"
                alt="avatar"
              />
            </div>
          </div>
        ) : (
          <div className="navbar-end flex gap-2 items-center">
            <Link to="/login">
              <a className="btn btn-outline btn-sm rounded-full ">Login</a>
            </Link>
            <Link to="/register">
              <a className="btn btn-outline btn-sm rounded-full ">Register</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
