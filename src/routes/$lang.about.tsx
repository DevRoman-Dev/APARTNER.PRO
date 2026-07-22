import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages/AboutPage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const meta: Record<Locale, { title: string; description: string }> = {
  en: { title: "About", description: "About APARTNER.PRO." },
  uk: {
    title: "Про студію APARTNER.PRO",
    description: "Київська студія веб-розробки, працює глобально з 2018 року. Офіційний партнер Thirty Bees та Agile ServeX Inc.",
  },
  ru: {
    title: "О студии APARTNER.PRO",
    description: "Киевская студия веб-разработки, работает глобально с 2018 года. Официальный партнёр Thirty Bees и Agile ServeX Inc.",
  },
};

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    return pageHead({ locale, path: "/about", ...meta[locale] });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  return (
    <SiteLayout locale={locale}>
      <AboutPage locale={locale} />
    </SiteLayout>
  );
}
