import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/ContactPage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const meta: Record<Locale, { title: string; description: string }> = {
  en: { title: "Contact", description: "Get in touch." },
  uk: {
    title: "Контакти APARTNER.PRO — Прорахунок за 24 години",
    description:
      "Розкажіть про ваш проект. Відповідаємо протягом 24 годин. Email, телефон і форма зв'язку.",
  },
  ru: {
    title: "Контакты APARTNER.PRO — Расчёт за 24 часа",
    description:
      "Расскажите о вашем проекте. Отвечаем в течение 24 часов. Email, телефон и форма связи.",
  },
};

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    return pageHead({ locale, path: "/contact", ...meta[locale] });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  return (
    <SiteLayout locale={locale}>
      <ContactPage locale={locale} />
    </SiteLayout>
  );
}
