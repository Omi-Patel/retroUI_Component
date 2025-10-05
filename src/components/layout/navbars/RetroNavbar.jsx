import React, { useState } from "react";

const RetroNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f9c84d] border-4 border-black shadow-[4px_4px_0px_0px_black] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold font-mono text-black">
              RetroBrand
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-black font-mono text-lg hover:bg-yellow-100 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black font-mono text-lg hover:bg-yellow-100 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              About
            </a>
            <a
              href="#"
              className="text-black font-mono text-lg hover:bg-yellow-100 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Services
            </a>
            <a
              href="#"
              className="text-black font-mono text-lg hover:bg-yellow-100 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-black focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
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
              ) : (
                <div>
                  <div className="w-4 h-1 bg-black my-1  transition duration-300 ease-in-out transform-gpu origin-center" />
                  <div className="w-7 h-1 bg-black my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
                  <div className="w-5 h-1 bg-black my-1 transition duration-300 ease-in-out transform-gpu origin-center" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 md:w-1/2 hidden h-full  border-t-4 border-black shadow-[4px_4px_0px_0px_black] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button className="text-black" onClick={() => setIsOpen(false)}>
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
        <div className="flex flex-col items-center space-y-4 mt-16">
          <a
            href="#"
            className="text-black font-mono text-2xl px-4 py-2 border-b-2 border-black transition-transform transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#"
            className="text-black font-mono text-2xl px-4 py-2 border-b-2 border-black transition-transform transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#"
            className="text-black font-mono text-2xl px-4 py-2 border-b-2 border-black transition-transform transform hover:scale-105"
          >
            Services
          </a>
          <a
            href="#"
            className="text-black font-mono text-2xl px-4 py-2 border-b-2 border-black transition-transform transform hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default RetroNavbar;
