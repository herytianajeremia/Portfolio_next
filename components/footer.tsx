"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SocialGlyph } from "@/components/icons";
import { profile, socials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  const links = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "work", label: t.nav.work },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const year = 2025;

  return (
    <footer className="border-t border-white/10 bg-[#081426]">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={profile.logo}
                alt=""
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-lg font-bold">{profile.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  <SocialGlyph icon={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.nav}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.contact.label}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-words transition-colors hover:text-primary"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${profile.phoneRaw}`}
                  className="transition-colors hover:text-primary"
                >
                  {profile.phone}
                </a>
              </li>
              <li>{t.about.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {year} {profile.fullName}. {t.footer.rights}
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Top"
        className={cn(
          "fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1",
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
