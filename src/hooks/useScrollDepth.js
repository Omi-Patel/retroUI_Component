import { useEffect } from "react";
import { track } from "../lib/analytics";

const MARKS = [25, 50, 75, 100];

/** Fires `scroll_depth` once per mark (25/50/75/100%) per page visit. */
export const useScrollDepth = (page) => {
  useEffect(() => {
    const hit = new Set();
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = ((window.scrollY + 1) / max) * 100;
      for (const m of MARKS) {
        if (pct >= m && !hit.has(m)) {
          hit.add(m);
          track("scroll_depth", { page, depth: m });
        }
      }
      if (hit.size === MARKS.length) window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [page]);
};
