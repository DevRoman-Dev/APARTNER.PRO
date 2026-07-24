import { Link } from "@tanstack/react-router";
import { type Locale, localePath, t } from "@/lib/i18n";
import { POSTS } from "@/lib/content";

export function HomeBlogSection({ locale }: { locale: Locale }) {
  return (
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
  );
}
