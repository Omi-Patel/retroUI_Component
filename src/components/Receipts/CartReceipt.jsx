const items = [
  { name: "Zine Issue #04", qty: 1, price: 8.0 },
  { name: "Sticker Pack", qty: 2, price: 6.0 },
  { name: "Patch (embroidered)", qty: 1, price: 5.5 },
];

const Perforation = () => (
  <div
    aria-hidden="true"
    className="h-2 w-full"
    style={{
      backgroundImage:
        "radial-gradient(circle at 6px 0, var(--bg, #fff) 4px, transparent 4.5px)",
      backgroundSize: "12px 8px",
    }}
  />
);

const CartReceipt = () => {
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="inline-block w-72 bg-white text-stone-800 shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] font-mono">
      <Perforation />
      <div className="px-5 py-4">
        <h3 className="text-center text-[15px] font-bold tracking-[0.2em] uppercase">
          Your Cart
        </h3>
        <p className="text-center text-[10px] text-stone-500 tracking-widest mt-0.5">
          ORDER #4421 · 27 MAY 2026
        </p>
        <div className="my-3 border-t border-dashed border-stone-400" />

        <ul className="text-[12px] space-y-1.5">
          {items.map((i) => (
            <li key={i.name} className="flex justify-between gap-3">
              <span className="truncate">
                {i.qty}× {i.name}
              </span>
              <span>${(i.qty * i.price).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="my-3 border-t border-dashed border-stone-400" />

        <div className="text-[12px] space-y-1">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-stone-500">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <div className="my-3 border-t-2 border-double border-stone-700" />

        <div className="flex justify-between text-[15px] font-bold">
          <span>TOTAL</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <p className="mt-4 text-center text-[10px] text-stone-500 tracking-widest">
          ★ THANK YOU ★ COME AGAIN ★
        </p>
      </div>
      <Perforation />
    </div>
  );
};

export default CartReceipt;
