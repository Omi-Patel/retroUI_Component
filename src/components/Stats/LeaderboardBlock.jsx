const rows = [
  { rank: 1, name: "side_a.wav", score: 9420 },
  { rank: 2, name: "mixtape_’86", score: 8155 },
  { rank: 3, name: "demo_take_3", score: 6890 },
  { rank: 4, name: "b_side_loop", score: 4210 },
];

const max = Math.max(...rows.map((r) => r.score));
const medal = ["①", "②", "③"];

const LeaderboardBlock = () => {
  return (
    <div className="w-72 bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] p-5 font-mono">
      <div className="flex items-center justify-between border-b-4 border-double border-black pb-2 mb-3">
        <h3 className="text-lg font-black uppercase tracking-tighter">Top Plays</h3>
        <span className="text-[9px] tracking-[0.2em] uppercase opacity-60">★ Chart ★</span>
      </div>

      <ul className="space-y-2.5">
        {rows.map((r) => (
          <li key={r.rank}>
            <div className="flex items-center justify-between text-[12px] mb-1">
              <span className="flex items-center gap-2 font-bold">
                <span className="text-base font-black w-5 tabular-nums">
                  {medal[r.rank - 1] ?? r.rank}
                </span>
                {r.name}
              </span>
              <span className="font-black tabular-nums">{r.score.toLocaleString()}</span>
            </div>
            <div className="h-2 border-2 border-black">
              <div
                className="h-full"
                style={{
                  width: `${(r.score / max) * 100}%`,
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 4px)",
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-center text-[9px] tracking-[0.3em] uppercase opacity-50 border-t border-dashed border-black/40 pt-2">
        Updated hourly · spins counted
      </p>
    </div>
  );
};

export default LeaderboardBlock;
