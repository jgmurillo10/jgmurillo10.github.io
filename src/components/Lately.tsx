"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const glyphs = ["◐", "⌘", "☕"];

export default function Lately() {
  const t = useTranslations("Lately");

  return (
    <section id="now">
      <SectionHeader
        idx="04"
        file="right_now.md"
        title={t("heading")}
        lede={t("subheading")}
      />

      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] px-[28px] pb-[56px]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-[4px] p-[26px] pb-[28px] transition-all duration-200 hover:border-line-strong hover:-translate-y-[2px]"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
              }}
            >
              <div
                className="absolute top-[16px] right-[18px]"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "20px",
                  color: "var(--accent)",
                  opacity: 0.6,
                }}
              >
                {glyphs[i]}
              </div>
              <div
                className="flex items-center gap-[10px] mb-[20px]"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  color: "var(--fg-faint)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  className="w-[7px] h-[7px] rounded-full"
                  style={{
                    background: "var(--green)",
                    boxShadow: "0 0 8px rgba(143,182,123,0.5)",
                  }}
                />
                thread · {String(i + 1).padStart(3, "0")}
              </div>
              <h4
                className="mb-[14px]"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "26px",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                  textWrap: "balance",
                }}
                dangerouslySetInnerHTML={{
                  __html: t.raw(`thoughts.${i}.title`),
                }}
              />
              <p
                style={{
                  color: "var(--fg-dim)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                {t(`thoughts.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
