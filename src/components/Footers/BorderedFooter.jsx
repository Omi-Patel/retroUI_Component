import React from "react";

const BorderedFooter = () => {
  return (
    <footer className="bg-yellow-100 border-t-4 border-[#333] py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Footer Content */}
        <p className="font-sans text-gray-800 text-lg md:text-xl font-medium mb-4">
          &copy; 2024 CreativeBrand. All Rights Reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            className="text-gray-800 hover:text-[#333] transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-[#333] transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-[#333] transition duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" aria-label="Facebook">
            <svg
              className="w-6 h-6 text-gray-800 hover:text-[#333] transition duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12.1c0-5.5-4.5-10-10-10S2 6.6 2 12.1c0 4.9 3.5 9 8.2 9.8v-6.9H7.7v-2.9h2.5v-2.2c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.1 2.2.1v2.5h-1.2c-1.2 0-1.6.7-1.6 1.4v1.7h2.8l-.4 2.9h-2.4v6.9c4.7-.8 8.2-4.9 8.2-9.8z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg
              className="w-6 h-6 text-gray-800 hover:text-[#333] transition duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 text-gray-800 hover:text-[#333] transition duration-300"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg
              className="w-6 h-6 text-gray-800 hover:text-[#333] transition duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default BorderedFooter;
