import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      locale: "en",
      path: "/services",
      title: "Services — Laravel, PrestaShop, WordPress, Mobile, SEO",
      description:
        "Full-cycle web development services: Laravel & CakePHP, PrestaShop modules, WordPress, mobile apps, UX/UI design and technical SEO.",
    }),
  component: () => (
    <SiteLayout locale="en">
      <ServicesPage locale="en" />
    </SiteLayout>
  ),
});
