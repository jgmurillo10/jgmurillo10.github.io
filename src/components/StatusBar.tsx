"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

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
      }
    }, 9000)
    return () => clearInterval(id)
  }, [])

  const flashCoffee = () => {
    setCoffeeFlash(true)
    setTimeout(() => setCoffeeFlash(false), 600)
  }

  // Listen for "pour another coffee" from command palette
  useEffect(() => {
    const handler = () => {
      setCups((n) => Math.min(n + 1, 12))
      flashCoffee()
    }
    window.addEventListener("bump-coffee", handler)
    return () => window.removeEventListener("bump-coffee", handler)
  }, [])

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
        display: "flex",
        alignItems: "center",
        padding: "0 18px",
        fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
        fontSize: "11.5px",
        color: "var(--fg-dim)",
        letterSpacing: "0.01em",
        gap: 18,
      }}
    >
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
      <span style={{ color: "var(--fg-faint)" }}>{"\u2502"}</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: "var(--fg-faint)" }}>branch</span>&nbsp;
        <span style={{ color: "var(--fg)" }}>main</span>
      </div>
      <span style={{ color: "var(--fg-faint)" }}>{"\u2502"}</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: "var(--fg-faint)" }}>uptime</span>&nbsp;
        <span style={{ color: "var(--fg)" }}>{uptime}</span>
      </div>
      <span style={{ color: "var(--fg-faint)" }}>{"\u2502"}</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: "var(--fg-faint)" }}>loc</span>&nbsp;
        <span style={{ color: "var(--fg)" }}>{t("location")}</span>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 18 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "var(--fg-faint)" }}>coffee</span>&nbsp;
          <span style={{ color: coffeeFlash ? "var(--accent)" : "var(--fg)", transition: "color 0.3s" }}>{cups} cups</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "var(--fg-faint)" }}>status</span>&nbsp;
          <span style={{ color: "var(--green)" }}>{t("status")}</span>
        </div>
        <span style={{ color: "var(--fg-faint)" }}>{"\u2502"}</span>
        <div style={{ display: "flex", alignItems: "center" }}>
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
            onClick={() => {
              window.dispatchEvent(new CustomEvent("open-cmdk"))
            }}
          >
            {"\u2318"}K
          </kbd>
        </div>
      </div>
    </div>
  )
}
