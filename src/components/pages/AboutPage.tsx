import { type Locale, t } from "@/lib/i18n";
import { CtaSection } from "@/components/CtaSection";
import teamImg from "@/assets/about-team.jpg";

export function AboutPage({ locale }: { locale: Locale }) {
  const values = [
    { t: t(locale, "about.value.1.t"), d: t(locale, "about.value.1.d"), n: "01" },
    { t: t(locale, "about.value.2.t"), d: t(locale, "about.value.2.d"), n: "02" },
    { t: t(locale, "about.value.3.t"), d: t(locale, "about.value.3.d"), n: "03" },
  ];
  const stats = [
    { value: "7+", label: t(locale, "about.stats.years") },
    { value: "120+", label: t(locale, "about.stats.projects") },
    { value: "90%", label: t(locale, "about.stats.clients") },
    { value: "24", label: t(locale, "about.stats.countries") },
  ];
  return (
    <>
      <section className="pt-20 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
              {t(locale, "about.eyebrow")}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-4 mb-8 leading-[0.95]">
              {t(locale, "about.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {t(locale, "about.lead")}
            </p>
          </div>
          <div className="lg:col-span-5 aspect-[4/3] border border-border rounded-sm overflow-hidden bg-secondary">
            <img
              src={teamImg}
              alt={t(locale, "about.title")}
              fetchPriority="high"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8">
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-accent mb-2">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-12">
            {t(locale, "about.values.title")}
          </h2>
          <div className="grid gap-px bg-border border border-border rounded-sm overflow-hidden md:grid-cols-3">
            {values.map((v) => (
              <div key={v.n} className="bg-background p-8">
                <span className="font-mono text-[10px] text-accent font-bold">{v.n}/</span>
                <h3 className="text-xl font-bold mt-4 mb-4">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection locale={locale} />
    </>
  );
}
