"use client"

import { useTranslations } from "next-intl"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
const serif = "'Instrument Serif', 'Times New Roman', serif"

export default function Contact() {
  const t = useTranslations("Contact")

  return (
    <section
      id="contact"
      style={{
        padding: "70px 28px 80px",
        borderTop: "1px solid var(--line)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 18,
          marginBottom: 12,
          fontFamily: mono,
          fontSize: 11,
          color: "var(--fg-faint)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span>// 06</span>
        <span>{"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}</span>
        <span>contact.md</span>
      </div>

      <h2
        style={{
          fontFamily: serif,
          fontWeight: 400,
          fontSize: "clamp(48px, 7vw, 96px)",
          letterSpacing: "-0.025em",
          lineHeight: 1,
          maxWidth: "16ch",
          marginBottom: 32,
        }}
      >
        {t("headingStart")}{" "}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
          {t("headingAccent")}
        </em>
        .
      </h2>

      <p
        style={{
          maxWidth: "56ch",
          color: "var(--fg-dim)",
          fontSize: 17,
          lineHeight: 1.6,
          marginBottom: 36,
        }}
      >
        {t("subheading")}
      </p>

      <div
        className="responsive-contact-row"
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 48,
          alignItems: "end",
        }}
      >
        <a
          href="mailto:juanchomurcas@gmail.com"
          style={{
            fontFamily: serif,
            fontSize: "clamp(26px, 3.2vw, 42px)",
            letterSpacing: "-0.01em",
            color: "var(--fg)",
            textDecoration: "none",
            borderBottom: "1px solid var(--line-strong)",
            paddingBottom: 10,
            display: "inline-block",
            transition: "color 0.2s, border-color 0.2s",
          }}
        >
          juanchomurcas@gmail.com {"\u2192"}
        </a>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            fontFamily: mono,
            fontSize: 13,
          }}
        >
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/juan-murillo", arrow: "\u2197" },
            { label: "GitHub", href: "https://github.com/jgmurillo10", arrow: "\u2197" },
            { label: t("jsconfLabel"), href: "https://www.youtube.com/@nicobytes/search?query=murillo", arrow: "\u2197" },
            { label: "/cv \u00b7 PDF", href: "https://drive.google.com/file/d/1O-TsAG3UZaLjudiIri6yREADs8PftpP0/view?usp=sharing", arrow: "\u2193" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "var(--fg)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid var(--line)",
                transition: "color 0.15s, padding 0.2s",
              }}
            >
              <span>{link.label}</span>
              <span style={{ color: "var(--fg-faint)" }}>{link.arrow}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
