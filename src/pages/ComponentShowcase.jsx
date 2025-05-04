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

// Import button components
import RetroButton from "../components/Buttons/RetroButton";
import RoundButton from "../components/Buttons/RoundButton";
import RetroButton2 from "../components/Buttons/RetroButton2";
import ThreeDButton from "../components/Buttons/ThreeDButton";
import PixelButton from "../components/Buttons/PixelButton";

const buttonComponents = {
  RetroButton: `
import React from "react";

const RetroButton = () => {
  return (
    <>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-black bg-neon border-4 border-black cursor-pointer select-none
      shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transition-all duration-150 ease-out retro-btn"
      >
        Click Me
      </button>
    </>
  );
};

export default RetroButton;
  `,
  RetroButton2: `
import React from "react";

const RetroButton2 = () => {
  return (
    <>
      <button
        className="relative inline-block px-6 py-3 font-mono text-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-4 border-black cursor-pointer select-none
      shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-all duration-150 ease-out retro-btn
      before:absolute before:inset-0 before:bg-black before:-z-10 hover:before:bg-opacity-50
      hover:scale-105 transform hover:brightness-110"
      >
        <span className="relative z-20 neon-text">Click Me</span>
      </button>
    </>
  );
};

export default RetroButton2;
  `,
  RoundButton: `
import React from "react";

const RoundButton = () => {
  return (
    <>
      <button
        className="relative inline-block px-6 py-3 font-mono text-lg text-white bg-gradient-to-r from-blue-400 to-purple-600 border-2 border-gray-800 cursor-pointer select-none
    rounded-full shadow-lg transition-transform transform hover:scale-105
    before:absolute before:inset-0 before:border-2 before:border-gray-700 before:rounded-full before:content-[''] before:z-10 before:opacity-50 before:-translate-x-1 before:-translate-y-1
    after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-700 after:rounded-full after:opacity-30 after:content-[''] after:z-0"
      >
        <span className="relative z-20 font-bold">Click Me</span>
      </button>
    </>
  );
};

export default RoundButton;
  `,
  ThreeDButton: `
import React from "react";

const ThreeDButton = () => {
  return (
    <div>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-black bg-yellow-100 border-4 border-black cursor-pointer select-none
  shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-all duration-150 ease-out 
  active:shadow-[3px_3px_0px_0px_black] active:translate-x-1 active:translate-y-1"
      >
        3D Effect
      </button>
    </div>
  );
};

export default ThreeDButton;
  `,
  PixelButton: `
import React from "react";

const PixelButton = () => {
  return (
    <div>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-white bg-green-500 border-4 border-black cursor-pointer select-none
  shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-all duration-200 ease-out
  before:content-[''] before:block before:absolute before:w-full before:h-full before:border-4 before:border-black before:left-1 before:top-1 before:transition-all before:duration-200 before:ease-out
  hover:before:left-0 hover:before:top-0 active:shadow-[3px_3px_0px_0px_black] active:before:left-2 active:before:top-2"
      >
        Pixel Art
      </button>
    </div>
  );
};

export default PixelButton;
  `,
};

const ButtonShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("RetroButton");
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

  const buttonIcons = {
    RetroButton: <Cpu className="w-5 h-5" />,
    RetroButton2: <Zap className="w-5 h-5" />,
    RoundButton: <Palette className="w-5 h-5" />,
    ThreeDButton: <Grid className="w-5 h-5" />,
    PixelButton: <Monitor className="w-5 h-5" />,
  };

  const buttonColors = {
    RetroButton: "from-emerald-400 to-teal-500",
    RetroButton2: "from-fuchsia-500 to-pink-600",
    RoundButton: "from-violet-500 to-purple-600",
    ThreeDButton: "from-amber-400 to-orange-500",
    PixelButton: "from-green-500 to-emerald-600",
  };

  const buttonBgs = {
    RetroButton:
      "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/30",
    RetroButton2:
      "bg-gradient-to-br from-fuchsia-50 to-pink-100 dark:from-fuchsia-900/20 dark:to-pink-900/30",
    RoundButton:
      "bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/30",
    ThreeDButton:
      "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30",
    PixelButton:
      "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "RetroButton":
        return <RetroButton />;
      case "RetroButton2":
        return <RetroButton2 />;
      case "RoundButton":
        return <RoundButton />;
      case "ThreeDButton":
        return <ThreeDButton />;
      case "PixelButton":
        return <PixelButton />;
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
                  <span className="relative z-10">Button</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-200 dark:bg-emerald-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Components</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                Pixel-perfect, nostalgic button designs for your modern web
                applications. Bring the charm of retro aesthetics to your UI.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-md shadow-lg hover:shadow-emerald-500/25 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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

            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl blur-xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-xl">
                <div className="flex justify-center items-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <RetroButton />
                </div>
                <div className="flex justify-center items-center p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-lg">
                  <RetroButton2 />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-emerald-500" />
            Button Collection
          </h2>

          
        </div>

        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.keys(buttonComponents).map((componentName) => (
              <motion.div
                key={componentName}
                whileHover={{ y: -5 }}
                className={`${buttonBgs[componentName]} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
                  {renderComponent(componentName)}
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${buttonColors[componentName]} text-white mr-2`}
                      >
                        {buttonIcons[componentName]}
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
                      className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(buttonComponents[componentName])
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
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-900/20 dark:to-teal-900/20">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-emerald-500" />
                  Components
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(buttonComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${buttonBgs[componentName]} border-l-4 border-emerald-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${buttonColors[componentName]} text-white`}
                    >
                      {buttonIcons[componentName]}
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
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 ${buttonBgs[activeComponent]}`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                        <div
                          className={`p-1.5 rounded-md bg-gradient-to-r ${buttonColors[activeComponent]} text-white mr-2`}
                        >
                          {buttonIcons[activeComponent]}
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
                              ? `bg-gradient-to-r ${buttonBgs[activeComponent]} text-emerald-700 dark:text-emerald-300`
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
                              ? `bg-gradient-to-r ${buttonBgs[activeComponent]} text-emerald-700 dark:text-emerald-300`
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
                          className={`flex flex-col items-center justify-center p-10 ${buttonBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
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
                              Button Details & Usage Tips
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
                                    <li>Interactive hover and active states</li>
                                    <li>Fully responsive and accessible</li>
                                    <li>Customizable colors and sizes</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Customization
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    This button can be easily customized by
                                    modifying the Tailwind classes. Try changing
                                    colors, sizes, or adding additional effects
                                    to match your project's design.
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4 pt-4 border-t border-emerald-200/50 dark:border-emerald-800/20">
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
                            components/Buttons/{activeComponent}.jsx
                          </span>
                        </div>
                        <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                          <SyntaxHighlighter
                            language="jsx"
                            style={atomDark}
                            showLineNumbers={true}
                            wrapLines={true}
                          >
                            {buttonComponents[activeComponent]}
                          </SyntaxHighlighter>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(buttonComponents[activeComponent])
                          }
                          className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
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

export default ButtonShowcase;
