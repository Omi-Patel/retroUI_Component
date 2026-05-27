import React, { useState, useEffect } from "react";

const ReceiptToast = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <div className="relative">
      <button
        onClick={() => setShow(true)}
        className="px-5 py-2 font-mono font-bold text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all"
      >
        Print Receipt
      </button>

      {show && (
        <div className="fixed top-6 right-6 z-50">
          <div
            className="bg-white text-black border-x border-black/40 px-5 py-3 font-mono w-64 animate-[receiptSlide_0.4s_ease-out]"
            style={{
              boxShadow:
                "0 8px 30px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="-mx-5 -mt-3 mb-3 h-2 bg-white"
              style={{
                clipPath:
                  "polygon(0 0, 6% 100%, 12% 0, 18% 100%, 24% 0, 30% 100%, 36% 0, 42% 100%, 48% 0, 54% 100%, 60% 0, 66% 100%, 72% 0, 78% 100%, 84% 0, 90% 100%, 96% 0, 100% 100%, 0 100%)",
              }}
            />
            <p className="text-center text-[10px] tracking-[0.3em] mb-1">
              * THANK YOU *
            </p>
            <p className="text-center text-sm font-bold uppercase mb-2">
              Order Confirmed
            </p>
            <div className="border-t border-dashed border-black/60 pt-2 text-[11px] space-y-0.5">
              <div className="flex justify-between">
                <span>Item</span>
                <span>1x</span>
              </div>
              <div className="flex justify-between">
                <span>Status</span>
                <span>SHIPPED</span>
              </div>
              <div className="flex justify-between font-bold border-t border-dashed border-black/60 mt-1 pt-1">
                <span>TOTAL</span>
                <span>$00.00</span>
              </div>
            </div>
            <p className="text-center text-[9px] mt-2 opacity-60">
              #00417 · {new Date().toLocaleTimeString()}
            </p>
            <div
              className="-mx-5 -mb-3 h-2 mt-2 bg-white"
              style={{
                clipPath:
                  "polygon(0 0, 6% 100%, 12% 0, 18% 100%, 24% 0, 30% 100%, 36% 0, 42% 100%, 48% 0, 54% 100%, 60% 0, 66% 100%, 72% 0, 78% 100%, 84% 0, 90% 100%, 96% 0, 100% 100%, 0 0)",
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes receiptSlide {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ReceiptToast;
