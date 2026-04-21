"use client"

import { useTranslations } from "next-intl"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
const serif = "'Instrument Serif', 'Times New Roman', serif"

const asciiGlyphs = ["{ }", "</>"  , "[ ]"]
const nums = ["01 / full-stack", "02 / ai & automation", "03 / leadership"]

export default function Services() {
  const t = useTranslations("Services")

  return (
    <section id="services">
      <div style={{ padding: "56px 28px 24px", borderTop: "1px solid var(--line)", display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "var(--fg-faint)", letterSpacing: "0.08em", textTransform: "uppercase" }}>// 02</span>
        <span style={{ fontFamily: mono, color: "var(--fg-faint)", fontSize: 12 }}>{"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}</span>
        <span style={{ fontFamily: mono, fontSize: 13, color: "var(--fg-dim)", letterSpacing: "0.04em" }}>what_i_do.md</span>
        <h2 style={{ width: "100%", fontFamily: serif, fontWeight: 400, fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--fg)", marginTop: 8 }}>
          {t("headingStart")} <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t("headingAccent")}</em>{t("headingEnd")}
        </h2>
        <p style={{ width: "100%", maxWidth: 640, color: "var(--fg-dim)", fontSize: "15.5px", lineHeight: 1.6, marginTop: 10 }}>
          {t("subheading")}
        </p>
      </div>

      <div
        className="responsive-services"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              padding: "36px 28px 44px",
              borderRight: i < 2 ? "1px solid var(--line)" : "none",
              position: "relative",
              transition: "background 0.2s",
            }}
          >
            <div
              style={{
                fontFamily: mono,
                fontSize: 10,
                color: "var(--accent)",
                opacity: 0.5,
                whiteSpace: "pre",
                lineHeight: 1.1,
                marginBottom: 20,
                letterSpacing: 0,
              }}
            >
              {asciiGlyphs[i]}
            </div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 11,
                color: "var(--fg-faint)",
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 16,
                  height: 1,
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              {nums[i]}
            </div>
            <h3
              style={{
                fontFamily: serif,
                fontSize: 32,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              {t(`capabilities.${i}.titleStart`)}{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                {t(`capabilities.${i}.titleAccent`)}
              </em>
              {t(`capabilities.${i}.titleEnd`)}
            </h3>
            <p
              style={{
                color: "var(--fg-dim)",
                fontSize: "14.5px",
                lineHeight: 1.65,
              }}
            >
              {t(`capabilities.${i}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
