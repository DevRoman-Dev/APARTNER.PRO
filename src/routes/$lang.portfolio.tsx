import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/pages/PortfolioPage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const meta: Record<Locale, { title: string; description: string }> = {
  en: { title: "Portfolio", description: "Selected web and mobile projects." },
  uk: {
    title: "Портфоліо — Обрані веб- та мобільні проекти",
    description: "Обрані проекти: fintech, e-commerce, SaaS, логістика та healthcare. Laravel, PrestaShop, WordPress, React Native.",
  },
  ru: {
    title: "Портфолио — Избранные веб- и мобильные проекты",
    description: "Избранные проекты: fintech, e-commerce, SaaS, логистика и healthcare. Laravel, PrestaShop, WordPress, React Native.",
  },
};

export const Route = createFileRoute("/$lang/portfolio")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    return pageHead({ locale, path: "/portfolio", ...meta[locale] });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  return (
    <SiteLayout locale={locale}>
      <PortfolioPage locale={locale} />
    </SiteLayout>
  );
}
