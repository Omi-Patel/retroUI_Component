const spark = [8, 14, 10, 18, 15, 24, 20, 30, 27, 38];
const W = 200;
const H = 48;
const stepX = W / (spark.length - 1);
const max = Math.max(...spark);
const toX = (i) => i * stepX;
const toY = (v) => H - (v / max) * (H - 6) - 3;

const MetricTrendCard = () => {
  const line = spark.map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`).join(" ");
  const area = `${line} L ${W} ${H} L 0 ${H} Z`;

  return (
    <div className="w-72 bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] p-5 font-mono">
      <div className="flex items-start justify-between mb-1">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Monthly Revenue</p>
          <p className="text-3xl font-black tracking-tighter tabular-nums leading-tight mt-1">
            $48.2k
          </p>
        </div>
        <span className="inline-flex items-center gap-1 border-2 border-black text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rotate-2">
          ▲ 8.1%
        </span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-12 mt-2">
        <defs>
          <pattern id="sparkdots" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="#000" opacity="0.4" />
          </pattern>
        </defs>
        <path d={area} fill="url(#sparkdots)" />
        <path d={line} fill="none" stroke="#000" strokeWidth="2.5" />
        <circle cx={toX(spark.length - 1)} cy={toY(spark[spark.length - 1])} r="3.5" fill="#e07b67" stroke="#000" strokeWidth="2" />
      </svg>

      <div className="flex items-center justify-between text-[9px] uppercase tracking-widest opacity-60 mt-2 border-t border-dashed border-black/40 pt-2">
        <span>Jan</span>
        <span>· · ·</span>
        <span>Oct</span>
      </div>
    </div>
  );
};

export default MetricTrendCard;
