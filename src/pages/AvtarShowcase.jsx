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
  User,
  Shield,
  CircleUser,
  UserRound,
  Frame,
  Grid,
  Eye,
  Sparkles,
  Download,
  Star,
  ArrowRight,
} from "lucide-react";

// Import avatar components
import {
  BasicAvatar,
  BorderAvatar,
  ShadowAvatar,
  BadgeAvatar,
  FrameAvatar,
} from "../components/Avtars/Avtar";

const avatarComponents = {
  BasicAvatar: `
const BasicAvatar = () => (
  <div className="w-20 h-20 rounded-full bg-[#E0E4CC] overflow-hidden">
    <img
      src="https://picsum.photos/id/237/150" // Replaced placeholder with dummy image
      alt="avatar"
      className="w-full h-full object-cover" // Added object-cover for better image fitting
    />
  </div>
);
  `,
  BorderAvatar: `
const BorderAvatar = () => (
  <div className="w-20 h-20 rounded-full border-4 border-yellow-500 bg-gray-300 overflow-hidden">
    <img
      src="https://picsum.photos/id/1005/150" // Replaced placeholder with dummy image
      alt="avatar"
      className="w-full h-full object-cover" // Added object-cover for better image fitting
    />
  </div>
);
  `,
  ShadowAvatar: `
const ShadowAvatar = () => (
  <div className="w-20 h-20 rounded-full bg-gray-300 shadow-[4px_4px_0px_0px_black] overflow-hidden">
    <img
      src="https://picsum.photos/id/1025/150" // Replaced placeholder with dummy image
      alt="avatar"
      className="w-full h-full object-cover" // Added object-cover for better image fitting
    />
  </div>
);
  `,
  BadgeAvatar: `
const BadgeAvatar = () => (
  <div className="relative w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
    <img
      src="https://picsum.photos/id/1084/150" // Replaced placeholder with dummy image
      alt="avatar"
      className="w-full h-full object-cover" // Added object-cover for better image fitting
    />
    <span className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></span>
  </div>
);
  `,
  FrameAvatar: `
const FrameAvatar = () => (
  <div className="w-20 h-20 p-1 rounded-full border-4 border-black bg-gray-300 overflow-hidden">
    <div className="w-full h-full border-4 border-dotted border-gray-800 rounded-full overflow-hidden">
      <img
        src="https://picsum.photos/id/660/150" // Replaced placeholder with dummy image
        alt="avatar"
        className="w-full h-full object-cover" // Added object-cover for better image fitting
      />
    </div>
  </div>
);
  `,
};

const AvatarShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("BasicAvatar");
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

  const avatarIcons = {
    BasicAvatar: <User className="w-5 h-5" />,
    BorderAvatar: <Shield className="w-5 h-5" />,
    ShadowAvatar: <CircleUser className="w-5 h-5" />,
    BadgeAvatar: <UserRound className="w-5 h-5" />,
    FrameAvatar: <Frame className="w-5 h-5" />,
  };

  const avatarColors = {
    BasicAvatar: "from-purple-500 to-indigo-600",
    BorderAvatar: "from-amber-500 to-orange-600",
    ShadowAvatar: "from-rose-500 to-pink-600",
    BadgeAvatar: "from-emerald-500 to-teal-600",
    FrameAvatar: "from-blue-500 to-cyan-600",
  };

  const avatarBgs = {
    BasicAvatar:
      "bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/30",
    BorderAvatar:
      "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30",
    ShadowAvatar:
      "bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/30",
    BadgeAvatar:
      "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/30",
    FrameAvatar:
      "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "BasicAvatar":
        return <BasicAvatar />;
      case "BorderAvatar":
        return <BorderAvatar />;
      case "ShadowAvatar":
        return <ShadowAvatar />;
      case "BadgeAvatar":
        return <BadgeAvatar />;
      case "FrameAvatar":
        return <FrameAvatar />;
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-900/20 dark:to-indigo-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-purple-200/50 dark:border-purple-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Avatar Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                  Avatar
                </span>
                <span className="relative">
                  <span className="relative z-10"> Components</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 dark:bg-purple-800/50 -z-10 skew-x-3"></span>
                </span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                Beautifully designed avatar components for your web
                applications. Enhance user profiles with these customizable
                avatar styles.
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl blur-xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-200/50 dark:border-purple-800/30 shadow-xl">
                <div className="flex justify-center items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <BasicAvatar />
                </div>
                <div className="flex justify-center items-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <BorderAvatar />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <CircleUser className="w-5 h-5 mr-2 text-purple-500" />
            Avatar Collection
          </h2>
        </div>

        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.keys(avatarComponents).map((componentName) => (
              <motion.div
                key={componentName}
                whileHover={{ y: -5 }}
                className={`${avatarBgs[componentName]} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="transform scale-150 mb-4">
                    {renderComponent(componentName)}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${avatarColors[componentName]} text-white mr-2`}
                      >
                        {avatarIcons[componentName]}
                      </div>
                      {componentName.replace(/([A-Z])/g, " $1").trim()}
                    </h3>

                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        4.9
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
                        copyToClipboard(avatarComponents[componentName])
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
                  <CircleUser className="w-5 h-5 mr-2 text-purple-500" />
                  Components
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(avatarComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${avatarBgs[componentName]} border-l-4 border-purple-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${avatarColors[componentName]} text-white`}
                    >
                      {avatarIcons[componentName]}
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
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 ${avatarBgs[activeComponent]}`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                        <div
                          className={`p-1.5 rounded-md bg-gradient-to-r ${avatarColors[activeComponent]} text-white mr-2`}
                        >
                          {avatarIcons[activeComponent]}
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
                              ? `bg-gradient-to-r ${avatarBgs[activeComponent]} text-purple-700 dark:text-purple-300`
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
                              ? `bg-gradient-to-r ${avatarBgs[activeComponent]} text-purple-700 dark:text-purple-300`
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
                          className={`flex flex-col items-center justify-center p-10 ${avatarBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
                        >
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="transform scale-150 mb-6"
                          >
                            {renderComponent(activeComponent)}
                          </motion.div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center max-w-md">
                            {activeComponent === "BasicAvatar" &&
                              "A simple, clean avatar with rounded edges."}
                            {activeComponent === "BorderAvatar" &&
                              "Avatar with a customizable colored border."}
                            {activeComponent === "ShadowAvatar" &&
                              "Avatar with a retro drop shadow effect."}
                            {activeComponent === "BadgeAvatar" &&
                              "Avatar with a status indicator badge."}
                            {activeComponent === "FrameAvatar" &&
                              "Avatar with a decorative frame and dotted border."}
                          </p>
                        </div>

                        {/* Component Info */}
                        <div className="bg-gradient-to-r from-purple-500/5 to-indigo-500/5 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-lg border border-purple-200 dark:border-purple-800/30 overflow-hidden">
                          <button
                            onClick={() => setExpandedInfo(!expandedInfo)}
                            className="w-full p-4 flex justify-between items-center text-left"
                          >
                            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                              <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                              Avatar Details & Usage Tips
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
                                      Responsive design that scales to any
                                      container
                                    </li>
                                    <li>
                                      Customizable appearance with Tailwind
                                      classes
                                    </li>
                                    <li>
                                      Optimized for different image aspect
                                      ratios
                                    </li>
                                    <li>
                                      Accessible with proper alt text support
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Customization
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    This avatar can be easily customized by
                                    modifying the Tailwind classes. Try changing
                                    sizes, colors, or adding additional effects
                                    to match your project's design.
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
                            components/Avatars/{activeComponent}.jsx
                          </span>
                        </div>
                        <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                          <SyntaxHighlighter
                            language="jsx"
                            style={atomDark}
                            showLineNumbers={true}
                            wrapLines={true}
                          >
                            {avatarComponents[activeComponent]}
                          </SyntaxHighlighter>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(avatarComponents[activeComponent])
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

        {/* Usage Examples Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-md mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
              Usage Examples
            </h2>

            <div className="hidden sm:block">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                Implementation Ideas
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>

              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center relative z-10">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 mr-3">
                  <User className="w-4 h-4" />
                </div>
                User Profiles
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">
                Perfect for user profile pages, comment sections, and user
                dashboards where identity is important.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>

              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center relative z-10">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 mr-3">
                  <UserRound className="w-4 h-4" />
                </div>
                Team Members
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">
                Showcase your team members on about pages or team directories
                with these professional avatars.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>

              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center relative z-10">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 mr-3">
                  <CircleUser className="w-4 h-4" />
                </div>
                Chat Applications
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">
                Use badge avatars in chat applications to indicate user status
                (online, away, busy) at a glance.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AvatarShowcase;
