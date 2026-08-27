"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["home", "about", "services", "work", "contact"] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "work", label: t.nav.work },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0a192f]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container flex h-[72px] items-center justify-between gap-4">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2"
          aria-label={profile.name}
        >
          <Image
            src={profile.logo}
            alt=""
            width={38}
            height={38}
            className="h-9 w-auto"
          />
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-primary" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a
              href={`tel:+${profile.phoneCallRaw}`}
              aria-label={`${t.nav.cta} — ${profile.phoneCall}`}
            >
              <Phone className="h-4 w-4" />
              {t.nav.cta}
            </a>
          </Button>

          {/* Mobile menu */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="lg:hidden"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent
              className="left-auto right-0 top-0 h-full max-w-xs translate-x-0 translate-y-0 rounded-none border-l border-white/10 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:rounded-none"
              hideClose
            >
              <DialogTitle className="sr-only">Menu</DialogTitle>
              <div className="mt-10 flex flex-col gap-1">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollTo(link.id), 120);
                    }}
                    className={cn(
                      "rounded-xl px-4 py-3 text-left text-base font-medium transition-colors",
                      active === link.id
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-white/5",
                    )}
                  >
                    {link.label}
                  </button>
                ))}
                <Button asChild className="mt-4" onClick={() => setOpen(false)}>
                  <a
                    href={`tel:+${profile.phoneCallRaw}`}
                    aria-label={`${t.nav.cta} — ${profile.phoneCall}`}
                  >
                    <Phone className="h-4 w-4" />
                    {t.nav.cta}
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
}
