import { useEffect, useState } from "react";
import { ArrowRight, Quote, Coffee, Sparkles, Users, MapPin } from "lucide-react";

const chapters = [
  {
    num: "01",
    kicker: "Origin",
    title: "Started in a kitchen, stayed in a kitchen.",
    body: "We didn't set out to build a brand. We set out to make one good thing, and then another. Twenty issues later the kitchen table still has glue stick rings on it — and we like it that way.",
  },
  {
    num: "02",
    kicker: "Method",
    title: "Small batches, on purpose.",
    body: "Every release is hand-numbered. Every order is hand-packed. The constraint isn't a marketing line — it's the only way we know how to make something we'd want to receive.",
  },
  {
    num: "03",
    kicker: "Future",
    title: "Stay slow. Ship anyway.",
    body: "We're not growing toward a vertical. We're growing toward a longer table. More collaborators, more letters answered, more issues that earn their place on a shelf.",
  },
];

const team = [
  { name: "Asha B.", role: "Editor-in-chief", since: "2018" },
  { name: "Jay P.", role: "Art direction", since: "2019" },
  { name: "Mia I.", role: "Photography", since: "2021" },
  { name: "Sam P.", role: "Operations", since: "2022" },
];

function useCounter(target, durationMs = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf;
    let start;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / durationMs);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return val;
}

