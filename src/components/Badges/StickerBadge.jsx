import React from "react";
import { Star, Heart, Zap } from "lucide-react";

const StickerBadge = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_black] font-mono font-black text-xs uppercase rotate-[-3deg]">
        <Star className="w-3 h-3" /> NEW
      </span>
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_black] font-mono font-black text-xs uppercase rotate-[2deg]">
        <Heart className="w-3 h-3" /> FAV
      </span>
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_black] font-mono font-black text-xs uppercase rotate-[-1deg]">
        <Zap className="w-3 h-3" /> HOT
      </span>
    </div>
  );
};

export default StickerBadge;
