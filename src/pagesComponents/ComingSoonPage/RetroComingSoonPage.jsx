import React, { useState, useEffect } from "react";
import { Mail, Twitter, Github, Instagram } from "lucide-react";

const target = new Date(Date.now() + 1000 * 60 * 60 * 24 * 27 + 1000 * 60 * 60 * 7);

function useCountdown() {
  const [diff, setDiff] = useState(target.getTime() - Date.now());
  useEffect(() => {
    const id = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const s = Math.max(0, Math.floor(diff / 1000));
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

export default function RetroComingSoonPage() {
  const c = useCountdown();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#ede7d6] text-black font-mono flex flex-col">
      {/* Top marquee */}
      <div className="bg-black text-yellow-300 overflow-hidden border-b-4 border-black py-1.5">
        <div className="whitespace-nowrap animate-[marqueeCS_25s_linear_infinite] text-xs font-bold uppercase tracking-widest">
          {"★ COMING SOON · BUILT WITH LOVE · GET ON THE LIST · ".repeat(6)}
        </div>
        <style>{`@keyframes marqueeCS { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1.4px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative max-w-2xl w-full text-center">
          <div className="inline-block px-3 py-1 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest rotate-[-2deg] mb-4">
            UNDER CONSTRUCTION · STAY TUNED
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
            Something <span className="italic font-light">curious</span>
            <br />
            this way comes.
          </h1>
          <p className="text-base opacity-70 max-w-md mx-auto mb-10">
            We&apos;re putting the finishing touches on something good. Drop your email and
            we&apos;ll send you a postcard when we&apos;re live.
          </p>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-3 max-w-xl mx-auto mb-10">
            {[
              { v: c.d, l: "DAYS" },
              { v: c.h, l: "HRS" },
              { v: c.m, l: "MIN" },
              { v: c.s, l: "SEC" },
            ].map((u) => (
              <div
                key={u.l}
                className="bg-white border-4 border-black shadow-[5px_5px_0px_0px_black] py-3"
              >
                <div className="text-3xl sm:text-4xl font-black tabular-nums">
                  {String(u.v).padStart(2, "0")}
                </div>
                <div className="text-[10px] tracking-widest opacity-60 mt-0.5">
                  {u.l}
                </div>
              </div>
            ))}
          </div>

          {/* Email signup */}
          {sent ? (
            <div className="inline-block bg-yellow-300 border-4 border-black shadow-[5px_5px_0px_0px_black] px-5 py-3 rotate-[-1deg]">
              <p className="text-sm font-black uppercase">
                ✓ You&apos;re on the list!
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="max-w-md mx-auto flex gap-0 border-4 border-black shadow-[5px_5px_0px_0px_black] bg-white"
            >
              <div className="flex-1 flex items-center px-3 gap-2">
                <Mail className="w-3.5 h-3.5 opacity-60" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full py-3 bg-transparent text-sm focus:outline-none placeholder:opacity-40"
                />
              </div>
              <button
                type="submit"
                className="px-5 bg-black text-yellow-300 font-black uppercase tracking-wider text-xs hover:bg-yellow-300 hover:text-black transition-colors border-l-4 border-black"
              >
                Notify Me
              </button>
            </form>
          )}

          {/* Social */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {[Twitter, Github, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-white text-black border-4 border-black shadow-[3px_3px_0px_0px_black] hover:bg-yellow-300 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t-4 border-dashed border-black p-4 text-center text-[10px] tracking-[0.3em] uppercase opacity-60">
        © {new Date().getFullYear()} — built with espresso & nostalgia
      </footer>
    </div>
  );
}
