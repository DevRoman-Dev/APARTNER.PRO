import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages/AboutPage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => pageHead({
    locale: "en",
    path: "/about",
    title: "About — APARTNER.PRO Web Development Studio",
    description: "Kyiv-based web development studio working globally since 2018. Official partner of Thirty Bees and Agile ServeX Inc.",
  }),
  component: () => (
    <SiteLayout locale="en">
      <AboutPage locale="en" />
    </SiteLayout>
  ),
});
