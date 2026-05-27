const stocks = [
  { sym: "ZINE", price: 42.18, change: 1.24 },
  { sym: "STIK", price: 8.05, change: -0.12 },
  { sym: "RETR", price: 128.5, change: 3.41 },
  { sym: "MIXT", price: 19.95, change: 0.0 },
  { sym: "PXLR", price: 64.2, change: -1.85 },
  { sym: "TAPE", price: 12.4, change: 0.55 },
];

const StockTicker = () => {
  return (
    <div className="inline-flex w-full max-w-2xl bg-black border border-green-500/40 overflow-hidden">
      <span className="flex items-center px-3 py-2 bg-green-500 text-black font-mono font-bold text-[11px] tracking-[0.2em] whitespace-nowrap">
        LIVE
      </span>
      <div className="relative flex-1 overflow-hidden">
        <div className="marquee-track py-2 font-mono text-[12.5px] text-green-400">
          {[...stocks, ...stocks].map((s, i) => {
            const up = s.change > 0;
            const flat = s.change === 0;
            const color = flat
              ? "text-stone-400"
              : up
                ? "text-green-400"
                : "text-red-400";
            return (
              <span key={i} className="inline-flex items-center gap-2">
                <span className="text-white">{s.sym}</span>
                <span>${s.price.toFixed(2)}</span>
                <span className={color}>
                  {up ? "▲" : flat ? "—" : "▼"} {Math.abs(s.change).toFixed(2)}
                </span>
                <span aria-hidden="true" className="mx-3 text-green-700">·</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StockTicker;
