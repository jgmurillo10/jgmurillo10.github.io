"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface Command {
  group: string;
  label: string;
  hint: string;
  icon: string;
  accent?: string;
  action: () => void;
}

export default function CommandPalette() {
  const t = useTranslations("CommandPalette");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const keyboardLockRef = useRef(false);
  const keyboardLockTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const jump = useCallback((id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const commands: Command[] = [
    {
      group: t("navigate"),
      label: t("goToTop"),
      hint: "home",
      icon: "↑",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      group: t("navigate"),
      label: t("goToWork"),
      hint: "01",
      icon: "01",
      action: () => jump("#work"),
    },
    {
      group: t("navigate"),
      label: t("goToServices"),
      hint: "02",
      icon: "02",
      action: () => jump("#services"),
    },
    {
      group: t("navigate"),
      label: t("goToExperience"),
      hint: "03",
      icon: "03",
      action: () => jump("#experience"),
    },
    {
      group: t("navigate"),
      label: t("goToNow"),
      hint: "04",
      icon: "04",
      action: () => jump("#now"),
    },
    {
      group: t("navigate"),
      label: t("goToAbout"),
      hint: "05",
      icon: "05",
      action: () => jump("#about"),
    },
    {
      group: t("navigate"),
      label: t("goToContact"),
      hint: "06",
      icon: "06",
      action: () => jump("#contact"),
    },
    {
      group: t("actions"),
      label: t("copyEmail"),
      hint: "copy",
      icon: "@",
      action: () => {
        navigator.clipboard?.writeText("juanchomurcas@gmail.com");
      },
    },
    {
      group: t("actions"),
      label: t("openLinkedIn"),
      hint: "external",
      icon: "in",
      action: () => window.open("https://linkedin.com/in/juan-murillo", "_blank"),
    },
    {
      group: t("actions"),
      label: t("openGitHub"),
      hint: "external",
      icon: "{ }",
      action: () => window.open("https://github.com/jgmurillo10", "_blank"),
    },
    {
      group: t("actions"),
      label: t("sendEmail"),
      hint: "mailto",
      icon: "✉",
      action: () => {
        window.location.href = "mailto:juanchomurcas@gmail.com";
      },
    },
  ];

  const filtered = query
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.group.toLowerCase().includes(query.toLowerCase()) ||
          c.hint.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  const handleOpen = useCallback(() => {
    setOpen(true);
    setQuery("");
    setSel(0);
    setTimeout(() => inputRef.current?.focus(), 20);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const execute = useCallback(
    (i: number) => {
      const c = filtered[i];
      if (!c) return;
      c.action();
      handleClose();
    },
    [filtered, handleClose]
  );

  const lockKeyboard = useCallback(() => {
    keyboardLockRef.current = true;
    clearTimeout(keyboardLockTimeoutRef.current);
    keyboardLockTimeoutRef.current = setTimeout(() => {
      keyboardLockRef.current = false;
    }, 400);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open ? handleClose() : handleOpen();
      } else if (
        e.key === "/" &&
        !open &&
        !/input|textarea/i.test(
          (document.activeElement as HTMLElement)?.tagName || ""
        )
      ) {
        e.preventDefault();
        handleOpen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, handleOpen, handleClose]);

  useEffect(() => {
    setSel(0);
  }, [query]);

  useEffect(() => {
    const active = listRef.current?.querySelector(".cmdk-sel");
    if (active) active.scrollIntoView({ block: "nearest" });
  }, [sel]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-start justify-center pt-[14vh]"
      style={{
        background: "rgba(8, 6, 4, 0.6)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "cmdkFade 0.15s ease",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="overflow-hidden rounded-[8px]"
        style={{
          width: "min(560px, calc(100vw - 40px))",
          background: "var(--bg-2)",
          border: "1px solid var(--line-strong)",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,162,83,0.05)",
          fontFamily: "var(--mono)",
          animation: "cmdkPop 0.18s cubic-bezier(0.2,0.8,0.2,1)",
        }}
        role="dialog"
        aria-label="Command palette"
      >
        {/* Input */}
        <div
          className="flex items-center gap-[10px] px-[16px] py-[14px] border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <span style={{ color: "var(--accent)", fontSize: "14px" }}>❯</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setSel((s) => (s + 1) % filtered.length);
                lockKeyboard();
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSel((s) => (s - 1 + filtered.length) % filtered.length);
                lockKeyboard();
              } else if (e.key === "Enter") {
                e.preventDefault();
                execute(sel);
              } else if (e.key === "Escape") {
                e.preventDefault();
                handleClose();
              }
            }}
            placeholder={t("placeholder")}
            autoComplete="off"
            spellCheck={false}
            className="flex-1 border-0 outline-0"
            style={{
              background: "transparent",
              color: "var(--fg)",
              fontFamily: "var(--mono)",
              fontSize: "14px",
              caretColor: "var(--accent)",
            }}
          />
          <span
            className="rounded-[3px] border px-[7px] py-[2px]"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "10.5px",
              color: "var(--fg-faint)",
              borderColor: "var(--line-strong)",
            }}
          >
            esc
          </span>
        </div>

        {/* List */}
        <div
          ref={listRef}
          className="max-h-[50vh] overflow-y-auto py-[6px]"
        >
          {filtered.length === 0 ? (
            <div
              className="py-[22px] px-[16px] text-center"
              style={{ fontSize: "13px", color: "var(--fg-faint)" }}
            >
              {t("noResults")}
            </div>
          ) : (
            (() => {
              let lastGroup = "";
              return filtered.map((c, i) => {
                const showGroup = c.group !== lastGroup;
                lastGroup = c.group;
                return (
                  <div key={`${c.group}-${c.label}`}>
                    {showGroup && (
                      <div
                        className="px-[16px] pt-[10px] pb-[6px]"
                        style={{
                          fontSize: "10px",
                          color: "var(--fg-faint)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {c.group}
                      </div>
                    )}
                    <div
                      className={`flex items-center gap-[12px] px-[16px] py-[10px] cursor-pointer border-l-2 ${i === sel ? "cmdk-sel" : ""}`}
                      style={{
                        borderLeftColor:
                          i === sel ? "var(--accent)" : "transparent",
                        background:
                          i === sel
                            ? "rgba(232,162,83,0.08)"
                            : "transparent",
                        color: i === sel ? "var(--fg)" : "var(--fg-dim)",
                        fontSize: "13px",
                      }}
                      onMouseMove={() => {
                        if (keyboardLockRef.current) return;
                        if (i !== sel) setSel(i);
                      }}
                      onClick={() => execute(i)}
                    >
                      <span
                        className="w-[22px] h-[22px] rounded-[3px] inline-flex items-center justify-center shrink-0"
                        style={{
                          background:
                            c.accent
                              ? c.accent
                              : i === sel
                                ? "var(--accent)"
                                : "var(--bg-3)",
                          color:
                            c.accent || i === sel
                              ? "var(--bg)"
                              : "var(--accent)",
                          fontSize: "11px",
                        }}
                      >
                        {c.icon}
                      </span>
                      <span style={{ color: "var(--fg)" }}>{c.label}</span>
                      <span
                        className="ml-auto"
                        style={{
                          color: "var(--fg-faint)",
                          fontSize: "11px",
                        }}
                      >
                        {c.hint}
                      </span>
                    </div>
                  </div>
                );
              });
            })()
          )}
        </div>

        {/* Footer */}
        <div
          className="flex items-center gap-[14px] px-[16px] py-[10px] border-t"
          style={{
            borderColor: "var(--line)",
            fontSize: "10.5px",
            color: "var(--fg-faint)",
          }}
        >
          <span>
            <span
              className="border rounded-[2px] px-[6px] py-[1px] mr-[5px]"
              style={{
                borderColor: "var(--line-strong)",
                color: "var(--fg-dim)",
              }}
            >
              ↑↓
            </span>
            {t("navLabel")}
          </span>
          <span>
            <span
              className="border rounded-[2px] px-[6px] py-[1px] mr-[5px]"
              style={{
                borderColor: "var(--line-strong)",
                color: "var(--fg-dim)",
              }}
            >
              ↵
            </span>
            {t("selectLabel")}
          </span>
          <span>
            <span
              className="border rounded-[2px] px-[6px] py-[1px] mr-[5px]"
              style={{
                borderColor: "var(--line-strong)",
                color: "var(--fg-dim)",
              }}
            >
              esc
            </span>
            {t("closeLabel")}
          </span>
          <span className="ml-auto" style={{ color: "var(--accent)" }}>
            juan murillo · ⌘K
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes cmdkFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes cmdkPop {
          from {
            transform: translateY(8px) scale(0.98);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
