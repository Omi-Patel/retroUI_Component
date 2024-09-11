import React from "react";

const PixelFooter = () => {
  return (
    <footer className="bg-gray-900 text-white font-pixel p-6 sm:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src="https://via.placeholder.com/150"
            alt="Pixel Logo"
            className="w-16 h-16 pixelated rounded-lg"
          />
          <span className="text-2xl mt-4">PixelTech</span>
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-col text-center sm:text-left gap-2">
          <h2 className="text-lg text-yellow-400">Navigation</h2>
          <a href="/" className="hover:text-yellow-500 transition-all">
            Home
          </a>
          <a href="/about" className="hover:text-yellow-500 transition-all">
            About
          </a>
          <a href="/" className="hover:text-yellow-500 transition-all">
            Services
          </a>
        </div>

        {/* Resources Links Section */}
        <div className="flex flex-col text-center sm:text-left gap-2">
          <h2 className="text-lg text-yellow-400">Resources</h2>
          <a href="/" className="hover:text-yellow-500 transition-all">
            Documentation
          </a>
          <a href="/" className="hover:text-yellow-500 transition-all">
            Support
          </a>
          <a href="/" className="hover:text-yellow-500 transition-all">
            Contact Us
          </a>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center sm:items-end gap-2">
          <h2 className="text-lg text-yellow-400">Follow Us</h2>
          <div className="flex gap-4">
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
            <a href="#" aria-label="LinkedIn">
              <svg
                className="w-6 h-6 hover:text-blue-600 transition duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                className="w-6 h-6 hover:text-blue-400 transition duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-yellow-400 pt-4 text-center text-xs">
        © 2024 PixelTech. All rights reserved.
      </div>
    </footer>
  );
};

export default PixelFooter;
