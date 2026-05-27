import React from "react";

const NeonInput = () => {
  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-pink-400">
        ▸ ENTER NAME
      </label>
      <input
        type="text"
        placeholder="AAA"
        maxLength={20}
        className="w-full px-4 py-3 text-base bg-black text-pink-300 placeholder:text-pink-700/60 border-2 border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.5)] focus:outline-none focus:border-cyan-300 focus:shadow-[0_0_25px_rgba(34,211,238,0.7)] focus:text-cyan-300 placeholder:tracking-widest tracking-widest uppercase"
      />
      <p className="mt-1.5 text-[10px] text-pink-400/60 tracking-widest">
        ★ HIGH SCORE ENTRY ★
      </p>
    </div>
  );
};

export default NeonInput;
