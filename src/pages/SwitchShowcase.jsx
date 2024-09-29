import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import BasicSwitch from "../components/Switch/BasicSwitch";
import BorderedSwitch from "../components/Switch/BorderedSwitch";
import GlowSwitch from "../components/Switch/GlowSwitch";

const toggleComponents = {
  BasicSwitch: `
import React, { useState } from "react";

const BasicSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={\`relative w-16 h-8 flex items-center rounded-full cursor-pointer transition-all duration-300 bg-[#D5C4A1] \${
        isOn ? "bg-[#D08C60]" : "bg-[#f2c364]"
      }\`}
    >
      <div
        className={\`w-7 h-7 bg-[#3B3228] rounded-full shadow-[2px_2px_4px_#3B3228] transform transition-transform duration-300 \${
          isOn ? "translate-x-8" : "translate-x-1"
        }\`}
      />
    </div>
  );
};

export default BasicSwitch;

);
  `,
  BorderedSwitch: `
import React, { useState } from "react";

const BorderedSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={\`relative w-16 h-8 flex items-center cursor-pointer rounded-full 
      transition-all duration-300 
      \${
        isOn
          ? "bg-opacity-50 border-[#f1887e]"
          : "bg-opacity-30 border-[#f4eb9b]"
      }
      border-2 shadow-lg backdrop-filter backdrop-blur-lg\`}
      style={{
        background: isOn
          ? "rgba(255, 111, 97, 0.5)"
          : "rgba(240, 230, 140, 0.5)",
      }}
    >
      <div
        className={\`w-6 h-6 bg-[#4A4A4A] rounded-full shadow-lg transition-transform duration-300 
        \${isOn ? "translate-x-8" : "translate-x-1"} 
        border-2 border-white\`}
      />
    </div>
  );
};

export default BorderedSwitch;

);
  `,
  GlowSwitch: `
import React, { useState } from "react";

const GlowSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={\`relative w-14 h-8 flex items-center rounded-full cursor-pointer transition-all duration-300 \${
        isOn ? "bg-[#2846ee] shadow-[0_0_10px_4px_#1d37cb]" : "bg-[#B4CFB0]"
      }\`}
    >
      <div
        className={\`w-6 h-6 bg-[#333] rounded-full transform transition-transform duration-300 \${
          isOn ? "translate-x-7" : "translate-x-1"
        }\`}
      />
    </div>
  );
};

export default GlowSwitch;

);
  `,
};

const SwitchShowcase = () => {
  const [activeTabs, setActiveTabs] = useState({
    BasicSwitch: "preview",
    BorderedSwitch: "preview",
    GlowSwitch: "preview",
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-2 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Switch Components</h1>

      {Object.keys(toggleComponents).map((componentName) => (
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
                setActiveTabs((prev) => ({
                  ...prev,
                  [componentName]: "code",
                }))
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

          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="mb-4">
                {componentName === "BasicSwitch" && <BasicSwitch />}
                {componentName === "BorderedSwitch" && <BorderedSwitch />}
                {componentName === "GlowSwitch" && <GlowSwitch />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md border border-gray-600"
                >
                  {toggleComponents[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() =>
                    copyToClipboard(toggleComponents[componentName])
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

export default SwitchShowcase;
