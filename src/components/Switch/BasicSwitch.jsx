import React, { useState } from "react";

const BasicSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`relative w-16 h-8 flex items-center rounded-full cursor-pointer transition-all duration-300 bg-[#D5C4A1] ${
        isOn ? "bg-[#D08C60]" : "bg-[#f2c364]"
      }`}
    >
      <div
        className={`w-7 h-7 bg-[#3B3228] rounded-full shadow-[2px_2px_4px_#3B3228] transform transition-transform duration-300 ${
          isOn ? "translate-x-8" : "translate-x-1"
        }`}
      />
    </div>
  );
};

export default BasicSwitch;
