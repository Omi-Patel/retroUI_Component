import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import BasicInput from "../components/Inputs/BasicInput";
import OutlineInput from "../components/Inputs/OutlineInput";
import NeonInput from "../components/Inputs/NeonInput";
import FocusedInput from "../components/Inputs/FocusedInput";
import RoundedInput from "../components/Inputs/RoundedInput";

const inputComponents = {
  BasicInput: `
import React from "react";

const RetroInput = () => {
  return (
    <>
      {/* Basic Retro Input */}
      <div className="mb-6 w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Basic Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-gray-200 text-gray-800 border-4 border-black shadow-[6px_6px_0px_0px_black] hover:shadow-[10px_10px_0px_0px_black] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150 ease-out"
        />
      </div>
    </>
  );
};

export default RetroInput;

  `,
  OutlineInput: `
import React from "react";

const OutlineInput = () => {
  return (
    <>
      {/* Outlined Retro Input */}
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
    </>
  );
};

export default OutlineInput;

  `,
  NeonInput: `
import React from "react";

const NeonInput = () => {
  return (
    <>
      {/* Neon Glow Retro Input */}
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
    </>
  );
};

export default NeonInput;

  `,
  RoundedInput: `
import React from "react";

const RoundedInput = () => {
  return (
    <>
      {/* Rounded Retro Input */}
      <div className="w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Rounded Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-blue-100 border-4 border-black rounded-full 
          shadow-[4px_4px_0px_0px_black] hover:bg-blue-200 hover:shadow-[8px_8px_0px_0px_black] 
          transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );
};

export default RoundedInput;

  `,
  FocusedInput: `
import React from "react";

const FocusedInput = () => {
  return (
    <>
      {/* Focused Retro Input */}
      <div className="mb-6 w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Focused Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-gray-100 text-gray-800 border-4 border-black shadow-[6px_6px_0px_0px_black] focus:outline-none focus:shadow-[10px_10px_0px_0px_blue] transition-all duration-150 ease-out"
        />
      </div>
    </>
  );
};

export default FocusedInput;

  `,
};

const InputShowcase = () => {
  const [activeTabs, setActiveTabs] = useState({
    BasicInput: "preview",
    OutlineInput: "preview",
    NeonInput: "preview",
    RoundedInput: "preview",
    FocusedInput: "preview",
  });
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
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-2 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Input Components</h1>

      {Object.keys(inputComponents).map((componentName) => (
        <div key={componentName} className="mb-12">
          <h2 className="text-2xl sm:text-3xl mb-4">
            {componentName.replace(/([A-Z])/g, " $1").trim()}
          </h2>

          {/* Tabs for Preview and Code */}
          <div className="flex border-b border-gray-300 mb-4">
            <button
              onClick={() =>
                setActiveTabs((prev) => ({
                  ...prev,
                  [componentName]: "preview",
                }))
              }
              className={`py-2 px-4 text-lg font-semibold ${
                activeTabs[componentName] === "preview"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
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
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Code
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 bg-slate-50 rounded-lg border border-gray-300 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="mb-4">
                {componentName === "BasicInput" && <BasicInput />}
                {componentName === "OutlineInput" && <OutlineInput />}
                {componentName === "NeonInput" && <NeonInput />}
                {componentName === "RoundedInput" && <RoundedInput />}
                {componentName === "FocusedInput" && <FocusedInput />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md"
                >
                  {inputComponents[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() =>
                    copyToClipboard(inputComponents[componentName])
                  }
                  className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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

export default InputShowcase;
