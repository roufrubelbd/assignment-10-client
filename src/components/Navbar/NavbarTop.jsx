// import React, { use, useEffect } from "react";
// import Logo from "../Logo";
// import { Link, NavLink } from "react-router";
// import { FaRegUser } from "react-icons/fa";
// import { FiUserCheck } from "react-icons/fi";
// import { AuthContext } from "../../main";
// import toast from "react-hot-toast";
// import { LuLogOut } from "react-icons/lu";
// import { IoIosArrowDown } from "react-icons/io";
// import { BiSupport } from "react-icons/bi";
// import { CiSearch } from "react-icons/ci";

// const NavbarTop = () => {
//   const { user, logOutUser, theme, setTheme } = use(AuthContext);

//   useEffect(() => {
//     const html = document.querySelector("html");
//     html.setAttribute("data-theme", theme); //dark
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleChangeTheme = (checked) => {
//     setTheme(checked ? "dark" : "light");
//   };

//   const handleLogout = () => {
//     logOutUser()
//       .then(() => {
//         toast.success("Logged out successfully");
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };

//   const menus = (
//     <>
//       <NavLink
//         className={({ isActive }) => (isActive ? "border border-info" : "")}
//         to="/"
//       >
//         <li>
//           <a>Home</a>
//         </li>
//       </NavLink>
//       <NavLink
//         className={({ isActive }) => (isActive ? "border border-info" : "")}
//         to="/products"
//       >
//         <li>
//           <a>Products</a>
//         </li>
//       </NavLink>
//       <NavLink
//         className={({ isActive }) => (isActive ? "border border-info" : "")}
//         to="/exports"
//       >
//         <li>
//           <a>My Exports</a>
//         </li>
//       </NavLink>
//       <NavLink
//         className={({ isActive }) => (isActive ? "border border-info" : "")}
//         to="/imports"
//       >
//         <li>
//           <a>My Imports</a>
//         </li>
//       </NavLink>
//       <NavLink
//         className={({ isActive }) => (isActive ? "border border-info" : "")}
//         to="/add"
//       >
//         <li>
//           <a>Add Export</a>
//         </li>
//       </NavLink>
//     </>
//   );

//   return (
//     <div className="navbar space-x-4">
//       <div className="navbar-start">
//         {/* ------------dropdown------------- */}
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>

//           <ul
//             tabIndex="-1"
//             className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow  ${
//               theme === "light" ? "text-gray-600" : "text-white"
//             }`}
//           >
//             {menus}
//             <NavLink
//               className={({ isActive }) =>
//                 isActive
//                   ? "border border-info hidden lg:flex"
//                   : "hidden lg:flex"
//               }
//             >
//               <li>
//                 <a>
//                   <p className="">
//                     <span className="flex items-center">
//                       <span className="text-info mr-1">
//                         <FiUserCheck />
//                       </span>{" "}
//                       {user?.displayName || "User"}
//                     </span>
//                   </p>
//                 </a>
//               </li>
//             </NavLink>
//             {/* -------- menus ---------------- */}
//             <div className="navbar-end lg:hidden">
//               {user ? (
//                 <div className=" flex flex-col gap-2 items-center text-xs">
//                   <div>
//                     <p className="flex items-center">
//                       <span className="text-info mr-1">
//                         <FiUserCheck />
//                       </span>{" "}
//                       {user?.displayName || "User"}
//                     </p>
//                   </div>
//                   <button className="btn btn-xs rounded" onClick={handleLogout}>
//                     Logout <LuLogOut />
//                   </button>
//                   <Link to="/contact" className="">
//                     <a className="flex items-center">
//                       <BiSupport className="mr-1" />
//                       Contact Us{" "}
//                     </a>
//                   </Link>
//                 </div>
//               ) : (
//                 <div className="flex flex-col gap-2 md:gap-6 items-center text-xs">
//                   <Link to="/login" className="">
//                     <a className="flex items-center ">
//                       <FaRegUser className="mr-1" /> Sign In{" "}
//                       <IoIosArrowDown className="ml-1" />
//                     </a>
//                   </Link>
//                   <Link to="/contact" className="">
//                     <a className="flex items-center">
//                       <BiSupport className="mr-1" />
//                       Contact Us{" "}
//                     </a>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </ul>
//         </div>
//         <Logo></Logo>
//       </div>
//       <div className="navbar-center">
//         <div className="input input-bordered border-gray-300 md:px-4 md:w-[250px] lg:w-[350px]">
//           <input
//             type="text"
//             placeholder="Search Product"

