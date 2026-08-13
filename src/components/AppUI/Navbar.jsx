import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Github, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ModeToggle";
import CommandPalette from "./CommandPalette";
import { SOCIAL_LINKS } from "../../lib/constants";

const LINKS = [
  { name: "Components", href: "/components" },
  { name: "Templates", href: "/pages" },
  { name: "Icons", href: "/icons" },
  { name: "Get started", href: "/getting-started" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCmdOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className="sticky top-0 z-40 border-b transition-[background-color,box-shadow] duration-200"
        style={{
          height: 64,
          background: scrolled
            ? "color-mix(in srgb, var(--bg) 88%, transparent)"
            : "var(--bg)",
          borderColor: "var(--border)",
          backdropFilter: "blur(18px)",
          boxShadow: scrolled ? "0 8px 28px rgba(23,24,22,.035)" : "none",
        }}
      >
        <div className="site-container flex h-full items-center justify-between gap-5">
          <div className="flex min-w-0 items-center gap-8">
            <Logo />
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
              {LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors"
                    style={{
                      background: active ? "var(--surface-2)" : "transparent",
                      color: active ? "var(--fg)" : "var(--muted)",
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => setCmdOpen(true)}
              className="flex h-9 w-48 items-center gap-2 rounded-lg px-3 text-[12.5px] transition-colors lg:w-56"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
              }}
              aria-label="Search the library"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="flex-1 text-left">Search library</span>
              <kbd>⌘K</kbd>
            </button>
            <ThemeToggle />
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="site-button-secondary h-9 min-h-0 px-3"
              aria-label="Open retroUI on GitHub"
            >
              <Github className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">GitHub</span>
              <ArrowUpRight className="hidden h-3 w-3 xl:block" />
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={() => setCmdOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ color: "var(--fg)" }}
              aria-label="Search the library"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <ThemeToggle compact />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ color: "var(--fg)" }}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>

        {open && (
          <div
            className="border-t md:hidden"
            style={{ background: "var(--bg)", borderColor: "var(--border)" }}
          >
            <nav className="site-container grid grid-cols-2 gap-2 py-4" aria-label="Mobile navigation">
              {LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="rounded-xl px-4 py-3 text-[13.5px] font-semibold"
                    style={{
                      background: active ? "var(--accent-soft)" : "var(--surface)",
                      border: "1px solid var(--border)",
                      color: active ? "var(--accent)" : "var(--fg)",
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="col-span-2 flex items-center justify-between rounded-xl px-4 py-3 text-[13.5px] font-semibold"
                style={{ background: "var(--fg)", color: "var(--bg)" }}
              >
                <span className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4" /> GitHub repository
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </header>

      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}
