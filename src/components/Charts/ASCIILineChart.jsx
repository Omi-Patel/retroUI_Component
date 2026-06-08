// Data points plotted on a 0–100 scale across a 300×140 viewBox.
const points = [12, 30, 22, 48, 40, 66, 58, 84, 72, 95];

const W = 300;
const H = 140;
const stepX = W / (points.length - 1);
const toX = (i) => i * stepX;
const toY = (v) => H - (v / 100) * H;

const ASCIILineChart = () => {
  const path = points.map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`).join(" ");

  return (
    <div className="w-[360px] bg-black text-green-400 border-2 border-green-500/60 shadow-[0_0_0_4px_rgba(0,0,0,0.6),0_0_24px_rgba(34,197,94,0.25)] p-4 font-mono">
      <div className="flex items-center justify-between text-[10px] mb-3 border-b border-green-500/30 pb-2">
        <span className="tracking-widest">$ uptime --graph</span>
        <span className="opacity-60">[ LIVE ]</span>
      </div>

      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block">
          {/* grid */}
          {[0, 1, 2, 3, 4].map((r) => (
            <line
              key={`h${r}`}
              x1="0"
              x2={W}
              y1={(H / 4) * r}
              y2={(H / 4) * r}
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2 4"
              opacity="0.25"
            />
          ))}
          {points.map((_, i) => (
            <line
              key={`v${i}`}
              x1={toX(i)}
              x2={toX(i)}
              y1="0"
              y2={H}
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2 4"
              opacity="0.12"
            />
          ))}
          {/* line */}
          <path d={path} fill="none" stroke="currentColor" strokeWidth="2" />
          {/* nodes as ascii-ish crosses */}
          {points.map((v, i) => (
            <g key={i}>
              <rect x={toX(i) - 2.5} y={toY(v) - 2.5} width="5" height="5" fill="#000" stroke="currentColor" strokeWidth="1.5" />
            </g>
          ))}
        </svg>
        <span className="absolute right-1 top-0 text-[9px] opacity-70">100%</span>
        <span className="absolute right-1 bottom-0 text-[9px] opacity-70">0%</span>
      </div>

      <div className="mt-3 flex items-center justify-between text-[10px] border-t border-green-500/30 pt-2">
        <span className="opacity-70">avg 52.7 · peak 95</span>
        <span className="inline-flex items-center gap-1">
          ▲ +18.4%
          <span className="w-1.5 h-3 bg-green-400 animate-pulse" />
        </span>
      </div>
    </div>
  );
};

export default ASCIILineChart;
