// Empty file drawer — the cabinet is open and there is nothing inside.
const EmptyDrawerState = () => {
  return (
    <div className="w-full max-w-sm bg-[#f5f1e6] text-stone-900 border-4 border-black shadow-[6px_6px_0_0_black] font-mono text-center">
      <p className="border-b-2 border-dashed border-stone-400 py-2 text-[9px] uppercase tracking-[0.35em] text-stone-500">
        Records Dept. · Cabinet 04
      </p>

      {/* File-drawer illustration */}
      <div aria-hidden="true" className="px-10 pt-8 pb-2">
        <div className="mx-auto w-40">
          {/* Cabinet body */}
          <div className="border-4 border-black bg-stone-300 p-2">
            {/* Open drawer, pulled forward */}
            <div className="relative border-2 border-black bg-amber-100 h-16 shadow-[3px_3px_0_0_rgba(0,0,0,0.35)]">
              {/* Label plate */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2 w-16 h-5 border-2 border-black bg-white flex items-center justify-center">
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-stone-400">
                  A–Z
                </span>
              </div>
              {/* Handle */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-10 h-2 border-2 border-black bg-stone-700 rounded-full" />
            </div>
            {/* Empty cavity behind */}
            <div className="border-2 border-black border-t-0 bg-stone-800 h-8 flex items-center justify-center">
              <span className="text-[8px] uppercase tracking-[0.3em] text-stone-500">
                · · empty · ·
              </span>
            </div>
          </div>
          {/* Cabinet feet */}
          <div className="flex justify-between px-3">
            <div className="w-2.5 h-2 bg-black" />
            <div className="w-2.5 h-2 bg-black" />
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <h2 className="text-xl font-black uppercase tracking-tight mt-2">
          Nothing Filed Yet
        </h2>
        <p className="text-[11px] text-stone-600 mt-2 leading-relaxed">
          This drawer is spotless. File your first document and we&apos;ll keep
          it in alphabetical order.
        </p>
        <button
          type="button"
          className="mt-5 w-full py-2.5 bg-black text-[#f5f1e6] text-[11px] font-black uppercase tracking-[0.25em] border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] hover:bg-red-600 hover:border-red-600 transition-colors"
        >
          + File your first document
        </button>
      </div>
    </div>
  );
};

export default EmptyDrawerState;
