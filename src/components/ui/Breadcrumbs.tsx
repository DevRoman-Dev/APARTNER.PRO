import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

export interface BreadcrumbItem {
  label: string;
  href?: string; // Optional: If omitted, it's the current active page
}

export function Breadcrumbs({ locale, items }: { locale: Locale; items: BreadcrumbItem[] }) {
  const homeLabel = locale === "en" ? "Home" : locale === "uk" ? "Головна" : "Главная";
  
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
      <Link to={localePath(locale, "/")} className="hover:text-foreground transition-colors">
        {homeLabel}
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-3 w-3 opacity-50" />
          {item.href ? (
            <Link to={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
