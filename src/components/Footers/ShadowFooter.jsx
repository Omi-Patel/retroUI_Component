// VHS end-credits footer — scanlines, tracking bar, and a "be kind, rewind" sticker.
const ShadowFooter = () => {
  const year = new Date().getFullYear();
  const credits = [
    ["DIRECTED BY", "RetroBrand Studio"],
    ["PRODUCED BY", "The Internet, 1997"],
    ["SET DESIGN", "Cardboard & Duct Tape"],
    ["SOUNDTRACK", "Dial-Up Modem Choir"],
  ];
  const links = ["Privacy", "Terms", "Contact", "FAQ"];

  return (
    <footer className="relative bg-black text-stone-300 font-mono overflow-hidden">
      {/* Scanlines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 3px)",
        }}
      />

      {/* VCR status bar */}
      <div className="relative flex items-center justify-between px-5 py-2 border-b border-stone-700 text-[10px] tracking-[0.25em] text-stone-400">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-[vhs-blink_1.2s_steps(1)_infinite]" aria-hidden="true" />
          <span className="text-red-400 font-bold">REC</span>
          <span className="hidden sm:inline">· SLP 0:00:00</span>
        </span>
        <span aria-hidden="true">▶ PLAY</span>
        <span className="inline-flex items-center gap-1.5">
          TRACKING
          <span aria-hidden="true" className="text-stone-500">▓▓▓░░</span>
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Rolling credits */}
          <div>
            <p className="text-[10px] tracking-[0.4em] text-stone-500 mb-4">— END CREDITS —</p>
            <dl className="space-y-3">
              {credits.map(([role, name]) => (
                <div key={role} className="flex flex-col">
                  <dt className="text-[9px] tracking-[0.35em] text-stone-500">{role}</dt>
                  <dd className="text-[13px] font-bold tracking-[0.1em] text-stone-100 uppercase">
                    {name}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Links + rewind sticker */}
          <div className="flex flex-col items-start sm:items-end gap-6">
            <div
              className="px-4 py-2 bg-yellow-300 text-black border-2 border-black shadow-[4px_4px_0_0_rgba(255,255,255,0.25)] rotate-[-3deg] text-[11px] font-black uppercase tracking-[0.15em]"
            >
              ⟲ Be kind · Please rewind
            </div>
            <nav aria-label="Footer">
              <ul className="flex flex-col items-start sm:items-end gap-1.5">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-stone-400 hover:text-stone-100 transition-colors"
                    >
                      <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 text-red-400 transition-opacity">
                        ▸
                      </span>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Color bars sign-off */}
        <div aria-hidden="true" className="mt-10 flex h-2.5 border border-stone-700">
          {["#c0c0c0", "#c0c000", "#00c0c0", "#00c000", "#c000c0", "#c00000", "#0000c0"].map((c) => (
            <span key={c} className="flex-1" style={{ background: c }} />
          ))}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] tracking-[0.3em] text-stone-500 uppercase">
          <p>© {year} RetroBrand · Recorded in EP mode</p>
          <p aria-hidden="true">◼ STOP</p>
        </div>
      </div>

      <style>{`
        @keyframes vhs-blink {
          0%, 60% { opacity: 1; }
          61%, 100% { opacity: 0.15; }
        }
      `}</style>
    </footer>
  );
};

export default ShadowFooter;
