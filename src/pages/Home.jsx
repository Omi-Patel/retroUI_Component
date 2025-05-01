"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/AppUI/Form";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronUp,
  Star,
  Code,
  Palette,
  Zap,
  ArrowRight,
  Github,
  MousePointerClick,
  Moon,
  Sun,
  Layout,
  Layers,
  Terminal,
} from "lucide-react";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [activeTab, setActiveTab] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cycle through tabs automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Fix 2: Optimize staggerChildren for smoother animations
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardHover = {
    rest: {
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    hover: {
      scale: 1.03,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 dark:bg-[#0A0A0F] dark:text-gray-100 overflow-hidden">
      {/* Floating scroll indicator */}
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-600 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/10 opacity-70"></div>
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-teal-300/20 to-cyan-300/20 dark:from-teal-500/10 dark:to-cyan-500/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-l from-purple-300/20 to-pink-300/20 dark:from-purple-500/10 dark:to-pink-500/10 blur-3xl"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.03] dark:opacity-[0.02]"></div>
        </div>

        <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            style={{ opacity, scale }}
            className="absolute top-0 right-0 -mt-10 mr-10 hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg blur opacity-30 dark:opacity-40"></div>
              <div className="relative px-3 py-1 bg-white dark:bg-gray-900 rounded-lg border border-teal-200 dark:border-teal-800">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="flex flex-col space-y-8"
            >
              <motion.div variants={fadeIn} className="space-y-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center"
                >
                  <a
                    href="https://github.com/Omi-Patel/retroUI_Component"
                    target="_blank"
                    className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-teal-900 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-teal-200 dark:hover:bg-teal-900/30 border border-teal-200 dark:border-teal-800/50"
                    rel="noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    <span>Star on GitHub</span>
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-200 dark:bg-teal-800 text-teal-700 dark:text-teal-200 text-xs font-bold transition-transform group-hover:rotate-12">
                      ⭐
                    </div>
                  </a>
                </motion.div>

                <motion.h1
                  variants={fadeIn}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
                >
                  <span className="block">Craft with</span>
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400">
                      RetroUI
                    </span>
                    <span className="absolute -bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 rounded-full"></span>
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeIn}
                  className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                >
                  A nostalgic component library that brings vintage aesthetics
                  to modern web applications. Create unique interfaces with
                  pixel-perfect retro components.
                </motion.p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex flex-wrap gap-4 sm:gap-6"
              >
                <NavLink to="/components">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-cyan-600 rounded opacity-70 group-hover:opacity-100 blur transition duration-200"></div>
                    <div className="relative px-5 py-2 sm:px-8 sm:py-4 bg-black dark:bg-zinc-900 text-teal-400 font-semibold sm:font-bold text-sm sm:text-base rounded flex items-center gap-1.5 sm:gap-3 group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300">
                      <span>Explore Components</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.button>
                </NavLink>

                <NavLink to="/about">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2 sm:px-8 sm:py-4 bg-white dark:bg-zinc-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-normal sm:font-medium text-sm sm:text-base rounded hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-300 flex items-center gap-1.5 sm:gap-2"
                  >
                    Learn More
                  </motion.button>
                </NavLink>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
                    >
                      <span className="text-xs font-medium">
                        {String.fromCharCode(64 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <span>Join 1,200+ developers</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-800/50">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    RetroUI Preview
                  </div>
                  <div></div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="flex space-x-2">
                        <div className="h-6 w-6 bg-teal-100 dark:bg-teal-900/30 rounded flex items-center justify-center">
                          <div className="h-3 w-3 bg-teal-500 rounded-sm"></div>
                        </div>
                        <div className="h-6 w-6 bg-gray-100 dark:bg-gray-800 rounded"></div>
                      </div>
                    </div>
                    <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded p-3">
                        <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                      <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded p-3">
                        <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="h-10 w-28 bg-teal-500 rounded flex items-center justify-center">
                      <div className="h-3 w-16 bg-white/30 rounded"></div>
                    </div>
                    <div className="h-10 w-28 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded"></div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 transform rotate-12"
              >
                <div className="bg-yellow-100 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 p-3 rounded shadow-lg">
                  <div className="text-yellow-800 dark:text-yellow-300 text-sm font-medium">
                    Pixel Perfect!
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400 hidden md:flex"
        >
          <span className="mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <MousePointerClick className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900/30 pointer-events-none"></div>

        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-teal-900 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/20 rounded-full">
              Why Choose RetroUI
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Nostalgic Design,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                Modern Functionality
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Blend the charm of retro aesthetics with cutting-edge web
              technologies to create unique and memorable user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Easy Integration",
                description:
                  "Copy and paste our components directly into your projects. Compatible with React, Next.js, and other modern frameworks.",
              },
              {
                icon: <Palette className="w-6 h-6" />,
                title: "Customizable Design",
                description:
                  "Tailor each component to match your brand's identity with our flexible styling options and Tailwind CSS integration.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Performance Optimized",
                description:
                  "Enjoy the nostalgic look without sacrificing speed. Our components are built with performance in mind.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                variants={{ hover: cardHover.hover }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 mb-6 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-100 dark:bg-gray-900/50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-teal-300/10 dark:bg-teal-500/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-cyan-300/10 dark:bg-cyan-500/5 blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-teal-900 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/20 rounded-full">
              Simple Process
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                Three Steps
              </span>{" "}
              to Retro Perfection
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Get your project looking retro-fabulous in minutes with our simple
              integration process.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  number: "01",
                  title: "Browse Components",
                  description:
                    "Explore our collection of retro-themed UI components and find the perfect match for your project.",
                },
                {
                  number: "02",
                  title: "Copy the Code",
                  description:
                    "Simply copy the code snippet for your chosen component and paste it into your project.",
                },
                {
                  number: "03",
                  title: "Customize & Launch",
                  description:
                    "Tailor the component to your needs, adjust the styling, and launch your retro-inspired website.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="relative z-10 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 sm:p-8 shadow-md h-full">
                    <div className="absolute -top-5 left-8 px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg text-white font-bold">
                      {step.number}
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold mb-3 mt-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-teal-900 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/20 rounded-full">
              Showcase
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Designed for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                Creative Developers
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Discover our latest retro-themed UI components designed to enhance
              your web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i <= 4
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Based on 200+ reviews
                  </span>
                </div>

                <h3 className="text-3xl font-bold">
                  Unlimited Design Inspiration
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  Our SaaS product offers a range of customizable, stylish
                  components that are easy to integrate and perfect for creating
                  a unique and engaging user interface with a nostalgic touch.
                </p>

                <ul className="space-y-3">
                  {[
                    "Pixel-perfect retro aesthetics",
                    "Modern functionality",
                    "Responsive design",
                    "Dark mode support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <NavLink to="/components">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group px-6 py-3 bg-black dark:bg-zinc-800 text-teal-400 border-2 border-black dark:border-zinc-700 font-bold rounded-md flex items-center gap-2 hover:gap-3 transition-all duration-300"
                    >
                      <span>Start Exploring</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </NavLink>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-20"></div>
                <div className="relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl overflow-hidden">
                  {/* Retro-themed UI Component Demo */}
                  <div className="aspect-video relative overflow-hidden">
                    {/* Header with tabs */}
                    <div className="bg-gray-100 dark:bg-zinc-800 border-b border-gray-200 dark:border-gray-700 p-3 flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex bg-gray-200 dark:bg-zinc-700 rounded-md p-1">
                        {["Components", "Templates", "Themes"].map(
                          (tab, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveTab(index)}
                              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                                activeTab === index
                                  ? "bg-white dark:bg-zinc-600 text-gray-800 dark:text-gray-200"
                                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                              }`}
                            >
                              {tab}
                            </button>
                          )
                        )}
                      </div>
                      <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        {isDarkMode ? (
                          <Sun className="w-4 h-4" />
                        ) : (
                          <Moon className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Main content area */}
                    <div className="p-4 h-full bg-gray-50 dark:bg-zinc-900">
                      {/* Component showcase based on active tab */}
                      <div
                        className={`${
                          activeTab === 0 ? "block" : "hidden"
                        } h-full`}
                      >
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          {/* Button components */}
                          <div className="space-y-2">
                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                              Buttons
                            </div>
                            <div className="space-y-2">
                              <motion.div
                                className="px-4 py-2 bg-teal-500 text-white text-xs rounded-md inline-block"
                                animate={{ y: [0, -2, 0] }}
                                transition={{
                                  repeat: Number.POSITIVE_INFINITY,
                                  duration: 1.5,
                                }}
                              >
                                Primary
                              </motion.div>
                              <div className="px-4 py-2 border border-teal-500 text-teal-500 text-xs rounded-md inline-block ml-2">
                                Secondary
                              </div>
                            </div>
                          </div>

                          {/* Toggle components */}
                          <div className="space-y-2">
                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                              Toggles
                            </div>
                            <div className="flex items-center space-x-2">
                              <motion.div
                                className="w-8 h-4 bg-teal-500 rounded-full relative"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{
                                  repeat: Number.POSITIVE_INFINITY,
                                  duration: 2,
                                }}
                              >
                                <div className="absolute right-0 top-0 w-4 h-4 bg-white rounded-full shadow-sm transform -translate-y-0"></div>
                              </motion.div>
                              <div className="w-8 h-4 bg-gray-300 dark:bg-gray-700 rounded-full relative">
                                <div className="absolute left-0 top-0 w-4 h-4 bg-white rounded-full shadow-sm transform -translate-y-0"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card component */}
                        <motion.div
                          className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-zinc-800"
                          animate={{
                            boxShadow: [
                              "0 2px 4px rgba(0,0,0,0.05)",
                              "0 4px 8px rgba(0,0,0,0.1)",
                              "0 2px 4px rgba(0,0,0,0.05)",
                            ],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 2,
                          }}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                            <div>
                              <div className="h-2.5 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                              <div className="h-2 w-16 bg-gray-100 dark:bg-gray-600 rounded mt-1"></div>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded"></div>
                            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded"></div>
                            <div className="h-2 w-2/3 bg-gray-100 dark:bg-gray-700 rounded"></div>
                          </div>
                        </motion.div>

                        {/* Icons row */}
                        <div className="flex justify-between mt-4">
                          {[Zap, Layout, Layers, Terminal].map((Icon, i) => (
                            <motion.div
                              key={i}
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
                              animate={{ y: [0, i % 2 === 0 ? -3 : 3, 0] }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                                delay: i * 0.2,
                              }}
                            >
                              <Icon className="w-4 h-4 text-teal-500" />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Templates tab content */}
                      <div
                        className={`${
                          activeTab === 1 ? "block" : "hidden"
                        } h-full`}
                      >
                        <div className="grid grid-cols-2 gap-4 h-full">
                          <motion.div
                            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                            whileHover={{ y: -5 }}
                          >
                            <div className="h-2 bg-teal-500"></div>
                            <div className="p-2">
                              <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                              <div className="space-y-1">
                                <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded"></div>
                                <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded"></div>
                                <div className="h-1.5 w-2/3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                            whileHover={{ y: -5 }}
                          >
                            <div className="h-2 bg-cyan-500"></div>
                            <div className="p-2">
                              <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                              <div className="space-y-1">
                                <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded"></div>
                                <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded"></div>
                                <div className="h-1.5 w-2/3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Themes tab content */}
                      <div
                        className={`${
                          activeTab === 2 ? "block" : "hidden"
                        } h-full`}
                      >
                        <div className="grid grid-cols-3 gap-2 h-full">
                          {[
                            {
                              name: "Retro",
                              color: "from-purple-500 to-pink-500",
                            },
                            {
                              name: "Neon",
                              color: "from-teal-400 to-cyan-400",
                            },
                            {
                              name: "Vintage",
                              color: "from-amber-500 to-orange-500",
                            },
                          ].map((theme, i) => (
                            <motion.div
                              key={i}
                              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div
                                className={`h-12 bg-gradient-to-r ${theme.color}`}
                              ></div>
                              <div className="p-2 text-center">
                                <div className="text-xs font-medium">
                                  {theme.name}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom status bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="text-white">
                        <div className="text-sm font-medium text-teal-300 mb-1">
                          New Components Added Weekly
                        </div>
                        <div className="text-sm font-bold flex items-center">
                          <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1.5,
                            }}
                            className="w-2 h-2 bg-teal-400 rounded-full mr-2"
                          ></motion.div>
                          18 new designs added last week
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -top-6 -right-6 transform rotate-12 hidden sm:block"
                >
                  <div className="bg-purple-100 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 p-3 rounded shadow-lg">
                    <div className="text-purple-800 dark:text-purple-300 text-sm font-medium">
                      Fully Responsive!
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-black/80 dark:to-black/40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-teal-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-gray-100 dark:text-gray-900"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-teal-300 bg-teal-900/20 rounded-full">
                Get In Touch
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                Have a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Request
                </span>{" "}
                or{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Inquiry
                </span>
                ?
              </h2>
              <p className="text-lg text-gray-300">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl"
            >
              <Form />

              <div className="mt-6 text-center text-sm text-gray-400">
                Your request will be reviewed by our team, and we will get back
                to you as soon as possible.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll to top button (always visible) */}
    </div>
  );
};

export default Home;
