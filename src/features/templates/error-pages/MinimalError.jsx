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
      <style jsx="true">{`
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
      `}</style>
    </div>
  );
}
