import React from "react";

const TerminalBadge = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 font-mono">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-green-400 border border-green-400 text-[11px]">
        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
        ONLINE
      </span>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-amber-400 border border-amber-400 text-[11px]">
        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
        IDLE 02:14
      </span>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-red-400 border border-red-400 text-[11px]">
        <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
        OFFLINE
      </span>
    </div>
  );
};

export default TerminalBadge;
