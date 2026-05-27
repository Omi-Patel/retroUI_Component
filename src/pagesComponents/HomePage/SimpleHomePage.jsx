import React from "react";
import { ChevronRight, Sun, Moon, Zap } from "lucide-react";

export default function SimpleHomePage() {
  return (
    <div className="min-h-screen bg-[#ede7d6] text-black font-mono">
      {/* Top marquee */}
      <div className="bg-black text-yellow-300 overflow-hidden border-b-4 border-black py-1.5">
        <div className="whitespace-nowrap animate-[mqHome_22s_linear_infinite] text-xs font-bold uppercase tracking-widest">
          {"★ NEW SHIPMENT IN · MEMBERS GET 10% OFF · POSTAGE INCLUDED · ".repeat(6)}
        </div>
        <style>{`@keyframes mqHome { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

      <header className="border-b-4 border-black bg-[#f5f1e6]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-black uppercase tracking-tight">
            Minimal<span className="italic font-light"> · Retro</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {["Home", "About", "Shop", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-1.5 text-xs uppercase tracking-widest font-bold hover:bg-yellow-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="text-center mb-16 relative">
          <div
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0,0,0,0.4) 1px, transparent 1.4px)",
              backgroundSize: "18px 18px",
            }}
          />
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 mb-2">
            ★ EST. 1997 · STILL HERE ★
          </p>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-4">
            Simplicity is
            <br />
            <span className="italic font-light text-pink-600">timeless.</span>
          </h1>
          <p className="text-base sm:text-lg opacity-80 max-w-xl mx-auto mb-8">
            Rediscover the beauty of minimalism with our curated collection of
            retro-inspired essentials. Hand-picked, hand-pressed, hand-stamped.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 bg-yellow-300 text-black border-4 border-black shadow-[5px_5px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] transition-all text-xs font-black uppercase tracking-wider"
            >
              Explore Collection <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#f5f1e6] text-black border-4 border-black hover:bg-black hover:text-yellow-300 transition-colors text-xs font-black uppercase tracking-wider"
            >
              Read the catalog
            </a>
          </div>
        </section>

        {/* Two-column features */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              Icon: Sun,
              tag: "01",
              title: "Daytime Essentials",
              body: "Simplify your daily routine with our carefully selected daytime products.",
              accent: "bg-yellow-200",
            },
            {
              Icon: Moon,
              tag: "02",
              title: "Nighttime Classics",
              body: "Unwind with our collection of timeless evening and nighttime essentials.",
              accent: "bg-pink-200",
            },
          ].map(({ Icon, tag, title, body, accent }) => (
            <div
              key={tag}
              className={`relative ${accent} text-black border-4 border-black shadow-[6px_6px_0px_0px_black] p-6`}
            >
              <span className="absolute -top-3 -left-1 bg-black text-yellow-300 text-[10px] font-black uppercase tracking-widest px-2 py-1 rotate-[-3deg]">
                № {tag}
              </span>
              <Icon className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">{title}</h3>
              <p className="text-sm mb-4 opacity-80">{body}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest underline-offset-4 hover:underline"
              >
                Discover more <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </section>

        {/* Featured product strip */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">
              FEATURED · ITEM OF THE WEEK
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              The Timeless Timekeeper
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black]">
            <div className="aspect-square md:aspect-auto bg-gradient-to-br from-pink-300 via-orange-300 to-yellow-300 border-r-0 md:border-r-4 border-b-4 md:border-b-0 border-black flex items-center justify-center relative">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,0,0,0.4) 1.2px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                }}
              />
              <span className="text-8xl">◷</span>
              <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-black uppercase px-2 py-1 border-2 border-black rotate-[-4deg]">
                LIMITED
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-1">
                CAT № 014 · CLOCKWORKS
              </p>
              <h3 className="text-2xl font-black uppercase mb-3">
                Minimalist Wall Clock
              </h3>
              <p className="text-sm opacity-80 mb-5">
                Our signature minimalist clock combines retro charm with modern
                simplicity. Perfect for any space that values both form and
                function.
              </p>
              <div className="flex items-center justify-between border-t-2 border-dashed border-black/40 pt-4">
                <span className="text-2xl font-black">$89</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-black text-yellow-300 text-xs font-black uppercase tracking-wider border-2 border-black hover:bg-yellow-300 hover:text-black transition-colors"
                >
                  Add to crate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="text-center bg-black text-[#ede7d6] border-4 border-black p-8">
          <Zap className="w-7 h-7 mx-auto mb-2 text-yellow-300" />
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-70">
            NEWSLETTER · EVERY OTHER FRIDAY
          </p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-1 mb-5">
            Stay Updated
          </h2>
          <form className="max-w-md mx-auto flex border-4 border-yellow-300">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 bg-[#ede7d6] text-black focus:outline-none text-sm placeholder:opacity-40"
            />
            <button
              type="submit"
              className="px-5 bg-yellow-300 text-black font-black uppercase tracking-wider text-xs hover:bg-pink-300 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t-4 border-black bg-[#f5f1e6] py-6 px-4 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">
          © {new Date().getFullYear()} MINIMAL RETRO · EMBRACING SIMPLICITY ·
          HONORING THE PAST
        </p>
      </footer>
    </div>
  );
}
