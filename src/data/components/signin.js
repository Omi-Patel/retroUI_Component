import { LogIn } from 'lucide-react';

import SignInPage from '../../components/SignIn/SignInPage';

export const signinComponents = [
  {
    name: 'SignInPage',
    component: SignInPage,
    icon: LogIn,
    code: `import React from "react";
import { Mail, Lock, Github } from "lucide-react";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ede7d6] text-black font-mono p-4 sm:p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1.4px)",
        backgroundSize: "18px 18px",
      }} />

      <div className="relative w-full max-w-sm">
        <div className="absolute -top-3 -right-3 z-10 inline-block px-3 py-1 bg-[#ede7d6] border-[3px] border-red-600 text-red-600 rotate-[-8deg] text-[10px] font-black uppercase tracking-widest">
          MEMBERS · ONLY
        </div>

        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_black]">
          <header className="bg-[#f5f1e6] border-b-4 border-double border-black p-5 text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">VOL. 27 · ACCESS PASS</p>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-1">Sign In</h1>
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mt-1">★ WELCOME BACK ★</p>
          </header>

          <form className="p-6 space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest mb-1.5">Email</label>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#fafaf3] border-4 border-black focus-within:bg-yellow-50">
                <Mail className="w-3.5 h-3.5 opacity-60" />
                <input type="email" placeholder="hello@retro.dev" className="flex-1 bg-transparent text-sm focus:outline-none placeholder:opacity-40" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest">Password</label>
                <a href="#" className="text-[10px] uppercase tracking-widest font-bold underline underline-offset-2">Forgot?</a>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#fafaf3] border-4 border-black focus-within:bg-yellow-50">
                <Lock className="w-3.5 h-3.5 opacity-60" />
                <input type="password" placeholder="••••••••" className="flex-1 bg-transparent text-sm focus:outline-none placeholder:opacity-40" />
              </div>
            </div>

            <label className="inline-flex items-center gap-2 text-xs cursor-pointer">
              <input type="checkbox" className="w-3.5 h-3.5 accent-black" />
              <span>Keep me signed in</span>
            </label>

            <button type="submit" className="w-full py-3 bg-yellow-300 text-black border-4 border-black shadow-[4px_4px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] transition-all font-black uppercase tracking-widest text-xs">
              Enter the Clubhouse
            </button>

            <button type="button" className="w-full py-2.5 bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_black] hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[11px]">
              <Github className="w-3.5 h-3.5" /> Continue with GitHub
            </button>
          </form>

          <footer className="border-t-4 border-dashed border-black bg-[#f5f1e6] py-3 text-center text-[10px] tracking-[0.3em] uppercase opacity-70">
            No account?{" "}
            <a href="#" className="font-black underline ml-1">Become a member</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;`,
  },
];

export default signinComponents;
