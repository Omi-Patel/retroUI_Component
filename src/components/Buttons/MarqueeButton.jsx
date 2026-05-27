import React from "react";

const MarqueeButton = () => {
  return (
    <button
      className="group relative inline-block overflow-hidden px-6 py-3 font-mono font-bold text-lg text-black bg-yellow-300 border-4 border-black cursor-pointer select-none w-48
      shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-out"
    >
      <span className="block whitespace-nowrap group-hover:animate-[marquee_4s_linear_infinite]">
        ★ NEW DROP ★ NEW DROP ★ NEW DROP ★
      </span>
    </button>
  );
};

export default MarqueeButton;
