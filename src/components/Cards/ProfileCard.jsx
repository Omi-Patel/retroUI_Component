// Membership-card profile — laminated club ID with stats and a barcode.
const ProfileCard = () => {
  return (
    <div className="w-72 bg-[#f5f1e6] text-stone-900 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1814] hover:shadow-[8px_8px_0_0_#1c1814] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all font-mono rotate-[-1deg]">
      {/* Card header */}
      <div className="flex items-center justify-between px-4 py-2 bg-stone-900 text-[#f5f1e6]">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase">
          Retro Club
        </span>
        <span className="text-[9px] tracking-[0.2em]">NO. 0042</span>
      </div>

      <div className="p-4 flex gap-4">
        {/* Photo tile */}
        <div className="relative shrink-0">
          <div
            className="w-20 h-24 bg-[#e07b67] border-2 border-stone-900 flex items-center justify-center"
            aria-hidden="true"
          >
            <span
              className="text-3xl font-black text-[#f5f1e6]"
              style={{ textShadow: "2px 2px 0 #1c1814" }}
            >
              JD
            </span>
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-2 -right-2 px-1.5 py-0.5 bg-[#f5f1e6] border-2 border-red-700 text-red-700 text-[7px] font-black tracking-[0.15em] uppercase rotate-[6deg]"
          >
            Since '97
          </span>
        </div>

        {/* Identity */}
        <div className="min-w-0">
          <h3 className="text-lg font-black uppercase tracking-tight leading-none">
            Jamie Doe
          </h3>
          <p className="text-[10px] tracking-[0.2em] uppercase text-stone-500 mt-1">
            Zine Maker · Lv. 27
          </p>
          <p className="text-[11px] leading-relaxed text-stone-600 mt-2">
            Collects stickers, ships weekly, believes in hard shadows.
          </p>
        </div>
      </div>

      {/* Stats row */}
      <dl className="grid grid-cols-3 border-y-2 border-dashed border-stone-400 text-center">
        {[
          ["Zines", "34"],
          ["Trades", "212"],
          ["Stamps", "1.2k"],
        ].map(([k, v], i) => (
          <div key={k} className={`py-2 ${i > 0 ? "border-l-2 border-dashed border-stone-400" : ""}`}>
            <dd className="text-[15px] font-black leading-none">{v}</dd>
            <dt className="text-[8px] tracking-[0.25em] uppercase text-stone-500 mt-1">{k}</dt>
          </div>
        ))}
      </dl>

      {/* Actions + barcode */}
      <div className="p-4 flex items-center justify-between gap-3">
        <button className="px-4 py-2 bg-stone-900 text-[#f5f1e6] text-[10px] font-black uppercase tracking-[0.25em] border-2 border-stone-900 shadow-[3px_3px_0_0_#948869] hover:bg-[#f5f1e6] hover:text-stone-900 transition-colors">
          + Follow
        </button>
        <div aria-hidden="true" className="flex items-end gap-[2px] h-7">
          {[2, 1, 3, 1, 2, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2].map((w, i) => (
            <span key={i} className="bg-stone-900 h-full" style={{ width: `${w}px` }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
