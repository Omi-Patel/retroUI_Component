import React, { useState } from "react";

const StickyNoteTooltip = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className="px-4 py-2 font-mono font-bold text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_black]"
      >
        Hover me
      </button>
      {show && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_black] rotate-[-2deg] whitespace-nowrap text-xs font-bold font-mono"
          role="tooltip"
        >
          A friendly note for you.
        </div>
      )}
    </div>
  );
};

export default StickyNoteTooltip;
