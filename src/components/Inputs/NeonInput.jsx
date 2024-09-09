import React from "react";

const NeonInput = () => {
  return (
    <>
      {/* Neon Glow Retro Input */}
      <div className="w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Neon Glow Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-gray-900 text-white border-4 border-pink-500 neon-glow 
          focus:outline-none focus:ring-2 focus:ring-yellow-500 
          hover:shadow-[0_0_15px_5px_pink] transition-all duration-150 ease-out"
        />
      </div>
    </>
  );
};

export default NeonInput;
