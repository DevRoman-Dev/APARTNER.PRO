import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type Locale, localePath, t } from "@/lib/i18n";
import { SERVICES, PROJECTS, POSTS } from "@/lib/content";
import { CtaSection } from "@/components/CtaSection";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      {/* HERO */}
      <header className="relative pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6 max-w-[900px]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
                {t(locale, "hero.eyebrow")}
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mt-4 text-balance">
                {t(locale, "hero.title.1")} <br />
                {t(locale, "hero.title.2")} <br />
                <span className="text-foreground/15">{t(locale, "hero.title.3")}</span>
              </h1>
            </div>
            <p className="animate-reveal text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed text-pretty">
              {t(locale, "hero.subtitle")}
            </p>
            <div className="animate-reveal flex flex-wrap gap-4 mt-4">
              <Link
                to={localePath(locale, "/contact")}
                className="h-14 px-8 bg-accent text-accent-foreground font-bold rounded-sm hover:translate-y-[-2px] transition-transform flex items-center gap-3"
              >
                {t(locale, "hero.cta.primary")}
                <ArrowRight className="size-5" />
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

      {/* SERVICES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">
              {t(locale, "services.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3 mb-6 leading-tight">
              {t(locale, "services.title")}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {t(locale, "services.intro")}
            </p>
            <Link
              to={localePath(locale, "/services")}
              className="text-accent font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2"
            >
              {t(locale, "services.exploreAll")} <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {SERVICES.slice(0, 4).map((s) => (
              <Link
                to={localePath(locale, `/services/${s.slug}`)}
                key={s.slug}
                className="bg-background p-8 hover:bg-card transition-colors block group"
              >
                <span className="font-mono text-[10px] text-accent mb-4 block font-bold">
                  {s.num}/
                </span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {s.title[locale]}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.shortDesc[locale]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t(locale, "portfolio.title")}
            </h2>
            <span className="font-mono text-[10px] text-muted-foreground mb-2">
              {t(locale, "portfolio.vol")}
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {PROJECTS.slice(0, 2).map((p, idx) => (
              <Link
                to={localePath(locale, "/portfolio")}
                key={p.slug}
                className={`group block ${idx === 1 ? "md:mt-24" : ""}`}
              >
                <div className="w-full aspect-[3/2] bg-card ring-1 ring-foreground/5 rounded-sm overflow-hidden mb-6 relative">
                  <img
                    src={p.image}
                    alt={`${p.client} — ${p.category[locale]}`}
                    loading="lazy"
                    width={900}
                    height={600}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{p.client}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {p.category[locale]}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                    {t(locale, "portfolio.explore")} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to={localePath(locale, "/portfolio")}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent"
            >
              {t(locale, "portfolio.viewAll")} <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 break-words">
              <h2 className="text-2xl font-extrabold tracking-tight mb-4 uppercase text-balance">
                {t(locale, "blog.title")}
              </h2>
              <p className="text-sm text-muted-foreground mb-6 text-pretty">
                {t(locale, "blog.intro")}
              </p>
              <Link
                to={localePath(locale, "/blog")}
                className="inline-block px-6 py-3 border border-border text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors max-w-full text-center"
              >
                {t(locale, "blog.viewAll")}
              </Link>
            </div>
            <div className="lg:col-span-8 flex flex-col min-w-0">
              {POSTS.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  to={localePath(locale, `/blog/${p.slug}`)}
                  className="py-8 border-b border-border last:border-b-0 group flex justify-between items-center gap-6 min-w-0"
                >
                  <div className="flex gap-4 sm:gap-8 items-center min-w-0">
                    <span className="font-mono text-[10px] text-muted-foreground shrink-0 hidden sm:inline">
                      {new Date(p.date).toLocaleDateString(locale === "en" ? "en-US" : locale === "uk" ? "uk-UA" : "ru-RU", { month: "short", day: "numeric", timeZone: "UTC" }).toUpperCase()}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold group-hover:text-accent transition-colors break-words line-clamp-2">
                      {p.title[locale]}
                    </h3>
                  </div>
                  <span className="size-8 border border-border rounded-full grid place-items-center text-sm shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
