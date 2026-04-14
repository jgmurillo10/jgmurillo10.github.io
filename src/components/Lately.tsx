"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const thoughtKeys = [0, 1, 2];

export default function Lately() {
  const t = useTranslations("Lately");

  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-[family-name:var(--font-inter)] tracking-[0.2em] uppercase text-on-surface-variant mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-bold mb-4">
            {t("heading")}
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-on-surface-variant mb-16 max-w-lg">
            {t("subheading")}
          </p>
        </FadeIn>

        <div className="space-y-6">
          {thoughtKeys.map((i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="group flex gap-5 p-6 rounded-xl bg-surface-low/50 ghost-border hover:bg-surface-highest/30 transition-colors duration-300">
                <span className="text-2xl shrink-0 mt-0.5">{t(`thoughts.${i}.emoji`)}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-manrope)] text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                    {t(`thoughts.${i}.title`)}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-on-surface-variant leading-relaxed">
                    {t(`thoughts.${i}.description`)}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
