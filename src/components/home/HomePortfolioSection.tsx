import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type Locale, localePath, t } from "@/lib/i18n";
import { PROJECTS } from "@/lib/content";

export function HomePortfolioSection({ locale }: { locale: Locale }) {
  return (
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
  );
}
