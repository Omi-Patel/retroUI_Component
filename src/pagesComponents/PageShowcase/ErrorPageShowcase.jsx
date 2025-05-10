import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code, Copy, Check, AlertTriangle, Zap, Layers, Palette } from "lucide-react";
import BasicError from "../404Page/BasicError";
import RetroError from "../404Page/RetroError";
import TerminalError from "../404Page/TerminalError";
import MinimalError from "../404Page/MinimalError";

const componentCode = {
  BasicError: `
import React, { useState, useEffect } from "react";
import { Home } from "lucide-react";

const BasicError = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [tvEffect, setTvEffect] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const effectInterval = setInterval(() => {
      setTvEffect(true);
      setTimeout(() => setTvEffect(false), 100);
    }, 5000);

    return () => clearInterval(effectInterval);
  }, []);

  return (
    <div className=" bg-gray-900 flex items-center justify-center p-2 sm:p-4">
      <div
        className={\`max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-8 border-4 border-yellow-500 transform transition-all duration-1000 \${
          isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }\`}
      >
        <div className="text-center">
          <h1
            className={\`text-7xl md:text-9xl font-bold text-yellow-500 mb-4 font-mono \${
              tvEffect ? "animate-tv-effect" : ""
            }\`}
          >
            404
          </h1>
          <div className="w-full h-2 bg-yellow-500 mb-8"></div>
          <p className="text-2xl md:text-3xl text-yellow-300 mb-6 font-serif">
            TECHNICAL DIFFICULTIES
          </p>
          <p className="text-lg text-yellow-100 mb-8 font-mono">
            We apologize, but the page you're looking for is currently off the
            air. Please stand by.
          </p>
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 border-4 border-yellow-500 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-gray-900 bg-yellow-500 rounded-md hover:bg-yellow-400 transition-colors duration-300"
          >
            <Home className="mr-2" />
            Return to Broadcast
          </a>
        </div>
      </div>
      <style jsx>{\`
        @keyframes tv-effect {
          0% {
            transform: translate(0);
          }
          25% {
            transform: translate(-2px, 2px);
          }
          50% {
            transform: translate(2px, -2px);
          }
          75% {
            transform: translate(-2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
        .animate-tv-effect {
          animation: tv-effect 0.1s linear infinite;
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      \`}</style>
    </div>
  );
};

export default BasicError;

  `,
  RetroError: `
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const RetroError = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className=" bg-amber-100 flex items-center justify-center p-2 sm:p-4">
      <div
        className={\`max-w-2xl w-full bg-orange-200 rounded-lg shadow-lg p-8 transform transition-all duration-500 \${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }\`}
      >
        <h1
          className={\`text-6xl md:text-8xl font-bold text-orange-800 mb-4 \${
            glitchEffect ? "animate-glitch" : ""
          }\`}
        >
          404
        </h1>
        <p className="text-2xl md:text-3xl text-orange-700 mb-8 font-serif">
          Oops! This page is lost in time.
        </p>
        <p className="text-lg text-orange-600 mb-8 font-mono">
          It seems you've stumbled upon a page that doesn't exist in this era.
          Let's get you back to the present!
        </p>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2" />
          Go Back Home
        </a>
      </div>
      <style jsx>{\`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }
        .animate-glitch {
          animation: glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
            infinite;
        }
      \`}</style>
    </div>
  );
};

export default RetroError;

  `,
  TerminalError: `
import React, { useState, useEffect } from "react";

export default function TerminalError() {
  const [text, setText] = useState("");
  const fullText =
    ">ERROR 404: FILE NOT FOUND\n>SYSTEM MALFUNCTION\n>INITIATING RECOVERY SEQUENCE...\n>PLEASE STAND BY...";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="min-h-96 bg-black flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-3xl bg-black border-2 border-green-500 rounded-lg p-4 sm:p-8">
        <div className="bg-green-950 p-2 sm:p-4 rounded">
          <pre className="font-mono text-green-400 whitespace-pre-wrap break-words text-xs sm:text-sm md:text-base">
            {text}
          </pre>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block px-4 py-2 bg-green-500 text-black font-mono text-sm sm:text-base rounded hover:bg-green-400 transition-colors duration-300"
          >
            RETURN TO MAIN SYSTEM
          </a>
        </div>
      </div>
      <style jsx>{\`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        pre::after {
          content: "█";
          animation: blink 1s step-end infinite;
        }
      \`}</style>
    </div>
  );
}

  `,
  MinimalError: `
import React from "react";
import { ArrowLeft } from "lucide-react";

export default function MinimalError() {
  return (
    <div className=" bg-yellow-50 flex flex-col items-center justify-center p-2 sm:p-4 font-mono">
      <div className="max-w-md w-full text-center">
        <h1 className="text-8xl font-bold text-yellow-800 mb-8 animate-pulse">
          404
        </h1>
        <p className="text-2xl text-yellow-700 mb-8">Page not found</p>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
        <p className="text-lg text-yellow-600 mb-12">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-yellow-800 bg-yellow-200 rounded-md hover:bg-yellow-300 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back home
        </a>
      </div>
      <footer className="mt-16 text-yellow-600 text-sm">
        © {new Date().getFullYear()} Your Company Name
      </footer>
      <style jsx>{\`
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-typewriter {
          overflow: hidden;
          border-right: 2px solid #92400e;
          white-space: nowrap;
          animation: typewriter 3s steps(40) 1s 1 normal both,
            blinkCursor 0.7s steps(40) infinite normal;
        }
        @keyframes blinkCursor {
          from {
            border-right-color: #92400e;
          }
          to {
            border-right-color: transparent;
          }
        }
      \`}</style>
    </div>
  );
}

  `,
};

const ErrorPageShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("BasicError");
  const [copySuccess, setCopySuccess] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);
  const [activeTabs, setActiveTabs] = useState({
    BasicError: "preview",
    RetroError: "preview",
    TerminalError: "preview",
    MinimalError: "preview",
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const pageIcons = {
    BasicError: <AlertTriangle className="w-5 h-5" />,
    RetroError: <Zap className="w-5 h-5" />,
    TerminalError: <Layers className="w-5 h-5" />,
    MinimalError: <Palette className="w-5 h-5" />,
  };

  const pageColors = {
    BasicError: "from-red-400 to-orange-500",
    RetroError: "from-fuchsia-500 to-pink-600",
    TerminalError: "from-violet-500 to-purple-600",
    MinimalError: "from-amber-500 to-yellow-600",
  };

  const pageBgs = {
    BasicError: "bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/30",
    RetroError: "bg-gradient-to-br from-fuchsia-50 to-pink-100 dark:from-fuchsia-900/20 dark:to-pink-900/30",
    TerminalError: "bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/30",
    MinimalError: "bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/30",
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const installationCopyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setInstallSuccess(true);
    setTimeout(() => setInstallSuccess(false), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderComponent = (name) => {
    switch (name) {
      case "BasicError":
        return <BasicError />;
      case "RetroError":
        return <RetroError />;
      case "TerminalError":
        return <TerminalError />;
      case "MinimalError":
        return <MinimalError />;
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
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-900/20 dark:to-orange-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-red-500/20 to-orange-500/20 dark:from-red-900/30 dark:to-orange-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-red-200/50 dark:border-red-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Error</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 dark:bg-red-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Pages</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Explore our collection of retro-themed error page templates, designed
                for crafting dynamic web applications with a unique vintage
                aesthetic. Each page is fully customizable and ready to use.
              </p>
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
                  Error Pages
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(componentCode).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${pageBgs[componentName]} border-l-4 border-red-500`
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
                        onClick={() => setActiveTabs((prev) => ({
                          ...prev,
                          [activeComponent]: "preview",
                        }))}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeTabs[activeComponent] === "preview"
                            ? "bg-emerald-500 text-white"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        Preview
                      </button>
                      <button
                        onClick={() => setActiveTabs((prev) => ({
                          ...prev,
                          [activeComponent]: "code",
                        }))}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeTabs[activeComponent] === "code"
                            ? "bg-emerald-500 text-white"
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
                          pages/Error/{activeComponent}.jsx
                        </span>
                      </div>
                      <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                        <SyntaxHighlighter
                          language="jsx"
                          style={atomDark}
                          showLineNumbers={true}
                          wrapLines={true}
                        >
                          {componentCode[activeComponent]}
                        </SyntaxHighlighter>
                      </div>
                      <button
                        onClick={() => copyToClipboard(componentCode[activeComponent])}
                        className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
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

export default ErrorPageShowcase;
