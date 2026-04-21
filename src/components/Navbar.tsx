"use client"

import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { href: "#work", n: "01", key: "work" },
  { href: "#services", n: "02", key: "services" },
  { href: "#experience", n: "03", key: "experience" },
  { href: "#about", n: "04", key: "about" },
  { href: "#contact", n: "05", key: "contact" },
] as const

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"

export default function Navbar() {
  const t = useTranslations("Navbar")
  const pathname = usePathname()
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("")
  const [hoverBrand, setHoverBrand] = useState(false)

  const currentLocale = pathname.startsWith("/es") ? "es" : "en"

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        id: item.href.slice(1),
        el: document.querySelector(item.href),
      }))
      .filter((s) => s.el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    sections.forEach((s) => s.el && observer.observe(s.el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 34,
        left: 0,
        right: 0,
        zIndex: 49,
        padding: "16px 28px",
        display: "flex",
        alignItems: "center",
        gap: 28,
        background:
          "linear-gradient(to bottom, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0.6) 70%, transparent)",
        willChange: "transform",
        contain: "layout style paint",
      }}
    >
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        onMouseEnter={() => setHoverBrand(true)}
        onMouseLeave={() => setHoverBrand(false)}
        style={{
          fontFamily: mono,
          fontWeight: 600,
          fontSize: 13,
          letterSpacing: "0.02em",
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "var(--fg)",
          textDecoration: "none",
          transition: "opacity 0.15s",
          opacity: hoverBrand ? 0.8 : 1,
        }}
      >
        <span
          style={{
            width: 22,
            height: 22,
            border: "1px solid var(--accent)",
            color: hoverBrand ? "var(--bg)" : "var(--accent)",
            background: hoverBrand ? "var(--accent)" : "transparent",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 0,
            transition: "background 0.15s, color 0.15s",
          }}
        >
          JM
        </span>
        juan murillo
        <span style={{ color: "var(--accent)" }}>_</span>
      </a>

      <ul
        className="responsive-nav-links"
        style={{
          display: "flex",
          listStyle: "none",
          gap: 4,
          marginLeft: 18,
        }}
      >
        {navItems.map((item) => (
          <li key={item.key}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(item.href)
              }}
              style={{
                fontFamily: mono,
                fontSize: 12,
                color:
                  activeSection === item.href
                    ? "var(--accent)"
                    : "var(--fg-dim)",
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: 3,
                transition: "color 0.15s, background 0.15s",
                display: "flex",
                gap: 6,
                alignItems: "baseline",
              }}
            >
              <span style={{ color: "var(--fg-faint)", fontSize: "10.5px" }}>
                {item.n}
              </span>
              {t(item.key)}
            </a>
          </li>
        ))}
      </ul>

      <div
        className="responsive-nav-links"
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            fontFamily: mono,
            fontSize: 11,
            border: "1px solid var(--line-strong)",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => {
              if (currentLocale !== "en") router.push("/en")
            }}
            style={{
              background: currentLocale === "en" ? "var(--fg)" : "transparent",
              border: 0,
              color: currentLocale === "en" ? "var(--bg)" : "var(--fg-dim)",
              padding: "5px 9px",
              fontFamily: "inherit",
              fontSize: "inherit",
              cursor: "pointer",
            }}
          >
            EN
          </button>
          <button
            onClick={() => {
              if (currentLocale !== "es") router.push("/es")
            }}
            style={{
              background: currentLocale === "es" ? "var(--fg)" : "transparent",
              border: 0,
              color: currentLocale === "es" ? "var(--bg)" : "var(--fg-dim)",
              padding: "5px 9px",
              fontFamily: "inherit",
              fontSize: "inherit",
              cursor: "pointer",
            }}
          >
            ES
          </button>
        </div>

        <button
          onClick={() => scrollTo("#contact")}
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            fontFamily: mono,
            fontWeight: 600,
            fontSize: 12,
            padding: "8px 14px",
            border: 0,
            borderRadius: 3,
            cursor: "pointer",
            transition: "transform 0.15s, box-shadow 0.15s",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: "rgba(14,12,10,0.5)" }}>$</span>
          {t("letsTalk")}
        </button>
      </div>
    </nav>
  )
}
