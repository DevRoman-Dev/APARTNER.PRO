import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/pages/BlogPage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const meta: Record<Locale, { title: string; description: string }> = {
  en: { title: "Blog", description: "Insights on web development and SEO." },
  uk: {
    title: "Блог — Статті про веб-розробку, e-commerce та SEO",
    description: "Технічні статті про Laravel, PrestaShop, WordPress, headless commerce, Core Web Vitals та оптимізацію конверсії.",
  },
  ru: {
    title: "Блог — Статьи о веб-разработке, e-commerce и SEO",
    description: "Технические статьи о Laravel, PrestaShop, WordPress, headless commerce, Core Web Vitals и оптимизации конверсии.",
  },
};

export const Route = createFileRoute("/$lang/blog/")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    return pageHead({ locale, path: "/blog", ...meta[locale] });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  return (
    <SiteLayout locale={locale}>
      <BlogPage locale={locale} />
    </SiteLayout>
  );
}
