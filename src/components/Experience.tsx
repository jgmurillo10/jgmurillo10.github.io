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
        title={t("heading")}
        lede={t("subheading")}
      />

      <FadeIn>
        <div className="border-t border-line">
          {timelineKeys.map((i) => (
            <div
              key={i}
              className="grid gap-[32px] px-[28px] py-[28px] border-b border-line items-start transition-colors duration-200 hover:bg-accent/[0.02] cursor-default"
              style={{
                gridTemplateColumns: "56px 160px 1fr 1fr",
              }}
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
                className="pt-[4px]"
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
                  className="mt-[6px]"
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

      <style jsx>{`
        @media (max-width: 1080px) {
          div[style*="grid-template-columns: 56px 160px"] {
            grid-template-columns: 40px 110px 1fr !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="grid-template-columns: 56px 160px"] {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
            padding: 20px 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
