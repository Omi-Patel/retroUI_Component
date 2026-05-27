import React from "react";

const TerminalAlert = () => {
  return (
    <div className="font-mono w-full max-w-md bg-black text-green-400 border-2 border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.3)] p-4">
      <div className="flex items-center gap-2 border-b border-green-400/30 pb-2 mb-2">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <p className="text-[10px] uppercase tracking-wider opacity-70">
          alert.log · 02:14:33
        </p>
      </div>
      <p className="text-sm">
        <span className="text-green-300">[INFO]</span> deployment finished
      </p>
      <p className="text-xs opacity-60 mt-0.5">
        {">"} 12 files updated · 0 errors · 1.4s
      </p>
    </div>
  );
};

export default TerminalAlert;
