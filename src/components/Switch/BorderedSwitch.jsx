import React, { useState } from "react";

const BorderedSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`relative w-20 h-9 flex items-center cursor-pointer border-4 border-black shadow-[4px_4px_0px_0px_black] transition-colors font-mono select-none ${
        isOn ? "bg-lime-400" : "bg-stone-200"
      }`}
    >
      <span
        className={`absolute left-2 text-[10px] font-black tracking-widest transition-opacity ${
          isOn ? "opacity-100 text-black" : "opacity-30"
        }`}
      >
        ON
      </span>
      <span
        className={`absolute right-2 text-[10px] font-black tracking-widest transition-opacity ${
          isOn ? "opacity-30" : "opacity-100 text-black"
        }`}
      >
        OFF
      </span>
      <div
        className={`w-7 h-7 bg-black border-2 border-black transition-transform duration-200 ease-out ${
          isOn ? "translate-x-[44px]" : "translate-x-0.5"
        }`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 2px, rgba(255,255,255,0.15) 2px 4px)",
        }}
      />
    </div>
  );
};

export default BorderedSwitch;
