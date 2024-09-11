import React from "react";

const NeonFooter = () => {
  return (
    <footer className="bg-[#333] text-[#39ff14] font-mono p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Logo Section */}
        <div className="flex items-center justify-center sm:justify-start">
          <img
            src="https://via.placeholder.com/150"
            alt="Retro Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full"
          />
          <span className="ml-3 text-2xl sm:text-3xl">RetroWave</span>
        </div>

        {/* Links Section */}
        <div className="flex text-center  gap-8 justify-center items-center ">
          <div className="flex flex-col gap-4 text-left">
            <a
              href="/"
              className="hover:text-[#ffeb3b] transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-[#ffeb3b] transition duration-300"
            >
              About
            </a>
            <a
              href="/components"
              className="hover:text-[#ffeb3b] transition duration-300"
            >
              Components
            </a>
          </div>

          <div className="flex flex-col gap-4 text-left">
            <a
              href="#"
              className="hover:text-[#ffeb3b] transition duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="hover:text-[#ffeb3b] transition duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-[#ffeb3b] transition duration-300"
            >
              Support
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center gap-4 ">
          {/* Instagram */}
          <h1 className="text-2xl font-bold font-sans text-gray-300">
            Follow Us at
          </h1>
          <div className="flex justify-center items-center gap-4">
            <a href="#" aria-label="Instagram">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 hover:text-pink-500 transition duration-200"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6 hover:text-blue-600 transition duration-200"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" aria-label="Twitter">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 hover:text-blue-400 transition duration-200"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-[#39ff14] pt-4 text-center text-sm">
        © 2024 RetroWave. All rights reserved.
      </div>
    </footer>
  );
};

export default NeonFooter;
