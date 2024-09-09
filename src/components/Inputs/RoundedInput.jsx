import React from "react";

const RoundedInput = () => {
  return (
    <>
      {/* Rounded Retro Input */}
      <div className="w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Rounded Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-blue-100 border-4 border-black rounded-full 
          shadow-[4px_4px_0px_0px_black] hover:bg-blue-200 hover:shadow-[8px_8px_0px_0px_black] 
          transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );
};

export default RoundedInput;
