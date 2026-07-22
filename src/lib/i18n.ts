export type Locale = "en" | "uk" | "ru";
export const LOCALES: Locale[] = ["en", "uk", "ru"];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "uk" || value === "ru";
}

/** Build a path for a given locale. EN has no prefix. */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return clean === "/" ? "/" : clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

type Dict = Record<string, string>;

const en: Dict = {
  "nav.services": "Services",
  "nav.portfolio": "Portfolio",
  "nav.blog": "Blog",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.cta": "Start Project",

  "hero.eyebrow": "Digital Engineering Studio · Since 2018",
  "hero.title.1": "WE BUILD THE",
  "hero.title.2": "SYSTEMS THAT",
  "hero.title.3": "SCALE YOUR BUSINESS.",
  "hero.subtitle": "Laravel, PrestaShop, WordPress and custom web apps for ambitious teams. Engineered for performance, designed for conversion.",
  "hero.cta.primary": "Start a Project",
  "hero.cta.secondary": "View Portfolio",
  "hero.trust": "Trusted by 120+ businesses worldwide",

  "trust.label": "Technical Stack",

  "services.eyebrow": "Core Expertise",
  "services.title": "What we do",
  "services.intro": "We don't just ship code. We design the technical foundations that drive rapid growth and sustainable conversion.",
  "services.exploreAll": "Explore all services",
  "services.cta": "Request a quote",

  "portfolio.title": "Selected Works",
  "portfolio.vol": "[ VOL. 2025 ]",
  "portfolio.viewAll": "View all projects",
  "portfolio.explore": "Explore",

  "blog.title": "Insights",
  "blog.intro": "Technical breakdowns on web architecture, e-commerce growth and search visibility.",
  "blog.viewAll": "View All Posts",
  "blog.readMore": "Read article",
  "blog.minRead": "min read",
  "blog.related": "Related articles",

  "cta.title.1": "READY TO BUILD",
  "cta.title.2": "SOMETHING",
  "cta.title.3": "EXCEPTIONAL?",
  "cta.subtitle": "Tell us about your project. We reply within 24 hours.",
  "cta.book": "Book a Consultation",
  "cta.pricing": "Get Pricing",

  "footer.tagline": "Engineering digital products since 2018.",
  "footer.nav": "Navigation",
  "footer.legal": "Legal",
  "footer.contact": "Contact",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",
  "footer.rights": "All rights reserved.",

  "about.title": "About APARTNER.PRO",
  "about.eyebrow": "Studio",
  "about.lead": "We are a team of senior developers and designers based in Kyiv, working with clients across Europe and the US since 2018. Official partner of Thirty Bees and Agile ServeX Inc.",
  "about.values.title": "How we work",
  "about.value.1.t": "Engineering first",
  "about.value.1.d": "Clean architecture, typed code, automated tests. Your platform should be a competitive advantage, not technical debt.",
  "about.value.2.t": "Conversion focused",
  "about.value.2.d": "Every page, every flow, every component is measured against business outcomes — revenue, leads, retention.",
  "about.value.3.t": "Long-term partnership",
  "about.value.3.d": "We support what we build. 90% of our clients return for the next project. That's our quality metric.",
  "about.stats.years": "Years in business",
  "about.stats.projects": "Projects delivered",
  "about.stats.clients": "Returning clients",
  "about.stats.countries": "Countries",

  "contact.title": "Let's talk",
  "contact.eyebrow": "Contact",
  "contact.lead": "Tell us about your project. We respond within 24 hours.",
  "contact.form.name": "Your name",
  "contact.form.email": "Email",
  "contact.form.company": "Company",
  "contact.form.budget": "Budget",
  "contact.form.message": "Tell us about your project",
  "contact.form.submit": "Send message",
  "contact.form.success": "Thanks! We'll be in touch within 24 hours.",
  "contact.email": "info@apartner.pro",
  "contact.phone": "+380 93 88 00 822",
  "contact.address": "Kyiv, Ukraine — Remote worldwide",
};

