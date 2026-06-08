// The hit counter — that odometer of digits proving people had Definitely
// Been Here. Rendered as glowing LCD-style number cells.
const COUNT = "001337";

const VisitorCounterBadge = () => {
  return (
    <div className="inline-flex flex-col items-center gap-2 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] px-5 py-4 font-mono">
      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-black">
        You are visitor No.
      </span>

      <div className="flex gap-1 p-1.5 bg-black border-2 border-black">
        {COUNT.split("").map((d, i) => (
          <span
            key={i}
            className="w-7 h-10 flex items-center justify-center text-[24px] font-black tabular-nums rounded-[2px]"
            style={{
              color: "#39ff14",
              background: "#0c0c0c",
              textShadow: "0 0 6px rgba(57,255,20,0.8)",
              boxShadow: "inset 0 0 0 1px #1c1c1c",
            }}
          >
            {d}
          </span>
        ))}
      </div>

      <span className="text-[9px] uppercase tracking-[0.2em] text-black/55">
        Since June ’98 · thanks for stopping by
      </span>
    </div>
  );
};

export default VisitorCounterBadge;
