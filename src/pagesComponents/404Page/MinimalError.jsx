import React from "react";
import { ArrowLeft, Mail } from "lucide-react";

export default function MinimalError() {
  return (
    <div className="min-h-screen bg-[#ede7d6] text-black font-mono flex items-center justify-center p-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.4) 1px, transparent 1.4px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-2xl w-full">
        <div className="absolute -top-3 right-4 z-10 inline-block px-3 py-1 bg-[#ede7d6] border-[3px] border-red-600 text-red-600 rotate-[-6deg] text-[10px] font-black uppercase tracking-widest">
          RETURN TO SENDER
        </div>

        <div className="bg-[#f5f1e6] border-4 border-black shadow-[10px_10px_0px_0px_black] p-8 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 mb-2">
            ERROR · CODE 404 · ROUTE NOT FOUND
          </p>
          <h1 className="text-[120px] sm:text-[160px] font-black tracking-tighter leading-none">
            404
          </h1>
          <div className="ornament-hr mt-2 mb-4">
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-60">
              END OF LINE
            </span>
          </div>

          <p className="text-base sm:text-lg max-w-md mx-auto mb-2">
            Oops! The page you&apos;re looking for isn&apos;t here.
          </p>
          <p className="text-xs opacity-60 max-w-md mx-auto mb-6">
            It may have been moved, renamed, or lost in the mail. Sorry about that.
          </p>

          <div className="inline-flex items-center gap-1 text-sm mb-6">
            <span>$ navigate</span>
            <span
              className="inline-block w-2 h-4 bg-black animate-pulse"
              style={{ animationDuration: "1s" }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-300 text-black border-4 border-black shadow-[4px_4px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] transition-all text-xs font-black uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Go back home
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f1e6] text-black border-4 border-black hover:bg-black hover:text-yellow-300 transition-colors text-xs font-black uppercase tracking-wider"
            >
              <Mail className="w-3.5 h-3.5" /> Send a postcard
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] tracking-[0.3em] uppercase opacity-50">
          © {new Date().getFullYear()} · IF LOST PLEASE RETURN
        </p>
      </div>
    </div>
  );
}
