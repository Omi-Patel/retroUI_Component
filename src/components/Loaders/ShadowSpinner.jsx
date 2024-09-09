import React from "react";

const ShadowSpinner = () => {
  return (
    <div className="flex space-x-4 items-center">
      <div className="w-8 h-8 rounded-full border-4 border-black relative bg-yellow-100 shadow-[2px_2px_14px_0px_yellow] animate-[spin_0.6s_linear_infinite]">
        <div className="w-2 h-2 bg-[#ffdb25] absolute right-1 top-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default ShadowSpinner;
