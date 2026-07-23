import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

const meta: Record<Locale, { title: string; description: string }> = {
  en: { title: "Terms of Service", description: "APARTNER.PRO Terms of Service." },
  uk: { title: "Умови використання", description: "Умови використання APARTNER.PRO." },
  ru: { title: "Условия использования", description: "Условия использования APARTNER.PRO." },
};

export const Route = createFileRoute("/$lang/terms")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    return pageHead({ locale, path: "/terms", ...meta[locale] });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  return (
    <SiteLayout locale={locale}>
      <main className="max-w-3xl mx-auto px-6 py-24 min-h-[60vh]">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">
          {t(locale, "footer.terms")}
        </h1>
        <div className="prose prose-invert prose-stone">
          <p className="text-muted-foreground leading-relaxed">
            {locale === "en"
              ? "Last updated: July 2026. By accessing and using APARTNER.PRO, you accept and agree to be bound by the terms and provision of this agreement."
              : locale === "uk"
                ? "Останнє оновлення: Липень 2026. Використовуючи сайт APARTNER.PRO, ви погоджуєтеся з цими умовами використання."
                : "Последнее обновление: Июль 2026. Используя сайт APARTNER.PRO, вы соглашаетесь с этими условиями использования."}
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            {locale === "en"
              ? "All content on this website, including text, graphics, logos, and code, is the property of APARTNER.PRO and protected by copyright laws. You may not reproduce or distribute any content without explicit permission."
              : locale === "uk"
                ? "Увесь контент на цьому сайті, включаючи тексти, графіку, логотипи та код, є власністю APARTNER.PRO та захищений законами про авторське право. Забороняється відтворювати або розповсюджувати контент без явного дозволу."
                : "Весь контент на этом сайте, включая тексты, графику, логотипы и код, является собственностью APARTNER.PRO и защищен законами об авторском праве. Запрещается воспроизводить или распространять контент без явного разрешения."}
          </p>
        </div>
      </main>
    </SiteLayout>
  );
}
