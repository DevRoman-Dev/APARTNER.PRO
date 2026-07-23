import { createFileRoute } from "@tanstack/react-router";
import { WeStandWithUkrainePage } from "@/components/pages/WeStandWithUkrainePage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const meta: Record<Locale, { title: string; description: string }> = {
  en: { title: "We stand with Ukraine!", description: "Our statement and support for Ukraine." },
  uk: {
    title: "Ми підтримуємо Україну!",
    description: "Наша заява та підтримка України.",
  },
  ru: {
    title: "Мы поддерживаем Украину!",
    description: "Наше заявление и поддержка Украины.",
  },
};

export const Route = createFileRoute("/$lang/info/we-stand-with-ukraine")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    return pageHead({ locale, path: "/info/we-stand-with-ukraine", ...meta[locale] });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  return (
    <SiteLayout locale={locale}>
      <WeStandWithUkrainePage locale={locale} />
    </SiteLayout>
  );
}
