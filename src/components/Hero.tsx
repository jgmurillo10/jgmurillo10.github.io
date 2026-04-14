"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const roles = [t("roles.0"), t("roles.1"), t("roles.2"), t("roles.3"), t("roles.4")];

  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="aurora-blob absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-primary-dim/8 rounded-full blur-[100px]" />
        <div className="aurora-blob-2 absolute top-[40%] right-[5%] w-[400px] h-[350px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="aurora-blob-3 absolute bottom-[10%] left-[30%] w-[350px] h-[300px] bg-primary/4 rounded-full blur-[100px]" />
      </div>

      {/* Mouse-follow spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovering ? 0.08 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-primary-dim), transparent 60%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Mobile photo - shown above copy on small screens */}
        <div className="md:hidden flex justify-center mb-10">
          <div className="rotating-border w-40 aspect-square rounded-2xl overflow-hidden bg-surface-low">
            <Image
              src="/juan-murillo.jpg"
              alt="Juan Murillo"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-[family-name:var(--font-inter)] text-on-surface-variant mb-6 leading-relaxed">
              {t("greeting")} <strong className="text-on-surface">{t("name")}</strong>,{" "}
              <span
                className="text-primary inline-block min-w-[200px] transition-all duration-300"
                style={{
                  opacity: fade ? 1 : 0,
                  transform: fade ? "translateY(0)" : "translateY(6px)",
                }}
              >
                {roles[roleIndex]}
              </span>
              <br className="hidden sm:block" />
              {t("basedIn")}
            </p>

            <h1 className="font-[family-name:var(--font-manrope)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-8 tracking-tight">
              {t("headlineLine1")}
              <br className="hidden sm:block" />
              {t("headlineLine2")}
              <br className="hidden sm:block" />
              {t("headlineLine3")} <span className="text-primary">{t("headlineHighlight")}</span>
            </h1>

            <div className="font-[family-name:var(--font-inter)] text-base text-on-surface-variant max-w-xl leading-relaxed space-y-4 mb-10">
              <p>
                {t("bodyParagraph1Start")}{" "}
                <strong className="text-on-surface">{t("bodyAtlassian")}</strong>
                {t("bodyAtlassianText")}{" "}
                <a
                  href="https://jira.atlassian.com/browse/AX-662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors underline underline-offset-2"
                >
                  {t("bodyAtlassianTicket")}
                </a>
                {t("bodyAtlassianAfterTicket")}{" "}
                <strong className="text-on-surface">{t("bodySnappr")}</strong>
                {t("bodySnapprText")}{" "}
                <strong className="text-on-surface">{t("bodyGoogle")}</strong>
                {t("bodyGoogleText")}
              </p>
              <p>
                {t("bodyParagraph2Start")}{" "}
                <strong className="text-on-surface">{t("bodyCoffeeStartup")}</strong>{" "}
                {t("bodyParagraph2End")}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="gradient-btn text-black font-medium font-[family-name:var(--font-inter)] px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                {t("ctaWork")}
              </a>
              <a
                href="#contact"
                className="ghost-border text-on-surface-variant font-medium font-[family-name:var(--font-inter)] px-6 py-3 rounded-lg hover:text-on-surface hover:bg-surface-highest/40 transition-colors text-sm"
              >
                {t("ctaHello")}
              </a>
            </div>
          </div>

          {/* Desktop photo with rotating gradient border */}
          <div className="hidden md:block relative">
            <div className="rotating-border w-72 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden bg-surface-low">
              <Image
                src="/juan-murillo.jpg"
                alt="Juan Murillo"
                width={320}
                height={427}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
            <div className="aurora-blob absolute -inset-8 -z-10 bg-primary-dim/10 rounded-3xl blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
