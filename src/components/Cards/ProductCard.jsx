import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-sm font-mono bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] overflow-hidden">
      <div className="relative aspect-square bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 border-b-4 border-black flex items-center justify-center">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.4) 1.2px, transparent 1.5px)",
          backgroundSize: "8px 8px",
        }} />
        <span className="text-7xl">✦</span>
        <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 border-2 border-black rotate-[-4deg]">
          NEW
        </span>
        <span className="absolute bottom-2 left-2 text-[10px] tracking-widest opacity-80 bg-black/40 text-white px-1.5 py-0.5">
          SIDE A · 33⅓ RPM
        </span>
      </div>

      <div className="p-5">
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-1">CAT № 047 · LP</p>
        <h3 className="text-2xl font-black uppercase tracking-tight mb-1">
          Sunset Cassette
        </h3>
        <p className="text-xs opacity-70 mb-4">
          Twelve hand-pressed tracks for late-night drives and faded postcards.
        </p>
        <div className="flex items-center justify-between border-t-2 border-dashed border-black/40 pt-3">
          <span className="text-xl font-black">$29.99</span>
          <button className="px-4 py-1.5 bg-black text-yellow-300 border-2 border-black font-black uppercase tracking-wider text-xs hover:bg-yellow-300 hover:text-black transition-colors">
            Add to crate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
