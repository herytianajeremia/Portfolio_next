"use client";

import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import { LOCALES, type Locale } from "@/lib/i18n";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "relative inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 text-xs font-semibold",
        className,
      )}
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map((code: Locale) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={cn(
              "relative z-10 rounded-full px-3 py-1 uppercase transition-colors",
              active
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {code}
            {active && (
              <span className="absolute inset-0 -z-10 rounded-full bg-primary" />
            )}
          </button>
        );
      })}
    </div>
  );
}
