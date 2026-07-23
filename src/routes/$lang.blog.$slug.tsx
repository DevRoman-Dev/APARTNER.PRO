import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPostPage";
import { SiteLayout } from "@/components/SiteLayout";
import { getPost } from "@/lib/content";
import { pageHead } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { BASE_URL } from "@/lib/config";

export const Route = createFileRoute("/$lang/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const locale = params.lang as Locale;
    const p = loaderData.post;
    return pageHead({
      locale,
      path: `/blog/${params.slug}`,
      title: p.title[locale],
      description: p.metaDescription[locale],
      ogType: "article",
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title[locale],
          description: p.metaDescription[locale],
          datePublished: p.date,
          inLanguage: locale,
          author: { "@type": "Organization", name: "APARTNER.PRO", url: BASE_URL },
          publisher: { "@type": "Organization", name: "APARTNER.PRO", logo: { "@type": "ImageObject", url: `${BASE_URL}/icon.svg` } },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: p.title[locale] }
          ]
        }
      ]
    });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout locale={locale}>
      <BlogPostPage locale={locale} post={post} />
    </SiteLayout>
  );
}
