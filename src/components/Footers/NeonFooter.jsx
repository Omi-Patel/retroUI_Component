import { Twitter, Instagram, Github } from "lucide-react";

// Neon diner sign footer — buzzing tube letters, a flickering "A", open 24 hrs.
const NeonFooter = () => {
  const year = new Date().getFullYear();
  const columns = [
    { title: "Menu", links: ["Home", "About", "Components"] },
    { title: "Late Night", links: ["Features", "Pricing", "Support"] },
  ];

  return (
    <footer className="relative bg-[#0a0a14] text-stone-300 font-mono overflow-hidden">
      {/* Night-sky glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(244,114,182,0.12), transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-12">
        {/* The sign */}
        <div className="text-center mb-10">
          <p
            className="text-2xl sm:text-4xl font-black tracking-[0.3em] uppercase text-pink-400 select-none"
            style={{ textShadow: "0 0 6px #f472b6, 0 0 20px #f472b6, 0 0 45px rgba(244,114,182,0.6)" }}
          >
            RETRO&nbsp;W
            <span
              className="animate-[neon-flicker_4s_linear_infinite]"
              style={{ textShadow: "inherit" }}
            >
              A
            </span>
            VE
          </p>
          <div
            className="inline-block mt-4 px-4 py-1 rounded-full border-2 border-cyan-300 text-cyan-300 text-[11px] font-bold tracking-[0.4em] uppercase"
            style={{
              boxShadow: "0 0 8px rgba(103,232,249,0.6), inset 0 0 8px rgba(103,232,249,0.4)",
              textShadow: "0 0 8px #67e8f9",
            }}
          >
            Open 24 hrs
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 max-w-2xl mx-auto">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-stone-500 mb-3">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 text-[13px] tracking-[0.1em] text-stone-400 hover:text-cyan-300 transition-colors"
                      style={{ textShadow: "none" }}
                    >
                      <span
                        aria-hidden="true"
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-300"
                      >
                        →
                      </span>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Social tubes */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-stone-500 mb-3">
              Transmissions
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, label: "Twitter", glow: "#67e8f9" },
                { Icon: Instagram, label: "Instagram", glow: "#f472b6" },
                { Icon: Github, label: "GitHub", glow: "#a3e635" },
              ].map(({ Icon, label, glow }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all hover:scale-105"
                  style={{ borderColor: glow, color: glow, boxShadow: `0 0 10px ${glow}55, inset 0 0 6px ${glow}33` }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Curb line */}
        <div
          aria-hidden="true"
          className="mt-12 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(244,114,182,0.5), transparent)" }}
        />
        <p className="mt-4 text-center text-[10px] tracking-[0.35em] uppercase text-stone-500">
          © {year} RetroWave Diner · Corner of Sunset &amp; VHS · Est. 1985
        </p>
      </div>

      <style>{`
        @keyframes neon-flicker {
          0%, 6%, 10%, 100% { opacity: 1; }
          7%, 9% { opacity: 0.25; }
          48%, 52% { opacity: 1; }
          50% { opacity: 0.4; }
          83% { opacity: 1; }
          84% { opacity: 0.3; }
          85% { opacity: 1; }
        }
      `}</style>
    </footer>
  );
};

export default NeonFooter;
