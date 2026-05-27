import { useState, useEffect } from "react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  Github,
  Menu,
  X,
  Search,
  Sparkles,
  Star,
  Zap,
  Heart,
  Package,
} from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ModeToggle";
import PaletteToggle from "./PaletteToggle";
import { SITE_META, SOCIAL_LINKS } from "../../lib/constants";

/* ---------- Marquee ticker ---------- */
function MarqueeTicker() {
  const items = [
    { Icon: Sparkles, text: `${SITE_META.version} SHIPPED — SEE RELEASE NOTES`, to: "/release-notes" },
    { Icon: Star, text: "NOW WITH DARK MODE" },
    { Icon: Zap, text: "COPY · PASTE · SHIP" },
    { Icon: Heart, text: "MADE FOR BUILDERS, BY BUILDERS" },
    { Icon: Package, text: "NEW · 8 PAGE TEMPLATES" },
    { Icon: Github, text: "OPEN SOURCE" },
  ];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "var(--fg)",
        color: "var(--bg)",
        borderBottom: "1px solid var(--border-strong)",
      }}
    >
      <div
        className="marquee-track py-1.5 whitespace-nowrap label"
        style={{ fontSize: 10.5, fontWeight: 600 }}
      >
        {[...items, ...items].map(({ Icon, text, to }, i) => {
          const inner = (
            <span className="inline-flex items-center gap-2">
              <Icon className="w-[11px] h-[11px]" />
              <span>{text}</span>
              <span className="opacity-50" style={{ marginLeft: "1.5rem" }}>
                ✱
              </span>
            </span>
          );
          return to ? (
            <Link
              key={i}
              to={to}
              className="hover:opacity-80 transition-opacity"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {inner}
            </Link>
          ) : (
            <span key={i}>{inner}</span>
          );
        })}
      </div>
    </div>
  );
}

const LINKS = [
  { name: "About", href: "/about" },
  { name: "Components", href: "/components" },
  { name: "Pages", href: "/pages" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    const base = href.split("/").slice(0, 2).join("/");
    return pathname.startsWith(base);
  };

  return (
    <>
      <MarqueeTicker />
      <header
        className="sticky top-0 z-40 transition-colors duration-200"
        style={{
          background: scrolled
            ? "color-mix(in oklab, var(--bg) 85%, transparent)"
            : "var(--bg)",
          backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <Logo />
              <nav className="hidden md:flex items-center gap-1">
                {LINKS.map((l) => {
                  const active = isActive(l.href);
                  return (
                    <Link
                      key={l.name}
                      to={l.href}
                      className="relative px-3 py-1.5 text-[13.5px] font-medium rounded-md transition-colors hover:!text-[var(--fg)]"
                      style={{ color: active ? "var(--fg)" : "var(--muted)" }}
                    >
                      {l.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="hidden md:flex flex-1 justify-end items-center gap-2">
              <button
                onClick={() => navigate({ to: "/components" })}
                className="inline-flex items-center gap-2 h-9 w-64 px-3 rounded-md text-[13px] transition-colors"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}
              >
                <Search className="w-3.5 h-3.5" />
                <span className="flex-1 text-left">Search components…</span>
                <kbd>⌘K</kbd>
              </button>
              <PaletteToggle />
              <ThemeToggle />
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-[var(--surface-2)] transition-colors"
                style={{ color: "var(--fg)" }}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <div className="md:hidden flex items-center gap-1">
              <PaletteToggle compact />
              <ThemeToggle compact />
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-[var(--surface-2)]"
                style={{ color: "var(--fg)" }}
                aria-label="Menu"
              >
                {open ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t" style={{ borderColor: "var(--border)" }}>
            <div className="px-4 py-3 space-y-1">
              {LINKS.map((l) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.name}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md text-[14px] font-medium"
                    style={{
                      background: active ? "var(--surface-2)" : "transparent",
                      color: "var(--fg)",
                    }}
                  >
                    {l.name}
                  </Link>
                );
              })}
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-[14px] font-medium"
                style={{ color: "var(--fg)" }}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
