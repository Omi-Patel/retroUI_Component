import React from "react";

const PixelBadge = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-block px-3 py-1 bg-lime-400 text-black border-4 border-black font-mono font-black text-xs uppercase shadow-[3px_3px_0px_0px_black]">
        ▣ LVL 99
      </span>
      <span className="inline-block px-3 py-1 bg-fuchsia-400 text-black border-4 border-black font-mono font-black text-xs uppercase shadow-[3px_3px_0px_0px_black]">
        ◆ RARE
      </span>
      <span className="inline-block px-3 py-1 bg-cyan-400 text-black border-4 border-black font-mono font-black text-xs uppercase shadow-[3px_3px_0px_0px_black]">
        ★ COMBO ×4
      </span>
    </div>
  );
};

export default PixelBadge;
