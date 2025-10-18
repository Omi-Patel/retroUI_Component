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
  Info,
  Loader as LoaderIcon,
} from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import loader components
import RetroLoader from "@/components/ui/loaders/RetroLoader";
import RetroSpinner from "@/components/ui/loaders/RetroSpinner";
import ThreeSpinner from "@/components/ui/loaders/ThreeSpinner";
import ShadowSpinner from "@/components/ui/loaders/ShadowSpinner";
import SequenceLoader from "@/components/ui/loaders/SequenceLoader";
import BarsLoader from "@/components/ui/loaders/BarsLoader";
import ModernLoader from "@/components/ui/loaders/ModernLoader";
import SpinnerLoader from "@/components/ui/loaders/SpinnerLoader";

const loaderComponents = {
  RetroLoader: {
    component: RetroLoader,
    title: "Retro Loader",
    description: "Classic bouncing blocks with retro styling",
    code: `import React from "react";

const RetroLoader = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-yellow-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
        <div className="w-8 h-8 bg-pink-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
        <div className="w-8 h-8 bg-blue-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
      </div>
    </div>
  );
};

export default RetroLoader;`,
  },
  RetroSpinner: {
    component: RetroSpinner,
    title: "Retro Spinner",
    description: "Rotating spinner with bold borders",
    code: `import React from "react";

const RetroSpinner = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="w-16 h-16 border-4 border-black border-t-yellow-500 rounded-full animate-spin shadow-[4px_4px_0px_0px_black]"></div>
    </div>
  );
};

export default RetroSpinner;`,
  },
  ThreeSpinner: {
    component: ThreeSpinner,
    title: "Three Spinner",
    description: "Triple rotating circles animation",
    code: `import React from "react";

const ThreeSpinner = () => {
  return (
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
    </div>
  );
};

export default ThreeSpinner;`,
  },
  ShadowSpinner: {
    component: ShadowSpinner,
    title: "Shadow Spinner",
    description: "Spinner with animated shadow effects",
    code: `import React from "react";

const ShadowSpinner = () => {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default ShadowSpinner;`,
  },
  SequenceLoader: {
    component: SequenceLoader,
    title: "Sequence Loader",
    description: "Sequential block animation",
    code: `import React from "react";

const SequenceLoader = () => {
  return (
    <div className="flex space-x-2">
      <div className="w-3 h-8 bg-teal-500 animate-pulse"></div>
      <div className="w-3 h-8 bg-cyan-500 animate-pulse [animation-delay:0.2s]"></div>
      <div className="w-3 h-8 bg-blue-500 animate-pulse [animation-delay:0.4s]"></div>
    </div>
  );
};

export default SequenceLoader;`,
  },
  BarsLoader: {
    component: BarsLoader,
    title: "Bars Loader",
    description: "Animated vertical bars",
    code: `import React from "react";

const BarsLoader = () => {
  return (
    <div className="flex items-end space-x-1 h-8">
      <div className="w-2 bg-pink-500 animate-pulse" style={{ height: '60%' }}></div>
      <div className="w-2 bg-purple-500 animate-pulse" style={{ height: '80%', animationDelay: '0.1s' }}></div>
      <div className="w-2 bg-indigo-500 animate-pulse" style={{ height: '100%', animationDelay: '0.2s' }}></div>
    </div>
  );
};

export default BarsLoader;`,
  },
  ModernLoader: {
    component: ModernLoader,
    title: "Modern Loader",
    description: "Sleek modern spinning loader",
    code: `import React from "react";

const ModernLoader = () => {
  return (
    <div className="w-12 h-12 border-4 border-gray-200 border-t-teal-500 rounded-full animate-spin"></div>
  );
};

export default ModernLoader;`,
  },
  SpinnerLoader: {
    component: SpinnerLoader,
    title: "Spinner Loader",
    description: "Classic circular spinner",
    code: `import React from "react";

const SpinnerLoader = () => {
  return (
    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin shadow-lg"></div>
  );
};

export default SpinnerLoader;`,
  },
};

const LoaderShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("RetroLoader");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const activeData = loaderComponents[activeComponent];

  return (
    <DocsContent
      title="Loader Components"
      description="Loading state indicators with retro animations and effects. Perfect for showing progress and keeping users engaged during async operations."
      badge="UI Components"
    >
      <InfoBox type="info" title="Usage">
        <p className="mb-2">
          These loaders use CSS animations and Tailwind utilities. They're
          lightweight and don't require additional dependencies.
        </p>
        <code className="text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
          npm install tailwindcss
        </code>
      </InfoBox>

      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {Object.keys(loaderComponents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeComponent === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {loaderComponents[key].title
                .replace(" Loader", "")
                .replace(" Spinner", "")}
            </button>
          ))}
        </div>
      </DocsSection>

      <DocsSection id="preview">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {activeData.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {activeData.description}
              </p>
            </div>

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

            {activeTab === "preview" ? (
              <ComponentPreview>
                <activeData.component />
              </ComponentPreview>
            ) : (
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
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
                  <SyntaxHighlighter
                    language="jsx"
                    style={atomDark}
                    showLineNumbers={true}
                    customStyle={{ margin: 0, borderRadius: 0 }}
                  >
                    {activeData.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </DocsSection>

      <DocsSection title="Usage" id="usage">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Basic Implementation
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Display loaders during async operations or page loads:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                {`import ${activeComponent} from './components/${activeComponent}';

function MyComponent() {
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return <${activeComponent} />;
  }
  
  return <div>Content loaded!</div>;
}`}
              </code>
            </div>
          </div>

          <InfoBox type="success" title="Best Practices">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Show loaders for operations taking longer than 300ms</li>
              <li>Provide context with surrounding text when possible</li>
              <li>Ensure loaders are centered and visible</li>
              <li>Consider adding timeout handlers for very long operations</li>
            </ul>
          </InfoBox>
        </div>
      </DocsSection>

      <DocsSection title="Features" id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Sparkles,
              title: "Pure CSS",
              description: "No JavaScript required, uses Tailwind animations",
            },
            {
              icon: Code,
              title: "Lightweight",
              description: "Minimal code with maximum visual impact",
            },
            {
              icon: Info,
              title: "Customizable",
              description: "Easy to modify colors, sizes, and speeds",
            },
            {
              icon: Eye,
              title: "Accessible",
              description: "Respects prefers-reduced-motion settings",
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

export default LoaderShowcase;
