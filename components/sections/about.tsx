"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SocialGlyph } from "@/components/icons";
import { profile, skills, socials, tools } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-2xl font-bold text-primary sm:text-3xl">
      {n}
      {suffix}
    </div>
  );
}

function SkillBar({ name, value }: { name: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-foreground/[0.06]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-brand-violet"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          label={t.about.label}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Profile card */}
          <Reveal className="lg:col-span-3" delay={0.05}>
            <Card className="h-full p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={profile.aboutImage}
                    alt={profile.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-2xl font-extrabold uppercase tracking-[0.06em] text-transparent [-webkit-text-stroke:1.5px_hsl(var(--primary))]">
                      {profile.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {t.about.location}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-primary">{t.about.role}</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {t.about.bio}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {t.about.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border bg-foreground/[0.02] p-4 text-center"
                  >
                    <Counter value={s.value} suffix={s.suffix} />
                    <div className="mt-1 text-xs text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                  >
                    <SocialGlyph icon={s.icon} size={16} />
                  </a>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Skills */}
          <Reveal className="lg:col-span-2" delay={0.12}>
            <Card className="h-full p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{t.about.skillsTitle}</h3>
                <span className="text-xs text-muted-foreground">
                  {t.about.skillsUpdated}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} value={s.value} />
                ))}
              </div>

              <div className="mt-7 border-t border-border pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.about.toolsTitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
