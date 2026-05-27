import {
  Star,
  Quote,
  ArrowRight,
  Mail,
  ChevronRight,
} from "lucide-react";

import BreakingNewsTicker from "../../components/Tickers/BreakingNewsTicker";
import EmojiRibbon from "../../components/Tickers/EmojiRibbon";
import PolaroidCard from "../../components/Polaroids/PolaroidCard";
import PolaroidStrip from "../../components/Polaroids/PolaroidStrip";
import InstantFrame from "../../components/Polaroids/InstantFrame";
import PostIt from "../../components/StickyNotes/PostIt";
import PinnedNote from "../../components/StickyNotes/PinnedNote";
import TapedMemo from "../../components/StickyNotes/TapedMemo";
import CartReceipt from "../../components/Receipts/CartReceipt";

const features = [
  {
    issue: "01",
    title: "On Cutting & Pasting",
    blurb:
      "Why physical collage still beats every plugin. A meditation on scissors, glue sticks, and the layers in between.",
  },
  {
    issue: "02",
    title: "The Photocopier Shop",
    blurb:
      "Inside the corner-store xerox machines that birthed a thousand newsletters — and where they live now.",
  },
  {
    issue: "03",
    title: "Mixtape Diaries",
    blurb:
      "A year of curated cassettes from twelve readers. Track listings, liner notes, and one ode to side B.",
  },
];

