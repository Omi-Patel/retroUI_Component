import { useState } from "react";

// CRT log editor — nano on a green phosphor tube, line/col in the status bar.
const TerminalTextarea = () => {
  const [value, setValue] = useState("session start 09:41\n> all systems nominal");
  const [caret, setCaret] = useState({ line: 2, col: 22 });

  const updateCaret = (el) => {
    const upToCursor = el.value.slice(0, el.selectionStart);
    const lines = upToCursor.split("\n");
    setCaret({ line: lines.length, col: lines[lines.length - 1].length + 1 });
  };

  return (
    <div className="w-full max-w-md bg-black text-green-400 border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.5)] font-mono">
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-green-900/60 border-b-2 border-green-700">
        <label
          htmlFor="terminal-textarea"
          className="text-[10px] uppercase tracking-[0.25em] text-green-300"
        >
          $ nano notes.txt
        </label>
        <span className="flex items-center gap-1 text-[10px] text-green-300">
          <span
            aria-hidden="true"
            className="inline-block w-2 h-3.5 bg-green-400 animate-[crt-blink_1s_steps(1)_infinite]"
          />
          REC
        </span>
      </div>

      <textarea
        id="terminal-textarea"
        rows={7}
        value={value}
        spellCheck="false"
        onChange={(e) => {
          setValue(e.target.value);
          updateCaret(e.target);
        }}
        onSelect={(e) => updateCaret(e.target)}
        placeholder="// start typing your log…"
        className="w-full resize-none bg-black text-green-400 text-sm leading-6 px-3 py-2 placeholder:text-green-900 caret-green-300 selection:bg-green-400 selection:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-inset"
      />

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-green-900/60 border-t-2 border-green-700 text-[10px] uppercase tracking-[0.2em] text-green-300">
        <span>^O write · ^X exit</span>
        <span className="tabular-nums" aria-live="polite">
          Ln {caret.line}, Col {caret.col}
        </span>
      </div>

      <style>{`
        @keyframes crt-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TerminalTextarea;
