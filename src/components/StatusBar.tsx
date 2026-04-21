"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"

export default function StatusBar() {
  const t = useTranslations("StatusBar")
  const [uptime, setUptime] = useState("00:00:00")
  const [cups, setCups] = useState(2)
  const [coffeeFlash, setCoffeeFlash] = useState(false)

  useEffect(() => {
    const start = Date.now() - (7 * 3600 + 23 * 60) * 1000
    const tick = () => {
      const s = Math.floor((Date.now() - start) / 1000)
      const h = String(Math.floor(s / 3600)).padStart(2, "0")
      const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0")
      const ss = String(s % 60).padStart(2, "0")
      setUptime(`${h}:${m}:${ss}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() > 0.85) {
        setCups((n) => Math.min(n + 1, 9))
        window.dispatchEvent(new CustomEvent("coffee-changed"))
      }
    }, 9000)
    return () => clearInterval(id)
  }, [])

  const flashCoffee = () => {
    setCoffeeFlash(true)
    setTimeout(() => setCoffeeFlash(false), 600)
  }

  useEffect(() => {
    const handler = () => {
      setCups((n) => Math.min(n + 1, 12))
      flashCoffee()
      window.dispatchEvent(new CustomEvent("coffee-changed"))
    }
    window.addEventListener("bump-coffee", handler)
    return () => window.removeEventListener("bump-coffee", handler)
  }, [])

  const sep = <span className="statusbar-verbose" style={{ color: "var(--fg-faint)", alignItems: "center" }}>{"\u2502"}</span>

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 34,
        background: "rgba(var(--bg-rgb), 0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--line)",
        willChange: "transform",
        contain: "layout style paint",
        display: "flex",
        alignItems: "center",
        padding: "0 18px",
        fontFamily: mono,
        fontSize: "11.5px",
        color: "var(--fg-dim)",
        letterSpacing: "0.01em",
        gap: 18,
      }}
    >
      {/* Always visible: green dot + deployed */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "inline-block",
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--green)",
            marginRight: 6,
            boxShadow: "0 0 6px rgba(143, 182, 123, 0.6)",
            animation: "pulse 2.4s ease-in-out infinite",
          }}
        />
        {t("deployed")}
      </div>

      {/* Desktop-only verbose segments */}
      {sep}
      <div className="statusbar-verbose" style={{ alignItems: "center" }}>
        <span style={{ color: "var(--fg-faint)" }}>branch</span>&nbsp;
        <span style={{ color: "var(--fg)" }}>main</span>
      </div>
      {sep}
      <div className="statusbar-verbose" style={{ alignItems: "center" }}>
        <span style={{ color: "var(--fg-faint)" }}>uptime</span>&nbsp;
        <span style={{ color: "var(--fg)" }}>{uptime}</span>
      </div>
      {sep}
      <div className="statusbar-verbose" style={{ alignItems: "center" }}>
        <span style={{ color: "var(--fg-faint)" }}>loc</span>&nbsp;
        <span style={{ color: "var(--fg)" }}>{t("location")}</span>
      </div>

      {/* Right side */}
      <div style={{ marginLeft: "auto", display: "flex", gap: 18, alignItems: "center" }}>
        {/* Coffee — always visible */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "var(--fg-faint)" }}>coffee</span>&nbsp;
          <span
            style={{
              color: coffeeFlash ? "var(--accent)" : "var(--fg)",
              transition: "color 0.3s",
            }}
          >
            {cups} cups
          </span>
        </div>

        {/* Desktop-only: status + cmd+k */}
        <div className="statusbar-verbose" style={{ alignItems: "center" }}>
          <span style={{ color: "var(--fg-faint)" }}>status</span>&nbsp;
          <span style={{ color: "var(--green)" }}>{t("status")}</span>
        </div>
        <span className="statusbar-verbose" style={{ color: "var(--fg-faint)", alignItems: "center" }}>{"\u2502"}</span>
        <div className="statusbar-verbose" style={{ alignItems: "center" }}>
          <span style={{ color: "var(--fg-faint)" }}>press</span>&nbsp;
          <kbd
            style={{
              fontFamily: "inherit",
              background: "var(--bg-3)",
              border: "1px solid var(--line-strong)",
              padding: "1px 6px",
              borderRadius: 2,
              color: "var(--fg)",
              cursor: "pointer",
            }}
            onClick={() => window.dispatchEvent(new CustomEvent("open-cmdk"))}
          >
            {"\u2318"}K
          </kbd>
        </div>

        {/* Mobile-only: hamburger menu */}
        <button
          className="statusbar-mobile-menu"
          onClick={() => window.dispatchEvent(new CustomEvent("toggle-mobile-nav"))}
          style={{
            background: "transparent",
            border: 0,
            color: "var(--fg)",
            fontFamily: mono,
            fontSize: 16,
            cursor: "pointer",
            padding: "2px 0",
            alignItems: "center",
          }}
          aria-label="Open menu"
        >
          {"\u2261"}
        </button>
      </div>
    </div>
  )
}
