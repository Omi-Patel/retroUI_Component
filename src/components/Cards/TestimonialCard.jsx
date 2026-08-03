// Letters-to-the-editor testimonial — drop cap, typed body, and a verified stamp.
const TestimonialCard = () => {
  return (
    <div className="relative w-80 bg-[#f5f1e6] text-stone-900 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1814] hover:shadow-[8px_8px_0_0_#1c1814] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all font-mono">
      {/* Verified stamp */}
      <span className="absolute -top-3 -right-3 px-2 py-1 bg-[#f5f1e6] border-2 border-red-700 text-red-700 text-[8px] font-black tracking-[0.2em] uppercase rotate-[8deg]">
        ★ Verified Buyer
      </span>

      {/* Column header */}
      <div className="px-5 pt-4 pb-2 border-b-2 border-stone-900 flex items-baseline justify-between">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase">
          Letters to the Editor
        </span>
        <span className="text-[9px] text-stone-500 tracking-[0.15em]">P. 07</span>
      </div>

      <div className="px-5 py-4">
        {/* Drop-cap quote */}
        <p className="text-[12.5px] leading-relaxed">
          <span
            aria-hidden="true"
            className="float-left mr-2 mt-1 w-9 h-9 bg-stone-900 text-[#f5f1e6] font-serif italic text-2xl flex items-center justify-center"
          >
            "
          </span>
          Dear editors — I pasted one component and my whole site suddenly had
          a personality. My analytics went up. My houseplant perked up.
          Coincidence? I think not.
        </p>

        {/* Rating as inked stars */}
        <div className="mt-4 flex items-center gap-2" role="img" aria-label="Rated 5 out of 5">
          <span aria-hidden="true" className="text-red-700 text-[14px] tracking-[0.3em]">
            ★★★★★
          </span>
          <span className="text-[9px] tracking-[0.2em] uppercase text-stone-500">
            5 / 5 · Would paste again
          </span>
        </div>

        {/* Signature */}
        <div className="mt-4 pt-3 border-t-2 border-dashed border-stone-400 flex items-center justify-between">
          <div>
            <p className="font-serif italic text-[17px] leading-none">Dana K.</p>
            <p className="text-[9px] tracking-[0.25em] uppercase text-stone-500 mt-1">
              Zine Collector · Ohio
            </p>
          </div>
          <span
            aria-hidden="true"
            className="text-[8px] tracking-[0.15em] uppercase text-stone-400 rotate-[-4deg] border border-stone-400 rounded-full px-2 py-1"
          >
            Rec'd MAY 12
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
