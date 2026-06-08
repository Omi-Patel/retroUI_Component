const steps = [
  { label: "Cart", done: true },
  { label: "Shipping", done: true },
  { label: "Payment", done: false, active: true },
  { label: "Review", done: false },
];

const Perforation = () => (
  <div
    aria-hidden="true"
    className="h-2 w-full"
    style={{
      backgroundImage: "radial-gradient(circle at 6px 0, var(--bg, #fff) 4px, transparent 4.5px)",
      backgroundSize: "12px 8px",
    }}
  />
);

const ReceiptCheckout = () => {
  return (
    <div className="inline-block w-72 bg-white text-stone-800 shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] font-mono">
      <Perforation />
      <div className="px-5 py-4">
        <h3 className="text-center text-[14px] font-bold tracking-[0.2em] uppercase">Checkout</h3>
        <p className="text-center text-[10px] text-stone-500 tracking-widest mt-0.5">
          ORDER #8842 · STEP 3/4
        </p>
        <div className="my-3 border-t border-dashed border-stone-400" />

        <ul className="text-[12px] space-y-2">
          {steps.map((s, i) => (
            <li key={s.label} className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span
                  className={`w-4 h-4 flex items-center justify-center border text-[10px] font-bold ${
                    s.done
                      ? "bg-stone-800 text-white border-stone-800"
                      : s.active
                      ? "border-stone-800"
                      : "border-stone-300 text-stone-300"
                  }`}
                >
                  {s.done ? "✓" : i + 1}
                </span>
                <span className={s.active ? "font-bold" : s.done ? "" : "text-stone-400"}>
                  {s.label}
                </span>
              </span>
              <span className="text-[10px] tracking-widest text-stone-500">
                {s.done ? "PAID" : s.active ? "•••" : "—"}
              </span>
            </li>
          ))}
        </ul>

        <div className="my-3 border-t border-dashed border-stone-400" />

        <div className="flex justify-between text-[12px]">
          <span>Subtotal</span>
          <span>$42.00</span>
        </div>
        <div className="flex justify-between text-[12px] text-stone-500">
          <span>Shipping</span>
          <span>$6.50</span>
        </div>
        <div className="my-3 border-t-2 border-double border-stone-700" />
        <div className="flex justify-between text-[14px] font-bold">
          <span>TOTAL</span>
          <span>$48.50</span>
        </div>

        <button className="mt-4 w-full bg-stone-800 text-white text-[11px] font-bold uppercase tracking-[0.2em] py-2">
          ▸ Continue to Payment
        </button>
        <p className="mt-3 text-center text-[9px] text-stone-500 tracking-widest">
          ★ SECURE TERMINAL ★
        </p>
      </div>
      <Perforation />
    </div>
  );
};

export default ReceiptCheckout;
