// Edition history — a vertical timeline of front pages down a dotted spine.
const editions = [
  {
    date: "MAY 12 1997",
    headline: "First Edition Hits the Stands",
    summary: "Vol. 1 rolls off the press with three components and a dream.",
  },
  {
    date: "AUG 03 1997",
    headline: "Dark Mode Arrives Overnight",
    summary: "Night desk ships a full dark palette before sunrise.",
  },
  {
    date: "JAN 21 1998",
    headline: "Templates Section Doubles in Size",
    summary: "Twelve new page templates added to the back pages.",
  },
  {
    date: "APR 09 1998",
    headline: "Readers Vote Marquee Best Feature",
    summary: "The scrolling version ticker wins the annual poll by a mile.",
  },
];

const NewspaperTimeline = () => {
  return (
    <div className="w-full max-w-xl bg-[#f5f1e6] text-stone-900 border-4 border-black shadow-[6px_6px_0_0_black] font-mono">
      {/* Masthead */}
      <div className="text-center border-b-4 border-double border-black px-6 py-4">
        <p className="text-[9px] uppercase tracking-[0.4em] text-stone-500">
          The Retro Gazette · Archives Dept.
        </p>
        <h2 className="text-2xl font-black uppercase tracking-tight mt-1">
          Edition History
        </h2>
      </div>

      <ol className="relative px-6 py-6 space-y-8 border-l-4 border-dotted border-stone-700 ml-8 my-2 mr-2">
        {editions.map((e, i) => {
          const latest = i === 0;
          return (
            <li key={e.date} className="relative pl-6">
              {/* Spine marker */}
              <span
                aria-hidden="true"
                className={`absolute -left-[34px] top-1 w-4 h-4 border-2 border-black ${
                  latest ? "bg-red-600" : "bg-[#f5f1e6]"
                }`}
              />
              <div className="flex flex-wrap items-center gap-2">
                <time className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500">
                  {e.date}
                </time>
                {latest && (
                  <span className="rotate-[-3deg] border-2 border-red-600 text-red-600 px-1.5 py-px text-[8px] font-black uppercase tracking-[0.2em]">
                    Latest
                  </span>
                )}
              </div>
              <h3 className="text-sm font-black uppercase tracking-wide mt-1 leading-snug">
                {e.headline}
              </h3>
              <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                {e.summary}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="border-t-4 border-black text-center py-2 text-[9px] uppercase tracking-[0.3em] text-stone-500">
        ★ All editions on file · Microfiche available ★
      </div>
    </div>
  );
};

export default NewspaperTimeline;
