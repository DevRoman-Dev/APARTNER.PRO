import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/pages/BlogPage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      locale: "en",
      path: "/blog",
      title: "Blog — Web Development, E-commerce & SEO Insights",
      description:
        "Technical articles on Laravel, PrestaShop, WordPress, headless commerce, Core Web Vitals and conversion optimization.",
    }),
  component: () => (
    <SiteLayout locale="en">
      <BlogPage locale="en" />
    </SiteLayout>
  ),
});
