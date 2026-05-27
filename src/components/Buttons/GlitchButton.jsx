import React from "react";

const GlitchButton = () => {
  return (
    <button
      className="group relative inline-block px-6 py-3 font-mono font-bold text-lg text-white bg-black border-4 border-black cursor-pointer select-none
      shadow-[5px_5px_0px_0px_#f472b6] hover:shadow-[8px_8px_0px_0px_#22d3ee] transition-all duration-150 ease-out
      hover:-translate-x-0.5 hover:-translate-y-0.5"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-pink-400 mix-blend-screen translate-x-0 group-hover:-translate-x-1 transition-transform duration-150"
      >
        GLITCH
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-cyan-300 mix-blend-screen translate-x-0 group-hover:translate-x-1 transition-transform duration-150"
      >
        GLITCH
      </span>
      <span className="relative z-10">GLITCH</span>
    </button>
  );
};

export default GlitchButton;
