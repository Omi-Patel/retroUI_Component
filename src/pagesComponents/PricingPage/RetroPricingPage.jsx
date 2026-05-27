import React, { useState } from "react";
import { Check, X, Zap, Star } from "lucide-react";

const tiers = [
  {
    name: "Hobbyist",
    price: { m: 0, y: 0 },
    tagline: "For weekend tinkerers",
    cta: "Start free",
    features: ["3 projects", "Community support", "Public templates", "Basic analytics"],
    excluded: ["Custom domains", "Priority builds"],
    accent: "bg-white",
  },
  {
    name: "Pro",
    price: { m: 19, y: 190 },
    tagline: "For serious builders",
    cta: "Go Pro",
    features: ["Unlimited projects", "Email support", "Custom domains", "Advanced analytics", "Priority builds"],
    excluded: ["SSO / SAML"],
    accent: "bg-yellow-300",
    featured: true,
  },
  {
    name: "Team",
    price: { m: 49, y: 490 },
    tagline: "For squads of any size",
    cta: "Contact sales",
    features: ["Everything in Pro", "Seats up to 10", "SSO / SAML", "Audit logs", "99.9% SLA"],
    excluded: [],
    accent: "bg-pink-300",
  },
];

const faqs = [
  { q: "Can I switch plans?", a: "Yes — change or cancel anytime from your dashboard." },
  { q: "Do you offer refunds?", a: "We offer a 14-day no-questions-asked refund on all paid plans." },
  { q: "Is there a free trial?", a: "Pro and Team both come with a 14-day free trial. No card required." },
  { q: "Can I bring my own team?", a: "Team plan supports up to 10 seats — contact us for more." },
];

export default function RetroPricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen bg-[#ede7d6] text-black font-mono">
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center max-w-4xl mx-auto">
        <p className="text-[11px] tracking-[0.4em] uppercase opacity-60 mb-2">
          ★ PRICING · NO HIDDEN FEES ★
        </p>
        <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight mb-3">
          Pay for <span className="italic font-light">what you ship.</span>
        </h1>
        <p className="text-base opacity-80 max-w-xl mx-auto">
          Simple plans, plain English. Cancel anytime, no card hostage situations.
        </p>

        {/* Yearly toggle */}
        <div className="mt-8 inline-flex items-center gap-3 bg-white border-4 border-black shadow-[5px_5px_0px_0px_black] p-1">
          {["Monthly", "Yearly"].map((label, i) => {
            const active = (yearly ? "Yearly" : "Monthly") === label;
            return (
              <button
                key={label}
                onClick={() => setYearly(i === 1)}
                className={`px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-colors ${
                  active ? "bg-black text-white" : "text-black"
                }`}
              >
                {label}
                {i === 1 && (
                  <span className="ml-1.5 text-[9px] opacity-80">-20%</span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Tiers */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`${t.accent} relative border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 ${
                t.featured ? "md:-translate-y-3" : ""
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 bg-black text-yellow-300 text-[10px] font-black uppercase tracking-widest">
                  <Star className="w-3 h-3 fill-yellow-300" /> Most Popular
                </div>
              )}
              <h3 className="text-2xl font-black uppercase">{t.name}</h3>
              <p className="text-xs opacity-70 mt-0.5">{t.tagline}</p>

              <div className="mt-5 mb-5">
                <span className="text-5xl font-black">
                  ${yearly ? t.price.y : t.price.m}
                </span>
                <span className="text-xs opacity-60 ml-1">/ {yearly ? "yr" : "mo"}</span>
              </div>

              <button className="w-full py-2.5 bg-black text-white border-4 border-black font-black uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-colors">
                {t.cta}
              </button>

              <div className="mt-5 pt-5 border-t-2 border-dashed border-black/40 space-y-1.5">
                {t.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs">
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
                {t.excluded.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs opacity-40">
                    <X className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span className="line-through">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.4em] uppercase opacity-60">
            FREQUENTLY ASKED
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-1">
            Curious minds, answered.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="bg-white border-4 border-black shadow-[5px_5px_0px_0px_black] p-4 group"
            >
              <summary className="flex items-center justify-between cursor-pointer text-sm font-black uppercase tracking-wide list-none">
                <span className="flex items-center gap-3">
                  <span className="bg-black text-yellow-300 text-[10px] px-1.5 py-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.q}
                </span>
                <span className="text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm mt-3 pt-3 border-t-2 border-dashed border-black/30">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-black text-[#ede7d6] border-4 border-black p-10 text-center relative">
          <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
          <h3 className="text-3xl font-black uppercase">
            Still on the fence?
          </h3>
          <p className="opacity-70 mt-2 max-w-md mx-auto text-sm">
            Try Pro free for 14 days. We&apos;ll even send you a postcard.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-300 text-black border-4 border-yellow-300 font-black uppercase tracking-wider text-sm shadow-[4px_4px_0px_0px_white] hover:shadow-[2px_2px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Start free trial
          </button>
        </div>
      </section>
    </div>
  );
}
