"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useTranslations } from "next-intl"

const mono = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"

interface Command {
  group: string
  label: string
  hint: string
  icon: string
  accent?: string
  action: () => void
}

export default function CommandPalette() {
  const t = useTranslations("CommandPalette")
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [sel, setSel] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const keyboardLock = useRef(false)
  const lockTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)
  const dialogRef = useRef<HTMLDivElement>(null)

  const jump = useCallback((id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  const copyEmail = useCallback(() => {
    navigator.clipboard?.writeText("juanchomurcas@gmail.com")
  }, [])

  const bumpCoffee = useCallback(() => {
    window.dispatchEvent(new CustomEvent("bump-coffee"))
  }, [])

  // Memoize commands so they aren't rebuilt every render
  const commands: Command[] = useMemo(
    () => [
      { group: t("groupNav"), label: t("goToTop"), hint: "home", icon: "\u2191", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
      { group: t("groupNav"), label: t("goToWork"), hint: "01", icon: "01", action: () => jump("#work") },
      { group: t("groupNav"), label: t("goToServices"), hint: "02", icon: "02", action: () => jump("#services") },
      { group: t("groupNav"), label: t("goToExperience"), hint: "03", icon: "03", action: () => jump("#experience") },
      { group: t("groupNav"), label: t("goToNow"), hint: "04", icon: "04", action: () => jump("#now") },
      { group: t("groupNav"), label: t("goToAbout"), hint: "05", icon: "05", action: () => jump("#about") },
      { group: t("groupNav"), label: t("goToContact"), hint: "06", icon: "06", action: () => jump("#contact") },
      { group: t("groupActions"), label: t("copyMarkdown"), hint: "\u2318\u21e7C", icon: "MD", action: () => document.querySelector<HTMLButtonElement>("[title='Copy this page as Markdown']")?.click() },
      { group: t("groupActions"), label: t("copyEmail"), hint: "copy", icon: "@", action: copyEmail },
      { group: t("groupActions"), label: t("openLinkedIn"), hint: "external", icon: "in", action: () => window.open("https://linkedin.com/in/juan-murillo", "_blank") },
      { group: t("groupActions"), label: t("openGitHub"), hint: "external", icon: "{ }", action: () => window.open("https://github.com/jgmurillo10", "_blank") },
      { group: t("groupActions"), label: t("sendEmail"), hint: "mailto", icon: "\u2709", action: () => { window.location.href = "mailto:juanchomurcas@gmail.com" } },
      { group: t("groupActions"), label: t("viewCV"), hint: "pdf", icon: "\u2193", action: () => window.open("https://drive.google.com/file/d/1O-TsAG3UZaLjudiIri6yREADs8PftpP0/view?usp=sharing", "_blank") },
      { group: t("groupFun"), label: t("pourCoffee"), hint: "+1", icon: "\u2615", action: bumpCoffee },
    ],
    [t, jump, copyEmail, bumpCoffee]
  )

  const filtered = useMemo(() => {
    if (!query) return commands
    const q = query.toLowerCase()
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q) ||
        c.hint.toLowerCase().includes(q)
    )
  }, [commands, query])

  const doOpen = useCallback(() => {
    setOpen(true)
    setQuery("")
    setSel(0)
    setTimeout(() => inputRef.current?.focus(), 20)
  }, [])

  const doClose = useCallback(() => setOpen(false), [])

  const execute = useCallback(
    (i: number) => {
      const c = filtered[i]
      if (!c) return
      c.action()
      doClose()
    },
    [filtered, doClose]
  )

  // Open/close with Cmd+K or /
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        open ? doClose() : doOpen()
      } else if (
        e.key === "/" &&
        !open &&
        !/input|textarea/i.test(document.activeElement?.tagName || "")
      ) {
        e.preventDefault()
        doOpen()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, doOpen, doClose])

  // Listen for custom event from StatusBar
  useEffect(() => {
    const handler = () => doOpen()
    window.addEventListener("open-cmdk", handler)
    return () => window.removeEventListener("open-cmdk", handler)
  }, [doOpen])

  // Reset selection when query changes
  useEffect(() => {
    setSel(0)
  }, [query])

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return
    const active = listRef.current.querySelector("[data-sel='true']")
    if (active) (active as HTMLElement).scrollIntoView({ block: "nearest" })
  }, [sel])

  const lockKeyboard = () => {
    keyboardLock.current = true
    clearTimeout(lockTimeout.current)
    lockTimeout.current = setTimeout(() => {
      keyboardLock.current = false
    }, 400)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSel((s) => (s + 1) % filtered.length)
      lockKeyboard()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSel((s) => (s - 1 + filtered.length) % filtered.length)
      lockKeyboard()
    } else if (e.key === "Enter") {
      e.preventDefault()
      execute(sel)
    } else if (e.key === "Escape") {
      e.preventDefault()
      doClose()
    }
  }

  // Click-outside: close if click lands anywhere outside the dialog box
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(e.target as Node)
      ) {
        doClose()
      }
    },
    [doClose]
  )

  if (!open) return null

  let lastGroup = ""

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(8, 6, 4, 0.6)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "14vh",
        animation: "cmdkFade 0.15s ease",
      }}
    >
      {/* keyframes now live in globals.css — no <style> tag per render */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-label="Command palette"
        style={{
          width: "min(560px, calc(100vw - 40px))",
          background: "var(--bg-2)",
          border: "1px solid var(--line-strong)",
          borderRadius: 8,
          overflow: "hidden",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,162,83,0.05)",
          fontFamily: mono,
          animation: "cmdkPop 0.18s cubic-bezier(0.2,0.8,0.2,1)",
        }}
      >
        {/* Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 16px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <span style={{ color: "var(--accent)", fontSize: 14 }}>
            {"\u276F"}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("placeholder")}
            autoComplete="off"
            spellCheck={false}
            style={{
              flex: 1,
              background: "transparent",
              border: 0,
              outline: 0,
              color: "var(--fg)",
              fontFamily: mono,
              fontSize: 14,
              caretColor: "var(--accent)",
            }}
          />
          <span
            style={{
              fontFamily: mono,
              fontSize: "10.5px",
              color: "var(--fg-faint)",
              border: "1px solid var(--line-strong)",
              padding: "2px 7px",
              borderRadius: 3,
            }}
          >
            esc
          </span>
        </div>

        {/* List */}
        <div
          ref={listRef}
          style={{ maxHeight: "50vh", overflowY: "auto", padding: "6px 0" }}
        >
          {filtered.length === 0 ? (
            <div
              style={{
                padding: "22px 16px",
                fontSize: 13,
                color: "var(--fg-faint)",
                textAlign: "center",
              }}
            >
              {t("noMatches")}
            </div>
          ) : (
            filtered.map((cmd, i) => {
              const showGroup = cmd.group !== lastGroup
              lastGroup = cmd.group
              return (
                <div key={cmd.label + i}>
                  {showGroup && (
                    <div
                      style={{
                        fontSize: 10,
                        color: "var(--fg-faint)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "10px 16px 6px",
                      }}
                    >
                      {cmd.group}
                    </div>
                  )}
                  <div
                    data-sel={i === sel ? "true" : "false"}
                    onClick={() => execute(i)}
                    onMouseMove={() => {
                      if (keyboardLock.current) return
                      if (i !== sel) setSel(i)
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 16px",
                      cursor: "pointer",
                      color: i === sel ? "var(--fg)" : "var(--fg-dim)",
                      fontSize: 13,
                      borderLeft: `2px solid ${i === sel ? "var(--accent)" : "transparent"}`,
                      background:
                        i === sel ? "rgba(232,162,83,0.08)" : "transparent",
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 3,
                        background:
                          cmd.accent
                            ? cmd.accent
                            : i === sel
                            ? "var(--accent)"
                            : "var(--bg-3)",
                        color:
                          cmd.accent || i === sel
                            ? "var(--bg)"
                            : "var(--accent)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        flexShrink: 0,
                      }}
                    >
                      {cmd.icon}
                    </span>
                    <span style={{ color: "var(--fg)" }}>
                      {cmd.label}
                    </span>
                    <span
                      style={{
                        color: "var(--fg-faint)",
                        marginLeft: "auto",
                        fontSize: 11,
                      }}
                    >
                      {cmd.hint}
                    </span>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "10px 16px",
            borderTop: "1px solid var(--line)",
            fontSize: "10.5px",
            color: "var(--fg-faint)",
          }}
        >
          <span>
            <span
              style={{
                border: "1px solid var(--line-strong)",
                padding: "1px 6px",
                borderRadius: 2,
                marginRight: 5,
                color: "var(--fg-dim)",
              }}
            >
              {"\u2191\u2193"}
            </span>
            {t("footerNav")}
          </span>
          <span>
            <span
              style={{
                border: "1px solid var(--line-strong)",
                padding: "1px 6px",
                borderRadius: 2,
                marginRight: 5,
                color: "var(--fg-dim)",
              }}
            >
              {"\u21B5"}
            </span>
            {t("footerSelect")}
          </span>
          <span>
            <span
              style={{
                border: "1px solid var(--line-strong)",
                padding: "1px 6px",
                borderRadius: 2,
                marginRight: 5,
                color: "var(--fg-dim)",
              }}
            >
              esc
            </span>
            {t("footerClose")}
          </span>
          <span style={{ marginLeft: "auto", color: "var(--accent)" }}>
            juan murillo &middot; {"\u2318"}K
          </span>
        </div>
      </div>
    </div>
  )
}
