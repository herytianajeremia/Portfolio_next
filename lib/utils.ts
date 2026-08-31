import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Sections that map to a clean URL path (order = page order). */
export const SECTION_IDS = ["home", "about", "services", "work", "contact"] as const;

/** Section id -> clean URL path, e.g. "about" -> "/about". */
export function sectionToPath(id: string) {
  return `/${id}`;
}

/** URL pathname -> section id, e.g. "/about" -> "about", "/" -> "home". */
export function pathToSection(pathname: string): string {
  const seg = pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  return (SECTION_IDS as readonly string[]).includes(seg) ? seg : "home";
}

/**
 * Smooth-scroll to a section by id (does not change the URL — the navbar
 * observer keeps the URL in sync with the visible section). Client-side only.
 */
export function scrollToId(id: string, smooth = true, offset = 72) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: smooth ? "smooth" : "auto" });
}

/**
 * Navigate to a section from a click: set the clean URL path (adds a history
 * entry so Back works), then smooth-scroll to it. Client-side only.
 */
export function navigateToSection(id: string) {
  if (typeof window !== "undefined") {
    const path = sectionToPath(id);
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
    }
  }
  scrollToId(id);
}
