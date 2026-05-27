/**
 * Generates the social-share OG image at 1200x630 and writes it to
 * `public/og-image.png`. Run this whenever the headline/copy changes:
 *
 *   npm run og:generate
 *
 * The output PNG is committed to the repo so production serves it directly
 * from `public/` — no runtime cost, no edge-function dependency.
 */

import { writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../public/og-image.png");

// Mirrors the newsprint palette in src/index.css (:root).
const HTML = /* html */ `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html, body {
        width: 1200px;
        height: 630px;
        overflow: hidden;
        font-family: 'Space Grotesk', system-ui, sans-serif;
        color: #1c1814;
        background: #ede7d6;
      }

      .canvas {
        position: relative;
        width: 1200px;
        height: 630px;
        background:
          radial-gradient(1100px 600px at 85% 0%, rgba(224, 123, 103, 0.14), transparent 60%),
          radial-gradient(900px 500px at 0% 100%, rgba(91, 138, 122, 0.12), transparent 55%),
          #ede7d6;
        padding: 64px 72px;
        display: grid;
        grid-template-rows: auto 1fr auto;
      }

      /* Newsprint dot halftone */
      .canvas::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: radial-gradient(#948869 1px, transparent 1px);
        background-size: 22px 22px;
        opacity: 0.22;
        pointer-events: none;
      }

      .top-row {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 2;
      }

      .brand {
        display: flex;
        align-items: center;
        gap: 14px;
        color: #1c1814;
      }
      .brand .mark {
        width: 56px;
        height: 56px;
        background: #1c1814;
        color: #ede7d6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 700;
        font-size: 30px;
        transform: rotate(-4deg);
        box-shadow: 6px 6px 0 #948869;
        border: 2px solid #1c1814;
      }
      .brand .name {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .sticker {
        font-family: 'JetBrains Mono', monospace;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #ede7d6;
        background: #e07b67;
        padding: 10px 18px;
        transform: rotate(2deg);
        border: 2px solid #1c1814;
        box-shadow: 4px 4px 0 #1c1814;
      }

      .headline {
        position: relative;
        z-index: 2;
        align-self: center;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 700;
        font-size: 112px;
        line-height: 1.0;
        letter-spacing: -0.04em;
        color: #1c1814;
        max-width: 1020px;
      }
      .headline em {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-weight: 400;
        color: #1c1814;
      }
      .headline .underline {
        position: relative;
        display: inline-block;
      }
      .headline .underline::after {
        content: '';
        position: absolute;
        left: -4px;
        right: -4px;
        bottom: 10px;
        height: 14px;
        background: rgba(224, 123, 103, 0.55);
        z-index: -1;
        border-radius: 2px;
      }

      .bottom-row {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 32px;
      }

      .tagline {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 30px;
        line-height: 1.25;
        color: #6e6553;
        max-width: 720px;
      }
      .tagline strong {
        color: #1c1814;
        font-style: normal;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 600;
      }

      .url {
        font-family: 'JetBrains Mono', monospace;
        font-size: 18px;
        font-weight: 500;
        color: #1c1814;
        letter-spacing: 0.04em;
        padding-bottom: 4px;
      }

      .rule {
        position: absolute;
        left: 72px;
        right: 72px;
        height: 2px;
        background: #1c1814;
        opacity: 0.85;
        z-index: 1;
      }
      .rule.top { top: 132px; }
      .rule.bottom { bottom: 132px; }

      .corner {
        position: absolute;
        top: 32px;
        right: 32px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px;
        color: #948869;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <div class="canvas">
      <div class="rule top"></div>
      <div class="rule bottom"></div>

      <div class="top-row">
        <div class="brand">
          <div class="mark">R</div>
          <div class="name">retroUI</div>
        </div>
        <div class="sticker">— Copy · Paste · Ship —</div>
      </div>

      <h1 class="headline">
        Retro <em>UI</em> for<br />
        <span class="underline">modern</span> web apps.
      </h1>

      <div class="bottom-row">
        <p class="tagline">
          <strong>Buttons</strong>, <strong>cards</strong>, <strong>navbars</strong>,
          <strong>pricing</strong>, <strong>dashboards</strong> &amp; more —
          pixel-perfect retro components built with Tailwind.
        </p>
        <div class="url">retro-ui.basecase.site</div>
      </div>
    </div>
  </body>
</html>
`;

async function main() {
  console.log("[og] launching puppeteer...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
    await page.setContent(HTML, { waitUntil: "networkidle0" });
    await page.evaluateHandle("document.fonts.ready");

    console.log("[og] rendering 1200x630 PNG...");
    const buffer = await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width: 1200, height: 630 },
      omitBackground: false,
    });

    await mkdir(dirname(OUTPUT_PATH), { recursive: true });
    await writeFile(OUTPUT_PATH, buffer);
    console.log(`[og] wrote ${OUTPUT_PATH} (${buffer.length} bytes)`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("[og] failed:", err);
  process.exitCode = 1;
});
