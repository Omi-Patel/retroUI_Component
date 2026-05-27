import { Menu, Navigation, LayoutGrid, Compass, Palette } from 'lucide-react';

// Component imports
import RetroNavbar from '../../components/Navbars/RetroNavbar';
import RetroNavbar1 from '../../components/Navbars/RetroNavbar1';
import NeonNavbar from '../../components/Navbars/NeonNavbar';
import PixelNavbar from '../../components/Navbars/PixelNavbar';
import GradientNavbar from '../../components/Navbars/GradientNavbar';

export const navbarComponents = [
  {
    name: 'RetroNavbar',
    component: RetroNavbar,
    icon: Menu,
    code: `
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
  },
  {
    name: 'RetroNavbar1',
    component: RetroNavbar1,
    icon: Navigation,
    code: `
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
  },
  {
    name: 'NeonNavbar',
    component: NeonNavbar,
    icon: LayoutGrid,
    code: `
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
  },
  {
    name: 'PixelNavbar',
    component: PixelNavbar,
    icon: Compass,
    code: `
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
  },
  {
    name: 'NewsprintNavbar',
    component: GradientNavbar,
    icon: Palette,
    code: `import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Newsprint masthead navbar
const NewsprintNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f5f1e6] text-black border-b-4 border-black font-mono">
      <div className="border-b-2 border-dashed border-black/40 text-[10px] tracking-[0.3em] uppercase">
        <div className="container mx-auto px-4 py-1 flex items-center justify-between opacity-70">
          <span>VOL. 27 · NO. 14</span>
          <span className="hidden sm:inline">★ ESTABLISHED 1997 ★</span>
          <span>FRIDAY EDITION</span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-none">
          Unique<span className="italic font-light">Daily</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a href="#" className="px-3 py-1.5 text-xs uppercase tracking-widest font-bold hover:bg-yellow-300 transition-colors">{item}</a>
            </li>
          ))}
          <li>
            <a href="#" className="ml-2 px-3 py-1.5 bg-black text-yellow-300 text-xs uppercase tracking-widest font-bold border-2 border-black hover:bg-yellow-300 hover:text-black transition-colors">Subscribe</a>
          </li>
        </ul>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden inline-flex items-center justify-center w-9 h-9 bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_black]">
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden border-t-2 border-dashed border-black/40 bg-[#f5f1e6]">
          <ul className="px-4 py-3 space-y-1">
            {["Home", "About", "Services", "Contact", "Subscribe"].map((item) => (
              <li key={item}>
                <a href="#" className="block px-3 py-2 text-sm uppercase tracking-widest font-bold hover:bg-yellow-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NewsprintNavbar;`,
  },
];

export default navbarComponents;
