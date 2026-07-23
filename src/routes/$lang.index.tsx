import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { BASE_URL } from "@/lib/config";

const titles: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "APARTNER.PRO — Laravel, PrestaShop & WordPress Development Studio",
    description: "Web development studio since 2018. Laravel, PrestaShop, WordPress and mobile apps that convert.",
  },
  uk: {
    title: "APARTNER.PRO — Студія розробки Laravel, PrestaShop, WordPress",
    description: "Студія веб-розробки з 2018 року. Laravel, PrestaShop, WordPress, мобільні застосунки та дизайн з фокусом на конверсію. Безкоштовний прорахунок за 24 години.",
  },
  ru: {
    title: "APARTNER.PRO — Студия разработки Laravel, PrestaShop, WordPress",
    description: "Студия веб-разработки с 2018 года. Laravel, PrestaShop, WordPress, мобильные приложения и дизайн с фокусом на конверсию. Бесплатный расчёт за 24 часа.",
  },
};

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    return pageHead({ 
      locale, 
      path: "/", 
      ...titles[locale],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "APARTNER.PRO",
        url: BASE_URL,
        logo: `${BASE_URL}/icon.svg`,
        email: "info@apartner.pro",
        telephone: "+380938800822",
        sameAs: ["https://www.linkedin.com/company/apartner-pro"],
      }
    });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  return (
    <SiteLayout locale={locale}>
      <HomePage locale={locale} />
    </SiteLayout>
  );
}
