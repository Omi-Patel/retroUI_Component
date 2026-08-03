import React from "react";
import { Calendar, User, ChevronRight } from "lucide-react";

const posts = [
  {
    id: 1,
    cat: "MUSIC",
    title: "The Revival of Vinyl: Why Records Are Making a Comeback",
    excerpt:
      "Explore the resurgence of vinyl records in the digital age and why music enthusiasts are returning to this classic format.",
    date: "June 15, 2023",
    author: "Alex Johnson",
  },
  {
    id: 2,
    cat: "GAMES",
    title: "Retro Gaming: Nostalgia or Genuine Appreciation?",
    excerpt:
      "Dive into the world of retro gaming and discover why old-school video games continue to captivate players of all ages.",
    date: "June 22, 2023",
    author: "Sam Lee",
  },
  {
    id: 3,
    cat: "PHOTO",
    title: "The Art of Analog Photography in a Digital World",
    excerpt:
      "Uncover the charm and craftsmanship behind analog photography and why it's still relevant in today's landscape.",
    date: "June 29, 2023",
    author: "Mia Chen",
  },
  {
    id: 4,
    cat: "DESIGN",
    title: "Hand-Drawn Type: The Wobble that Won the Web",
    excerpt:
      "How imperfect, hand-drawn letterforms became the antidote to algorithmic perfection on the modern internet.",
    date: "July 02, 2023",
    author: "Jules Park",
  },
];

export default function BasicBlog() {
  return (
    <div className="min-h-screen bg-[#ede7d6] text-black font-mono">
      {/* Masthead */}
      <header className="border-b-4 border-double border-black bg-[#f5f1e6] py-6 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">
          ESTABLISHED 1997 · PUBLISHED FRIDAYS
        </p>
        <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter leading-none mt-1">
          The Daily Zine
        </h1>
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 mt-1">
          ✱ ALL THE NEWS THAT&apos;S OLD AGAIN ✱
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Lead column */}
        <article className="mb-10 border-b-4 border-dashed border-black pb-8">
          <div className="flex items-baseline gap-3 mb-2 flex-wrap">
            <span className="bg-black text-yellow-300 text-[10px] font-black uppercase tracking-widest px-2 py-0.5">
              LEAD STORY
            </span>
            <span className="text-[10px] tracking-widest uppercase opacity-60">
              {posts[0].date}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-3">
            {posts[0].title}
          </h2>
          <p
            className="text-base leading-relaxed columns-1 md:columns-2 gap-8 mb-4"
            style={{ columnRule: "1px dashed rgba(0,0,0,0.3)" }}
          >
            {posts[0].excerpt} The needles, once shelved beside dusty boxes of
            forgotten 78s, are back in rotation. Independent pressing plants
            are pressing again. And the LP, that great vinyl revival, has
            quietly become a fixture of the modern bedroom.
          </p>
          <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase opacity-60">
            <span className="inline-flex items-center gap-1">
              <User className="w-3 h-3" /> {posts[0].author}
            </span>
            <span>·</span>
            <a href="#" className="font-bold underline">
              CONTINUED ON PAGE 4
            </a>
          </div>
        </article>

        {/* 3-column issue list */}
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 mb-4">
          ALSO ON THE WIRE
        </p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(1).map((p, i) => (
            <article
              key={p.id}
              className="relative pt-2"
              style={
                i < 2
                  ? { borderRight: "1px dashed rgba(0,0,0,0.3)", paddingRight: "1.5rem" }
                  : undefined
              }
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="bg-black text-yellow-300 text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5">
                  {p.cat}
                </span>
                <span className="text-[10px] tracking-widest uppercase opacity-50">
                  {p.date}
                </span>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight leading-tight mb-2">
                {p.title}
              </h3>
              <p className="text-xs opacity-80 mb-3">{p.excerpt}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest underline-offset-4 hover:underline"
              >
                Read on <ChevronRight className="w-3 h-3" />
              </a>
            </article>
          ))}
        </section>

        {/* Bottom band */}
        <div className="flex items-center gap-4 mt-12">
          <span className="flex-1 border-t-2 border-dashed border-black/30" />
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-60">
            END · COLUMN 03
          </span>
          <span className="flex-1 border-t-2 border-dashed border-black/30" />
        </div>
      </main>

      <footer className="border-t-4 border-black bg-black text-[#ede7d6] py-4 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">
          <Calendar className="w-3 h-3 inline mr-1" />
          THE DAILY ZINE · NO REFUNDS · NO REGRETS
        </p>
      </footer>
    </div>
  );
}
