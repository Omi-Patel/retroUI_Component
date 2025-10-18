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
  Layout,
  Palette,
  Zap,
  PanelBottom,
} from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import footer components
import BasicFooter from "@/components/layout/footers/BasicFooter";
import BorderedFooter from "@/components/layout/footers/BorderedFooter";
import ShadowFooter from "@/components/layout/footers/ShadowFooter";
import ClassicFooter from "@/components/layout/footers/ClassicFooter";
import PixelFooter from "@/components/layout/footers/PixelFooter";
import NeonFooter from "@/components/layout/footers/NeonFooter";

const footerComponents = {
  Basic: {
    component: BasicFooter,
    title: "Basic Footer",
    description: "Simple and clean footer design with essential links",
    code: `// BasicFooter.jsx
import React from "react";

const BasicFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer content */}
        </div>
      </div>
    </footer>
  );
};

export default BasicFooter;`,
  },
  Bordered: {
    component: BorderedFooter,
    title: "Bordered Footer",
    description: "Footer with bold borders and retro styling",
    code: `// BorderedFooter.jsx
import React from "react";

const BorderedFooter = () => {
  return (
    <footer className="border-t-4 border-black bg-gray-100">
      {/* Bordered footer content */}
    </footer>
  );
};

export default BorderedFooter;`,
  },
  Shadow: {
    component: ShadowFooter,
    title: "Shadow Footer",
    description: "Footer with shadow effects for depth",
    code: `// ShadowFooter.jsx
import React from "react";

const ShadowFooter = () => {
  return (
    <footer className="shadow-2xl bg-white">
      {/* Shadow footer content */}
    </footer>
  );
};

export default ShadowFooter;`,
  },
  Classic: {
    component: ClassicFooter,
    title: "Classic Footer",
    description: "Traditional footer layout with multiple sections",
    code: `// ClassicFooter.jsx
import React from "react";

const ClassicFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      {/* Classic footer content */}
    </footer>
  );
};

export default ClassicFooter;`,
  },
  Pixel: {
    component: PixelFooter,
    title: "Pixel Footer",
    description: "8-bit pixelated retro footer design",
    code: `// PixelFooter.jsx
import React from "react";

const PixelFooter = () => {
  return (
    <footer className="pixel-art-style">
      {/* Pixel footer content */}
    </footer>
  );
};

export default PixelFooter;`,
  },
  Neon: {
    component: NeonFooter,
    title: "Neon Footer",
    description: "Vibrant neon-styled footer with glowing effects",
    code: `// NeonFooter.jsx
import React from "react";

const NeonFooter = () => {
  return (
    <footer className="bg-gray-900 text-neon">
      {/* Neon footer content */}
    </footer>
  );
};

export default NeonFooter;`,
  },
};

const FooterShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("Basic");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    const code = footerComponents[activeComponent].code;
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const activeData = footerComponents[activeComponent];

  const features = [
    {
      icon: Layout,
      title: "Flexible Layout",
      description: "Multi-column layouts that adapt to your content needs",
    },
    {
      icon: Palette,
      title: "Retro Styling",
      description: "Nostalgic designs with modern functionality",
    },
    {
      icon: PanelBottom,
      title: "Bottom Placement",
      description: "Designed to sit at the bottom of your page layout",
    },
    {
      icon: Sparkles,
      title: "Rich Content",
      description: "Support for links, social icons, and copyright info",
    },
  ];

  return (
    <DocsContent
      title="Footer Components"
      description="Retro-styled footer components to complete your page layouts"
      badge="Layout Components"
    >
      {/* Installation */}
      <InfoBox type="info" title="Installation">
        <p className="text-sm">
          Copy the footer component code and customize the links, social icons,
          and copyright information to match your project.
        </p>
      </InfoBox>

      {/* Variant Selector */}
      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {Object.keys(footerComponents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeComponent === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {footerComponents[key].title}
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
            Import and use the footer component at the bottom of your layout.
            All footers are responsive and adapt to different screen sizes:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mt-4">
            <code className="text-teal-600 dark:text-teal-400">
              import {activeData.title.replace(/\s+/g, "")} from
              "@/components/layout/footers/
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
          <li>Include essential links like privacy policy and terms</li>
          <li>Add social media links for better engagement</li>
          <li>Keep copyright information up to date</li>
          <li>Ensure footer content is easily readable</li>
        </ul>
      </InfoBox>
    </DocsContent>
  );
};

export default FooterShowcase;
