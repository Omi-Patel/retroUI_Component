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
  CreditCard,
  User,
  Briefcase,
  MessageSquare,
  FileText,
} from "lucide-react";

// Import card components
import ProductCard from "../components/Cards/ProductCard";
import ProfileCard from "../components/Cards/ProfileCard";
import SeviceCard from "../components/Cards/SeviceCard";
import TestimonialCard from "../components/Cards/TestimonialCard";
import BlogCard from "../components/Cards/BlogCard";

const cardComponents = {
  ProductCard: `
import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-sm p-4 bg-slate-400 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <img
        src="https://picsum.photos/id/660/150"
        alt="Product Name"
        className="w-full h-48 object-cover border-b-4 border-black mb-4"
      />
      <div className="p-4">
        <h3 className="text-2xl font-mono font-bold mb-2 text-black">
          Retro Product
        </h3>
        <p className="text-black mb-6">
          This is a retro-themed product card. It features bold colors, solid
          borders, and a vintage aesthetic for a classic feel.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-black">$29.99</span>
          <button className="px-4 py-2 font-mono text-white bg-blue-500 border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-in-out">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
  `,
  ProfileCard: `
import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-sm p-4 bg-cyan-100 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <img
        src="https://picsum.photos/id/1084/150"
        alt="Profile Avatar"
        className="w-24 h-24 rounded-full mx-auto border-4 border-black mb-4"
      />
      <div className="p-4 text-center">
        <h3 className="text-2xl font-mono font-bold mb-2 text-black">
          John Doe
        </h3>
        <p className="text-black mb-4">
          A passionate developer with a love for all things retro.
        </p>
        <button className="px-4 py-2 font-mono text-white bg-green-500 border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-in-out">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
  `,
  ServiceCard: `
import React from "react";

const SeviceCard = () => {
  return (
    <div className="bg-yellow-200 border-4 border-black p-6 rounded-md shadow-[8px_8px_0px_0px_black] max-w-xs transform hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-200 ease-in-out">
      <h3 className="text-3xl font-mono font-bold mb-4 text-black">
        Web Development
      </h3>
      <p className="text-black mb-6">
        Offering cutting-edge web development services with a retro twist!
      </p>
      <button className="px-4 py-2 bg-black text-yellow-200 border-2 border-black font-bold shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transform hover:-translate-y-1 transition-all">
        Learn More
      </button>
    </div>
  );
};

export default SeviceCard;
  `,
  TestimonialCard: `
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="max-w-xs p-6 bg-gradient-to-r from-teal-400 to-pink-400 border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out">
      <div className="bg-black text-white p-4 rounded-t-lg -mt-10 relative z-10 border-2 border-white shadow-inner shadow-black">
        <h3 className="text-2xl font-mono font-bold uppercase">John Doe</h3>
      </div>
      <div className="p-4 bg-gray-200 border-t-4 border-black -mt-6 relative z-0">
        <p className="italic text-black text-lg">
          "This service is amazing, brought back the nostalgia of the retro
          era!"
        </p>
        <span className="block mt-4 text-red-600 font-bold text-xl">★★★★★</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
  `,
  BlogCard: `
import React from "react";

const BlogCard = () => {
  return (
    <div className="font-mono border-4 border-black p-6 rounded-lg shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-shadow duration-150 ease-in-out max-w-md mx-auto">
      {/* Image */}
      <img
        src="https://picsum.photos/id/1025/150"
        alt="Blog Cover"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Title */}
      <h3 className="text-3xl font-bold mb-2 text-white bg-black p-2 rounded-lg shadow-lg">
        Retro Design Tips
      </h3>

      {/* Metadata */}
      <div className="flex items-center mb-4 text-white text-sm">
        <span className="mr-2">📅 August 15, 2024</span>
        <span className="mr-2">✍️ John Doe</span>
      </div>

      {/* Description */}
      <p className="text-white mb-4 text-sm font-mono">
        Discover the secrets to creating eye-catching retro designs that stand
        out in modern projects. Learn tips and tricks to give your designs a
        nostalgic feel with a modern twist.
      </p>

      {/* Button */}
      <button className="px-5 py-2 bg-black text-white border-2 border-gray-800 rounded-md shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-shadow duration-150">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
  `,
};

const CardShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("ProductCard");
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

  const cardIcons = {
    ProductCard: <CreditCard className="w-5 h-5" />,
    ProfileCard: <User className="w-5 h-5" />,
    ServiceCard: <Briefcase className="w-5 h-5" />,
    TestimonialCard: <MessageSquare className="w-5 h-5" />,
    BlogCard: <FileText className="w-5 h-5" />,
  };

  const cardColors = {
    ProductCard: "from-blue-400 to-blue-500",
    ProfileCard: "from-cyan-500 to-teal-600",
    ServiceCard: "from-yellow-400 to-amber-500",
    TestimonialCard: "from-teal-400 to-pink-600",
    BlogCard: "from-gray-500 to-gray-600",
  };

  const cardBgs = {
    ProductCard:
      "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30",
    ProfileCard:
      "bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-cyan-900/20 dark:to-teal-900/30",
    ServiceCard:
      "bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30",
    TestimonialCard:
      "bg-gradient-to-br from-teal-50 to-pink-100 dark:from-teal-900/20 dark:to-pink-900/30",
    BlogCard:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "ProductCard":
        return <ProductCard />;
      case "ProfileCard":
        return <ProfileCard />;
      case "ServiceCard":
        return <SeviceCard />;
      case "TestimonialCard":
        return <TestimonialCard />;
      case "BlogCard":
        return <BlogCard />;
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/10 dark:from-blue-900/20 dark:to-blue-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-blue-500/20 dark:from-blue-900/30 dark:to-blue-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-blue-200/50 dark:border-blue-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro UI Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Card</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 dark:bg-blue-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Components</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                Pixel-perfect, nostalgic card designs for your modern web
                applications. Bring the charm of retro aesthetics to your UI.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-md shadow-lg hover:shadow-blue-500/25 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/20 dark:from-blue-900/30 dark:to-blue-900/30 rounded-xl blur-xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-blue-800/30 shadow-xl">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 w-48 h-64 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>{" "}
                  {/* Avatar Placeholder */}
                  <div className="w-3/4 h-4 mt-4 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                  {/* Name Placeholder */}
                  <div className="w-1/2 h-3 mt-1 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                  {/* Title Placeholder */}
                  <div className="flex gap-2 mt-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>{" "}
                    {/* Social Icon Placeholder */}
                    <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>{" "}
                    {/* Social Icon Placeholder */}
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 w-48 h-64 flex flex-col justify-between">
                  <div className="w-full h-32 bg-gray-300 dark:bg-gray-600 rounded-md"></div>{" "}
                  {/* Image Placeholder */}
                  <div className="flex-grow mt-2">
                    <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                    {/* Title Placeholder */}
                    <div className="w-1/2 h-3 mt-1 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                    {/* Price Placeholder */}
                  </div>
                  <div className="w-full h-8 bg-blue-500 rounded mt-2"></div>{" "}
                  {/* Button Placeholder */}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-blue-500" />
            Card Collection
          </h2>

          
        </div>

        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.keys(cardComponents).map((componentName) => (
              <motion.div
                key={componentName}
                whileHover={{ y: -5 }}
                className={`${cardBgs[componentName]} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
              >
                <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
                  <div className="scale-75">
                    {renderComponent(componentName)}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center">
                      <div
                        className={`p-1.5 rounded-md bg-gradient-to-r ${cardColors[componentName]} text-white mr-2`}
                      >
                        {cardIcons[componentName]}
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
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(cardComponents[componentName])
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
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500/10 to-blue-500/10 dark:from-blue-900/20 dark:to-blue-900/20">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-blue-500" />
                  Components
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(cardComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${cardBgs[componentName]} border-l-4 border-blue-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${cardColors[componentName]} text-white`}
                    >
                      {cardIcons[componentName]}
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
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 ${cardBgs[activeComponent]}`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                        <div
                          className={`p-1.5 rounded-md bg-gradient-to-r ${cardColors[activeComponent]} text-white mr-2`}
                        >
                          {cardIcons[activeComponent]}
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
                              ? `bg-gradient-to-r ${cardBgs[activeComponent]} text-blue-700 dark:text-blue-300`
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
                              ? `bg-gradient-to-r ${cardBgs[activeComponent]} text-blue-700 dark:text-blue-300`
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
                          className={`flex flex-col items-center justify-center p-10 ${cardBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
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
                        <div className="bg-gradient-to-r from-blue-500/5 to-blue-500/5 dark:from-blue-900/10 dark:to-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800/30 overflow-hidden">
                          <button
                            onClick={() => setExpandedInfo(!expandedInfo)}
                            className="w-full p-4 flex justify-between items-center text-left"
                          >
                            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                              <Zap className="w-4 h-4 text-blue-500 mr-2" />
                              Card Details & Usage Tips
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
                                    This card can be easily customized by
                                    modifying the Tailwind classes. Try changing
                                    colors, sizes, or adding additional effects
                                    to match your project's design.
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
                            components/Cards/{activeComponent}.jsx
                          </span>
                        </div>
                        <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                          <SyntaxHighlighter
                            language="jsx"
                            style={atomDark}
                            showLineNumbers={true}
                            wrapLines={true}
                          >
                            {cardComponents[activeComponent]}
                          </SyntaxHighlighter>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(cardComponents[activeComponent])
                          }
                          className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
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

export default CardShowcase;
