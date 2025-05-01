"use client";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Twitter,
  Heart,
  Mail,
  Github,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gray-100 dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500"></div>

      <div className="absolute -left-16 -top-16 w-32 h-32 rounded-full bg-cyan-200 dark:bg-cyan-900/20 blur-3xl opacity-50"></div>
      <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-teal-200 dark:bg-teal-900/20 blur-3xl opacity-50"></div>

      <div className="container relative z-10 mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo and description */}
          <div className="space-y-3">
            <NavLink to="/" className="flex items-center">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  width="40"
                  height="46"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3"
                >
                  <path
                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                    className="fill-black dark:fill-white"
                  />
                </svg>
              </motion.div>
              <span className="text-xl font-bold dark:text-white">retroUI</span>
            </NavLink>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              A collection of retro-themed UI components designed to bring
              nostalgic vibes to your modern web applications.
            </p>
            <div className="pt-2">
              <a
                href="https://github.com/Omi-Patel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-black dark:bg-white text-teal-400 dark:text-gray-900 rounded-md border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold relative inline-block dark:text-white">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500"></span>
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Components", path: "/components" },
                { name: "Pages Example", path: "/pages" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms-conditions" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and contact */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold relative inline-block dark:text-white">
              Connect With Us
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500"></span>
            </h3>
            <div className="flex flex-wrap gap-3">
              <SocialButton
                href="https://www.instagram.com/omipatel_7113/"
                icon={<Instagram className="w-4 h-4" />}
                label="Instagram"
              />
              <SocialButton
                href="https://x.com/om_patel07"
                icon={<Twitter className="w-4 h-4" />}
                label="Twitter"
              />
              <SocialButton
                href="https://www.linkedin.com/in/ompatel7113/"
                icon={<Linkedin className="w-4 h-4" />}
                label="LinkedIn"
              />
              <SocialButton
                href="mailto:contact@retroui.com"
                icon={<Mail className="w-4 h-4" />}
                label="Email"
              />
            </div>

            <div className="pt-3">
              <h4 className="text-sm font-semibold mb-2 dark:text-white">
                Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="px-3 py-2 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-l-md focus:outline-none w-full max-w-xs"
                />
                <button className="px-3 py-2 bg-black dark:bg-white text-teal-400 dark:text-gray-900 font-medium border-2 border-black dark:border-white rounded-r-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 - {currentYear} retroUI. All rights reserved.
            </p>
            <div className="flex items-center mt-2 sm:mt-0">
              <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 text-teal-500 mx-1" /> by
                Omi Patel
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social button component
const SocialButton = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black dark:border-white bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors duration-300"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
};
