import React, { useState } from "react";

const TerminalTooltip = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className="px-4 py-2 font-mono font-bold text-green-400 bg-black border-2 border-green-400 hover:bg-green-400 hover:text-black transition-colors"
      >
        $ help
      </button>
      {show && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black text-green-400 border border-green-400 whitespace-nowrap text-[11px] font-mono shadow-[0_0_15px_rgba(74,222,128,0.4)]"
          role="tooltip"
        >
          {">"} runs the help command<span className="animate-pulse">_</span>
        </div>
      )}
    </div>
  );
};

export default TerminalTooltip;
