"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const navLinks = [
    { label: t("work"), href: "#work" },
    { label: t("services"), href: "#services" },
    { label: t("experience"), href: "#experience" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  const otherLocale = locale === "en" ? "es" : "en";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md ghost-border border-t-0 border-l-0 border-r-0">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold font-[family-name:var(--font-manrope)]">
          <span className="gradient-text">JM</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-[family-name:var(--font-inter)] text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-1 text-xs font-[family-name:var(--font-inter)]">
            {routing.locales.map((loc) => (
              <a
                key={loc}
                href={`/${loc}`}
                className={`px-2 py-1 rounded transition-colors duration-200 ${
                  loc === locale
                    ? "text-primary font-semibold"
                    : "text-on-surface-variant/50 hover:text-on-surface-variant"
                }`}
              >
                {loc.toUpperCase()}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="gradient-btn text-black text-sm font-semibold font-[family-name:var(--font-inter)] px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            {t("letsTalk")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-on-surface-variant"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-outline-variant/20 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-[family-name:var(--font-inter)] text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 py-1">
            {routing.locales.map((loc) => (
              <a
                key={loc}
                href={`/${loc}`}
                className={`text-xs font-[family-name:var(--font-inter)] px-2 py-1 rounded transition-colors ${
                  loc === locale
                    ? "text-primary font-semibold"
                    : "text-on-surface-variant/50 hover:text-on-surface-variant"
                }`}
              >
                {loc.toUpperCase()}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="block gradient-btn text-black text-sm font-semibold text-center px-5 py-2 rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            {t("letsTalk")}
          </a>
        </div>
      )}
    </nav>
  );
}
