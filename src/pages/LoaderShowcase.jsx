import React, { useEffect, useState } from "react";
import RetroLoader from "../components/Loaders/RetroLoader";
import ModernLoader from "../components/Loaders/ModernLoader";
import SpinnerLoader from "../components/Loaders/SpinnerLoader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import RetroSpinner from "../components/Loaders/RetroSpinner";
import ThreeSpinner from "../components/Loaders/ThreeSpinner";
import ShadowSpinner from "../components/Loaders/ShadowSpinner";
import SequenceLoader from "../components/Loaders/SequenceLoader";
import BarsLoader from "../components/Loaders/BarsLoader";

const loaderComponents = {
  RetroLoader: `
import React from "react";

const RetroLoader = () => {
  return (
    <div className=" flex flex-col gap-20">
      {/* First Row */}
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-yellow-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
        <div className="w-8 h-8 bg-pink-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
        <div className="w-8 h-8 bg-blue-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
      </div>

      {/* Second Row */}
      <div className="flex space-x-2">
        <div
          className="w-8 h-8 bg-[#eab308] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite]"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#10b981] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite] delay-300"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#3b82f6] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite] delay-500"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      {/* Third Row */}
      <div className="flex space-x-2">
        <div
          className="w-8 h-8 bg-[#fcd34d] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite]"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#60a5fa] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite] delay-100"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#f472b6] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite] delay-200"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export default RetroLoader;

  `,
  RetroSpinner: `
import React from "react";

const RetroSpinner = () => {
  return (
    <div className="flex ">
      <div className="w-8 h-8 rounded-full border-4 border-black border-t-transparent border-b-[#60a5fa] shadow-[2px_2px_0px_0px_black] animate-[spin_0.8s_linear_infinite]"></div>
    </div>
  );
};

export default RetroSpinner;

  `,
  ThreeSpinner: `
import React from "react";

const ThreeSpinner = () => {
  return (
    <div className="flex space-x-6">
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#fbbf24] delay-0 rounded-full animate-spin shadow-[1px_1px_14px_0px_#fbbf24]"></div>
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#ec4899] delay-300 rounded-full animate-spin shadow-[1px_1px_14px_0px_#ec4899]"></div>
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#3b82f6] delay-600 rounded-full animate-spin shadow-[1px_1px_14px_0px_#3b82f6]"></div>
    </div>
  );
};

export default ThreeSpinner;

  `,
  ShadowSpinner: `
import React from "react";

const ShadowSpinner = () => {
  return (
    <div className="flex space-x-4 items-center">
      <div className="w-8 h-8 rounded-full border-4 border-black relative bg-yellow-100 shadow-[2px_2px_14px_0px_yellow] animate-[spin_0.6s_linear_infinite]">
        <div className="w-2 h-2 bg-[#ffdb25] absolute right-1 top-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default ShadowSpinner;

  `,
  SequenceLoader: `
import React from "react";

const SequenceLoader = () => {
  return (
    <div className="flex space-x-2">
      <div
        className="w-8 h-8 bg-[#fcd34d] border-4 border-black animate-bounce  shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-8 h-8 bg-[#f472b6] border-4 border-black animate-bounce  shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="w-8 h-8 bg-[#60a5fa] border-4 border-black animate-bounce  shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  );
};

export default SequenceLoader;
  
  `,
  BarsLoader: `
import React from "react";

const BarsLoader = () => {
  return (
    <>
      <div className="flex space-x-2">
        <div
          className="w-2 h-8 bg-[#fbbf24] border-2 border-black shadow-[4px_4px_16px_0px_yellow] animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-8 bg-[#ec4899] border-2 border-black shadow-[4px_4px_16px_0px_pink] animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-8 bg-[#3b82f6] border-2 border-black shadow-[4px_4px_16px_0px_blue] animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </>
  );
};

export default BarsLoader;

  `,
  ModernLoader: `
import React from "react";

const ModernLoader = () => {
  return (
    <div className="relative w-16 h-16 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
  );
};

export default ModernLoader;
  `,
  SpinnerLoader: `
import React from "react";

const SpinnerLoader = () => {
  return (
    <div className="relative w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
  );
};

export default SpinnerLoader;
  `,
};

const LoaderPage = () => {
  const [activeTabs, setActiveTabs] = useState({
    RetroLoader: "preview",
    RetroSpinner: "preview",
    ThreeSpinner: "preview",
    ShadowSpinner: "preview",
    SequenceLoader: "preview",
    BarsLoader: "preview",
    ModernLoader: "preview",
    SpinnerLoader: "preview",
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
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Loader Components</h1>

      {/* Loader Variants Display */}
      {Object.keys(loaderComponents).map((componentName) => (
        <div key={componentName} className="mb-8">
          <h2 className="text-2xl sm:text-3xl mb-4">
            {componentName.replace(/([A-Z])/g, " $1").trim()}
          </h2>

          {/* Tabs for Preview and Code */}
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

          {/* Tab Content for Each Variant */}
          <div className="p-6  bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="mb-4">
                {componentName === "RetroLoader" && <RetroLoader />}
                {componentName === "RetroSpinner" && <RetroSpinner />}
                {componentName === "ThreeSpinner" && <ThreeSpinner />}
                {componentName === "ShadowSpinner" && <ShadowSpinner />}
                {componentName === "SequenceLoader" && <SequenceLoader />}
                {componentName === "BarsLoader" && <BarsLoader />}
                {componentName === "ModernLoader" && <ModernLoader />}
                {componentName === "SpinnerLoader" && <SpinnerLoader />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md border border-gray-600"
                >
                  {loaderComponents[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() =>
                    copyToClipboard(loaderComponents[componentName])
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

export default LoaderPage;
