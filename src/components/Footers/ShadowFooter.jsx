import React from "react";

const ShadowFooter = () => {
  return (
    <footer className="bg-[#1e1e1e] text-[#e0e0e0] py-6 border-t border-[#444] shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Footer Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/150"
              alt="Logo"
              className="w-12 h-12 border-4 border-[#f3f4a1] rounded-full pixel-border"
            />
            <span className="text-2xl font-extrabold text-[#f9c84d] retro-text-shadow">
              RetroBrand
            </span>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#"
              className="text-[#e0e0e0] hover:text-[#f9c84d] transition duration-300 retro-link"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#e0e0e0] hover:text-[#f9c84d] transition duration-300 retro-link"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#e0e0e0] hover:text-[#f9c84d] transition duration-300 retro-link"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-[#e0e0e0] hover:text-[#f9c84d] transition duration-300 retro-link"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="my-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            fill="none"
            stroke="currentColor"
            className="mx-auto text-[#f9c84d] w-32 h-1 retro-line"
          >
            <path d="M0 5l100 0" strokeWidth="2" />
          </svg>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-sm text-[#e0e0e0]">
          &copy; 2024 RetroBrand. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default ShadowFooter;
