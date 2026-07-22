import { Link } from "@tanstack/react-router";
import { type Locale, localePath, t } from "@/lib/i18n";

export function CtaSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-28 md:py-32 bg-foreground text-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-8">
            {t(locale, "cta.title.1")} <br />
            {t(locale, "cta.title.2")} <br />
            <span className="text-accent">{t(locale, "cta.title.3")}</span>
          </h2>
          <p className="text-lg text-background/60 max-w-xl mb-10">
            {t(locale, "cta.subtitle")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={localePath(locale, "/contact")}
              className="bg-accent text-accent-foreground px-10 py-5 font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform"
            >
              {t(locale, "cta.book")}
            </Link>
            <Link
              to={localePath(locale, "/services")}
              className="border border-background/20 px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-background hover:text-foreground transition-colors"
            >
              {t(locale, "cta.pricing")}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute -right-20 bottom-0 opacity-[0.07] select-none pointer-events-none">
        <span className="text-[180px] md:text-[240px] font-extrabold leading-none tracking-tighter">
          APARTNER.
        </span>
      </div>
    </section>
  );
}
