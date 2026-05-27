import { CheckCircle2 } from "lucide-react";

const OrderReceipt = () => {
  return (
    <div className="relative inline-block w-72 bg-white text-stone-800 font-mono border-2 border-stone-900 shadow-[6px_6px_0_0_rgba(0,0,0,0.3)]">
      {/* Notched corners */}
      <span aria-hidden="true" className="absolute -top-1 left-4 w-3 h-3 bg-current rounded-full" style={{ background: "var(--bg, #fff)" }} />
      <span aria-hidden="true" className="absolute -top-1 right-4 w-3 h-3 bg-current rounded-full" style={{ background: "var(--bg, #fff)" }} />

      <div className="px-5 py-5 text-center border-b-2 border-dashed border-stone-400">
        <CheckCircle2 className="w-8 h-8 mx-auto text-green-600" strokeWidth={2.5} />
        <h3 className="mt-2 text-[16px] font-bold tracking-[0.18em] uppercase">
          Order Confirmed
        </h3>
        <p className="text-[10px] text-stone-500 tracking-widest mt-1">
          #ORD-2026-0427
        </p>
      </div>

      <div className="px-5 py-4 text-[12px] space-y-2">
        <div className="flex justify-between">
          <span className="text-stone-500">Customer</span>
          <span>J. PATEL</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">Method</span>
          <span>USPS Priority</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">ETA</span>
          <span>2-3 business days</span>
        </div>
      </div>

      <div className="px-5 pb-5">
        {/* Barcode */}
        <div className="flex items-end gap-0.5 h-12 mt-2">
          {[3, 1, 2, 1, 3, 2, 1, 2, 3, 1, 2, 1, 3, 2, 2, 1, 3, 2, 1, 3, 1, 2, 3, 1].map(
            (w, i) => (
              <span
                key={i}
                className="bg-stone-900"
                style={{ width: `${w}px`, height: "100%" }}
              />
            ),
          )}
        </div>
        <p className="text-center text-[10px] text-stone-500 mt-1 tracking-[0.3em]">
          0 042 2026 0427 1
        </p>
      </div>
    </div>
  );
};

export default OrderReceipt;
