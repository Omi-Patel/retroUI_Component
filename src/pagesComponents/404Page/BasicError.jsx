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
        className={`max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-8 border-4 border-yellow-500 transform transition-all duration-1000 ${
          isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="text-center">
          <h1
            className={`text-7xl md:text-9xl font-bold text-yellow-500 mb-4 font-mono ${
              tvEffect ? "animate-tv-effect" : ""
            }`}
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
      <style jsx="true">{`
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
      `}</style>
    </div>
  );
};

export default BasicError;
