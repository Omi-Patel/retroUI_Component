"use client";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  FileText,
  Bell,
  HelpCircle,
} from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "collection",
      title: "Information Collection",
      icon: <Eye />,
      content:
        "RetroUI does not collect personal information. For open-source contributions, we may store provided names and email addresses.",
    },
    {
      id: "usage",
      title: "Information Usage",
      icon: <FileText />,
      content:
        "Collected information is used solely for improving RetroUI and communicating with contributors. We do not sell or transfer your information.",
    },
    {
      id: "security",
      title: "Data Security",
      icon: <Shield />,
      content:
        "We implement security measures to protect your personal information. All data is encrypted and stored securely.",
    },
    {
      id: "third-party",
      title: "Third-party Links",
      icon: <Lock />,
      content:
        "We are not responsible for the content or privacy practices of any third-party sites we may link to. Please review their policies before providing information.",
    },
    {
      id: "changes",
      title: "Policy Changes",
      icon: <Bell />,
      content:
        "Changes to this policy will be posted on this page. We will notify users of significant changes via email or site notification.",
    },
    {
      id: "contact",
      title: "Contact",
      icon: <HelpCircle />,
      content:
        "For questions about this policy, contact privacy@retroui.com. We aim to respond to all inquiries within 48 hours.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 px-4 py-12 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Header with decorative elements */}
        <div className="relative mb-12 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-xl opacity-70"></div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative text-3xl sm:text-4xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"
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
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] border-2 border-black/10 dark:border-white/10"
            >
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg">
                  <div className="text-teal-600 dark:text-teal-400">
                    {section.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 flex items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400">
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

        {/* Back to home button */}
        <div className="mt-12 text-center">
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

export default PrivacyPolicy;
