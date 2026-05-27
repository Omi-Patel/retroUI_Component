import React from "react";

// Index card input — ruled lines, red margin
const FocusedInput = () => {
  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-black/70">
        Index Card · Note
      </label>
      <div className="relative bg-amber-50 border-4 border-black shadow-[5px_5px_0px_0px_black] p-3">
        <span className="absolute left-8 top-0 bottom-0 border-l-2 border-red-300/70" />
        <input
          type="text"
          placeholder="Scribble here…"
          className="w-full pl-7 py-1 bg-transparent text-black focus:outline-none placeholder:opacity-40 text-base"
          style={{
            backgroundImage:
              "linear-gradient(transparent 22px, rgba(59,130,246,0.25) 22px, rgba(59,130,246,0.25) 23px, transparent 23px)",
            backgroundSize: "100% 24px",
            lineHeight: "24px",
          }}
        />
        <div className="absolute top-1.5 right-2 text-[8px] tracking-widest opacity-50">
          № 047
        </div>
      </div>
    </div>
  );
};

export default FocusedInput;
