import React from "react";

// Retro arcade HUD — 3 pixel hearts pulsing in sequence
const ThreeSpinner = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-black border-4 border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.4)] font-mono">
      <span className="text-[10px] tracking-widest text-lime-300">HP</span>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="text-2xl text-pink-400"
          style={{
            animation: "heartPulse 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }}
        >
          ♥
        </span>
      ))}
      <style>{`
        @keyframes heartPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.1); text-shadow: 0 0 8px currentColor; }
        }
      `}</style>
    </div>
  );
};

export default ThreeSpinner;
