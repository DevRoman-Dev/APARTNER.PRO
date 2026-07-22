import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPostPage";
import { SiteLayout } from "@/components/SiteLayout";
import { getPost } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const p = loaderData.post;
    return {
      ...pageHead({
        locale: "en",
        path: `/blog/${params.slug}`,
        title: p.title.en,
        description: p.metaDescription.en,
        ogType: "article",
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title.en,
            description: p.metaDescription.en,
            datePublished: p.date,
            author: { "@type": "Organization", name: "APARTNER.PRO" },
          }),
        },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout locale="en">
      <BlogPostPage locale="en" post={post} />
    </SiteLayout>
  );
}
