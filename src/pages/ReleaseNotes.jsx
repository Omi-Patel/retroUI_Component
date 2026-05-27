import { Sparkles, Plus, Pencil, Bug, Trash2, Github } from "lucide-react";
import { releases } from "../data/releases";
import { SOCIAL_LINKS } from "../lib/constants";
import { useDocumentMeta } from "../hooks";

const SECTION_META = {
  added: { label: "Added", Icon: Plus, color: "var(--ok)" },
  changed: { label: "Changed", Icon: Pencil, color: "var(--accent)" },
  fixed: { label: "Fixed", Icon: Bug, color: "var(--accent)" },
  removed: { label: "Removed", Icon: Trash2, color: "var(--muted)" },
};

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

function ChangeSection({ kind, items }) {
  if (!items || items.length === 0) return null;
  const { label, Icon, color } = SECTION_META[kind];
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4" style={{ color }} />
        <span
          className="label"
          style={{ color: "var(--fg)", fontWeight: 700, letterSpacing: "0.08em" }}
        >
          {label}
        </span>
      </div>
      <ul className="space-y-2 pl-1">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-[14.5px] leading-relaxed flex gap-2"
            style={{ color: "var(--fg)" }}
          >
            <span aria-hidden="true" style={{ color: "var(--muted)" }}>
              ›
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReleaseEntry({ release, isLatest }) {
  const { version, date, summary, changes, components } = release;
  const hasComponents =
    components && (components.new?.length || components.updated?.length);

  return (
    <article
      className="relative pl-6 sm:pl-10 pb-12 border-l-2"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="absolute -left-[9px] top-1 w-4 h-4 rounded-full"
        style={{
          background: isLatest ? "var(--accent)" : "var(--surface)",
          border: "2px solid var(--border-strong)",
        }}
        aria-hidden="true"
      />

      <header className="mb-4">
        <div className="flex flex-wrap items-baseline gap-3">
          <h2
            className="display"
            style={{ fontSize: "32px", lineHeight: 1.1, color: "var(--fg)" }}
          >
            v{version}
          </h2>
          {isLatest && (
            <span className="sticker" style={{ fontSize: 10 }}>
              LATEST
            </span>
          )}
          <span
            className="label"
            style={{ color: "var(--muted)", fontSize: 12 }}
          >
            {formatDate(date)}
          </span>
        </div>
        {summary && (
          <p
            className="mt-2 text-[15px] leading-relaxed"
            style={{ color: "var(--muted)", maxWidth: "60ch" }}
          >
            {summary}
          </p>
        )}
      </header>

      <div className="grid gap-8 sm:grid-cols-2">
        <ChangeSection kind="added" items={changes?.added} />
        <ChangeSection kind="changed" items={changes?.changed} />
        <ChangeSection kind="fixed" items={changes?.fixed} />
        <ChangeSection kind="removed" items={changes?.removed} />
      </div>

      {hasComponents ? (
        <div
          className="mt-6 pt-5 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            className="label"
            style={{ color: "var(--muted)", fontSize: 11 }}
          >
            Components in this release
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {components.new?.map((name) => (
              <span
                key={`new-${name}`}
                className="sticker"
                style={{ fontSize: 10 }}
              >
                NEW · {name}
              </span>
            ))}
            {components.updated?.map((name) => (
              <span
                key={`upd-${name}`}
                className="sticker-flat"
                style={{ fontSize: 10 }}
              >
                UPDATED · {name}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default function ReleaseNotes() {
  useDocumentMeta({
    title: "Release Notes | retroUI",
    description:
      "Versioned release history for retroUI — new components, fixes, and changes shipped over time.",
  });

  return (
    <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-[900px]">
        <div className="ornament-hr mb-6 max-w-xs">
          <span className="label">CHANGELOG · {releases.length} RELEASES</span>
        </div>

        <header className="mb-10">
          <h1
            className="display"
            style={{ fontSize: "56px", lineHeight: 1.05, color: "var(--fg)" }}
          >
            Release{" "}
            <span className="display-italic" style={{ color: "var(--muted)" }}>
              notes.
            </span>
          </h1>
          <p
            className="mt-4 text-[16px] leading-relaxed"
            style={{ color: "var(--muted)", maxWidth: "60ch" }}
          >
            Everything that has shipped in retroUI, newest first. The source of
            truth is{" "}
            <code className="mono" style={{ fontSize: 13 }}>
              src/data/releases.js
            </code>
            .
          </p>
          <div className="mt-6 flex items-center gap-3 text-[13px]">
            <Sparkles className="w-4 h-4" style={{ color: "var(--accent)" }} />
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="retro-link inline-flex items-center gap-1.5"
              style={{ color: "var(--fg)" }}
            >
              <Github className="w-3.5 h-3.5" />
              View on GitHub
            </a>
          </div>
        </header>

        <div className="mt-10">
          {releases.map((r, i) => (
            <ReleaseEntry key={r.version} release={r} isLatest={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
