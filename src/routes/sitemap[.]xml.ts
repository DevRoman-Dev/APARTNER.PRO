import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { LOCALES, localePath } from "@/lib/i18n";
import { SERVICES, POSTS } from "@/lib/content";

const BASE_URL = "https://apartner.pro";

const staticPaths = ["/", "/services", "/portfolio", "/blog", "/about", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: { path: string; changefreq: string; priority: string }[] = [];

        for (const locale of LOCALES) {
          for (const p of staticPaths) {
            entries.push({
              path: localePath(locale, p),
              changefreq: p === "/" ? "weekly" : "monthly",
              priority: p === "/" ? "1.0" : "0.8",
            });
          }
          for (const s of SERVICES) {
            entries.push({
              path: localePath(locale, `/services/${s.slug}`),
              changefreq: "monthly",
              priority: "0.7",
            });
          }
          for (const p of POSTS) {
            entries.push({
              path: localePath(locale, `/blog/${p.slug}`),
              changefreq: "monthly",
              priority: "0.6",
            });
          }
        }

        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