const ZinePage = () => {
  return (
    <div
      className="bg-[#ede7d6] text-stone-900 min-h-screen pb-24"
      style={{ fontFamily: '"Space Grotesk", ui-sans-serif, system-ui' }}
    >
      {/* Top ticker */}
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <BreakingNewsTicker />
        </div>
      </div>

      {/* Masthead */}
      <header className="px-4 sm:px-6 lg:px-8 pt-10">
        <div className="mx-auto max-w-[1280px] flex items-end justify-between border-b-2 border-stone-900 pb-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-stone-600">
              NO. 04 · SUMMER ISSUE · MAY 2026
            </p>
            <h1
              className="mt-1 text-[64px] sm:text-[96px] leading-[0.85] tracking-[-0.04em] font-bold"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              RETRO<span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400 }}>zine</span>
            </h1>
          </div>
          <div className="hidden sm:block text-right font-mono text-[11px] text-stone-600 leading-relaxed">
            <p>$6.00 USD</p>
            <p>printed on recycled paper</p>
            <p>made in a kitchen</p>
          </div>
        </div>
      </header>

      {/* Cover spread */}
      <section className="px-4 sm:px-6 lg:px-8 mt-12">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.3em] text-red-700 mb-4">
              ★ COVER STORY ★
            </p>
            <h2
              className="text-[44px] sm:text-[72px] leading-[1.02] tracking-[-0.03em] font-bold"
            >
              the art of{" "}
              <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400, color: "#b45309" }}>
                staying small
              </span>
              , on purpose.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed max-w-xl text-stone-700">
              We talked to twelve makers running studios of one. They cut their own
              covers, mail their own orders, and answer their own DMs. Here&apos;s why
              they wouldn&apos;t have it any other way.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 bg-stone-900 text-[#ede7d6] font-mono text-[12px] tracking-[0.15em] uppercase px-5 py-3 border-2 border-stone-900 hover:bg-stone-800 transition-colors">
                Read the issue
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.15em] uppercase px-5 py-3 border-2 border-stone-900 hover:bg-stone-900 hover:text-[#ede7d6] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center">
            <InstantFrame />
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Quote
            className="w-10 h-10 mx-auto text-amber-700"
            strokeWidth={1.5}
          />
          <blockquote
            className="mt-4 text-[28px] sm:text-[36px] leading-[1.15]"
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            “We made one zine. It sold out. We made another. Twenty years on,
            we&apos;re still cutting paper at the same kitchen table.”
          </blockquote>
          <p className="mt-5 font-mono text-[11px] tracking-[0.3em] text-stone-600">
            — A.B., issue contributor
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-end justify-between border-b-2 border-stone-900 pb-3 mb-8">
            <h3 className="font-mono text-[12px] tracking-[0.3em]">
              INSIDE THIS ISSUE
            </h3>
            <span className="font-mono text-[11px] text-stone-600 hidden sm:block">
              p. 04 — p. 28
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <article key={f.issue} className="border-t-2 border-stone-900 pt-4">
                <p className="font-mono text-[11px] tracking-[0.25em] text-red-700">
                  FEATURE · {f.issue}
                </p>
                <h4
                  className="mt-2 text-[28px] leading-[1.1] tracking-tight font-bold"
                >
                  {f.title}
                </h4>
                {/* halftone image placeholder */}
                <div
                  className="mt-4 aspect-[5/3] w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #1c1814 1.4px, transparent 1.6px), radial-gradient(circle, #1c1814 1px, transparent 1.2px)",
                    backgroundSize: "14px 14px, 7px 7px",
                    backgroundPosition: "0 0, 7px 7px",
                    backgroundColor: "#d3cab2",
                  }}
                />
                <p className="mt-4 text-[14.5px] leading-relaxed text-stone-700">
                  {f.blurb}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.25em] uppercase text-stone-900 hover:underline"
                >
                  Continue
                  <ChevronRight className="w-3 h-3" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the scenes — sticky notes */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24 relative">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-10">
            <p className="font-mono text-[11px] tracking-[0.3em] text-red-700">
              ★ EDITOR&apos;S DESK ★
            </p>
            <h3
              className="mt-2 text-[40px] tracking-tight font-bold"
              style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400 }}
            >
              what made the cut
            </h3>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-10 lg:gap-16">
            <PostIt />
            <PinnedNote />
            <TapedMemo />
          </div>
        </div>
      </section>

      {/* Order spread — receipt + photo */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <PolaroidCard />
          </div>
          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] tracking-[0.3em] text-red-700">
              ★ THE SHOP ★
            </p>
            <h3 className="mt-2 text-[44px] leading-[1.05] tracking-tight font-bold">
              every order, hand-packed.
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-stone-700 max-w-md">
              Pick a back issue, a sticker pack, or a patch. We pack each one in
              the same studio, stamp it ourselves, and post it before lunch.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <CartReceipt />
            </div>
          </div>
        </div>
      </section>

      {/* Contributors strip */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-end justify-between border-b-2 border-stone-900 pb-3 mb-10">
            <h3 className="font-mono text-[12px] tracking-[0.3em]">
              CONTRIBUTORS
            </h3>
            <span className="font-mono text-[11px] text-stone-600 hidden sm:block">
              {`<3`}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <PolaroidStrip />
            <div className="max-w-md">
              <p
                className="text-[22px] leading-[1.25]"
                style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400 }}
              >
                Twelve writers. Four photographers. One sticky-note moderator.
                One very patient editor.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-[12px] text-stone-700">
                {["A. Bansal", "J. Patel", "M. Ito", "S. Park", "L. Cruz", "K. Doyle", "N. Singh", "R. Tanaka"].map((n) => (
                  <li key={n} className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-amber-600 fill-amber-600" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-3xl text-center border-2 border-stone-900 bg-white p-10 shadow-[8px_8px_0_0_rgba(0,0,0,0.25)]">
          <Mail className="w-8 h-8 mx-auto text-stone-700" strokeWidth={1.5} />
          <h3 className="mt-3 text-[32px] tracking-tight font-bold">
            One letter per month.
          </h3>
          <p className="mt-2 text-[14.5px] text-stone-600">
            Behind-the-scenes notes, new issues, and the occasional sticker.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="you@studio.com"
              className="flex-1 h-11 px-4 font-mono text-[13px] border-2 border-stone-900 outline-none focus:bg-amber-50"
            />
            <button
              type="submit"
              className="h-11 px-5 bg-stone-900 text-[#ede7d6] font-mono text-[12px] tracking-[0.15em] uppercase border-2 border-stone-900 hover:bg-stone-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Bottom ribbon */}
      <div className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <EmojiRibbon />
        </div>
      </div>

      {/* Footer line */}
      <footer className="mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px] flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-900 pt-6 font-mono text-[11px] tracking-widest text-stone-600">
          <p>RETROZINE · NO. 04 · MMXXVI</p>
          <p>SET IN SPACE GROTESK & INSTRUMENT SERIF</p>
          <p>MADE BY HAND</p>
        </div>
      </footer>
    </div>
  );
};

export default ZinePage;