const uk: Dict = {
  "nav.services": "Послуги",
  "nav.portfolio": "Портфоліо",
  "nav.blog": "Блог",
  "nav.about": "Про нас",
  "nav.contact": "Контакти",
  "nav.cta": "Розпочати проект",

  "hero.eyebrow": "Студія цифрової інженерії · З 2018",
  "hero.title.1": "МИ СТВОРЮЄМО",
  "hero.title.2": "СИСТЕМИ, ЩО",
  "hero.title.3": "МАСШТАБУЮТЬ БІЗНЕС.",
  "hero.subtitle": "Розробка на Laravel, PrestaShop, WordPress та індивідуальні веб-додатки для амбітних команд. Швидкість, конверсія, надійність.",
  "hero.cta.primary": "Розпочати проект",
  "hero.cta.secondary": "Дивитись портфоліо",
  "hero.trust": "Нам довіряють 120+ компаній у світі",

  "trust.label": "Технологічний стек",

  "services.eyebrow": "Ключова експертиза",
  "services.title": "Що ми робимо",
  "services.intro": "Ми не просто пишемо код. Ми проектуємо технічну основу, що забезпечує швидке зростання та стабільну конверсію.",
  "services.exploreAll": "Усі послуги",
  "services.cta": "Запитати ціну",

  "portfolio.title": "Обрані роботи",
  "portfolio.vol": "[ ВИП. 2025 ]",
  "portfolio.viewAll": "Усі проекти",
  "portfolio.explore": "Детальніше",

  "blog.title": "Статті",
  "blog.intro": "Технічні розбори з веб-архітектури, e-commerce та SEO.",
  "blog.viewAll": "Усі статті",
  "blog.readMore": "Читати статтю",
  "blog.minRead": "хв читання",
  "blog.related": "Схожі статті",

  "cta.title.1": "ГОТОВІ СТВОРИТИ",
  "cta.title.2": "ЩОСЬ",
  "cta.title.3": "ВИНЯТКОВЕ?",
  "cta.subtitle": "Розкажіть про ваш проект. Відповідаємо протягом 24 годин.",
  "cta.book": "Замовити консультацію",
  "cta.pricing": "Дізнатись ціну",

  "footer.tagline": "Створюємо цифрові продукти з 2018 року.",
  "footer.nav": "Навігація",
  "footer.legal": "Юридичне",
  "footer.contact": "Контакти",
  "footer.privacy": "Приватність",
  "footer.terms": "Умови",
  "footer.rights": "Всі права захищені.",

  "about.title": "Про APARTNER.PRO",
  "about.eyebrow": "Студія",
  "about.lead": "Ми — команда сеньйор-розробників та дизайнерів з Києва. Працюємо з клієнтами по Європі та США з 2018 року. Офіційний партнер Thirty Bees та Agile ServeX Inc.",
  "about.values.title": "Як ми працюємо",
  "about.value.1.t": "Інженерія в основі",
  "about.value.1.d": "Чиста архітектура, типізований код, автотести. Ваша платформа має бути перевагою, а не технічним боргом.",
  "about.value.2.t": "Фокус на конверсії",
  "about.value.2.d": "Кожна сторінка, кожен flow вимірюється у бізнес-результатах — дохід, ліди, утримання.",
  "about.value.3.t": "Довгострокове партнерство",
  "about.value.3.d": "Ми супроводжуємо те, що створюємо. 90% клієнтів повертаються за наступним проектом.",
  "about.stats.years": "Років на ринку",
  "about.stats.projects": "Реалізованих проектів",
  "about.stats.clients": "Повторних клієнтів",
  "about.stats.countries": "Країн",

  "contact.title": "Поговоримо",
  "contact.eyebrow": "Контакти",
  "contact.lead": "Розкажіть про ваш проект. Відповідь протягом 24 годин.",
  "contact.form.name": "Ваше ім'я",
  "contact.form.email": "Email",
  "contact.form.company": "Компанія",
  "contact.form.budget": "Бюджет",
  "contact.form.message": "Опишіть проект",
  "contact.form.submit": "Надіслати",
  "contact.form.success": "Дякуємо! Зв'яжемось протягом 24 годин.",
  "contact.email": "info@apartner.pro",
  "contact.phone": "+380 93 88 00 822",
  "contact.address": "Київ, Україна — Віддалено по всьому світу",
};

