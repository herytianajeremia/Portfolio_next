"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { navigateToSection } from "@/lib/utils";

export function Freelance() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-[#0b1327] to-[#6c5ce7]/10 px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[#6c5ce7]/20 blur-3xl" />
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {t.freelance.kicker}
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl">
              {t.freelance.title}
            </h2>
            <Button asChild size="lg" className="mt-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection("contact");
                }}
              >
                {t.freelance.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
