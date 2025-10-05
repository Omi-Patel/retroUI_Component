import React from "react";

const ThreeSpinner = () => {
  return (
    <div className="flex space-x-6">
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#fbbf24] delay-0 rounded-full animate-spin shadow-[1px_1px_14px_0px_#fbbf24]"></div>
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#ec4899] delay-300 rounded-full animate-spin shadow-[1px_1px_14px_0px_#ec4899]"></div>
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#3b82f6] delay-600 rounded-full animate-spin shadow-[1px_1px_14px_0px_#3b82f6]"></div>
    </div>
  );
};

export default ThreeSpinner;