const EditorialAbout = () => {
  const yrs = useCounter(8);
  const issues = useCounter(32);
  const subs = useCounter(14820);
  const hands = useCounter(4);
  return (
    <div
      className="bg-[#ede7d6] text-stone-900 min-h-screen"
      style={{ fontFamily: '"Space Grotesk", ui-sans-serif, system-ui' }}
    >
      {/* Top strip */}
      <div className="border-b border-stone-900/20">
        <div className="mx-auto max-w-[1240px] px-6 py-3 flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-stone-600">
          <span>RETROUI · Est. 2018</span>
          <span className="hidden sm:inline">Vol. 04 · About</span>
          <span>↳ retroui.dev</span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 pt-16 pb-20">
        <div className="mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-800 mb-5">
              ◆ About · the long version
            </p>
            <h1 className="text-[56px] sm:text-[88px] leading-[0.92] tracking-[-0.04em] font-bold">
              A small studio,{" "}
              <span
                style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400, color: "#b45309" }}
              >
                made of detail.
              </span>
            </h1>
            <p className="mt-7 text-[17.5px] leading-[1.6] max-w-xl text-stone-700">
              We design and print one zine, four issues a year. We answer our
              own email. We post every Tuesday. There&apos;s no growth team — just
              four people who love a deadline.
            </p>
          </div>
          <div className="lg:col-span-5">
            {/* Halftone block */}
            <div
              className="aspect-[5/6] w-full border-2 border-stone-900 relative overflow-hidden"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #1c1814 1.4px, transparent 1.6px), radial-gradient(circle, #1c1814 1px, transparent 1.2px)",
                backgroundSize: "14px 14px, 7px 7px",
                backgroundPosition: "0 0, 7px 7px",
                backgroundColor: "#d3cab2",
              }}
            >
              <div className="absolute bottom-3 left-3 right-3 bg-[#ede7d6] border border-stone-900 px-3 py-2 font-mono text-[10.5px] tracking-[0.18em] uppercase flex justify-between">
                <span>Plate 04-A</span>
                <span className="text-amber-800">Halftone, 65 LPI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y-2 border-stone-900 bg-[#e2dcc9]">
        <div className="mx-auto max-w-[1240px] px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { v: yrs, suffix: "yrs", label: "In print" },
            { v: issues, suffix: null, label: "Issues shipped" },
            { v: subs, suffix: null, label: "Subscribers" },
            { v: hands, suffix: null, label: "Hands on deck" },
          ].map((s) => (
            <div key={s.label} className="border-t-2 border-stone-900 pt-3">
              <div className="text-[44px] sm:text-[56px] leading-none tracking-[-0.04em] font-bold">
                {s.v.toLocaleString()}
                {s.suffix && (
                  <span
                    className="ml-1 text-amber-700"
                    style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400 }}
                  >
                    {s.suffix}
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-[10.5px] tracking-[0.22em] uppercase text-stone-600">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Chapters */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex items-end justify-between mb-12 border-b border-stone-900 pb-3">
            <h2 className="font-mono text-[12px] tracking-[0.3em] uppercase">
              The whole story · in three pieces
            </h2>
            <span className="hidden sm:inline font-mono text-[11px] text-stone-600">
              §§ 01 — 03
            </span>
          </div>

          <div className="space-y-16">
            {chapters.map((c, i) => (
              <article
                key={c.num}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              >
                <div className="md:col-span-3">
                  <div
                    className="text-[88px] leading-[0.85] tracking-[-0.05em] font-bold text-stone-900/15"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {c.num}
                  </div>
                  <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-amber-800 mt-2">
                    ◆ {c.kicker}
                  </p>
                </div>
                <div className="md:col-span-9 border-t border-stone-900 pt-4">
                  <h3 className="text-[34px] sm:text-[42px] leading-[1.05] tracking-[-0.025em] font-bold max-w-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-5 text-[16px] leading-[1.7] text-stone-700 max-w-2xl">
                    {c.body}
                  </p>
                  {i === 1 && (
                    <div className="mt-6 inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.2em] uppercase border border-stone-900 px-3 py-1.5">
                      <Sparkles className="w-3 h-3 text-amber-700" />
                      A method, not a brand
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-stone-900 text-[#ede7d6]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Quote className="w-9 h-9 mx-auto text-amber-300" strokeWidth={1.5} />
          <blockquote
            className="mt-6 text-[28px] sm:text-[40px] leading-[1.18]"
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            “The best part of running a small studio is that everything you
            love stays in the work. The hardest part is the same sentence.”
          </blockquote>
          <p className="mt-6 font-mono text-[11px] tracking-[0.3em] uppercase text-stone-400">
            — Asha B., founding editor
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex items-end justify-between mb-10 border-b border-stone-900 pb-3">
            <h2 className="font-mono text-[12px] tracking-[0.3em] uppercase">
              ◆ Hands on deck
            </h2>
            <span className="hidden sm:inline font-mono text-[11px] text-stone-600">
              {team.length} people · 1 kitchen
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div
                key={m.name}
                className="border-2 border-stone-900 bg-[#fefbf2] p-5 relative"
                style={{
                  boxShadow: "4px 4px 0 0 rgba(0,0,0,0.12)",
                }}
              >
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-amber-800">
                  No. {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className="mt-4 aspect-square w-full border border-stone-900/40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #1c1814 1.2px, transparent 1.4px)",
                    backgroundSize: "10px 10px",
                    backgroundColor: "#d3cab2",
                  }}
                />
                <h4 className="mt-4 text-[20px] tracking-[-0.02em] font-bold">
                  {m.name}
                </h4>
                <p className="mt-0.5 text-[13px] text-stone-600">{m.role}</p>
                <p className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-stone-500 pt-3 border-t border-stone-300">
                  Since {m.since}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="border-t-2 border-stone-900 bg-[#e2dcc9] py-16 px-6">
        <div className="mx-auto max-w-[1240px] grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { Icon: Coffee, t: "Slow on purpose", d: "We measure in seasons, not sprints." },
            { Icon: Users, t: "Four desks, one table", d: "Disagreement is a feature, not a bug." },
            { Icon: MapPin, t: "Made where we live", d: "Printed, packed, and posted from one place." },
          ].map((v) => (
            <div key={v.t}>
              <v.Icon className="w-5 h-5 text-amber-800" strokeWidth={1.5} />
              <h4 className="mt-4 text-[20px] tracking-[-0.02em] font-bold">
                {v.t}
              </h4>
              <p className="mt-1.5 text-[14.5px] text-stone-700 leading-relaxed">
                {v.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-800">
          ◆ Next move
        </p>
        <h3 className="mt-3 text-[44px] sm:text-[64px] leading-[0.95] tracking-[-0.035em] font-bold">
          Read an{" "}
          <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400 }}>
            issue.
          </span>
        </h3>
        <div className="mt-8 inline-flex items-center gap-3">
          <button className="inline-flex items-center gap-2 bg-stone-900 text-[#ede7d6] font-mono text-[12px] tracking-[0.15em] uppercase px-6 py-3.5 border-2 border-stone-900 hover:bg-stone-800 transition-colors">
            Browse archive
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.15em] uppercase px-6 py-3.5 border-2 border-stone-900 hover:bg-stone-900 hover:text-[#ede7d6] transition-colors">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-900/30">
        <div className="mx-auto max-w-[1240px] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10.5px] tracking-[0.22em] uppercase text-stone-600">
          <span>RetroUI · About</span>
          <span>© MMXXVI — Made by hand</span>
          <span>retroui.dev</span>
        </div>
      </footer>
    </div>
  );
};

export default EditorialAbout;
