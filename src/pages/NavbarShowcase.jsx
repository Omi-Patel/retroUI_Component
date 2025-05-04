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
  Menu,
  Navigation,
  LayoutGrid,
  Compass,
  Palette,
} from "lucide-react";

// Import navbar components
import RetroNavbar from "../components/Navbars/RetroNavbar";
import RetroNavbar1 from "../components/Navbars/RetroNavbar1";
import NeonNavbar from "../components/Navbars/NeonNavbar";
import PixelNavbar from "../components/Navbars/PixelNavbar";
import GradientNavbar from "../components/Navbars/GradientNavbar";

// Sample code snippets for navbars
const navbarComponents = {
  RetroNavbar: `
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
        className={\`fixed top-0 right-0 w-3/4 md:w-1/2 h-full bg-yellow-50 border-t-4 border-black shadow-[4px_4px_0px_0px_black] transform \${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50\`}
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
`,
  RetroNavbar1: `
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
`,
  NeonNavbar: `
import React, { useState } from "react";

const NeonNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1c1c1c] border-b-4 border-[#00ffff] shadow-[6px_6px_0px_0px_#00ffff] p-4 font-mono">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-[#00ffff] hover:text-[#8aec48] transition duration-300 ease-out">
          NeonNav
        </div>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="relative group text-[#00ffff] hover:text-[#fff] transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-[#00ffff] animate-pulse"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#00ffff] hover:text-white transition-all duration-300 focus:outline-none"
          >
            {isOpen ? (
              // Close button when menu is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={\`\${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#1c1c1c] border-t-4 border-[#00ffff] p-4 mt-4\`}
      >
        <ul className="space-y-4">
          {["Home", "About", "Services", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="relative block text-2xl font-bold text-[#00ffff] hover:text-[#fff] transition-all duration-300"
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

export default NeonNavbar;
`,
  PixelNavbar: `
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
        className={\`fixed top-0 left-0 w-full h-full bg-[#d9f99d] border-t-4 border-black p-8 transform \${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-transform duration-500 ease-in-out z-50\`}
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
`,
  GradientNavbar: `
import React, { useState } from "react";

const UniqueNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] p-4 font-mono shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-white hover:text-yellow-300 transition duration-300 ease-out transform hover:scale-110">
          UniqueNav
        </div>

        {/* Menu Links for Desktop */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="relative group text-white hover:text-yellow-300 transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-yellow-300 transition-all duration-300 focus:outline-none"
          >
            {isOpen ? (
              // Close button when menu is open
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
              // Hamburger menu icon when closed
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={\`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#34495e] to-[#2c3e50] p-8 transform \${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-transform duration-500 ease-in-out z-50\`}
      >
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-yellow-300 transition-all duration-300 focus:outline-none"
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
                className="text-3xl font-bold text-white hover:text-yellow-300 transition-all duration-300 block"
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

export default UniqueNavbar;
`,
};

const NavbarShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("RetroNavbar");
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

  const navbarIcons = {
    RetroNavbar: <Menu className="w-5 h-5" />,
    RetroNavbar1: <Navigation className="w-5 h-5" />,
    NeonNavbar: <LayoutGrid className="w-5 h-5" />,
    PixelNavbar: <Compass className="w-5 h-5" />,
    GradientNavbar: <Palette className="w-5 h-5" />,
  };

  const navbarColors = {
    RetroNavbar: "from-amber-400 to-amber-500",
    RetroNavbar1: "from-orange-400 to-orange-500",
    NeonNavbar: "from-cyan-400 to-cyan-500",
    PixelNavbar: "from-lime-400 to-lime-500",
    GradientNavbar: "from-slate-400 to-slate-500",
  };

  const navbarBgs = {
    RetroNavbar:
      "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-900/30",
    RetroNavbar1:
      "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/30",
    NeonNavbar:
      "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/30",
    PixelNavbar:
      "bg-gradient-to-br from-lime-50 to-lime-100 dark:from-lime-900/20 dark:to-lime-900/30",
    GradientNavbar:
      "bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/20 dark:to-slate-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "RetroNavbar":
        return <RetroNavbar />;
      case "RetroNavbar1":
        return <RetroNavbar1 />;
      case "NeonNavbar":
        return <NeonNavbar />;
      case "PixelNavbar":
        return <PixelNavbar />;
      case "GradientNavbar":
        return <GradientNavbar />;
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
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 dark:from-teal-900/20 dark:to-emerald-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-teal-200/50 dark:border-teal-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Navbar</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-teal-200 dark:bg-teal-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Components</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                Pixel-perfect, nostalgic navigation designs for your modern web
                applications. Bring the charm of retro aesthetics to your UI.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-md shadow-lg hover:shadow-teal-500/25 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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

            <div className="bg-gradient-to-br from-teal-600 to-emerald-600 p-4 rounded-md w-[50%] h-24 md:flex flex-col justify-between text-white hidden md:visible">
              <div className="flex justify-between items-center">
                {/* Brand/Logo Placeholder */}
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-md"></div>{" "}
                  {/* Logo shape */}
                  <div className="w-24 h-4 ml-2 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                  {/* Brand name */}
                </div>

                {/* Navigation Links Placeholder (hidden on small screens, visible on medium/large) */}
                <div className="hidden md:flex items-center space-x-4">
                  <div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>

                {/* Action Button/User Placeholder */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>{" "}
                  {/* User Avatar/Icon */}
                  <div className="w-16 h-8 bg-blue-500 rounded"></div>{" "}
                  {/* Button Placeholder */}
                </div>

                {/* Mobile Menu Icon Placeholder (visible on small screens, hidden on medium/large) */}
                <div className="md:hidden">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                  {/* Menu Icon */}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-teal-500" />
            Navbar Collection
          </h2>

        </div>

        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.keys(navbarComponents).map((componentName) => (
              <motion.div
                key={componentName}
                whileHover={{ y: -5 }}
                className={`${navbarBgs[componentName]} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                {/* Modified div below */}
                <div className="p-6 flex flex-col items-center justify-center min-h-[200px] overflow-x-auto">
                  {renderComponent(componentName)}
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${navbarColors[componentName]} text-white mr-2`}
                      >
                        {navbarIcons[componentName]}
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
                      className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(navbarComponents[componentName])
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
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 dark:from-teal-900/20 dark:to-emerald-900/20">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-teal-500" />
                  Components
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(navbarComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${navbarBgs[componentName]} border-l-4 border-teal-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${navbarColors[componentName]} text-white`}
                    >
                      {navbarIcons[componentName]}
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
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 ${navbarBgs[activeComponent]}`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                        <div
                          className={`p-1.5 rounded-md bg-gradient-to-r ${navbarColors[activeComponent]} text-white mr-2`}
                        >
                          {navbarIcons[activeComponent]}
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
                              ? `bg-gradient-to-r ${navbarBgs[activeComponent]} text-teal-700 dark:text-teal-300`
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
                              ? `bg-gradient-to-r ${navbarBgs[activeComponent]} text-teal-700 dark:text-teal-300`
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
                          className={`flex flex-col items-center justify-center p-10 ${navbarBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
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
                        <div className="bg-gradient-to-r from-teal-500/5 to-emerald-500/5 dark:from-teal-900/10 dark:to-emerald-900/10 rounded-lg border border-teal-200 dark:border-teal-800/30 overflow-hidden">
                          <button
                            onClick={() => setExpandedInfo(!expandedInfo)}
                            className="w-full p-4 flex justify-between items-center text-left"
                          >
                            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                              <Zap className="w-4 h-4 text-teal-500 mr-2" />
                              Navbar Details & Usage Tips
                            </h3>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                expandedInfo ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedInfo && (
                            <div className="p-4 pt-0 border-t border-teal-200 dark:border-teal-800/30">
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
                                    <li>
                                      Responsive mobile and desktop layouts
                                    </li>
                                    <li>
                                      Interactive hover and click animations
                                    </li>
                                    <li>Customizable colors and styles</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Customization
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    This navbar can be easily customized by
                                    modifying the Tailwind classes. Try changing
                                    colors, fonts, or adding additional elements
                                    to match your project's design.
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4 pt-4 border-t border-teal-200/50 dark:border-teal-800/20">
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
                            components/Navbars/{activeComponent}.jsx
                          </span>
                        </div>
                        <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                          <SyntaxHighlighter
                            language="jsx"
                            style={atomDark}
                            showLineNumbers={true}
                            wrapLines={true}
                          >
                            {navbarComponents[activeComponent]}
                          </SyntaxHighlighter>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(navbarComponents[activeComponent])
                          }
                          className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
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

export default NavbarShowcase;
