// A strip of classic 88×31 web buttons — the badges every 90s homepage wore
// proudly at the bottom of the page.
const BUTTONS = [
  { a: "MADE WITH", b: "NOTEPAD", fg: "#f5f1e6", bg: "#1f1b16", accent: "#e3b762" },
  { a: "BEST VIEWED IN", b: "NETSCAPE", fg: "#e3e6ee", bg: "#1b2a55", accent: "#e07b67" },
  { a: "VALID", b: "HTML 4.0", fg: "#1f1b16", bg: "#7da567", accent: "#1f1b16" },
  { a: "GET", b: "RETROUI", fg: "#1f1b16", bg: "#e07b67", accent: "#1f1b16" },
];

const ClassicButtonStrip = () => {
  return (
    <div className="flex flex-wrap gap-2 p-4 bg-[#cfc7b3] border-4 border-black shadow-[8px_8px_0px_0px_black] max-w-[420px]">
      {BUTTONS.map((btn) => (
        <div
          key={btn.b}
          className="relative w-[88px] h-[31px] border border-black flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ background: btn.bg, color: btn.fg }}
        >
          <span
            className="absolute inset-0 border-t border-l"
            style={{ borderColor: "rgba(255,255,255,0.35)" }}
          />
          <span className="text-[7px] font-mono uppercase tracking-[0.15em] leading-none">
            {btn.a}
          </span>
          <span
            className="text-[11px] font-black uppercase leading-none mt-0.5"
            style={{ color: btn.accent }}
          >
            {btn.b}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ClassicButtonStrip;
