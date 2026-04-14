"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const capabilityKeys = [0, 1, 2];

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="relative py-32 bg-surface-low">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-[family-name:var(--font-inter)] tracking-[0.2em] uppercase text-on-surface-variant mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-bold mb-16">
            {t("heading")}
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {capabilityKeys.map((i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-8">
                <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-primary">
                  {t(`capabilities.${i}.title`)}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-on-surface-variant leading-relaxed">
                  {t(`capabilities.${i}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
