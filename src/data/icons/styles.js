/**
 * Retro icon styles. Each style turns a base glyph (from `glyphs.js`) into a
 * fully self-contained SVG string, so a copied icon needs no imports.
 *
 *  - `glyphSet: "line"`  styles consume `lineGlyphs` (vector `inner` markup).
 *  - `glyphSet: "pixel"` styles consume `pixelGlyphs` (12×12 character grids).
 *
 * `toSVG(glyph, uid)` receives a unique id per icon so `<filter>` / `<pattern>`
 * definitions never collide when many icons render on the same page.
 */

// Retro palette cycled across filled styles for visual variety.
const PALETTE = ["#e07b67", "#e3b762", "#7da567", "#6f8fb0"];
const pick = (uid) => {
  // deterministic per-glyph color (no Math.random — keeps build reproducible)
  let h = 0;
  for (let i = 0; i < uid.length; i++) h = (h * 31 + uid.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
};

const svg = (viewBox, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="48" height="48">${body}</svg>`;

// Convert a 12×12 character grid into <rect> cells (cell size 2 ⇒ 24×24 box).
const gridRects = (grid, fill, cell = 2, x0 = 0, y0 = 0) => {
  let out = "";
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];
    for (let x = 0; x < row.length; x++) {
      if (row[x] === "#") {
        out += `<rect x="${x0 + x * cell}" y="${y0 + y * cell}" width="${cell}" height="${cell}" fill="${fill}"/>`;
      }
    }
  }
  return out;
};

// Center + scale a line glyph (used when a style needs the glyph to sit inside
// a frame, e.g. the marquee bulb border).
const scaleCenter = (inner, f) =>
  `<g transform="translate(12 12) scale(${f}) translate(-12 -12)">${inner}</g>`;

// Chasing bulbs placed around the perimeter of a 24×24 tile.
const marqueeBulbs = (uid) => {
  const a = 3,
    b = 21,
    step = 3,
    pts = [];
  for (let x = a; x <= b; x += step) pts.push([x, a]);
  for (let y = a + step; y <= b; y += step) pts.push([b, y]);
  for (let x = b - step; x >= a; x -= step) pts.push([x, b]);
  for (let y = b - step; y >= a + step; y -= step) pts.push([a, y]);
  return pts
    .map(
      ([x, y], i) =>
        `<circle cx="${x}" cy="${y}" r="1.15" fill="#ffe27a" style="animation:mq_${uid} .9s ease-in-out infinite;animation-delay:${(i * 0.06).toFixed(2)}s"/>`
    )
    .join("");
};

export const styles = [
  /* ---------- PIXEL: flat crisp pixel-art ---------- */
  {
    id: "pixel",
    label: "Pixel",
    glyphSet: "pixel",
    toSVG: (g, uid) =>
      svg(
        "0 0 24 24",
        `<g shape-rendering="crispEdges">${gridRects(g.grid, pick(uid))}</g>`
      ),
  },

  /* ---------- BEVEL: Windows-95 outset tile ---------- */
  {
    id: "bevel",
    label: "Bevel",
    glyphSet: "pixel",
    toSVG: (g) =>
      svg(
        "0 0 24 24",
        `<g shape-rendering="crispEdges">` +
          `<rect x="0" y="0" width="24" height="24" fill="#c3c3c3"/>` +
          `<path d="M0 24V0H24" fill="none" stroke="#ffffff" stroke-width="2"/>` +
          `<path d="M2 24H24V2" fill="none" stroke="#7f7f7f" stroke-width="2"/>` +
          gridRects(g.grid, "#2b2b2b", 1.5, 3, 3) +
          `</g>`
      ),
  },

  /* ---------- STICKER: die-cut white border + hard shadow ---------- */
  {
    id: "sticker",
    label: "Sticker",
    glyphSet: "line",
    toSVG: (g, uid) => {
      const id = `sh_${uid}`;
      const color = pick(uid);
      return svg(
        "-3 -3 30 30",
        `<defs><filter id="${id}" x="-50%" y="-50%" width="200%" height="200%">` +
          `<feDropShadow dx="1.6" dy="1.6" stdDeviation="0" flood-color="#1f1b16" flood-opacity="0.55"/>` +
          `</filter></defs>` +
          `<g transform="rotate(-6 12 12)" filter="url(#${id})">` +
          `<g fill="#fdf8ee" stroke="#fdf8ee" stroke-width="3.5" stroke-linejoin="round">${g.inner}</g>` +
          `<g fill="${color}">${g.inner}</g>` +
          `</g>`
      );
    },
  },

  /* ---------- HALFTONE: comic dot fill + ink outline ---------- */
  {
    id: "halftone",
    label: "Halftone",
    glyphSet: "line",
    toSVG: (g, uid) => {
      const id = `ht_${uid}`;
      return svg(
        "-1 -1 26 26",
        `<defs><pattern id="${id}" width="2.6" height="2.6" patternUnits="userSpaceOnUse">` +
          `<rect width="2.6" height="2.6" fill="#f2cf3f"/>` +
          `<circle cx="1.3" cy="1.3" r="0.95" fill="#1f1b16"/></pattern></defs>` +
          `<g fill="url(#${id})" stroke="#1f1b16" stroke-width="1.6" stroke-linejoin="round">${g.inner}</g>`
      );
    },
  },

  /* ---------- STAMP: distressed single-ink rubber stamp ---------- */
  {
    id: "stamp",
    label: "Stamp",
    glyphSet: "line",
    toSVG: (g, uid) => {
      const id = `rg_${uid}`;
      return svg(
        "-2 -2 28 28",
        `<defs><filter id="${id}">` +
          `<feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" result="n"/>` +
          `<feDisplacementMap in="SourceGraphic" in2="n" scale="1.6"/></filter></defs>` +
          `<g transform="rotate(-8 12 12)" filter="url(#${id})" fill="none" stroke="#b23a2e" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.88">${g.inner}</g>`
      );
    },
  },

  /* ---------- NEON: glowing outline on a dark panel ---------- */
  {
    id: "neon",
    label: "Neon",
    glyphSet: "line",
    toSVG: (g, uid) => {
      const id = `gl_${uid}`;
      return svg(
        "0 0 24 24",
        `<defs><filter id="${id}" x="-50%" y="-50%" width="200%" height="200%">` +
          `<feGaussianBlur stdDeviation="1.8"/></filter></defs>` +
          `<rect x="0" y="0" width="24" height="24" rx="4" fill="#16131d"/>` +
          `<g fill="none" stroke="#39ff14" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round">` +
          `<g filter="url(#${id})" opacity="0.9">${g.inner}</g>` +
          `<g>${g.inner}</g></g>`
      );
    },
  },

  /* ---------- GLITCH: animated RGB-split datamosh ---------- */
  {
    id: "glitch",
    label: "Glitch",
    glyphSet: "line",
    toSVG: (g, uid) =>
      svg(
        "0 0 24 24",
        `<style>` +
          `@keyframes gj_${uid}{0%,100%{transform:translate(0,0)}20%{transform:translate(-1.1px,.4px)}40%{transform:translate(1px,-.3px)}60%{transform:translate(-.6px,.5px)}80%{transform:translate(.8px,-.4px)}}` +
          `@keyframes gkc_${uid}{0%,100%{transform:translate(-1px,0)}50%{transform:translate(-2px,0)}}` +
          `@keyframes gkm_${uid}{0%,100%{transform:translate(1px,0)}50%{transform:translate(2px,0)}}` +
          `.gb_${uid}{animation:gj_${uid} .4s steps(3) infinite}` +
          `.gc_${uid}{animation:gkc_${uid} .5s ease-in-out infinite;mix-blend-mode:screen}` +
          `.gm_${uid}{animation:gkm_${uid} .5s ease-in-out infinite;mix-blend-mode:screen}` +
          `</style>` +
          `<rect width="24" height="24" rx="3" fill="#141019"/>` +
          `<g class="gb_${uid}">` +
          `<g class="gc_${uid}" fill="#00e6ff">${g.inner}</g>` +
          `<g class="gm_${uid}" fill="#ff2bd6">${g.inner}</g>` +
          `<g fill="#f5f1e6">${g.inner}</g>` +
          `</g>`
      ),
  },

  /* ---------- MARQUEE: animated chasing-bulb sign ---------- */
  {
    id: "marquee",
    label: "Marquee",
    glyphSet: "line",
    toSVG: (g, uid) =>
      svg(
        "0 0 24 24",
        `<style>@keyframes mq_${uid}{0%,100%{opacity:.25}50%{opacity:1}}</style>` +
          `<rect width="24" height="24" rx="3" fill="#1b1533"/>` +
          `<rect x="2.5" y="2.5" width="19" height="19" rx="2.5" fill="none" stroke="#3a2f5c" stroke-width="1"/>` +
          `<g fill="#ffd23f">${scaleCenter(g.inner, 0.52)}</g>` +
          marqueeBulbs(uid)
      ),
  },

  /* ---------- HOLOGRAM: animated hue-shifting foil ---------- */
  {
    id: "hologram",
    label: "Hologram",
    glyphSet: "line",
    toSVG: (g, uid) =>
      svg(
        "0 0 24 24",
        `<defs><linearGradient id="hg_${uid}" x1="0" y1="0" x2="1" y2="1">` +
          `<stop offset="0" stop-color="#5efbff"/><stop offset="0.5" stop-color="#b06bff"/><stop offset="1" stop-color="#5effc8"/>` +
          `</linearGradient></defs>` +
          `<style>@keyframes ho_${uid}{to{filter:hue-rotate(360deg)}}.ho_${uid}{animation:ho_${uid} 3s linear infinite;transform-origin:12px 12px}</style>` +
          `<rect width="24" height="24" rx="3" fill="#0f0f17"/>` +
          `<g class="ho_${uid}"><g fill="url(#hg_${uid})" stroke="#dffaff" stroke-width="0.6" stroke-linejoin="round">${g.inner}</g></g>`
      ),
  },

  /* ---------- WIGGLE: hand-drawn 2-frame "boil" ---------- */
  {
    id: "wiggle",
    label: "Wiggle",
    glyphSet: "line",
    toSVG: (g, uid) =>
      svg(
        "-1 -1 26 26",
        `<defs>` +
          `<filter id="w1_${uid}"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"/></filter>` +
          `<filter id="w2_${uid}"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="8" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"/></filter>` +
          `</defs>` +
          `<style>@keyframes wa_${uid}{0%,49%{opacity:1}50%,100%{opacity:0}}@keyframes wb_${uid}{0%,49%{opacity:0}50%,100%{opacity:1}}.wfa_${uid}{animation:wa_${uid} .26s steps(1) infinite}.wfb_${uid}{animation:wb_${uid} .26s steps(1) infinite}</style>` +
          `<g fill="none" stroke="#1f1b16" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">` +
          `<g class="wfa_${uid}" filter="url(#w1_${uid})">${g.inner}</g>` +
          `<g class="wfb_${uid}" filter="url(#w2_${uid})">${g.inner}</g>` +
          `</g>`
      ),
  },

  /* ---------- CROSS-STITCH: embroidery on aida cloth ---------- */
  {
    id: "crossstitch",
    label: "Cross-stitch",
    glyphSet: "pixel",
    toSVG: (g, uid) => {
      const color = pick(uid);
      const cell = 2;
      let stitches = "";
      for (let y = 0; y < g.grid.length; y++) {
        const row = g.grid[y];
        for (let x = 0; x < row.length; x++) {
          if (row[x] === "#") {
            const cx = x * cell;
            const cy = y * cell;
            stitches += `<path d="M${cx} ${cy}l${cell} ${cell}M${cx + cell} ${cy}l-${cell} ${cell}" stroke="${color}" stroke-width="0.6" stroke-linecap="round"/>`;
          }
        }
      }
      return svg(
        "0 0 24 24",
        `<defs><pattern id="cs_${uid}" width="2" height="2" patternUnits="userSpaceOnUse"><path d="M0 0H2M0 0V2" stroke="#d8ccae" stroke-width="0.3"/></pattern></defs>` +
          `<rect width="24" height="24" fill="#ece3cc"/>` +
          `<rect width="24" height="24" fill="url(#cs_${uid})"/>` +
          stitches
      );
    },
  },

  /* ---------- LITE-BRITE: animated glowing pegboard ---------- */
  {
    id: "litebrite",
    label: "Lite-Brite",
    glyphSet: "pixel",
    toSVG: (g, uid) => {
      const pal = ["#ff4fa3", "#39ff14", "#43d9ff", "#ffd23f", "#ff7a1a"];
      const cell = 2;
      let pegs = "";
      for (let y = 0; y < g.grid.length; y++) {
        const row = g.grid[y];
        for (let x = 0; x < row.length; x++) {
          if (row[x] === "#") {
            const cx = x * cell + cell / 2;
            const cy = y * cell + cell / 2;
            const c = pal[(x + y) % pal.length];
            pegs +=
              `<g style="animation:lp_${uid} 1.6s ease-in-out infinite;animation-delay:${(((x + y) % 5) * 0.12).toFixed(2)}s">` +
              `<circle cx="${cx}" cy="${cy}" r="1.5" fill="${c}" opacity="0.5" filter="url(#lb_${uid})"/>` +
              `<circle cx="${cx}" cy="${cy}" r="0.9" fill="${c}"/>` +
              `</g>`;
          }
        }
      }
      return svg(
        "0 0 24 24",
        `<defs><filter id="lb_${uid}" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="0.6"/></filter>` +
          `<pattern id="lh_${uid}" width="2" height="2" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.35" fill="#1c1c1c"/></pattern></defs>` +
          `<style>@keyframes lp_${uid}{0%,100%{opacity:.8}50%{opacity:1}}</style>` +
          `<rect width="24" height="24" rx="2" fill="#0b0b0b"/>` +
          `<rect width="24" height="24" fill="url(#lh_${uid})"/>` +
          pegs
      );
    },
  },
];
