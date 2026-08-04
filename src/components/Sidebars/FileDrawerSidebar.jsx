// File-drawer sidebar — a card-catalog cabinet of nav drawers with a storage meter.
import { useState } from "react";
import {
  Inbox,
  FolderOpen,
  FileText,
  Stamp,
  Archive,
  HardDrive,
} from "lucide-react";

const drawers = [
  { label: "Inbox", code: "A-01", icon: Inbox },
  { label: "Projects", code: "B-02", icon: FolderOpen },
  { label: "Invoices", code: "C-03", icon: FileText },
  { label: "Approvals", code: "D-04", icon: Stamp },
  { label: "Archive", code: "E-05", icon: Archive },
];

const FileDrawerSidebar = () => {
  const [active, setActive] = useState("Projects");

  return (
    <aside className="w-[230px] h-[380px] flex flex-col bg-[#f5f1e6] text-black font-mono border-4 border-black shadow-[6px_6px_0_0_black]">
      {/* Brand header */}
      <div className="px-4 py-3 bg-black text-amber-100 border-b-4 border-black">
        <p className="text-sm font-black uppercase tracking-tight">
          Cabinet Co.
        </p>
        <p className="text-[9px] uppercase tracking-[0.3em] text-amber-100/60">
          Records Dept.
        </p>
      </div>

      {/* Drawer rows */}
      <nav aria-label="Cabinet sections" className="flex-1 p-3 space-y-2 overflow-y-auto">
        {drawers.map(({ label, code, icon: Icon }) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              aria-current={isActive ? "page" : undefined}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-left border-2 border-black transition-all ${
                isActive
                  ? "bg-amber-300 shadow-[3px_3px_0_0_black] -translate-x-0.5 -translate-y-0.5"
                  : "bg-white hover:bg-amber-100 shadow-[2px_2px_0_0_black] hover:shadow-[3px_3px_0_0_black]"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-[11px] font-bold uppercase tracking-wider">
                {label}
              </span>
              <span className="text-[9px] font-bold bg-black text-amber-100 px-1 py-0.5">
                {code}
              </span>
              {/* drawer handle */}
              <span
                aria-hidden="true"
                className="w-4 h-1.5 border-2 border-black rounded-sm shrink-0"
              />
            </button>
          );
        })}
      </nav>

      {/* Storage meter */}
      <div className="px-3 py-3 border-t-4 border-black bg-amber-50">
        <div className="flex items-center justify-between mb-1.5">
          <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.2em]">
            <HardDrive className="w-3 h-3" /> Storage
          </span>
          <span className="text-[9px] font-bold">62%</span>
        </div>
        <div
          role="meter"
          aria-label="Storage used"
          aria-valuenow={62}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-3 border-2 border-black bg-white flex overflow-hidden"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`flex-1 border-r border-black/30 last:border-r-0 ${
                i < 6 ? "bg-black" : "bg-transparent"
              }`}
            />
          ))}
        </div>
        <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-stone-500">
          620 MB of 1,000 MB filed
        </p>
      </div>
    </aside>
  );
};

export default FileDrawerSidebar;
