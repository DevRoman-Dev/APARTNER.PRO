import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { SiteLayout } from "@/components/SiteLayout";
import { getService, SERVICES } from "@/lib/content";
import { getServiceExtras } from "@/lib/service-extras";
import { pageHead } from "@/lib/seo";
import { localePath } from "@/lib/i18n";

import { BASE_URL } from "@/lib/config";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    const others = SERVICES.filter((s) => s.slug !== params.slug).slice(0, 3);
    return { service, others };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const s = loaderData.service;
    const extras = getServiceExtras(params.slug);
    const base = pageHead({
      locale: "en",
      path: `/services/${params.slug}`,
      title: s.title.en,
      description: s.metaDescription.en,
    });
    const url = `${BASE_URL}${localePath("en", `/services/${params.slug}`)}`;
    const scripts: { type: string; children: string }[] = [];
    const serviceLd: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title.en,
      description: s.metaDescription.en,
      serviceType: s.title.en,
      provider: { "@type": "Organization", name: "APARTNER.PRO", url: BASE_URL },
      areaServed: "Worldwide",
      url,
    };
    if (extras) {
      serviceLd.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: extras.rating.value,
        reviewCount: extras.rating.count,
        bestRating: 5,
        worstRating: 1,
      };
      serviceLd.offers = { "@type": "Offer", priceCurrency: "USD", description: extras.startingFrom.en, url };
    }
    scripts.push({ type: "application/ld+json", children: JSON.stringify(serviceLd) });
    if (extras) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: extras.faq.en.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      });
    }
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
          { "@type": "ListItem", position: 3, name: s.title.en, item: url },
        ],
      }),
    });
    return { ...base, scripts };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { service, others } = Route.useLoaderData();
  return (
    <SiteLayout locale="en">
      <ServiceDetailPage locale="en" service={service} others={others} />
    </SiteLayout>
  );
}
