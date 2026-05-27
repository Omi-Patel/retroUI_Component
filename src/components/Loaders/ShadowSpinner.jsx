import React from "react";

// Vinyl record spinning on a turntable
const ShadowSpinner = () => {
  return (
    <div className="flex items-center justify-center w-24 h-24 bg-amber-100 border-4 border-black shadow-[4px_4px_0px_0px_black]">
      <div className="relative w-16 h-16 rounded-full bg-stone-900 animate-spin" style={{ animationDuration: "1.5s" }}>
        <div className="absolute inset-1 rounded-full border border-stone-700" />
        <div className="absolute inset-3 rounded-full border border-stone-700" />
        <div className="absolute inset-5 rounded-full border border-stone-700" />
        <div className="absolute inset-0 m-auto w-5 h-5 rounded-full bg-red-500 border-2 border-black" />
        <div className="absolute inset-0 m-auto w-1 h-1 rounded-full bg-black" />
      </div>
    </div>
  );
};

export default ShadowSpinner;
