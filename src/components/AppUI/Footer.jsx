import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";
import { SOCIAL_LINKS } from "../../lib/constants";

const GROUPS = [
  {
    title: "Explore",
    links: [
      ["Components", "/components"],
      ["Page templates", "/pages"],
      ["Icons", "/icons"],
      ["Release notes", "/release-notes"],
    ],
  },
  {
    title: "Learn",
    links: [
      ["Get started", "/getting-started"],
      ["About", "/about"],
      ["Contact", "/contact-us"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "/privacy-policy"],
      ["Terms", "/terms-conditions"],
    ],
  },
];

const SOCIALS = [
  ["GitHub", SOCIAL_LINKS.github, Github],
  ["X / Twitter", SOCIAL_LINKS.twitter, Twitter],
  ["Instagram", SOCIAL_LINKS.instagram, Instagram],
  ["LinkedIn", SOCIAL_LINKS.linkedin, Linkedin],
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <div className="site-container">
        <div className="grid gap-8 py-14 lg:grid-cols-[1.25fr_.75fr] lg:items-center lg:py-16">
          <div>
            <span className="section-kicker">Open-source craft</span>
            <h2
              className="display max-w-2xl text-[32px] leading-[1.08] sm:text-[42px]"
              style={{ color: "var(--fg)" }}
            >
              Give the next interface a little more character.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/components" className="site-button-primary">
              Browse the library <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="site-button-secondary">
              <Github className="h-3.5 w-3.5" /> View source
            </a>
          </div>
        </div>

        <div className="grid gap-10 border-t py-12 md:grid-cols-12" style={{ borderColor: "var(--border)" }}>
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-[13.5px] leading-7" style={{ color: "var(--muted)" }}>
              A practical archive of expressive React components—made to be copied, understood, and shaped into your own.
            </p>
            <div className="mt-5 flex items-center gap-1">
              {SOCIALS.map(([label, href, Icon]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-[var(--surface-2)]"
                  style={{ color: "var(--muted)" }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="label mb-4" style={{ color: "var(--muted)" }}>
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map(([label, path]) => (
                    <li key={path}>
                      <Link
                        to={path}
                        className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-colors hover:!text-[var(--accent)]"
                        style={{ color: "var(--fg)" }}
                      >
                        {label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col gap-2 border-t py-6 text-[11px] sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          <p className="mono">© 2024–{year} retroUI. MIT licensed.</p>
          <p>
            Designed and maintained by{" "}
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:underline"
              style={{ color: "var(--fg)" }}
            >
              Om Patel
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
