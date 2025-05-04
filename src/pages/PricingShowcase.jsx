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
  DollarSign,
  Award,
  Gem,
  Package,
} from "lucide-react";

// Import pricing components
import BasicPricing from "../components/Pricing/Pricing";
import PricingRetro3D from "../components/Pricing/PricingRetro3D";
import PricingRetroVibrant from "../components/Pricing/PricingRetroVibrant";

const pricingComponents = {
  BasicPricing: `
import React, { useState } from "react";

const BasicPricing = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <section className="bg-[#f5f3e8] text-[#3c3b28] body-font overflow-hidden py-16">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-4xl font-bold text-[#ff003f] mb-4">Pricing</h1>
          <p className="lg:w-2/3 mx-auto text-base text-[#918c72]">
            Unlock retro vibes and timeless design.
          </p>
          <div className="flex mx-auto border-2 border-[#ff003f] rounded overflow-hidden mt-6">
            <button
              className={\`py-2 px-4 \${
                plan === "monthly"
                  ? "bg-[#ff003f] text-white"
                  : "bg-[#f5f3e8] text-[#ff003f]"
              }\`}
              onClick={() => setPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={\`py-2 px-4 \${
                plan === "annually"
                  ? "bg-[#ff003f] text-white"
                  : "bg-[#f5f3e8] text-[#ff003f]"
              }\`}
              onClick={() => setPlan("annually")}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-4 border-[#918c72] bg-[#fffaf0] flex flex-col relative">
              <h2 className="text-sm tracking-widest text-[#ff003f] mb-2 font-semibold">
                BASIC
              </h2>
              <h1 className="text-5xl text-[#3c3b28] font-extrabold leading-none mb-4">
                {plan === "monthly" ? "$10" : "$100"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#3c3b28]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  5 Projects
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Retro UI Kit
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Vintage Icons
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#ff003f] hover:bg-[#e00036] py-2 px-4 rounded-md">
                Get Started
              </button>
            </div>
          </div>

          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-4 border-[#918c72] bg-[#fffaf0] flex flex-col relative">
              <span className="bg-[#ff003f] text-white text-xs absolute top-0 right-0 px-3 py-1 rounded-bl-lg">
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest text-[#ff003f] mb-2 font-semibold">
                PRO
              </h2>
              <h1 className="text-5xl text-[#3c3b28] font-extrabold leading-none mb-4">
                {plan === "monthly" ? "$30" : "$300"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#3c3b28]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Unlimited Projects
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Retro UI Kit + Templates
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Vintage Icons & Illustrations
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#ff003f] hover:bg-[#e00036] py-2 px-4 rounded-md">
                Get Started
              </button>
            </div>
          </div>

          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-4 border-[#918c72] bg-[#fffaf0] flex flex-col relative">
              <h2 className="text-sm tracking-widest text-[#ff003f] mb-2 font-semibold">
                ENTERPRISE
              </h2>
              <h1 className="text-5xl text-[#3c3b28] font-extrabold leading-none mb-4">
                {plan === "monthly" ? "$50" : "$500"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#3c3b28]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Unlimited Projects
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Full Retro UI Kit
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff003f] text-white mr-2">
                    ✓
                  </span>
                  Custom Vintage Designs
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#ff003f] hover:bg-[#e00036] py-2 px-4 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicPricing;
  `,
  PricingRetro3D: `
import React, { useState } from "react";

const PricingRetro3D = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <section className="bg-[#fef9f3] text-[#333] body-font overflow-hidden py-16">
      <div className="container px-5 mx-auto">
        {/* Title and Switch */}
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-4xl font-bold text-[#F78E69] mb-4 font-vintage">
            Vintage Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto text-base text-[#565656] italic">
            Bring a vintage touch to modern-day pricing.
          </p>
          <div className="flex mx-auto border-4 border-[#F78E69] rounded-full overflow-hidden mt-6 shadow-lg">
            <button
              className={\`py-2 px-6 transition-colors duration-300 ease-in-out \${
                plan === "monthly"
                  ? "bg-[#F78E69] text-white"
                  : "bg-[#fef9f3] text-[#F78E69]"
              }\`}
              onClick={() => setPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={\`py-2 px-6 transition-colors duration-300 ease-in-out \${
                plan === "annually"
                  ? "bg-[#F78E69] text-white"
                  : "bg-[#fef9f3] text-[#F78E69]"
              }\`}
              onClick={() => setPlan("annually")}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap -m-4">
          {/* Pricing Card 1 */}
          <div className="p-2 sm:p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg bg-[#fff8ec] flex flex-col relative shadow-lg border-4 border-[#F78E69] border-t-[8px] border-l-[8px] hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
              <h2 className="text-sm tracking-widest text-[#F78E69] mb-1 font-semibold font-vintage">
                STARTER
              </h2>
              <h1 className="text-5xl font-bold text-[#333] mb-4 font-vintage">
                {plan === "monthly" ? "$15" : "$150"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#333]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Unlimited Designs
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Free Updates
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Email Support
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#F78E69] hover:bg-[#f57254] py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
                Sign Up
              </button>
            </div>
          </div>

          {/* Pricing Card 2 */}
          <div className="p-2 sm:p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg bg-[#fff8ec] flex flex-col relative shadow-lg border-4 border-[#F78E69] border-t-[8px] border-l-[8px] hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
              <span className="bg-[#F78E69] text-white text-xs absolute top-0 right-0 px-3 py-1 rounded-bl-md font-vintage">
                RECOMMENDED
              </span>
              <h2 className="text-sm tracking-widest text-[#F78E69] mb-1 font-semibold font-vintage">
                PROFESSIONAL
              </h2>
              <h1 className="text-5xl font-bold text-[#333] mb-4 font-vintage">
                {plan === "monthly" ? "$35" : "$350"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#333]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Custom Branding
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Priority Support
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Access to All Designs
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#F78E69] hover:bg-[#f57254] py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
                Sign Up
              </button>
            </div>
          </div>

          {/* Pricing Card 3 */}
          <div className="p-2 sm:p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg bg-[#fff8ec] flex flex-col relative shadow-lg border-4 border-[#F78E69] border-t-[8px] border-l-[8px] hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
              <h2 className="text-sm tracking-widest text-[#F78E69] mb-1 font-semibold font-vintage">
                ENTERPRISE
              </h2>
              <h1 className="text-5xl font-bold text-[#333] mb-4 font-vintage">
                {plan === "monthly" ? "$55" : "$550"}
                <span className="text-lg ml-1 font-light">/mo</span>
              </h1>
              <ul className="mb-6 space-y-2 text-[#333]">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Unlimited Designs
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Custom Designs
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F78E69] text-white mr-2">
                    ✓
                  </span>
                  Dedicated Support
                </li>
              </ul>
              <button className="mt-auto text-white bg-[#F78E69] hover:bg-[#f57254] py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingRetro3D;
  `,
  PricingRetroVibrant: `
import React from "react";

const PricingRetroVibrant = () => {
  return (
    <div className="bg-white py-12">
      <div className="text-center mb-12 font-mono">
        <h2 className="text-xl md:text-6xl font-bold ">
          Plans that scale with business
        </h2>
        <p className="text-sm md:text-lg w-full sm:w-1/2 mx-auto text-gray-600 mt-2 px-4 font-sans">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page, or admin panel for your SaaS.
        </p>

        {/* Monthly and Yearly Toggle */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-start px-4">
          <div className="flex items-center">
            <input type="radio" name="plan" className="mr-2" checked />
            <span className=" text-gray-600 mr-3">Monthly Plan</span>
          </div>
          <div className="flex items-center">
            <input type="radio" name="plan" className="mr-2" />
            <span className="">
              Yearly Plan <span className="text-blue-500">(Save 20%)</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-2 sm:p-8">
        {/* Basic Plan */}
        <div className="w-full md:w-1/3 bg-gray-100 border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-8 rounded-xl">
          <h3 className="text-2xl  flex items-center mb-4">
            <span className="mr-2">👋</span> Basic
          </h3>
          <p className="text-gray-500  mb-6">
            Lorem ipsum dolor sit amet, consectur adipiscing elit.
          </p>
          <p className="text-4xl ">
            $0<span className="text-lg">/mo/user</span>
          </p>
          <button className="bg-blue-500 text-white  p-3 w-full mt-6 rounded-lg hover:bg-blue-600">
            Get 14 days free trial
          </button>

          <div className="mt-8">
            <p className="text-gray-600 font-semibold mb-4">BEST FOR FREE</p>
            <ul className="text-gray-700 ">
              <li className="mb-2">Full Access to Landingfolio</li>
              <li className="mb-2">100 GB Free Storage</li>
              <li className="mb-2">Unlimited Visitors</li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="w-full md:w-1/3 bg-white border-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-8 rounded-xl relative">
          <div className="absolute top-0 right-0 bg-blue-500 text-white p-2  text-sm rounded-bl-lg">
            Most Popular
          </div>
          <h3 className="text-2xl  flex items-center mb-4">
            <span className="mr-2">💪</span> Pro
          </h3>
          <p className="text-gray-500  mb-6">
            Lorem ipsum dolor sit amet, consectur adipiscing elit.
          </p>
          <p className="text-4xl ">
            $49<span className="text-lg">/mo/user</span>
          </p>
          <button className="bg-blue-500 text-white  p-3 w-full mt-6 rounded-lg hover:bg-blue-600">
            Get 14 days free trial
          </button>

          <div className="mt-8">
            <p className="text-gray-600 font-semibold mb-4">BEST FOR GROWTH</p>
            <ul className="text-gray-700 ">
              <li className="mb-2">Full Access to Landingfolio</li>
              <li className="mb-2">200 GB Free Storage</li>
              <li className="mb-2">Unlimited Visitors</li>
            </ul>
          </div>
        </div>

        {/* Exclusive Plan */}
        <div className="w-full md:w-1/3 bg-gray-100 border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-8 rounded-xl">
          <h3 className="text-2xl  flex items-center mb-4">
            <span className="mr-2">🚀</span> Exclusive
          </h3>
          <p className="text-gray-500  mb-6">
            Lorem ipsum dolor sit amet, consectur adipiscing elit.
          </p>
          <p className="text-4xl ">
            $99<span className="text-lg">/mo/user</span>
          </p>
          <button className="bg-blue-500 text-white  p-3 w-full mt-6 rounded-lg hover:bg-blue-600">
            Get 14 days free trial
          </button>

          <div className="mt-8">
            <p className="text-gray-600 font-semibold mb-4">
              BEST FOR ENTERPRISES
            </p>
            <ul className="text-gray-700 ">
              <li className="mb-2">Full Access to Landingfolio</li>
              <li className="mb-2">500 GB Free Storage</li>
              <li className="mb-2">Unlimited Visitors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingRetroVibrant;
  `,
};

const PricingShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("BasicPricing");
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

  const pricingIcons = {
    BasicPricing: <DollarSign className="w-5 h-5" />,
    PricingRetro3D: <Award className="w-5 h-5" />,
    PricingRetroVibrant: <Gem className="w-5 h-5" />,
  };

  const pricingColors = {
    BasicPricing: "from-purple-400 to-purple-600",
    PricingRetro3D: "from-amber-400 to-orange-600",
    PricingRetroVibrant: "from-emerald-400 to-teal-600",
  };

  const pricingBgs = {
    BasicPricing:
      "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30",
    PricingRetro3D:
      "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30",
    PricingRetroVibrant:
      "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/30",
  };

  const renderComponent = (name) => {
    switch (name) {
      case "BasicPricing":
        return <BasicPricing />;
      case "PricingRetro3D":
        return <PricingRetro3D />;
      case "PricingRetroVibrant":
        return <PricingRetroVibrant />;
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-900/20 dark:to-purple-900/20 z-0 rounded-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-purple-500/20 dark:from-purple-900/30 dark:to-purple-900/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-purple-200/50 dark:border-purple-800/30">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                <span>Retro Pricing Collection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600">
                  Retro
                </span>
                <span className="relative">
                  <span className="relative z-10">Pricing</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 dark:bg-purple-800/50 -z-10 skew-x-3"></span>
                </span>
                <span> Components</span>
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-6">
                Pixel-perfect, nostalgic pricing tables for your modern web
                applications. Bring the charm of retro aesthetics to your
                pricing strategy.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-md shadow-lg hover:shadow-purple-500/25 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-500/20 dark:from-purple-900/30 dark:to-purple-900/30 rounded-xl blur-xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-200/50 dark:border-purple-800/30 shadow-xl">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 w-48 h-64 flex flex-col">
                  <div className="w-full h-8 bg-purple-500 rounded-md mb-4"></div>{" "}
                  {/* Header Placeholder */}
                  <div className="w-3/4 h-6 mt-2 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                  {/* Title Placeholder */}
                  <div className="w-1/2 h-10 mt-2 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                  {/* Price Placeholder */}
                  <div className="flex-grow mt-4 space-y-2">
                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                    {/* Feature Placeholder */}
                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                    {/* Feature Placeholder */}
                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                    {/* Feature Placeholder */}
                  </div>
                  <div className="w-full h-8 bg-purple-500 rounded mt-2"></div>{" "}
                  {/* Button Placeholder */}
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 w-48 h-64 flex flex-col">
                  <div className="w-full h-8 bg-emerald-500 rounded-md mb-4"></div>{" "}
                  {/* Header Placeholder */}
                  <div className="w-3/4 h-6 mt-2 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                  {/* Title Placeholder */}
                  <div className="w-1/2 h-10 mt-2 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                  {/* Price Placeholder */}
                  <div className="flex-grow mt-4 space-y-2">
                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                    {/* Feature Placeholder */}
                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                    {/* Feature Placeholder */}
                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>{" "}
                    {/* Feature Placeholder */}
                  </div>
                  <div className="w-full h-8 bg-emerald-500 rounded mt-2"></div>{" "}
                  {/* Button Placeholder */}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Package className="w-5 h-5 mr-2 text-purple-500" />
            Pricing Collection
          </h2>

        </div>

        {isGridView ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.keys(pricingComponents).map((componentName) => (
              <motion.div
                key={componentName}
                whileHover={{ y: -5 }}
                className={`${pricingBgs[componentName]} rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg`}
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
                        className={`p-1.5 rounded-md bg-gradient-to-r ${pricingColors[componentName]} text-white mr-2`}
                      >
                        {pricingIcons[componentName]}
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
                        copyToClipboard(pricingComponents[componentName])
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
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-500/10 to-purple-500/10 dark:from-purple-900/20 dark:to-purple-900/20">
                <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-purple-500" />
                  Components
                </h2>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(pricingComponents).map((componentName) => (
                  <motion.button
                    key={componentName}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveComponent(componentName)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeComponent === componentName
                        ? `${pricingBgs[componentName]} border-l-4 border-purple-500`
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${pricingColors[componentName]} text-white`}
                    >
                      {pricingIcons[componentName]}
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
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 ${pricingBgs[activeComponent]}`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center">
                        <div
                          className={`p-1.5 rounded-md bg-gradient-to-r ${pricingColors[activeComponent]} text-white mr-2`}
                        >
                          {pricingIcons[activeComponent]}
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
                              ? `bg-gradient-to-r ${pricingBgs[activeComponent]} text-purple-700 dark:text-purple-300`
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
                              ? `bg-gradient-to-r ${pricingBgs[activeComponent]} text-purple-700 dark:text-purple-300`
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
                          className={`flex flex-col items-center justify-center p-10 ${pricingBgs[activeComponent]} rounded-lg border border-gray-200 dark:border-gray-700 mb-6`}
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
                        <div className="bg-gradient-to-r from-purple-500/5 to-purple-500/5 dark:from-purple-900/10 dark:to-purple-900/10 rounded-lg border border-purple-200 dark:border-purple-800/30 overflow-hidden">
                          <button
                            onClick={() => setExpandedInfo(!expandedInfo)}
                            className="w-full p-4 flex justify-between items-center text-left"
                          >
                            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                              <Zap className="w-4 h-4 text-purple-500 mr-2" />
                              Pricing Details & Usage Tips
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
                                      Retro-inspired pricing tables with
                                      pixel-perfect details
                                    </li>
                                    <li>Monthly/Annual toggle functionality</li>
                                    <li>Fully responsive and accessible</li>
                                    <li>Customizable colors and layouts</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Customization
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    These pricing tables can be easily
                                    customized by modifying the Tailwind
                                    classes. Try changing colors, pricing tiers,
                                    or adding additional features to match your
                                    project's needs.
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
                            components/Pricing/{activeComponent}.jsx
                          </span>
                        </div>
                        <div className="pt-10 overflow-hidden rounded-md border border-gray-600">
                          <SyntaxHighlighter
                            language="jsx"
                            style={atomDark}
                            showLineNumbers={true}
                            wrapLines={true}
                          >
                            {pricingComponents[activeComponent]}
                          </SyntaxHighlighter>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(pricingComponents[activeComponent])
                          }
                          className="absolute top-14 right-4 px-3 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-md transition-all duration-150 flex items-center gap-2 text-sm font-medium"
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

export default PricingShowcase;
