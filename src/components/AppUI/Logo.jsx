import PropTypes from "prop-types";
import { Link } from "@tanstack/react-router";

const SIZES = {
  small: 26,
  default: 30,
  large: 36,
};

export default function Logo({ size = "default" }) {
  const px = SIZES[size] || SIZES.default;

  return (
    <Link to="/" className="inline-flex items-center gap-2.5 group">
      <span
        className="inline-flex items-center justify-center relative"
        style={{
          width: px,
          height: px,
          background: "var(--fg)",
          color: "var(--bg)",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          fontSize: Math.round(px * 0.48),
          letterSpacing: "-0.04em",
          borderRadius: 6,
          boxShadow: "2px 2px 0 0 var(--border-strong)",
        }}
      >
        <span style={{ transform: "translateY(-1px)" }}>R</span>
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: 2,
            right: 3,
            width: 4,
            height: 4,
            borderRadius: 1,
            background: "var(--bg)",
            opacity: 0.6,
          }}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-semibold tracking-tight text-[16px]"
          style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}
        >
          retroui
          <span
            className="display-italic ml-0.5"
            style={{ color: "var(--muted)", fontSize: "14px" }}
          >
            ™
          </span>
        </span>
        <span
          className="label mt-0.5"
          style={{ color: "var(--muted)", fontSize: 9 }}
        >
          EST. 2024 · v1.0
        </span>
      </span>
    </Link>
  );
}

Logo.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
};
