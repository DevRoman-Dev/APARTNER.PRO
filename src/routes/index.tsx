import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { SiteLayout } from "@/components/SiteLayout";
import { pageHead } from "@/lib/seo";
import { BASE_URL } from "@/lib/config";

import { useEffect } from "react";

function RootPage() {
  useEffect(() => {
    const savedLocale = localStorage.getItem("preferred_locale");
    // If user has a saved non-English locale and they landed precisely on "/", redirect them.
    if (savedLocale && savedLocale !== "en" && window.location.pathname === "/") {
      window.location.replace(`/${savedLocale}`);
    }
  }, []);

  return (
    <SiteLayout locale="en">
      <HomePage locale="en" />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/")({
  head: () => pageHead({
    locale: "en",
    path: "/",
    title: "APARTNER.PRO — Laravel, PrestaShop & WordPress Development Studio",
    description: "Web development studio since 2018. Laravel, PrestaShop, WordPress, mobile apps and UX/UI design that converts. Get a free quote in 24h.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "APARTNER.PRO",
      url: BASE_URL,
      logo: `${BASE_URL}/icon.svg`,
      email: "info@apartner.pro",
      telephone: "+380938800822",
      sameAs: ["https://www.linkedin.com/company/apartner/"],
    },
  }),
  component: RootPage,
});
