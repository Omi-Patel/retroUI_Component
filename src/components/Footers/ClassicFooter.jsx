import React from "react";

const ClassicFooter = () => {
  return (
    <footer className="bg-white text-gray-800 font-sans p-4 sm:p-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Logo Section */}
        <div className="flex items-center justify-center sm:justify-start lg:col-span-1">
          <img
            src="https://picsum.photos/id/1005/150"
            alt="Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 border-gray-800"
          />
          <span className="ml-3 text-xl sm:text-2xl font-bold text-gray-800">
            RetroBrand
          </span>
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-2 lg:gap-8">
          {/* Navigation Links */}
          <div className="flex flex-col items-center sm:items-start lg:col-span-1 space-y-4">
            <span className="text-gray-800 font-semibold text-lg">
              Navigation
            </span>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <span className="text-gray-800 font-semibold text-lg">
              Follow Us
            </span>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-800 hover:text-blue-500 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-800 hover:text-pink-500 transition duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-800 hover:text-blue-700 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="text-gray-800 hover:text-gray-900 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-sm w-full sm:w-72">
          <span className="block text-gray-800 font-semibold text-lg mb-2">
            Newsletter
          </span>
          <p className="text-gray-600 mb-4">
            Subscribe to our newsletter for updates and promotions.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <hr className="mt-4" />
      <div className="mt-6 text-center text-sm text-gray-700">
        &copy; 2024 RetroBrand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default ClassicFooter;
