const bars = [
  { label: "JAN", value: 62 },
  { label: "FEB", value: 48 },
  { label: "MAR", value: 81 },
  { label: "APR", value: 35 },
  { label: "MAY", value: 73 },
  { label: "JUN", value: 90 },
];

const max = Math.max(...bars.map((b) => b.value));

const NewsprintBarChart = () => {
  return (
    <div className="w-[340px] bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] p-5 font-mono">
      <div className="text-center border-b-4 border-double border-black pb-2 mb-4">
        <p className="text-[9px] tracking-[0.4em] uppercase opacity-60">
          THE DAILY LEDGER · FIG. 1
        </p>
        <h2 className="text-2xl font-black uppercase tracking-tighter leading-none">
          Market Figures
        </h2>
        <p className="text-[9px] tracking-[0.3em] uppercase opacity-60 mt-0.5">
          UNITS SOLD · IN THOUSANDS
        </p>
      </div>

      <div className="flex items-end justify-between gap-2 h-40 border-b-2 border-black pb-0">
        {bars.map((b, i) => (
          <div key={b.label} className="flex-1 flex flex-col items-center justify-end h-full">
            <span className="text-[10px] font-black mb-1">{b.value}</span>
            <div
              className="w-full border-2 border-black"
              style={{
                height: `${(b.value / max) * 100}%`,
                backgroundImage:
                  i % 2
                    ? "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 5px)"
                    : "radial-gradient(#000 1.1px, transparent 1.3px)",
                backgroundSize: i % 2 ? "auto" : "6px 6px",
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex items-start justify-between gap-2 mt-1">
        {bars.map((b) => (
          <span key={b.label} className="flex-1 text-center text-[9px] font-black tracking-wider">
            {b.label}
          </span>
        ))}
      </div>

      <p className="mt-3 text-center text-[9px] tracking-[0.3em] uppercase opacity-50 border-t border-dashed border-black/40 pt-2">
        Source: Bureau of Retro Statistics
      </p>
    </div>
  );
};

export default NewsprintBarChart;
