import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

const meta: Record<Locale, { title: string; description: string }> = {
  en: { title: "Privacy Policy", description: "APARTNER.PRO Privacy Policy." },
  uk: { title: "Політика конфіденційності", description: "Політика конфіденційності APARTNER.PRO." },
  ru: { title: "Политика конфиденциальности", description: "Политика конфиденциальности APARTNER.PRO." },
};

export const Route = createFileRoute("/$lang/privacy")({
  head: ({ params }) => {
    const locale = params.lang as Locale;
    return pageHead({ locale, path: "/privacy", ...meta[locale] });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const locale = Route.useParams().lang as Locale;
  return (
    <SiteLayout locale={locale}>
      <main className="max-w-3xl mx-auto px-6 py-24 min-h-[60vh]">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">
          {t(locale, "footer.privacy")}
        </h1>
        <div className="prose prose-invert prose-stone">
          <p className="text-muted-foreground leading-relaxed">
            {locale === "en"
              ? "Last updated: July 2026. This Privacy Policy outlines how APARTNER.PRO collects, uses, and protects your personal information."
              : locale === "uk"
                ? "Останнє оновлення: Липень 2026. Ця Політика конфіденційності описує, як APARTNER.PRO збирає, використовує та захищає вашу особисту інформацію."
                : "Последнее обновление: Июль 2026. Эта Политика конфиденциальности описывает, как APARTNER.PRO собирает, использует и защищает вашу личную информацию."}
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            {locale === "en"
              ? "We do not sell your personal data. Any information submitted via our contact forms is used solely for the purpose of communicating with you regarding your project inquiry."
              : locale === "uk"
                ? "Ми не продаємо ваші персональні дані. Будь-яка інформація, надіслана через наші контактні форми, використовується виключно для зв'язку з вами щодо вашого запиту."
                : "Мы не продаем ваши персональные данные. Любая информация, отправленная через наши контактные формы, используется исключительно для связи с вами по вашему запросу."}
          </p>
        </div>
      </main>
    </SiteLayout>
  );
}
