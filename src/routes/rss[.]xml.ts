import { createFileRoute } from "@tanstack/react-router";
import { LOCALES, localePath } from "@/lib/i18n";
import { POSTS } from "@/lib/content";
import { BASE_URL } from "@/lib/config";

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        let items = "";

        for (const post of POSTS) {
          const pubDate = new Date(post.date).toUTCString();
          for (const locale of LOCALES) {
            const url = `${BASE_URL}${localePath(locale, `/blog/${post.slug}`)}`;
            items += `
    <item>
      <title><![CDATA[${post.title[locale]}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description><![CDATA[${post.excerpt[locale]}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
          }
        }

        const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>APARTNER.PRO Blog</title>
    <link>${BASE_URL}</link>
    <description>Technical breakdowns on web architecture, e-commerce growth and search visibility.</description>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
