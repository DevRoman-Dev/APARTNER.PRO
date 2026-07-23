import { createFileRoute } from "@tanstack/react-router";
import { BASE_URL } from "@/lib/config";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const text = `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml`;

        return new Response(text, {
          headers: {
            "Content-Type": "text/plain",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
