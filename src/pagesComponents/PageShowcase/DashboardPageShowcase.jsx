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

import DashboardPage from "../DashboardPage/DashboardPage";

const componentCode = {
  DashboardPage: `
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar, Clock, List, Settings, Menu, X } from "lucide-react";

const SidebarItem = ({ icon, label, isActive, onClick }) => (
  <motion.div
    className={\`flex items-center space-x-2 p-3 rounded-lg cursor-pointer \${
      isActive
        ? "bg-emerald-200 text-emerald-900"
        : "text-emerald-700 hover:bg-emerald-100"
    }\`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </motion.div>
);

const TaskCard = ({ title, description, dueDate }) => (
  <motion.div
    className="bg-white p-4 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-lg font-bold mb-2 text-emerald-900">{title}</h3>
    <p className="text-emerald-700 mb-2">{description}</p>
    <p className="text-sm text-emerald-500">Due: {dueDate}</p>
  </motion.div>
);

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Tasks");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const chartData = [
    { name: "Mon", tasks: 12 },
    { name: "Tue", tasks: 19 },
    { name: "Wed", tasks: 3 },
    { name: "Thu", tasks: 5 },
    { name: "Fri", tasks: 2 },
    { name: "Sat", tasks: 0 },
    { name: "Sun", tasks: 9 },
  ];

  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Sidebar */}
      <motion.div
        className={\`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform \${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300\`}
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-emerald-900 mb-8">RetroSaaS</h1>
          <nav className="space-y-2">
            <SidebarItem
              icon={<List className="w-5 h-5" />}
              label="Tasks"
              isActive={activeTab === "Tasks"}
              onClick={() => setActiveTab("Tasks")}
            />
            <SidebarItem
              icon={<Calendar className="w-5 h-5" />}
              label="Calendar"
              isActive={activeTab === "Calendar"}
              onClick={() => setActiveTab("Calendar")}
            />
            <SidebarItem
              icon={<Clock className="w-5 h-5" />}
              label="Timeline"
              isActive={activeTab === "Timeline"}
              onClick={() => setActiveTab("Timeline")}
            />
            <SidebarItem
              icon={<Settings className="w-5 h-5" />}
              label="Settings"
              isActive={activeTab === "Settings"}
              onClick={() => setActiveTab("Settings")}
            />
          </nav>
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <X className="w-6 h-6 text-emerald-900" />
        ) : (
          <Menu className="w-6 h-6 text-emerald-900" />
        )}
      </button>

      {/* Main Content */}
      <div
        className={\`flex-1 pt-12 px-2 sm:p-12 overflow-auto w-full transition-all duration-300 \${
          sidebarOpen ? "lg:ml-64" : "ml-0"
        }\`}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-emerald-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome back, RetroUser!
        </motion.h2>

        {/* Task Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <TaskCard
            title="Design RetroUI Components"
            description="Create a set of retro-inspired UI components for the new project."
            dueDate="2023-07-15"
          />
          <TaskCard
            title="Implement Time Machine Feature"
            description="Add a feature that allows users to view past project states."
            dueDate="2023-07-20"
          />
          <TaskCard
            title="Retro Code Refactoring"
            description="Refactor the codebase to improve performance while maintaining the retro feel."
            dueDate="2023-07-25"
          />
        </div>

        {/* Activity Chart */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4 text-emerald-900">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#047857" />
              <YAxis stroke="#047857" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#d1fae5",
                  border: "1px solid #047857",
                  borderRadius: "4px",
                }}
              />
              <Bar dataKey="tasks" fill="#047857" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
  
`,
};

const pageComponents = {
  DashboardPage: `https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents`,
  RetroDashboardPage: `https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents`,
  SimpleDashboardPage: `https://github.com/Omi-Patel/retroUI_Component/tree/main/src/pagesComponents`,
};

const DashboardPageShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("DashboardPage");
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
    DashboardPage: <Cpu className="w-5 h-5" />,
  };

  const pageColors = {
    DashboardPage: "from-emerald-400 to-teal-500",
  };

  const pageBgs = {
    DashboardPage:
      "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "DashboardPage":
        return <DashboardPage />;
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
                  <span className="relative z-10">Dashboard</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-emerald-200 dark:bg-emerald-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Pages</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Explore our collection of retro-themed dashboard templates,
                designed for crafting dynamic web applications with a unique
                vintage aesthetic. Each page is fully customizable and ready to
                use.
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
                  Dashboard Pages
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
                          onClick={() => setActiveTab("preview")}
                          className={`py-1.5 px-3 text-sm font-medium flex items-center gap-1.5 transition-colors ${
                            activeTab === "preview"
                              ? `bg-gradient-to-r ${pageColors[activeComponent]} text-white`
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
                          <div className="text-gray-400 text-sm">
                            GitHub Repository
                          </div>
                        </div>
                        <div className="bg-[#2d2d2d] rounded-lg p-4">
                          <a
                            href={pageComponents[activeComponent]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-lg font-medium">
                              Visit GitHub Repository
                            </span>
                            <svg
                              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="mt-4 text-sm text-gray-400 text-center">
                          Click to view the complete source code and
                          documentation
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

export default DashboardPageShowcase;
