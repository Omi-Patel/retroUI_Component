import { releases } from "../data/releases";

/**
 * Returns "new", "updated", or null for a given component name based on the
 * most recent entry in src/data/releases.js. Only the *latest* release is
 * considered so badges fade after each new ship; if you need a longer window,
 * pass `lookback` greater than 1.
 *
 * @param {string} name      Component variant name (matches the `name` field
 *                           in src/data/components/<category>.js).
 * @param {number} lookback  How many recent releases to consider (default 1).
 * @returns {"new" | "updated" | null}
 */
export function getComponentStatus(name, lookback = 1) {
  if (!name) return null;
  for (let i = 0; i < Math.min(lookback, releases.length); i++) {
    const r = releases[i];
    if (r.components?.new?.includes(name)) return "new";
    if (r.components?.updated?.includes(name)) return "updated";
  }
  return null;
}
