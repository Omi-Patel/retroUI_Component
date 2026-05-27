import React from "react";

const ArrowBreadcrumb = () => {
  const items = [
    { label: "Shop", color: "bg-yellow-300" },
    { label: "Music", color: "bg-pink-300" },
    { label: "Vinyl", color: "bg-cyan-300" },
  ];
  return (
    <nav className="font-mono" aria-label="Breadcrumb">
      <ol className="inline-flex">
        {items.map((it, i) => (
          <li
            key={it.label}
            className={`relative ${it.color} text-black border-2 border-black px-4 py-1.5 text-xs font-black uppercase`}
            style={{
              clipPath:
                i === items.length - 1
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 12px 50%)"
                  : "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)",
              marginLeft: i === 0 ? 0 : -2,
              paddingLeft: i === 0 ? 16 : 20,
              paddingRight: i === items.length - 1 ? 16 : 20,
            }}
          >
            {it.label}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ArrowBreadcrumb;
