import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type Locale, localePath, t } from "@/lib/i18n";
import { SERVICES } from "@/lib/content";

export function HomeServicesSection({ locale }: { locale: Locale }) {
  return (
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
  );
}
