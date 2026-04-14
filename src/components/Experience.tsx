"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const timelineKeys = [0, 1, 2, 3];
const currentIndex = 0;

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="relative py-32 bg-surface-low">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-[family-name:var(--font-inter)] tracking-[0.2em] uppercase text-on-surface-variant mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-bold mb-16">
            {t("heading")}
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-outline-variant/20" />

          <div className="space-y-10">
            {timelineKeys.map((i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="relative pl-8">
                  <div
                    className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[3.5px] ${
                      i === currentIndex
                        ? "bg-secondary shadow-[0_0_8px_rgba(0,210,255,0.5)]"
                        : "bg-outline-variant/50"
                    }`}
                  />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                    <h3 className="font-[family-name:var(--font-manrope)] font-bold">
                      {t(`timeline.${i}.company`)}
                    </h3>
                    <span className="font-[family-name:var(--font-inter)] text-xs text-on-surface-variant/50">
                      {t(`timeline.${i}.role`)} · {t(`timeline.${i}.period`)}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-on-surface-variant leading-relaxed">
                    {t(`timeline.${i}.description`)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
