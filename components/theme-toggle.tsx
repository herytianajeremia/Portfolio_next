"use client";

import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, ready, toggle } = useTheme();
  const { t } = useLanguage();
  const dark = theme === "dark";
  const label = dark ? t.nav.themeLight : t.nav.themeDark;

  return (
    <button
      type="button"
      onClick={toggle}
      title={label}
      aria-label={label}
      aria-pressed={dark}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-foreground/[0.04] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {/* Both icons are rendered and cross-faded so the swap never reflows. */}
      <Sun
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
      {/* Avoid showing the wrong icon during the pre-hydration frame. */}
      <span className={cn("sr-only", ready && "hidden")}>{label}</span>
    </button>
  );
}
