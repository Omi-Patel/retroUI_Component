import React, { useState } from "react";

const PixelNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#d9f99d] border-b-4 border-black shadow-[6px_6px_0px_0px_black] p-4 font-mono">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-black pixel-font hover:text-cyan-900 transition duration-300 ease-out transform hover:scale-110">
          PixelNav
        </div>

        {/* Menu Links for Desktop */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="relative group text-black hover:text-pink-500 transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-black group-hover:animate-bounce"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-pink-500 transition-all duration-300 focus:outline-none"
          >
            {isOpen ? (
              // Close button when menu is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger menu icon when closed
              <>
                <div className="w-6 h-1 bg-black my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
                <div className="w-7 h-1 bg-black my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
                <div className="w-5 h-1 bg-black my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#d9f99d] border-t-4 border-black p-8 transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-pink-500 transition-all duration-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="space-y-6 text-center">
          {["Home", "About", "Services", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="text-3xl font-bold text-black pixel-font hover:text-pink-500 transition-all duration-300 block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default PixelNavbar;
