/**
 * Assembles the retro icon gallery from base glyphs × styles.
 *
 * Exports:
 *   - ICON_STYLES — [{ id, label }] for the gallery's filter chips.
 *   - ICON_SET    — flat [{ id, name, componentName, style, styleLabel, keywords, svg }].
 *   - getIconCode(icon, format) — returns the copy-paste string ("svg" | "jsx").
 *
 * The `/icons` route lazy-imports this module so the gallery data stays
 * code-split from the rest of the app.
 */
import { lineGlyphs, pixelGlyphs } from "./glyphs";
import { styles } from "./styles";

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export const ICON_STYLES = styles.map((s) => ({ id: s.id, label: s.label }));

function build() {
  const out = [];
  for (const style of styles) {
    const set = style.glyphSet === "pixel" ? pixelGlyphs : lineGlyphs;
    for (const glyph of set) {
      const id = `${style.id}-${glyph.name}`;
      out.push({
        id,
        glyph: glyph.name,
        name: `${cap(glyph.name)} ${style.label}`,
        componentName: `${cap(style.id)}${cap(glyph.name)}`,
        style: style.id,
        styleLabel: style.label,
        keywords: [glyph.name, style.label.toLowerCase(), ...(glyph.keywords || [])],
        svg: style.toSVG(glyph, id.replace(/[^a-z0-9]/gi, "_")),
      });
    }
  }
  return out;
}

export const ICON_SET = build();

// SVG attribute → JSX prop name for the handful of hyphenated attrs we emit.
const JSX_ATTRS = {
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "stroke-width": "strokeWidth",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-linecap": "strokeLinecap",
  "shape-rendering": "shapeRendering",
  "flood-color": "floodColor",
  "flood-opacity": "floodOpacity",
};

function toJSX(svgString) {
  let s = svgString;
  for (const [attr, prop] of Object.entries(JSX_ATTRS)) {
    s = s.replace(new RegExp(attr + "=", "g"), prop + "=");
  }
  // Let callers style/size the icon via props.
  return s.replace("<svg ", "<svg {...props} ");
}

export function getIconCode(icon, format = "svg") {
  if (format === "jsx") {
    return (
      `export function ${icon.componentName}(props) {\n` +
      `  return (\n    ${toJSX(icon.svg)}\n  );\n}`
    );
  }
  return icon.svg;
}
