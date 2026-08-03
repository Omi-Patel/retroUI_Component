import { Check } from "lucide-react";

// Classified-ads pricing — three column inches of faded newsprint.
const tiers = [
  {
    name: "Classified",
    price: "$0",
    per: "/ forever",
    blurb: "For hobbyists & zine makers.",
    features: ["3 projects", "Community support", "Basic components"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Front Page",
    price: "$12",
    per: "/ month",
    blurb: "For indie hackers shipping weekly.",
    features: [
      "Unlimited projects",
      "Priority support",
      "All components",
      "Page templates",
    ],
    cta: "Go front page",
    featured: true,
  },
  {
    name: "Syndicate",
    price: "$49",
    per: "/ month",
    blurb: "For teams & agencies.",
    features: ["Everything in Front Page", "5 seats", "Custom themes"],
    cta: "Contact sales",
    featured: false,
  },
];

const NewsprintPricing = () => {
  return (
    <div className="w-full max-w-4xl bg-[#f5f1e6] text-stone-900 border-4 border-black font-mono">
      {/* Masthead */}
      <div className="text-center border-b-4 border-double border-black px-6 py-4">
        <p className="text-[10px] tracking-[0.4em] uppercase text-stone-500">
          VOL. 27 · RATES CARD · EST. 1997
        </p>
        <h2 className="text-3xl font-black uppercase tracking-tight mt-1">
          The Daily Rates
        </h2>
        <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mt-1">
          ~ ALL PRICES IN GOOD FAITH ~
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative p-6 flex flex-col ${
              t.featured ? "bg-yellow-100" : "bg-transparent"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 border-2 border-black rotate-[-2deg]">
                Best Value
              </span>
            )}
            <h3 className="text-sm font-black uppercase tracking-[0.2em]">
              {t.name}
            </h3>
            <p className="text-[11px] text-stone-500 mt-1">{t.blurb}</p>

            <div className="flex items-baseline gap-1 mt-4 pb-4 border-b-2 border-dashed border-stone-400">
              <span className="text-4xl font-black tracking-tight">
                {t.price}
              </span>
              <span className="text-[11px] text-stone-500 uppercase tracking-wider">
                {t.per}
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-[12px] flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full py-2.5 text-[11px] font-black uppercase tracking-[0.2em] border-2 border-black transition-colors ${
                t.featured
                  ? "bg-black text-white hover:bg-red-600 hover:border-red-600"
                  : "bg-transparent hover:bg-black hover:text-white"
              }`}
            >
              {t.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="border-t-4 border-black text-center py-2 text-[9px] uppercase tracking-[0.3em] text-stone-500">
        ★ Cancel anytime · No hidden column inches ★
      </div>
    </div>
  );
};

export default NewsprintPricing;
