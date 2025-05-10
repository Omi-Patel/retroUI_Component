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
  Palette,
  Monitor,
  Grid,
  ArrowRight,
  Star,
  Download,
  Eye,
  Sparkles,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

import ContactPage from "../ContactPage/ContactPage";
import RetroContactPage from "../ContactPage/RetroContactPage";
import SimpleContactPage from "../ContactPage/SimpleContactPage";

const pageComponents = {
  ContactPage: `
import { useState } from "react";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#fcf6e3] text-[#2b3a67] font-sans m-1 sm:m-8">
      <div className="bg-[#f7b32b] h-2"></div>
      <div className="bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]">
        <main className="container mx-auto ">
          {/* Navbar   */}
          <div>
            <header className="bg-[#2b3a67] text-[#fcf6e3] p-4">
              <div className="container mx-auto flex justify-between items-center">
                <a
                  href="#"
                  className="text-2xl sm:text-3xl font-bold tracking-wider"
                >
                  <span className="text-[#f7b32b]">Retro</span>
                  <span className="text-[#f26419]">SaaS</span>
                </a>
                <nav className="hidden md:block">
                  <ul className="flex space-x-6">
                    {["Home", "About", "Services", "Contact"].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="hover:text-[#f7b32b] transition-colors text-lg relative group"
                        >
                          {item}
                          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#f7b32b] transition-all group-hover:w-full"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-[#f7b32b]"
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </header>
            {isMenuOpen && (
              <nav className="bg-[#2b3a67] text-[#fcf6e3] p-4 md:hidden">
                <ul className="space-y-2">
                  {["Home", "About", "Services", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block hover:text-[#f7b32b] transition-colors text-lg"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div className=" px-2 sm:px-4">
            <h1 className="text-5xl font-bold mb-12 text-center text-[#2b3a67] tracking-tight">
              Contact Us
            </h1>
            <div className="max-w-2xl mx-auto bg-[#fcf6e3] p-8 rounded-lg shadow-lg border-4 border-[#f26419] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#f7b32b] transform rotate-45 translate-x-8 -translate-y-8"></div>
              <form className="relative z-10">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-[#2b3a67] font-bold mb-2 text-lg"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 text-[#2b3a67] border-2 border-[#f26419] rounded-lg focus:outline-none focus:border-[#f7b32b] bg-[#fcf6e3]"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-[#2b3a67] font-bold mb-2 text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 text-[#2b3a67] border-2 border-[#f26419] rounded-lg focus:outline-none focus:border-[#f7b32b] bg-[#fcf6e3]"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-[#2b3a67] font-bold mb-2 text-lg"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 text-[#2b3a67] border-2 border-[#f26419] rounded-lg focus:outline-none focus:border-[#f7b32b] bg-[#fcf6e3]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#f26419] text-[#fcf6e3] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#f7b32b] hover:text-[#2b3a67] shadow-lg w-full transform hover:scale-105 transition-transform duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="mt-12 text-center bg-[#2b3a67] text-[#fcf6e3] p-8 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2252%22%20height%3D%2226%22%20viewBox%3D%220%200%2052%2026%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f7b32b%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M10%2010c0-2.21-1.79-4-4-4-3.314%200-6-2.686-6-6h2c0%202.21%201.79%204%204%204%203.314%200%206%202.686%206%206%200%202.21%201.79%204%204%204%203.314%200%206%202.686%206%206%200%202.21%201.79%204%204%204v2c-3.314%200-6-2.686-6-6%200-2.21-1.79-4-4-4-3.314%200-6-2.686-6-6zm25.464-1.95l8.486%208.486-1.414%201.414-8.486-8.486%201.414-1.414z%22%20%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-[#f7b32b]">
                  Visit Us
                </h2>
                <p className="text-lg mb-2">
                  123 Retro Street, Vintage City, RC 12345
                </p>
                <p className="text-lg">Monday - Friday: 9am - 5pm</p>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <footer className="bg-[#2b3a67] text-[#fcf6e3] p-3 mt-8">
            <div className="container mx-auto text-center">
              <p className="mb-3">
                &copy; 2023 RetroSaaS. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center gap-2">
                {["Privacy Policy", "Terms of Service", "Contact Us"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="hover:text-[#f7b32b] transition-colors "
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

  `,
  RetroContactPage: `
"use client";

import { useState } from "react";

export default function RetroContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#fcf6e3] font-sans relative overflow-hidden">
      {/* Retro Pattern Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      
      <main className="container mx-auto px-4 py-8 relative">
        {/* Navbar */}
        <div>
          <header className="bg-[#2b2b2b] text-[#fcf6e3] p-4 rounded-lg mb-8 border-2 border-[#f26419] shadow-[8px_8px_0px_0px_rgba(242,100,25,0.3)] relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
            <div className="container mx-auto flex justify-between items-center relative z-10">
              <a href="#" className="text-2xl sm:text-3xl font-bold tracking-wider relative group">
                <span className="text-[#f7b32b] relative z-10 font-display">Retro</span>
                <span className="text-[#f26419] relative z-10 font-display">SaaS</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#f26419] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  {["Home", "About", "Services", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-[#f7b32b] transition-colors text-lg relative group font-display"
                      >
                        {item}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#f7b32b] transition-all group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-[#f7b32b]"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </header>
          {isMenuOpen && (
            <nav className="bg-[#2b2b2b] text-[#fcf6e3] p-4 rounded-lg mb-8 border-2 border-[#f26419] shadow-[8px_8px_0px_0px_rgba(242,100,25,0.3)] md:hidden">
              <ul className="space-y-2">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block hover:text-[#f7b32b] transition-colors text-lg font-display"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <div className="px-2 sm:px-4">
          <h1 className="text-6xl font-bold mb-12 text-center text-[#fcf6e3] tracking-tight relative font-display">
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-[#f26419]"></span>
          </h1>
          
          {/* Contact Grid - New Layout */}
          <div className="max-w-6xl mx-auto">
            {/* Contact Info Cards - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#2b2b2b] p-6 rounded-lg border-2 border-[#f26419] shadow-[8px_8px_0px_0px_rgba(242,100,25,0.3)] relative group hover:shadow-[12px_12px_0px_0px_rgba(242,100,25,0.4)] transition-all duration-300">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
                <div className="relative z-10">
                  <div className="bg-[#f7b32b]/20 p-3 rounded-lg border border-[#f26419]/30 inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f7b32b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-[#fcf6e3] mb-2 font-display">Address</h3>
                  <p className="text-[#fcf6e3]/80 font-display">123 Retro Street, Vintage City, RC 12345</p>
                </div>
              </div>

              <div className="bg-[#2b2b2b] p-6 rounded-lg border-2 border-[#f26419] shadow-[8px_8px_0px_0px_rgba(242,100,25,0.3)] relative group hover:shadow-[12px_12px_0px_0px_rgba(242,100,25,0.4)] transition-all duration-300">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
                <div className="relative z-10">
                  <div className="bg-[#f7b32b]/20 p-3 rounded-lg border border-[#f26419]/30 inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f7b32b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-[#fcf6e3] mb-2 font-display">Email</h3>
                  <p className="text-[#fcf6e3]/80 font-display">contact@retrosaas.com</p>
                </div>
              </div>

              <div className="bg-[#2b2b2b] p-6 rounded-lg border-2 border-[#f26419] shadow-[8px_8px_0px_0px_rgba(242,100,25,0.3)] relative group hover:shadow-[12px_12px_0px_0px_rgba(242,100,25,0.4)] transition-all duration-300">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
                <div className="relative z-10">
                  <div className="bg-[#f7b32b]/20 p-3 rounded-lg border border-[#f26419]/30 inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f7b32b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-[#fcf6e3] mb-2 font-display">Phone</h3>
                  <p className="text-[#fcf6e3]/80 font-display">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2 bg-[#2b2b2b] p-8 rounded-lg border-2 border-[#f26419] shadow-[12px_12px_0px_0px_rgba(242,100,25,0.3)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
                <form className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-[#fcf6e3] font-bold mb-2 text-lg font-display">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 text-[#fcf6e3] border-2 border-[#f26419] rounded-lg focus:outline-none focus:border-[#f7b32b] bg-[#1a1a1a]/50 transition-all duration-300 hover:border-[#f26419] font-display"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[#fcf6e3] font-bold mb-2 text-lg font-display">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 text-[#fcf6e3] border-2 border-[#f26419] rounded-lg focus:outline-none focus:border-[#f7b32b] bg-[#1a1a1a]/50 transition-all duration-300 hover:border-[#f26419] font-display"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-[#fcf6e3] font-bold mb-2 text-lg font-display">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 text-[#fcf6e3] border-2 border-[#f26419] rounded-lg focus:outline-none focus:border-[#f7b32b] bg-[#1a1a1a]/50 transition-all duration-300 hover:border-[#f26419] font-display"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#f26419] to-[#f7b32b] text-[#fcf6e3] px-8 py-4 rounded-lg text-xl font-bold hover:from-[#f7b32b] hover:to-[#f26419] shadow-[6px_6px_0px_0px_rgba(242,100,25,0.4)] w-full transform hover:scale-105 transition-all duration-200 font-display relative group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>

              {/* Business Hours */}
              <div className="bg-[#2b2b2b] p-8 rounded-lg border-2 border-[#f26419] shadow-[12px_12px_0px_0px_rgba(242,100,25,0.3)] relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 text-[#fcf6e3] relative inline-block font-display">
                    Business Hours
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#f26419]"></span>
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-[#1a1a1a]/50 rounded-lg border border-[#f26419]/30">
                      <span className="text-[#fcf6e3]/80 font-display">Monday - Friday</span>
                      <span className="text-[#f7b32b] font-bold font-display">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#1a1a1a]/50 rounded-lg border border-[#f26419]/30">
                      <span className="text-[#fcf6e3]/80 font-display">Saturday</span>
                      <span className="text-[#f7b32b] font-bold font-display">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#1a1a1a]/50 rounded-lg border border-[#f26419]/30">
                      <span className="text-[#fcf6e3]/80 font-display">Sunday</span>
                      <span className="text-[#f7b32b] font-bold font-display">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#2b2b2b] text-[#fcf6e3] p-3 mt-8 rounded-lg border-2 border-[#f26419] shadow-[8px_8px_0px_0px_rgba(242,100,25,0.3)]">
          <div className="container mx-auto text-center">
            <p className="mb-3 font-display">&copy; 2023 RetroSaaS. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center gap-2">
              {["Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-[#f7b32b] transition-colors relative group font-display"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f7b32b] transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
} 
  `,
  SimpleContactPage: `
"use client";

import { useState } from "react";

export default function SimpleContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcf6e3] to-[#f7e9d7] text-[#2b3a67] font-sans">
      <div className="bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23f26419%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%200h20L0%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]">
        <main className="container mx-auto px-4 py-8">
          {/* Navbar */}
          <div>
            <header className="bg-white/80 backdrop-blur-sm text-[#2b3a67] p-4 rounded-lg mb-8 border-2 border-[#f26419]/20 shadow-[4px_4px_0px_0px_rgba(242,100,25,0.2)]">
              <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl sm:text-3xl font-bold tracking-wider relative group">
                  <span className="text-[#f7b32b] relative z-10">Retro</span>
                  <span className="text-[#f26419] relative z-10">SaaS</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#f26419] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <nav className="hidden md:block">
                  <ul className="flex space-x-6">
                    {["Home", "About", "Services", "Contact"].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="hover:text-[#f7b32b] transition-colors text-lg relative group"
                        >
                          {item}
                          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#f7b32b] transition-all group-hover:w-full"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-[#f7b32b]"
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </header>
            {isMenuOpen && (
              <nav className="bg-white/80 backdrop-blur-sm text-[#2b3a67] p-4 rounded-lg mb-8 border-2 border-[#f26419]/20 shadow-[4px_4px_0px_0px_rgba(242,100,25,0.2)] md:hidden">
                <ul className="space-y-2">
                  {["Home", "About", "Services", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block hover:text-[#f7b32b] transition-colors text-lg"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div className="px-2 sm:px-4">
            <h1 className="text-5xl font-bold mb-12 text-center text-[#2b3a67] tracking-tight relative">
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#f26419]"></span>
            </h1>
            
            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(242,100,25,0.2)] border-2 border-[#f26419]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7b32b]/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
                <form className="relative z-10">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-[#2b3a67] font-bold mb-2 text-lg">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 text-[#2b3a67] border-2 border-[#f26419]/20 rounded-lg focus:outline-none focus:border-[#f7b32b] bg-white/50 transition-all duration-300 hover:border-[#f26419]/40"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-[#2b3a67] font-bold mb-2 text-lg">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 text-[#2b3a67] border-2 border-[#f26419]/20 rounded-lg focus:outline-none focus:border-[#f7b32b] bg-white/50 transition-all duration-300 hover:border-[#f26419]/40"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-[#2b3a67] font-bold mb-2 text-lg">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 text-[#2b3a67] border-2 border-[#f26419]/20 rounded-lg focus:outline-none focus:border-[#f7b32b] bg-white/50 transition-all duration-300 hover:border-[#f26419]/40"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-[#2b3a67] font-bold mb-2 text-lg">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 text-[#2b3a67] border-2 border-[#f26419]/20 rounded-lg focus:outline-none focus:border-[#f7b32b] bg-white/50 transition-all duration-300 hover:border-[#f26419]/40"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#f26419] to-[#f7b32b] text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-[#f7b32b] hover:to-[#f26419] shadow-[4px_4px_0px_0px_rgba(242,100,25,0.4)] w-full transform hover:scale-105 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(242,100,25,0.2)] border-2 border-[#f26419]/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2252%22%20height%3D%2226%22%20viewBox%3D%220%200%2052%2026%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f7b32b%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M10%2010c0-2.21-1.79-4-4-4-3.314%200-6-2.686-6-6h2c0%202.21%201.79%204%204%204%203.314%200%206%202.686%206%206%200%202.21%201.79%204%204%204%203.314%200%206%202.686%206%206%200%202.21%201.79%204%204%204v2c-3.314%200-6-2.686-6-6%200-2.21-1.79-4-4-4-3.314%200-6-2.686-6-6zm25.464-1.95l8.486%208.486-1.414%201.414-8.486-8.486%201.414-1.414z%22%20%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-6 text-[#f7b32b] relative inline-block">
                      Contact Info
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#f26419]"></span>
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#f7b32b]/20 p-2 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f7b32b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-[#2b3a67]">Address</h3>
                          <p className="text-[#2b3a67]/80">123 Retro Street, Vintage City, RC 12345</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#f7b32b]/20 p-2 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f7b32b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-[#2b3a67]">Email</h3>
                          <p className="text-[#2b3a67]/80">contact@retrosaas.com</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#f7b32b]/20 p-2 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f7b32b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-[#2b3a67]">Phone</h3>
                          <p className="text-[#2b3a67]/80">+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(242,100,25,0.2)] border-2 border-[#f26419]/20">
                  <h2 className="text-2xl font-bold mb-4 text-[#2b3a67] relative inline-block">
                    Business Hours
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#f26419]"></span>
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#2b3a67]/80">Monday - Friday</span>
                      <span className="text-[#f7b32b] font-bold">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#2b3a67]/80">Saturday</span>
                      <span className="text-[#f7b32b] font-bold">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#2b3a67]/80">Sunday</span>
                      <span className="text-[#f7b32b] font-bold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white/80 backdrop-blur-sm text-[#2b3a67] p-3 mt-8 rounded-lg border-2 border-[#f26419]/20 shadow-[4px_4px_0px_0px_rgba(242,100,25,0.2)]">
            <div className="container mx-auto text-center">
              <p className="mb-3">&copy; 2023 RetroSaaS. All rights reserved.</p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center gap-2">
                {["Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-[#f7b32b] transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f7b32b] transition-all group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
} 
  `,
};

const ContactPageShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("ContactPage");
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

  const pageIcons = {
    ContactPage: <Mail className="w-5 h-5" />,
    RetroContactPage: <Phone className="w-5 h-5" />,
    SimpleContactPage: <MessageSquare className="w-5 h-5" />,
  };

  const pageColors = {
    ContactPage: "from-blue-400 to-cyan-500",
    RetroContactPage: "from-cyan-400 to-teal-500",
    SimpleContactPage: "from-sky-400 to-blue-500",
  };

  const pageBgs = {
    ContactPage:
      "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/30",
    RetroContactPage:
      "bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-cyan-900/20 dark:to-teal-900/30",
    SimpleContactPage:
      "bg-gradient-to-br from-sky-50 to-blue-100 dark:from-sky-900/20 dark:to-blue-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "ContactPage":
        return <ContactPage />;
      case "RetroContactPage":
        return <RetroContactPage />;
      case "SimpleContactPage":
        return <SimpleContactPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-300 bg-[url('/grid-pattern.svg')] bg-fixed">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-900/20 dark:to-cyan-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-blue-200/50 dark:border-blue-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 dark:bg-blue-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Pages</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Discover our collection of retro-themed contact page templates,
                designed to help your users reach out with style. Each page is
                fully customizable and ready to use.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={() => setIsGridView(!isGridView)}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                >
                  <Grid className="w-4 h-4 mr-2" />
                  {isGridView ? "List View" : "Grid View"}
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="h-4 w-16 bg-blue-200 dark:bg-blue-700 rounded mb-2"></div>
                  <div className="h-8 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="h-12 w-12 bg-cyan-200 dark:bg-cyan-700 rounded-full mx-auto mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-100 dark:bg-gray-700 rounded mx-auto"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-8 w-3/4 bg-sky-200 dark:bg-sky-700 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex justify-between mb-2">
                    <div className="h-4 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-12 w-full bg-teal-200 dark:bg-teal-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Component List - Left Side */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100">
                  Contact Pages
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(pageComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${pageBgs[componentName]} border-l-4 border-blue-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${pageColors[componentName]} text-white`}
                    >
                      {pageIcons[componentName]}
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
                  className={`p-4 border-b border-gray-200 dark:border-gray-700 ${pageBgs[activeComponent]}`}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${pageColors[activeComponent]} text-white mr-2`}
                      >
                        {pageIcons[activeComponent]}
                      </div>
                      <span>
                        {activeComponent.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </h2>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setActiveTab("preview")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === "preview"
                            ? "bg-blue-500 text-white"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        Preview
                      </button>
                      <button
                        onClick={() => setActiveTab("code")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === "code"
                            ? "bg-blue-500 text-white"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        Code
                      </button>
                    </div>
                  </div>
                </div>

                {/* Component Content */}
                <div className="p-0">
                  {activeTab === "preview" ? (
                    <div className="flex flex-col">
                      {/* Interactive Preview */}
                      <div
                        className={`flex flex-col items-center justify-center ${pageBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700`}
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
                      <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-lg border border-blue-200 dark:border-blue-800/30 overflow-hidden">
                        <button
                          onClick={() => setExpandedInfo(!expandedInfo)}
                          className="w-full p-4 flex justify-between items-center text-left"
                        >
                          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                            <Zap className="w-4 h-4 text-blue-500 mr-2" />
                            Page Details & Usage Tips
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform ${
                              expandedInfo ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expandedInfo && (
                          <div className="p-4 pt-0 border-t border-blue-200 dark:border-blue-800/30">
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
                                  <li>Fully responsive layout</li>
                                  <li>Dark mode support</li>
                                  <li>Customizable components</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                  Customization
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                  This page can be easily customized by
                                  modifying the Tailwind classes. Try changing
                                  colors, layouts, or adding additional sections
                                  to match your project's design.
                                </p>
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
                          pages/Contact/{activeComponent}.jsx
                        </span>
                      </div>
                      <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                        <SyntaxHighlighter
                          language="jsx"
                          style={atomDark}
                          showLineNumbers={true}
                          wrapLines={true}
                        >
                          {pageComponents[activeComponent]}
                        </SyntaxHighlighter>
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard(pageComponents[activeComponent])
                        }
                        className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
                      >
                        {copySuccess ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy Code
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
      </div>
    </div>
  );
};

export default ContactPageShowcase;
