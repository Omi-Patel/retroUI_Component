"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Code, Copy, Check, Eye, Sparkles, Info } from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import button components
import RetroButton from "@/components/ui/buttons/RetroButton";
import RoundButton from "@/components/ui/buttons/RoundButton";
import RetroButton2 from "@/components/ui/buttons/RetroButton2";
import ThreeDButton from "@/components/ui/buttons/ThreeDButton";
import PixelButton from "@/components/ui/buttons/PixelButton";

const buttonComponents = {
  RetroButton: {
    component: RetroButton,
    code: `import React from "react";

const RetroButton = () => {
  return (
    <button
      className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-black bg-neon border-4 border-black cursor-pointer select-none
      shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transition-all duration-150 ease-out retro-btn"
    >
      Click Me
    </button>
  );
};

export default RetroButton;`,
    title: "Retro Button",
    description:
      "Classic retro-styled button with bold borders and shadow effects",
  },
  RetroButton2: {
    component: RetroButton2,
    code: `import React from "react";

const RetroButton2 = () => {
  return (
    <button
      className="relative inline-block px-6 py-3 font-mono text-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-4 border-black cursor-pointer select-none
      shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-all duration-150 ease-out retro-btn
      before:absolute before:inset-0 before:bg-black before:-z-10 hover:before:bg-opacity-50
      hover:scale-105 transform hover:brightness-110"
    >
      <span className="relative z-20 neon-text">Click Me</span>
    </button>
  );
};

export default RetroButton2;`,
    title: "Gradient Retro Button",
    description: "Vibrant gradient button with enhanced neon effects",
  },
  RoundButton: {
    component: RoundButton,
    code: `import React from "react";

const RoundButton = () => {
  return (
    <button
      className="relative inline-block px-6 py-3 font-mono text-lg text-white bg-gradient-to-r from-blue-400 to-purple-600 border-2 border-gray-800 cursor-pointer select-none
    rounded-full shadow-lg transition-transform transform hover:scale-105
    before:absolute before:inset-0 before:border-2 before:border-gray-700 before:rounded-full before:content-[''] before:z-10 before:opacity-50 before:-translate-x-1 before:-translate-y-1
    after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-700 after:rounded-full after:opacity-30 after:content-[''] after:z-0"
    >
      <span className="relative z-20 font-bold">Click Me</span>
    </button>
  );
};

export default RoundButton;`,
    title: "Round Button",
    description: "Smooth rounded button with layered gradient effects",
  },
  ThreeDButton: {
    component: ThreeDButton,
    code: `import React from "react";

const ThreeDButton = () => {
  return (
    <button
      className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-black bg-yellow-100 border-4 border-black cursor-pointer select-none
  shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-all duration-150 ease-out 
  active:shadow-[3px_3px_0px_0px_black] active:translate-x-1 active:translate-y-1"
    >
      3D Effect
    </button>
  );
};

export default ThreeDButton;`,
    title: "3D Button",
    description: "Button with pronounced 3D depth and press animation",
  },
  PixelButton: {
    component: PixelButton,
    code: `import React from "react";

const PixelButton = () => {
  return (
    <button
      className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-white bg-green-500 border-4 border-black cursor-pointer select-none
  shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-all duration-200 ease-out
  before:content-[''] before:block before:absolute before:w-full before:h-full before:border-4 before:border-black before:left-1 before:top-1 before:transition-all before:duration-200 before:ease-out
  hover:before:left-0 hover:before:top-0 active:shadow-[3px_3px_0px_0px_black] active:before:left-2 active:before:top-2"
    >
      Pixel Art
    </button>
  );
};

export default PixelButton;`,
    title: "Pixel Button",
    description: "Pixel-art inspired button with layered border effects",
  },
};

const ButtonShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("RetroButton");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const activeData = buttonComponents[activeComponent];

  return (
    <DocsContent
      title="Button Components"
      description="A collection of retro-styled button components with various effects and animations. Perfect for adding a nostalgic touch to your modern web applications."
      badge="UI Components"
    >
      {/* Installation Guide */}
      <InfoBox type="info" title="Installation">
        <p className="mb-2">
          These button components use Tailwind CSS for styling. Make sure you
          have Tailwind CSS installed in your project.
        </p>
        <code className="text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
          npm install tailwindcss
        </code>
      </InfoBox>

      {/* Component Selector */}
      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.keys(buttonComponents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeComponent === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {buttonComponents[key].title}
            </button>
          ))}
        </div>
      </DocsSection>

      {/* Active Component Display */}
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {activeData.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {activeData.description}
              </p>
            </div>

            {/* Tab Selector */}
            <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-4 py-2 font-medium text-sm transition-colors relative ${
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
                className={`px-4 py-2 font-medium text-sm transition-colors relative ${
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

            {/* Content Area */}
            {activeTab === "preview" ? (
              <ComponentPreview>
                <activeData.component />
              </ComponentPreview>
            ) : (
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  {/* Code Header */}
                  <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs text-gray-400 ml-2">
                        {activeComponent}.jsx
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(activeData.code)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-md transition-colors"
                    >
                      {copySuccess ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Code
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code Content */}
                  <SyntaxHighlighter
                    language="jsx"
                    style={atomDark}
                    showLineNumbers={true}
                    customStyle={{
                      margin: 0,
                      borderRadius: 0,
                    }}
                  >
                    {activeData.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </DocsSection>

      {/* Usage Guide */}
      <DocsSection title="Usage" id="usage">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Basic Usage
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Copy the component code and paste it into your project. Then
              import and use it in your React components:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                {`import ${activeComponent} from './components/${activeComponent}';

function MyComponent() {
  return (
    <div>
      <${activeComponent} />
    </div>
  );
}`}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Customization
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              You can customize these buttons by modifying the Tailwind CSS
              classes. Change colors, sizes, shadows, and animations to match
              your design system.
            </p>
          </div>

          <InfoBox type="success" title="Pro Tip">
            All button components support standard HTML button attributes and
            can be easily integrated with event handlers like onClick.
          </InfoBox>
        </div>
      </DocsSection>

      {/* Features */}
      <DocsSection title="Features" id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Sparkles,
              title: "Retro Aesthetics",
              description:
                "Authentic vintage design with modern implementation",
            },
            {
              icon: Code,
              title: "Pure CSS",
              description:
                "No JavaScript required for styling and basic animations",
            },
            {
              icon: Info,
              title: "Fully Responsive",
              description: "Works perfectly on all screen sizes",
            },
            {
              icon: Eye,
              title: "Accessible",
              description: "Built with accessibility best practices in mind",
            },
          ].map((feature) => (
            <div
              key={feature.title}
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
    </DocsContent>
  );
};

export default ButtonShowcase;
