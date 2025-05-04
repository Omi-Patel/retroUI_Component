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
  Eye,
  Sparkles,
} from "lucide-react";

// Import SignInPage component
import SignInPage from "../components/SignIn/SignInPage";

const signInCode = `
import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-100 rounded-lg p-3 sm:p-6 lg:p-8">
      {/* Sign-in Box */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-6 sm:p-8 bg-white shadow-[8px_8px_0px_0px_black] border-4 border-black rounded-lg">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 tracking-wider">
          Sign In
        </h1>

        {/* Sign-in Form */}
        <form className="space-y-4 sm:space-y-6 font-mono">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-md sm:text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 sm:p-3 bg-gray-100 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-md sm:text-lg"
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-md sm:text-lg font-semibold mb-2"
              >
                Password
              </label>
              <a href="#" className="text-blue-500 hover:underline text-sm sm:text-base">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 sm:p-3 bg-gray-100 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-md sm:text-lg"
            />
          </div>

          {/* Sign-In Button */}
          <div>
            <button
              type="submit"
              className="w-full p-2 sm:p-3 text-white bg-blue-500 border-4 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-blue-600 transition-all duration-150"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-4 sm:mt-6 flex justify-center gap-2 text-sm sm:text-base">
          <p>Don't have an account?</p>
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
`;

const SignInShowcase = () => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);
  const [expandedInfo, setExpandedInfo] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-blue-200/50 dark:border-blue-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Sign In</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 dark:bg-blue-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Component</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                A pixel-perfect, nostalgic sign-in form with retro aesthetics
                for your modern web applications.
              </p>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl blur-xl -z-10"></div>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 w-48 h-64 flex flex-col justify-between">
                  <div className="w-full h-8 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
                  <div className="w-full h-8 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
                  <div className="w-full h-8 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
                  <div className="w-full h-8 bg-indigo-500 rounded mt-2"></div>
                </div>
            </div>
          </div>
        </motion.section>

        {/* Component Display */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Component Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                    <div className="p-1.5 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 text-white mr-2">
                      <Eye className="w-5 h-5" />
                    </div>
                    <span>Sign In Page</span>
                  </h2>

                  {/* Tabs */}
                  <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <button
                      onClick={() => setActiveTab("preview")}
                      className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                        activeTab === "preview"
                          ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 text-blue-700 dark:text-blue-300"
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
                          ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 text-blue-700 dark:text-blue-300"
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
              <div className="p-2 sm:p-6">
                {activeTab === "preview" ? (
                  <div className="flex flex-col">
                    {/* Interactive Preview */}
                    <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                      >
                        <SignInPage />
                      </motion.div>
                    </div>

                    {/* Component Info */}
                    <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg border border-blue-200 dark:border-blue-800/30 overflow-hidden">
                      <button
                        onClick={() => setExpandedInfo(!expandedInfo)}
                        className="w-full p-4 flex justify-between items-center text-left"
                      >
                        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                          <Zap className="w-4 h-4 text-blue-500 mr-2" />
                          Sign In Component Details & Usage Tips
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
                                <li>Bold borders and shadow effects</li>
                                <li>Fully responsive and accessible</li>
                                <li>Customizable colors and layouts</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                Customization
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                This sign-in form can be easily customized by
                                modifying the Tailwind classes. Try changing
                                colors, sizes, or adding additional elements to
                                match your project's design.
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t border-blue-200/50 dark:border-blue-800/20">
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
                        components/sign-in-page.jsx
                      </span>
                    </div>
                    <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                      <SyntaxHighlighter
                        language="jsx"
                        style={atomDark}
                        showLineNumbers={true}
                        wrapLines={true}
                      >
                        {signInCode}
                      </SyntaxHighlighter>
                    </div>
                    <button
                      onClick={() => copyToClipboard(signInCode)}
                      className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
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
    </div>
  );
};

export default SignInShowcase;
