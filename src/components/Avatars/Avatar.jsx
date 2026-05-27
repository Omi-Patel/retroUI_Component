import React from "react";

// Pixel-art avatar — 8-bit face on a hard-shadow tile
const BasicAvatar = () => (
  <div className="w-20 h-20 bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_0px_black] flex items-center justify-center font-mono select-none">
    <div className="grid grid-cols-5 gap-[2px] text-[0]">
      {[
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
      ].map((row, r) =>
        row.map((c, i) => (
          <span
            key={`${r}-${i}`}
            className="w-2 h-2"
            style={{ background: c ? "black" : "transparent" }}
          />
        ))
      )}
    </div>
  </div>
);

// Polaroid avatar — slightly tilted polaroid card with placeholder gradient
const BorderAvatar = () => (
  <div className="relative inline-block p-1.5 pb-5 bg-white border border-stone-300 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rotate-[-3deg]">
    <div className="w-16 h-16 bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-200 border border-stone-300 flex items-center justify-center text-3xl">
      ✦
    </div>
    <p className="absolute bottom-0.5 left-0 right-0 text-center text-[8px] font-mono tracking-widest text-stone-500">
      EST. &apos;97
    </p>
  </div>
);

// Sticker avatar — bold initials on a rotated sticker with hard shadow
const ShadowAvatar = () => (
  <div className="relative inline-block">
    <div className="w-20 h-20 bg-pink-400 border-4 border-black shadow-[5px_5px_0px_0px_black] rotate-[-4deg] flex items-center justify-center font-mono">
      <span className="text-2xl font-black tracking-tighter">JD</span>
    </div>
  </div>
);

// Stamp avatar — circular postage-stamp style with status dot
const BadgeAvatar = () => (
  <div className="relative inline-block">
    <div className="relative w-20 h-20 rounded-full bg-[#f5f1e6] border-[3px] border-red-600 flex items-center justify-center font-mono text-red-600 font-black uppercase">
      <span className="text-xl">JD</span>
      <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[7px] tracking-widest">
        ★ MEMBER ★
      </span>
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[7px] tracking-widest">
        &apos;26
      </span>
    </div>
    <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-lime-400 rounded-full border-2 border-black" />
  </div>
);

// Newsprint halftone portrait in a thick black frame
const FrameAvatar = () => (
  <div className="w-20 h-20 p-1 bg-black border-4 border-black shadow-[4px_4px_0px_0px_black]">
    <div
      className="w-full h-full flex items-center justify-center bg-[#f5f1e6]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.5) 1.2px, transparent 1.5px)",
        backgroundSize: "4px 4px",
      }}
    >
      <span className="text-3xl font-mono">☻</span>
    </div>
  </div>
);

export { BasicAvatar, BorderAvatar, ShadowAvatar, BadgeAvatar, FrameAvatar };
