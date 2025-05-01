"use client";

import { useState, useEffect } from "react";
import { X, Github, ExternalLink, AlignRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ModeToggle";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Components",
    href: "/components",
  },
  {
    name: "Pages Example",
    href: "/pages",
  },
];

export default function RetroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-[0_2px_0_0_rgba(0,0,0,0.1)] dark:shadow-[0_2px_0_0_rgba(255,255,255,0.1)]"
          : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex items-center justify-between p-4 sm:px-6 lg:px-8">
        <NavLink to={"/"} className="flex items-center space-x-2 group">
          <motion.span
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <svg
              width="40"
              height="46"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                className="fill-black dark:fill-white"
              />
            </svg>
          </motion.span>
          <span className="font-bold text-xl sm:text-2xl relative dark:text-white">
            retroUI
            <span className="absolute -top-1 -right-4 text-xs bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-1 rounded-sm transform rotate-12">
              v1
            </span>
          </span>
        </NavLink>

        <div className="hidden grow items-start lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={`
                    text-lg font-semibold relative px-2 py-1
                    transition-all duration-300 ease-in-out
                    ${
                      location.pathname === item.href
                        ? "text-black dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-cyan-500 after:to-teal-500"
                        : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          <a
            href="https://github.com/Omi-Patel"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-black dark:bg-white text-teal-400 dark:text-gray-900 rounded-md border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <div className="lg:hidden flex gap-4 items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="h-10 w-10 flex items-center justify-center  text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <AlignRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-0 z-50 p-2 lg:hidden"
            >
              <div className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-md dark:shadow-sm">
                <div className="px-4 pt-4 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Logo */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 50 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover:scale-110"
                      >
                        <path
                          d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                          className="fill-black dark:fill-white"
                        />
                      </svg>
                      <span className="font-semibold text-lg dark:text-white">
                        retroUI
                      </span>
                    </div>
                    <button
                      onClick={toggleMenu}
                      className="p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Menu items */}
                  <nav className="mt-4 space-y-2">
                    {menuItems.map((item) => (
                      <NavLink
                        onClick={toggleMenu}
                        key={item.name}
                        to={item.href}
                        className={`flex items-center rounded px-3 py-2 text-sm font-medium transition-colors ${
                          location.pathname === item.href
                            ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-l-2 border-teal-500"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/40"
                        }`}
                      >
                        {item.name}
                        {location.pathname === item.href && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500"
                          />
                        )}
                      </NavLink>
                    ))}
                  </nav>

                  {/* GitHub Button */}
                  <a
                    href="https://github.com/Omi-Patel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Visit GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
