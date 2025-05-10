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
  Users,
  Heart,
  Award,
} from "lucide-react";

import AboutPage from "../AboutPage/AboutPage";
import RetroAboutPage from "../AboutPage/RetroAbout";

const pageComponents = {
  AboutPage: `
import { useState } from "react";

export default function AboutPage() {
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
              About RetroSaaS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f26419] transform -rotate-6 rounded-lg"></div>
                <img
                  src="https://picsum.photos/id/294/950"
                  alt="Retro computer"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
              <div>
                <p className="text-lg mb-6 text-[#2b3a67] leading-relaxed">
                  RetroSaaS is a passion project born out of our love for
                  vintage aesthetics and modern web technologies. We believe
                  that the charm of yesteryear can be seamlessly blended with
                  the functionality of today's web applications.
                </p>
                <p className="text-lg mb-6 text-[#2b3a67] leading-relaxed">
                  Our mission is to provide developers and designers with a
                  comprehensive library of retro-themed components that are easy
                  to use, fully responsive, and built with the latest web
                  standards in mind.
                </p>
                <p className="text-lg text-[#2b3a67] leading-relaxed">
                  Whether you're building a nostalgic personal blog or a
                  full-fledged SaaS application with a vintage twist, RetroSaaS
                  has got you covered.
                </p>
              </div>
            </div>
            <div className="bg-[#2b3a67] p-8 rounded-lg shadow-lg text-[#fcf6e3] relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f7b32b%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm40%2040h40v40H40V40zm0-40h2l-2%202V0zm0%204l4-4h2l-6%206V4zm0%204l8-8h2L40%2010V8zm0%204L52%200h2L40%2014v-2zm0%204L56%200h2L40%2018v-2zm0%204L60%200h2L40%2022v-2zm0%204L64%200h2L40%2026v-2zm0%204L68%200h2L40%2030v-2zm0%204L72%200h2L40%2034v-2zm0%204L76%200h2L40%2038v-2zm0%204L80%200v2L42%2040h-2zm4%200L80%204v2L46%2040h-2zm4%200L80%208v2L50%2040h-2zm4%200l28-28v2L54%2040h-2zm4%200l24-24v2L58%2040h-2zm4%200l20-20v2L62%2040h-2zm4%200l16-16v2L66%2040h-2zm4%200l12-12v2L70%2040h-2zm4%200l8-8v2l-6%206h-2zm4%200l4-4v2l-2%202h-2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#f7b32b]">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Nostalgia",
                      desc: "We cherish the aesthetics of the past and bring them to life in the digital age.",
                    },
                    {
                      title: "Innovation",
                      desc: "While we love retro design, we use cutting-edge technology to deliver the best experience.",
                    },
                    {
                      title: "Community",
                      desc: "We believe in fostering a community of developers who appreciate vintage design.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="text-center bg-[#fcf6e3] p-6 rounded-lg shadow-inner text-[#2b3a67] transform hover:scale-105 transition-transform duration-200"
                    >
                      <h3 className="text-xl font-bold mb-4 text-[#f26419]">
                        {item.title}
                      </h3>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
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
  RetroAboutPage: `
import { useState } from "react";

export default function RetroAboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#fcf6e3] text-[#2b3a67] font-sans m-1 sm:m-8">
      {/* Your existing RetroAboutPage code */}
    </div>
  );
}
  `,
};

const AboutPageShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("AboutPage");
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
    AboutPage: <Users className="w-5 h-5" />,
    RetroAboutPage: <Heart className="w-5 h-5" />,
  };

  const pageColors = {
    AboutPage: "from-violet-400 to-purple-500",
    RetroAboutPage: "from-fuchsia-400 to-pink-500",
    SimpleAboutPage: "from-indigo-400 to-blue-500",
  };

  const pageBgs = {
    AboutPage:
      "bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/30",
    RetroAboutPage:
      "bg-gradient-to-br from-fuchsia-50 to-pink-100 dark:from-fuchsia-900/20 dark:to-pink-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "AboutPage":
        return <AboutPage />;
      case "RetroAboutPage":
        return <RetroAboutPage />;
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
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 dark:from-violet-900/20 dark:to-purple-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-violet-500/20 to-purple-500/20 dark:from-violet-900/30 dark:to-purple-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-violet-200/50 dark:border-violet-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">About</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-violet-200 dark:bg-violet-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Pages</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Discover our collection of retro-themed about page templates,
                crafted to showcase your story with a unique vintage aesthetic.
                Each page is fully customizable and ready to use.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={() => setIsGridView(!isGridView)}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-violet-500 hover:bg-violet-600 text-white transition-colors"
                >
                  <Grid className="w-4 h-4 mr-2" />
                  {isGridView ? "List View" : "Grid View"}
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="h-4 w-16 bg-violet-200 dark:bg-violet-700 rounded mb-2"></div>
                  <div className="h-8 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="h-12 w-12 bg-purple-200 dark:bg-purple-700 rounded-full mx-auto mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-100 dark:bg-gray-700 rounded mx-auto"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-8 w-3/4 bg-indigo-200 dark:bg-indigo-700 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex justify-between mb-2">
                    <div className="h-4 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-12 w-full bg-fuchsia-200 dark:bg-fuchsia-700 rounded"></div>
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
                  About Pages
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
                        ? `${pageBgs[componentName]} border-l-4 border-violet-500`
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
                            ? "bg-violet-500 text-white"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        Preview
                      </button>
                      <button
                        onClick={() => setActiveTab("code")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === "code"
                            ? "bg-violet-500 text-white"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        Code
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
                        className={`flex flex-col items-center justify-center p-10 ${pageBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
                      >
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {renderComponent(activeComponent)}
                        </motion.div>
                      </div>

                      {/* Component Info */}
                      <div className="bg-gradient-to-r from-violet-500/5 to-purple-500/5 dark:from-violet-900/10 dark:to-purple-900/10 rounded-lg border border-violet-200 dark:border-violet-800/30 overflow-hidden">
                        <button
                          onClick={() => setExpandedInfo(!expandedInfo)}
                          className="w-full p-4 flex justify-between items-center text-left"
                        >
                          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                            <Zap className="w-4 h-4 text-violet-500 mr-2" />
                            Page Details & Usage Tips
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform ${
                              expandedInfo ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expandedInfo && (
                          <div className="p-4 pt-0 border-t border-violet-200 dark:border-violet-800/30">
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
                          pages/About/{activeComponent}.jsx
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
                        className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
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

export default AboutPageShowcase;
