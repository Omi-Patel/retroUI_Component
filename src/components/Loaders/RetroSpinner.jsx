import React from "react";

// Cassette tape with spinning reels
const RetroSpinner = () => {
  return (
    <div className="relative w-32 h-20 bg-pink-300 border-4 border-black shadow-[4px_4px_0px_0px_black] font-mono">
      <div className="absolute top-1 left-1 right-1 h-2 bg-black/80" />
      <div className="absolute inset-2 top-4 flex items-center justify-around bg-stone-900">
        <div className="w-7 h-7 rounded-full bg-stone-700 border-2 border-black flex items-center justify-center">
          <div className="w-4 h-4 rounded-full border-2 border-pink-300 border-t-transparent animate-spin" />
        </div>
        <div className="text-[8px] text-pink-300 tracking-widest">► REC</div>
        <div className="w-7 h-7 rounded-full bg-stone-700 border-2 border-black flex items-center justify-center">
          <div
            className="w-4 h-4 rounded-full border-2 border-pink-300 border-t-transparent animate-spin"
            style={{ animationDirection: "reverse" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RetroSpinner;
