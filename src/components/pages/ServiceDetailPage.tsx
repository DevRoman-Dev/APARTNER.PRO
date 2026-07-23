import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, Star } from "lucide-react";
import { type Locale, localePath, t } from "@/lib/i18n";
import type { ServiceItem } from "@/lib/content";
import { getServiceExtras } from "@/lib/service-extras";
import { CtaSection } from "@/components/CtaSection";

const labels = {
  en: {
    whatYouGet: "What you get",
    stack: "Stack",
    process: "How we work",
    faq: "Frequently asked questions",
    benefits: "Why teams pick us",
    startingFrom: "Starting from",
    timeline: "Timeline",
    rating: "based on",
    reviews: "client reviews",
    related: "Other services",
    breadcrumb: { home: "Home", services: "Services" },
  },
  uk: {
    whatYouGet: "Що ви отримаєте",
    stack: "Стек",
    process: "Як ми працюємо",
    faq: "Поширені запитання",
    benefits: "Чому обирають нас",
    startingFrom: "Від",
    timeline: "Терміни",
    rating: "на основі",
    reviews: "відгуків клієнтів",
    related: "Інші послуги",
    breadcrumb: { home: "Головна", services: "Послуги" },
  },
  ru: {
    whatYouGet: "Что вы получите",
    stack: "Стек",
    process: "Как мы работаем",
    faq: "Часто задаваемые вопросы",
    benefits: "Почему выбирают нас",
    startingFrom: "От",
    timeline: "Сроки",
    rating: "на основе",
    reviews: "отзывов клиентов",
    related: "Другие услуги",
    breadcrumb: { home: "Главная", services: "Услуги" },
  },
} as const;

export function ServiceDetailPage({
  locale,
  service,
  others,
}: {
  locale: Locale;
  service: ServiceItem;
  others: ServiceItem[];
}) {
  const l = labels[locale];
  const x = getServiceExtras(service.slug);

  return (
    <>
      {/* Breadcrumb + hero */}
      <section className="pt-20 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2 flex-wrap"
          >
            <Link to={localePath(locale, "/")} className="hover:text-accent">
              {l.breadcrumb.home}
            </Link>
            <span>/</span>
            <Link to={localePath(locale, "/services")} className="hover:text-accent">
              {l.breadcrumb.services}
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title[locale]}</span>
          </nav>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
            {service.num}/ {service.stack[0]}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-4 mb-6 leading-[1] max-w-4xl">
            {service.title[locale]}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {service.longDesc[locale]}
          </p>

          {x && (
            <div className="mt-10 flex flex-wrap items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-bold">{x.rating.value.toFixed(1)}</span>
                <span className="text-muted-foreground">
                  {l.rating} {x.rating.count} {l.reviews}
                </span>
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-foreground font-bold">{l.startingFrom}:</span>{" "}
                {x.startingFrom[locale]}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-foreground font-bold">{l.timeline}:</span>{" "}
                {x.timeline[locale]}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Deliverables + sticky CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-extrabold tracking-tight mb-8 uppercase">
              {l.whatYouGet}
            </h2>
            <ul className="space-y-4">
              {service.deliverables[locale].map((d) => (
                <li key={d} className="flex items-start gap-4 py-4 border-b border-border">
                  <Check className="size-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base font-medium">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-secondary p-8 rounded-sm border border-border sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-muted-foreground">
                {l.stack}
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-3 py-1.5 bg-background border border-border rounded-sm uppercase"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                to={localePath(locale, "/contact")}
                className="w-full bg-accent text-accent-foreground px-6 py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-transform"
              >
                {t(locale, "services.cta")} <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {x && (
        <section className="py-20 border-t border-border bg-secondary/40">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-12">
              {l.benefits}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {x.benefits[locale].map((b, i) => (
                <div key={b} className="p-6 bg-background border border-border rounded-sm">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
                    0{i + 1}
                  </span>
                  <p className="mt-3 text-base font-medium leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {x && (
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-12">
              {l.process}
            </h2>
            <ol className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {x.process[locale].map((step, i) => (
                <li key={step.title} className="flex gap-6 border-t border-border pt-6">
                  <span className="font-mono text-3xl font-extrabold text-accent shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQ */}
      {x && (
        <section className="py-20 border-t border-border bg-secondary/40">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-12">
              {l.faq}
            </h2>
            <div className="space-y-4">
              {x.faq[locale].map((item) => (
                <details
                  key={item.q}
                  className="group border border-border bg-background rounded-sm p-6 [&_summary]:list-none"
                >
                  <summary className="cursor-pointer font-bold text-base flex justify-between items-center gap-4">
                    <span>{item.q}</span>
                    <span className="font-mono text-accent group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      {others.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-12">
              {l.related}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to={localePath(locale, `/services/${o.slug}`)}
                  className="block p-6 border border-border rounded-sm hover:border-accent transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                    {o.num}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2">{o.title[locale]}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {o.shortDesc[locale]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection locale={locale} />
    </>
  );
}
