// "Cool Site of the Year" — the self-awarded rosette badge that lived in every
// sidebar. A pleated ribbon rosette rendered in pure CSS.
const AwardRibbonBadge = () => {
  return (
    <div className="relative w-[180px] flex flex-col items-center font-mono select-none">
      {/* Rosette */}
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* pleated burst */}
        <div
          className="absolute inset-0 rounded-full border-4 border-black"
          style={{
            background:
              "repeating-conic-gradient(#e07b67 0deg 18deg, #c85c48 18deg 36deg)",
            boxShadow: "6px 6px 0 0 #000",
          }}
        />
        {/* inner medallion */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-[#f5f1e6] border-4 border-black flex flex-col items-center justify-center text-center">
          <span className="text-[8px] uppercase tracking-[0.15em] text-black/60 leading-none">
            Cool Site
          </span>
          <span className="text-[22px] leading-none my-0.5">★</span>
          <span className="text-[8px] uppercase tracking-[0.15em] text-black/60 leading-none">
            of the Year
          </span>
        </div>
      </div>

      {/* Ribbon tails */}
      <div className="relative z-0 -mt-2 flex gap-2">
        {["#e07b67", "#e07b67"].map((c, i) => (
          <div
            key={i}
            className="w-6 h-12 border-2 border-black"
            style={{
              background: c,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)",
              transform: i === 0 ? "rotate(-8deg)" : "rotate(8deg)",
            }}
          />
        ))}
      </div>

      <div className="mt-2 text-[9px] uppercase tracking-[0.25em] text-black/50">
        Est. MCMXCVIII
      </div>
    </div>
  );
};

export default AwardRibbonBadge;
