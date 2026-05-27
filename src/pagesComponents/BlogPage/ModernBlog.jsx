import React from "react";
import { Calendar, User, ArrowRight, Coffee, Disc, Camera } from "lucide-react";

const featured = {
  title: "The Enduring Appeal of Mid-Century Modern Design",
  excerpt:
    "Discover why the clean lines and organic forms of mid-century modern design continue to captivate interior enthusiasts decades later.",
  date: "July 5, 2023",
  author: "Lisa Wong",
  read: "8 min",
};

const posts = [
  {
    id: 1,
    title: "Vintage Fashion: From Throwback to Trendsetter",
    excerpt:
      "Explore how vintage pieces are making their way back into modern wardrobes and influencing today's designers.",
    date: "July 12, 2023",
    author: "Mark Thompson",
    read: "5 min",
    badge: "STYLE",
    color: "bg-pink-300",
    Icon: Coffee,
  },
  {
    id: 2,
    title: "The Resurgence of Drive-In Theaters",
    excerpt:
      "Learn about the unexpected comeback of drive-in theaters and their newfound popularity in today's landscape.",
    date: "July 19, 2023",
    author: "Rachel Green",
    read: "6 min",
    badge: "CINEMA",
    color: "bg-cyan-300",
    Icon: Disc,
  },
  {
    id: 3,
    title: "Analog Photography in a Digital World",
    excerpt:
      "The unhurried craft of film, and why a new generation is returning to it after decades of pixels.",
    date: "July 26, 2023",
    author: "Sam Lee",
    read: "7 min",
    badge: "PHOTO",
    color: "bg-yellow-300",
    Icon: Camera,
  },
];

export default function ModernBlog() {
  return (
    <div className="min-h-screen bg-[#ede7d6] text-black font-mono">
      {/* Masthead */}
      <header className="border-b-4 border-black bg-[#f5f1e6]">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">
            VOL. 27 · NO. 14 · WEEKLY EDITION
          </p>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none mt-1">
            The Retrograde
          </h1>
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 mt-1">
            ★ HEADLINES FROM THE PAST · DELIVERED FRESH ★
          </p>
        </div>
        <nav className="border-t-2 border-black/30 bg-black text-yellow-300">
          <div className="max-w-6xl mx-auto px-6 py-2 flex items-center gap-1 overflow-x-auto">
            {["All", "Design", "Style", "Cinema", "Photo", "Music", "Tech"].map(
              (item, i) => (
                <a
                  key={item}
                  href="#"
                  className={`px-3 py-1 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap ${
                    i === 0 ? "bg-yellow-300 text-black" : "hover:bg-yellow-300/20"
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Featured */}
        <section className="mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 mb-3">
            FRONT PAGE · TOP STORY
          </p>
          <article className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] p-6">
            <div className="md:col-span-5">
              <div
                className="aspect-[4/5] bg-black text-yellow-300 border-2 border-black flex flex-col items-center justify-center p-6"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 8px)",
                }}
              >
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-70">
                  COVER · ESSAY
                </p>
                <h2 className="text-4xl font-black uppercase tracking-tighter text-center leading-none mt-3">
                  Less is
                  <br />
                  <span className="italic font-light text-pink-300">
                    more again.
                  </span>
                </h2>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="inline-block w-fit bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 border-2 border-black rotate-[-2deg] mb-3">
                FEATURED
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight mb-3">
                {featured.title}
              </h3>
              <p className="text-sm opacity-80 mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase opacity-60 mb-5">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {featured.date}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <User className="w-3 h-3" /> {featured.author}
                </span>
                <span>·</span>
                <span>{featured.read} read</span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-yellow-300 text-black border-4 border-black shadow-[4px_4px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] transition-all text-xs font-black uppercase tracking-wider"
              >
                Read full essay <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </article>
        </section>

        {/* Three-column issue */}
        <section className="border-t-4 border-double border-black pt-8 mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 mb-1 text-center">
            ALSO IN THIS ISSUE
          </p>
          <h2 className="text-2xl font-black uppercase text-center mb-6">
            The Columns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((p) => (
              <article
                key={p.id}
                className="bg-[#f5f1e6] text-black border-4 border-black shadow-[6px_6px_0px_0px_black] flex flex-col"
              >
                <div
                  className={`${p.color} border-b-4 border-black p-5 flex items-center justify-between`}
                >
                  <p.Icon className="w-7 h-7" />
                  <span className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5">
                    {p.badge}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-black uppercase tracking-tight leading-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs opacity-80 mb-4 flex-1">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-[10px] tracking-widest uppercase opacity-60 border-t-2 border-dashed border-black/40 pt-3">
                    <span>
                      {p.date.split(",")[0]} · {p.read}
                    </span>
                    <a href="#" className="font-bold underline">
                      READ →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom band */}
        <section className="border-t-4 border-double border-black pt-6 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">
            ★ MORE STORIES · PAGE 2-A ★
          </p>
        </section>
      </main>

      <footer className="border-t-4 border-black bg-black text-[#ede7d6] py-4 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">
          THE RETROGRADE · PRINTED ON THE INTERNET · ©{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