const ru: Dict = {
  "nav.services": "Услуги",
  "nav.portfolio": "Портфолио",
  "nav.blog": "Блог",
  "nav.about": "О нас",
  "nav.contact": "Контакты",
  "nav.cta": "Начать проект",

  "hero.eyebrow": "Студия цифрового инжиниринга · С 2018",
  "hero.title.1": "МЫ СОЗДАЁМ",
  "hero.title.2": "СИСТЕМЫ, КОТОРЫЕ",
  "hero.title.3": "МАСШТАБИРУЮТ БИЗНЕС.",
  "hero.subtitle": "Разработка на Laravel, PrestaShop, WordPress и индивидуальные веб-приложения для амбициозных команд. Скорость, конверсия, надёжность.",
  "hero.cta.primary": "Начать проект",
  "hero.cta.secondary": "Смотреть портфолио",
  "hero.trust": "Нам доверяют 120+ компаний по миру",

  "trust.label": "Технологический стек",

  "services.eyebrow": "Ключевая экспертиза",
  "services.title": "Что мы делаем",
  "services.intro": "Мы не просто пишем код. Мы проектируем техническую основу для быстрого роста и стабильной конверсии.",
  "services.exploreAll": "Все услуги",
  "services.cta": "Запросить цену",

  "portfolio.title": "Избранные работы",
  "portfolio.vol": "[ ВЫП. 2025 ]",
  "portfolio.viewAll": "Все проекты",
  "portfolio.explore": "Подробнее",

  "blog.title": "Статьи",
  "blog.intro": "Технические разборы по веб-архитектуре, e-commerce и SEO.",
  "blog.viewAll": "Все статьи",
  "blog.readMore": "Читать статью",
  "blog.minRead": "мин чтения",
  "blog.related": "Похожие статьи",

  "cta.title.1": "ГОТОВЫ СОЗДАТЬ",
  "cta.title.2": "ЧТО-ТО",
  "cta.title.3": "ИСКЛЮЧИТЕЛЬНОЕ?",
  "cta.subtitle": "Расскажите о вашем проекте. Ответим в течение 24 часов.",
  "cta.book": "Заказать консультацию",
  "cta.pricing": "Узнать цену",

  "footer.tagline": "Создаём цифровые продукты с 2018 года.",
  "footer.nav": "Навигация",
  "footer.legal": "Юридическое",
  "footer.contact": "Контакты",
  "footer.privacy": "Приватность",
  "footer.terms": "Условия",
  "footer.rights": "Все права защищены.",

  "about.title": "О APARTNER.PRO",
  "about.eyebrow": "Студия",
  "about.lead": "Мы — команда senior-разработчиков и дизайнеров из Киева. Работаем с клиентами по Европе и США с 2018 года. Официальный партнёр Thirty Bees и Agile ServeX Inc.",
  "about.values.title": "Как мы работаем",
  "about.value.1.t": "Инженерия в основе",
  "about.value.1.d": "Чистая архитектура, типизированный код, автотесты. Платформа должна быть преимуществом, а не техническим долгом.",
  "about.value.2.t": "Фокус на конверсии",
  "about.value.2.d": "Каждая страница, каждый flow измеряется бизнес-результатами — доход, лиды, удержание.",
  "about.value.3.t": "Долгосрочное партнёрство",
  "about.value.3.d": "Мы поддерживаем то, что создаём. 90% клиентов возвращаются за следующим проектом.",
  "about.stats.years": "Лет на рынке",
  "about.stats.projects": "Реализованных проектов",
  "about.stats.clients": "Повторных клиентов",
  "about.stats.countries": "Стран",

  "contact.title": "Поговорим",
  "contact.eyebrow": "Контакты",
  "contact.lead": "Расскажите о вашем проекте. Ответ в течение 24 часов.",
  "contact.form.name": "Ваше имя",
  "contact.form.email": "Email",
  "contact.form.company": "Компания",
  "contact.form.budget": "Бюджет",
  "contact.form.message": "Опишите проект",
  "contact.form.submit": "Отправить",
  "contact.form.success": "Спасибо! Свяжемся в течение 24 часов.",
  "contact.email": "info@apartner.pro",
  "contact.phone": "+380 93 88 00 822",
  "contact.address": "Киев, Украина — Удалённо по всему миру",
};

const dicts: Record<Locale, Dict> = { en, uk, ru };

export function t(locale: Locale, key: string): string {
  return dicts[locale][key] ?? dicts.en[key] ?? key;
}
