import { Twitter, Instagram, Github } from "lucide-react";

// Airmail envelope footer — par avion stripes, a perforated stamp, and a postmark.
const airmailStripe = {
  backgroundImage:
    "repeating-linear-gradient(135deg, #b91c1c 0, #b91c1c 14px, #f5f1e6 14px, #f5f1e6 28px, #1e3a8a 28px, #1e3a8a 42px, #f5f1e6 42px, #f5f1e6 56px)",
};

const BorderedFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#f5f1e6] text-stone-900 font-mono overflow-hidden">
      {/* Airmail top stripe */}
      <div aria-hidden="true" className="h-3 border-b-2 border-stone-900" style={airmailStripe} />

      <div className="relative max-w-3xl mx-auto px-6 py-9">
        {/* Postage stamp + postmark */}
        <div aria-hidden="true" className="absolute top-6 right-6 hidden sm:block">
          <div className="relative">
            <div className="w-16 h-20 bg-white p-1 border-2 border-dashed border-stone-400 rotate-[3deg]">
              <div className="w-full h-full bg-[#c2543f] flex flex-col items-center justify-center text-[#f5f1e6]">
                <span className="text-2xl leading-none">✈</span>
                <span className="text-[8px] font-bold tracking-[0.15em] mt-1">AIR MAIL</span>
                <span className="text-[9px] font-black mt-0.5">5¢</span>
              </div>
            </div>
            <div className="absolute -left-10 top-4 w-16 h-16 rounded-full border-2 border-stone-500/70 rotate-[-12deg] flex flex-col items-center justify-center text-stone-500/80">
              <span className="text-[7px] font-bold tracking-[0.2em]">RETRO CITY</span>
              <span className="text-[8px] font-black">{year}</span>
              <span className="text-[7px] tracking-[0.2em]">P.M.</span>
            </div>
          </div>
        </div>

        {/* Return address / brand */}
        <p className="text-[10px] font-bold tracking-[0.35em] uppercase text-red-700 mb-2">
          ✈ Par Avion · Via Air Mail
        </p>
        <h3 className="text-3xl font-black uppercase tracking-tight">
          CreativeBrand
        </h3>
        <p className="text-[11px] tracking-[0.2em] uppercase text-stone-500 mt-1">
          P.O. Box 1997 · Analog District · Retro City
        </p>

        {/* Address-line links */}
        <nav aria-label="Footer" className="mt-6 max-w-md">
          <ul className="space-y-0">
            {["Privacy Policy", "Terms of Service", "Contact", "FAQ"].map((l) => (
              <li key={l} className="border-b border-dashed border-stone-400">
                <a
                  href="#"
                  className="group flex items-baseline justify-between py-2 text-[12px] uppercase tracking-[0.15em] font-bold hover:bg-amber-100/70 transition-colors px-1"
                >
                  <span>{l}</span>
                  <span aria-hidden="true" className="text-stone-400 group-hover:text-red-700 transition-colors">
                    ✎
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social stamps */}
        <div className="mt-6 flex items-center gap-3">
          {[
            { Icon: Twitter, label: "Twitter" },
            { Icon: Instagram, label: "Instagram" },
            { Icon: Github, label: "GitHub" },
          ].map(({ Icon, label }, i) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className={`inline-flex items-center justify-center w-10 h-11 bg-white border-2 border-dashed border-stone-400 hover:border-solid hover:border-stone-900 hover:shadow-[3px_3px_0_0_#1c1814] transition-all ${
                i % 2 ? "rotate-[2deg]" : "rotate-[-2deg]"
              }`}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
          <p className="ml-2 text-[9px] tracking-[0.25em] uppercase text-stone-500">
            First-class correspondence only
          </p>
        </div>

        <p className="mt-7 text-[10px] tracking-[0.3em] uppercase text-stone-500">
          © {year} CreativeBrand · Sealed with nostalgia · No postage necessary
        </p>
      </div>

      {/* Airmail bottom stripe */}
      <div aria-hidden="true" className="h-3 border-t-2 border-stone-900" style={airmailStripe} />
    </footer>
  );
};

export default BorderedFooter;
