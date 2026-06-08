const slices = [
  { label: "Vinyl", value: 42, fill: "#1c1814" },
  { label: "Cassette", value: 28, fill: "#e07b67" },
  { label: "8-Track", value: 18, fill: "#5b8a7a" },
  { label: "Other", value: 12, fill: "#cdbf9b" },
];

// Build a conic-gradient string from the slices.
const gradient = (() => {
  let acc = 0;
  const stops = slices.map((s) => {
    const start = acc;
    acc += s.value;
    return `${s.fill} ${start}% ${acc}%`;
  });
  return `conic-gradient(${stops.join(", ")})`;
})();

const HalftonePieChart = () => {
  return (
    <div className="w-[320px] bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] p-5 font-mono">
      <div className="text-center border-b-4 border-double border-black pb-2 mb-4">
        <p className="text-[9px] tracking-[0.4em] uppercase opacity-60">FIG. 2 · MARKET SHARE</p>
        <h2 className="text-2xl font-black uppercase tracking-tighter leading-none">
          Format Wars
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <div
            className="w-32 h-32 rounded-full border-4 border-black"
            style={{ background: gradient }}
          />
          {/* halftone texture overlay */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: "radial-gradient(#000 1.2px, transparent 1.4px)",
              backgroundSize: "6px 6px",
              opacity: 0.35,
            }}
          />
          {/* center hole */}
          <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#f5f1e6] border-4 border-black flex items-center justify-center">
            <span className="text-[8px] font-black leading-tight text-center">100%<br />TOTAL</span>
          </div>
        </div>

        <ul className="flex-1 space-y-1.5 text-[11px]">
          {slices.map((s) => (
            <li key={s.label} className="flex items-center gap-2">
              <span
                className="w-3 h-3 border border-black shrink-0"
                style={{ background: s.fill }}
              />
              <span className="font-bold flex-1">{s.label}</span>
              <span className="font-black tabular-nums">{s.value}%</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-center text-[9px] tracking-[0.3em] uppercase opacity-50 border-t border-dashed border-black/40 pt-2">
        Survey of 1,000 record collectors
      </p>
    </div>
  );
};

export default HalftonePieChart;
