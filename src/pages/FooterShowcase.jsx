"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Code,
  Copy,
  Check,
  ChevronDown,
  Zap,
  Layers,
  Grid,
  ArrowRight,
  Star,
  Eye,
  Sparkles,
  Layout,
  Columns,
  Box,
  Moon,
  Sun,
} from "lucide-react";

// Import footer components
import BasicFooter from "../components/Footers/BasicFooter";
import BorderedFooter from "../components/Footers/BorderedFooter";
import ShadowFooter from "../components/Footers/ShadowFooter";
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
              src="https://picsum.photos/id/237/150"
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
            src="https://picsum.photos/id/1025/150"
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
            src="https://picsum.photos/id/660/150"
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
  const [activeComponent, setActiveComponent] = useState("BasicFooter");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);
  const [expandedInfo, setExpandedInfo] = useState(false);
  const [isGridView, setIsGridView] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const footerIcons = {
    BasicFooter: <Layout className="w-5 h-5" />,
    BorderedFooter: <Columns className="w-5 h-5" />,
    ShadowFooter: <Box className="w-5 h-5" />,
    ClassicFooter: <Layout className="w-5 h-5" />,
    NeonFooter: <Moon className="w-5 h-5" />,
    PixelFooter: <Sun className="w-5 h-5" />,
  };

  const footerColors = {
    BasicFooter: "from-gray-400 to-gray-500",
    BorderedFooter: "from-yellow-400 to-amber-500",
    ShadowFooter: "from-gray-600 to-gray-700",
    ClassicFooter: "from-blue-400 to-blue-500",
    NeonFooter: "from-green-400 to-green-500",
    PixelFooter: "from-yellow-400 to-yellow-500",
  };

  const footerBgs = {
    BasicFooter:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/30",
    BorderedFooter:
      "bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30",
    ShadowFooter:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/30",
    ClassicFooter:
      "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30",
    NeonFooter:
      "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30",
    PixelFooter:
      "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "BasicFooter":
        return <BasicFooter />;
      case "BorderedFooter":
        return <BorderedFooter />;
      case "ShadowFooter":
        return <ShadowFooter />;
      case "ClassicFooter":
        return <ClassicFooter />;
      case "NeonFooter":
        return <NeonFooter />;
      case "PixelFooter":
        return <PixelFooter />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-300 bg-[url('/grid-pattern.svg')] bg-fixed">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section - More Unique */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-900/20 dark:to-indigo-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-purple-200/50 dark:border-purple-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Footer</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 dark:bg-purple-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Components</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                Pixel-perfect, nostalgic footer designs for your modern web
                applications. Bring the charm of retro aesthetics to your UI.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-md shadow-lg hover:shadow-purple-500/25 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-md border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Documentation
                </motion.button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-md w-[50%] h-24 md:flex flex-col justify-between text-white hidden md:visible">
              <div className="flex justify-between items-center">
                <div className="w-1/3 h-4 bg-purple-400 rounded"></div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-indigo-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="w-2/3 h-3 bg-purple-400 rounded"></div>
                <div className="w-1/4 h-3 bg-indigo-400 rounded"></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-purple-500" />
            Footer Collection
          </h2>

          
        </div>

        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.keys(footerComponents).map((componentName) => (
              <motion.div
                key={componentName}
                whileHover={{ y: -5 }}
                className={`${footerBgs[componentName]} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                {/* Modified div below */}
                <div className="p-6 flex flex-col items-center justify-center min-h-[200px] overflow-x-auto">
                  {renderComponent(componentName)}
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${footerColors[componentName]} text-white mr-2`}
                      >
                        {footerIcons[componentName]}
                      </div>
                      {componentName.replace(/([A-Z])/g, " $1").trim()}
                    </h3>

                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        4.8
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => {
                        setActiveComponent(componentName);
                        setIsGridView(false);
                      }}
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(footerComponents[componentName])
                      }
                      className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Detail View
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
            {/* Component Selector - Left Side */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-900/20 dark:to-indigo-900/20">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-purple-500" />
                  Components
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(footerComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${footerBgs[componentName]} border-l-4 border-purple-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${footerColors[componentName]} text-white`}
                    >
                      {footerIcons[componentName]}
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 block">
                        {componentName.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Component Display - Right Side */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeComponent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Component Header */}
                  <div
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 ${footerBgs[activeComponent]}`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                        <div
                          className={`p-1.5 rounded-md bg-gradient-to-r ${footerColors[activeComponent]} text-white mr-2`}
                        >
                          {footerIcons[activeComponent]}
                        </div>
                        <span>
                          {activeComponent.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                      </h2>

                      {/* Tabs */}
                      <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <button
                          onClick={() => setActiveTab("preview")}
                          className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                            activeTab === "preview"
                              ? `bg-gradient-to-r ${footerBgs[activeComponent]} text-purple-700 dark:text-purple-300`
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("code")}
                          className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                            activeTab === "code"
                              ? `bg-gradient-to-r ${footerBgs[activeComponent]} text-purple-700 dark:text-purple-300`
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <Code className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Component Content */}
                  <div className="p-6">
                    {activeTab === "preview" ? (
                      <div className="flex flex-col">
                        {/* Interactive Preview */}
                        <div
                          className={`flex flex-col items-center justify-center p-10 ${footerBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
                        >
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                          >
                            {renderComponent(activeComponent)}
                          </motion.div>
                        </div>

                        {/* Component Info */}
                        <div className="bg-gradient-to-r from-purple-500/5 to-indigo-500/5 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-lg border border-purple-200 dark:border-purple-800/30 overflow-hidden">
                          <button
                            onClick={() => setExpandedInfo(!expandedInfo)}
                            className="w-full p-4 flex justify-between items-center text-left"
                          >
                            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                              <Zap className="w-4 h-4 text-purple-500 mr-2" />
                              Footer Details & Usage Tips
                            </h3>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                expandedInfo ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedInfo && (
                            <div className="p-4 pt-0 border-t border-purple-200 dark:border-purple-800/30">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Features
                                  </h4>
                                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>
                                      Retro-inspired design with pixel-perfect
                                      details
                                    </li>
                                    <li>Bold borders and shadow effects</li>
                                    <li>Fully responsive and accessible</li>
                                    <li>Customizable colors and layouts</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Customization
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    This footer can be easily customized by
                                    modifying the Tailwind classes. Try changing
                                    colors, sizes, or adding additional elements
                                    to match your project's design.
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4 pt-4 border-t border-purple-200/50 dark:border-purple-800/20">
                                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                  Installation
                                </h4>
                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={() => {
                                      setActiveTab("code");
                                    }}
                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium flex items-center gap-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                  >
                                    <Code className="w-4 h-4" />
                                    View Code
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="absolute top-0 left-0 w-full h-10 bg-gray-800 dark:bg-gray-700 rounded-t-md flex items-center px-4">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-xs text-gray-400 ml-4">
                            components/Footers/{activeComponent}.jsx
                          </span>
                        </div>
                        <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                          <SyntaxHighlighter
                            language="jsx"
                            style={atomDark}
                            showLineNumbers={true}
                            wrapLines={true}
                          >
                            {footerComponents[activeComponent]}
                          </SyntaxHighlighter>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(footerComponents[activeComponent])
                          }
                          className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
                        >
                          {copySuccess ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy Code</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterShowcase;
