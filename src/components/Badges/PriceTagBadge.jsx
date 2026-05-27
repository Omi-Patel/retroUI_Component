import React from "react";

const PriceTagBadge = () => {
  const tags = [
    { color: "bg-orange-200", label: "SALE", price: "$9" },
    { color: "bg-lime-200", label: "NEW", price: "$24" },
    { color: "bg-rose-200", label: "PRO", price: "$49" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {tags.map((t) => (
        <span
          key={t.label}
          className={`relative inline-flex items-center pl-6 pr-4 py-1.5 ${t.color} text-black border-2 border-black font-mono text-xs font-black uppercase`}
          style={{
            clipPath:
              "polygon(0 50%, 14% 0, 100% 0, 100% 100%, 14% 100%)",
          }}
        >
          <span className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black" />
          <span className="mr-2 tracking-widest">{t.label}</span>
          <span className="border-l-2 border-black/40 pl-2">{t.price}</span>
        </span>
      ))}
    </div>
  );
};

export default PriceTagBadge;
