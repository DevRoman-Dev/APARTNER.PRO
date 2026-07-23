import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      locale: "en",
      path: "/",
      title: "APARTNER.PRO — Laravel, PrestaShop & WordPress Development Studio",
      description:
        "Web development studio since 2018. Laravel, PrestaShop, WordPress, mobile apps and UX/UI design that converts. Get a free quote in 24h.",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "APARTNER.PRO",
          url: "https://apartner.pro",
          email: "info@apartner.pro",
          telephone: "+380938800822",
          sameAs: ["https://www.linkedin.com/company/apartner-pro"],
        }),
      },
    ],
  }),
  component: () => (
    <SiteLayout locale="en">
      <HomePage locale="en" />
    </SiteLayout>
  ),
});
