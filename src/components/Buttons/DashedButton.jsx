import React from "react";

const DashedButton = () => {
  return (
    <button
      className="relative inline-flex items-center gap-2 px-6 py-3 font-mono font-semibold text-base text-black dark:text-white bg-transparent
      border-2 border-dashed border-black dark:border-white cursor-pointer select-none rounded-sm
      hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
      transition-colors duration-150 ease-out"
    >
      <span aria-hidden="true">{"//"}</span>
      Ticket Stub
      <span aria-hidden="true">{"//"}</span>
    </button>
  );
};

export default DashedButton;
