"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="relative py-32 bg-surface-low">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-dim/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-[family-name:var(--font-inter)] tracking-[0.2em] uppercase text-on-surface-variant mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-bold mb-4">
            {t("heading")}
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-on-surface-variant max-w-lg leading-relaxed mb-12">
            {t("subheading")}
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="mailto:juanchomurcas@gmail.com"
              className="gradient-btn text-black font-medium font-[family-name:var(--font-inter)] px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm text-center"
            >
              juanchomurcas@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/juan-murillo"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-border text-on-surface-variant font-medium font-[family-name:var(--font-inter)] px-6 py-3 rounded-lg hover:text-on-surface hover:bg-surface-highest/40 transition-colors text-sm text-center"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jgmurillo10"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-border text-on-surface-variant font-medium font-[family-name:var(--font-inter)] px-6 py-3 rounded-lg hover:text-on-surface hover:bg-surface-highest/40 transition-colors text-sm text-center"
            >
              GitHub
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <p className="font-[family-name:var(--font-inter)] text-sm text-on-surface-variant/40">
            {t("basedIn")}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
