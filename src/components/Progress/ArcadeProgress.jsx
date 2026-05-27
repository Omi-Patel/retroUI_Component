import React, { useState, useEffect } from "react";

const ArcadeProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPct((p) => (p >= 100 ? 0 : p + 5));
    }, 200);
    return () => clearInterval(id);
  }, []);

  const segments = 20;
  const filled = Math.floor((pct / 100) * segments);

  return (
    <div className="font-mono w-full max-w-sm">
      <div className="flex justify-between text-[11px] mb-1.5" style={{ color: "#f472b6" }}>
        <span className="tracking-widest">HP</span>
        <span>{pct}/100</span>
      </div>
      <div className="flex gap-0.5 p-1 bg-black border-2 border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.4)]">
        {Array.from({ length: segments }).map((_, i) => (
          <span
            key={i}
            className="flex-1 h-3"
            style={{
              background:
                i < filled ? "#f472b6" : "rgba(244,114,182,0.15)",
              boxShadow: i < filled ? "0 0 6px rgba(244,114,182,0.7)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ArcadeProgress;
