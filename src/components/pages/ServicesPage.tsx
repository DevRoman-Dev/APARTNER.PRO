import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type Locale, localePath, t } from "@/lib/i18n";
import { SERVICES } from "@/lib/content";
import { CtaSection } from "@/components/CtaSection";

export function ServicesPage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="pt-20 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
            {t(locale, "services.eyebrow")}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-4 mb-6 leading-[0.95]">
            {t(locale, "services.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {t(locale, "services.intro")}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-px bg-border border border-border rounded-sm overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              to={localePath(locale, `/services/${s.slug}`)}
              key={s.slug}
              className="bg-background p-8 hover:bg-card transition-colors group flex flex-col"
            >
              <span className="font-mono text-[10px] text-accent mb-6 block font-bold">
                {s.num}/
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {s.title[locale]}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {s.shortDesc[locale]}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {s.stack.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-secondary text-muted-foreground rounded-sm uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent inline-flex items-center gap-2">
                {t(locale, "blog.readMore")} <ArrowRight className="size-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
