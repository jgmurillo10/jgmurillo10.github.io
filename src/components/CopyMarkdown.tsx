"use client"

import { useCallback, useState } from "react"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"

/**
 * Walks the live DOM to build a markdown string.
 * Single source of truth — if copy changes in the HTML, the markdown follows.
 */
function buildMarkdown(): string {
  const out: string[] = []
  const nl = () => out.push("")

  const text = (el: Element | null) =>
    el ? el.textContent?.replace(/\s+/g, " ").trim() ?? "" : ""

  const plainInline = (el: Element) => {
    const clone = el.cloneNode(true) as HTMLElement
    clone.querySelectorAll("em, i").forEach((n) => {
      const t = document.createTextNode("*" + n.textContent + "*")
      n.replaceWith(t)
    })
    clone.querySelectorAll("strong, b").forEach((n) => {
      const t = document.createTextNode("**" + n.textContent + "**")
      n.replaceWith(t)
    })
    return clone.textContent?.replace(/\s+/g, " ").trim() ?? ""
  }

  // Hero
  const h1 = document.querySelector("h1")
  if (h1) out.push("# " + text(h1))
  const crumb = document.querySelector("[class*='hero'] [class*='crumb']") ||
    document.querySelector("#top div div:first-child")
  if (crumb) out.push("> " + text(crumb))
  nl()

  // Terminal whoami card
  const termLines = document.querySelectorAll("[aria-hidden='true'] div[style]")
  const termKv: string[] = []
  const termAch: string[] = []
  termLines.forEach((ln) => {
    const t = ln.textContent?.trim() ?? ""
    if (/^(stack|infra|ai|teams)\s*:/.test(t)) {
      const [k, ...rest] = t.split(":")
      if (rest.length) termKv.push(`- **${k.trim()}:** ${rest.join(":").trim()}`)
    } else if (t.startsWith("\u2713")) {
      termAch.push("- " + t)
    }
  })
  if (termKv.length || termAch.length) {
    out.push("## whoami")
    termKv.forEach((l) => out.push(l))
    termAch.forEach((l) => out.push(l))
    nl()
  }

  // Walk each section
  document.querySelectorAll("main > section[id]").forEach((section) => {
    if (section.id === "top") return
    const head = section.querySelector("h2")
    if (!head) return
    out.push("## " + text(head))
    nl()

    // Projects
    section.querySelectorAll("article").forEach((p) => {
      const name = p.querySelector("div[style*='fontSize: 48']") ||
        p.querySelector("div[style*='font-size: 48']")
      const h3 = p.querySelector("h3")
      if (name) out.push("### " + text(name))
      if (h3) out.push("**" + plainInline(h3) + "**")
      nl()

      p.querySelectorAll("p").forEach((para) => {
        out.push(text(para))
        nl()
      })
      out.push("---")
      nl()
    })

    // Services
    section.querySelectorAll("div > div > h3").forEach((h3) => {
      if (h3.closest("article")) return
      out.push("### " + plainInline(h3))
      const p = h3.nextElementSibling
      if (p && p.tagName === "P") out.push(text(p))
      nl()
    })

    // Experience rows
    section.querySelectorAll("h4").forEach((h4) => {
      const row = h4.closest("div[style]")
      if (!row) return
      const role = row.querySelector("div[style*='fontSize: 12']") ||
        row.querySelector("div[style*='font-size: 12']")
      out.push("### " + text(h4))
      if (role) out.push("_" + text(role) + "_")
      nl()
    })

    // About paragraphs
    section.querySelectorAll("p[style*='Instrument Serif'], p[style*='serif']").forEach((p) => {
      out.push(plainInline(p))
      nl()
    })

    // Contact
    if (section.id === "contact") {
      const email = section.querySelector("a[href^='mailto']")
      if (email) out.push("\u2709 **Email:** juanchomurcas@gmail.com")
      nl()
    }
  })

  // Footer
  const footer = document.querySelector("footer")
  if (footer) {
    out.push("---")
    out.push("_" + text(footer) + "_")
  }

  return out
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim() + "\n"
}

export default function CopyMarkdown() {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    const md = buildMarkdown()
    try {
      await navigator.clipboard.writeText(md)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = md
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      ta.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <button
      onClick={handleCopy}
      title="Copy this page as Markdown"
      style={{
        position: "fixed",
        left: 20,
        bottom: 20,
        zIndex: 900,
        background: "var(--bg-2)",
        border: `1px solid ${copied ? "var(--green)" : "var(--line-strong)"}`,
        borderRadius: 999,
        color: copied ? "var(--green)" : "var(--fg)",
        fontFamily: mono,
        fontSize: 12,
        padding: "10px 16px",
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        transition: "transform 0.15s, border-color 0.15s, color 0.15s",
      }}
    >
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: 3,
          background: copied ? "var(--green)" : "var(--accent)",
          color: "var(--bg)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          fontWeight: 700,
        }}
      >
        {copied ? "\u2713" : "MD"}
      </span>
      {copied ? "copied" : "copy as markdown"}
    </button>
  )
}
