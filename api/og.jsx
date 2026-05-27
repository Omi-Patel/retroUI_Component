import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

// Retro newsprint palette (mirrors :root tokens in src/index.css).
const PALETTE = {
  bg: "#ede7d6",
  surface: "#e2dcc9",
  fg: "#1c1814",
  muted: "#6e6553",
  border: "#c0b69a",
  borderStrong: "#948869",
  sticker: "#e07b67",
  sticker2: "#5b8a7a",
  ok: "#65a30d",
};

const KIND_LABELS = {
  component: "COMPONENT",
  page: "PAGE TEMPLATE",
  site: "RETRO UI",
};

async function loadFont(family, weight) {
  // Fetch the actual TTF binary that Google Fonts serves for the given family.
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`;
  const cssRes = await fetch(cssUrl, {
    headers: {
      // Force Google to serve TTF (default user-agent gets woff2 which Satori can't parse).
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  });
  const css = await cssRes.text();
  const match = css.match(/src:\s*url\((https:\/\/[^)]+\.ttf)\)/);
  if (!match) throw new Error(`Could not parse font URL for ${family}`);
  const fontRes = await fetch(match[1]);
  return await fontRes.arrayBuffer();
}

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const title = (searchParams.get("title") || "retroUI").slice(0, 80);
    const subtitle = (searchParams.get("subtitle") || "").slice(0, 120);
    const kind = searchParams.get("kind") || "site";
    const eyebrow = KIND_LABELS[kind] || KIND_LABELS.site;

    const [grotesk700, grotesk500, mono500, serif400] = await Promise.all([
      loadFont("Space+Grotesk", 700),
      loadFont("Space+Grotesk", 500),
      loadFont("JetBrains+Mono", 500),
      loadFont("Instrument+Serif", 400),
    ]);

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: PALETTE.bg,
            // Faded newsprint dot pattern.
            backgroundImage: `radial-gradient(${PALETTE.borderStrong} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            position: "relative",
            fontFamily: "Space Grotesk",
            padding: "64px 72px",
          }}
        >
          {/* Top bar: brand + version sticker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: PALETTE.fg,
                  color: PALETTE.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  fontWeight: 700,
                  transform: "rotate(-4deg)",
                  border: `3px solid ${PALETTE.fg}`,
                  boxShadow: `6px 6px 0 ${PALETTE.borderStrong}`,
                }}
              >
                R
              </div>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: PALETTE.fg,
                  letterSpacing: "-0.02em",
                }}
              >
                retroUI
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "JetBrains Mono",
                fontSize: 18,
                color: PALETTE.bg,
                backgroundColor: PALETTE.sticker,
                padding: "10px 18px",
                transform: "rotate(2deg)",
                border: `2px solid ${PALETTE.fg}`,
                letterSpacing: "0.08em",
              }}
            >
              {eyebrow}
            </div>
          </div>

          {/* Center: title + optional subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            <div
              style={{
                fontSize: title.length > 28 ? 88 : 120,
                fontWeight: 700,
                color: PALETTE.fg,
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                display: "flex",
              }}
            >
              {title}
            </div>
            {subtitle ? (
              <div
                style={{
                  fontFamily: "Instrument Serif",
                  fontSize: 40,
                  fontStyle: "italic",
                  color: PALETTE.muted,
                  marginTop: 24,
                  display: "flex",
                  lineHeight: 1.2,
                }}
              >
                {subtitle}
              </div>
            ) : null}
          </div>

          {/* Bottom bar: tagline + url */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `3px solid ${PALETTE.fg}`,
              paddingTop: 24,
            }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 20,
                color: PALETTE.muted,
                letterSpacing: "0.04em",
              }}
            >
              copy · paste · ship
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 20,
                color: PALETTE.fg,
                fontWeight: 500,
              }}
            >
              retro-ui.basecase.site
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "Space Grotesk", data: grotesk700, weight: 700, style: "normal" },
          { name: "Space Grotesk", data: grotesk500, weight: 500, style: "normal" },
          { name: "JetBrains Mono", data: mono500, weight: 500, style: "normal" },
          { name: "Instrument Serif", data: serif400, weight: 400, style: "italic" },
        ],
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
        },
      },
    );
  } catch (err) {
    return new Response(`OG image generation failed: ${err.message}`, {
      status: 500,
    });
  }
}
