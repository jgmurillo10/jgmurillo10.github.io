"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
const serif = "'Instrument Serif', 'Times New Roman', serif"

interface ProjectProps {
  lineStart: number
  name: string
  year: string
  role: string
  team: string
  statusLabel: string
  statusValue: string
  stack: string[]
  title: string
  titleAccent: string
  problemLabel: string
  problem: string
  roleLabel: string
  roleDesc: string
  outcomeNum: string
  outcomeLabel: string
  outcomeNarr: string
  ticketLink?: string
  ticketText?: string
}

function Project({
  lineStart,
  name,
  year,
  role,
  team,
  statusLabel,
  statusValue,
  stack,
  title,
  titleAccent,
  problemLabel,
  problem,
  roleLabel,
  roleDesc,
  outcomeNum,
  outcomeLabel,
  outcomeNarr,
  ticketLink,
  ticketText,
}: ProjectProps) {
  const [hovered, setHovered] = useState(false)
  const lines = Array.from({ length: 12 }, (_, i) =>
    String(lineStart + i).padStart(3, "0")
  )

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "56px 1fr",
        borderBottom: "1px solid var(--line)",
        transition: "background 0.2s",
        position: "relative",
        background: hovered ? "rgba(232, 162, 83, 0.02)" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Year tick */}
      <div
        style={{
          position: "absolute",
          left: -1,
          top: 36,
          width: 2,
          height: hovered ? "calc(100% - 72px)" : 0,
          background: "var(--accent)",
          transition: "height 0.3s",
        }}
      />

      {/* Line numbers */}
      <div
        style={{
          fontFamily: mono,
          fontSize: 11,
          color: "var(--fg-faint)",
          textAlign: "right",
          padding: "36px 12px",
          userSelect: "none",
          borderRight: "1px solid var(--line)",
        }}
      >
        {lines.map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>

      {/* Body */}
      <div
        className="responsive-project-body"
        style={{
          padding: "36px 28px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: 48,
        }}
      >
        {/* Meta */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontFamily: serif,
              fontSize: 48,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: mono,
              fontSize: 12,
              color: "var(--fg-dim)",
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              rowGap: 6,
              columnGap: 14,
            }}
          >
            <span style={{ color: "var(--fg-faint)" }}>year</span>
            <span style={{ color: "var(--fg)" }}>{year}</span>
            <span style={{ color: "var(--fg-faint)" }}>role</span>
            <span style={{ color: "var(--fg)" }}>{role}</span>
            <span style={{ color: "var(--fg-faint)" }}>team</span>
            <span style={{ color: "var(--fg)" }}>{team}</span>
            <span style={{ color: "var(--fg-faint)" }}>{statusLabel}</span>
            <span style={{ color: "var(--fg)" }}>
              <span style={{ color: "var(--accent)" }}>{statusValue}</span>
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
            {stack.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: mono,
                  fontSize: "10.5px",
                  color: "var(--fg-dim)",
                  border: "1px solid var(--line-strong)",
                  padding: "3px 8px",
                  borderRadius: 2,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <h3
            style={{
              fontFamily: serif,
              fontSize: 30,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
              color: "var(--fg)",
              marginBottom: 4,
            }}
          >
            {title}{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              {titleAccent}
            </em>
            .
          </h3>

          <div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 11,
                color: "var(--fg-faint)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 6,
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <span style={{ color: "var(--accent)" }}>#</span> {problemLabel}
            </div>
            <p style={{ color: "var(--fg-dim)", fontSize: 15, lineHeight: 1.65 }}>
              {problem}
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 11,
                color: "var(--fg-faint)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 6,
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <span style={{ color: "var(--accent)" }}>#</span> {roleLabel}
            </div>
            <p style={{ color: "var(--fg-dim)", fontSize: 15, lineHeight: 1.65 }}>
              {roleDesc}
            </p>
          </div>

          <div
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--line)",
              borderRadius: 4,
              padding: "18px 20px",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 22,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: serif,
                  fontSize: 64,
                  lineHeight: 0.9,
                  color: "var(--accent)",
                  letterSpacing: "-0.03em",
                }}
              >
                {outcomeNum}
              </div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: "var(--fg-faint)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginTop: 4,
                }}
              >
                {outcomeLabel}
              </div>
            </div>
            <div style={{ color: "var(--fg)", fontSize: 14, lineHeight: 1.55 }}>
              {outcomeNarr}
            </div>
          </div>

          {ticketLink && (
            <a
              href={ticketLink}
              target="_blank"
              rel="noopener"
              style={{
                fontFamily: mono,
                fontSize: 12,
                color: "var(--accent)",
                textDecoration: "none",
                borderBottom: "1px dashed rgba(232,162,83,0.4)",
                display: "inline-flex",
                gap: 6,
                alignItems: "center",
                alignSelf: "flex-start",
              }}
            >
              {ticketText} <span>{"\u2197"}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function FeaturedWork() {
  const t = useTranslations("FeaturedWork")

  return (
    <section id="work">
      <div className="sec-head" style={{ padding: "56px 28px 24px", borderTop: "1px solid var(--line)", display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "var(--fg-faint)", letterSpacing: "0.08em", textTransform: "uppercase" }}>// 01</span>
        <span style={{ fontFamily: mono, color: "var(--fg-faint)", fontSize: 12 }}>{"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}</span>
        <span style={{ fontFamily: mono, fontSize: 13, color: "var(--fg-dim)", letterSpacing: "0.04em" }}>selected_work.md</span>
        <h2 style={{ width: "100%", fontFamily: serif, fontWeight: 400, fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--fg)", marginTop: 8 }}>
          {t("headingStart")} <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t("headingAccent")}</em>.
        </h2>
        <p style={{ width: "100%", maxWidth: 640, color: "var(--fg-dim)", fontSize: "15.5px", lineHeight: 1.6, marginTop: 10 }}>
          {t("subheading")}
        </p>
      </div>

      <div style={{ borderTop: "1px solid var(--line)" }}>
        <Project
          lineStart={1}
          name={t("studies.0.company")}
          year={t("studies.0.period")}
          role={t("studies.0.role")}
          team={t("studies.0.team")}
          statusLabel="status"
          statusValue={t("studies.0.statusValue")}
          stack={["Next.js", "Python", "Temporal", "AWS", "GraphQL"]}
          title={t("studies.0.titleStart")}
          titleAccent={t("studies.0.titleAccent")}
          problemLabel={t("theProblem")}
          problem={t("studies.0.problem")}
          roleLabel={t("myRole")}
          roleDesc={t("studies.0.approach")}
          outcomeNum="56%"
          outcomeLabel={t("studies.0.resultLabel")}
          outcomeNarr={t("studies.0.result")}
        />
        <Project
          lineStart={13}
          name={t("studies.1.company")}
          year={t("studies.1.period")}
          role={t("studies.1.role")}
          team={t("studies.1.team")}
          statusLabel="ticket"
          statusValue="CLOUD-6999 · 10+ yrs"
          stack={["React", "Node.js", "Go", "AWS Lambda", "Security"]}
          title={t("studies.1.titleStart")}
          titleAccent={t("studies.1.titleAccent")}
          problemLabel={t("theProblem")}
          problem={t("studies.1.problem")}
          roleLabel={t("myRole")}
          roleDesc={t("studies.1.approach")}
          outcomeNum="10yr"
          outcomeLabel={t("studies.1.resultLabel")}
          outcomeNarr={t("studies.1.result")}
          ticketLink="https://jira.atlassian.com/browse/CLOUD-6999"
          ticketText={t("studies.1.linkLabel")}
        />
        <Project
          lineStart={25}
          name={t("studies.2.company")}
          year={t("studies.2.period")}
          role={t("studies.2.role")}
          team={t("studies.2.team")}
          statusLabel="outcome"
          statusValue="YC interview"
          stack={["React", "Node.js", "APIs", "Payments", "Startup"]}
          title={t("studies.2.titleStart")}
          titleAccent={t("studies.2.titleAccent")}
          problemLabel={t("theProblem")}
          problem={t("studies.2.problem")}
          roleLabel={t("myRole")}
          roleDesc={t("studies.2.approach")}
          outcomeNum="30d"
          outcomeLabel={t("studies.2.resultLabel")}
          outcomeNarr={t("studies.2.result")}
        />
      </div>
    </section>
  )
}
