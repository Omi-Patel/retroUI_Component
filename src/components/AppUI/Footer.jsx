import { Link } from "@tanstack/react-router";
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import Logo from "./Logo";
import { SOCIAL_LINKS } from "../../lib/constants";

const QUICK_LINKS = [
  { name: "About", path: "/about" },
  { name: "Components", path: "/components" },
  { name: "Pages", path: "/pages" },
  { name: "Release Notes", path: "/release-notes" },
  { name: "Privacy", path: "/privacy-policy" },
  { name: "Terms", path: "/terms-conditions" },
  { name: "Contact", path: "/contact-us" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      {/* Top ornament */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-14">
        <div className="ornament-hr">
          <span className="label">★ ★ ★ ESTABLISHED MMXXIV ★ ★ ★</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p
              className="text-[13.5px] leading-relaxed max-w-xs"
              style={{ color: "var(--muted)" }}
            >
              A retro-themed component library for modern React apps.
              <br />
              <span className="display-italic">Copy, paste, ship.</span>
            </p>
            <div className="flex items-center gap-1">
              {[
                { href: SOCIAL_LINKS.github, Icon: Github, label: "GitHub" },
                { href: SOCIAL_LINKS.twitter, Icon: Twitter, label: "Twitter" },
                { href: SOCIAL_LINKS.instagram, Icon: Instagram, label: "Instagram" },
                { href: SOCIAL_LINKS.linkedin, Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-[var(--surface-2)] hover:!text-[var(--fg)] transition-colors"
                  style={{ color: "var(--muted)" }}
                >
                  <Icon className="w-[15px] h-[15px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <h4
              className="label flex items-center gap-1.5"
              style={{ color: "var(--fg)" }}
            >
              <span style={{ color: "var(--muted)" }}>01</span>
              <span>Quick Links</span>
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.path}
                    className="text-[13.5px] inline-flex items-center gap-1.5 transition-colors hover:!text-[var(--fg)] group"
                    style={{ color: "var(--muted)" }}
                  >
                    <ArrowUpRight className="w-[11px] h-[11px] opacity-40 group-hover:opacity-100 transition-opacity" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px dashed var(--border-strong)" }}
        >
          <p
            className="text-[12px] mono"
            style={{ color: "var(--muted)" }}
          >
            © MMXXIV–{year} · retroui™ · all rights reserved
          </p>
          <p
            className="text-[12px] inline-flex items-center gap-1.5 mono"
            style={{ color: "var(--muted)" }}
          >
            <span>BUILT WITH</span>
            <Heart
              className="w-3 h-3"
              fill="currentColor"
              style={{ color: "var(--sticker)" }}
            />
            <span>BY</span>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:!text-[var(--fg)] transition-colors underline-offset-4 hover:underline"
              style={{ color: "var(--fg)" }}
            >
              OM PATEL
            </a>
          </p>
        </div>
      </div>

      {/* Giant wordmark flourish */}
      <div
        className="overflow-hidden"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div
          className="display select-none text-center leading-[0.85] py-6 sm:py-10"
          style={{
            fontSize: "clamp(80px, 16vw, 220px)",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: "1px var(--border-strong)",
            letterSpacing: "-0.04em",
          }}
        >
          retroui
          <span
            className="display-italic"
            style={{ WebkitTextStroke: "1px var(--border-strong)" }}
          >
            ™
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
