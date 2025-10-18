"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Code, Copy, Check, Eye, Sparkles, Info, Type } from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import input components
import BasicInput from "@/components/ui/inputs/BasicInput";
import OutlineInput from "@/components/ui/inputs/OutlineInput";
import NeonInput from "@/components/ui/inputs/NeonInput";
import FocusedInput from "@/components/ui/inputs/FocusedInput";
import RoundedInput from "@/components/ui/inputs/RoundedInput";

const inputComponents = {
  BasicInput: {
    component: BasicInput,
    icon: Type,
    title: "Basic Input",
    description: "Classic retro-styled input with bold borders",
    code: `import React from "react";

const BasicInput = () => {
  return (
    <div className="w-full max-w-md">
      <label className="block text-xl font-bold mb-2 text-gray-700">
        Basic Input
      </label>
      <input
        type="text"
        placeholder="Enter text"
        className="w-full font-mono px-4 py-2 text-lg bg-gray-200 text-gray-800 border-4 border-black shadow-[6px_6px_0px_0px_black] hover:shadow-[10px_10px_0px_0px_black] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150 ease-out"
      />
    </div>
  );
};

export default BasicInput;`,
  },
  OutlineInput: {
    component: OutlineInput,
    icon: Type,
    title: "Outline Input",
    description: "Transparent input with thick border outline",
    code: `import React from "react";

const OutlineInput = () => {
  return (
    <div className="w-full max-w-md">
      <label className="block text-xl font-bold mb-2 text-gray-700">
        Outlined Input
      </label>
      <input
        type="text"
        placeholder="Enter text"
        className="w-full font-mono px-4 py-2 text-lg bg-transparent border-4 border-black text-gray-800 
        hover:bg-gray-200 transition-all duration-150 ease-out 
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-[4px_4px_0px_0px_black]"
      />
    </div>
  );
};

export default OutlineInput;`,
  },
  NeonInput: {
    component: NeonInput,
    icon: Type,
    title: "Neon Input",
    description: "Dark input with vibrant neon glow effects",
    code: `import React from "react";

const NeonInput = () => {
  return (
    <div className="w-full max-w-md">
      <label className="block text-xl font-bold mb-2 text-gray-700">
        Neon Glow Input
      </label>
      <input
        type="text"
        placeholder="Enter text"
        className="w-full font-mono px-4 py-2 text-lg bg-gray-900 text-white border-4 border-pink-500 neon-glow 
        focus:outline-none focus:ring-2 focus:ring-yellow-500 
        hover:shadow-[0_0_15px_5px_pink] transition-all duration-150 ease-out"
      />
    </div>
  );
};

export default NeonInput;`,
  },
  FocusedInput: {
    component: FocusedInput,
    icon: Type,
    title: "Focused Input",
    description: "Input with animated focus state transitions",
    code: `import React from "react";

const FocusedInput = () => {
  return (
    <div className="w-full max-w-md">
      <label className="block text-xl font-bold mb-2 text-gray-700">
        Focus Effect Input
      </label>
      <input
        type="text"
        placeholder="Click to focus"
        className="w-full font-mono px-4 py-2 text-lg bg-white text-gray-800 border-4 border-gray-400 
        focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-300 
        transition-all duration-200 ease-out shadow-[4px_4px_0px_0px_gray]"
      />
    </div>
  );
};

export default FocusedInput;`,
  },
  RoundedInput: {
    component: RoundedInput,
    icon: Type,
    title: "Rounded Input",
    description: "Smooth rounded input with soft shadows",
    code: `import React from "react";

const RoundedInput = () => {
  return (
    <div className="w-full max-w-md">
      <label className="block text-xl font-bold mb-2 text-gray-700">
        Rounded Input
      </label>
      <input
        type="text"
        placeholder="Enter text"
        className="w-full font-mono px-4 py-2 text-lg bg-gradient-to-r from-cyan-100 to-blue-100 text-gray-800 
        border-4 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 
        shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transition-all duration-150 ease-out"
      />
    </div>
  );
};

export default RoundedInput;`,
  },
};

const InputShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("BasicInput");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const activeData = inputComponents[activeComponent];

  return (
    <DocsContent
      title="Input Components"
      description="Form input components with retro styling, bold borders, and unique focus effects. Perfect for creating distinctive user input experiences."
      badge="UI Components"
    >
      {/* Installation Guide */}
      <InfoBox type="info" title="Installation">
        <p className="mb-2">
          These input components use Tailwind CSS for styling. Ensure you have
          proper form handling and validation in your application.
        </p>
        <code className="text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
          npm install tailwindcss
        </code>
      </InfoBox>

      {/* Component Selector */}
      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.keys(inputComponents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeComponent === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {inputComponents[key].title}
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
              Import and use the input component in your forms:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                {`import ${activeComponent} from './components/${activeComponent}';

function MyForm() {
  return (
    <form>
      <${activeComponent} />
    </form>
  );
}`}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Form Integration
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Add proper name attributes for form submission</li>
              <li>Implement onChange handlers for state management</li>
              <li>Add validation logic and error messages</li>
              <li>
                Consider accessibility with proper labels and ARIA attributes
              </li>
            </ul>
          </div>

          <InfoBox type="success" title="Pro Tip">
            Combine multiple input variants to create a unique and cohesive form
            design. All inputs are fully compatible with React form libraries
            like React Hook Form and Formik.
          </InfoBox>
        </div>
      </DocsSection>

      {/* Features */}
      <DocsSection title="Features" id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Sparkles,
              title: "Retro Styling",
              description: "Bold borders and unique visual effects",
            },
            {
              icon: Code,
              title: "Accessible",
              description: "Built with proper labels and focus states",
            },
            {
              icon: Info,
              title: "Customizable",
              description: "Easy to modify colors and dimensions",
            },
            {
              icon: Eye,
              title: "Multiple States",
              description: "Hover, focus, and active state animations",
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

export default InputShowcase;
