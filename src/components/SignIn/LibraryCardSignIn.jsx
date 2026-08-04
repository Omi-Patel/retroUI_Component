// Library card sign-in — a manila checkout card with ruled lines and a date stamp.
const LibraryCardSignIn = () => {
  return (
    <div className="w-full max-w-sm bg-[#f7f0dc] text-stone-900 border-2 border-stone-800 shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] font-mono relative">
      {/* Date stamp */}
      <div className="absolute top-3 right-3 rotate-[6deg] border-2 border-red-700 text-red-700 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em]">
        DUE · SEP 04
      </div>

      <div className="px-6 pt-6 pb-2 border-b-2 border-stone-800">
        <p className="text-[9px] uppercase tracking-[0.35em] text-stone-500">
          Public Library · Est. 1962
        </p>
        <h1 className="text-2xl font-bold uppercase tracking-tight mt-1">
          Member Sign-In
        </h1>
      </div>

      <form className="px-6 py-5 space-y-5">
        <div>
          <label
            htmlFor="library-card-no"
            className="block text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-1"
          >
            Card Number
          </label>
          <input
            id="library-card-no"
            type="text"
            inputMode="numeric"
            autoComplete="username"
            placeholder="0042 1997 0301"
            className="w-full bg-transparent text-sm tracking-[0.15em] px-1 py-1.5 border-0 border-b-2 border-dashed border-stone-500 focus:border-solid focus:border-stone-900 focus:outline-none placeholder:text-stone-400"
          />
        </div>

        <div>
          <label
            htmlFor="library-pin"
            className="block text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-1"
          >
            PIN
          </label>
          <input
            id="library-pin"
            type="password"
            autoComplete="current-password"
            placeholder="••••"
            className="w-full bg-transparent text-sm tracking-[0.3em] px-1 py-1.5 border-0 border-b-2 border-dashed border-stone-500 focus:border-solid focus:border-stone-900 focus:outline-none placeholder:text-stone-400"
          />
        </div>

        <label className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider cursor-pointer">
          <input type="checkbox" className="w-3.5 h-3.5 accent-stone-800" />
          <span>Keep my card on file</span>
        </label>

        <button
          type="submit"
          className="w-full py-2.5 bg-stone-800 text-[#f7f0dc] text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-stone-800 hover:bg-[#f7f0dc] hover:text-stone-800 transition-colors"
        >
          Check In
        </button>
      </form>

      <footer className="border-t border-dashed border-stone-500 px-6 py-3 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-stone-500">
        <span>Quiet please</span>
        <a href="#" className="underline underline-offset-2 hover:text-stone-900">
          Lost your card?
        </a>
      </footer>
    </div>
  );
};

export default LibraryCardSignIn;
