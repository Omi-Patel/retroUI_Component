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
  Cpu,
} from "lucide-react";

import HomePage from "../HomePage/HomePage";
import RetroHomePage from "../HomePage/RetroHomePage";
import SimpleHomePage from "../HomePage/SimpleHomePage";

const pageComponents = {
  HomePage: `https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents`,
  RetroHomePage: `https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents`,
  SimpleHomePage: `https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents`,
};

const HomePageShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("HomePage");
  const [activeTabs, setActiveTabs] = useState({
    HomePage: "preview",
    RetroHomePage: "preview",
    SimpleHomePage: "preview",
  });
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
    HomePage: <Cpu className="w-5 h-5" />,
    RetroHomePage: <Zap className="w-5 h-5" />,
    SimpleHomePage: <Palette className="w-5 h-5" />,
  };

  const pageColors = {
    HomePage: "from-emerald-400 to-teal-500",
    RetroHomePage: "from-fuchsia-500 to-pink-600",
    SimpleHomePage: "from-violet-500 to-purple-600",
  };

  const pageBgs = {
    HomePage:
      "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/30",
    RetroHomePage:
      "bg-gradient-to-br from-fuchsia-50 to-pink-100 dark:from-fuchsia-900/20 dark:to-pink-900/30",
    SimpleHomePage:
      "bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "HomePage":
        return <HomePage />;
      case "RetroHomePage":
        return <RetroHomePage />;
      case "SimpleHomePage":
        return <SimpleHomePage />;
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
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-900/20 dark:to-teal-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Home</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-200 dark:bg-emerald-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Pages</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Explore our collection of retro-themed home page templates, designed
                for crafting dynamic web applications with a unique vintage
                aesthetic. Each page is fully customizable and ready to use.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={() => setIsGridView(!isGridView)}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
                >
                  <Grid className="w-4 h-4 mr-2" />
                  {isGridView ? "List View" : "Grid View"}
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="h-4 w-16 bg-teal-200 dark:bg-teal-700 rounded mb-2"></div>
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
                  <div className="h-8 w-3/4 bg-purple-200 dark:bg-purple-700 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-black dark:border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex justify-between mb-2">
                    <div className="h-4 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-12 w-full bg-yellow-200 dark:bg-yellow-700 rounded"></div>
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
                  Home Pages
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
                        ? `${pageBgs[componentName]} border-l-4 border-emerald-500`
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
                      <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <button
                          onClick={() => setActiveTabs((prev) => ({
                            ...prev,
                            [activeComponent]: "preview",
                          }))}
                          className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                            activeTabs[activeComponent] === "preview"
                              ? `bg-gradient-to-r ${pageColors[activeComponent]} text-white`
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </button>
                        <button
                          onClick={() => setActiveTabs((prev) => ({
                            ...prev,
                            [activeComponent]: "code",
                          }))}
                          className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                            activeTabs[activeComponent] === "code"
                              ? `bg-gradient-to-r ${pageColors[activeComponent]} text-white`
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <Code className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Component Content */}
                <div className="p-6">
                  {activeTabs[activeComponent] === "preview" ? (
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
                      <div className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-lg border border-emerald-200 dark:border-emerald-800/30 overflow-hidden">
                        <button
                          onClick={() => setExpandedInfo(!expandedInfo)}
                          className="w-full p-4 flex justify-between items-center text-left"
                        >
                          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                            <Zap className="w-4 h-4 text-emerald-500 mr-2" />
                            Page Details & Usage Tips
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform ${
                              expandedInfo ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expandedInfo && (
                          <div className="p-4 pt-0 border-t border-emerald-200 dark:border-emerald-800/30">
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
                      <div className="bg-[#1e1e1e] rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="text-gray-400 text-sm">GitHub Repository</div>
                        </div>
                        <div className="bg-[#2d2d2d] rounded-lg p-4">
                          <a 
                            href={pageComponents[activeComponent]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
                          >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            <span className="text-lg font-medium">Visit GitHub Repository</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                        <div className="mt-4 text-sm text-gray-400 text-center">
                          Click to view the complete source code and documentation
                        </div>
                      </div>
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

export default HomePageShowcase;
