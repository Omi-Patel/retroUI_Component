import React from "react";

const StampButton = () => {
  return (
    <button
      className="relative inline-flex items-center gap-2 px-5 py-2 font-mono font-bold uppercase tracking-[0.18em] text-sm text-red-700 dark:text-red-400
      bg-transparent border-[3px] border-double border-red-700 dark:border-red-400 cursor-pointer select-none
      -rotate-3 hover:rotate-0 transition-transform duration-200 ease-out
      hover:scale-105"
    >
      <span aria-hidden="true">★</span>
      Approved
      <span aria-hidden="true">★</span>
    </button>
  );
};

export default StampButton;
