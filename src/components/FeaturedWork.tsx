"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";
import CountUp from "./CountUp";
import SectionHeader from "./SectionHeader";

const caseStudyData = [
  {
    index: 0,
    lineStart: "001",
    resultNumber: 56,
    resultSuffix: "%",
    pills: ["Next.js", "Python", "Temporal", "AWS", "GraphQL"],
    link: null,
  },
  {
    index: 1,
    lineStart: "013",
    resultNumber: 10,
    resultSuffix: "yr",
    pills: ["React", "Node.js", "Go", "AWS Lambda", "Security"],
    link: { href: "https://jira.atlassian.com/browse/CLOUD-6999" },
  },
  {
    index: 2,
    lineStart: "025",
    resultNumber: 30,
    resultSuffix: "d",
    pills: ["React", "Node.js", "APIs", "Payments", "Startup"],
    link: null,
  },
];

export default function FeaturedWork() {
  const t = useTranslations("FeaturedWork");

  return (
    <section id="work">
      <SectionHeader
        idx="01"
        file="selected_work.md"
        title={t.raw("heading")}
        lede={t("subheading")}
      />

      <div className="border-t border-line">
        {caseStudyData.map((study, i) => (
          <FadeIn key={study.index}>
            <article className="project-grid border-b border-line relative transition-colors duration-200 hover:bg-accent/[0.02]">
              {/* Line numbers */}
              <div
                className="text-right py-9 px-3 select-none border-r border-line"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  color: "var(--fg-faint)",
                }}
              >
                {study.lineStart}
              </div>

              {/* Body */}
              <div className="project-body">
                {/* Meta */}
                <div className="flex flex-col gap-4">
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(32px, 4vw, 48px)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {t(`studies.${i}.company`)}
                  </div>
                  <div
                    className="meta-kv"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12px",
                      color: "var(--fg-dim)",
                    }}
                  >
                    <span style={{ color: "var(--fg-faint)" }}>
                      {t("yearLabel")}
                    </span>
                    <span style={{ color: "var(--fg)" }}>
                      {t(`studies.${i}.period`)}
                    </span>
                    <span style={{ color: "var(--fg-faint)" }}>
                      {t("roleLabel")}
                    </span>
                    <span style={{ color: "var(--fg)" }}>
                      {t(`studies.${i}.role`)}
                    </span>
                    <span style={{ color: "var(--fg-faint)" }}>
                      {t("teamLabel")}
                    </span>
                    <span style={{ color: "var(--fg)" }}>
                      {t(`studies.${i}.team`)}
                    </span>
                    <span style={{ color: "var(--fg-faint)" }}>
                      {t(`studies.${i}.metaLabel`)}
                    </span>
                    <span style={{ color: "var(--accent)" }}>
                      {t(`studies.${i}.metaValue`)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {study.pills.map((pill) => (
                      <span
                        key={pill}
                        className="border rounded-sm px-2 py-0.5"
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "10.5px",
                          color: "var(--fg-dim)",
                          borderColor: "var(--line-strong)",
                        }}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5">
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(22px, 3vw, 30px)",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.15,
                      color: "var(--fg)",
                      marginBottom: "4px",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: t.raw(`studies.${i}.title`),
                    }}
                  />

                  <div>
                    <div
                      className="flex items-center gap-2 mb-1.5"
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        color: "var(--fg-faint)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      <span style={{ color: "var(--accent)" }}>#</span>
                      {t("theProblem")}
                    </div>
                    <p
                      style={{
                        color: "var(--fg-dim)",
                        fontSize: "15px",
                        lineHeight: 1.65,
                      }}
                    >
                      {t(`studies.${i}.problem`)}
                    </p>
                  </div>

                  <div>
                    <div
                      className="flex items-center gap-2 mb-1.5"
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        color: "var(--fg-faint)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      <span style={{ color: "var(--accent)" }}>#</span>
                      {t("myRole")}
                    </div>
                    <p
                      style={{
                        color: "var(--fg-dim)",
                        fontSize: "15px",
                        lineHeight: 1.65,
                      }}
                    >
                      {t(`studies.${i}.approach`)}
                    </p>
                  </div>

                  <div
                    className="outcome-grid rounded p-4"
                    style={{
                      background: "var(--bg-2)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "clamp(40px, 5vw, 64px)",
                          lineHeight: 0.9,
                          color: "var(--accent)",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        <CountUp
                          end={study.resultNumber}
                          suffix={study.resultSuffix}
                        />
                      </div>
                      <div
                        className="mt-1"
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                          color: "var(--fg-faint)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {t(`studies.${i}.resultLabel`)}
                      </div>
                    </div>
                    <div
                      style={{
                        color: "var(--fg)",
                        fontSize: "14px",
                        lineHeight: 1.55,
                      }}
                    >
                      {t(`studies.${i}.result`)}
                    </div>
                  </div>

                  {study.link && (
                    <a
                      href={study.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 self-start no-underline"
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "12px",
                        color: "var(--accent)",
                        borderBottom: "1px dashed rgba(232,162,83,0.4)",
                      }}
                    >
                      {t(`studies.${i}.linkLabel`)} <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
