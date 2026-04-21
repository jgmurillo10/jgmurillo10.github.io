"use client"

import { useCallback, useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"

const navItems = [
  { href: "#work", n: "01", key: "work" },
  { href: "#services", n: "02", key: "services" },
  { href: "#experience", n: "03", key: "experience" },
  { href: "#about", n: "04", key: "about" },
  { href: "#contact", n: "05", key: "contact" },
] as const

export default function MobileNav() {
  const t = useTranslations("Navbar")
  const tStatus = useTranslations("StatusBar")
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const currentLocale = pathname.startsWith("/es") ? "es" : "en"

  useEffect(() => {
    const handler = () => setOpen((o) => !o)
    window.addEventListener("toggle-mobile-nav", handler)
    return () => window.removeEventListener("toggle-mobile-nav", handler)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  const scrollTo = useCallback(
    (id: string) => {
      close()
      setTimeout(() => {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    },
    [close]
  )

  if (!open) return null

  return (
    <div
      className="mobile-drawer-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(8, 6, 4, 0.7)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        flexDirection: "column",
        alignItems: "flex-end",
        paddingTop: 34,
        animation: "cmdkFade 0.15s ease",
      }}
    >
      <div
        style={{
          width: "min(320px, 85vw)",
          height: "100%",
          background: "var(--bg-2)",
          borderLeft: "1px solid var(--line-strong)",
          display: "flex",
          flexDirection: "column",
          fontFamily: mono,
          overflowY: "auto",
          animation: "slideIn 0.2s ease",
        }}
      >
        <style>{`@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }`}</style>

        {/* Header */}
        <div
          style={{
            padding: "16px 20px",
            borderBottom: "1px solid var(--line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 12, color: "var(--fg-dim)" }}>
            <span
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--green)",
                marginRight: 8,
                boxShadow: "0 0 6px rgba(143, 182, 123, 0.6)",
              }}
            />
            {tStatus("status")}
          </span>
          <button
            onClick={close}
            style={{
              background: "transparent",
              border: 0,
              color: "var(--fg-faint)",
              fontFamily: mono,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            {"\u00d7"}
          </button>
        </div>

        {/* Nav links */}
        <div style={{ padding: "8px 0" }}>
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.href)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                width: "100%",
                padding: "14px 20px",
                background: "transparent",
                border: 0,
                borderBottom: "1px solid var(--line)",
                color: "var(--fg)",
                fontFamily: mono,
                fontSize: 13,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ color: "var(--accent)", fontSize: 11 }}>
                {item.n}
              </span>
              {t(item.key)}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div style={{ padding: "12px 20px", borderTop: "1px solid var(--line)" }}>
          <div
            style={{
              fontSize: 10,
              color: "var(--fg-faint)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            actions
          </div>

          {/* Command palette */}
          <button
            onClick={() => {
              close()
              setTimeout(() => window.dispatchEvent(new CustomEvent("open-cmdk")), 150)
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "12px 0",
              background: "transparent",
              border: 0,
              borderBottom: "1px solid var(--line)",
              color: "var(--fg)",
              fontFamily: mono,
              fontSize: 12,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: 3,
                background: "var(--accent)",
                color: "var(--bg)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
              }}
            >
              {"\u276F"}
            </span>
            Command palette
          </button>

          {/* Let's talk */}
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "12px 0",
              background: "transparent",
              border: 0,
              borderBottom: "1px solid var(--line)",
              color: "var(--accent)",
              fontFamily: mono,
              fontSize: 12,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span style={{ color: "var(--fg-faint)" }}>$</span>
            {t("letsTalk")}
          </button>
        </div>

        {/* Language toggle */}
        <div
          style={{
            padding: "12px 20px",
            display: "flex",
            gap: 8,
            marginTop: "auto",
            borderTop: "1px solid var(--line)",
          }}
        >
          <button
            onClick={() => {
              if (currentLocale !== "en") {
                close()
                router.push("/en")
              }
            }}
            style={{
              flex: 1,
              padding: "10px 0",
              background: currentLocale === "en" ? "var(--fg)" : "transparent",
              border: `1px solid ${currentLocale === "en" ? "var(--fg)" : "var(--line-strong)"}`,
              borderRadius: 3,
              color: currentLocale === "en" ? "var(--bg)" : "var(--fg-dim)",
              fontFamily: mono,
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            EN
          </button>
          <button
            onClick={() => {
              if (currentLocale !== "es") {
                close()
                router.push("/es")
              }
            }}
            style={{
              flex: 1,
              padding: "10px 0",
              background: currentLocale === "es" ? "var(--fg)" : "transparent",
              border: `1px solid ${currentLocale === "es" ? "var(--fg)" : "var(--line-strong)"}`,
              borderRadius: 3,
              color: currentLocale === "es" ? "var(--bg)" : "var(--fg-dim)",
              fontFamily: mono,
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            ES
          </button>
        </div>
      </div>
    </div>
  )
}
