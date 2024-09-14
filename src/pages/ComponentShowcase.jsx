import React, { useEffect, useState } from "react";
import RetroButton from "../components/Buttons/RetroButton";
import RoundButton from "../components/Buttons/RoundButton";
import RetroButton2 from "../components/Buttons/RetroButton2";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ThreeDButton from "../components/Buttons/ThreeDButton";
import PixelButton from "../components/Buttons/PixelButton";

const buttonComponents = {
  RetroButton: `
import React from "react";

const RetroButton = () => {
  return (
    <>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-black bg-neon border-4 border-black cursor-pointer select-none
      shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transition-all duration-150 ease-out retro-btn"
      >
        Click Me
      </button>
    </>
  );
};

export default RetroButton;

  `,
  RetroButton2: `
import React from "react";

const RetroButton2 = () => {
  return (
    <>
      <button
        className="relative inline-block px-6 py-3 font-mono text-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-4 border-black cursor-pointer select-none
      shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-all duration-150 ease-out retro-btn
      before:absolute before:inset-0 before:bg-black before:-z-10 hover:before:bg-opacity-50
      hover:scale-105 transform hover:brightness-110"
      >
        <span className="relative z-20 neon-text">Click Me</span>
      </button>
    </>
  );
};

export default RetroButton2;

  `,
  RoundButton: `
import React from "react";

const RoundButton = () => {
  return (
    <>
      <button
        className="relative inline-block px-6 py-3 font-mono text-lg text-white bg-gradient-to-r from-blue-400 to-purple-600 border-2 border-gray-800 cursor-pointer select-none
    rounded-full shadow-lg transition-transform transform hover:scale-105
    before:absolute before:inset-0 before:border-2 before:border-gray-700 before:rounded-full before:content-[''] before:z-10 before:opacity-50 before:-translate-x-1 before:-translate-y-1
    after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-700 after:rounded-full after:opacity-30 after:content-[''] after:z-0"
      >
        <span className="relative z-20 font-bold">Click Me</span>
      </button>
    </>
  );
};

export default RoundButton;

  `,
  ThreeDButton: `
import React from "react";

const ThreeDButton = () => {
  return (
    <div>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-black bg-yellow-100 border-4 border-black cursor-pointer select-none
  shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-all duration-150 ease-out 
  active:shadow-[3px_3px_0px_0px_black] active:translate-x-1 active:translate-y-1"
      >
        3D Effect
      </button>
    </div>
  );
};

export default ThreeDButton;

  `,
  PixelButton: `
import React from "react";

const PixelButton = () => {
  return (
    <div>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-white bg-green-500 border-4 border-black cursor-pointer select-none
  shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-all duration-200 ease-out
  before:content-[''] before:block before:absolute before:w-full before:h-full before:border-4 before:border-black before:left-1 before:top-1 before:transition-all before:duration-200 before:ease-out
  hover:before:left-0 hover:before:top-0 active:shadow-[3px_3px_0px_0px_black] active:before:left-2 active:before:top-2"
      >
        Pixel Art
      </button>
    </div>
  );
};

export default PixelButton;
  
  `,
};

const ButtonPage = () => {
  const [activeTabs, setActiveTabs] = useState({
    RetroButton: "preview",
    RetroButton2: "preview",
    RoundButton: "preview",
    ThreeDButton: "preview",
    PixelButton: "preview",
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
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Button Components</h1>

      {/* Button Variants Display */}
      {Object.keys(buttonComponents).map((componentName) => (
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
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="mb-4">
                {componentName === "RetroButton" && <RetroButton />}
                {componentName === "RetroButton2" && <RetroButton2 />}
                {componentName === "RoundButton" && <RoundButton />}
                {componentName === "ThreeDButton" && <ThreeDButton />}
                {componentName === "PixelButton" && <PixelButton />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md border border-gray-600"
                >
                  {buttonComponents[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() =>
                    copyToClipboard(buttonComponents[componentName])
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

export default ButtonPage;
