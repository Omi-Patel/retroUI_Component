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
  UserPlus,
  Zap,
  Shield,
  Palette,
  LayoutGrid,
} from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import signup components
import SignupBasic from "@/components/forms/signup/SignupBasic";
import SignupSocial from "@/components/forms/signup/SignupSocial";
import SignupMultiStep from "@/components/forms/signup/SignupMultiStep";
import SignupSplit from "@/components/forms/signup/SignupSplit";
import SignupMinimal from "@/components/forms/signup/SignupMinimal";

const signupComponents = {
  Basic: {
    component: SignupBasic,
    title: "Basic Signup",
    description: "Simple and clean sign-up form with essential fields",
    code: `// SignupBasic.jsx
import React from "react";

const SignupBasic = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 mb-4 border-4 border-black rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 mb-4 border-4 border-black rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 mb-6 border-4 border-black rounded-lg"
          />
          <button className="w-full py-3 bg-purple-500 text-white font-bold border-4 border-black rounded-lg hover:bg-purple-600 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupBasic;`,
  },
  Social: {
    component: SignupSocial,
    title: "Social Signup",
    description: "Sign-up form with social login options",
    code: `// SignupSocial.jsx
import React from "react";

const SignupSocial = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      {/* Social buttons and form */}
    </div>
  );
};

export default SignupSocial;`,
  },
  MultiStep: {
    component: SignupMultiStep,
    title: "Multi-Step Signup",
    description: "Progressive signup form with multiple steps",
    code: `// SignupMultiStep.jsx
import React, { useState } from "react";

const SignupMultiStep = () => {
  const [step, setStep] = useState(1);
  
  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Step indicator and form */}
    </div>
  );
};

export default SignupMultiStep;`,
  },
  Split: {
    component: SignupSplit,
    title: "Split Screen Signup",
    description: "Modern split-screen design with imagery",
    code: `// SignupSplit.jsx
import React from "react";

const SignupSplit = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gradient-to-br from-blue-500 to-purple-600">
        {/* Image or branding side */}
      </div>
      <div className="flex-1 flex items-center justify-center">
        {/* Form side */}
      </div>
    </div>
  );
};

export default SignupSplit;`,
  },
  Minimal: {
    component: SignupMinimal,
    title: "Minimal Signup",
    description: "Clean minimal design focusing on essentials",
    code: `// SignupMinimal.jsx
import React from "react";

const SignupMinimal = () => {
  return (
    <div className="max-w-sm mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Get Started</h2>
      {/* Minimal form */}
    </div>
  );
};

export default SignupMinimal;`,
  },
};

const SignupShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("Basic");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    const code = signupComponents[activeComponent].code;
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const activeData = signupComponents[activeComponent];

  const features = [
    {
      icon: UserPlus,
      title: "Easy Registration",
      description: "Streamlined signup flows for better conversion rates",
    },
    {
      icon: Shield,
      title: "Secure Forms",
      description: "Built with validation and security in mind",
    },
    {
      icon: LayoutGrid,
      title: "Multiple Layouts",
      description: "Choose from various designs to match your brand",
    },
    {
      icon: Palette,
      title: "Retro Styling",
      description: "Unique nostalgic designs that stand out",
    },
  ];

  return (
    <DocsContent
      title="Sign Up Components"
      description="Retro-styled registration forms to onboard new users"
      badge="Form Components"
    >
      {/* Installation */}
      <InfoBox type="info" title="Installation">
        <p className="text-sm">
          Copy the sign-up component and integrate it with your user
          registration backend. Add validation and customize fields as needed.
        </p>
      </InfoBox>

      {/* Variant Selector */}
      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.keys(signupComponents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeComponent === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {signupComponents[key].title}
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
                <activeData.component />
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
            Import the sign-up component and integrate it with your user
            registration backend:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mt-4">
            <code className="text-teal-600 dark:text-teal-400">
              import {activeData.title.replace(/\s+/g, "")} from
              "@/components/forms/signup/{activeData.title.replace(/\s+/g, "")}
              ";
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
      <InfoBox type="success" title="Registration Best Practices">
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Ask only for essential information during signup</li>
          <li>Implement strong password requirements</li>
          <li>Add email verification for security</li>
          <li>Provide clear error messages and validation feedback</li>
        </ul>
      </InfoBox>
    </DocsContent>
  );
};

export default SignupShowcase;
