"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";

interface Heading {
  id: string;
  label: string;
}

const tocLabel: Record<Locale, string> = {
  en: "Table of Contents",
  uk: "Зміст статті",
  ru: "Содержание",
};

export function TableOfContents({ headings, locale }: { headings: Heading[]; locale: Locale }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-4">
        {tocLabel[locale]}
      </p>
      <nav aria-label="Table of contents">
        <ul className="space-y-1">
          {headings.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    setActiveId(id);
                  }
                }}
                className={`block text-sm py-1.5 pl-3 border-l-2 transition-all duration-200 leading-snug ${
                  activeId === id
                    ? "border-accent text-foreground font-medium"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
