import React, { useState, useEffect } from "react";

const HalftoneProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPct((p) => (p >= 100 ? 0 : p + 2));
    }, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-mono w-full max-w-sm">
      <div className="flex justify-between text-xs font-bold uppercase mb-2 text-stone-900 dark:text-stone-100">
        <span>Loading</span>
        <span>{pct}%</span>
      </div>
      <div className="h-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_black] overflow-hidden">
        <div
          className="h-full bg-black transition-[width] duration-100"
          style={{
            width: `${pct}%`,
            backgroundImage:
              "radial-gradient(circle, white 0.8px, transparent 1.2px)",
            backgroundSize: "6px 6px",
          }}
        />
      </div>
    </div>
  );
};

export default HalftoneProgress;
