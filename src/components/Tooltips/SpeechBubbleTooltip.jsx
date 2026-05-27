import React, { useState } from "react";

const SpeechBubbleTooltip = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className="px-4 py-2 font-mono font-bold text-white bg-pink-500 border-4 border-black shadow-[4px_4px_0px_0px_black]"
      >
        Tell me more
      </button>
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 whitespace-nowrap" role="tooltip">
          <div className="relative px-4 py-2 bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_black] text-xs font-bold font-mono rounded-2xl">
            POW! What a tooltip!
            <div
              className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-white border-r-4 border-b-4 border-black rotate-45"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeechBubbleTooltip;
