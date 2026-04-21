"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const serviceData = [
  { ascii: "{ }", num: "01 / full-stack" },
  { ascii: "</>", num: "02 / ai & automation" },
  { ascii: "[ ]", num: "03 / leadership" },
];

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services">
      <SectionHeader
        idx="02"
        file="what_i_do.md"
        title={t("heading")}
        lede={t("subheading")}
      />

      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-b border-line">
          {serviceData.map((svc, i) => (
            <div
              key={i}
              className="px-[28px] py-[36px] pb-[44px] relative transition-colors duration-200 hover:bg-accent/[0.03] border-b lg:border-b-0 lg:border-r border-line last:border-r-0 last:border-b-0"
            >
              <div
                className="mb-[20px]"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  color: "var(--accent)",
                  opacity: 0.5,
                  whiteSpace: "pre",
                  lineHeight: 1.1,
                  letterSpacing: 0,
                }}
              >
                {svc.ascii}
              </div>
              <div
                className="flex items-center gap-[10px] mb-[28px]"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  color: "var(--fg-faint)",
                  letterSpacing: "0.06em",
                }}
              >
                <span
                  className="inline-block w-[16px] h-[1px]"
                  style={{ background: "var(--accent)" }}
                />
                {svc.num}
              </div>
              <h3
                className="mb-[16px]"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "32px",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  textWrap: "balance",
                }}
                dangerouslySetInnerHTML={{
                  __html: t.raw(`capabilities.${i}.title`),
                }}
              />
              <p
                style={{
                  color: "var(--fg-dim)",
                  fontSize: "14.5px",
                  lineHeight: 1.65,
                }}
              >
                {t(`capabilities.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
