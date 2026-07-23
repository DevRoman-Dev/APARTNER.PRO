import { Link } from "@tanstack/react-router";
import { type Locale, localePath, t } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link
            to={localePath(locale, "/")}
            className="font-extrabold tracking-tighter text-xl"
          >
            APARTNER<span className="text-accent">.</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            {t(locale, "footer.tagline")}
          </p>
        </div>
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">
            {t(locale, "footer.nav")}
          </span>
          <ul className="space-y-2 text-sm">
            <li><Link to={localePath(locale, "/services")} className="hover:text-accent">{t(locale, "nav.services")}</Link></li>
            <li><Link to={localePath(locale, "/portfolio")} className="hover:text-accent">{t(locale, "nav.portfolio")}</Link></li>
            <li><Link to={localePath(locale, "/blog")} className="hover:text-accent">{t(locale, "nav.blog")}</Link></li>
            <li><Link to={localePath(locale, "/about")} className="hover:text-accent">{t(locale, "nav.about")}</Link></li>
          </ul>
        </div>
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">
            {t(locale, "footer.contact")}
          </span>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:info@apartner.pro" className="hover:text-accent">info@apartner.pro</a></li>
            <li><a href="tel:+380938800822" className="hover:text-accent">+380 93 88 00 822</a></li>
            <li className="text-muted-foreground">{t(locale, "contact.address")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            © {year} APARTNER.PRO — {t(locale, "footer.rights")}
          </p>
          <div className="flex gap-6 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            <a href="#" className="hover:text-foreground">{t(locale, "footer.privacy")}</a>
            <a href="#" className="hover:text-foreground">{t(locale, "footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
