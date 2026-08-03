// No-results classified — the want ads have nothing under that heading.
const suggestions = [
  "Check your spelling",
  "Try fewer words",
  "Search a broader category",
  "Browse the full listings instead",
];

const NoResultsClassified = () => {
  return (
    <div className="w-full max-w-md bg-[#f5f1e6] text-stone-900 border-4 border-black shadow-[6px_6px_0_0_black] font-mono">
      {/* Section masthead */}
      <div className="flex items-center justify-between border-b-4 border-double border-black px-5 py-3">
        <h2 className="text-lg font-black uppercase tracking-tight">
          Classifieds
        </h2>
        <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500">
          Section F · Page 12
        </p>
      </div>

      <div className="p-5">
        {/* The ad box */}
        <div className="relative border-2 border-black bg-white px-5 py-6 text-center">
          <span
            aria-hidden="true"
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-500"
          >
            ── Lost &amp; Found ──
          </span>

          <h3 className="text-base font-black uppercase tracking-wide leading-snug">
            No Ads Match
            <br />
            Your Search
          </h3>
          <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mt-2">
            0 results · 0 column inches
          </p>

          <ul className="mt-4 text-left text-[11px] leading-relaxed border-t-2 border-dashed border-stone-400 pt-3 space-y-1.5">
            {suggestions.map((s) => (
              <li key={s} className="flex gap-2">
                <span aria-hidden="true" className="text-red-600 font-black">
                  ☞
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <span
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 rotate-[8deg] border-2 border-red-600 text-red-600 bg-white px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.25em]"
          >
            Unsold
          </span>
        </div>

        <button
          type="button"
          className="mt-5 w-full py-2.5 bg-black text-[#f5f1e6] text-[11px] font-black uppercase tracking-[0.25em] border-2 border-black hover:bg-[#f5f1e6] hover:text-black transition-colors"
        >
          × Clear search
        </button>
      </div>

      <div className="border-t-4 border-black text-center py-2 text-[9px] uppercase tracking-[0.3em] text-stone-500">
        ★ Place your own ad · 5¢ a word ★
      </div>
    </div>
  );
};

export default NoResultsClassified;
