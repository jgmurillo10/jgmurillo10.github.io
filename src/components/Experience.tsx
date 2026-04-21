"use client"

import { useTranslations } from "next-intl"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
const serif = "'Instrument Serif', 'Times New Roman', serif"

export default function Experience() {
  const t = useTranslations("Experience")

  const rows = [0, 1, 2, 3]

  return (
    <section id="experience">
      <div style={{ padding: "56px 28px 24px", borderTop: "1px solid var(--line)", display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "var(--fg-faint)", letterSpacing: "0.08em", textTransform: "uppercase" }}>// 03</span>
        <span style={{ fontFamily: mono, color: "var(--fg-faint)", fontSize: 12 }}>{"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}</span>
        <span style={{ fontFamily: mono, fontSize: 13, color: "var(--fg-dim)", letterSpacing: "0.04em" }}>experience.md</span>
        <h2 style={{ width: "100%", fontFamily: serif, fontWeight: 400, fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--fg)", marginTop: 8 }}>
          {t("headingStart")} <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t("headingAccent")}</em> {t("headingEnd")}
        </h2>
        <p style={{ width: "100%", maxWidth: 640, color: "var(--fg-dim)", fontSize: "15.5px", lineHeight: 1.6, marginTop: 10 }}>
          {t("subheading")}
        </p>
      </div>

      <div style={{ borderTop: "1px solid var(--line)" }}>
        {rows.map((i) => (
          <div
            key={i}
            className="responsive-exp-row"
            style={{
              display: "grid",
              gridTemplateColumns: "56px 160px 1fr 1fr",
              gap: 32,
              padding: "28px 28px",
              borderBottom: "1px solid var(--line)",
              alignItems: "start",
              transition: "background 0.2s",
              cursor: "default",
            }}
          >
            <div style={{ fontFamily: mono, fontSize: 11, color: "var(--fg-faint)", textAlign: "right" }}>
              {String(37 + i).padStart(3, "0")}
            </div>
            <div style={{ fontFamily: mono, fontSize: 12, color: "var(--accent)", paddingTop: 4, letterSpacing: "0.02em" }}>
              {t(`timeline.${i}.period`)}
            </div>
            <div>
              <h4 style={{ fontFamily: serif, fontSize: 26, fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                {t(`timeline.${i}.company`)}
              </h4>
              <div style={{ fontFamily: mono, fontSize: 12, color: "var(--fg-dim)", marginTop: 6 }}>
                {t(`timeline.${i}.role`)}
              </div>
            </div>
            <div style={{ color: "var(--fg-dim)", fontSize: "14.5px", lineHeight: 1.6 }}>
              {t(`timeline.${i}.description`)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
