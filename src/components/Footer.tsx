"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer
      className="border-t border-line"
      style={{
        padding: "20px 28px",
        fontFamily: "var(--mono)",
        fontSize: "11.5px",
        color: "var(--fg-faint)",
      }}
    >
      <div className="wrap flex justify-between gap-5 flex-wrap" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <div className="flex items-center gap-2">
        <span
          className="w-[6px] h-[6px] rounded-full"
          style={{ background: "var(--green)" }}
        />
        {t("location")}
      </div>
      <div>
        &copy; {new Date().getFullYear()} {t("copyright")}
      </div>
      </div>
    </footer>
  );
}
