import React, { useEffect, useState } from "react";
import SignInPage from "../components/SignIn/SignInPage"; // The SignIn Component
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const signInCode = `
import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-100 rounded-lg p-3 sm:p-6 lg:p-8">
      {/* Sign-in Box */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-6 sm:p-8 bg-white shadow-[8px_8px_0px_0px_black] border-4 border-black rounded-lg">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 tracking-wider">
          Sign In
        </h1>

        {/* Sign-in Form */}
        <form className="space-y-4 sm:space-y-6 font-mono">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-md sm:text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 sm:p-3 bg-gray-100 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-md sm:text-lg"
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-md sm:text-lg font-semibold mb-2"
              >
                Password
              </label>
              <a href="#" className="text-blue-500 hover:underline text-sm sm:text-base">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 sm:p-3 bg-gray-100 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-md sm:text-lg"
            />
          </div>

          {/* Sign-In Button */}
          <div>
            <button
              type="submit"
              className="w-full p-2 sm:p-3 text-white bg-blue-500 border-4 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-blue-600 transition-all duration-150"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-4 sm:mt-6 flex justify-center gap-2 text-sm sm:text-base">
          <p>Don't have an account?</p>
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

`;

const SigninShowcase = () => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100  sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Sign-In Component Showcase
      </h1>

      {/* Tabs for Preview and Code */}
      <div className="flex border-b border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab("preview")}
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "preview"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-gray-400"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "code"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-gray-400"
          }`}
        >
          Code
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-2 sm:p-6 bg-gray-800  border border-gray-700 shadow-lg">
        {activeTab === "preview" && (
          <div className="mb-4">
            <SignInPage />
          </div>
        )}
        {activeTab === "code" && (
          <div className="relative overflow-x-auto">
            <SyntaxHighlighter
              language="jsx"
              style={atomDark}
              className="rounded-md border border-gray-600"
            >
              {signInCode}
            </SyntaxHighlighter>
            <button
              onClick={() => copyToClipboard(signInCode)}
              className="absolute top-4 right-4 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-150"
            >
              {copySuccess ? "Copied!" : "Copy Code"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SigninShowcase;
