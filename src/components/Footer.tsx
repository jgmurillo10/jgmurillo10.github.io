"use client"

import { useTranslations } from "next-intl"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "20px 28px",
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
        flexWrap: "wrap",
        fontFamily: mono,
        fontSize: "11.5px",
        color: "var(--fg-faint)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            width: 6,
            height: 6,
            background: "var(--green)",
            borderRadius: "50%",
          }}
        />
        {t("basedIn")}
      </div>
      <div>{t("copyright")}</div>
    </footer>
  )
}
