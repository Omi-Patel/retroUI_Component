import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Mail,
  Github,
  Twitter,
  ArrowUpRight,
  ArrowRight,
  Check,
} from "lucide-react";
import { SOCIAL_LINKS } from "../../lib/constants";

function Field({ label, placeholder, type = "text", textarea, required }) {
  const sharedStyle = {
    background: "var(--bg)",
    border: "1px solid var(--border)",
    color: "var(--fg)",
  };
  return (
    <label className="block">
      <span
        className="block text-[12.5px] font-medium mb-1.5"
        style={{ color: "var(--fg)" }}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          required={required}
          rows={5}
          className="w-full px-3 py-2.5 rounded-md text-[13.5px] outline-none transition-colors resize-y focus:ring-2 focus:ring-[var(--fg)]"
          style={sharedStyle}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full h-10 px-3 rounded-md text-[13.5px] outline-none transition-colors focus:ring-2 focus:ring-[var(--fg)]"
          style={sharedStyle}
        />
      )}
    </label>
  );
}

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div
            className="flex items-center gap-2 text-[12px] mono mb-4"
            style={{ color: "var(--muted)" }}
          >
            <Link to="/" className="hover:!text-[var(--fg)] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-[11px] h-[11px]" />
            <span style={{ color: "var(--fg)" }}>Contact</span>
          </div>
          <h1
            className="display text-[44px] sm:text-[60px] leading-[1.0]"
            style={{ color: "var(--fg)", letterSpacing: "-0.035em" }}
          >
            Get{" "}
            <span className="display-italic" style={{ color: "var(--muted)" }}>
              in touch.
            </span>
          </h1>
          <p
            className="mt-4 text-[15.5px] max-w-xl leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Have feedback, a feature request, or want to contribute? Drop us a
            line — we read everything.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "hello@retroui.dev",
                  href: "mailto:hello@retroui.dev",
                },
                {
                  Icon: Github,
                  label: "GitHub Issues",
                  value: "Report a bug or request",
                  href: SOCIAL_LINKS.github,
                },
                {
                  Icon: Twitter,
                  label: "Twitter",
                  value: "@retroui",
                  href: SOCIAL_LINKS.twitter,
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-lg p-4 transition-colors"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--bg)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--surface)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--bg)")
                  }
                >
                  <div
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md"
                    style={{
                      background: "var(--surface-2)",
                      color: "var(--fg)",
                    }}
                  >
                    <c.Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[12px] uppercase tracking-wider"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.label}
                    </div>
                    <div
                      className="text-[13.5px] font-medium"
                      style={{ color: "var(--fg)" }}
                    >
                      {c.value}
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <div className="lg:col-span-2">
              <div
                className="rounded-lg p-7"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
              >
                {sent ? (
                  <div className="text-center py-10">
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full mb-4"
                      style={{ background: "var(--surface-2)" }}
                    >
                      <Check className="w-5 h-5" />
                    </div>
                    <h3
                      className="text-[18px] font-semibold mb-1"
                      style={{ color: "var(--fg)" }}
                    >
                      Message received
                    </h3>
                    <p
                      className="text-[13.5px]"
                      style={{ color: "var(--muted)" }}
                    >
                      We&apos;ll reply within 24 hours.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-4 text-[13px] underline"
                      style={{ color: "var(--fg)" }}
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <h2
                      className="text-[18px] font-semibold mb-1"
                      style={{ color: "var(--fg)" }}
                    >
                      Send us a message
                    </h2>
                    <p
                      className="text-[13.5px] mb-6"
                      style={{ color: "var(--muted)" }}
                    >
                      Required fields are marked with *
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Name *" placeholder="Ada Lovelace" required />
                      <Field
                        label="Email *"
                        placeholder="ada@example.com"
                        type="email"
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <Field label="Subject" placeholder="What's this about?" />
                    </div>
                    <div className="mt-4">
                      <Field
                        label="Message *"
                        placeholder="Tell us what's on your mind…"
                        textarea
                        required
                      />
                    </div>
                    <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                      <label
                        className="inline-flex items-center gap-2 text-[13px] cursor-pointer"
                        style={{ color: "var(--muted)" }}
                      >
                        <input type="checkbox" className="rounded" />
                        Subscribe to changelog updates
                      </label>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md text-[13.5px] font-medium transition-opacity hover:opacity-90"
                        style={{
                          background: "var(--accent)",
                          color: "var(--accent-fg)",
                        }}
                      >
                        Send message
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
