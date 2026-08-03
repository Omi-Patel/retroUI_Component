import React, { useState, useEffect } from "react";

const VHSProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPct((p) => (p >= 100 ? 0 : p + 1));
    }, 60);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-mono w-full max-w-sm">
      <div className="flex justify-between text-[10px] uppercase tracking-widest mb-1 text-stone-900 dark:text-stone-100">
        <span>REC ●</span>
        <span>{String(Math.floor(pct)).padStart(3, "0")}%</span>
      </div>
      <div className="relative h-6 bg-black border-2 border-black overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 transition-[width] duration-100"
          style={{ width: `${pct}%` }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(0,0,0,0.25) 2px, rgba(0,0,0,0.25) 3px)"
        }} />
      </div>
      <p className="mt-1 text-[10px] uppercase tracking-widest opacity-60 text-stone-900 dark:text-stone-100">
        SP · NTSC · CH 03
      </p>
    </div>
  );
};

export default VHSProgress;
