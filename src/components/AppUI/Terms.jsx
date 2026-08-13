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
      <section className="page-intro">
        <div className="site-container">
          <div
            className="page-breadcrumb"
            style={{ color: "var(--muted)" }}
          >
            <Link to="/" className="hover:!text-[var(--fg)] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-[11px] h-[11px]" />
            <span style={{ color: "var(--fg)" }}>Terms &amp; Conditions</span>
          </div>
          <h1
            className="page-title"
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
        <div className="site-container-narrow site-section-compact">
          <div className="space-y-10">
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
