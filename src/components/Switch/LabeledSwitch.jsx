"use client";

import { useState } from "react";

const LabeledSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono font-bold text-sm">OFF</span>
      <div
        onClick={toggleSwitch}
        className={`relative w-16 h-8 flex items-center rounded-md cursor-pointer transition-all duration-300 border-2 border-black shadow-[3px_3px_0px_0px_black] ${
          isOn ? "bg-[#7CB9E8]" : "bg-gray-200"
        }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-sm shadow-md transform transition-transform duration-300 border border-black ${
            isOn ? "translate-x-9" : "translate-x-0.5"
          }`}
        />
      </div>
      <span className="font-mono font-bold text-sm">ON</span>
    </div>
  );
};

export default LabeledSwitch;
