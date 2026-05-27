import { ArrowUpRight, Plus, Sparkles } from "lucide-react";

const services = [
  {
    letter: "A.",
    name: "Brand & Identity",
    italic: "logos, marks, the whole alphabet",
    price: "from $4,800",
    desc: "Wordmarks, monograms, and supporting systems. A finished kit, not a moodboard.",
    tags: ["logo", "type", "color", "guidelines"],
    eta: "4–6 wks",
    house: true,
  },
  {
    letter: "B.",
    name: "Editorial Design",
    italic: "zines, books, broadsheets",
    price: "from $2,200",
    desc: "Long-form layout for print and web. We typeset, we proof, we mind the widows.",
    tags: ["layout", "typesetting", "print-ready"],
    eta: "3–5 wks",
  },
  {
    letter: "C.",
    name: "Packaging",
    italic: "boxes, labels, stickers",
    price: "from $3,400",
    desc: "Small-run packaging for makers and shops. Diecut templates, mockups, dieline-ready files.",
    tags: ["packaging", "stickers", "diecut"],
    eta: "5–7 wks",
  },
  {
    letter: "D.",
    name: "Web & App UI",
    italic: "interface design, no slop",
    price: "from $5,200",
    desc: "Marketing sites and product UIs with the same care we put into a printed page.",
    tags: ["ui", "design system", "prototype"],
    eta: "6–10 wks",
    house: true,
  },
  {
    letter: "E.",
    name: "Photography Direction",
    italic: "make the pictures look like you",
    price: "from $1,800",
    desc: "Shot list, mood, location, and on-set direction. We don't push the shutter — we make the call sheet.",
    tags: ["art direction", "shot list", "styling"],
    eta: "2–4 wks",
  },
  {
    letter: "F.",
    name: "Studio Workshops",
    italic: "an afternoon in our kitchen",
    price: "$320 / seat",
    desc: "Half-day workshops on letterpress, paste-up, and zine binding. Limited to six.",
    tags: ["workshop", "in-person", "letterpress"],
    eta: "monthly",
  },
];

