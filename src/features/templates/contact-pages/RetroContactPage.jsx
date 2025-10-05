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