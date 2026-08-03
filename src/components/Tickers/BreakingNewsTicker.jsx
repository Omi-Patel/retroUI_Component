const headlines = [
  "ZINE #04 NOW SHIPPING WORLDWIDE",
  "FREE STICKER WITH EVERY ORDER OVER $25",
  "STUDIO HOURS: TUES — SAT, 11AM — 7PM",
  "MIXTAPE DROP THIS FRIDAY @ MIDNIGHT",
];

const BreakingNewsTicker = () => {
  return (
    <div className="inline-flex w-full max-w-2xl border-2 border-black bg-white overflow-hidden shadow-[4px_4px_0_0_black]">
      <span className="flex items-center px-4 py-2 bg-red-600 text-white font-mono font-bold text-[11px] tracking-[0.2em] whitespace-nowrap">
        ● BREAKING
      </span>
      <div className="relative flex-1 overflow-hidden">
        <div className="inline-flex gap-12 pr-12 animate-[ticker-marquee_40s_linear_infinite] py-2 font-mono text-[12.5px] text-stone-800 tracking-wider">
          {[...headlines, ...headlines].map((h, i) => (
            <span key={i} className="inline-flex items-center">
              {h}
              <span aria-hidden="true" className="mx-6 text-red-600">●</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes ticker-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default BreakingNewsTicker;
