"use client";

import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  idx: string;
  file: string;
  title: string;
  lede?: string;
}

export default function SectionHeader({
  idx,
  file,
  title,
  lede,
}: SectionHeaderProps) {
  return (
    <FadeIn>
      <div
        className="border-t border-line flex items-baseline gap-[24px] flex-wrap"
        style={{ padding: "56px 28px 24px" }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            color: "var(--fg-faint)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          // {idx}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            color: "var(--fg-faint)",
            fontSize: "12px",
          }}
        >
          ─────────
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "13px",
            color: "var(--fg-dim)",
            letterSpacing: "0.04em",
          }}
        >
          {file}
        </span>
        <h2
          className="w-full mt-[8px]"
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(36px, 5vw, 60px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            textWrap: "balance",
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {lede && (
          <p
            className="w-full max-w-[640px] mt-[10px]"
            style={{
              color: "var(--fg-dim)",
              fontSize: "15.5px",
              lineHeight: 1.6,
            }}
          >
            {lede}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
