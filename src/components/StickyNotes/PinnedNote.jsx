const PinnedNote = () => {
  return (
    <div className="relative inline-block pt-3">
      {/* Thumbtack */}
      <span
        aria-hidden="true"
        className="absolute -top-1 left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-red-600 border border-red-700 shadow-md"
      >
        <span className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/60" />
      </span>
      <div className="w-48 bg-lime-100 border border-lime-200/80 p-4 pt-6 rotate-2 shadow-[5px_5px_10px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:rotate-0">
        <p className="font-mono text-[10px] uppercase tracking-widest text-lime-800/70 mb-1.5">
          To Do · today
        </p>
        <ul className="text-stone-800 text-[13.5px] leading-7 space-y-0">
          <li className="line-through text-stone-400">water plants</li>
          <li>mail postcards</li>
          <li>print contact sheet</li>
        </ul>
      </div>
    </div>
  );
};

export default PinnedNote;
