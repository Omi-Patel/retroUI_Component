import PropTypes from "prop-types";
import { Link } from "@tanstack/react-router";

const SIZES = {
  small: 28,
  default: 32,
  large: 38,
};

export default function Logo({ size = "default" }) {
  const px = SIZES[size] || SIZES.default;

  return (
    <Link to="/" className="group inline-flex shrink-0 items-center gap-2.5" aria-label="retroUI home">
      <span
        className="relative inline-flex items-center justify-center rounded-[10px] transition-transform group-hover:-rotate-2"
        style={{
          width: px,
          height: px,
          background: "var(--fg)",
          color: "var(--bg)",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: Math.round(px * 0.42),
          fontWeight: 600,
          letterSpacing: "-0.06em",
        }}
      >
        R
        <span
          aria-hidden="true"
          className="absolute rounded-full"
          style={{
            width: Math.max(5, Math.round(px * 0.18)),
            height: Math.max(5, Math.round(px * 0.18)),
            right: -2,
            top: -2,
            background: "var(--accent)",
            border: "2px solid var(--bg)",
          }}
        />
      </span>
      <span className="flex items-baseline gap-1 leading-none">
        <span
          className="text-[16px] font-bold tracking-[-0.04em]"
          style={{ color: "var(--fg)" }}
        >
          retroUI
        </span>
        <span className="hidden text-[10px] font-medium sm:inline" style={{ color: "var(--muted)" }}>
          kit
        </span>
      </span>
    </Link>
  );
}

Logo.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
};
