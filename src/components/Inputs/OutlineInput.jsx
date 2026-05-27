import React from "react";

// Terminal input — green-on-black CRT prompt with blinking cursor
const OutlineInput = () => {
  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-green-400">
        $ user.input
      </label>
      <div className="flex items-center gap-2 px-3 py-3 bg-black border-2 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.4)]">
        <span className="text-green-400 select-none">{">"}</span>
        <input
          type="text"
          placeholder="type a command_"
          className="flex-1 bg-transparent text-green-400 placeholder:text-green-700 focus:outline-none text-sm caret-green-400"
        />
        <span
          className="w-2 h-4 bg-green-400 animate-pulse"
          style={{ animationDuration: "1s" }}
        />
      </div>
    </div>
  );
};

export default OutlineInput;
