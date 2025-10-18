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
  ToggleLeft,
} from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import switch components
import BasicSwitch from "@/components/ui/switches/BasicSwitch";
import BorderedSwitch from "@/components/ui/switches/BorderedSwitch";
import GlowSwitch from "@/components/ui/switches/GlowSwitch";
import IconSwitch from "@/components/ui/switches/IconSwitch";
import LabeledSwitch from "@/components/ui/switches/LabeledSwitch";

const switchComponents = {
  BasicSwitch: {
    component: BasicSwitch,
    title: "Basic Switch",
    description: "Simple toggle switch with smooth animation",
    code: `import React, { useState } from "react";

const BasicSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={\`relative w-16 h-8 flex items-center rounded-full cursor-pointer transition-all duration-300 \${
        isOn ? "bg-teal-500" : "bg-gray-300"
      }\`}
    >
      <div
        className={\`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 \${
          isOn ? "translate-x-9" : "translate-x-1"
        }\`}
      />
    </div>
  );
};

export default BasicSwitch;`,
  },
  BorderedSwitch: {
    component: BorderedSwitch,
    title: "Bordered Switch",
    description: "Switch with bold retro border styling",
    code: `import React, { useState } from "react";

const BorderedSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={\`relative w-16 h-8 flex items-center rounded-full cursor-pointer border-4 border-black transition-all duration-300 \${
        isOn ? "bg-yellow-400" : "bg-gray-200"
      }\`}
    >
      <div
        className={\`w-5 h-5 bg-black rounded-full shadow-md transform transition-transform duration-300 \${
          isOn ? "translate-x-8" : "translate-x-1"
        }\`}
      />
    </div>
  );
};

export default BorderedSwitch;`,
  },
  GlowSwitch: {
    component: GlowSwitch,
    title: "Glow Switch",
    description: "Switch with neon glow effect when active",
    code: `import React, { useState } from "react";

const GlowSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={\`relative w-16 h-8 flex items-center rounded-full cursor-pointer transition-all duration-300 \${
        isOn ? "bg-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "bg-gray-700"
      }\`}
    >
      <div
        className={\`w-6 h-6 bg-white rounded-full transform transition-transform duration-300 \${
          isOn ? "translate-x-9" : "translate-x-1"
        }\`}
      />
    </div>
  );
};

export default GlowSwitch;`,
  },
  IconSwitch: {
    component: IconSwitch,
    title: "Icon Switch",
    description: "Switch with icon indicators for on/off states",
    code: `import React, { useState } from "react";

const IconSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={\`relative w-20 h-10 flex items-center justify-between px-2 rounded-full cursor-pointer transition-all duration-300 \${
        isOn ? "bg-green-500" : "bg-red-500"
      }\`}
    >
      <span className="text-white text-xs font-bold">
        {isOn ? "ON" : "OFF"}
      </span>
      <div
        className={\`w-6 h-6 bg-white rounded-full shadow-md absolute transition-all duration-300 \${
          isOn ? "right-2" : "left-2"
        }\`}
      />
    </div>
  );
};

export default IconSwitch;`,
  },
  LabeledSwitch: {
    component: LabeledSwitch,
    title: "Labeled Switch",
    description: "Switch with accompanying label text",
    code: `import React, { useState } from "react";

const LabeledSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Notifications
      </span>
      <div
        onClick={() => setIsOn(!isOn)}
        className={\`relative w-14 h-7 flex items-center rounded-full cursor-pointer transition-all duration-300 \${
          isOn ? "bg-blue-500" : "bg-gray-300"
        }\`}
      >
        <div
          className={\`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 \${
            isOn ? "translate-x-8" : "translate-x-1"
          }\`}
        />
      </div>
    </div>
  );
};

export default LabeledSwitch;`,
  },
};

const SwitchShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("BasicSwitch");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const activeData = switchComponents[activeComponent];

  return (
    <DocsContent
      title="Switch Components"
      description="Toggle switch components for binary on/off states. Perfect for settings, preferences, and feature toggles with smooth animations."
      badge="UI Components"
    >
      <InfoBox type="info" title="Usage">
        <p className="mb-2">
          Switch components provide a visual way to toggle between two states.
          All switches include onClick handlers and state management examples.
        </p>
        <code className="text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
          npm install tailwindcss
        </code>
      </InfoBox>

      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.keys(switchComponents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeComponent === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {switchComponents[key].title.replace(" Switch", "")}
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
              Use switches for settings and preferences that can be toggled:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                {`import ${activeComponent} from './components/${activeComponent}';
import { useState } from 'react';

function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  
  return (
    <div>
      <${activeComponent} 
        checked={isEnabled} 
        onChange={setIsEnabled} 
      />
    </div>
  );
}`}
              </code>
            </div>
          </div>

          <InfoBox type="success" title="Best Practices">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                Always provide clear labels describing what the switch controls
              </li>
              <li>Provide immediate visual feedback when toggled</li>
              <li>Consider adding confirmation for critical settings</li>
              <li>Ensure switches are large enough to tap on mobile devices</li>
            </ul>
          </InfoBox>
        </div>
      </DocsSection>

      <DocsSection title="Features" id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Sparkles,
              title: "Smooth Animations",
              description: "Fluid transitions between on/off states",
            },
            {
              icon: Code,
              title: "State Management",
              description: "Built-in examples with React hooks",
            },
            {
              icon: Info,
              title: "Customizable",
              description: "Easy to modify colors and sizes",
            },
            {
              icon: Eye,
              title: "Accessible",
              description: "Keyboard and screen reader friendly",
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

export default SwitchShowcase;
