import { createFileRoute } from "@tanstack/react-router";
import { WeStandWithUkrainePage } from "@/components/pages/WeStandWithUkrainePage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/info/we-stand-with-ukraine")({
  head: () => pageHead({
    locale: "en",
    path: "/info/we-stand-with-ukraine",
    title: "We stand with Ukraine! — APARTNER.PRO",
    description: "Our statement and support for Ukraine.",
  }),
  component: () => (
    <SiteLayout locale="en">
      <WeStandWithUkrainePage locale="en" />
    </SiteLayout>
  ),
});
