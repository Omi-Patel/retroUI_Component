import React from "react";
import { Zap } from "lucide-react";

const MarqueeAlert = () => {
  const text = "BREAKING · LIMITED TIME OFFER · 50% OFF SITEWIDE · GRAB IT FAST · ";
  return (
    <div className="font-mono w-full max-w-md bg-yellow-300 text-black border-4 border-black shadow-[5px_5px_0px_0px_black] overflow-hidden">
      <div className="flex items-center">
        <div className="bg-black text-yellow-300 px-3 py-2 flex-shrink-0">
          <Zap className="w-4 h-4" />
        </div>
        <div className="flex-1 overflow-hidden py-2">
          <div className="whitespace-nowrap animate-[marqueeAlert_18s_linear_infinite] text-sm font-bold uppercase tracking-wider">
            {text.repeat(4)}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marqueeAlert {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeAlert;
