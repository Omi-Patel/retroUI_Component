import { Twitter, Instagram, Github } from "lucide-react";

// Arcade game-over footer — score bar, level-select links, pixel hearts,
// and a blinking PRESS START.
const PixelHeart = ({ dead = false }) => (
  <span aria-hidden="true" className="inline-grid grid-cols-7 gap-[1px] w-[21px]">
    {[
      0,1,1,0,1,1,0,
      1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,
      0,1,1,1,1,1,0,
      0,0,1,1,1,0,0,
      0,0,0,1,0,0,0,
    ].map((c, i) => (
      <span
        key={i}
        className="w-[3px] h-[3px]"
        style={{ background: c ? (dead ? "#3f3f5e" : "#ef4444") : "transparent" }}
      />
    ))}
  </span>
);

const PixelFooter = () => {
  const worlds = [
    { code: "1-1", label: "Home" },
    { code: "1-2", label: "About" },
    { code: "2-1", label: "Services" },
    { code: "2-2", label: "Docs" },
    { code: "3-1", label: "Support" },
    { code: "3-2", label: "Contact" },
  ];

  return (
    <footer className="bg-[#0f0f23] text-stone-200 font-mono border-t-4 border-[#facc15]">
      {/* Score bar */}
      <div className="flex items-center justify-between px-5 py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#facc15] border-b-2 border-[#2a2a4a] uppercase">
        <span>1UP&nbsp;&nbsp;006200</span>
        <span className="hidden sm:inline text-stone-400">HI-SCORE&nbsp;&nbsp;999999</span>
        <span className="inline-flex items-center gap-1.5">
          <PixelHeart />
          <PixelHeart />
          <PixelHeart dead />
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Logo */}
          <div>
            <div aria-hidden="true" className="grid grid-cols-4 gap-[3px] w-14 mb-4">
              {[1,1,1,1, 1,0,0,1, 1,0,0,1, 1,1,1,1].map((c, i) => (
                <span
                  key={i}
                  className="w-3 h-3"
                  style={{ background: c ? "#facc15" : "#2a2a4a" }}
                />
              ))}
            </div>
            <p className="text-xl font-black tracking-[0.25em] text-[#facc15] uppercase">
              PixelTech
            </p>
            <p className="text-[10px] tracking-[0.2em] text-stone-400 mt-2 leading-relaxed uppercase">
              8 bits of everything.
              <br />
              No continues required.
            </p>
          </div>

          {/* Level select */}
          <nav aria-label="Footer">
            <p className="text-[10px] font-bold tracking-[0.35em] text-stone-400 uppercase mb-3">
              ★ Select World
            </p>
            <ul className="space-y-1.5">
              {worlds.map((w) => (
                <li key={w.code}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2.5 text-[12px] font-bold tracking-[0.15em] uppercase text-stone-300 hover:text-[#facc15] transition-colors"
                  >
                    <span
                      aria-hidden="true"
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#facc15]"
                    >
                      ▶
                    </span>
                    <span className="text-stone-500 group-hover:text-stone-300">
                      {w.code}
                    </span>
                    {w.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Insert coin */}
          <div className="flex flex-col items-start sm:items-end gap-4">
            <p className="text-[13px] font-black tracking-[0.25em] text-[#4ade80] uppercase animate-[pixel-blink_1.1s_steps(1)_infinite]">
              ▸ Press Start
            </p>
            <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase">
              Credits 03
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-10 h-10 bg-[#1a1a35] text-stone-300 border-2 border-[#3f3f5e] shadow-[3px_3px_0_0_#000] hover:border-[#facc15] hover:text-[#facc15] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Ground tiles */}
        <div aria-hidden="true" className="mt-10 flex gap-[3px]">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="flex-1 h-2.5 bg-[#2a2a4a] border-t-2 border-[#3f3f5e]" />
          ))}
        </div>

        <p className="mt-4 text-center text-[9px] tracking-[0.3em] text-stone-500 uppercase">
          © 1987–{new Date().getFullYear()} PixelTech Co. · Licensed by Nostalgia · Game over, come back soon
        </p>
      </div>

      <style>{`
        @keyframes pixel-blink {
          0%, 55% { opacity: 1; }
          56%, 100% { opacity: 0.1; }
        }
      `}</style>
    </footer>
  );
};

export default PixelFooter;
