import React from "react";

const Shimmer = ({ className = "" }) => (
  <div
    className={`relative overflow-hidden bg-stone-200 dark:bg-stone-800 ${className}`}
  >
    <div
      className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite]"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
      }}
    />
  </div>
);

const ShimmerSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-white border-4 border-black shadow-[5px_5px_0px_0px_black] p-4 space-y-3">
      <div className="flex items-center gap-3">
        <Shimmer className="w-12 h-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <Shimmer className="w-2/3 h-3" />
          <Shimmer className="w-1/2 h-2.5" />
        </div>
      </div>
      <Shimmer className="w-full h-3" />
      <Shimmer className="w-5/6 h-3" />
      <Shimmer className="w-32 h-8 mt-3" />
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default ShimmerSkeleton;
