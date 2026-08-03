// Classified-flyer service card — want-ad copy with tear-off phone tabs.
const ServiceCard = () => {
  return (
    <div className="w-72 bg-[#f5f1e6] text-stone-900 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1814] hover:shadow-[8px_8px_0_0_#1c1814] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all font-mono">
      {/* Section header */}
      <div className="px-4 py-1.5 border-b-2 border-stone-900 flex items-center justify-between text-[9px] font-bold tracking-[0.3em] uppercase">
        <span>Services Offered</span>
        <span className="text-stone-500">Ad #114</span>
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-black uppercase tracking-tight leading-none">
          Web Dev,
          <br />
          Retro Style
        </h3>
        <p className="text-[11.5px] leading-relaxed text-stone-600 mt-2">
          Fast sites, hard shadows, zero cookies. House calls since 1997 —
          satisfaction stamped or your nickel back.
        </p>

        <ul className="mt-3 space-y-1.5 text-[11px]">
          {["Pixel-perfect builds", "Same-week delivery", "Free consultation"].map((f) => (
            <li key={f} className="flex items-baseline gap-2">
              <span aria-hidden="true" className="text-stone-400">☞</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-stone-400 pt-3">
          <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500">
            Rates from
          </span>
          <span className="px-2 py-0.5 bg-yellow-300 border-2 border-stone-900 text-[13px] font-black rotate-[2deg]">
            $99
          </span>
        </div>
      </div>

      {/* Tear-off phone tabs */}
      <div className="border-t-2 border-dashed border-stone-500 flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`flex-1 py-2 border-l border-dashed border-stone-500 first:border-l-0 text-center hover:bg-yellow-100 transition-colors cursor-pointer ${
              i === 3 ? "opacity-0" : ""
            }`}
          >
            <span
              className="inline-block text-[8px] tracking-[0.05em] text-stone-600"
              style={{ writingMode: "vertical-rl" }}
            >
              555-0134
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
