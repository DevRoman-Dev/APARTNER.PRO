import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Services — Laravel, PrestaShop, WordPress, Mobile, SEO",
    description: "Full-cycle web development services.",
  },
  uk: {
    title: "Послуги — Laravel, PrestaShop, WordPress, мобільні застосунки, SEO",
    description:
      "Повний цикл веб-розробки: Laravel, CakePHP, PrestaShop, WordPress, мобільні застосунки, UX/UI дизайн та технічне SEO.",
  },
  ru: {
    title: "Услуги — Laravel, PrestaShop, WordPress, мобильные, SEO",
    description:
      "Полный цикл веб-разработки: Laravel, CakePHP, PrestaShop, WordPress, мобильные приложения, UX/UI дизайн и техническое SEO.",
  },
};

export const Route = createFileRoute("/$lang/services/")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    return pageHead({ locale, path: "/services", ...meta[locale] });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  return (
    <SiteLayout locale={locale}>
      <ServicesPage locale={locale} />
    </SiteLayout>
  );
}
