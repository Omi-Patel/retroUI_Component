import React, { useState } from "react";
import { ShoppingBag, Heart, X, Plus, Minus, Trash2, Star } from "lucide-react";

const products = [
  { id: 1, name: "Polaroid Camera", cat: "PHOTO", price: 129.99, emoji: "📷", color: "bg-pink-300" },
  { id: 2, name: "Vinyl Record Player", cat: "AUDIO", price: 189.99, emoji: "🎙", color: "bg-yellow-300" },
  { id: 3, name: "Brass Telescope", cat: "OPTICS", price: 79.99, emoji: "🔭", color: "bg-cyan-300" },
  { id: 4, name: "Leather Journal", cat: "PAPER", price: 39.99, emoji: "📓", color: "bg-orange-300" },
  { id: 5, name: "Vintage Typewriter", cat: "WRITE", price: 249.99, emoji: "⌨", color: "bg-lime-300" },
  { id: 6, name: "World Globe", cat: "DECOR", price: 89.99, emoji: "🌐", color: "bg-rose-300" },
];

export default function ModernProduct() {
  const [cart, setCart] = useState([]);
  const [likes, setLikes] = useState({});
  const [open, setOpen] = useState(false);

  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);

  const add = (p) => {
    setCart((c) => {
      const ex = c.find((x) => x.id === p.id);
      if (ex) return c.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...c, { ...p, qty: 1 }];
    });
    setOpen(true);
  };
  const inc = (id) =>
    setCart((c) => c.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x)));
  const dec = (id) =>
    setCart((c) =>
      c
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );
  const rm = (id) => setCart((c) => c.filter((x) => x.id !== id));
  const tog = (id) => setLikes((l) => ({ ...l, [id]: !l[id] }));

  return (
    <div className="min-h-screen bg-[#ede7d6] text-black font-mono">
      <header className="border-b-4 border-black bg-[#f5f1e6] sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-2xl font-black uppercase tracking-tight">
            Curio<span className="italic font-light"> · Co.</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {["Shop", "Catalog", "About", "Stockists"].map((it) => (
              <a
                key={it}
                href="#"
                className="px-3 py-1.5 text-xs uppercase tracking-widest font-bold hover:bg-yellow-300"
              >
                {it}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="relative inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-300 text-black border-4 border-black shadow-[3px_3px_0px_0px_black] text-xs font-black uppercase tracking-wider"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
                {cart.reduce((n, x) => n + x.qty, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="text-center mb-10">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-60">
            ★ CURATED · HAND-PICKED · POSTAGE INCLUDED ★
          </p>
          <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter mt-1">
            The General Store
          </h1>
          <p className="text-sm opacity-70 mt-2 max-w-lg mx-auto">
            Six objects worth keeping. All small-batch, all hand-stamped,
            shipped in brown paper.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const liked = likes[p.id];
            return (
              <article
                key={p.id}
                className="relative bg-[#f5f1e6] text-black border-4 border-black shadow-[6px_6px_0px_0px_black] flex flex-col"
              >
                <div
                  className={`relative ${p.color} h-44 border-b-4 border-black flex items-center justify-center text-6xl`}
                >
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(0,0,0,0.4) 1.2px, transparent 1.5px)",
                      backgroundSize: "8px 8px",
                    }}
                  />
                  <span className="relative">{p.emoji}</span>
                  <button
                    onClick={() => tog(p.id)}
                    aria-label="Like"
                    className={`absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 border-2 border-black ${
                      liked ? "bg-red-500 text-white" : "bg-[#f5f1e6] text-black"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${liked ? "fill-white" : ""}`} />
                  </button>
                  <span className="absolute top-2 left-2 bg-black text-yellow-300 text-[10px] font-black uppercase tracking-widest px-2 py-0.5">
                    {p.cat}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">
                    CAT № {String(p.id).padStart(3, "0")}
                  </p>
                  <h3 className="text-lg font-black uppercase mt-0.5 mb-2">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3 text-xs opacity-70">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                    <span className="ml-1 opacity-60">(127)</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t-2 border-dashed border-black/40 pt-3">
                    <span className="text-xl font-black">${p.price}</span>
                    <button
                      onClick={() => add(p)}
                      className="px-3 py-1.5 bg-black text-yellow-300 border-2 border-black text-xs font-black uppercase tracking-wider hover:bg-yellow-300 hover:text-black transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>

      {/* Cart drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />
          <div className="relative w-full max-w-sm bg-[#f5f1e6] text-black border-l-4 border-black flex flex-col font-mono">
            <header className="flex items-center justify-between px-5 py-3 border-b-4 border-black bg-yellow-300">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-70">
                  YOUR ORDER
                </p>
                <h2 className="font-black uppercase">Shopping Crate</h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-8 h-8 bg-[#f5f1e6] border-2 border-black hover:bg-black hover:text-yellow-300 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <p className="text-center opacity-60 text-sm py-12">
                  Crate is empty.
                  <br /> Pick something nice.
                </p>
              ) : (
                cart.map((it) => (
                  <div
                    key={it.id}
                    className="bg-[#ede7d6] border-2 border-black shadow-[3px_3px_0px_0px_black] p-3 flex items-center gap-3"
                  >
                    <div
                      className={`${it.color} w-12 h-12 border-2 border-black flex items-center justify-center text-2xl flex-shrink-0`}
                    >
                      {it.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black uppercase truncate">
                        {it.name}
                      </p>
                      <p className="text-[10px] opacity-60">
                        ${it.price} × {it.qty}
                      </p>
                      <div className="mt-1 inline-flex items-center border-2 border-black">
                        <button
                          onClick={() => dec(it.id)}
                          className="px-1.5 hover:bg-yellow-300"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="px-2 text-xs font-bold">{it.qty}</span>
                        <button
                          onClick={() => inc(it.id)}
                          className="px-1.5 hover:bg-yellow-300"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => rm(it.id)}
                      className="text-red-600 p-1"
                      aria-label="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            <footer className="border-t-4 border-dashed border-black p-4 space-y-3 bg-[#f5f1e6]">
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Postage</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-base font-black border-t-2 border-dashed border-black/40 pt-2">
                <span>TOTAL</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                disabled={!cart.length}
                className="w-full py-3 bg-black text-yellow-300 border-4 border-black text-xs font-black uppercase tracking-wider disabled:opacity-40 hover:bg-yellow-300 hover:text-black transition-colors"
              >
                Checkout →
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
