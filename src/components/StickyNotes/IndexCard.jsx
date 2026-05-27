const IndexCard = () => {
  return (
    <div
      className="relative inline-block w-64 h-44 bg-[#fdf6e3] border border-stone-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] overflow-hidden"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0px, transparent 23px, #c5cae0 23px, #c5cae0 24px)",
        backgroundPosition: "0 32px",
      }}
    >
      {/* Red margin line */}
      <span
        aria-hidden="true"
        className="absolute left-10 top-0 bottom-0 w-px bg-red-400/70"
      />
      {/* Title row */}
      <div className="px-3 py-2 border-b border-stone-300 bg-stone-50/40">
        <p className="font-mono text-[11px] uppercase tracking-widest text-stone-600">
          INDEX · 042
        </p>
      </div>
      {/* Body */}
      <div className="pl-12 pr-3 pt-2 text-stone-800 text-[14px] leading-[24px]" style={{ fontFamily: '"Instrument Serif", serif' }}>
        <p>The medium is the message.</p>
        <p className="italic text-stone-500">— M. McLuhan</p>
      </div>
    </div>
  );
};

export default IndexCard;
