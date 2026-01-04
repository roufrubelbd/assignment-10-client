import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left: Brand & Info */}
        <div>
          <Logo />
          <p className="text-sm">Connecting innovation across Asia.</p>
          <p className="text-xs mt-1">
            © 2025 TechBridgeAsia. All rights reserved.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex space-x-6 my-3 md:my-0">
          <a
            href="/about"
            className="hover:text-blue-400 text-sm transition-colors"
          >
            About
          </a>
          <a
            href="/products"
            className="hover:text-blue-400 text-sm transition-colors"
          >
            Services
          </a>
          <a
            href="/contact"
            className="hover:text-blue-400 text-sm transition-colors"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="hover:text-blue-400 text-sm transition-colors"
          >
            Privacy
          </a>
        </div>

        {/* Right: Contact & Social */}
        <div className="text-sm">
          {/* <p>📧 info@techbridgeasia.com | ☎ +44 7380 567890</p> */}
          <div style={{ display: "flex", gap: "20px", color: "#000" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaEnvelope color="#60A5FA" /> {/* Blue icon */}
              <span className="text-white">info@techbridgeasia.com</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaPhone color="#60A5FA" /> {/* Blue icon */}
              <span className="text-white">+44 7358 567890</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-end space-x-4 text-blue-400 mt-2">
            <a
              href="https://www.facebook.com/roufrubelbd"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://x.com/mrouf77639"
              className="hover:text-blue-500 transition-colors"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/roufrubelbd"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/roufrubelbd"
              className="hover:text-blue-500 transition-colors"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
