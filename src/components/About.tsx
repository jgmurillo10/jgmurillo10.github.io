"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const techStack = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Go",
  "GraphQL",
  "PostgreSQL",
  "AWS",
  "GCP",
  "Docker",
  "Temporal",
  "PyTorch",
];

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-[family-name:var(--font-inter)] tracking-[0.2em] uppercase text-on-surface-variant mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-bold mb-16">
            {t("heading")}
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          <FadeIn>
            <div className="aspect-[3/4] rounded-2xl bg-surface-low ghost-border overflow-hidden">
              <Image
                src="/juan-murillo.jpg"
                alt="Juan Murillo"
                width={280}
                height={373}
                className="object-cover w-full h-full"
              />
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="font-[family-name:var(--font-inter)] text-on-surface-variant leading-relaxed space-y-4">
              <p>
                {t.rich("paragraph1", {
                  strong: (chunks) => (
                    <strong className="text-on-surface">{chunks}</strong>
                  ),
                })}
              </p>
              <p>{t("paragraph2")}</p>
              <p>
                {t.rich("paragraph3", {
                  strong: (chunks) => (
                    <strong className="text-on-surface">{chunks}</strong>
                  ),
                })}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-[family-name:var(--font-inter)] px-3 py-1.5 rounded-md bg-surface-low ghost-border text-on-surface-variant/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
