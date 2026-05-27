import React from "react";

const BasicInput = () => {
  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-black/70">
        ✎ Field 01 · Name
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="Type something…"
          className="w-full px-4 py-3 text-base bg-[#f5f1e6] text-black border-4 border-black focus:outline-none focus:bg-yellow-50 placeholder:opacity-40"
        />
        <span className="absolute -bottom-1 left-2 right-2 border-t-2 border-dashed border-black/40" />
      </div>
      <p className="mt-1.5 text-[10px] opacity-50 uppercase tracking-widest">
        Press [TAB] to continue
      </p>
    </div>
  );
};

export default BasicInput;
