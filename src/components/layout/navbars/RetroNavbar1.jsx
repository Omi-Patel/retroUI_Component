import React, { useState } from "react";

const RetroNavbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-[#fbbf24] text-black border-4 border-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-mono font-bold">RetroBrand1</div>

        {/* Menu Toggle Button (Hamburger) */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden focus:outline-none"
        >
          {isOpen ? (
            // Close Icon (X)
            <div className="relative">
              <div className="w-8 h-1 bg-black my-1 transform rotate-45 translate-y-2 transition duration-300 ease-in-out" />
              <div className="w-8 h-1 bg-black my-1 transform -rotate-45 -translate-y-2 transition duration-300 ease-in-out" />
            </div>
          ) : (
            // Hamburger Icon
            <>
              <div className="w-6 h-1 bg-black my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
              <div className="w-7 h-1 bg-black my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
              <div className="w-5 h-1 bg-black my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
            </>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-lg font-mono">
          <a
            href="#"
            className="hover:underline hover:scale-105 transition-transform"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:underline hover:scale-105 transition-transform"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:underline hover:scale-105 transition-transform"
          >
            About
          </a>
          <a
            href="#"
            className="hover:underline hover:scale-105 transition-transform"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 p-4 bg-[#ffedd5] border-4 border-black shadow-[4px_4px_0px_0px_black] rounded-md transition-all">
          <ul className="space-y-4 text-center text-xl font-mono">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default RetroNavbar1;
