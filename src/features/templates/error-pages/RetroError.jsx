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
        className={`max-w-2xl w-full bg-orange-200 rounded-lg shadow-lg p-8 transform transition-all duration-500 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1
          className={`text-6xl md:text-8xl font-bold text-orange-800 mb-4 ${
            glitchEffect ? "animate-glitch" : ""
          }`}
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
      <style jsx="true">{`
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
      `}</style>
    </div>
  );
};

export default RetroError;