// "Blinkies" — the tiny flashing pixel badges that tiled across personal
// homepages and guestbooks. Pure CSS keyframes, no GIFs required.
const BlinkieBadge = () => {
  return (
    <div className="flex flex-col gap-3 items-start font-mono">
      <style>{`
        @keyframes blinkieFlash { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0.15 } }
        @keyframes blinkieHue { 0% { color: #ff4fa3 } 33% { color: #39ff14 } 66% { color: #43d9ff } 100% { color: #ff4fa3 } }
        @keyframes blinkieSlide { 0% { background-position: 0 0 } 100% { background-position: 16px 0 } }
        .blinkie-star { animation: blinkieFlash 0.6s steps(1) infinite; }
        .blinkie-hue { animation: blinkieHue 1.2s linear infinite; }
        .blinkie-stripes {
          background-image: repeating-linear-gradient(45deg, #2a2a2a 0 4px, #1a1a1a 4px 8px);
          animation: blinkieSlide 0.5s linear infinite;
        }
      `}</style>

      <div className="blinkie-stripes inline-flex items-center gap-1.5 h-[20px] px-2 border border-black shadow-[2px_2px_0_0_black]">
        <span className="blinkie-star text-[#ffd23f] text-[10px] leading-none">★</span>
        <span className="blinkie-hue text-[10px] font-black uppercase tracking-[0.15em] leading-none">
          Sign My Guestbook
        </span>
        <span className="blinkie-star text-[#ffd23f] text-[10px] leading-none">★</span>
      </div>

      <div className="blinkie-stripes inline-flex items-center gap-1.5 h-[20px] px-2 border border-black shadow-[2px_2px_0_0_black]">
        <span className="blinkie-hue text-[10px] font-black uppercase tracking-[0.15em] leading-none">
          ♥ U R Visitor 1337 ♥
        </span>
      </div>

      <div className="blinkie-stripes inline-flex items-center gap-1.5 h-[20px] px-2 border border-black shadow-[2px_2px_0_0_black]">
        <span className="blinkie-star text-[#39ff14] text-[10px] leading-none">▶</span>
        <span className="blinkie-hue text-[10px] font-black uppercase tracking-[0.15em] leading-none">
          Now Playing · MIDI
        </span>
      </div>
    </div>
  );
};

export default BlinkieBadge;
