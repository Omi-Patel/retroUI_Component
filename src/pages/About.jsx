"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Layers,
  Zap,
  Palette,
  Gift,
  ArrowRight,
  Code,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      '<script src="https://cdn.tailwindcss.com"></script>'
    );
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section - Unique design with pattern background */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative mb-24 overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 dark:from-cyan-900/20 dark:to-teal-900/20 z-0"></div>

          <div className="relative z-10 py-16 px-6 sm:px-12 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 bg-white/80 dark:bg-black/30 backdrop-blur-sm rounded-full shadow-md"
            >
              <div className="flex items-center space-x-2">
                <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Open Source UI Components
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500"
            >
              About RetroUI
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              RetroUI is a carefully crafted UI component library built with
              Tailwind CSS, designed to help developers create unique and
              nostalgic retro-themed interfaces. Create responsive and
              beautifully designed components effortlessly.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <NavLink to="/components">
                <button className="px-6 py-3 bg-black dark:bg-zinc-800 text-teal-400 border-2 border-black dark:border-zinc-700 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1 transition-all duration-300 rounded-sm flex items-center gap-2">
                  <span>Explore Components</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </NavLink>

              <a
                href="https://github.com/Omi-Patel/retroUI_Component"
                target="_blank"
                className="px-6 py-3 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-zinc-700 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transform hover:-translate-y-1 transition-all duration-300 rounded-sm flex items-center gap-2"
                rel="noreferrer"
              >
                <Github className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section - Unique grid layout with animated cards */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100"
          >
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
              RetroUI
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <FeatureCard
                icon={
                  <Layers className="w-10 h-10 text-blue-500 dark:text-blue-400" />
                }
                title="Why RetroUI?"
                description="RetroUI brings the best of nostalgic design with a modern twist. With minimalistic styles and pixel-art aesthetics, RetroUI offers developers a wide range of customizable components that perfectly fit into projects aiming for a vintage look."
                color="blue"
              />
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <FeatureCard
                icon={
                  <Zap className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />
                }
                title="Fully Customizable"
                description="Tailored to your project's needs, every component of RetroUI is highly customizable. Modify the colors, fonts, and layouts to match your desired retro vibe without compromising on the flexibility of modern UI standards."
                color="yellow"
              />
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <FeatureCard
                icon={
                  <Palette className="w-10 h-10 text-green-500 dark:text-green-400" />
                }
                title="Easy Integration"
                description="RetroUI is built with ease of integration in mind. It seamlessly fits into existing projects, allowing you to enhance your application's user interface with a retro theme in no time. Just copy and paste, and you're good to go."
                color="green"
              />
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <FeatureCard
                icon={
                  <Gift className="w-10 h-10 text-purple-500 dark:text-purple-400" />
                }
                title="Free & Open Source"
                description="RetroUI is completely free to use. You can quickly spin up beautiful, retro-styled websites without paying a cent. Plus, it's open source, so you can contribute to the library and make it even better."
                color="purple"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* How to Use Section - Unique code display with tabs */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            How to Use{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
              RetroUI
            </span>{" "}
            Library
          </h2>

          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm shadow-xl rounded-xl p-8 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <Code className="w-6 h-6 text-teal-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                  Quick Start Guide
                </h3>
              </div>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
                Using RetroUI is simple. RetroUI components are built with
                Tailwind CSS, making it quick to customize and integrate into
                any project. To use RetroUI, all you need is Tailwind CSS!
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-4 flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mr-3 font-mono">
                      1
                    </span>
                    Using Tailwind in an HTML Page
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-4 ml-11">
                    To add Tailwind CSS to your HTML page, you can use a CDN.
                    Just add the following script to your head tag:
                  </p>

                  <div className="mt-4 relative">
                    <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 dark:bg-gray-700 rounded-t-md flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs text-gray-400 ml-4">HTML</span>
                    </div>
                    <pre className="bg-gray-800 dark:bg-gray-700 text-gray-100 dark:text-white p-4 pt-10 rounded-md overflow-x-auto text-sm sm:text-base">
                      {`<script src="https://cdn.tailwindcss.com"></script>`}
                    </pre>
                    <button
                      className={`absolute top-10 right-4 text-xs px-2 py-1 rounded transition-colors ${
                        isCopied
                          ? "bg-green-600 text-white"
                          : "bg-gray-700 dark:bg-gray-600 text-white hover:bg-gray-600 dark:hover:bg-gray-500"
                      }`}
                      onClick={handleCopy}
                    >
                      {isCopied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-4 flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mr-3 font-mono">
                      2
                    </span>
                    Using Tailwind in a Code Project
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 ml-11">
                    Tailwind CSS can be easily integrated into React projects.
                    Check out the official{" "}
                    <a
                      href="https://tailwindcss.com/"
                      target="_blank"
                      className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                      rel="noreferrer"
                    >
                      Tailwind CSS
                    </a>{" "}
                    documentation for detailed instructions on how to set up
                    Tailwind with frameworks like React, Next.js, and more.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-4 flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mr-3 font-mono">
                      3
                    </span>
                    Using RetroUI Components
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 ml-11">
                    Once you have Tailwind CSS set up, simply copy the component
                    code from our library and paste it into your project.
                    Customize the colors, sizes, and other properties to match
                    your design needs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action Section - Unique design with pattern */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16 relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 dark:from-teal-900/20 dark:to-cyan-900/20 z-0"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzAgMzBoMzB2MzBoLTMwem0wLTMwaDMwdjMwaC0zMHptLTMwIDBoMzB2MzBoLTMwem0wIDMwaDMwdjMwaC0zMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 dark:opacity-10 z-0"></div>

          <div className="relative z-10 py-16 px-6">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100"
            >
              Elevate Your Development Workflow
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10"
            >
              RetroUI is designed to help developers save time and create
              stunning retro-style interfaces with ease. Why wait? Give it a try
              and see how it can improve your workflow.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink to={"/components"}>
                <button className="px-8 py-4 bg-black dark:bg-zinc-800 text-teal-400 border-2 border-black dark:border-zinc-700 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1 transition-all duration-300 rounded-sm">
                  Get Started with RetroUI
                </button>
              </NavLink>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

function FeatureCard({ icon, title, description, color }) {
  const getBgColor = () => {
    const colors = {
      blue: "bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800/30",
      yellow:
        "bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800/30",
      green:
        "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800/30",
      purple:
        "bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800/30",
    };
    return (
      colors[color] ||
      "bg-gray-50 dark:bg-gray-900/10 border-gray-200 dark:border-gray-800/30"
    );
  };

  return (
    <div
      className={`rounded-xl shadow-lg p-8 transition-all border ${getBgColor()}`}
    >
      <div className="flex items-center mb-6">
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold ml-4 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default About;
