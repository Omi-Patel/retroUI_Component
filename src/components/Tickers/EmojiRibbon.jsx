const items = [
  "★ HAND-MADE ZINES",
  "✿ FREE STICKERS",
  "♥ MADE WITH LOVE",
  "✦ LOCAL ARTISTS",
  "☼ SUMMER COLLECTION",
  "✰ LIMITED RUN",
];

const EmojiRibbon = () => {
  return (
    <div className="relative inline-flex w-full max-w-2xl overflow-hidden bg-gradient-to-r from-pink-300 via-yellow-200 to-cyan-300 border-y-4 border-black">
      <div className="flex w-max whitespace-nowrap gap-12 pr-12 animate-[ticker-marquee_40s_linear_infinite] py-2.5 font-bold text-[13px] tracking-[0.15em] text-black uppercase">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            {t}
            <span aria-hidden="true" className="mx-5 text-red-600">✺</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default EmojiRibbon;
