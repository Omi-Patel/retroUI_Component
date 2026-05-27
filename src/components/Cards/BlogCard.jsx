import React from "react";

const BlogCard = () => {
  return (
    <article className="max-w-md font-mono bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] overflow-hidden">
      <div
        className="relative h-40 bg-black text-yellow-300 flex flex-col items-center justify-center p-4"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 8px)",
        }}
      >
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-70">
          THE WEEKLY · ISSUE 27
        </p>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-center leading-none mt-1">
          Retro Design <br />
          <span className="italic font-light text-pink-300">never died.</span>
        </h2>
        <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 border-2 border-black rotate-[-3deg]">
          ESSAY
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase opacity-60 mb-2">
          <span>★ AUG 15, 2024</span>
          <span>·</span>
          <span>BY J. DOE</span>
          <span>·</span>
          <span>5 MIN READ</span>
        </div>
        <p className="text-sm leading-relaxed mb-4">
          Discover the secrets behind eye-catching retro designs that stand out
          in modern projects. Tips, tricks, and a healthy dose of nostalgia.
        </p>
        <button className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-300 text-black border-4 border-black shadow-[3px_3px_0px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_black] text-xs font-black uppercase tracking-wider transition-all">
          Read on →
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
