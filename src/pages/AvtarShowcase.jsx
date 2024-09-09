import React, { useState } from "react";
import {
  BasicAvatar,
  BorderAvatar,
  ShadowAvatar,
  BadgeAvatar,
  FrameAvatar,
} from "../components/Avtars/Avtar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const avatarComponents = {
  BasicAvatar: `
const BasicAvatar = () => (
  <div className="w-20 h-20 rounded-full bg-[#E0E4CC]  overflow-hidden">
    <img
      src="https://via.placeholder.com/150"
      alt="avatar"
      className="w-full h-full"
    />
  </div>
);
  `,
  BorderAvatar: `
const BorderAvatar = () => (
  <div className="w-20 h-20 rounded-full border-4 border-yellow-500 bg-gray-300 overflow-hidden">
    <img
      src="https://via.placeholder.com/150"
      alt="avatar"
      className="w-full h-full"
    />
  </div>
);
  `,
  ShadowAvatar: `
const ShadowAvatar = () => (
  <div className="w-20 h-20 rounded-full bg-gray-300 shadow-[4px_4px_0px_0px_black] overflow-hidden">
    <img
      src="https://via.placeholder.com/150"
      alt="avatar"
      className="w-full h-full"
    />
  </div>
);
  `,
  BadgeAvatar: `
const BadgeAvatar = () => (
  <div className="relative w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
    <img
      src="https://via.placeholder.com/150"
      alt="avatar"
      className="w-full h-full"
    />
    <span className="absolute top-1 right-1 w-4 h-4 bg-green-500  rounded-full border-2 border-black"></span>
  </div>
);
  `,
  FrameAvatar: `
const FrameAvatar = () => (
  <div className="w-20 h-20 p-1 rounded-full border-4 border-black bg-gray-300 overflow-hidden">
    <div className="w-full h-full border-4 border-dotted border-gray-800 rounded-full overflow-hidden">
      <img
        src="https://via.placeholder.com/150"
        alt="avatar"
        className="w-full h-full"
      />
    </div>
  </div>
);
  `,
};

const AvatarShowcase = () => {
  const [activeTabs, setActiveTabs] = useState({
    BasicAvatar: "preview",
    BorderAvatar: "preview",
    ShadowAvatar: "preview",
    BadgeAvatar: "preview",
    FrameAvatar: "preview",
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-2 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Avatar Components</h1>

      {Object.keys(avatarComponents).map((componentName) => (
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

          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="mb-4">
                {componentName === "BasicAvatar" && <BasicAvatar />}
                {componentName === "BorderAvatar" && <BorderAvatar />}
                {componentName === "ShadowAvatar" && <ShadowAvatar />}
                {componentName === "BadgeAvatar" && <BadgeAvatar />}
                {componentName === "FrameAvatar" && <FrameAvatar />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md border border-gray-600"
                >
                  {avatarComponents[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() =>
                    copyToClipboard(avatarComponents[componentName])
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

export default AvatarShowcase;