//             // value={searchProduct}
//             // onChange={(e) => setSearchProduct(e.target.value)}
//           />
//           <Link to="/products">
//             <CiSearch />
//           </Link>
//         </div>
//       </div>
//       {/* -------- menus ---------------- */}
//       <div
//         className={`navbar-end ${
//           theme === "light" ? "text-gray-700" : "text-white"
//         }`}
//       >
//         {user ? (
//           <div className=" flex gap-4 items-center">
//             <div>
//               <input
//                 onChange={(e) => handleChangeTheme(e.target.checked)}
//                 type="checkbox"
//                 defaultChecked={localStorage.getItem("theme") === "dark"}
//                 className="toggle"
//               />
//             </div>
//             <div className="hidden md:flex">
//               <p className="flex items-center">
//                 <span className="text-info mr-1">
//                   <FiUserCheck />
//                 </span>{" "}
//                 <span className="text-xs">{user?.displayName || "User"}</span>
//               </p>
//             </div>
//             <button
//               className="btn btn-xs rounded hidden md:flex"
//               onClick={handleLogout}
//             >
//               Logout <LuLogOut />
//             </button>
//             <Link to="/contact" className="hidden md:flex">
//               <a className="flex items-center">
//                 <BiSupport className="mr-1" />
//                 Contact Us{" "}
//               </a>
//             </Link>
//           </div>
//         ) : (
//           <div className="flex gap-4 md:gap-6 items-center">
//             <div>
//               <input
//                 onChange={(e) => handleChangeTheme(e.target.checked)}
//                 type="checkbox"
//                 defaultChecked={localStorage.getItem("theme") === "dark"}
//                 className="toggle"
//               />
//             </div>
//             <Link to="/login" className="hidden md:flex">
//               <a className="flex items-center">
//                 <FaRegUser className="mr-1" /> Sign In{" "}
//               </a>
//             </Link>
//             <Link to="/contact" className="hidden md:flex">
//               <a className="flex items-center">
//                 <BiSupport className="mr-1" />
//                 Contact Us{" "}
//               </a>
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavbarTop;

import React, { useEffect, useContext } from "react";
import Logo from "../Logo";
import { Link, NavLink } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { AuthContext } from "../../main";
import toast from "react-hot-toast";
import { LuLogOut } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";

const NavbarTop = () => {
  const { user, logOutUser, theme, setTheme } = useContext(AuthContext);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChangeTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    logOutUser()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => toast.error(error.message));
  };

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
    </>
  );

  return (
    <div className="navbar space-x-4">
      {/* Navbar Start */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow ${
              theme === "light" ? "text-gray-600" : "text-white"
            }`}
          >
            {menus}
            {user ? (
              <>
                <div className="divider"></div>

                <li className="items-center gap-1">
                  <FiUserCheck />
                  {user?.displayName || "User"}
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Dashboard <IoIosArrowDown />
                  </a>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <Link to="/dashboard/user">User Dashboard</Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-1"
                      >
                        Logout <LuLogOut />
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <div className="divider"></div>
                <li>
                  <Link to="/login" className="flex items-center gap-1">
                    Sign In
                  </Link>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Dashboard <IoIosArrowDown />
                  </a>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <Link to="/dashboard/user">User Dashboard</Link>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
        <Logo />
        {/* search filed ---md & lg ------*/}
        <div className="input input-bordered border-gray-300 md:px-4 w-[200px] md:w-[250px] lg:w-[350px]  items-center ml-10 hidden lg:flex">
          <input type="text" placeholder="Search Product" className="w-full" />
          <Link to="/products">
            <CiSearch className="ml-2 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* search filed --- sm ------*/}
      <div className="navbar-center lg:hidden">
        <div className="input input-bordered border-gray-300 md:px-4 w-[200px] md:w-[250px] lg:w-[350px]  items-center ml-10 ">
          <input type="text" placeholder="Search Product" className="w-full" />
          <Link to="/products">
            <CiSearch className="ml-2 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Navbar End */}
      <div
        className={`navbar-end ${
          theme === "light" ? "text-gray-700" : "text-white"
        }`}
      >
        <div className="flex gap-4 items-center">
          <input
            onChange={(e) => handleChangeTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
          {user ? (
            <>
              <p className="items-center gap-1 hidden md:flex text-sm">
                <FiUserCheck />
                {user?.displayName || "User"}
              </p>
              <Link to="/contact" className="hidden md:flex items-center gap-1">
                <BiSupport /> Contact Us
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="hidden md:flex items-center gap-1">
                <FaRegUser /> Sign In
              </Link>
              <Link to="/contact" className="hidden md:flex items-center gap-1">
                <BiSupport /> Contact Us
              </Link>
            </>
          )}
        </div>

        {/* dropdown */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost items-center gap-1 hidden md:flex"
          >
            <LuLayoutDashboard />
            Dashboard
            <IoIosArrowDown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/dashboard/user">User Dashboard</Link>
            </li>
            <li>
              {user && (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1"
                >
                  Logout <LuLogOut />
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
