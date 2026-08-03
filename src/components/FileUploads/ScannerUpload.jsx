// Scanner upload — a flatbed scanner that "scans" each chosen file with a moving beam.
import { useState, useRef, useEffect } from "react";
import { ScanLine, X } from "lucide-react";

const ScannerUpload = () => {
  const [jobs, setJobs] = useState([]);
  const inputRef = useRef(null);

  // Advance every unfinished job's progress on one shared interval.
  useEffect(() => {
    if (!jobs.some((j) => j.progress < 100)) return;
    const id = setInterval(() => {
      setJobs((prev) =>
        prev.map((j) =>
          j.progress < 100
            ? { ...j, progress: Math.min(100, j.progress + 4) }
            : j
        )
      );
    }, 120);
    return () => clearInterval(id);
  }, [jobs]);

  const addFiles = (fileList) => {
    const next = Array.from(fileList).map((f) => ({
      id: `${f.name}-${Date.now()}-${Math.random()}`,
      name: f.name,
      progress: 0,
    }));
    setJobs((prev) => [...prev, ...next]);
  };

  return (
    <div className="w-full max-w-sm bg-stone-200 text-black font-mono border-4 border-black shadow-[6px_6px_0_0_black] p-4">
      {/* Scanner lid */}
      <div className="bg-stone-300 border-2 border-black p-3 shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-tight">
            FlatBed 2000
          </h2>
          <span
            aria-hidden="true"
            className={`w-2.5 h-2.5 rounded-full border border-black ${
              jobs.some((j) => j.progress < 100)
                ? "bg-lime-400"
                : "bg-stone-400"
            }`}
          />
        </div>
        {/* Glass bed */}
        <div className="relative mt-2 h-14 bg-emerald-950 border-2 border-black overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-1 bg-lime-300 shadow-[0_0_8px_2px_rgba(163,230,53,0.8)] animate-[scanner-beam_2.4s_ease-in-out_infinite]"
          />
          <p className="absolute inset-0 flex items-center justify-center text-[9px] uppercase tracking-[0.35em] text-lime-300/60">
            Place document
          </p>
        </div>
        <button
          onClick={() => inputRef.current?.click()}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2 text-[10px] font-bold uppercase tracking-[0.25em] bg-amber-300 border-2 border-black shadow-[3px_3px_0_0_black] hover:shadow-[4px_4px_0_0_black] transition-all"
        >
          <ScanLine className="w-3.5 h-3.5" />
          Feed Documents
        </button>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="sr-only"
          aria-label="Choose documents to scan"
          onChange={(e) => {
            if (e.target.files?.length) addFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {/* Output tray */}
      <div className="mt-3">
        <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-1.5">
          Output Tray
        </p>
        {jobs.length === 0 ? (
          <p className="border-2 border-dashed border-black/40 p-3 text-center text-[9px] uppercase tracking-[0.25em] text-stone-500">
            Tray empty
          </p>
        ) : (
          <ul className="space-y-2" aria-label="Scan queue">
            {jobs.map((job) => {
              const done = job.progress >= 100;
              return (
                <li
                  key={job.id}
                  className="bg-white border-2 border-black px-2.5 py-2 shadow-[2px_2px_0_0_black]"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex-1 min-w-0 truncate text-[11px] font-bold uppercase tracking-wide">
                      {job.name}
                    </span>
                    {done ? (
                      <span className="shrink-0 rotate-[-4deg] border-2 border-emerald-700 text-emerald-700 px-1.5 py-0.5 text-[8px] font-black tracking-[0.15em]">
                        SCANNED ✓
                      </span>
                    ) : (
                      <span className="shrink-0 text-[9px] font-bold tabular-nums">
                        {job.progress}%
                      </span>
                    )}
                    <button
                      onClick={() =>
                        setJobs((prev) => prev.filter((j) => j.id !== job.id))
                      }
                      aria-label={`Remove ${job.name} from tray`}
                      className="shrink-0 p-0.5 border-2 border-black bg-red-300 hover:bg-red-400 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={`Scanning ${job.name}`}
                    aria-valuenow={job.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="mt-1.5 h-2 border border-black bg-stone-100 overflow-hidden"
                  >
                    <div
                      className={`h-full transition-all duration-150 ${
                        done ? "bg-emerald-600" : "bg-black"
                      }`}
                      style={{ width: `${job.progress}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <style>{`
        @keyframes scanner-beam {
          0%, 100% { left: 2%; }
          50% { left: 96%; }
        }
      `}</style>
    </div>
  );
};

export default ScannerUpload;
