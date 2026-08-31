"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { SocialGlyph } from "@/components/icons";
import { profile, socials } from "@/lib/data";
import { navigateToSection } from "@/lib/utils";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");

  useEffect(() => {
    let word = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[word % words.length];
      if (!deleting) {
        char++;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
        timer = setTimeout(tick, 90);
      } else {
        char--;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          word++;
          timer = setTimeout(tick, 260);
          return;
        }
        timer = setTimeout(tick, 45);
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

const ringPositions = [
  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
  "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
  "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
];

export function Hero() {
  const { t } = useLanguage();
  const typed = useTypewriter(t.hero.roles);
  const ringSocials = socials.slice(0, 4);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-[#6c5ce7]/20 blur-[130px]" />
      </div>

      <div className="container grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t.hero.available}
          </span>

          <p className="mt-6 text-base text-muted-foreground">
            {t.hero.greeting}
          </p>
          <h1 className="mt-1 text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-transparent [-webkit-text-stroke:2px_hsl(var(--primary))] [filter:drop-shadow(0_0_20px_rgba(100,255,218,0.35))]">
              {profile.name}
            </span>
          </h1>

          <p className="mt-4 flex min-h-[2.2rem] items-center text-lg font-semibold uppercase tracking-wide text-primary sm:text-xl">
            {typed}
            <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-primary" />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={profile.cv} target="_blank" rel="noopener noreferrer">
                <Eye className="h-4 w-4" />
                {t.hero.ctaCv}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection("contact");
                }}
              >
                {t.hero.ctaContact}
              </a>
            </Button>
          </div>

          <div className="mt-8 hidden items-center gap-3 sm:flex">
            {socials.slice(0, 4).map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
              >
                <SocialGlyph icon={s.icon} size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Image + orbiting icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="order-1 flex flex-col items-center gap-7 lg:order-2"
        >
          <div className="relative aspect-square w-[260px] sm:w-[340px] lg:w-[400px]">
            {/* soft outer aura */}
            <div className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-tr from-primary/25 via-transparent to-[#8b7dff]/25 blur-2xl" />

            {/* rotating conic-gradient ring */}
            <div
              className="absolute inset-0 animate-spin-slow rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, hsl(166 100% 70%) 80deg, transparent 190deg, #8b7dff 290deg, transparent 360deg)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
              }}
            />

            {/* faint dashed ring for depth */}
            <div className="pointer-events-none absolute inset-[6px] rounded-full border border-dashed border-white/10" />

            {/* floating accent dots */}
            <div className="pointer-events-none absolute right-3 top-8 h-2 w-2 animate-float rounded-full bg-primary shadow-[0_0_12px_rgba(100,255,218,0.8)]" />
            <div className="pointer-events-none absolute bottom-10 left-2 h-1.5 w-1.5 animate-float rounded-full bg-[#8b7dff] shadow-[0_0_12px_rgba(139,125,255,0.8)] [animation-delay:1.5s]" />

            {/* orbiting glass icons — placed ON the ring (translate kept separate from the
                rotation), counter-rotated to stay upright, pause on hover, hidden on mobile */}
            <div className="group absolute inset-0 animate-spin-slow rounded-full hover:[animation-play-state:paused]">
              {ringSocials.map((s, i) => (
                <div
                  key={s.key}
                  className={`absolute ${ringPositions[i]} z-20 hidden h-12 w-12 sm:block`}
                >
                  <div className="h-12 w-12 animate-spin-slow [animation-direction:reverse] group-hover:[animation-play-state:paused]">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-primary shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:border-primary/60 hover:text-primary"
                    >
                      <SocialGlyph icon={s.icon} size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* photo */}
            <div className="absolute inset-8 overflow-hidden rounded-full border border-white/10 bg-[#0b1327] shadow-2xl shadow-primary/10">
              <Image
                src={profile.heroImage}
                alt={profile.name}
                fill
                sizes="(max-width: 640px) 220px, 400px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Mobile app-style icon menu (dock) */}
          <div className="flex items-center justify-center gap-3 sm:hidden">
            {ringSocials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-primary shadow-lg transition-transform active:scale-90"
              >
                <SocialGlyph icon={s.icon} size={24} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
