import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { isLocale } from "@/lib/i18n";
import { SiteLayout } from "@/components/SiteLayout";
import { NotFoundPage } from "@/components/pages/NotFoundPage";
import type { Locale } from "@/lib/i18n";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.lang) || params.lang === "en") throw notFound();
  },
  notFoundComponent: () => {
    const { lang } = Route.useParams();
    const locale = (isLocale(lang) ? lang : "en") as Locale;
    return (
      <SiteLayout locale={locale}>
        <NotFoundPage locale={locale} />
      </SiteLayout>
    );
  },
  component: () => <Outlet />,
});
