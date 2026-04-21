"use client";

import { useTranslations, useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const navLinks = [
    { label: t("work"), href: "#work", n: "01" },
    { label: t("services"), href: "#services", n: "02" },
    { label: t("experience"), href: "#experience", n: "03" },
    { label: t("about"), href: "#about", n: "04" },
    { label: t("contact"), href: "#contact", n: "05" },
  ];

  return (
    <nav
      className="fixed top-[34px] left-0 right-0 z-[49] px-[28px] py-[16px] flex items-center gap-[28px]"
      style={{
        background: `linear-gradient(to bottom, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0.6) 70%, transparent)`,
      }}
    >
      <a
        href="#top"
        className="flex items-center gap-[10px] no-underline transition-opacity duration-150 hover:opacity-80 group"
        style={{
          fontFamily: "var(--mono)",
          fontWeight: 600,
          fontSize: "13px",
          letterSpacing: "0.02em",
          color: "var(--fg)",
        }}
        aria-label="Back to top"
      >
        <span
          className="w-[22px] h-[22px] border inline-flex items-center justify-center group-hover:text-bg"
          style={{
            borderColor: "var(--accent)",
            color: "var(--accent)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: 0,
            transition: "background 0.15s, color 0.15s",
          }}
        >
          JM
        </span>
        <span>
          juan murillo<span style={{ color: "var(--accent)" }}>_</span>
        </span>
      </a>

      <ul className="hidden lg:flex list-none gap-1 ml-[18px]">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="flex items-baseline gap-[6px] px-[10px] py-[6px] rounded-[3px] no-underline transition-colors duration-150 hover:bg-bg-3"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                color: "var(--fg-dim)",
              }}
            >
              <span
                style={{
                  color: "var(--fg-faint)",
                  fontSize: "10.5px",
                }}
              >
                {link.n}
              </span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="ml-auto flex items-center gap-[10px]">
        <div
          className="inline-flex border rounded-[3px] overflow-hidden"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            borderColor: "var(--line-strong)",
          }}
        >
          {routing.locales.map((loc) => (
            <a
              key={loc}
              href={`/${loc}`}
              className="border-0 px-[9px] py-[5px] cursor-pointer no-underline"
              style={{
                fontFamily: "inherit",
                fontSize: "inherit",
                background:
                  loc === locale ? "var(--fg)" : "transparent",
                color:
                  loc === locale ? "var(--bg)" : "var(--fg-dim)",
              }}
            >
              {loc.toUpperCase()}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-[8px] rounded-[3px] border-0 cursor-pointer no-underline transition-transform duration-150 hover:-translate-y-px"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            fontFamily: "var(--mono)",
            fontWeight: 600,
            fontSize: "12px",
            padding: "8px 14px",
            boxShadow: "none",
          }}
        >
          <span style={{ color: "rgba(14,12,10,0.5)" }}>$</span>
          {t("letsTalk")}
        </a>
      </div>
    </nav>
  );
}
