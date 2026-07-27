import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { type Locale, localePath, t, LOCALES } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

interface Props {
  locale: Locale;
}

export function Header({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const nav = [
    { key: "nav.services", to: localePath(locale, "/services") },
    { key: "nav.portfolio", to: localePath(locale, "/portfolio") },
    { key: "nav.blog", to: localePath(locale, "/blog") },
    { key: "nav.about", to: localePath(locale, "/about") },
    { key: "nav.contact", to: localePath(locale, "/contact") },
  ];

  // Build language switcher: strip current locale prefix and add target
  const stripLocale = (p: string) => {
    if (p.startsWith("/uk/") || p === "/uk") return p.slice(3) || "/";
    if (p.startsWith("/ru/") || p === "/ru") return p.slice(3) || "/";
    return p;
  };
  const baseSubpath = stripLocale(pathname);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            to={localePath(locale, "/")}
            preload="intent"
            className="font-extrabold tracking-tighter text-xl"
          >
            APARTNER<span className="text-accent">.</span>
          </Link>
          <div className="hidden lg:flex gap-7 text-sm font-medium text-muted-foreground">
            {nav.map((n) => (
              <Link
                key={n.key}
                to={n.to}
                preload="intent"
                className="hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {t(locale, n.key)}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-2 text-[10px] font-mono border border-border rounded-full px-3 py-1 bg-card">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-20">/</span>}
                <Link
                  to={localePath(l, baseSubpath)}
                  onClick={() => localStorage.setItem("preferred_locale", l)}
                  className={
                    l === locale
                      ? "text-accent"
                      : "hover:text-accent transition-colors text-foreground"
                  }
                >
                  {l.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
          <Link
            to={localePath(locale, "/contact")}
            preload="intent"
            className="hidden sm:inline-flex bg-foreground text-background text-xs font-bold px-5 py-2.5 rounded-sm hover:bg-accent transition-colors uppercase tracking-widest"
          >
            {t(locale, "nav.cta")}
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.key}
                to={n.to}
                preload="intent"
                onClick={() => setOpen(false)}
                className="text-base font-medium"
              >
                {t(locale, n.key)}
              </Link>
            ))}
            <div className="flex gap-3 pt-2 border-t border-border">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  to={localePath(l, baseSubpath)}
                  onClick={() => {
                    localStorage.setItem("preferred_locale", l);
                    setOpen(false);
                  }}
                  className={`text-xs font-mono uppercase ${l === locale ? "text-accent" : ""}`}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
