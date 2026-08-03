// Arcade cabinet login — insert coin, pick your player, hit START.
const ArcadeSignIn = () => {
  return (
    <div className="w-full max-w-sm bg-stone-900 border-4 border-black shadow-[8px_8px_0px_0px_black] font-mono text-lime-300">
      {/* Marquee header */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 border-b-4 border-black px-5 py-3 text-center">
        <h1 className="text-xl font-black uppercase tracking-[0.2em] text-white [text-shadow:2px_2px_0_black]">
          Player Login
        </h1>
        <p className="text-[10px] font-bold tracking-[0.3em] text-black mt-0.5">
          ★ INSERT COIN TO CONTINUE ★
        </p>
      </div>

      <form className="p-5 space-y-4">
        <div>
          <label
            htmlFor="arcade-handle"
            className="block text-[10px] font-black uppercase tracking-[0.25em] mb-1.5"
          >
            ▣ Handle
          </label>
          <input
            id="arcade-handle"
            type="text"
            autoComplete="username"
            maxLength={8}
            placeholder="AAA"
            className="w-full bg-black text-lime-300 text-lg tracking-[0.4em] uppercase px-3 py-2 border-4 border-lime-400/60 focus:border-lime-300 focus:outline-none placeholder:text-lime-800"
          />
        </div>

        <div>
          <label
            htmlFor="arcade-code"
            className="block text-[10px] font-black uppercase tracking-[0.25em] mb-1.5"
          >
            ▣ Secret Code
          </label>
          <input
            id="arcade-code"
            type="password"
            autoComplete="current-password"
            placeholder="••••"
            className="w-full bg-black text-lime-300 text-lg tracking-[0.4em] px-3 py-2 border-4 border-lime-400/60 focus:border-lime-300 focus:outline-none placeholder:text-lime-800"
          />
          <p className="mt-1 text-[9px] uppercase tracking-widest opacity-50">
            Hint: ↑ ↑ ↓ ↓ ← → ← → B A
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-yellow-300 text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.6)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.6)] transition-all font-black uppercase tracking-[0.25em] text-sm animate-pulse hover:animate-none"
        >
          ▶ Press Start
        </button>

        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest opacity-60 pt-1">
          <span>Credits: 01</span>
          <a href="#" className="underline underline-offset-2 hover:opacity-100">
            New challenger?
          </a>
        </div>
      </form>
    </div>
  );
};

export default ArcadeSignIn;
