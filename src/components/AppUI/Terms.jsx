import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useDocumentMeta } from "../../hooks";
import { SITE_META } from "../../lib/constants";

const SECTIONS = [
  [
    "1. Acceptance",
    "By using retroui you agree to these terms. If you do not agree, please refrain from using the library.",
  ],
  [
    "2. License",
    "retroui is released under the MIT License. You may copy, modify, and use the components for personal and commercial projects.",
  ],
  ["3. Attribution", "Attribution is appreciated but not required."],
  [
    "4. No warranty",
    'The library is provided "as is" without warranty of any kind, express or implied.',
  ],
  [
    "5. Contact",
    "Questions about these terms? Reach out at hello@retroui.dev.",
  ],
];

export default function Terms() {
  useDocumentMeta({
    title: `Terms & Conditions | ${SITE_META.name}`,
    description: "Terms of use for retroUI.",
    canonical: `${SITE_META.url}/terms-conditions`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12">
          <div
            className="flex items-center gap-2 text-[12px] mono mb-3"
            style={{ color: "var(--muted)" }}
          >
            <Link to="/" className="hover:!text-[var(--fg)] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-[11px] h-[11px]" />
            <span style={{ color: "var(--fg)" }}>Terms &amp; Conditions</span>
          </div>
          <h1
            className="display text-[40px] sm:text-[48px] tracking-tight leading-[1.0]"
            style={{ color: "var(--fg)" }}
          >
            Terms{" "}
            <span className="display-italic" style={{ color: "var(--muted)" }}>
              &amp; Conditions.
            </span>
          </h1>
          <p
            className="mt-3 text-[13.5px] mono"
            style={{ color: "var(--muted)" }}
          >
            Last updated · {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-14">
          <div className="space-y-8 max-w-[800px]">
            {SECTIONS.map(([h, body]) => (
              <div key={h}>
                <h2
                  className="text-[18px] font-semibold tracking-tight mb-2"
                  style={{ color: "var(--fg)" }}
                >
                  {h}
                </h2>
                <p
                  className="text-[14.5px] leading-[1.75]"
                  style={{ color: "var(--muted)" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
