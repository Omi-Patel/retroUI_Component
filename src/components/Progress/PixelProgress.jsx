import React, { useState, useEffect } from "react";

const PixelProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPct((p) => (p >= 100 ? 0 : p + 4));
    }, 150);
    return () => clearInterval(id);
  }, []);

  const blocks = 10;
  const filled = Math.floor((pct / 100) * blocks);

  return (
    <div className="font-mono w-full max-w-sm">
      <div className="flex justify-between text-xs font-black uppercase mb-2" style={{ color: "var(--fg)" }}>
        <span>▣ LEVEL UP</span>
        <span>{pct}%</span>
      </div>
      <div className="flex gap-1 p-1.5 bg-stone-900 border-4 border-black shadow-[4px_4px_0px_0px_black]">
        {Array.from({ length: blocks }).map((_, i) => (
          <span
            key={i}
            className="flex-1 h-5 border-2"
            style={{
              background: i < filled ? "#84cc16" : "#1c1917",
              borderColor: i < filled ? "#365314" : "#0a0a0a",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelProgress;
