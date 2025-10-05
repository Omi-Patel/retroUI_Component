import React, { useState } from "react";

const GlowSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`relative w-14 h-8 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
        isOn ? "bg-[#2846ee] shadow-[0_0_10px_4px_#1d37cb]" : "bg-[#B4CFB0]"
      }`}
    >
      <div
        className={`w-6 h-6 bg-[#333] rounded-full transform transition-transform duration-300 ${
          isOn ? "translate-x-7" : "translate-x-1"
        }`}
      />
    </div>
  );
};

export default GlowSwitch;
