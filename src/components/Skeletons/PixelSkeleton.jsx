import React from "react";

const Block = ({ className = "" }) => (
  <div
    className={`bg-lime-400/30 animate-pulse ${className}`}
    style={{ animationDuration: "1.4s" }}
  />
);

const PixelSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-stone-900 border-4 border-black shadow-[5px_5px_0px_0px_black] p-4 font-mono">
      <div className="flex items-center gap-3 mb-3">
        <Block className="w-10 h-10" />
        <div className="flex-1 space-y-1.5">
          <Block className="w-2/3 h-3" />
          <Block className="w-1/2 h-2.5" />
        </div>
      </div>
      <div className="grid grid-cols-8 gap-1">
        {Array.from({ length: 16 }).map((_, i) => (
          <Block key={i} className="aspect-square" />
        ))}
      </div>
      <p className="mt-3 text-[10px] uppercase text-lime-400/60 text-center tracking-widest">
        LOADING ASSETS<span className="animate-pulse">...</span>
      </p>
    </div>
  );
};

export default PixelSkeleton;
