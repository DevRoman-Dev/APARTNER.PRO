import { Link } from "@tanstack/react-router";
import { type Locale, localePath, t } from "@/lib/i18n";
import { ArrowRight, SearchX } from "lucide-react";
import { POSTS } from "@/lib/content";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const labels = {
    en: { title: "Page Not Found", desc: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.", backHome: "Back to Home", readBlog: "Read our latest articles" },
    uk: { title: "Сторінку не знайдено", desc: "Сторінка, яку ви шукаєте, могла бути видалена, перейменована або тимчасово недоступна.", backHome: "На головну", readBlog: "Останні статті блогу" },
    ru: { title: "Страница не найдена", desc: "Страница, которую вы ищете, могла быть удалена, переименована или временно недоступна.", backHome: "На главную", readBlog: "Последние статьи блога" },
  } as const;

  const l = labels[locale];
  const recentPosts = POSTS.slice(0, 3);

  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-secondary border border-border rounded-full mb-8">
          <SearchX className="size-10 text-muted-foreground" />
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 text-accent">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
          {l.title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          {l.desc}
        </p>
        
        <Link
          to={localePath(locale, "/")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-widest text-sm hover:translate-y-[-2px] transition-transform rounded-sm mb-20"
        >
          {l.backHome} <ArrowRight className="size-4" />
        </Link>

        <div className="text-left border-t border-border pt-16">
          <h3 className="text-lg font-bold uppercase tracking-widest mb-8 text-center text-muted-foreground">
            {l.readBlog}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((p) => (
              <Link
                key={p.slug}
                to={localePath(locale, `/blog/${p.slug}`)}
                className="block p-6 bg-secondary/50 border border-border hover:border-accent transition-colors rounded-sm group text-center md:text-left"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold mb-3 block">
                  {p.category[locale]}
                </span>
                <h4 className="text-base font-bold group-hover:text-accent transition-colors leading-snug">
                  {p.title[locale]}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
