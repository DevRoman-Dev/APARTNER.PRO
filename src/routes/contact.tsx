import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/ContactPage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      locale: "en",
      path: "/contact",
      title: "Contact APARTNER.PRO — Get a Quote in 24 Hours",
      description:
        "Tell us about your project. We respond within 24 hours. Email, phone and message form.",
    }),
  component: () => (
    <SiteLayout locale="en">
      <ContactPage locale="en" />
    </SiteLayout>
  ),
});
