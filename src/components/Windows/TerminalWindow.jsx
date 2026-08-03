// Shell window — traffic lights, tabbed header, scrollback with blinking cursor.
const scrollback = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "zine-master" },
  { prompt: true, text: "ls ~/mixtapes" },
  { prompt: false, text: "side-a.tape   side-b.tape   secret-demos/" },
  { prompt: true, text: "cat /etc/motd" },
  { prompt: false, text: "Welcome to RetroSH 1.9.97 — rewind responsibly." },
  { prompt: true, text: "make ship" },
  { prompt: false, text: "compiling vibes... done in 0.97s ✔" },
];

const TerminalWindow = () => {
  return (
    <div className="w-full max-w-lg bg-stone-950 border-4 border-black shadow-[8px_8px_0_0_black] font-mono overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 bg-stone-800 border-b-2 border-black px-3 py-2">
        <div className="flex items-center gap-1.5">
          <button
            aria-label="Close terminal"
            className="w-3 h-3 rounded-full bg-red-500 border border-black hover:brightness-125 transition-all"
          />
          <button
            aria-label="Minimize terminal"
            className="w-3 h-3 rounded-full bg-yellow-400 border border-black hover:brightness-125 transition-all"
          />
          <button
            aria-label="Maximize terminal"
            className="w-3 h-3 rounded-full bg-lime-500 border border-black hover:brightness-125 transition-all"
          />
        </div>
        {/* Tab */}
        <div className="ml-3 flex items-center gap-2 bg-stone-950 border border-stone-600 px-3 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400" aria-hidden="true" />
          <span className="text-[10px] text-stone-300 tracking-wider">bash · 80×24</span>
        </div>
        <span className="ml-auto text-[9px] uppercase tracking-[0.25em] text-stone-500">
          tty01
        </span>
      </div>

      {/* Scrollback */}
      <div className="p-4 text-[12px] leading-relaxed">
        {scrollback.map((line, i) =>
          line.prompt ? (
            <p key={i} className="text-lime-400">
              <span className="text-fuchsia-400">zine@retroui</span>
              <span className="text-stone-500">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-stone-400">$ </span>
              <span className="text-stone-100">{line.text}</span>
            </p>
          ) : (
            <p key={i} className="text-stone-400">
              {line.text}
            </p>
          )
        )}

        {/* Live input line */}
        <p className="text-lime-400 mt-1">
          <span className="text-fuchsia-400">zine@retroui</span>
          <span className="text-stone-500">:</span>
          <span className="text-cyan-400">~</span>
          <span className="text-stone-400">$ </span>
          <span
            aria-hidden="true"
            className="inline-block w-[7px] h-[14px] align-middle bg-lime-400 animate-[terminal-blink_1s_step-end_infinite]"
          />
        </p>
      </div>

      {/* Status strip */}
      <div className="border-t-2 border-stone-700 px-3 py-1 flex justify-between text-[9px] uppercase tracking-[0.25em] text-stone-600">
        <span>RetroSH 1.9.97</span>
        <span>UTF-8 · 9600 baud</span>
      </div>

      <style>{`
        @keyframes terminal-blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TerminalWindow;
