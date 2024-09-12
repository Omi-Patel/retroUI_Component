import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import SignUpPageVariant2 from "../components/Signup/SignupPageVariant2";
import SignUpPageVariant3 from "../components/Signup/SignupPageVariant3";
import SignUpPageVariant1 from "../components/Signup/SignupPageVariant1";

const signupComponents = {
  SignupVariant1: `
import React from "react";

const SignUpPageVariant1 = () => {
  return (
    <div className="flex flex-col bg-[#fdf4e3] rounded-lg p-3 sm:p-6 lg:p-8">
      <div className="w-full max-w-md p-6 sm:p-8 bg-[#f3e1c1] shadow-[4px_4px_0px_0px_black] border-4 border-black rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wider text-[#ff6f61] font-mono">
          Sign Up
        </h1>

        <form className="space-y-6 text-black">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-semibold mb-2 font-mono"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full font-mono px-4 py-2 text-lg bg-gray-100 text-gray-800 border-4 border-black shadow-[3px_3px_0px_0px_black] focus:outline-none focus:shadow-[6px_6px_0px_0px_orange] transition-all duration-150 ease-out"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 font-mono"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full font-mono px-4 py-2 text-lg bg-gray-100 text-gray-800 border-4 border-black shadow-[3px_3px_0px_0px_black] focus:outline-none focus:shadow-[6px_6px_0px_0px_orange] transition-all duration-150 ease-out"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2 font-mono"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full font-mono px-4 py-2 text-lg bg-gray-100 text-gray-800 border-4 border-black shadow-[3px_3px_0px_0px_black] focus:outline-none focus:shadow-[6px_6px_0px_0px_orange] transition-all duration-150 ease-out"
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 text-white bg-[#ff6f61] border-4 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-[#e0554f] transition-all duration-150 font-mono"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 flex gap-2 text-sm font-mono text-black">
          <p>Already have an account?</p>
          <a href="#" className="text-blue-500 font-bold hover:underline">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageVariant1;

  `,
  SignupVariant2: `
import React from "react";

const SignUpPageVariant2 = () => {
  return (
    <div className=" flex flex-col  bg-[#1d1d1d] rounded-lg p-3 sm:p-6 lg:p-8">
      <div className="w-full max-w-md p-6 sm:p-8 bg-[#333333] shadow-[4px_4px_0px_0px_white] border-4 border-white rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wider text-[#9dec80] font-mono">
          Sign Up
        </h1>

        <form className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-semibold mb-2 font-mono text-[#9dec80]"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 bg-[#4d4d4d] border-2 border-white rounded-md shadow-[4px_4px_0px_0px_white] text-lg text-[#ffea00] font-mono"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 font-mono text-[#9dec80]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#4d4d4d] border-2 border-white rounded-md shadow-[4px_4px_0px_0px_white] text-lg text-[#ffea00] font-mono"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2 font-mono text-[#9dec80]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-[#4d4d4d] border-2 border-white rounded-md shadow-[4px_4px_0px_0px_white] text-lg text-[#ffea00] font-mono"
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 text-[#1d1d1d] font-bold bg-[#9dec80] border-4 border-white rounded-md shadow-[4px_4px_0px_0px_white] hover:bg-[#58e823] transition-all duration-150 font-mono hover:shadow-[8px_8px_0px_0px_black] transform hover:-translate-y-1"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 flex gap-2 text-sm font-mono text-[#9dec80]">
          <p>Already have an account?</p>
          <a href="#" className="hover:underline font-bold text-white">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageVariant2;

  `,
  SignupVariant3: `
import React from "react";

const SignUpPageVariant3 = () => {
  return (
    <div className=" flex flex-col  bg-[#f1ebe1] rounded-lg p-3 sm:p-6 lg:p-8">
      <div className="w-full max-w-md p-6 sm:p-8 bg-[#e7d8c2] shadow-[4px_4px_0px_0px_black] border-4 border-black rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wider text-[#333] font-mono">
          Sign Up
        </h1>

        <form className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-semibold mb-2 font-mono text-[#333]"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 bg-[#d4c0a8] border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-lg font-mono focus:bg-[#d9bfa0] transition-all duration-150 ease-in"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 font-mono text-[#333]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#d4c0a8] border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-lg font-mono focus:bg-[#d9bfa0] transition-all duration-150 ease-in"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2 font-mono text-[#333]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-[#d4c0a8] border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] text-lg font-mono focus:bg-[#d9bfa0] transition-all duration-150 ease-in"
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button className="px-6 py-2 bg-black text-yellow-200 border-2 border-black font-bold shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transform hover:-translate-y-1 transition-all">
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 flex gap-2 text-sm font-mono text-[#333]">
          <p>Already have an account?</p>
          <a
            href="#"
            className="text-[#007acc] font-bold hover:underline hover:text-[#005f99] transition-colors duration-150"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageVariant3;

  `,
};
const SignupShowcase = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [activeTabs, setActiveTabs] = useState({
    SignupVariant1: "preview",
    SignupVariant2: "preview",
    SignupVariant3: "preview",
  });

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
        Sign-Up Component Showcase
      </h1>

      {Object.keys(signupComponents).map((componentName) => (
        <div key={componentName} className="mb-8">
          <h2 className="text-2xl sm:text-3xl mb-4">
            {componentName.replace(/([A-Z])/g, " $1").trim()}
          </h2>

          <div className="flex border-b border-gray-700 mb-6">
            <button
              onClick={() =>
                setActiveTabs((prev) => ({
                  ...prev,
                  [componentName]: "preview",
                }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "preview"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() =>
                setActiveTabs((prev) => ({ ...prev, [componentName]: "code" }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "code"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400"
              }`}
            >
              Code
            </button>
          </div>

          <div className=" p-2 sm:p-6 bg-gray-800  border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="mb-4">
                {componentName === "SignupVariant1" && <SignUpPageVariant1 />}
                {componentName === "SignupVariant2" && <SignUpPageVariant2 />}
                {componentName === "SignupVariant3" && <SignUpPageVariant3 />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md border border-gray-600"
                >
                  {signupComponents[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() =>
                    copyToClipboard(signupComponents[componentName])
                  }
                  className="absolute top-4 right-4 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-150"
                >
                  {copySuccess ? "Copied!" : "Copy Code"}
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SignupShowcase;
