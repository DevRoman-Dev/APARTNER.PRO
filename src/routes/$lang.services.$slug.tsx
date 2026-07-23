import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { SiteLayout } from "@/components/SiteLayout";
import { getService, SERVICES } from "@/lib/content";
import { getServiceExtras } from "@/lib/service-extras";
import { pageHead } from "@/lib/seo";
import { localePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const SITE_URL = "https://apartner.lovable.app";

function buildJsonLd(locale: Locale, slug: string) {
  const service = getService(slug);
  const extras = getServiceExtras(slug);
  if (!service) return [];
  const url = `${SITE_URL}${localePath(locale, `/services/${slug}`)}`;
  const labels = {
    en: { home: "Home", services: "Services" },
    uk: { home: "Головна", services: "Послуги" },
    ru: { home: "Главная", services: "Услуги" },
  } as const;

  const scripts: { type: string; children: string }[] = [];

  const serviceLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title[locale],
    description: service.metaDescription[locale],
    serviceType: service.title[locale],
    provider: {
      "@type": "Organization",
      name: "APARTNER.PRO",
      url: SITE_URL,
    },
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
    serviceLd.offers = {
      "@type": "Offer",
      priceCurrency: "USD",
      price: undefined,
      description: extras.startingFrom[locale],
      url,
    };
  }
  scripts.push({ type: "application/ld+json", children: JSON.stringify(serviceLd) });

  if (extras) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: extras.faq[locale].map((f) => ({
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
        {
          "@type": "ListItem",
          position: 1,
          name: labels[locale].home,
          item: `${SITE_URL}${localePath(locale, "/")}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: labels[locale].services,
          item: `${SITE_URL}${localePath(locale, "/services")}`,
        },
        { "@type": "ListItem", position: 3, name: service.title[locale], item: url },
      ],
    }),
  });

  return scripts;
}

export const Route = createFileRoute("/$lang/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    const others = SERVICES.filter((s) => s.slug !== params.slug).slice(0, 3);
    return { service, others };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const locale = params.lang as Locale;
    const s = loaderData.service;
    const base = pageHead({
      locale,
      path: `/services/${params.slug}`,
      title: s.title[locale],
      description: s.metaDescription[locale],
    });
    return { ...base, scripts: buildJsonLd(locale, params.slug) };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  const { service, others } = Route.useLoaderData();
  return (
    <SiteLayout locale={locale}>
      <ServiceDetailPage locale={locale} service={service} others={others} />
    </SiteLayout>
  );
}
