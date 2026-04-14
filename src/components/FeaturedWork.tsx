"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";
import CountUp from "./CountUp";

const caseStudyData = [
  {
    index: "01",
    resultNumber: 56,
    resultSuffix: "%",
    pills: ["Next.js", "Python", "Temporal", "AWS", "GraphQL"],
    link: null,
  },
  {
    index: "02",
    resultNumber: 10,
    resultSuffix: "yr",
    pills: ["React", "Node.js", "Go", "AWS Lambda", "Security"],
    link: { href: "https://jira.atlassian.com/browse/AX-662" },
  },
  {
    index: "03",
    resultNumber: 30,
    resultSuffix: "d",
    pills: ["React", "Node.js", "APIs", "Payments", "Startup"],
    link: null,
  },
];

export default function FeaturedWork() {
  const t = useTranslations("FeaturedWork");

  return (
    <section id="work" className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-[family-name:var(--font-inter)] tracking-[0.2em] uppercase text-on-surface-variant mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-bold mb-6">
            {t("heading")}
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-on-surface-variant mb-20 max-w-xl">
            {t("subheading")}
          </p>
        </FadeIn>

        <div className="space-y-24">
          {caseStudyData.map((study, i) => (
            <FadeIn key={study.index} delay={i * 100}>
              <article className="relative">
                <span className="font-[family-name:var(--font-manrope)] text-7xl sm:text-8xl font-bold text-surface-bright/50 absolute -top-10 -left-2 select-none pointer-events-none">
                  {study.index}
                </span>

                <div className="relative pt-8">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.15em] uppercase text-primary">
                      {t(`studies.${i}.company`)}
                    </span>
                    <span className="font-[family-name:var(--font-inter)] text-xs text-on-surface-variant/40">
                      {t(`studies.${i}.period`)}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-manrope)] text-2xl sm:text-3xl font-bold mb-8 leading-tight">
                    {t(`studies.${i}.title`)}
                  </h3>

                  <div className="grid sm:grid-cols-[1fr_1fr] gap-8 mb-8">
                    <div>
                      <p className="text-xs font-[family-name:var(--font-inter)] tracking-[0.15em] uppercase text-on-surface-variant/50 mb-2">
                        {t("theProblem")}
                      </p>
                      <p className="font-[family-name:var(--font-inter)] text-sm text-on-surface-variant leading-relaxed">
                        {t(`studies.${i}.problem`)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-[family-name:var(--font-inter)] tracking-[0.15em] uppercase text-on-surface-variant/50 mb-2">
                        {t("myRole")}
                      </p>
                      <p className="font-[family-name:var(--font-inter)] text-sm text-on-surface-variant leading-relaxed">
                        {t(`studies.${i}.approach`)}
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-low rounded-xl p-6 ghost-border">
                    <div className="flex items-start gap-6">
                      <div className="text-center shrink-0">
                        <p className="font-[family-name:var(--font-manrope)] text-4xl font-bold text-primary">
                          <CountUp end={study.resultNumber} suffix={study.resultSuffix} />
                        </p>
                        <p className="font-[family-name:var(--font-inter)] text-xs text-on-surface-variant/60 mt-1">
                          {t(`studies.${i}.resultLabel`)}
                        </p>
                      </div>
                      <p className="font-[family-name:var(--font-inter)] text-sm text-on-surface-variant leading-relaxed">
                        {t(`studies.${i}.result`)}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-6">
                    {study.pills.map((pill) => (
                      <span
                        key={pill}
                        className="text-xs font-[family-name:var(--font-inter)] px-3 py-1 rounded-full bg-surface-bright/40 text-on-surface-variant/70"
                      >
                        {pill}
                      </span>
                    ))}
                    {study.link && (
                      <a
                        href={study.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-[family-name:var(--font-inter)] text-primary hover:text-secondary transition-colors ml-2"
                      >
                        {t(`studies.${i}.linkLabel`)} &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
