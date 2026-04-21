"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
const serif = "'Instrument Serif', 'Times New Roman', serif"

const skills = [
  { name: "TypeScript", accent: true },
  { name: "React", accent: true },
  { name: "Node.js", accent: false },
  { name: "Python", accent: false },
  { name: "Go", accent: false },
  { name: "GraphQL", accent: false },
  { name: "PostgreSQL", accent: false },
  { name: "AWS", accent: false },
  { name: "GCP", accent: false },
  { name: "Docker", accent: false },
  { name: "Temporal", accent: false },
  { name: "PyTorch", accent: false },
]

export default function About() {
  const t = useTranslations("About")

  return (
    <section id="about">
      <div style={{ padding: "56px 28px 24px", borderTop: "1px solid var(--line)", display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "var(--fg-faint)", letterSpacing: "0.08em", textTransform: "uppercase" }}>// 05</span>
        <span style={{ fontFamily: mono, color: "var(--fg-faint)", fontSize: 12 }}>{"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}</span>
        <span style={{ fontFamily: mono, fontSize: 13, color: "var(--fg-dim)", letterSpacing: "0.04em" }}>about.md</span>
        <h2 style={{ width: "100%", fontFamily: serif, fontWeight: 400, fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--fg)", marginTop: 8 }}>
          {t("headingStart")} <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t("headingAccent")}</em>.
        </h2>
      </div>

      <div
        className="responsive-about"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 64,
          padding: "0 28px 56px",
          alignItems: "start",
        }}
      >
        {/* Portrait aside */}
        <aside style={{ position: "sticky", top: 120 }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "3 / 4",
              background:
                "repeating-linear-gradient(45deg, rgba(232,162,83,0.08) 0, rgba(232,162,83,0.08) 1px, transparent 1px, transparent 12px), linear-gradient(180deg, var(--bg-3), var(--bg-2))",
              border: "1px solid var(--line-strong)",
              borderRadius: 4,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              padding: 18,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/juan-murillo.jpg"
              alt="Juan Murillo"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1080px) 100vw, 40vw"
            />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div
                style={{
                  fontFamily: serif,
                  fontSize: 48,
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: "var(--fg)",
                  textShadow: "0 2px 12px rgba(0,0,0,0.7)",
                }}
              >
                Juan<br />Murillo
                <span
                  style={{
                    display: "block",
                    fontFamily: mono,
                    fontSize: 11,
                    color: "var(--fg-faint)",
                    marginTop: 8,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  {t("location")}
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* Body */}
        <div>
          <p
            style={{
              fontFamily: serif,
              fontSize: 22,
              lineHeight: 1.45,
              color: "var(--fg)",
              marginBottom: 24,
            }}
            dangerouslySetInnerHTML={{ __html: t("paragraph1") }}
          />
          <p
            style={{
              fontFamily: serif,
              fontSize: 22,
              lineHeight: 1.45,
              color: "var(--fg-dim)",
              marginBottom: 24,
            }}
            dangerouslySetInnerHTML={{ __html: t("paragraph2") }}
          />
          <p
            style={{
              fontFamily: serif,
              fontSize: 22,
              lineHeight: 1.45,
              color: "var(--fg-dim)",
              marginBottom: 24,
            }}
            dangerouslySetInnerHTML={{ __html: t("paragraph3") }}
          />

          <div
            style={{
              marginTop: 40,
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
            }}
          >
            {skills.map((s) => (
              <span
                key={s.name}
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: s.accent ? "var(--accent)" : "var(--fg)",
                  border: `1px solid ${s.accent ? "rgba(232,162,83,0.35)" : "var(--line-strong)"}`,
                  padding: "5px 10px",
                  borderRadius: 2,
                  background: "var(--bg-2)",
                }}
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
