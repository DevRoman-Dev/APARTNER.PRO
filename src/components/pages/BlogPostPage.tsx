import { Link } from "@tanstack/react-router";
import { type Locale, localePath, t } from "@/lib/i18n";
import { type BlogPost, POSTS } from "@/lib/content";
import { CtaSection } from "@/components/CtaSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TableOfContents } from "@/components/ui/TableOfContents";

/** Turns a heading text into a URL-safe anchor id (works for Cyrillic too) */
function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\u0400-\u04FF-]/g, ""); // keep ASCII words + Cyrillic + hyphens
}

/** Extracts all ## headings from a markdown body string */
export function extractHeadings(body: string): Array<{ id: string; label: string }> {
  return body
    .trim()
    .split(/\n\n+/)
    .filter((b) => b.startsWith("## "))
    .map((b) => {
      const label = b.slice(3).trim();
      return { id: slugify(label), label };
    });
}

function renderBody(body: string) {
  const blocks = body.trim().split(/\n\n+/);
  return blocks.map((b, i) => {
    if (b.startsWith("## ")) {
      const label = b.slice(3).trim();
      const id = slugify(label);
      return (
        <h2
          key={i}
          id={id}
          className="text-2xl md:text-3xl font-extrabold tracking-tight mt-12 mb-4 scroll-mt-24"
        >
          {label}
        </h2>
      );
    }
    if (b.split("\n").every((line) => /^\s*[-\d.]/.test(line))) {
      const items = b.split("\n").map((line) => line.replace(/^\s*(?:-|\d+\.)\s*/, ""));
      const ordered = /^\d/.test(b.trim());
      const ListTag = ordered ? "ol" : "ul";
      return (
        <ListTag key={i} className={`${ordered ? "list-decimal" : "list-disc"} pl-6 space-y-2 my-4 text-foreground/85`}>
          {items.map((it, j) => <li key={j} className="leading-relaxed">{it}</li>)}
        </ListTag>
      );
    }
    return (
      <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/85 my-4">
        {b}
      </p>
    );
  });
}

export function BlogPostPage({ locale, post }: { locale: Locale; post: BlogPost }) {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString(
      locale === "en" ? "en-US" : locale === "uk" ? "uk-UA" : "ru-RU",
      { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" },
    );
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const headings = extractHeadings(post.body[locale]);

  return (
    <>
      <article className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Breadcrumbs
              locale={locale}
              items={[
                { label: t(locale, "blog.title"), href: localePath(locale, "/blog") },
                { label: post.title[locale] }
              ]}
            />
            <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
              <span className="text-accent font-bold">{post.category[locale]}</span>
              <span>·</span>
              <span>{fmt(post.date)}</span>
              <span>·</span>
              <span>{post.readMin} {t(locale, "blog.minRead")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-8">
              {post.title[locale]}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 border-l-2 border-accent pl-6">
              {post.excerpt[locale]}
            </p>
            <div className="aspect-[16/9] overflow-hidden border border-border rounded-sm mb-12 bg-secondary">
              <img
                src={post.cover}
                alt={post.title[locale]}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Two-column layout: article + sticky ToC */}
          <div className="grid lg:grid-cols-[1fr_260px] gap-16 items-start">
            <div className="prose-content min-w-0">
              {renderBody(post.body[locale])}
            </div>

            {headings.length > 0 && (
              <aside className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto">
                <TableOfContents headings={headings} locale={locale} />
              </aside>
            )}
          </div>
        </div>
      </article>

      <section className="py-16 border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-8">
            {t(locale, "blog.related")}
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {related.map((p) => (
              <Link
                to={localePath(locale, `/blog/${p.slug}`)}
                key={p.slug}
                className="bg-background p-6 hover:bg-card transition-colors group"
              >
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">
                  {p.category[locale]}
                </span>
                <h3 className="text-lg font-bold mt-3 group-hover:text-accent transition-colors leading-snug">
                  {p.title[locale]}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
