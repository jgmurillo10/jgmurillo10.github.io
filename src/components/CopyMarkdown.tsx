"use client";

import { useState, useCallback } from "react";

function buildMarkdown(): string {
  const out: string[] = [];
  const nl = () => out.push("");
  const text = (el: Element | null) =>
    el ? (el.textContent || "").replace(/\s+/g, " ").trim() : "";

  // Title
  const h1 = document.querySelector(".hero-grid h1, #top h1");
  if (h1) out.push("# " + text(h1));

  const crumb = document.querySelector("[class*='hero'] [class*='crumb'], #top > div > div:first-child");
  if (crumb) out.push("> " + text(crumb));
  nl();

  // Terminal whoami
  const termLines = document.querySelectorAll("[aria-hidden] .p-4 div, .term-body .ln");
  if (termLines.length) {
    out.push("## whoami");
    termLines.forEach((ln) => {
      const t = text(ln);
      if (/stack|infra|ai|teams/i.test(t.split(":")[0] || "")) {
        const [k, ...rest] = t.split(":");
        if (rest.length) out.push(`- **${k.trim()}:** ${rest.join(":").trim()}`);
      } else if (/^✓/.test(t)) {
        out.push("- " + t);
      }
    });
    nl();
  }

  // Sections
  document.querySelectorAll("main > section[id]").forEach((section) => {
    if (section.id === "top") return;
    const head = section.querySelector("h2");
    if (!head) return;
    out.push("## " + text(head).replace(/[*]/g, ""));
    nl();

    // Projects
    section.querySelectorAll("article").forEach((p) => {
      const name = p.querySelector("[style*='serif']");
      const h3 = p.querySelector("h3");
      if (name) out.push("### " + text(name));
      if (h3) out.push("**" + text(h3) + "**");
      nl();

      p.querySelectorAll("p").forEach((para) => {
        out.push(text(para));
        nl();
      });
      out.push("---");
      nl();
    });

    // Services
    section.querySelectorAll("[class*='service'] > div, .lg\\:grid-cols-3 > div").forEach((s) => {
      const h3 = s.querySelector("h3");
      const p = s.querySelector("p");
      if (h3) out.push("### " + text(h3));
      if (p) out.push(text(p));
      nl();
    });

    // Experience rows
    section.querySelectorAll(".exp-row").forEach((r) => {
      const who = r.querySelector("h4");
      const role = r.querySelector("[style*='mono'][class*='mt']");
      const desc = r.querySelector(".exp-desc");
      if (who) {
        out.push(`### ${text(who)}`);
        if (role) out.push(`_${text(role)}_`);
        if (desc) out.push(text(desc));
        nl();
      }
    });

    // Now cards
    section.querySelectorAll("[style*='bg-2']").forEach((c) => {
      const h = c.querySelector("h4");
      const p = c.querySelector("p");
      if (h) out.push("### " + text(h));
      if (p) out.push(text(p));
      nl();
    });
  });

  // Footer
  const footer = document.querySelector("footer");
  if (footer) {
    out.push("---");
    out.push("_" + text(footer) + "_");
  }

  return out
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim() + "\n";
}

export default function CopyMarkdown() {
  const [copied, setCopied] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleCopy = useCallback(async () => {
    const md = buildMarkdown();
    try {
      await navigator.clipboard.writeText(md);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = md;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCharCount(md.length);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <button
      className="fixed left-5 bottom-5 z-[900] inline-flex items-center gap-2 rounded-full cursor-pointer transition-all duration-150 hover:-translate-y-0.5"
      style={{
        background: "var(--bg-2)",
        border: `1px solid ${copied ? "var(--green)" : "var(--line-strong)"}`,
        color: copied ? "var(--green)" : "var(--fg)",
        fontFamily: "var(--mono)",
        fontSize: "12px",
        padding: "10px 16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      }}
      onClick={handleCopy}
      title="Copy this page as Markdown (⌘⇧C)"
    >
      <span
        className="w-[18px] h-[18px] rounded inline-flex items-center justify-center"
        style={{
          background: copied ? "var(--green)" : "var(--accent)",
          color: "var(--bg)",
          fontSize: "10px",
          fontWeight: 700,
        }}
      >
        {copied ? "✓" : "MD"}
      </span>
      <span>
        {copied
          ? `copied · ${charCount.toLocaleString()} chars`
          : "copy as markdown"}
      </span>
    </button>
  );
}
