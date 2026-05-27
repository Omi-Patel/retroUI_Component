const TapedMemo = () => {
  return (
    <div className="relative inline-block w-56 pt-4">
      {/* Tape left */}
      <span
        aria-hidden="true"
        className="absolute -top-1 left-3 w-14 h-5 bg-stone-200/70 border border-stone-300/60 rotate-[-8deg] shadow-sm"
      />
      {/* Tape right */}
      <span
        aria-hidden="true"
        className="absolute -top-1 right-3 w-14 h-5 bg-stone-200/70 border border-stone-300/60 rotate-[6deg] shadow-sm"
      />
      <div className="bg-white border border-stone-200 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.12)]">
        <p className="font-mono text-[10px] tracking-widest uppercase text-red-600 mb-2">
          MEMO · do not remove
        </p>
        <p className="text-stone-800 text-[13.5px] leading-relaxed">
          Out for coffee. Back in <span className="font-semibold">15 min</span>. Take a number, leave a note.
        </p>
        <p className="mt-3 font-mono text-[10px] text-stone-500">— J.</p>
      </div>
    </div>
  );
};

export default TapedMemo;
