import React, { useState } from "react";

const PolaroidTooltip = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className="px-4 py-2 font-mono font-bold text-black bg-orange-200 border-4 border-black shadow-[4px_4px_0px_0px_black]"
      >
        Memory lane
      </button>
      {show && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 p-2 pb-4 bg-white border border-gray-300 shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] rotate-[-3deg] w-40"
          role="tooltip"
        >
          <div className="aspect-square w-full bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-200 flex items-center justify-center">
            <span className="text-3xl">✦</span>
          </div>
          <p className="text-center text-xs mt-2 font-mono">good vibes</p>
        </div>
      )}
    </div>
  );
};

export default PolaroidTooltip;
