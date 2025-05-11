import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code, Copy, Check, AlertTriangle, Zap, Layers, Palette, Eye } from "lucide-react";
import BasicError from "../404Page/BasicError";
import RetroError from "../404Page/RetroError";
import TerminalError from "../404Page/TerminalError";
import MinimalError from "../404Page/MinimalError";

const componentCode = {
  BasicError: `https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents`,
  RetroError: `https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents`,
  TerminalError: `https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents`,
  MinimalError: `https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents`,
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
                            href={componentCode[activeComponent]}
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

export default ErrorPageShowcase;
