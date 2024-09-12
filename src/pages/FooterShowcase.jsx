import React, { useEffect, useState } from "react";
import BasicFooter from "../components/Footers/BasicFooter";
import BorderedFooter from "../components/Footers/BorderedFooter";
import ShadowFooter from "../components/Footers/ShadowFooter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ClassicFooter from "../components/Footers/ClassicFooter";
import NeonFooter from "../components/Footers/NeonFooter";
import PixelFooter from "../components/Footers/PixelFooter";

// Sample code snippets for footers
const footerComponents = {
  BasicFooter: `
import React from "react";

const BasicFooter = () => {
  return (
    <div>
      <footer className="bg-slate-300 border-t-4 border-black py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-mono text-black text-lg">
            &copy; 2024 RetroBrand. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BasicFooter;

`,
  BorderedFooter: `
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

`,
  ShadowFooter: `
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

`,
  ClassicFooter: `
import React from "react";

const ClassicFooter = () => {
  return (
    <footer className="bg-white text-gray-800 font-sans p-4 sm:p-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Logo Section */}
        <div className="flex items-center justify-center sm:justify-start lg:col-span-1">
          <img
            src="https://via.placeholder.com/150"
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

  `,
  NeonFooter: `
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

  `,
  PixelFooter: `
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

  `,
};

const FooterShowcase = () => {
  const [activeTab, setActiveTab] = useState({
    BasicFooter: "preview",
    BorderedFooter: "preview",
    ShadowFooter: "preview",
    ClassicFooter: "preview",
    NeonFooter: "preview",
    PixelFooter: "preview",
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-2 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Footer Components</h1>

      {Object.keys(footerComponents).map((componentName) => (
        <div key={componentName} className="mb-8">
          <h2 className="text-2xl sm:text-3xl mb-4">
            {componentName.replace(/([A-Z])/g, " $1").trim()}
          </h2>

          <div className="flex border-b border-gray-700 mb-6">
            <button
              onClick={() =>
                setActiveTab({ ...activeTab, [componentName]: "preview" })
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTab[componentName] === "preview"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() =>
                setActiveTab({ ...activeTab, [componentName]: "code" })
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTab[componentName] === "code"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400"
              }`}
            >
              Code
            </button>
          </div>

          <div className="p-2 sm:p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
            {activeTab[componentName] === "preview" && (
              <div className="mb-4">
                {componentName === "BasicFooter" && <BasicFooter />}
                {componentName === "BorderedFooter" && <BorderedFooter />}
                {componentName === "ShadowFooter" && <ShadowFooter />}
                {componentName === "ClassicFooter" && <ClassicFooter />}
                {componentName === "NeonFooter" && <NeonFooter />}
                {componentName === "PixelFooter" && <PixelFooter />}
              </div>
            )}
            {activeTab[componentName] === "code" && (
              <div className="relative overflow-x-auto">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md border border-gray-600"
                >
                  {footerComponents[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() =>
                    copyToClipboard(footerComponents[componentName])
                  }
                  className="absolute top-4 right-4 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-150"
                >
                  {copySuccess ? "Copied!" : "Copy Code"}
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterShowcase;
