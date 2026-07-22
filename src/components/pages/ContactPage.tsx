import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { type Locale, t } from "@/lib/i18n";

export function ContactPage({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // demo only; in real life submit to a server function
    setSent(true);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
            {t(locale, "contact.eyebrow")}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-4 mb-6 leading-[0.95]">
            {t(locale, "contact.title")}
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            {t(locale, "contact.lead")}
          </p>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <Mail className="size-5 text-accent shrink-0 mt-1" />
              <a href={`mailto:${t(locale, "contact.email")}`} className="hover:text-accent">
                {t(locale, "contact.email")}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="size-5 text-accent shrink-0 mt-1" />
              <a href="tel:+380938800822" className="hover:text-accent">
                {t(locale, "contact.phone")}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="size-5 text-accent shrink-0 mt-1" />
              <span className="text-muted-foreground">{t(locale, "contact.address")}</span>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-secondary border border-border p-8 md:p-10 rounded-sm">
            {sent ? (
              <div className="flex flex-col items-center text-center py-12 gap-4">
                <div className="size-14 rounded-full bg-accent/10 grid place-items-center">
                  <Check className="size-7 text-accent" />
                </div>
                <p className="text-lg font-bold">{t(locale, "contact.form.success")}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label={t(locale, "contact.form.name")} name="name" required />
                  <Field label={t(locale, "contact.form.email")} name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label={t(locale, "contact.form.company")} name="company" />
                  <Field label={t(locale, "contact.form.budget")} name="budget" placeholder="$5k – $50k" />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    {t(locale, "contact.form.message")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-4 font-bold uppercase tracking-widest text-sm hover:translate-y-[-2px] transition-transform"
                >
                  {t(locale, "contact.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors text-base"
      />
    </div>
  );
}
