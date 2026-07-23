import { type Locale, t } from "@/lib/i18n";
import { PROJECTS } from "@/lib/content";
import { CtaSection } from "@/components/CtaSection";

export function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="pt-20 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-end">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
              {t(locale, "portfolio.vol")}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-4 leading-[0.95]">
              {t(locale, "portfolio.title")}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-x-12 gap-y-20">
          {PROJECTS.map((p, idx) => {
            // const Wrapper: React.ElementType = p.url ? "a" : "div";
            // const wrapperProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <article key={p.slug} className={`group ${idx % 2 === 1 ? "md:mt-24" : ""}`}>
                {/* <Wrapper {...wrapperProps} className="block"> */}
                <div className="w-full aspect-[3/2] bg-secondary ring-1 ring-foreground/5 rounded-sm overflow-hidden mb-6 relative">
                  <img
                    src={p.image}
                    alt={`${p.client} — ${p.category[locale]}`}
                    loading="lazy"
                    width={900}
                    height={600}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                {/* </Wrapper> */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{p.client}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                      {p.category[locale]} · {p.year}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {p.summary[locale]}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-1 bg-secondary border border-border rounded-sm uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-accent hover:underline"
                    >
                      {p.url.replace(/^https?:\/\//, "")} →
                    </a>
                  )} */}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
