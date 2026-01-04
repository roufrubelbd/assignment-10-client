import React from "react";
import Navbar from "./Navbar";
import NavbarTop from "./NavbarTop";

const NavbarContainer = () => {
  return (
    <div className=" border-b-2 border-gray-300">
      <div className="container mx-auto">
        <NavbarTop />
        <Navbar />
      </div>
    </div>
  );
};

export default NavbarContainer;
