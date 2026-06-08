// Semicircular gauge: value 0–100 mapped to 180°→0°.
const value = 72;
const angle = 180 - (value / 100) * 180;
const cx = 100;
const cy = 100;
const r = 78;
const rad = (deg) => (deg * Math.PI) / 180;
const needleX = cx + r * 0.82 * Math.cos(rad(angle));
const needleY = cy - r * 0.82 * Math.sin(rad(angle));

// Build the arc path for the colored track.
const arcPath = (startDeg, endDeg) => {
  const x1 = cx + r * Math.cos(rad(startDeg));
  const y1 = cy - r * Math.sin(rad(startDeg));
  const x2 = cx + r * Math.cos(rad(endDeg));
  const y2 = cy - r * Math.sin(rad(endDeg));
  return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
};

const GaugeBlock = () => {
  return (
    <div className="w-72 bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] p-5 font-mono text-center">
      <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 border-b-2 border-double border-black pb-2 mb-2">
        System Load
      </p>

      <div className="relative">
        <svg viewBox="0 0 200 118" className="w-full">
          {/* track */}
          <path d={arcPath(180, 0)} fill="none" stroke="#000" strokeWidth="14" opacity="0.12" strokeLinecap="butt" />
          {/* value arc with hatch */}
          <defs>
            <pattern id="gaugehatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="3" height="6" fill="#1c1814" />
            </pattern>
          </defs>
          <path d={arcPath(180, angle)} fill="none" stroke="url(#gaugehatch)" strokeWidth="14" strokeLinecap="butt" />
          {/* ticks */}
          {Array.from({ length: 11 }).map((_, i) => {
            const a = 180 - i * 18;
            const x1 = cx + (r + 9) * Math.cos(rad(a));
            const y1 = cy - (r + 9) * Math.sin(rad(a));
            const x2 = cx + (r + 2) * Math.cos(rad(a));
            const y2 = cy - (r + 2) * Math.sin(rad(a));
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000" strokeWidth={i % 5 === 0 ? 2 : 1} />;
          })}
          {/* needle */}
          <line x1={cx} y1={cy} x2={needleX} y2={needleY} stroke="#e07b67" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx={cx} cy={cy} r="7" fill="#f5f1e6" stroke="#000" strokeWidth="3" />
        </svg>
        <div className="-mt-3">
          <span className="text-4xl font-black tracking-tighter tabular-nums">{value}</span>
          <span className="text-lg font-black">%</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[9px] uppercase tracking-widest mt-2 border-t border-dashed border-black/40 pt-2">
        <span className="opacity-60">Idle</span>
        <span className="inline-flex items-center gap-1 font-black">
          <span className="w-2 h-2 rounded-full bg-[#65a30d] animate-pulse" /> Nominal
        </span>
        <span className="opacity-60">Max</span>
      </div>
    </div>
  );
};

export default GaugeBlock;
