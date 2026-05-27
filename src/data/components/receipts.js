import { ShoppingCart, PackageCheck, CreditCard, Undo2 } from 'lucide-react';

import CartReceipt from '../../components/Receipts/CartReceipt';
import OrderReceipt from '../../components/Receipts/OrderReceipt';
import TransactionSlip from '../../components/Receipts/TransactionSlip';
import ReturnSlip from '../../components/Receipts/ReturnSlip';

export const receiptComponents = [
  {
    name: 'CartReceipt',
    component: CartReceipt,
    icon: ShoppingCart,
    colors: {
      gradient: 'from-stone-400 to-stone-600',
      bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-900',
    },
    code: `const items = [
  { name: "Zine Issue #04", qty: 1, price: 8.00 },
  { name: "Sticker Pack", qty: 2, price: 6.00 },
  { name: "Patch (embroidered)", qty: 1, price: 5.50 },
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
        <h3 className="text-center text-[15px] font-bold tracking-[0.2em] uppercase">Your Cart</h3>
        <p className="text-center text-[10px] text-stone-500 tracking-widest mt-0.5">
          ORDER #4421 · 27 MAY 2026
        </p>
        <div className="my-3 border-t border-dashed border-stone-400" />
        <ul className="text-[12px] space-y-1.5">
          {items.map((i) => (
            <li key={i.name} className="flex justify-between gap-3">
              <span className="truncate">{i.qty}× {i.name}</span>
              <span>\${(i.qty * i.price).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="my-3 border-t border-dashed border-stone-400" />
        <div className="text-[12px] space-y-1">
          <div className="flex justify-between"><span>Subtotal</span><span>\${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-stone-500"><span>Tax (8%)</span><span>\${tax.toFixed(2)}</span></div>
        </div>
        <div className="my-3 border-t-2 border-double border-stone-700" />
        <div className="flex justify-between text-[15px] font-bold">
          <span>TOTAL</span>
          <span>\${total.toFixed(2)}</span>
        </div>
        <p className="mt-4 text-center text-[10px] text-stone-500 tracking-widest">
          ★ THANK YOU ★ COME AGAIN ★
        </p>
      </div>
      <Perforation />
    </div>
  );
};

export default CartReceipt;`,
  },
  {
    name: 'OrderReceipt',
    component: OrderReceipt,
    icon: PackageCheck,
    colors: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30',
    },
    code: `import { CheckCircle2 } from "lucide-react";

const OrderReceipt = () => {
  return (
    <div className="relative inline-block w-72 bg-white text-stone-800 font-mono border-2 border-stone-900 shadow-[6px_6px_0_0_rgba(0,0,0,0.3)]">
      <div className="px-5 py-5 text-center border-b-2 border-dashed border-stone-400">
        <CheckCircle2 className="w-8 h-8 mx-auto text-green-600" strokeWidth={2.5} />
        <h3 className="mt-2 text-[16px] font-bold tracking-[0.18em] uppercase">Order Confirmed</h3>
        <p className="text-[10px] text-stone-500 tracking-widest mt-1">#ORD-2026-0427</p>
      </div>
      <div className="px-5 py-4 text-[12px] space-y-2">
        <div className="flex justify-between"><span className="text-stone-500">Customer</span><span>J. PATEL</span></div>
        <div className="flex justify-between"><span className="text-stone-500">Method</span><span>USPS Priority</span></div>
        <div className="flex justify-between"><span className="text-stone-500">ETA</span><span>2-3 business days</span></div>
      </div>
      <div className="px-5 pb-5">
        <div className="flex items-end gap-0.5 h-12 mt-2">
          {[3,1,2,1,3,2,1,2,3,1,2,1,3,2,2,1,3,2,1,3,1,2,3,1].map((w, i) => (
            <span key={i} className="bg-stone-900" style={{ width: \`\${w}px\`, height: "100%" }} />
          ))}
        </div>
        <p className="text-center text-[10px] text-stone-500 mt-1 tracking-[0.3em]">0 042 2026 0427 1</p>
      </div>
    </div>
  );
};

export default OrderReceipt;`,
  },
  {
    name: 'TransactionSlip',
    component: TransactionSlip,
    icon: CreditCard,
    colors: {
      gradient: 'from-amber-400 to-yellow-500',
      bg: 'bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/30',
    },
    code: `const TransactionSlip = () => {
  return (
    <div className="relative inline-block w-72 bg-[#fefbf2] text-stone-800 font-mono border border-stone-300 shadow-[5px_5px_0_0_rgba(0,0,0,0.18)]">
      <div className="px-5 py-4 text-center border-b border-stone-300">
        <p className="text-[10px] tracking-[0.25em] text-stone-500">MERCHANT COPY</p>
        <h3 className="text-[14px] font-bold tracking-widest mt-1">RETROUI CORNER STORE</h3>
        <p className="text-[10px] text-stone-500 mt-0.5">1995 Main St · Anytown, USA</p>
      </div>
      <div className="px-5 py-4 text-[12px] space-y-1.5">
        <div className="flex justify-between"><span className="text-stone-500">DATE</span><span>05/27/26 14:32</span></div>
        <div className="flex justify-between"><span className="text-stone-500">CARD</span><span>**** **** **** 4242</span></div>
        <div className="flex justify-between"><span className="text-stone-500">AUTH #</span><span>008142</span></div>
        <div className="flex justify-between"><span className="text-stone-500">REF</span><span>TX-0042-981</span></div>
        <div className="my-2 border-t border-dashed border-stone-400" />
        <div className="flex justify-between text-[15px] font-bold"><span>AMOUNT</span><span>$24.50</span></div>
      </div>
      <div className="px-5 pb-4 relative">
        <div className="absolute -right-1 top-2 rotate-[-12deg] border-[2.5px] border-double border-green-700 text-green-700 px-3 py-0.5 text-[12px] font-bold tracking-[0.18em]">
          APPROVED
        </div>
        <p className="text-[10px] text-stone-500 mt-8">
          Signature on file. No customer signature required.
        </p>
      </div>
    </div>
  );
};

export default TransactionSlip;`,
  },
  {
    name: 'ReturnSlip',
    component: ReturnSlip,
    icon: Undo2,
    colors: {
      gradient: 'from-red-500 to-rose-600',
      bg: 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-900/30',
    },
    code: `const ReturnSlip = () => {
  return (
    <div className="relative inline-block w-72 bg-white text-stone-800 font-mono border border-stone-400 shadow-[5px_5px_0_0_rgba(0,0,0,0.18)] overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[88px] font-bold tracking-widest text-red-500/15 -rotate-[18deg] select-none">VOID</span>
      </div>
      <div className="relative px-5 py-4 border-b border-dashed border-stone-400">
        <h3 className="text-[14px] font-bold tracking-[0.18em] uppercase text-center">Return Slip</h3>
        <p className="text-center text-[10px] text-stone-500 mt-1 tracking-widest">RTN-2026-0517</p>
      </div>
      <div className="relative px-5 py-3 text-[12px] space-y-1.5">
        <div className="flex justify-between"><span className="text-stone-500">ORIGINAL</span><span>ORD-2026-0312</span></div>
        <div className="flex justify-between"><span className="text-stone-500">ITEM</span><span>Sticker Pack ×1</span></div>
        <div className="flex justify-between"><span className="text-stone-500">REASON</span><span>Damaged in transit</span></div>
      </div>
      <div className="relative my-2 mx-5 border-t border-dashed border-stone-400" />
      <div className="relative px-5 pb-4 flex justify-between items-baseline">
        <span className="text-[12px] text-stone-500">REFUND</span>
        <span className="text-[16px] font-bold text-red-700">−$6.00</span>
      </div>
      <div className="relative px-5 pb-4 text-center">
        <p className="text-[10px] text-stone-500 tracking-widest">Processed via original payment method</p>
      </div>
    </div>
  );
};

export default ReturnSlip;`,
  },
];

export default receiptComponents;
