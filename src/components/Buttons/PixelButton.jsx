import React from "react";

const PixelButton = () => {
  return (
    <div>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-white bg-green-500 border-4 border-black cursor-pointer select-none
  shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-all duration-200 ease-out
  before:content-[''] before:block before:absolute before:w-full before:h-full before:border-4 before:border-black before:left-1 before:top-1 before:transition-all before:duration-200 before:ease-out
  hover:before:left-0 hover:before:top-0 active:shadow-[3px_3px_0px_0px_black] active:before:left-2 active:before:top-2"
      >
        Pixel Art
      </button>
    </div>
  );
};

export default PixelButton;
