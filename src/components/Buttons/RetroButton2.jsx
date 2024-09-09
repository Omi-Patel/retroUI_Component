import React from "react";

const RetroButton2 = () => {
  return (
    <>
      <button
        className="relative inline-block px-6 py-3 font-mono text-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-4 border-black cursor-pointer select-none
      shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-all duration-150 ease-out retro-btn
      before:absolute before:inset-0 before:bg-black before:-z-10 hover:before:bg-opacity-50
      hover:scale-105 transform hover:brightness-110"
      >
        <span className="relative z-20 neon-text">Click Me</span>
      </button>
    </>
  );
};

export default RetroButton2;
