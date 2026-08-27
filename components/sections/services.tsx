"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { ServiceIcon } from "@/components/icons";
import { serviceIcons } from "@/lib/data";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          label={t.services.label}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon
                    icon={serviceIcons[i] ?? "figma"}
                    className="h-7 w-7"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <ArrowUpRight className="mt-5 h-5 w-5 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium italic text-foreground/80">
            &ldquo;{t.services.quote}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
