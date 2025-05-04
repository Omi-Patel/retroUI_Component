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
  ToggleLeft,
  ToggleRight,
  Palette,
  Lightbulb,
} from "lucide-react";

// Import switch components
import BasicSwitch from "../components/Switch/BasicSwitch";
import BorderedSwitch from "../components/Switch/BorderedSwitch";
import GlowSwitch from "../components/Switch/GlowSwitch";
import IconSwitch from "../components/Switch/IconSwitch";
import LabeledSwitch from "../components/Switch/LabeledSwitch";

const switchComponents = {
  BasicSwitch: `
import React, { useState } from "react";

const BasicSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={\`relative w-16 h-8 flex items-center rounded-full cursor-pointer transition-all duration-300 \${
        isOn ? "bg-[#D08C60]" : "bg-[#f2c364]"
      }\`}
    >
      <div
        className={\`w-7 h-7 bg-[#3B3228] rounded-full shadow-[2px_2px_4px_#3B3228] transform transition-transform duration-300 \${
          isOn ? "translate-x-8" : "translate-x-1"
        }\`}
      />
    </div>
  );
};

export default BasicSwitch;
  `,
  BorderedSwitch: `
import React, { useState } from "react";

const BorderedSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={\`relative w-16 h-8 flex items-center cursor-pointer rounded-full 
      transition-all duration-300 
      \${
        isOn
          ? "bg-opacity-50 border-[#f1887e]"
          : "bg-opacity-30 border-[#f4eb9b]"
      }
      border-2 shadow-lg backdrop-filter backdrop-blur-lg\`}
      style={{
        background: isOn
          ? "rgba(255, 111, 97, 0.5)"
          : "rgba(240, 230, 140, 0.5)",
      }}
    >
      <div
        className={\`w-6 h-6 bg-[#4A4A4A] rounded-full shadow-lg transition-transform duration-300 
        \${isOn ? "translate-x-8" : "translate-x-1"} 
        border-2 border-white\`}
      />
    </div>
  );
};

export default BorderedSwitch;
  `,
  GlowSwitch: `
import React, { useState } from "react";

const GlowSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={\`relative w-14 h-8 flex items-center rounded-full cursor-pointer transition-all duration-300 \${
        isOn ? "bg-[#2846ee] shadow-[0_0_10px_4px_#1d37cb]" : "bg-[#B4CFB0]"
      }\`}
    >
      <div
        className={\`w-6 h-6 bg-[#333] rounded-full transform transition-transform duration-300 \${
          isOn ? "translate-x-7" : "translate-x-1"
        }\`}
      />
    </div>
  );
};

export default GlowSwitch;
  `,
  IconSwitch: `
import React, { useState } from "react";
import { Sun, Moon } from 'lucide-react';

const IconSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={\`relative w-20 h-10 flex items-center rounded-full cursor-pointer transition-all duration-300 border-4 border-black shadow-[4px_4px_0px_0px_black] \${
        isOn ? "bg-[#5B4B8A]" : "bg-[#F7D44C]"
      }\`}
    >
      <div
        className={\`absolute left-1 text-white transition-opacity duration-300 \${
          isOn ? "opacity-0" : "opacity-100"
        }\`}
      >
        <Sun size={16} className="text-black" />
      </div>
      <div
        className={\`absolute right-1 text-white transition-opacity duration-300 \${
          isOn ? "opacity-100" : "opacity-0"
        }\`}
      >
        <Moon size={16} className="text-white" />
      </div>
      <div
        className={\`w-8 h-8 bg-white rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.3)] transform transition-transform duration-300 border-2 border-black \${
          isOn ? "translate-x-10" : "translate-x-0"
        }\`}
      />
    </div>
  );
};

export default IconSwitch;
  `,
  LabeledSwitch: `
import React, { useState } from "react";

const LabeledSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono font-bold text-sm">OFF</span>
      <div
        onClick={toggleSwitch}
        className={\`relative w-16 h-8 flex items-center rounded-md cursor-pointer transition-all duration-300 border-2 border-black shadow-[3px_3px_0px_0px_black] \${
          isOn ? "bg-[#7CB9E8]" : "bg-gray-200"
        }\`}
      >
        <div
          className={\`w-6 h-6 bg-white rounded-sm shadow-md transform transition-transform duration-300 border border-black \${
            isOn ? "translate-x-9" : "translate-x-0.5"
          }\`}
        />
      </div>
      <span className="font-mono font-bold text-sm">ON</span>
    </div>
  );
};

export default LabeledSwitch;
  `,
};

const SwitchShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("BasicSwitch");
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

  const switchIcons = {
    BasicSwitch: <ToggleLeft className="w-5 h-5" />,
    BorderedSwitch: <ToggleRight className="w-5 h-5" />,
    GlowSwitch: <Lightbulb className="w-5 h-5" />,
    IconSwitch: <Palette className="w-5 h-5" />,
    LabeledSwitch: <Layers className="w-5 h-5" />,
  };

  const switchColors = {
    BasicSwitch: "from-amber-400 to-orange-500",
    BorderedSwitch: "from-rose-400 to-red-500",
    GlowSwitch: "from-blue-400 to-indigo-500",
    IconSwitch: "from-purple-400 to-violet-500",
    LabeledSwitch: "from-cyan-400 to-blue-500",
  };

  const switchBgs = {
    BasicSwitch:
      "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30",
    BorderedSwitch:
      "bg-gradient-to-br from-rose-50 to-red-100 dark:from-rose-900/20 dark:to-red-900/30",
    GlowSwitch:
      "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/30",
    IconSwitch:
      "bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/30",
    LabeledSwitch:
      "bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "BasicSwitch":
        return <BasicSwitch />;
      case "BorderedSwitch":
        return <BorderedSwitch />;
      case "GlowSwitch":
        return <GlowSwitch />;
      case "IconSwitch":
        return <IconSwitch />;
      case "LabeledSwitch":
        return <LabeledSwitch />;
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
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-900/20 dark:to-orange-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-amber-500/20 to-orange-500/20 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-amber-200/50 dark:border-amber-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Switch</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200 dark:bg-amber-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Components</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                Pixel-perfect, nostalgic toggle switches for your modern web
                applications. Bring the charm of retro aesthetics to your
                interactive UI elements.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-md shadow-lg hover:shadow-amber-500/25 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl blur-xl -z-10"></div>
              <div className="grid grid-cols-1 gap-4 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-amber-200/50 dark:border-amber-800/30 shadow-xl">
                <div className="flex items-center">
                  <span className="mr-2 text-sm font-mono text-gray-700 dark:text-gray-300">
                    Option Name
                  </span>
                  <button className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-gray-200 dark:bg-gray-700">
                    <span className="sr-only">Toggle switch</span>
                    <span
                      className="pointer-events-none inline-block h-5 w-5 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200 translate-x-0"
                      aria-hidden="true"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-amber-500" />
            Switch Collection
          </h2>
        </div>

        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.keys(switchComponents).map((componentName) => (
              <motion.div
                key={componentName}
                whileHover={{ y: -5 }}
                className={`${switchBgs[componentName]} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="scale-100">
                    {renderComponent(componentName)}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${switchColors[componentName]} text-white mr-2`}
                      >
                        {switchIcons[componentName]}
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
                      className="text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(switchComponents[componentName])
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
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-900/20 dark:to-orange-900/20">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-amber-500" />
                  Components
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(switchComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${switchBgs[componentName]} border-l-4 border-amber-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${switchColors[componentName]} text-white`}
                    >
                      {switchIcons[componentName]}
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
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 ${switchBgs[activeComponent]}`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                        <div
                          className={`p-1.5 rounded-md bg-gradient-to-r ${switchColors[activeComponent]} text-white mr-2`}
                        >
                          {switchIcons[activeComponent]}
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
                              ? `bg-gradient-to-r ${switchBgs[activeComponent]} text-amber-700 dark:text-amber-300`
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
                              ? `bg-gradient-to-r ${switchBgs[activeComponent]} text-amber-700 dark:text-amber-300`
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
                          className={`flex flex-col items-center justify-center p-10 ${switchBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
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
                        <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 dark:from-amber-900/10 dark:to-orange-900/10 rounded-lg border border-amber-200 dark:border-amber-800/30 overflow-hidden">
                          <button
                            onClick={() => setExpandedInfo(!expandedInfo)}
                            className="w-full p-4 flex justify-between items-center text-left"
                          >
                            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                              <Zap className="w-4 h-4 text-amber-500 mr-2" />
                              Component Details & Usage Tips
                            </h3>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                expandedInfo ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedInfo && (
                            <div className="p-4 pt-0 border-t border-amber-200 dark:border-amber-800/30">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Features
                                  </h4>
                                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>
                                      Retro-inspired design with smooth
                                      transitions
                                    </li>
                                    <li>Interactive toggle functionality</li>
                                    <li>
                                      Fully customizable colors and styles
                                    </li>
                                    <li>Accessible with keyboard support</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Customization
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    This component can be easily customized by
                                    modifying the Tailwind classes. Try changing
                                    colors, sizes, or adding additional effects
                                    to match your project's design.
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4 pt-4 border-t border-amber-200/50 dark:border-amber-800/20">
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
                            components/Switch/{activeComponent}.jsx
                          </span>
                        </div>
                        <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                          <SyntaxHighlighter
                            language="jsx"
                            style={atomDark}
                            showLineNumbers={true}
                            wrapLines={true}
                          >
                            {switchComponents[activeComponent]}
                          </SyntaxHighlighter>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(switchComponents[activeComponent])
                          }
                          className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
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

export default SwitchShowcase;
