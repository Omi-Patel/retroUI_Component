import React from "react";

const BasicFooter = () => {
  const items = [
    "© 2024 RETRO BRAND",
    "★ ALL RIGHTS RESERVED",
    "✱ MADE WITH NOSTALGIA",
    "▸ NO COOKIES, JUST CRUMBS",
    "✉ SAY HELLO@RETRO.DEV",
  ];

  return (
    <footer className="bg-black text-yellow-300 border-t-4 border-black font-mono overflow-hidden">
      <div className="py-2 whitespace-nowrap animate-[mqFoot_28s_linear_infinite] text-xs tracking-widest font-bold">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="inline-block px-6">
            {t} <span className="opacity-40">·</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes mqFoot { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }`}</style>
    </footer>
  );
};

export default BasicFooter;
