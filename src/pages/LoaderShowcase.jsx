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
  Loader,
  RotateCw,
  RefreshCw,
  Hourglass,
  Clock,
  Gauge,
} from "lucide-react";

// Import loader components
import RetroLoader from "../components/Loaders/RetroLoader";
import RetroSpinner from "../components/Loaders/RetroSpinner";
import ThreeSpinner from "../components/Loaders/ThreeSpinner";
import ShadowSpinner from "../components/Loaders/ShadowSpinner";
import SequenceLoader from "../components/Loaders/SequenceLoader";
import BarsLoader from "../components/Loaders/BarsLoader";

// Sample code snippets for loaders
const loaderComponents = {
  RetroLoader: `
import React from "react";

const RetroLoader = () => {
  return (
    <div className=" flex flex-col gap-20">
      {/* First Row */}
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-yellow-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
        <div className="w-8 h-8 bg-pink-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
        <div className="w-8 h-8 bg-blue-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
      </div>

      {/* Second Row */}
      <div className="flex space-x-2">
        <div
          className="w-8 h-8 bg-[#eab308] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite]"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#10b981] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite] delay-300"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#3b82f6] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite] delay-500"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      {/* Third Row */}
      <div className="flex space-x-2">
        <div
          className="w-8 h-8 bg-[#fcd34d] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite]"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#60a5fa] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite] delay-100"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#f472b6] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite] delay-200"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export default RetroLoader;
`,
  RetroSpinner: `
import React from "react";

const RetroSpinner = () => {
  return (
    <div className="flex ">
      <div className="w-8 h-8 rounded-full border-4 border-black border-t-transparent border-b-[#60a5fa] shadow-[2px_2px_0px_0px_black] animate-[spin_0.8s_linear_infinite]"></div>
    </div>
  );
};

export default RetroSpinner;
`,
  ThreeSpinner: `
import React from "react";

const ThreeSpinner = () => {
  return (
    <div className="flex space-x-6">
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#fbbf24] delay-0 rounded-full animate-spin shadow-[1px_1px_14px_0px_#fbbf24]"></div>
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#ec4899] delay-300 rounded-full animate-spin shadow-[1px_1px_14px_0px_#ec4899]"></div>
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#3b82f6] delay-600 rounded-full animate-spin shadow-[1px_1px_14px_0px_#3b82f6]"></div>
    </div>
  );
};

export default ThreeSpinner;
`,
  ShadowSpinner: `
import React from "react";

const ShadowSpinner = () => {
  return (
    <div className="flex space-x-4 items-center">
      <div className="w-8 h-8 rounded-full border-4 border-black relative bg-yellow-100 shadow-[2px_2px_14px_0px_yellow] animate-[spin_0.6s_linear_infinite]">
        <div className="w-2 h-2 bg-[#ffdb25] absolute right-1 top-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default ShadowSpinner;
`,
  SequenceLoader: `
import React from "react";

const SequenceLoader = () => {
  return (
    <div className="flex space-x-2">
      <div
        className="w-8 h-8 bg-[#fcd34d] border-4 border-black animate-bounce  shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-8 h-8 bg-[#f472b6] border-4 border-black animate-bounce  shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="w-8 h-8 bg-[#60a5fa] border-4 border-black animate-bounce  shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  );
};

export default SequenceLoader;
`,
  BarsLoader: `
import React from "react";

const BarsLoader = () => {
  return (
    <>
      <div className="flex space-x-2">
        <div
          className="w-2 h-8 bg-[#fbbf24] border-2 border-black shadow-[4px_4px_16px_0px_yellow] animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-8 bg-[#ec4899] border-2 border-black shadow-[4px_4px_16px_0px_pink] animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-8 bg-[#3b82f6] border-2 border-black shadow-[4px_4px_16px_0px_blue] animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </>
  );
};

export default BarsLoader;
`,
};

const LoaderShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("RetroLoader");
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

  const loaderIcons = {
    RetroLoader: <Loader className="w-5 h-5" />,
    RetroSpinner: <RotateCw className="w-5 h-5" />,
    ThreeSpinner: <RefreshCw className="w-5 h-5" />,
    ShadowSpinner: <Hourglass className="w-5 h-5" />,
    SequenceLoader: <Clock className="w-5 h-5" />,
    BarsLoader: <Gauge className="w-5 h-5" />,
  };

  const loaderColors = {
    RetroLoader: "from-yellow-400 to-yellow-500",
    RetroSpinner: "from-blue-400 to-blue-500",
    ThreeSpinner: "from-pink-400 to-pink-500",
    ShadowSpinner: "from-purple-400 to-purple-500",
    SequenceLoader: "from-green-400 to-green-500",
    BarsLoader: "from-orange-400 to-orange-500",
  };

  const loaderBgs = {
    RetroLoader:
      "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/30",
    RetroSpinner:
      "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30",
    ThreeSpinner:
      "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/30",
    ShadowSpinner:
      "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30",
    SequenceLoader:
      "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30",
    BarsLoader:
      "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "RetroLoader":
        return <RetroLoader />;
      case "RetroSpinner":
        return <RetroSpinner />;
      case "ThreeSpinner":
        return <ThreeSpinner />;
      case "ShadowSpinner":
        return <ShadowSpinner />;
      case "SequenceLoader":
        return <SequenceLoader />;
      case "BarsLoader":
        return <BarsLoader />;
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-900/20 dark:to-indigo-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-purple-200/50 dark:border-purple-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Loader</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 dark:bg-purple-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Components</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                Pixel-perfect, nostalgic loading animations for your modern web
                applications. Bring the charm of retro aesthetics to your UI.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-md shadow-lg hover:shadow-purple-500/25 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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
                  <ShadowSpinner />
                </div>
                <div className="flex justify-center items-center p-4 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-lg">
                  <BarsLoader />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-purple-500" />
            Loader Collection
          </h2>

          
        </div>

        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.keys(loaderComponents).map((componentName) => (
              <motion.div
                key={componentName}
                whileHover={{ y: -5 }}
                className={`${loaderBgs[componentName]} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                {/* Modified div below */}
                <div className="p-6 flex flex-col items-center justify-center min-h-[200px] overflow-x-auto">
                  {renderComponent(componentName)}
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${loaderColors[componentName]} text-white mr-2`}
                      >
                        {loaderIcons[componentName]}
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
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(loaderComponents[componentName])
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
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-900/20 dark:to-indigo-900/20">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-purple-500" />
                  Components
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(loaderComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${loaderBgs[componentName]} border-l-4 border-purple-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${loaderColors[componentName]} text-white`}
                    >
                      {loaderIcons[componentName]}
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
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 ${loaderBgs[activeComponent]}`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                        <div
                          className={`p-1.5 rounded-md bg-gradient-to-r ${loaderColors[activeComponent]} text-white mr-2`}
                        >
                          {loaderIcons[activeComponent]}
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
                              ? `bg-gradient-to-r ${loaderBgs[activeComponent]} text-purple-700 dark:text-purple-300`
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
                              ? `bg-gradient-to-r ${loaderBgs[activeComponent]} text-purple-700 dark:text-purple-300`
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
                          className={`flex flex-col items-center justify-center p-10 ${loaderBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
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
                        <div className="bg-gradient-to-r from-purple-500/5 to-indigo-500/5 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-lg border border-purple-200 dark:border-purple-800/30 overflow-hidden">
                          <button
                            onClick={() => setExpandedInfo(!expandedInfo)}
                            className="w-full p-4 flex justify-between items-center text-left"
                          >
                            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                              <Zap className="w-4 h-4 text-purple-500 mr-2" />
                              Loader Details & Usage Tips
                            </h3>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                expandedInfo ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedInfo && (
                            <div className="p-4 pt-0 border-t border-purple-200 dark:border-purple-800/30">
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
                                    <li>Animated loading effects</li>
                                    <li>Customizable colors and sizes</li>
                                    <li>Lightweight and performant</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Customization
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    This loader can be easily customized by
                                    modifying the Tailwind classes. Try changing
                                    colors, sizes, or animation speeds to match
                                    your project's design.
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4 pt-4 border-t border-purple-200/50 dark:border-purple-800/20">
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
                            components/Loaders/{activeComponent}.jsx
                          </span>
                        </div>
                        <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                          <SyntaxHighlighter
                            language="jsx"
                            style={atomDark}
                            showLineNumbers={true}
                            wrapLines={true}
                          >
                            {loaderComponents[activeComponent]}
                          </SyntaxHighlighter>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(loaderComponents[activeComponent])
                          }
                          className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
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

export default LoaderShowcase;
