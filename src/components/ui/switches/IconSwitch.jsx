"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const IconSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`relative w-20 h-10 flex items-center rounded-full cursor-pointer transition-all duration-300 border-4 border-black shadow-[4px_4px_0px_0px_black] ${
        isOn ? "bg-[#5B4B8A]" : "bg-[#F7D44C]"
      }`}
    >
      <div
        className={`absolute left-1 text-white transition-opacity duration-300 ${
          isOn ? "opacity-0" : "opacity-100"
        }`}
      >
        <Sun size={16} className="text-black" />
      </div>
      <div
        className={`absolute right-1 text-white transition-opacity duration-300 ${
          isOn ? "opacity-100" : "opacity-0"
        }`}
      >
        <Moon size={16} className="text-white" />
      </div>
      <div
        className={`w-8 h-8 bg-white rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.3)] transform transition-transform duration-300 border-2 border-black ${
          isOn ? "translate-x-10" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default IconSwitch;
