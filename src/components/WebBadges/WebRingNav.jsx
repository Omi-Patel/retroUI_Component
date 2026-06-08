// A webring navigator — the cooperative 90s answer to discovery, chaining
// sites together with Prev / Hub / Next links and a member tally.
const WebRingNav = () => {
  return (
    <div className="w-[300px] bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] font-mono">
      {/* Title bar */}
      <div className="flex items-center justify-between bg-black text-[#f5f1e6] px-3 py-1.5">
        <span className="text-[11px] font-black uppercase tracking-[0.2em]">
          ◈ The Retro Ring
        </span>
        <span className="text-[9px] opacity-70">#042</span>
      </div>

      {/* Nav row */}
      <div className="flex items-stretch divide-x-2 divide-black border-b-2 border-black">
        <button className="flex-1 py-2 text-[11px] font-black uppercase tracking-wide text-black hover:bg-[#e07b67] transition-colors">
          ◄ Prev
        </button>
        <button className="px-3 py-2 text-[11px] font-black uppercase tracking-wide text-black hover:bg-[#e3b762] transition-colors">
          Random
        </button>
        <button className="flex-1 py-2 text-[11px] font-black uppercase tracking-wide text-black hover:bg-[#7da567] transition-colors">
          Next ►
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-[9px] uppercase tracking-[0.15em] text-black/60">
          List · Join · Hub
        </span>
        <span className="text-[9px] uppercase tracking-[0.15em] text-black/60">
          128 sites
        </span>
      </div>
    </div>
  );
};

export default WebRingNav;