const MenuServices = () => {
  return (
    <div
      className="bg-[#fefbf2] text-stone-900 min-h-screen"
      style={{ fontFamily: '"Space Grotesk", ui-sans-serif, system-ui' }}
    >
      {/* Letterhead bar */}
      <div className="border-b-2 border-stone-900 bg-[#ede7d6]">
        <div className="mx-auto max-w-[1240px] px-6 py-3 flex items-center justify-between font-mono text-[11px] tracking-[0.25em] uppercase">
          <span>RETROUI · STUDIO</span>
          <span className="hidden sm:inline">List of services · MMXXVI</span>
          <span className="text-amber-800">Tues — Sat, by appt.</span>
        </div>
      </div>

      {/* Masthead */}
      <header className="border-b-2 border-stone-900 px-6 py-16">
        <div className="mx-auto max-w-[1240px] text-center">
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-amber-800 mb-5">
            ◇ A specimen of work, on offer ◇
          </p>
          <h1 className="text-[60px] sm:text-[104px] leading-[0.9] tracking-[-0.045em] font-bold">
            The{" "}
            <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400, color: "#b45309" }}>
              menu
            </span>
            , at a glance.
          </h1>
          <p className="mt-7 text-[16px] leading-[1.7] max-w-2xl mx-auto text-stone-700">
            Six things we do well, and nothing we don&apos;t. Pricing below is a
            floor — every project gets a fixed quote after a short call.
          </p>
          <div className="mt-9 inline-flex items-center gap-3">
            <button className="inline-flex items-center gap-2 bg-stone-900 text-[#ede7d6] font-mono text-[12px] tracking-[0.18em] uppercase px-6 py-3.5 border-2 border-stone-900 hover:bg-stone-800 transition-colors">
              Book a call
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] uppercase px-6 py-3.5 border-2 border-stone-900 hover:bg-stone-900 hover:text-[#ede7d6] transition-colors">
              See past work
            </a>
          </div>
        </div>
      </header>

      {/* Services menu */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex items-end justify-between border-b border-stone-900 pb-3 mb-12">
            <h2 className="font-mono text-[12px] tracking-[0.3em] uppercase">
              ◆ Bill of fare
            </h2>
            <span className="hidden sm:inline font-mono text-[11px] text-stone-600">
              §§ A — F
            </span>
          </div>

          <ul className="divide-y divide-stone-900/20">
            {services.map((s) => (
              <li
                key={s.letter}
                className="group grid grid-cols-12 gap-6 py-10 first:pt-0 last:pb-0"
              >
                {/* Letter */}
                <div className="col-span-2 sm:col-span-1">
                  <div
                    className="text-[36px] leading-none text-amber-800"
                    style={{
                      fontFamily: '"Instrument Serif", serif',
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    {s.letter}
                  </div>
                </div>

                {/* Body */}
                <div className="col-span-10 sm:col-span-8">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-[28px] sm:text-[32px] leading-[1.05] tracking-[-0.025em] font-bold">
                      {s.name}
                    </h3>
                    {s.house && (
                      <span className="inline-flex items-center gap-1 font-mono text-[9.5px] tracking-[0.2em] uppercase border border-amber-700 text-amber-700 px-2 py-0.5">
                        <Sparkles className="w-2.5 h-2.5" />
                        House specialty
                      </span>
                    )}
                  </div>
                  <p
                    className="mt-0.5 text-[18px] text-stone-600"
                    style={{
                      fontFamily: '"Instrument Serif", serif',
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    {s.italic}
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-stone-700 max-w-xl">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-[0.14em] uppercase px-2 py-0.5 border border-stone-400 text-stone-600 bg-[#ede7d6]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price / ETA */}
                <div className="col-span-12 sm:col-span-3 text-left sm:text-right">
                  <div className="font-bold text-[22px] tracking-[-0.02em]">
                    {s.price}
                  </div>
                  <p className="mt-1 font-mono text-[10.5px] tracking-[0.2em] uppercase text-stone-500">
                    delivery · {s.eta}
                  </p>
                  <button className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.2em] uppercase border-b border-stone-900 pb-0.5 group-hover:border-amber-700 group-hover:text-amber-800 transition-colors">
                    Enquire
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process strip */}
      <section className="border-t-2 border-b-2 border-stone-900 bg-[#ede7d6] py-16 px-6">
        <div className="mx-auto max-w-[1100px]">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-800 mb-8 text-center">
            ◆ How a project moves through the studio
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-2">
            {[
              { n: "I.", t: "Letter", d: "You write. We read. A short call follows." },
              { n: "II.", t: "Sketch", d: "Three directions, on paper, in a week." },
              { n: "III.", t: "Make", d: "One direction, refined to ship-ready." },
              { n: "IV.", t: "Ship", d: "Files, prints, or both — packed by hand." },
            ].map((p, i) => (
              <div key={p.n} className="relative px-4">
                {i < 3 && (
                  <span
                    aria-hidden="true"
                    className="hidden sm:block absolute right-0 top-2 text-stone-400"
                  >
                    →
                  </span>
                )}
                <div
                  className="text-[40px] leading-none text-amber-800"
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  {p.n}
                </div>
                <h4 className="mt-3 text-[20px] tracking-[-0.02em] font-bold">
                  {p.t}
                </h4>
                <p className="mt-1.5 text-[13.5px] text-stone-700 leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h3 className="text-[44px] sm:text-[60px] leading-[0.95] tracking-[-0.035em] font-bold max-w-3xl mx-auto">
          Have something{" "}
          <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400, color: "#b45309" }}>
            specific
          </span>{" "}
          in mind?
        </h3>
        <p className="mt-5 text-[16px] text-stone-700 max-w-lg mx-auto">
          Email the studio with a sentence or a brief — whichever you have.
          We&apos;ll reply with two questions and a calendar link.
        </p>
        <a className="mt-9 inline-flex items-center gap-2 bg-stone-900 text-[#ede7d6] font-mono text-[12px] tracking-[0.18em] uppercase px-7 py-4 border-2 border-stone-900 hover:bg-stone-800 transition-colors">
          studio@retroui.dev
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-900/30">
        <div className="mx-auto max-w-[1240px] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10.5px] tracking-[0.22em] uppercase text-stone-600">
          <span>RetroUI · Services</span>
          <span>Pricing reviewed quarterly</span>
          <span>retroui.dev/services</span>
        </div>
      </footer>
    </div>
  );
};

export default MenuServices;
