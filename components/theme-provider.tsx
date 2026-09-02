"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  /** False until the stored/system preference has been read on the client. */
  ready: boolean;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const THEME_STORAGE_KEY = "portfolio-theme";

/** Runs before paint (see layout.tsx) so the first frame is already themed. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}var e=document.documentElement;e.classList.toggle("dark",t==="dark");e.style.colorScheme=t;}catch(e){document.documentElement.classList.add("dark");}})();`;

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  // Keep the browser UI (mobile address bar) in step with the page.
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#0a192f" : "#f5f8fc");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Matches the SSR/static markup; corrected on mount by the effect below.
  const [theme, setThemeState] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  // Re-resolve from the stored choice once mounted, and re-apply it. Reading
  // storage rather than the current <html> class matters: hydration can restore
  // the class baked into the static HTML over what the pre-paint script set, so
  // the DOM is not a reliable source of truth here. This also covers what the
  // script cannot reach — the <meta name="theme-color"> Next renders after it.
  useEffect(() => {
    let resolved: Theme;
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      resolved =
        stored === "light" || stored === "dark"
          ? stored
          : window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark";
    } catch {
      resolved = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    setThemeState(resolved);
    applyTheme(resolved);
    setReady(true);
  }, []);

  // Follow the OS while the visitor has not made an explicit choice.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      if (window.localStorage.getItem(THEME_STORAGE_KEY)) return;
      const next: Theme = e.matches ? "light" : "dark";
      setThemeState(next);
      applyTheme(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* private mode — the choice just won't persist */
    }
  }, []);

  const toggle = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={{ theme, ready, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
