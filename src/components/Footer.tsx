"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer
      className="border-t border-line flex justify-between gap-[20px] flex-wrap"
      style={{
        padding: "20px 28px",
        fontFamily: "var(--mono)",
        fontSize: "11.5px",
        color: "var(--fg-faint)",
      }}
    >
      <div className="flex items-center gap-[8px]">
        <span
          className="w-[6px] h-[6px] rounded-full"
          style={{ background: "var(--green)" }}
        />
        {t("location")}
      </div>
      <div>
        &copy; {new Date().getFullYear()} {t("copyright")}
      </div>
    </footer>
  );
}
