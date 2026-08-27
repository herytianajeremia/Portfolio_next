"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Eye, ExternalLink, Lock } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type Filter = "all" | "design" | "dev";

function figmaEmbed(url: string) {
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
}

export function Work() {
  const { t, locale } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.work.filters.all },
    { key: "design", label: t.work.filters.design },
    { key: "dev", label: t.work.filters.dev },
  ];

  const list = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  // Split the projects across two marquee rows.
  const rowA = list.filter((_, i) => i % 2 === 0);
  const rowB = list.filter((_, i) => i % 2 === 1);

  const renderCard = (p: Project, key: string) => (
    <button
      key={key}
      type="button"
      onClick={() => setSelected(p)}
      aria-label={`${p.name} — ${t.work.visit}`}
      className="group/card relative w-[280px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-card text-left transition-colors hover:border-primary/40 sm:w-[320px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="320px"
          className="object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent opacity-70 transition-opacity duration-300 group-hover/card:opacity-90" />
        <div className="absolute left-3 top-3">
          <Badge variant={p.category === "design" ? "default" : "solid"}>
            {p.category === "design" ? t.work.badgeDesign : t.work.badgeDev}
          </Badge>
        </div>
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover/card:opacity-100">
          <Eye className="h-4 w-4" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="truncate font-semibold">{p.name}</h3>
        <p className="truncate text-xs text-muted-foreground">{p.desc[locale]}</p>
      </div>
    </button>
  );

  const previewUrl = selected?.url
    ? selected.url.includes("figma.com")
      ? figmaEmbed(selected.url)
      : selected.url
    : null;

  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          label={t.work.label}
          title={t.work.title}
          subtitle={t.work.subtitle}
        />

        {/* Filters */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                  filter === f.key
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-white/10 text-muted-foreground hover:border-white/25 hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Infinite horizontal carousel (two rows, opposite directions) */}
        {list.length > 0 ? (
          <div className="group/marquee relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex w-max gap-3 [--marquee-duration:60s] animate-marquee group-hover/marquee:[animation-play-state:paused]">
              {[...rowA, ...rowA].map((p, i) => renderCard(p, `a-${p.id}-${i}`))}
            </div>
            <div className="mt-3 flex w-max gap-3 [--marquee-duration:48s] animate-marquee [animation-direction:reverse] group-hover/marquee:[animation-play-state:paused]">
              {[...rowB, ...rowB].map((p, i) => renderCard(p, `b-${p.id}-${i}`))}
            </div>
          </div>
        ) : (
          <p className="mt-10 text-center text-muted-foreground">
            {t.work.empty}
          </p>
        )}
      </div>

      {/* Preview modal */}
      <Dialog
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
      >
        <DialogContent className="max-w-3xl p-0">
          {selected && (
            <div className="flex flex-col">
              <DialogHeader className="border-b border-white/10 p-5">
                <div className="flex items-center gap-2">
                  <DialogTitle>{selected.name}</DialogTitle>
                  <Badge
                    variant={selected.category === "design" ? "default" : "solid"}
                  >
                    {selected.category === "design"
                      ? t.work.badgeDesign
                      : t.work.badgeDev}
                  </Badge>
                </div>
                <DialogDescription>{selected.desc[locale]}</DialogDescription>
              </DialogHeader>

              <div className="relative aspect-video w-full bg-[#020617]">
                {previewUrl ? (
                  <iframe
                    src={previewUrl}
                    title={selected.name}
                    className="h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative h-full w-full">
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      fill
                      sizes="768px"
                      className="object-cover object-top opacity-60"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                      <Lock className="h-6 w-6" />
                      <span className="text-sm">{t.work.private}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 p-5">
                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {selected.url && (
                  <Button asChild size="sm">
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.work.visit}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
