import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo3 from "../assets/logo3.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const linkClass =
    "text-white hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-purple-700 border-b border-purple-500">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <NavLink className="flex-shrink-0 flex items-center" to="/">
              <img className="h-12 w-auto" src={logo3} alt="React Jobs" />
              <span className="hidden lg:block text-xl font-bold ml-2"></span>
            </NavLink>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
          <div className="hidden lg:flex items-center">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/registration" className={linkClass}>
              Registration
            </NavLink>
            <NavLink to="/runners" className={linkClass}>
              Our Runners
            </NavLink>
            <NavLink to="/gallery" className={linkClass}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:hidden flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3`}
      >
        <NavLink to="/" className={linkClass} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass} onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/registration" className={linkClass} onClick={closeMenu}>
          Registration
        </NavLink>
        <NavLink to="/runners" className={linkClass} onClick={closeMenu}>
          Our Runners
        </NavLink>
        <NavLink to="/gallery" className={linkClass} onClick={closeMenu}>
          Gallery
        </NavLink>
        <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
