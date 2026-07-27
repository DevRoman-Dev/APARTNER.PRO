import { Link } from "@tanstack/react-router";
import { type Locale, localePath, t } from "@/lib/i18n";
import { lazy, Suspense } from "react";

const HomeServicesSection = lazy(() =>
  import("@/components/home/HomeServicesSection").then((m) => ({ default: m.HomeServicesSection }))
);
const HomePortfolioSection = lazy(() =>
  import("@/components/home/HomePortfolioSection").then((m) => ({ default: m.HomePortfolioSection }))
);
const HomeBlogSection = lazy(() =>
  import("@/components/home/HomeBlogSection").then((m) => ({ default: m.HomeBlogSection }))
);
const CtaSection = lazy(() =>
  import("@/components/CtaSection").then((m) => ({ default: m.CtaSection }))
);

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      {/* HERO */}
      <header className="relative pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6 max-w-[900px]">
            <div className="md:animate-reveal">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
                {t(locale, "hero.eyebrow")}
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mt-4 text-balance">
                {t(locale, "hero.title.1")} <br />
                {t(locale, "hero.title.2")} <br />
                <span className="text-foreground/15">{t(locale, "hero.title.3")}</span>
              </h1>
            </div>
            <p className="md:animate-reveal text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed text-pretty">
              {t(locale, "hero.subtitle")}
            </p>
            <div className="md:animate-reveal flex flex-wrap gap-4 mt-4">
              <Link
                to={localePath(locale, "/contact")}
                preload="intent"
                className="h-14 px-8 bg-accent text-accent-foreground font-bold rounded-sm hover:translate-y-[-2px] transition-transform flex items-center gap-3"
              >
                {t(locale, "hero.cta.primary")}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                to={localePath(locale, "/portfolio")}
                className="h-14 flex items-center gap-4 px-6 border border-border bg-card rounded-sm hover:border-foreground/30 transition-colors"
              >
                <div className="flex -space-x-2">
                  <div className="size-7 rounded-full bg-stone-200 border-2 border-card" />
                  <div className="size-7 rounded-full bg-stone-300 border-2 border-card" />
                  <div className="size-7 rounded-full bg-stone-400 border-2 border-card" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {t(locale, "hero.trust")}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full border-l border-border opacity-50 hidden lg:block pointer-events-none">
          <div className="absolute bottom-0 left-0 p-8">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              Architecture · Logic · Scale
            </span>
          </div>
        </div>
      </header>

      {/* TRUST */}
      <section className="border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-between items-center gap-8">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            {t(locale, "trust.label")}
          </span>
          {["LARAVEL", "PRESTASHOP", "WORDPRESS", "REACT", "NEXT.JS"].map((s) => (
            <span key={s} className="font-bold text-lg opacity-30 grayscale tracking-tight">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* LAZY-LOADED BELOW-THE-FOLD SECTIONS */}
      <Suspense fallback={null}>
        <HomeServicesSection locale={locale} />
        <HomePortfolioSection locale={locale} />
        <HomeBlogSection locale={locale} />
        <CtaSection locale={locale} />
      </Suspense>
    </>
  );
}
