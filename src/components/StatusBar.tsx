"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function StatusBar() {
  const t = useTranslations("StatusBar");
  const [uptime, setUptime] = useState("00:00:00");
  const [coffeeCount, setCoffeeCount] = useState(2);

  useEffect(() => {
    const start = Date.now() - (7 * 3600 + 23 * 60) * 1000;
    const tick = () => {
      const s = Math.floor((Date.now() - start) / 1000);
      const h = String(Math.floor(s / 3600)).padStart(2, "0");
      const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      const ss = String(s % 60).padStart(2, "0");
      setUptime(`${h}:${m}:${ss}`);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        setCoffeeCount((prev) => Math.min(prev + 1, 9));
      }
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[34px] flex items-center px-[18px] gap-[18px] border-b border-line"
      style={{
        background: `rgba(var(--bg-rgb), 0.85)`,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        fontFamily: "var(--mono)",
        fontSize: "11.5px",
        color: "var(--fg-dim)",
        letterSpacing: "0.01em",
      }}
    >
      <div className="flex items-center">
        <span
          className="inline-block w-[7px] h-[7px] rounded-full mr-[6px]"
          style={{
            background: "var(--green)",
            boxShadow: "0 0 6px rgba(143, 182, 123, 0.6)",
            animation: "pulse 2.4s ease-in-out infinite",
          }}
        />
        {t("deployed")}
      </div>
      <span style={{ color: "var(--fg-faint)" }}>|</span>
      <div className="flex items-center">
        <span style={{ color: "var(--fg-faint)" }}>{t("branch")}</span>&nbsp;
        <span style={{ color: "var(--fg)" }}>main</span>
      </div>
      <span className="hidden sm:inline" style={{ color: "var(--fg-faint)" }}>|</span>
      <div className="hidden sm:flex items-center">
        <span style={{ color: "var(--fg-faint)" }}>{t("uptime")}</span>&nbsp;
        <span style={{ color: "var(--fg)" }}>{uptime}</span>
      </div>
      <span className="hidden md:inline" style={{ color: "var(--fg-faint)" }}>|</span>
      <div className="hidden md:flex items-center">
        <span style={{ color: "var(--fg-faint)" }}>{t("loc")}</span>&nbsp;
        <span style={{ color: "var(--fg)" }}>{t("location")}</span>
      </div>
      <div className="ml-auto flex gap-[18px] items-center">
        <div className="hidden sm:flex items-center">
          <span style={{ color: "var(--fg-faint)" }}>{t("coffee")}</span>&nbsp;
          <span style={{ color: "var(--fg)" }}>
            {coffeeCount} {t("cups")}
          </span>
        </div>
        <div className="hidden sm:flex items-center">
          <span style={{ color: "var(--fg-faint)" }}>{t("status")}</span>&nbsp;
          <span style={{ color: "var(--green)" }}>{t("statusValue")}</span>
        </div>
      </div>
    </div>
  );
}
