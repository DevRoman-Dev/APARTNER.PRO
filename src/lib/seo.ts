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
  structuredData?: Record<string, any> | Array<Record<string, any>>;
}

const localeTag: Record<Locale, string> = {
  en: "en",
  uk: "uk-UA",
  ru: "ru-RU",
};
import { BASE_URL } from "./config";

export function pageHead(m: PageMeta) {
  const safeTitle = m.title || "APARTNER.PRO";
  const safeDescription = m.description || "";
  const fullTitle = safeTitle.includes(SITE) ? safeTitle : `${safeTitle} — ${SITE}`;
  const canonical = `${BASE_URL}${localePath(m.locale, m.path)}`;
  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: safeDescription },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: safeDescription },
    { property: "og:type", content: m.ogType ?? "website" },
    { property: "og:url", content: canonical },
    { property: "og:locale", content: localeTag[m.locale] || "en" },
    { name: "twitter:card", content: m.ogImage ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: safeDescription },
  ];
  if (m.ogImage) {
    const ogImgUrl = m.ogImage.startsWith("http") ? m.ogImage : `${BASE_URL}${m.ogImage}`;
    meta.push({ property: "og:image", content: ogImgUrl });
    meta.push({ name: "twitter:image", content: ogImgUrl });
  }
  if (m.noIndex) meta.push({ name: "robots", content: "noindex,nofollow" });

  const links: Array<Record<string, string>> = [
    { rel: "canonical", href: canonical },
    ...LOCALES.map((l) => ({
      rel: "alternate",
      hrefLang: localeTag[l],
      href: `${BASE_URL}${localePath(l, m.path)}`,
    })),
    { rel: "alternate", hrefLang: "x-default", href: `${BASE_URL}${localePath("en", m.path)}` },
  ];

  const scripts = [];
  if (m.structuredData) {
    const dataArray = Array.isArray(m.structuredData) ? m.structuredData : [m.structuredData];
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(dataArray.length === 1 ? dataArray[0] : dataArray),
    });
  }

  return { meta, links, scripts };
}
