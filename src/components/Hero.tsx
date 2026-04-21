"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const [typedText, setTypedText] = useState("'leading AI automation at Snappr'");

  const items = [
    t("currently.0"),
    t("currently.1"),
    t("currently.2"),
    t("currently.3"),
    t("currently.4"),
  ];

  useEffect(() => {
    let idx = 0;
    let charIdx = items[0].length;
    let dir: 1 | -1 = -1;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const full = items[idx];
      if (dir === 1) {
        charIdx++;
        setTypedText(full.slice(0, charIdx));
        if (charIdx >= full.length) {
          dir = -1;
          timeout = setTimeout(tick, 2200);
          return;
        }
      } else {
        charIdx--;
        setTypedText(full.slice(0, charIdx));
        if (charIdx <= 0) {
          dir = 1;
          idx = (idx + 1) % items.length;
        }
      }
      timeout = setTimeout(tick, dir === 1 ? 55 : 28);
    }

    timeout = setTimeout(tick, 2200);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="top"
      className="hero-grid relative min-h-[calc(100vh-90px)] px-[28px] py-[48px] pb-[64px]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Left content */}
      <div className="relative z-[2]">
        <div
          className="mb-7 flex items-center gap-2.5 flex-wrap"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "12px",
            color: "var(--fg-faint)",
          }}
        >
          <span
            className="border rounded px-2 py-0.5"
            style={{
              borderColor: "var(--line-strong)",
              color: "var(--fg-dim)",
            }}
          >
            <span style={{ color: "var(--green)" }}>●</span>{" "}
            {t("statusBadge")}
          </span>
          <span>/</span>
          <span>{t("roleLine")}</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(42px, 7.4vw, 112px)",
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            maxWidth: "18ch",
          }}
        >
          {t("headlinePre")}{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>
            {t("name")}
          </span>
          .<br />
          {t("headlineMid")}{" "}
          <span className="relative inline-block">
            {t("headlineUnderline")}
            <span
              className="absolute left-0 right-0 bottom-[0.08em] h-[0.06em]"
              style={{ background: "var(--accent)", opacity: 0.5 }}
            />
          </span>
          <br />
          {t("headlineEnd")}{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>
            {t("headlineAccent")}
          </span>
          .
        </h1>

        {/* Code block */}
        <div
          className="mt-9 max-w-[52ch]"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "clamp(11px, 1.4vw, 14px)",
            color: "var(--fg-dim)",
            lineHeight: 1.7,
          }}
        >
          <div>
            <span style={{ color: "var(--accent)", marginRight: "8px" }}>
              ❯
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
            ,{" "}
            <span style={{ color: "var(--green)" }}>&apos;coffee&apos;</span>
            ],
          </div>
          <div>
            &nbsp;&nbsp;currently:{" "}
            <span style={{ color: "var(--green)" }}>{typedText}</span>
            <span
              className="inline-block w-2 h-4 align-text-bottom ml-0.5 blink"
              style={{ background: "var(--accent)" }}
            />
          </div>
          <div>{"}"}</div>
        </div>

        <div className="mt-10 flex gap-3.5 items-center flex-wrap">
          <a
            href="#work"
            className="inline-flex items-center gap-2.5 rounded no-underline transition-transform duration-150 hover:-translate-y-px"
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              fontFamily: "var(--mono)",
              fontSize: "12px",
              fontWeight: 600,
              padding: "11px 18px",
            }}
          >
            {t("ctaWork")} <span>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded border no-underline transition-all duration-150 hover:-translate-y-px"
            style={{
              background: "transparent",
              borderColor: "var(--line-strong)",
              color: "var(--fg)",
              fontFamily: "var(--mono)",
              fontSize: "12px",
              padding: "11px 18px",
            }}
          >
            {t("ctaHello")} <span>↗</span>
          </a>
        </div>
      </div>

      {/* Terminal card */}
      <div
        className="relative z-[2] rounded-md overflow-hidden hidden xl:block"
        style={{
          background: "var(--bg-2)",
          border: "1px solid var(--line-strong)",
          fontFamily: "var(--mono)",
          fontSize: "12.5px",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,162,83,0.03)",
        }}
        aria-hidden="true"
      >
        <div
          className="flex items-center gap-2 px-3.5 py-2.5 border-b"
          style={{
            borderColor: "var(--line)",
            background: "rgba(255,255,255,0.015)",
          }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5564E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E0B13F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#5EC37A]" />
          <span
            className="ml-auto"
            style={{ color: "var(--fg-faint)", fontSize: "11px" }}
          >
            ~/juan · whoami
          </span>
        </div>
        <div className="p-4 pb-5">
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--accent)", marginRight: "8px" }}>
              ❯
            </span>
            whoami --verbose
          </div>
          <div style={{ color: "var(--fg-faint)", lineHeight: 1.75 }}>
            # {t("termTitle")}
          </div>
          <hr
            className="border-0 border-t border-dashed my-2.5"
            style={{ borderColor: "var(--line)" }}
          />
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--blue)" }}>stack</span>:{" "}
            <span style={{ color: "var(--fg)" }}>
              react · node · python · go
            </span>
          </div>
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--blue)" }}>infra</span>:{" "}
            <span style={{ color: "var(--fg)" }}>
              aws · gcp · temporal · docker
            </span>
          </div>
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--blue)" }}>ai</span>:{" "}
            <span style={{ color: "var(--fg)" }}>
              pytorch · grpo · llm agents
            </span>
          </div>
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--blue)" }}>teams</span>:{" "}
            <span style={{ color: "var(--fg)" }}>{t("termTeams")}</span>
          </div>
          <hr
            className="border-0 border-t border-dashed my-2.5"
            style={{ borderColor: "var(--line)" }}
          />
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--accent)", marginRight: "8px" }}>
              ❯
            </span>
            cat achievements.md | tail -3
          </div>
          <div style={{ color: "var(--green)", lineHeight: 1.75 }}>
            ✓ CLOUD-6999 closed after 10+ years
          </div>
          <div style={{ color: "var(--green)", lineHeight: 1.75 }}>
            ✓ Food imagery automated 0% → 56%
          </div>
          <div style={{ color: "var(--green)", lineHeight: 1.75 }}>
            ✓ YC interview in under 30 days
          </div>
          <hr
            className="border-0 border-t border-dashed my-2.5"
            style={{ borderColor: "var(--line)" }}
          />
          <div style={{ color: "var(--fg-dim)", lineHeight: 1.75 }}>
            <span style={{ color: "var(--accent)", marginRight: "8px" }}>
              ❯
            </span>
            <span className="blink">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}
