import React, { useState } from "react";

const GlowSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`relative w-16 h-8 flex items-center cursor-pointer border-2 transition-all duration-300 font-mono ${
        isOn
          ? "bg-black border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.6)]"
          : "bg-black border-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
      }`}
    >
      <div
        className={`w-5 h-5 transition-all duration-300 ${
          isOn
            ? "translate-x-[34px] bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.9)]"
            : "translate-x-1.5 bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
        }`}
      />
      <span
        className={`absolute inset-0 flex items-center justify-center text-[8px] font-black tracking-widest pointer-events-none ${
          isOn ? "text-pink-400" : "text-cyan-300"
        }`}
        style={{ textShadow: "0 0 6px currentColor" }}
      >
        {isOn ? "▸ ON" : "OFF ◂"}
      </span>
    </div>
  );
};

export default GlowSwitch;
