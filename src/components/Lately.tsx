"use client"

import { useTranslations } from "next-intl"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
const serif = "'Instrument Serif', 'Times New Roman', serif"

const glyphs = ["\u25D0", "\u2318", "\u2615"]

export default function Lately() {
  const t = useTranslations("Lately")

  return (
    <section id="now">
      <div style={{ padding: "56px 28px 24px", borderTop: "1px solid var(--line)", display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "var(--fg-faint)", letterSpacing: "0.08em", textTransform: "uppercase" }}>// 04</span>
        <span style={{ fontFamily: mono, color: "var(--fg-faint)", fontSize: 12 }}>{"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}</span>
        <span style={{ fontFamily: mono, fontSize: 13, color: "var(--fg-dim)", letterSpacing: "0.04em" }}>right_now.md</span>
        <h2 style={{ width: "100%", fontFamily: serif, fontWeight: 400, fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--fg)", marginTop: 8 }}>
          {t("headingStart")} <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t("headingAccent")}</em>{t("headingEnd")}
        </h2>
        <p style={{ width: "100%", maxWidth: 640, color: "var(--fg-dim)", fontSize: "15.5px", lineHeight: 1.6, marginTop: 10 }}>
          {t("subheading")}
        </p>
      </div>

      <div
        className="responsive-now-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
          padding: "0 28px 56px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--line)",
              borderRadius: 4,
              padding: "26px 24px 28px",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.2s, transform 0.2s",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 18,
                fontFamily: mono,
                fontSize: 20,
                color: "var(--accent)",
                opacity: 0.6,
              }}
            >
              {glyphs[i]}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: mono,
                fontSize: 11,
                color: "var(--fg-faint)",
                marginBottom: 20,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--green)",
                  boxShadow: "0 0 8px rgba(143,182,123,0.5)",
                }}
              />
              thread &middot; {String(i + 1).padStart(3, "0")}
            </div>
            <h4
              style={{
                fontFamily: serif,
                fontSize: 26,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              {t(`thoughts.${i}.titleStart`)}{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                {t(`thoughts.${i}.titleAccent`)}
              </em>
              {t(`thoughts.${i}.titleEnd`)}
            </h4>
            <p style={{ color: "var(--fg-dim)", fontSize: 14, lineHeight: 1.6 }}>
              {t(`thoughts.${i}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
