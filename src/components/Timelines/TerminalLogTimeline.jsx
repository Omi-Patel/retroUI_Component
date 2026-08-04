// Terminal commit log — a phosphor-green history readout with branch glyphs.
const commits = [
  {
    hash: "a3f92c1",
    time: "1998-04-09 21:14",
    msg: "feat: ship marquee ticker to prod",
    head: true,
  },
  {
    hash: "9b04e77",
    time: "1998-03-27 18:02",
    msg: "fix: un-jam the paper feed on receipts",
    head: false,
  },
  {
    hash: "c51d8f0",
    time: "1998-02-11 09:45",
    msg: "feat: add dark mode to every card",
    head: false,
  },
  {
    hash: "7e2ab19",
    time: "1998-01-21 14:33",
    msg: "chore: bump templates to v2",
    head: false,
  },
  {
    hash: "1f0c4d8",
    time: "1997-05-12 08:00",
    msg: "init: first commit, three components",
    head: false,
  },
];

const TerminalLogTimeline = () => {
  return (
    <div className="w-full max-w-xl bg-black text-green-400 border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.6)] font-mono">
      {/* Terminal title bar */}
      <div className="flex items-center justify-between bg-green-400 text-black px-4 py-1.5 border-b-4 border-black">
        <span className="text-[10px] font-black uppercase tracking-[0.25em]">
          git log --oneline
        </span>
        <span aria-hidden="true" className="text-[10px] font-black">
          [■][□][×]
        </span>
      </div>

      <ol className="px-4 py-4 space-y-3 text-[12px] leading-snug">
        {commits.map((c, i) => (
          <li key={c.hash} className="flex gap-2">
            <span aria-hidden="true" className="text-green-700 select-none">
              {i === commits.length - 1 ? "└─" : "├─"}
            </span>
            <div
              className={
                c.head
                  ? "flex-1 -mx-1 px-1 bg-green-950 outline outline-1 outline-dashed outline-green-500"
                  : "flex-1"
              }
            >
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-amber-300 font-bold">{c.hash}</span>
                <time className="text-[10px] text-green-700 tracking-wider">
                  {c.time}
                </time>
                {c.head && (
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-green-400 text-black px-1.5">
                    HEAD → main
                  </span>
                )}
              </div>
              <p className="text-green-300">{c.msg}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="border-t-2 border-dashed border-green-800 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-green-700">
        (END) · press q to quit
        <span aria-hidden="true" className="ml-1 animate-[termlog-blink_1s_steps(1)_infinite]">
          █
        </span>
      </div>

      <style>{`
        @keyframes termlog-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TerminalLogTimeline;
