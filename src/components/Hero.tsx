"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"
const serif = "'Instrument Serif', 'Times New Roman', serif"

export default function Hero() {
  const t = useTranslations("Hero")
  const [typedText, setTypedText] = useState("")
  const coffeeRef = useRef(2)

  // Sync coffee count from StatusBar
  useEffect(() => {
    const handler = () => {
      coffeeRef.current = Math.min(coffeeRef.current + 1, 12)
    }
    window.addEventListener("coffee-changed", handler)
    return () => window.removeEventListener("coffee-changed", handler)
  }, [])

  useEffect(() => {
    // Build items dynamically so the coffee line reads the live count
    const getItems = () => [
      t("typingItems.0"),
      t("typingItems.1"),
      t("typingItems.2"),
      t("typingItems.3").replace("{n}", String(coffeeRef.current)),
      t("typingItems.4"),
    ]

    let idx = 0
    let charIdx = 0
    let dir: 1 | -1 = 1
    let timeout: ReturnType<typeof setTimeout>
    let items = getItems()

    // Start with the first item fully typed
    setTypedText(items[0])
    charIdx = items[0].length
    dir = -1

    const tick = () => {
      const full = items[idx]
      if (dir === 1) {
        charIdx++
        setTypedText(full.slice(0, charIdx))
        if (charIdx >= full.length) {
          dir = -1
          timeout = setTimeout(tick, 2200)
          return
        }
      } else {
        charIdx--
        setTypedText(full.slice(0, charIdx))
        if (charIdx <= 0) {
          dir = 1
          idx = (idx + 1) % items.length
          // Refresh items so coffee count is up to date for the next cycle
          items = getItems()
        }
      }
      timeout = setTimeout(tick, dir === 1 ? 55 : 28)
    }

    timeout = setTimeout(tick, 2200)
    return () => clearTimeout(timeout)
  }, [t])

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section
      id="top"
      className="responsive-hero"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 90px)",
        padding: "48px 28px 64px",
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        gap: 48,
        alignItems: "end",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* Left */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 12,
            color: "var(--fg-faint)",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              border: "1px solid var(--line-strong)",
              padding: "3px 8px",
              borderRadius: 3,
              color: "var(--fg-dim)",
            }}
          >
            <span style={{ color: "var(--green)" }}>{"\u25CF"}</span>{" "}
            {t("statusTag")}
          </span>
          <span>/</span>
          <span>{t("roleTag")}</span>
        </div>

        <h1
          style={{
            fontFamily: serif,
            fontWeight: 400,
            fontSize: "clamp(48px, 7.4vw, 112px)",
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            maxWidth: "18ch",
          }}
        >
          {t("line1")}{" "}
          <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
            {t("firstName")}
          </span>
          .<br />
          {t("line2")}{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            {t("underlined")}
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "0.08em",
                height: "0.06em",
                background: "var(--accent)",
                opacity: 0.5,
              }}
            />
          </span>
          <br />
          {t("line3")}{" "}
          <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
            {t("coffeeWord")}
          </span>
          .
        </h1>

        <div
          style={{
            marginTop: 36,
            fontFamily: mono,
            fontSize: 14,
            color: "var(--fg-dim)",
            maxWidth: "52ch",
            lineHeight: 1.7,
          }}
        >
          <div>
            <span style={{ color: "var(--accent)", marginRight: 8 }}>
              {"\u276F"}
            </span>
            <span style={{ color: "var(--blue)" }}>const</span>{" "}
            <span style={{ color: "var(--fg)" }}>engineer</span> = {"{"}
          </div>
          <div>
            &nbsp;&nbsp;based_in:{" "}
            <span style={{ color: "var(--green)" }}>
              &apos;{t("basedIn")}&apos;
            </span>
            ,
          </div>
          <div>
            &nbsp;&nbsp;obsessions: [
            <span style={{ color: "var(--green)" }}>&apos;AI&apos;</span>,{" "}
            <span style={{ color: "var(--green)" }}>
              &apos;complex problems&apos;
            </span>
            , <span style={{ color: "var(--green)" }}>&apos;coffee&apos;</span>
            ],
          </div>
          <div>
            &nbsp;&nbsp;currently:{" "}
            <span style={{ color: "var(--green)" }}>
              &apos;{typedText}&apos;
            </span>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 16,
                background: "var(--accent)",
                verticalAlign: "text-bottom",
                marginLeft: 2,
                animation: "blink 1s steps(1) infinite",
              }}
            />
          </div>
          <div>{"}"}</div>
        </div>

        <div
          style={{
            marginTop: 42,
            display: "flex",
            gap: 14,
            alignItems: "center",
          }}
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault()
              scrollTo("#work")
            }}
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              border: 0,
              fontFamily: mono,
              fontSize: 12,
              fontWeight: 600,
              padding: "11px 18px",
              borderRadius: 3,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "transform 0.15s",
            }}
          >
            {t("ctaWork")} <span>{"\u2192"}</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollTo("#contact")
            }}
            style={{
              background: "transparent",
              border: "1px solid var(--line-strong)",
              color: "var(--fg)",
              fontFamily: mono,
              fontSize: 12,
              padding: "11px 18px",
              borderRadius: 3,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition:
                "border-color 0.15s, background 0.15s, transform 0.15s",
            }}
          >
            {t("ctaHello")} <span>{"\u2197"}</span>
          </a>
        </div>
      </div>

      {/* Terminal card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "var(--bg-2)",
          border: "1px solid var(--line-strong)",
          borderRadius: 6,
          overflow: "hidden",
          fontFamily: mono,
          fontSize: "12.5px",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(232, 162, 83, 0.03)",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            borderBottom: "1px solid var(--line)",
            background: "rgba(255,255,255,0.015)",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E5564E" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0B13F" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#5EC37A" }} />
          <span style={{ marginLeft: "auto", color: "var(--fg-faint)", fontSize: 11 }}>
            ~/juan &middot; whoami
          </span>
        </div>
        <div style={{ padding: "18px 16px 20px" }}>
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--accent)", marginRight: 8 }}>{"\u276F"}</span>
            whoami --verbose
          </div>
          <div style={{ color: "var(--fg-faint)", lineHeight: 1.75 }}>
            # {t("termTitle")}
          </div>
          <hr style={{ border: 0, borderTop: "1px dashed var(--line)", margin: "10px 0" }} />
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--blue)" }}>stack</span>:{"   "}
            <span style={{ color: "var(--fg)" }}>react &middot; node &middot; python &middot; go</span>
          </div>
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--blue)" }}>infra</span>:{"   "}
            <span style={{ color: "var(--fg)" }}>aws &middot; gcp &middot; temporal &middot; docker</span>
          </div>
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--blue)" }}>ai</span>:{"      "}
            <span style={{ color: "var(--fg)" }}>pytorch &middot; grpo &middot; llm agents</span>
          </div>
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--blue)" }}>teams</span>:{"  "}
            <span style={{ color: "var(--fg)" }}>{t("termTeams")}</span>
          </div>
          <hr style={{ border: 0, borderTop: "1px dashed var(--line)", margin: "10px 0" }} />
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--accent)", marginRight: 8 }}>{"\u276F"}</span>
            cat achievements.md | tail -3
          </div>
          <div style={{ color: "var(--green)", lineHeight: 1.75 }}>{"\u2713"} {t("achievement1")}</div>
          <div style={{ color: "var(--green)", lineHeight: 1.75 }}>{"\u2713"} {t("achievement2")}</div>
          <div style={{ color: "var(--green)", lineHeight: 1.75 }}>{"\u2713"} {t("achievement3")}</div>
          <hr style={{ border: 0, borderTop: "1px dashed var(--line)", margin: "10px 0" }} />
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--accent)", marginRight: 8 }}>{"\u276F"}</span>
            <span className="blink">_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
