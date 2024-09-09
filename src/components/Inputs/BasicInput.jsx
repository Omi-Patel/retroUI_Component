import React from "react";

const RetroInput = () => {
  return (
    <>
      {/* Basic Retro Input */}
      <div className="mb-6 w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Basic Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-gray-200 text-gray-800 border-4 border-black shadow-[6px_6px_0px_0px_black] hover:shadow-[10px_10px_0px_0px_black] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150 ease-out"
        />
      </div>
    </>
  );
};

export default RetroInput;
