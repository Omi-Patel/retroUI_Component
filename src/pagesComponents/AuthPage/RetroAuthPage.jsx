import React, { useState } from "react";
import { User, Lock, Mail, Github, Eye, EyeOff } from "lucide-react";

export default function RetroAuthPage() {
  const [mode, setMode] = useState("signin");
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="min-h-screen bg-[#ede7d6] text-black font-mono flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1.4px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative w-full max-w-md">
        {/* Stamp */}
        <div className="absolute -top-6 -right-4 z-10 inline-block px-3 py-1 bg-[#ede7d6] border-[3px] border-red-600 text-red-600 rotate-[-8deg] text-[10px] font-black uppercase tracking-widest">
          BETA · {new Date().getFullYear()}
        </div>

        <div className="bg-white border-4 border-black shadow-[10px_10px_0px_0px_black]">
          {/* Header */}
          <div className="border-b-4 border-black bg-[#f5f1e6] p-6 text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">
              MEMBER · ACCESS · ONLY
            </p>
            <h1 className="text-4xl font-black uppercase tracking-tight mt-1">
              The Clubhouse
            </h1>
            <p className="text-xs mt-1 opacity-70">
              Vol. 27 · Members since 1997
            </p>
          </div>

          {/* Mode toggle */}
          <div className="grid grid-cols-2 border-b-4 border-black">
            {["signin", "signup"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`py-2.5 text-xs font-black uppercase tracking-wider transition-colors ${
                  mode === m
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-yellow-100"
                }`}
              >
                {m === "signin" ? "Sign In" : "Sign Up"}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="p-6 space-y-4">
            {mode === "signup" && (
              <Field icon={User} label="Name" placeholder="J. Doe" />
            )}
            <Field icon={Mail} label="Email" placeholder="hello@retro.dev" />
            <Field
              icon={Lock}
              label="Password"
              placeholder="••••••••"
              type={showPw ? "text" : "password"}
              rightIcon={showPw ? EyeOff : Eye}
              onRight={() => setShowPw((s) => !s)}
            />

            {mode === "signin" && (
              <div className="flex items-center justify-between text-xs">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 accent-black" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="underline">
                  Forgot?
                </a>
              </div>
            )}

            <button className="w-full py-3 bg-yellow-300 text-black border-4 border-black shadow-[4px_4px_0px_0px_black] font-black uppercase tracking-wider text-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] transition-all">
              {mode === "signin" ? "Enter the Clubhouse" : "Become a member"}
            </button>

            <div className="ornament-hr text-xs">
              <span className="px-2 opacity-70">OR</span>
            </div>

            <button className="w-full py-2.5 bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_black] font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors">
              <Github className="w-4 h-4" /> Continue with GitHub
            </button>
          </div>

          {/* Footer */}
          <div className="border-t-4 border-dashed border-black p-3 bg-[#f5f1e6] text-center text-[10px] tracking-[0.3em] uppercase opacity-60">
            ★ Established 1997 ★ All rights reserved ★
          </div>
        </div>

        <p className="mt-4 text-center text-xs opacity-60">
          Need help?{" "}
          <a href="#" className="underline font-bold">
            Send us a postcard
          </a>
        </p>
      </div>
    </div>
  );
}

function Field({ icon: Icon, label, type = "text", placeholder, rightIcon: RightIcon, onRight }) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-wider mb-1">
        {label}
      </label>
      <div className="relative">
        <Icon className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-9 pr-9 py-2.5 bg-[#fafaf3] text-black border-4 border-black focus:outline-none focus:bg-yellow-50 text-sm placeholder:opacity-40"
        />
        {RightIcon && (
          <button
            type="button"
            onClick={onRight}
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100"
          >
            <RightIcon className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
