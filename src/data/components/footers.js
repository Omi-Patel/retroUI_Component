import { Layout, Columns, Box, Moon, Sun } from 'lucide-react';

// Component imports
import BasicFooter from '../../components/Footers/BasicFooter';
import BorderedFooter from '../../components/Footers/BorderedFooter';
import ShadowFooter from '../../components/Footers/ShadowFooter';
import ClassicFooter from '../../components/Footers/ClassicFooter';
import NeonFooter from '../../components/Footers/NeonFooter';
import PixelFooter from '../../components/Footers/PixelFooter';

export const footerComponents = [
  {
    name: 'BasicFooter',
    component: BasicFooter,
    icon: Layout,
    code: `import React from "react";

// Marquee-strip footer
const BasicFooter = () => {
  const items = [
    "© 2024 RETRO BRAND",
    "★ ALL RIGHTS RESERVED",
    "✱ MADE WITH NOSTALGIA",
    "▸ NO COOKIES, JUST CRUMBS",
    "✉ SAY HELLO@RETRO.DEV",
  ];

  return (
    <footer className="bg-black text-yellow-300 border-t-4 border-black font-mono overflow-hidden">
      <div className="py-2 whitespace-nowrap animate-[mqFoot_28s_linear_infinite] text-xs tracking-widest font-bold">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="inline-block px-6">
            {t} <span className="opacity-40">·</span>
          </span>
        ))}
      </div>
      <style>{\`@keyframes mqFoot { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }\`}</style>
    </footer>
  );
};

export default BasicFooter;`,
  },
  {
    name: 'BorderedFooter',
    component: BorderedFooter,
    icon: Columns,
    code: `import React from "react";
import { Twitter, Instagram, Github } from "lucide-react";

// Postmark footer — stamp aesthetic
const BorderedFooter = () => {
  return (
    <footer className="bg-yellow-200 text-black border-t-4 border-black font-mono py-8 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.4) 1.2px, transparent 1.5px)",
        backgroundSize: "16px 16px",
      }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-block px-4 py-1 bg-yellow-200 border-[3px] border-red-600 text-red-600 rotate-[-4deg] text-[10px] font-black uppercase tracking-widest mb-4">
          ★ STAMP OF APPROVAL ★
        </div>
        <h3 className="text-3xl font-black uppercase tracking-tight mb-1">CreativeBrand</h3>
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-5">
          POSTMARK · 2024 · ALL RIGHTS RESERVED
        </p>
        <div className="flex justify-center gap-1 mb-5 flex-wrap">
          {["Privacy", "Terms", "Contact", "FAQ"].map((l) => (
            <a key={l} href="#" className="px-3 py-1.5 text-[11px] uppercase tracking-widest font-bold border-2 border-black hover:bg-black hover:text-yellow-200">
              {l}
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {[Twitter, Instagram, Github].map((Icon, i) => (
            <a key={i} href="#" className="inline-flex items-center justify-center w-9 h-9 bg-yellow-200 text-black border-2 border-black shadow-[3px_3px_0px_0px_black]">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default BorderedFooter;`,
  },
  {
    name: 'ShadowFooter',
    component: ShadowFooter,
    icon: Box,
    code: `
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
  },
  {
    name: 'ClassicFooter',
    component: ClassicFooter,
    icon: Layout,
    code: `import React from "react";
import { Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";

// Newsprint columned footer with newsletter
const ClassicFooter = () => {
  return (
    <footer className="bg-[#f5f1e6] text-black border-t-4 border-double border-black font-mono px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-yellow-300 font-black text-xl mb-3">R</div>
            <h3 className="text-2xl font-black uppercase tracking-tight">RetroBrand</h3>
            <p className="text-xs opacity-70 mt-2">Hand-stamped objects for thoughtful people. Est. 1997.</p>
          </div>

          <Column title="Navigation" items={["Home", "About", "Services", "Blog", "Contact"]} />
          <Column title="Follow" items={[
            { label: "Twitter", Icon: Twitter },
            { label: "Instagram", Icon: Instagram },
            { label: "LinkedIn", Icon: Linkedin },
            { label: "GitHub", Icon: Github },
          ]} />

          <div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-3">Newsletter</p>
            <p className="text-xs opacity-80 mb-3">Subscribe for sporadic dispatches and rare drops.</p>
            <form className="space-y-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-white border-2 border-black">
                <Mail className="w-3.5 h-3.5 opacity-60" />
                <input type="email" placeholder="hello@you.dev" className="flex-1 bg-transparent text-xs focus:outline-none placeholder:opacity-40" />
              </div>
              <button type="submit" className="w-full py-2 bg-black text-yellow-300 border-2 border-black text-[10px] font-black uppercase tracking-widest">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-6 border-dashed border-black/30 border-t-2" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] tracking-[0.3em] uppercase opacity-60">
          <p>© 2024 RETROBRAND</p>
          <p>★ NO COOKIES · JUST CRUMBS ★</p>
        </div>
      </div>
    </footer>
  );
};

function Column({ title, items }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-3">{title}</p>
      <ul className="space-y-1.5">
        {items.map((it) => {
          const label = typeof it === "string" ? it : it.label;
          const Icon = typeof it === "string" ? null : it.Icon;
          return (
            <li key={label}>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs hover:underline underline-offset-4">
                {Icon && <Icon className="w-3 h-3 opacity-70" />}
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClassicFooter;`,
  },
  {
    name: 'NeonFooter',
    component: NeonFooter,
    icon: Moon,
    code: `
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
  },
  {
    name: 'PixelFooter',
    component: PixelFooter,
    icon: Sun,
    code: `
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
  },
];

export default footerComponents;
