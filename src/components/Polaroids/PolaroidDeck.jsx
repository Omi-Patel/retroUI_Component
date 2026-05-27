import { Mountain, Sun, Palmtree } from "lucide-react";

const cards = [
  {
    Icon: Sun,
    caption: "day 03",
    tint: "bg-gradient-to-br from-yellow-200 to-orange-300",
    rotate: "rotate-[-8deg]",
    offset: "left-0 top-2",
  },
  {
    Icon: Mountain,
    caption: "day 02",
    tint: "bg-gradient-to-br from-sky-200 to-indigo-300",
    rotate: "rotate-[2deg]",
    offset: "left-12 top-0",
  },
  {
    Icon: Palmtree,
    caption: "day 01",
    tint: "bg-gradient-to-br from-emerald-200 to-teal-300",
    rotate: "rotate-[10deg]",
    offset: "left-24 top-3",
  },
];

const PolaroidDeck = () => {
  return (
    <div className="relative w-64 h-56">
      {cards.map(({ Icon, caption, tint, rotate, offset }) => (
        <div
          key={caption}
          className={`absolute bg-white p-2.5 pb-9 shadow-[5px_5px_0_0_rgba(0,0,0,0.25)] ${rotate} ${offset}`}
        >
          <div className={`w-32 h-32 ${tint} flex items-center justify-center`}>
            <Icon className="w-8 h-8 text-stone-700/50" strokeWidth={1.5} />
          </div>
          <p className="absolute bottom-1.5 left-0 right-0 text-center font-mono text-[11px] text-stone-700">
            {caption}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PolaroidDeck;
