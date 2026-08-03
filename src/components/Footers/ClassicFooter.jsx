import { Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";

// Newspaper back-page footer — column rules, a clip-out subscription coupon,
// and small-print typography straight off the press.
const ClassicFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f1e6] text-stone-900 font-mono border-t-4 border-double border-stone-900 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Folio line */}
        <div className="flex items-baseline justify-between text-[9px] tracking-[0.3em] uppercase text-stone-500 border-b-2 border-stone-900 pb-2">
          <span>The Retro Gazette</span>
          <span className="hidden sm:inline">Final Edition · All the news that fits</span>
          <span>Sec. D · P. 12</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 pt-7 lg:divide-x-2 lg:divide-dotted lg:divide-stone-400">
          {/* Brand */}
          <div className="lg:pr-7">
            <div className="inline-flex items-center justify-center w-11 h-11 bg-stone-900 text-[#f5f1e6] font-black text-xl mb-3">
              R
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight leading-none">
              Retro
              <br />
              Brand
            </h3>
            <p className="text-[11px] leading-relaxed text-stone-600 mt-3">
              Hand-stamped objects for thoughtful people. Published daily since 1997, rain or shine.
            </p>
          </div>

          <Column
            className="lg:px-7"
            title="Index"
            items={["Home", "About", "Services", "Blog", "Contact"]}
          />
          <Column
            className="lg:px-7"
            title="Wire Services"
            items={[
              { label: "Twitter", Icon: Twitter },
              { label: "Instagram", Icon: Instagram },
              { label: "LinkedIn", Icon: Linkedin },
              { label: "GitHub", Icon: Github },
            ]}
          />

          {/* Subscription coupon */}
          <div className="lg:pl-7">
            <div className="relative border-2 border-dashed border-stone-500 p-4 bg-white">
              <span
                aria-hidden="true"
                className="absolute -top-2.5 left-3 bg-white px-1.5 text-[11px] text-stone-500"
              >
                ✂ CLIP &amp; SEND
              </span>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-1">
                Subscription Dept.
              </p>
              <p className="text-[10.5px] text-stone-600 mb-3 leading-relaxed">
                Sporadic dispatches &amp; rare drops. Delivered by carrier pigeon.
              </p>
              <form className="space-y-2">
                <label htmlFor="gazette-email" className="sr-only">
                  Email address
                </label>
                <div className="flex items-center gap-2 px-2.5 py-2 bg-[#fafaf3] border-2 border-stone-900">
                  <Mail className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                  <input
                    id="gazette-email"
                    type="email"
                    placeholder="you@retro.dev"
                    className="flex-1 w-full bg-transparent text-[11px] focus:outline-none placeholder:opacity-40"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-stone-900 text-[#f5f1e6] border-2 border-stone-900 text-[10px] font-black uppercase tracking-[0.25em] hover:bg-[#f5f1e6] hover:text-stone-900 transition-colors"
                >
                  Subscribe · 5¢
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Ornament rule */}
        <div aria-hidden="true" className="flex items-center gap-3 my-6 text-stone-400">
          <span className="flex-1 border-t border-stone-400" />
          <span className="text-[11px] tracking-[0.5em]">✦ ✦ ✦</span>
          <span className="flex-1 border-t border-stone-400" />
        </div>

        {/* Small print */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] tracking-[0.25em] uppercase text-stone-500">
          <p>© {year} The RetroBrand Co. · All rights reserved</p>
          <p>Printed with soy ink on 100% recycled pixels</p>
        </div>
      </div>
    </footer>
  );
};

function Column({ title, items, className = "" }) {
  return (
    <div className={className}>
      <p className="text-[10px] font-black uppercase tracking-[0.25em] border-b border-stone-400 pb-1.5 mb-3">
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((it) => {
          const label = typeof it === "string" ? it : it.label;
          const Icon = typeof it === "string" ? null : it.Icon;
          return (
            <li key={label}>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-[12px] hover:font-bold transition-all"
              >
                {Icon ? (
                  <Icon className="w-3 h-3 opacity-60 group-hover:opacity-100" aria-hidden="true" />
                ) : (
                  <span aria-hidden="true" className="text-stone-400 group-hover:text-stone-900">
                    ☞
                  </span>
                )}
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
