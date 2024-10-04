import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import BasicError from "../404Page/BasicError";
import RetroError from "../404Page/RetroError";
import TerminalError from "../404Page/TerminalError";
import MinimalError from "../404Page/MinimalError";

const componentCode = {
  BasicError: `
import React, { useState, useEffect } from "react";
import { Home } from "lucide-react";

const BasicError = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [tvEffect, setTvEffect] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const effectInterval = setInterval(() => {
      setTvEffect(true);
      setTimeout(() => setTvEffect(false), 100);
    }, 5000);

    return () => clearInterval(effectInterval);
  }, []);

  return (
    <div className=" bg-gray-900 flex items-center justify-center p-2 sm:p-4">
      <div
        className={\`max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-8 border-4 border-yellow-500 transform transition-all duration-1000 \${
          isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }\`}
      >
        <div className="text-center">
          <h1
            className={\`text-7xl md:text-9xl font-bold text-yellow-500 mb-4 font-mono \${
              tvEffect ? "animate-tv-effect" : ""
            }\`}
          >
            404
          </h1>
          <div className="w-full h-2 bg-yellow-500 mb-8"></div>
          <p className="text-2xl md:text-3xl text-yellow-300 mb-6 font-serif">
            TECHNICAL DIFFICULTIES
          </p>
          <p className="text-lg text-yellow-100 mb-8 font-mono">
            We apologize, but the page you're looking for is currently off the
            air. Please stand by.
          </p>
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 border-4 border-yellow-500 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-gray-900 bg-yellow-500 rounded-md hover:bg-yellow-400 transition-colors duration-300"
          >
            <Home className="mr-2" />
            Return to Broadcast
          </a>
        </div>
      </div>
      <style jsx>{\`
        @keyframes tv-effect {
          0% {
            transform: translate(0);
          }
          25% {
            transform: translate(-2px, 2px);
          }
          50% {
            transform: translate(2px, -2px);
          }
          75% {
            transform: translate(-2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
        .animate-tv-effect {
          animation: tv-effect 0.1s linear infinite;
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      \`}</style>
    </div>
  );
};

export default BasicError;

  `,
  RetroError: `
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const RetroError = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className=" bg-amber-100 flex items-center justify-center p-2 sm:p-4">
      <div
        className={\`max-w-2xl w-full bg-orange-200 rounded-lg shadow-lg p-8 transform transition-all duration-500 \${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }\`}
      >
        <h1
          className={\`text-6xl md:text-8xl font-bold text-orange-800 mb-4 \${
            glitchEffect ? "animate-glitch" : ""
          }\`}
        >
          404
        </h1>
        <p className="text-2xl md:text-3xl text-orange-700 mb-8 font-serif">
          Oops! This page is lost in time.
        </p>
        <p className="text-lg text-orange-600 mb-8 font-mono">
          It seems you've stumbled upon a page that doesn't exist in this era.
          Let's get you back to the present!
        </p>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2" />
          Go Back Home
        </a>
      </div>
      <style jsx>{\`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }
        .animate-glitch {
          animation: glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
            infinite;
        }
      \`}</style>
    </div>
  );
};

export default RetroError;

  `,
  TerminalError: `
import React, { useState, useEffect } from "react";

export default function TerminalError() {
  const [text, setText] = useState("");
  const fullText =
    ">ERROR 404: FILE NOT FOUND\n>SYSTEM MALFUNCTION\n>INITIATING RECOVERY SEQUENCE...\n>PLEASE STAND BY...";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="min-h-96 bg-black flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-3xl bg-black border-2 border-green-500 rounded-lg p-4 sm:p-8">
        <div className="bg-green-950 p-2 sm:p-4 rounded">
          <pre className="font-mono text-green-400 whitespace-pre-wrap break-words text-xs sm:text-sm md:text-base">
            {text}
          </pre>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block px-4 py-2 bg-green-500 text-black font-mono text-sm sm:text-base rounded hover:bg-green-400 transition-colors duration-300"
          >
            RETURN TO MAIN SYSTEM
          </a>
        </div>
      </div>
      <style jsx>{\`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        pre::after {
          content: "█";
          animation: blink 1s step-end infinite;
        }
      \`}</style>
    </div>
  );
}

  `,
  MinimalError: `
import React from "react";
import { ArrowLeft } from "lucide-react";

export default function MinimalError() {
  return (
    <div className=" bg-yellow-50 flex flex-col items-center justify-center p-2 sm:p-4 font-mono">
      <div className="max-w-md w-full text-center">
        <h1 className="text-8xl font-bold text-yellow-800 mb-8 animate-pulse">
          404
        </h1>
        <p className="text-2xl text-yellow-700 mb-8">Page not found</p>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
        <p className="text-lg text-yellow-600 mb-12">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-yellow-800 bg-yellow-200 rounded-md hover:bg-yellow-300 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go back home
        </a>
      </div>
      <footer className="mt-16 text-yellow-600 text-sm">
        © {new Date().getFullYear()} Your Company Name
      </footer>
      <style jsx>{\`
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-typewriter {
          overflow: hidden;
          border-right: 2px solid #92400e;
          white-space: nowrap;
          animation: typewriter 3s steps(40) 1s 1 normal both,
            blinkCursor 0.7s steps(40) infinite normal;
        }
        @keyframes blinkCursor {
          from {
            border-right-color: #92400e;
          }
          to {
            border-right-color: transparent;
          }
        }
      \`}</style>
    </div>
  );
}

  `,
};

const ErrorPageShowcase = () => {
  const [activeTabs, setActiveTabs] = useState({
    BasicError: "preview",
    RetroError: "preview",
    TerminalError: "preview",
    MinimalError: "preview",
  });
  const [copySuccess, setCopySuccess] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const installationCopyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setInstallSuccess(true);
    setTimeout(() => setInstallSuccess(false), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-2 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Error Page Components
      </h1>

      {/* Installation Guide  */}
      <h1 className="text-2xl my-2 font-medium tracking-wide">
        # Installation
      </h1>
      <div className="flex justify-between p-2 mb-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
        <SyntaxHighlighter
          language="jsx"
          style={atomDark}
          className="rounded-md w-full"
        >
          npm lucide-react
        </SyntaxHighlighter>
        <button
          onClick={() =>
            installationCopyToClipboard("npm install lucide-react")
          }
          className="text-white p-1 sm:p-4"
        >
          {installSuccess ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-green-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          )}
        </button>
      </div>

      {Object.keys(componentCode).map((componentName) => (
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

          <div className="p-2 sm:p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
            {activeTabs[componentName] === "preview" && (
              <div className="">
                {componentName === "BasicError" && <BasicError />}
                {componentName === "RetroError" && <RetroError />}
                {componentName === "TerminalError" && <TerminalError />}
                {componentName === "MinimalError" && <MinimalError />}
              </div>
            )}
            {activeTabs[componentName] === "code" && (
              <div className="relative overflow-x-auto h-[600px]">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomDark}
                  className="rounded-md"
                >
                  {componentCode[componentName]}
                </SyntaxHighlighter>
                <button
                  onClick={() => copyToClipboard(componentCode[componentName])}
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

export default ErrorPageShowcase;
