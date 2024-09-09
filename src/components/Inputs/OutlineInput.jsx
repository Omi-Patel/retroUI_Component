import React from "react";

const OutlineInput = () => {
  return (
    <>
      {/* Outlined Retro Input */}
      <div className="w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Outlined Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-transparent border-4 border-black text-gray-800 
          hover:bg-gray-200 transition-all duration-150 ease-out 
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-[4px_4px_0px_0px_black]"
        />
      </div>
    </>
  );
};

export default OutlineInput;
