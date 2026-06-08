const series = [20, 35, 28, 52, 60, 55, 78, 88];
const W = 300;
const H = 130;
const stepX = W / (series.length - 1);
const toX = (i) => i * stepX;
const toY = (v) => H - (v / 100) * H;

const LedgerAreaChart = () => {
  const line = series.map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`).join(" ");
  const area = `${line} L ${W} ${H} L 0 ${H} Z`;
  const balance = series[series.length - 1] * 137;

  return (
    <div className="w-[340px] bg-[#fbf7ea] text-[#243b2f] border-2 border-[#243b2f] shadow-[6px_6px_0px_0px_#243b2f] font-mono">
      {/* ledger header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#243b2f] text-[#fbf7ea]">
        <span className="text-[10px] tracking-[0.3em] uppercase">Ledger No. 7</span>
        <span className="text-[10px] tracking-[0.2em]">FY ’87</span>
      </div>

      <div className="px-4 pt-3 pb-1">
        <p className="text-[9px] tracking-[0.3em] uppercase opacity-60 mb-1">
          Cumulative Balance
        </p>
        <p className="text-xl font-black tabular-nums tracking-tight">
          ${balance.toLocaleString()}.00
        </p>
      </div>

      <div className="px-4 pb-3">
        <div
          className="border border-[#243b2f]/40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(#243b2f0d 0 1px, transparent 1px 13px), repeating-linear-gradient(90deg, #c0392b22 0 1px, transparent 1px 100%)",
          }}
        >
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block">
            <defs>
              <pattern id="ledgerhatch" width="6" height="6" patternUnits="userSpaceOnUse">
                <path d="M0 6 L6 0" stroke="#243b2f" strokeWidth="0.6" opacity="0.5" />
              </pattern>
            </defs>
            <path d={area} fill="url(#ledgerhatch)" />
            <path d={line} fill="none" stroke="#c0392b" strokeWidth="2" />
            {series.map((v, i) => (
              <circle key={i} cx={toX(i)} cy={toY(v)} r="2.5" fill="#fbf7ea" stroke="#c0392b" strokeWidth="1.5" />
            ))}
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2 border-t-2 border-double border-[#243b2f] text-[10px]">
        <span className="opacity-70">8 entries posted</span>
        <span className="font-black">▲ +34% YoY</span>
      </div>
    </div>
  );
};

export default LedgerAreaChart;
