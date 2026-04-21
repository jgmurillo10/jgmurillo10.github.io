"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

export default function Contact() {
  const t = useTranslations("Contact");

  const links = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/juan-murillo",
      arrow: "↗",
    },
    {
      label: "GitHub",
      href: "https://github.com/jgmurillo10",
      arrow: "↗",
    },
    {
      label: t("talkLink"),
      href: "#",
      arrow: "↗",
    },
    {
      label: t("cvLink"),
      href: "#",
      arrow: "↓",
    },
  ];

  return (
    <section
      id="contact"
      className="relative border-t border-line"
    >
      <div className="wrap" style={{ paddingTop: "70px", paddingBottom: "80px" }}>
      <div
        className="flex items-baseline gap-4 mb-3 flex-wrap"
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11px",
          color: "var(--fg-faint)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span>// 06</span>
        <span>─────────</span>
        <span>contact.md</span>
      </div>

      <FadeIn>
        <h2
          className="mb-8"
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(36px, 7vw, 96px)",
            letterSpacing: "-0.025em",
            lineHeight: 1,
            maxWidth: "16ch",
          }}
          dangerouslySetInnerHTML={{ __html: t.raw("heading") }}
        />

        <p
          className="max-w-[56ch] mb-9"
          style={{
            color: "var(--fg-dim)",
            fontSize: "17px",
            lineHeight: 1.6,
          }}
        >
          {t("subheading")}
        </p>

        <div className="contact-grid">
          <a
            href="mailto:juanchomurcas@gmail.com"
            className="inline-block no-underline border-b pb-2.5 transition-colors duration-200"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(20px, 3.2vw, 42px)",
              letterSpacing: "-0.01em",
              color: "var(--fg)",
              borderColor: "var(--line-strong)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--fg)";
              e.currentTarget.style.borderColor = "var(--line-strong)";
            }}
          >
            juanchomurcas@gmail.com →
          </a>

          <div
            className="flex flex-col gap-3"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "13px",
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex justify-between items-center py-3 border-b no-underline transition-all duration-200 hover:pl-2"
                style={{
                  color: "var(--fg)",
                  borderColor: "var(--line)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--fg)";
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: "var(--fg-faint)" }}>
                  {link.arrow}
                </span>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
      </div>
    </section>
  );
}
