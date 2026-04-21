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
      style={{ padding: "70px 28px 80px" }}
    >
      <div
        className="flex items-baseline gap-[18px] mb-[12px]"
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
          className="mb-[32px]"
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(48px, 7vw, 96px)",
            letterSpacing: "-0.025em",
            lineHeight: 1,
            maxWidth: "16ch",
            textWrap: "balance",
          }}
          dangerouslySetInnerHTML={{ __html: t.raw("heading") }}
        />

        <p
          className="max-w-[56ch] mb-[36px]"
          style={{
            color: "var(--fg-dim)",
            fontSize: "17px",
            lineHeight: 1.6,
          }}
        >
          {t("subheading")}
        </p>

        <div
          className="grid gap-[48px] items-end"
          style={{ gridTemplateColumns: "1.3fr 1fr" }}
        >
          <a
            href="mailto:juanchomurcas@gmail.com"
            className="inline-block no-underline border-b pb-[10px] transition-colors duration-200 hover:text-accent hover:border-accent"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(26px, 3.2vw, 42px)",
              letterSpacing: "-0.01em",
              color: "var(--fg)",
              borderColor: "var(--line-strong)",
            }}
          >
            juanchomurcas@gmail.com →
          </a>

          <div
            className="flex flex-col gap-[12px]"
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
                className="flex justify-between items-center py-[12px] border-b no-underline transition-all duration-200 hover:text-accent hover:pl-[8px]"
                style={{
                  color: "var(--fg)",
                  borderColor: "var(--line)",
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

      <style jsx>{`
        @media (max-width: 1080px) {
          div[style*="grid-template-columns: 1.3fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
