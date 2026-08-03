// Green-phosphor terminal login — CRT glow, blinking cursor, keyboard-first.
const TerminalSignIn = () => {
  return (
    <div className="w-full max-w-sm bg-black text-green-400 border-2 border-green-400 font-mono shadow-[0_0_30px_rgba(74,222,128,0.35)]">
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-green-400/40 bg-green-400/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
          <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
        </div>
        <p className="text-[11px] opacity-70">~/auth/login.sh</p>
      </div>

      <form className="p-5 text-sm space-y-4">
        <div className="space-y-1 text-[12px] opacity-70">
          <p>{">"} RETRO-OS v4.2 · SECURE SHELL</p>
          <p>
            {">"} Authentication required
            <span className="animate-pulse">_</span>
          </p>
        </div>

        <div>
          <label
            htmlFor="terminal-user"
            className="block text-[11px] uppercase tracking-[0.2em] opacity-70 mb-1"
          >
            $ user:
          </label>
          <input
            id="terminal-user"
            type="text"
            autoComplete="username"
            placeholder="guest"
            className="w-full bg-black text-green-300 text-sm px-3 py-2 border border-green-400/60 focus:border-green-300 focus:outline-none focus:shadow-[0_0_10px_rgba(74,222,128,0.4)] placeholder:text-green-700"
          />
        </div>

        <div>
          <label
            htmlFor="terminal-pass"
            className="block text-[11px] uppercase tracking-[0.2em] opacity-70 mb-1"
          >
            $ password:
          </label>
          <input
            id="terminal-pass"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full bg-black text-green-300 text-sm px-3 py-2 border border-green-400/60 focus:border-green-300 focus:outline-none focus:shadow-[0_0_10px_rgba(74,222,128,0.4)] placeholder:text-green-700"
          />
        </div>

        <div className="flex gap-2 pt-1">
          <button
            type="submit"
            className="flex-1 px-4 py-2 text-xs font-bold border border-green-400 bg-green-400 text-black hover:bg-green-300 transition-colors"
          >
            [LOGIN]
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs font-bold border border-green-400 hover:bg-green-400 hover:text-black transition-colors"
          >
            [GUEST]
          </button>
        </div>

        <p className="text-[10px] opacity-50 pt-1">
          {">"} 3 attempts remaining · session logged
        </p>
      </form>
    </div>
  );
};

export default TerminalSignIn;
