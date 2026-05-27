import React from "react";
import { Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";

// Newsprint columned footer with newsletter, no stock-photo logo
const ClassicFooter = () => {
  return (
    <footer className="bg-[#f5f1e6] text-black border-t-4 border-double border-black font-mono px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-yellow-300 font-black text-xl mb-3">
              R
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">
              RetroBrand
            </h3>
            <p className="text-xs opacity-70 mt-2">
              Hand-stamped objects for thoughtful people. Est. 1997.
            </p>
          </div>

          <Column
            title="Navigation"
            items={["Home", "About", "Services", "Blog", "Contact"]}
          />
          <Column
            title="Follow"
            items={[
              { label: "Twitter", Icon: Twitter },
              { label: "Instagram", Icon: Instagram },
              { label: "LinkedIn", Icon: Linkedin },
              { label: "GitHub", Icon: Github },
            ]}
          />

          {/* Newsletter */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-3">
              Newsletter
            </p>
            <p className="text-xs opacity-80 mb-3">
              Subscribe for sporadic dispatches and rare drops.
            </p>
            <form className="space-y-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-white border-2 border-black">
                <Mail className="w-3.5 h-3.5 opacity-60" />
                <input
                  type="email"
                  placeholder="hello@you.dev"
                  className="flex-1 bg-transparent text-xs focus:outline-none placeholder:opacity-40"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-black text-yellow-300 border-2 border-black text-[10px] font-black uppercase tracking-widest hover:bg-yellow-300 hover:text-black transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-6 border-dashed border-black/30 border-t-2" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] tracking-[0.3em] uppercase opacity-60">
          <p>© {new Date().getFullYear()} RETROBRAND</p>
          <p>★ NO COOKIES · JUST CRUMBS ★</p>
        </div>
      </div>
    </footer>
  );
};

function Column({ title, items }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-3">
        {title}
      </p>
      <ul className="space-y-1.5">
        {items.map((it) => {
          const label = typeof it === "string" ? it : it.label;
          const Icon = typeof it === "string" ? null : it.Icon;
          return (
            <li key={label}>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs hover:underline underline-offset-4"
              >
                {Icon && <Icon className="w-3 h-3 opacity-70" />}
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClassicFooter;
