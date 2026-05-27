import React from "react";
import { Send } from "lucide-react";

// Sticky note input — yellow paper, slight tilt, send action
const RoundedInput = () => {
  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-black/70">
        ✉ Message
      </label>
      <div className="relative bg-yellow-200 border-2 border-black shadow-[5px_5px_0px_0px_black] rotate-[-1deg]">
        <input
          type="text"
          placeholder="Write a sticky note…"
          className="w-full px-4 py-3 pr-12 bg-transparent text-black focus:outline-none placeholder:opacity-40 text-base"
          style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive", fontSize: "1.2rem" }}
        />
        <button className="absolute top-1/2 -translate-y-1/2 right-2 inline-flex items-center justify-center w-8 h-8 bg-black text-yellow-200 hover:bg-yellow-200 hover:text-black border-2 border-black transition-colors">
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default RoundedInput;
