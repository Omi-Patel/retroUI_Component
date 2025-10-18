"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Code,
  Copy,
  Check,
  Eye,
  Sparkles,
  Menu,
  Navigation,
  Palette,
  Zap,
  LayoutGrid,
} from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import navbar components
import RetroNavbar from "@/components/layout/navbars/RetroNavbar";
import RetroNavbar1 from "@/components/layout/navbars/RetroNavbar1";
import NeonNavbar from "@/components/layout/navbars/NeonNavbar";
import PixelNavbar from "@/components/layout/navbars/PixelNavbar";
import GradientNavbar from "@/components/layout/navbars/GradientNavbar";

const navbarComponents = {
  Retro: {
    component: RetroNavbar,
    title: "Retro Navbar",
    description: "Classic retro navbar with bold borders and bright colors",
    code: `// RetroNavbar.jsx
import React, { useState } from "react";

const RetroNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f9c84d] border-4 border-black shadow-[4px_4px_0px_0px_black] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold font-mono text-black">
              RetroBrand
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-black font-mono text-lg hover:bg-yellow-100 px-4 py-2 rounded-lg">
              Home
            </a>
            {/* More nav items... */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RetroNavbar;`,
  },
  Retro1: {
    component: RetroNavbar1,
    title: "Retro Navbar 1",
    description: "Alternative retro design with unique styling",
    code: `// RetroNavbar1.jsx  
import React from "react";

const RetroNavbar1 = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500">
      {/* Navbar content */}
    </nav>
  );
};

export default RetroNavbar1;`,
  },
  Neon: {
    component: NeonNavbar,
    title: "Neon Navbar",
    description: "Vibrant neon-themed navigation with glowing effects",
    code: `// NeonNavbar.jsx
import React from "react";

const NeonNavbar = () => {
  return (
    <nav className="bg-gray-900 text-neon shadow-neon">
      {/* Neon styled content */}
    </nav>
  );
};

export default NeonNavbar;`,
  },
  Pixel: {
    component: PixelNavbar,
    title: "Pixel Navbar",
    description: "Pixelated 8-bit style navigation bar",
    code: `// PixelNavbar.jsx
import React from "react";

const PixelNavbar = () => {
  return (
    <nav className="pixel-art-style">
      {/* 8-bit styled content */}
    </nav>
  );
};

export default PixelNavbar;`,
  },
  Gradient: {
    component: GradientNavbar,
    title: "Gradient Navbar",
    description: "Modern navbar with smooth gradient backgrounds",
    code: `// GradientNavbar.jsx
import React from "react";

const GradientNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Gradient styled content */}
    </nav>
  );
};

export default GradientNavbar;`,
  },
};

const NavbarShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("Retro");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    const code = navbarComponents[activeComponent].code;
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const activeData = navbarComponents[activeComponent];

  const features = [
    {
      icon: Navigation,
      title: "Responsive Design",
      description:
        "Mobile-friendly with collapsible menus for all screen sizes",
    },
    {
      icon: Palette,
      title: "Retro Aesthetics",
      description: "Nostalgic designs with bold colors and unique styles",
    },
    {
      icon: Sparkles,
      title: "Interactive States",
      description: "Hover effects and smooth animations for better UX",
    },
    {
      icon: LayoutGrid,
      title: "Easy Integration",
      description: "Drop-in components ready to use in your projects",
    },
  ];

  return (
    <DocsContent
      title="Navbar Components"
      description="Retro-styled navigation bars with responsive design and unique aesthetics"
      badge="Layout Components"
    >
      {/* Installation */}
      <InfoBox type="info" title="Installation">
        <p className="text-sm">
          Copy the navbar component code and customize the links, colors, and
          branding to match your project. All navbars include mobile responsive
          menus.
        </p>
      </InfoBox>

      {/* Variant Selector */}
      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.keys(navbarComponents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeComponent === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {navbarComponents[key].title}
            </button>
          ))}
        </div>
      </DocsSection>

      {/* Preview/Code Section */}
      <DocsSection id="preview">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Component Info */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {activeData.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {activeData.description}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("preview")}
                className={`relative px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === "preview"
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </div>
                {activeTab === "preview" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`relative px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === "code"
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Code
                </div>
                {activeTab === "code" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </button>
            </div>

            {/* Content */}
            {activeTab === "preview" ? (
              <ComponentPreview>
                <div className="w-full">
                  <activeData.component />
                </div>
              </ComponentPreview>
            ) : (
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                {/* Window Controls */}
                <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">
                      {activeData.title}.jsx
                    </span>
                  </div>

                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-md transition-colors"
                  >
                    {copySuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Code
                      </>
                    )}
                  </button>
                </div>

                {/* Code Block */}
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  showLineNumbers={true}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    fontSize: "0.875rem",
                  }}
                >
                  {activeData.code}
                </SyntaxHighlighter>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </DocsSection>

      {/* Usage */}
      <DocsSection title="Usage" id="usage">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            Import and use the navbar component at the top of your layout. All
            navbars are responsive and include mobile menu functionality:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mt-4">
            <code className="text-teal-600 dark:text-teal-400">
              import {activeData.title.replace(/\s+/g, "")} from
              "@/components/layout/navbars/
              {activeData.title.replace(/\s+/g, "")}";
            </code>
          </div>
        </div>
      </DocsSection>

      {/* Features */}
      <DocsSection title="Features" id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {feature.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DocsSection>

      {/* Best Practices */}
      <InfoBox type="success" title="Best Practices">
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Keep navigation items clear and concise</li>
          <li>Ensure mobile menu is easily accessible</li>
          <li>Use consistent branding across all pages</li>
          <li>Include active state indicators for current page</li>
        </ul>
      </InfoBox>
    </DocsContent>
  );
};

export default NavbarShowcase;
