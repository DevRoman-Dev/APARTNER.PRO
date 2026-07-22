import { Link } from "@tanstack/react-router";
import { type Locale, localePath, t } from "@/lib/i18n";
import { POSTS } from "@/lib/content";
import { CtaSection } from "@/components/CtaSection";

export function BlogPage({ locale }: { locale: Locale }) {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString(
      locale === "en" ? "en-US" : locale === "uk" ? "uk-UA" : "ru-RU",
      { year: "numeric", month: "long", day: "numeric" },
    );
  const [featured, ...rest] = POSTS;
  return (
    <>
      <section className="pt-20 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
            {t(locale, "blog.title")}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-4 mb-6 leading-[0.95]">
            {t(locale, "blog.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t(locale, "blog.intro")}
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to={localePath(locale, `/blog/${featured.slug}`)}
            className="group grid lg:grid-cols-12 gap-12 items-end"
          >
            <div className="lg:col-span-7 aspect-[16/10] bg-secondary border border-border rounded-sm overflow-hidden">
              <img
                src={featured.cover}
                alt={featured.title[locale]}
                width={1280}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="lg:col-span-5">
              <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                <span>{fmt(featured.date)}</span>
                <span>·</span>
                <span>{featured.readMin} {t(locale, "blog.minRead")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight group-hover:text-accent transition-colors mb-4">
                {featured.title[locale]}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {featured.excerpt[locale]}
              </p>
              <span className="inline-block mt-6 text-xs font-bold uppercase tracking-widest text-accent">
                {t(locale, "blog.readMore")} →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {rest.map((p) => (
            <Link
              to={localePath(locale, `/blog/${p.slug}`)}
              key={p.slug}
              className="bg-background hover:bg-card transition-colors group flex flex-col overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-border">
                <img
                  src={p.cover}
                  alt={p.title[locale]}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
              <div className="flex gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
                <span className="text-accent font-bold">{p.category[locale]}</span>
                <span>·</span>
                <span>{p.readMin} {t(locale, "blog.minRead")}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors leading-snug flex-1">
                {p.title[locale]}
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {fmt(p.date)}
              </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
