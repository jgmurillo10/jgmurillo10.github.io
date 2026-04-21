"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const techStack = [
  { label: "TypeScript", accent: true },
  { label: "React", accent: true },
  { label: "Node.js", accent: false },
  { label: "Python", accent: false },
  { label: "Go", accent: false },
  { label: "GraphQL", accent: false },
  { label: "PostgreSQL", accent: false },
  { label: "AWS", accent: false },
  { label: "GCP", accent: false },
  { label: "Docker", accent: false },
  { label: "Temporal", accent: false },
  { label: "PyTorch", accent: false },
];

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about">
      <SectionHeader
        idx="05"
        file="about.md"
        title={t("heading")}
      />

      <FadeIn>
        <div
          className="grid gap-[64px] px-[28px] pb-[56px] items-start"
          style={{ gridTemplateColumns: "1fr 1.4fr" }}
        >
          {/* Portrait */}
          <aside className="sticky top-[120px]">
            <div
              className="w-full aspect-[3/4] rounded-[4px] border relative overflow-hidden flex items-end justify-start p-[18px]"
              style={{
                borderColor: "var(--line-strong)",
                background: `repeating-linear-gradient(45deg, rgba(232,162,83,0.08) 0, rgba(232,162,83,0.08) 1px, transparent 1px, transparent 12px), linear-gradient(180deg, var(--bg-3), var(--bg-2))`,
              }}
            >
              <Image
                src="/juan-murillo.jpg"
                alt="Juan Murillo"
                fill
                className="object-cover"
              />
              <div className="relative z-10">
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "48px",
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    textShadow: "0 2px 12px rgba(0,0,0,0.7)",
                  }}
                >
                  Juan
                  <br />
                  Murillo
                  <span
                    className="block mt-[8px]"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11px",
                      color: "var(--fg-faint)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      textShadow: "0 1px 8px rgba(0,0,0,0.9)",
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
            <div className="space-y-[24px]">
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "22px",
                  lineHeight: 1.45,
                  color: "var(--fg)",
                  textWrap: "pretty",
                }}
                dangerouslySetInnerHTML={{
                  __html: t.raw("paragraph1"),
                }}
              />
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "22px",
                  lineHeight: 1.45,
                  color: "var(--fg-dim)",
                  textWrap: "pretty",
                }}
                dangerouslySetInnerHTML={{
                  __html: t.raw("paragraph2"),
                }}
              />
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "22px",
                  lineHeight: 1.45,
                  color: "var(--fg-dim)",
                  textWrap: "pretty",
                }}
                dangerouslySetInnerHTML={{
                  __html: t.raw("paragraph3"),
                }}
              />
            </div>

            <div className="flex flex-wrap gap-[6px] mt-[40px]">
              {techStack.map((tech) => (
                <span
                  key={tech.label}
                  className="rounded-[2px] px-[10px] py-[5px]"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    color: tech.accent
                      ? "var(--accent)"
                      : "var(--fg)",
                    border: `1px solid ${
                      tech.accent
                        ? "rgba(232,162,83,0.35)"
                        : "var(--line-strong)"
                    }`,
                    background: "var(--bg-2)",
                  }}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <style jsx>{`
        @media (max-width: 1080px) {
          div[style*="grid-template-columns: 1fr 1.4fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
