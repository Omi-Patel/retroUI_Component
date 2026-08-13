import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useDocumentMeta } from "../../hooks";
import { SITE_META } from "../../lib/constants";

const SECTIONS = [
  [
    "1. Information Collection",
    "RetroUI does not collect personal information. For open-source contributions, we may store provided names and email addresses.",
  ],
  [
    "2. Information Usage",
    "Collected information is used solely for improving RetroUI and communicating with contributors. We do not sell or transfer your information.",
  ],
  [
    "3. Data Security",
    "We implement security measures to protect your personal information. All data is encrypted and stored securely.",
  ],
  [
    "4. Third-party Links",
    "We are not responsible for the content or privacy practices of any third-party sites we may link to. Please review their policies before providing information.",
  ],
  [
    "5. Policy Changes",
    "Changes to this policy will be posted on this page. We will notify users of significant changes via email or site notification.",
  ],
  [
    "6. Contact",
    "For questions about this policy, contact privacy@retroui.com. We aim to respond to all inquiries within 48 hours.",
  ],
];

export default function PrivacyPolicy() {
  useDocumentMeta({
    title: `Privacy Policy | ${SITE_META.name}`,
    description: "How retroUI handles your data and contributions.",
    canonical: `${SITE_META.url}/privacy-policy`,
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
            <span style={{ color: "var(--fg)" }}>Privacy Policy</span>
          </div>
          <h1
            className="page-title"
            style={{ color: "var(--fg)" }}
          >
            Privacy{" "}
            <span className="display-italic" style={{ color: "var(--muted)" }}>
              Policy.
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
