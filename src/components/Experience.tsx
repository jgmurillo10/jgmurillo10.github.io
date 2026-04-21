"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const timelineKeys = [0, 1, 2, 3];
const lineNumbers = ["037", "038", "039", "040"];

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section id="experience">
      <SectionHeader
        idx="03"
        file="experience.md"
        title={t.raw("heading")}
        lede={t("subheading")}
      />

      <FadeIn>
        <div className="wrap border-t border-line" style={{ padding: 0 }}>
          {timelineKeys.map((i) => (
            <div
              key={i}
              className="exp-row border-b border-line transition-colors duration-200 hover:bg-accent/[0.02] cursor-default"
            >
              <div
                className="text-right"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  color: "var(--fg-faint)",
                }}
              >
                {lineNumbers[i]}
              </div>
              <div
                className="pt-1"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  color: "var(--accent)",
                  letterSpacing: "0.02em",
                }}
              >
                {t(`timeline.${i}.period`)}
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "26px",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                  }}
                >
                  {t(`timeline.${i}.company`)}
                </h4>
                <div
                  className="mt-1.5"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "12px",
                    color: "var(--fg-dim)",
                  }}
                >
                  {t(`timeline.${i}.role`)}
                </div>
              </div>
              <div
                className="exp-desc"
                style={{
                  color: "var(--fg-dim)",
                  fontSize: "14.5px",
                  lineHeight: 1.6,
                }}
              >
                {t(`timeline.${i}.description`)}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
