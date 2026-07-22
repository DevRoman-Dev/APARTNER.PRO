import type { Locale } from "./i18n";
import { localePath, LOCALES } from "./i18n";

const SITE = "APARTNER.PRO";

export interface PageMeta {
  title: string;
  description: string;
  path: string; // app-relative path without locale prefix, e.g. "/services"
  locale: Locale;
  ogType?: "website" | "article";
  ogImage?: string;
  noIndex?: boolean;
}

const localeTag: Record<Locale, string> = {
  en: "en",
  uk: "uk-UA",
  ru: "ru-RU",
};

export function pageHead(m: PageMeta) {
  const fullTitle = m.title.includes(SITE) ? m.title : `${m.title} — ${SITE}`;
  const canonical = localePath(m.locale, m.path);
  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: m.description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: m.description },
    { property: "og:type", content: m.ogType ?? "website" },
    { property: "og:url", content: canonical },
    { property: "og:locale", content: localeTag[m.locale] },
    { name: "twitter:card", content: m.ogImage ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: m.description },
  ];
  if (m.ogImage) {
    meta.push({ property: "og:image", content: m.ogImage });
    meta.push({ name: "twitter:image", content: m.ogImage });
  }
  if (m.noIndex) meta.push({ name: "robots", content: "noindex,nofollow" });

  const links: Array<Record<string, string>> = [
    { rel: "canonical", href: canonical },
    ...LOCALES.map((l) => ({
      rel: "alternate",
      hrefLang: localeTag[l],
      href: localePath(l, m.path),
    })),
    { rel: "alternate", hrefLang: "x-default", href: localePath("en", m.path) },
  ];

  return { meta, links };
}
