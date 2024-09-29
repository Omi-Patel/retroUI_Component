import React, { useState } from "react";

const BorderedSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`relative w-16 h-8 flex items-center cursor-pointer rounded-full 
      transition-all duration-300 
      ${
        isOn
          ? "bg-opacity-50 border-[#f1887e]"
          : "bg-opacity-30 border-[#f4eb9b]"
      }
      border-2 shadow-lg backdrop-filter backdrop-blur-lg`}
      style={{
        background: isOn
          ? "rgba(255, 111, 97, 0.5)"
          : "rgba(240, 230, 140, 0.5)",
      }}
    >
      <div
        className={`w-6 h-6 bg-[#4A4A4A] rounded-full shadow-lg transition-transform duration-300 
        ${isOn ? "translate-x-8" : "translate-x-1"} 
        border-2 border-white`}
      />
    </div>
  );
};

export default BorderedSwitch;
