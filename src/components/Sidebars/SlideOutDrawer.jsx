// Slide-out drawer — a hamburger opens a left drawer inside a framed demo stage.
import { useState, useEffect } from "react";
import { Menu, X, Home, Newspaper, Package, Phone } from "lucide-react";

const links = [
  { label: "Front Page", icon: Home, active: true },
  { label: "Dispatches", icon: Newspaper, active: false },
  { label: "Catalog", icon: Package, active: false },
  { label: "Operator", icon: Phone, active: false },
];

const SlideOutDrawer = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative w-full max-w-md h-[380px] overflow-hidden bg-[#f5f1e6] text-black font-mono border-4 border-black shadow-[6px_6px_0_0_black]">
      {/* Demo page chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b-4 border-black bg-amber-100">
        <button
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="Open navigation drawer"
          className="p-1.5 bg-white border-2 border-black shadow-[3px_3px_0_0_black] hover:shadow-[4px_4px_0_0_black] transition-all"
        >
          <Menu className="w-4 h-4" />
        </button>
        <span className="text-sm font-black uppercase tracking-tight">
          The Daily Drawer
        </span>
        <span className="ml-auto text-[9px] uppercase tracking-[0.3em] text-stone-500">
          Est. 1994
        </span>
      </div>
      <div className="p-4 space-y-2" aria-hidden="true">
        <div className="h-3 w-3/4 bg-black/15" />
        <div className="h-3 w-full bg-black/10" />
        <div className="h-3 w-5/6 bg-black/10" />
        <div className="h-24 mt-3 border-2 border-dashed border-black/40 flex items-center justify-center text-[9px] uppercase tracking-[0.3em] text-stone-500">
          Page Content
        </div>
      </div>

      {open && (
        <>
          {/* Scrim */}
          <div
            onClick={() => setOpen(false)}
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-black/60"
          />
          {/* Drawer */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute inset-y-0 left-0 z-20 w-56 bg-[#f5f1e6] border-r-4 border-black shadow-[6px_0_0_0_rgba(0,0,0,0.4)] flex flex-col animate-[drawer-slide-in_0.2s_ease-out]"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b-2 border-dashed border-black">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Index
              </span>
              <button
                onClick={() => setOpen(false)}
                autoFocus
                aria-label="Close navigation drawer"
                className="p-1 bg-white border-2 border-black shadow-[2px_2px_0_0_black] hover:bg-black hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <nav aria-label="Drawer links" className="flex-1 p-3 space-y-2">
              {links.map(({ label, icon: Icon, active }) => (
                <a
                  key={label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2.5 px-3 py-2 text-[11px] font-bold uppercase tracking-wider border-2 border-black transition-all ${
                    active
                      ? "bg-black text-amber-100"
                      : "bg-white hover:bg-amber-200 shadow-[2px_2px_0_0_black]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </a>
              ))}
            </nav>
            <p className="px-4 py-3 border-t-2 border-dashed border-black text-[8px] uppercase tracking-[0.25em] text-stone-500">
              Esc closes the drawer
            </p>
          </div>
        </>
      )}

      <style>{`
        @keyframes drawer-slide-in {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default SlideOutDrawer;
