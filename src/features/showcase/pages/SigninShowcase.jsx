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
  LogIn,
  Zap,
  Shield,
  Palette,
} from "lucide-react";

import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";

// Import SignInPage component
import SignInPage from "@/components/forms/signin/SignInPage";

const signinComponents = {
  Basic: {
    component: SignInPage,
    title: "Basic Sign In",
    description: "Clean and simple sign-in form with retro styling",
    code: `// SignInPage.jsx
import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-100 rounded-lg">
      <div className="w-full max-w-md p-8 bg-white shadow-[8px_8px_0px_0px_black] border-4 border-black rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wider">
          Sign In
        </h1>
        <form>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 border-4 border-black rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border-4 border-black rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 border-4 border-black font-bold text-lg hover:bg-yellow-300 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;`,
  },
};

const SigninShowcase = () => {
  const [activeComponent, setActiveComponent] = useState("Basic");
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    const code = signinComponents[activeComponent].code;
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const activeData = signinComponents[activeComponent];

  const features = [
    {
      icon: Shield,
      title: "Secure Forms",
      description: "Built with security best practices in mind",
    },
    {
      icon: Palette,
      title: "Retro Design",
      description: "Nostalgic aesthetics with modern functionality",
    },
    {
      icon: Sparkles,
      title: "User-Friendly",
      description: "Clear labels and intuitive form controls",
    },
    {
      icon: Zap,
      title: "Quick Integration",
      description: "Easy to integrate with your authentication system",
    },
  ];

  return (
    <DocsContent
      title="Sign In Components"
      description="Retro-styled authentication forms for user sign-in"
      badge="Form Components"
    >
      {/* Installation */}
      <InfoBox type="info" title="Installation">
        <p className="text-sm">
          Copy the sign-in form component and connect it to your authentication
          backend. Customize the styling and add your validation logic.
        </p>
      </InfoBox>

      {/* Variant Selector */}
      <DocsSection title="Available Variants" id="variants">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 mb-8">
          {Object.keys(signinComponents).map((key) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                activeComponent === key
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
            >
              {signinComponents[key].title}
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
            Import the sign-in component and integrate it with your
            authentication system:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mt-4">
            <code className="text-teal-600 dark:text-teal-400">
              import SignInPage from "@/components/forms/signin/SignInPage";
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
      <InfoBox type="success" title="Security Best Practices">
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Always use HTTPS for authentication pages</li>
          <li>Implement proper password validation</li>
          <li>Add CSRF protection to your forms</li>
          <li>Consider adding two-factor authentication</li>
        </ul>
      </InfoBox>
    </DocsContent>
  );
};

export default SigninShowcase;
