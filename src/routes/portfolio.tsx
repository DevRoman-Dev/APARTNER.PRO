import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/pages/PortfolioPage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () => pageHead({
    locale: "en",
    path: "/portfolio",
    title: "Portfolio — Selected Web & Mobile Projects",
    description: "Selected projects: fintech, e-commerce, SaaS, logistics and healthcare. Laravel, PrestaShop, WordPress, React Native.",
  }),
  component: () => (
    <SiteLayout locale="en">
      <PortfolioPage locale="en" />
    </SiteLayout>
  ),
});
