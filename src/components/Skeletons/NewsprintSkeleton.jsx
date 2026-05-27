import React from "react";

const Bar = ({ w = "w-full", h = "h-3", className = "" }) => (
  <div
    className={`${w} ${h} ${className}`}
    style={{
      backgroundImage:
        "repeating-linear-gradient(45deg, rgba(0,0,0,0.18) 0 2px, transparent 2px 6px)",
      backgroundColor: "rgba(0,0,0,0.08)",
    }}
  />
);

const NewsprintSkeleton = () => {
  return (
    <div className="font-mono w-full max-w-sm bg-[#f5f1e6] text-black border-4 border-black shadow-[5px_5px_0px_0px_black] p-4 space-y-3">
      <Bar w="w-1/3" h="h-2.5" />
      <Bar w="w-full" h="h-5" />
      <Bar w="w-5/6" />
      <Bar w="w-2/3" />
      <div className="flex gap-2 pt-2">
        <Bar w="w-16" h="h-7" />
        <Bar w="w-16" h="h-7" />
      </div>
    </div>
  );
};

export default NewsprintSkeleton;
