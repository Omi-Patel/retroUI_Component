"use client";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  FileText,
  RefreshCw,
  Users,
  Settings,
} from "lucide-react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance",
      icon: <CheckCircle />,
      content:
        "By using RetroUI, you agree to these Terms. If you disagree, please do not use our services.",
    },
    {
      id: "license",
      title: "Use License",
      icon: <FileText />,
      content:
        "You may use RetroUI for personal and commercial projects. You may not distribute the RetroUI source code without permission.",
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      icon: <AlertTriangle />,
      content:
        "RetroUI is provided 'as is' without warranties. Your use of RetroUI is at your own risk.",
    },
    {
      id: "limitations",
      title: "Limitations",
      icon: <Settings />,
      content:
        "RetroUI and its suppliers are not liable for any damages arising from the use or inability to use RetroUI.",
    },
    {
      id: "contributions",
      title: "Contributions",
      icon: <Users />,
      content:
        "By contributing to RetroUI, you agree to license your contribution under RetroUI's license.",
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: <RefreshCw />,
      content:
        "We may modify these terms at any time. Continued use of RetroUI constitutes acceptance of changes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 px-4 py-12 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Header with decorative elements */}
        <div className="relative mb-12 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-teal-200 dark:bg-teal-900/20 rounded-full blur-xl opacity-70"></div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative text-3xl sm:text-4xl font-bold mb-4"
          >
            Terms and Conditions
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-gray-600 dark:text-gray-300"
          >
            Last updated: {new Date().toLocaleDateString()}
          </motion.p>
        </div>

        {/* Content with animated sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] border-2 border-black/10 dark:border-white/10"
            >
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-teal-100 dark:bg-teal-900/20 rounded-lg">
                  <div className="text-cyan-600 dark:text-cyan-400">
                    {section.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 flex items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400">
                      {index + 1}. {section.title}
                    </span>
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Decorative element */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-100 dark:bg-gray-800 px-4 text-sm text-gray-500 dark:text-gray-400">
              RetroUI © {new Date().getFullYear()}
            </span>
          </div>
        </div>

        {/* Back to home button */}
        <div className="mt-8 text-center">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-teal-400 dark:text-gray-900 font-medium rounded-md border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Terms;
