import type { Locale } from "./i18n";
import fintechxImg from "@/assets/portfolio/fintechx.io.png";
import luxeBoutiqueImg from "@/assets/portfolio/luxeboutique.com.png";
import archstudioImg from "@/assets/portfolio/archstudio.ua.png";
import medconnectImg from "@/assets/portfolio/medconnect.health.png";
import laravelSymfonyImg from "@/assets/blog/laravel-symfony.jpg";
import prestashopHeadlessImg from "@/assets/blog/prestashop-headless.jpg";
import coreWebVitalsImg from "@/assets/blog/core-web-vitals.jpg";
import wordpressBlocksImg from "@/assets/blog/wordpress-blocks.jpg";
import mobileLaunchImg from "@/assets/blog/mobile-launch.jpg";
import seoRankingsImg from "@/assets/blog/seo-rankings.jpg";


export interface ServiceItem {
  slug: string;
  num: string;
  icon: string;
  title: Record<Locale, string>;
  shortDesc: Record<Locale, string>;
  longDesc: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
  stack: string[];
  metaDescription: Record<Locale, string>;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "laravel-development",
    num: "01",
    icon: "Code2",
    title: {
      en: "Laravel & CakePHP Development",
      uk: "Розробка на Laravel та CakePHP",
      ru: "Разработка на Laravel и CakePHP",
    },
    shortDesc: {
      en: "Custom web services, admin panels and APIs built on Laravel — the best foundation for any startup.",
      uk: "Кастомні веб-сервіси, адмін-панелі та API на Laravel — найкраща основа для будь-якого стартапу.",
      ru: "Кастомные веб-сервисы, админ-панели и API на Laravel — лучшая основа для любого стартапа.",
    },
    longDesc: {
      en: "We build production-grade Laravel applications: SaaS platforms, internal tools, marketplaces and REST/GraphQL APIs. Clean architecture, automated tests, CI/CD, scalable from MVP to millions of users.",
      uk: "Створюємо Laravel-додатки production-рівня: SaaS-платформи, внутрішні інструменти, маркетплейси та REST/GraphQL API. Чиста архітектура, автотести, CI/CD, масштабування від MVP до мільйонів користувачів.",
      ru: "Создаём Laravel-приложения production-уровня: SaaS-платформы, внутренние инструменты, маркетплейсы и REST/GraphQL API. Чистая архитектура, автотесты, CI/CD, масштабирование от MVP до миллионов пользователей.",
    },
    deliverables: {
      en: ["Architecture & data modelling", "Backend API (REST/GraphQL)", "Admin dashboards", "Auth, billing, queues", "CI/CD & deployment", "Documentation & support"],
      uk: ["Архітектура та модель даних", "Backend API (REST/GraphQL)", "Адмін-панелі", "Авторизація, біллінг, черги", "CI/CD та деплой", "Документація і підтримка"],
      ru: ["Архитектура и модель данных", "Backend API (REST/GraphQL)", "Админ-панели", "Авторизация, биллинг, очереди", "CI/CD и деплой", "Документация и поддержка"],
    },
    stack: ["Laravel", "CakePHP", "PostgreSQL", "Redis", "Docker", "AWS"],
    metaDescription: {
      en: "Laravel & CakePHP development services for SaaS, marketplaces, and custom web apps. Production-grade architecture from MVP to scale.",
      uk: "Розробка на Laravel та CakePHP для SaaS, маркетплейсів та кастомних веб-додатків. Production-архітектура від MVP до масштабування.",
      ru: "Разработка на Laravel и CakePHP для SaaS, маркетплейсов и кастомных веб-приложений. Production-архитектура от MVP до масштабирования.",
    },
  },
  {
    slug: "prestashop-development",
    num: "02",
    icon: "ShoppingBag",
    title: {
      en: "PrestaShop Development & Modules",
      uk: "Розробка та модулі для PrestaShop",
      ru: "Разработка и модули для PrestaShop",
    },
    shortDesc: {
      en: "Official Thirty Bees partner. Custom themes, modules, migrations and ongoing support for PrestaShop stores.",
      uk: "Офіційний партнер Thirty Bees. Кастомні теми, модулі, міграції та підтримка PrestaShop-магазинів.",
      ru: "Официальный партнёр Thirty Bees. Кастомные темы, модули, миграции и поддержка PrestaShop-магазинов.",
    },
    longDesc: {
      en: "From single-store launches to multi-shop enterprise setups. Our modules are published on the official PrestaShop Addons Marketplace. We handle migrations, performance tuning, custom checkout flows, and ERP integrations.",
      uk: "Від запуску магазину до multi-shop enterprise-конфігурацій. Наші модулі опубліковані на офіційному PrestaShop Addons Marketplace. Робимо міграції, оптимізацію, кастомний checkout та інтеграції з ERP.",
      ru: "От запуска магазина до multi-shop enterprise-конфигураций. Наши модули опубликованы на официальном PrestaShop Addons Marketplace. Делаем миграции, оптимизацию, кастомный checkout и интеграции с ERP.",
    },
    deliverables: {
      en: ["Custom theme development", "Custom modules", "Migrations 1.6 → 8.x", "Performance optimization", "Payment & ERP integrations", "24/7 support"],
      uk: ["Розробка тем", "Кастомні модулі", "Міграції 1.6 → 8.x", "Оптимізація швидкості", "Платежі та ERP-інтеграції", "Підтримка 24/7"],
      ru: ["Разработка тем", "Кастомные модули", "Миграции 1.6 → 8.x", "Оптимизация скорости", "Платежи и ERP-интеграции", "Поддержка 24/7"],
    },
    stack: ["PrestaShop", "Thirty Bees", "Smarty", "Symfony", "MySQL"],
    metaDescription: {
      en: "PrestaShop development services: custom modules, themes, migrations, and optimization. Official Thirty Bees partner with marketplace-published modules.",
      uk: "Розробка PrestaShop: кастомні модулі, теми, міграції та оптимізація. Офіційний партнер Thirty Bees.",
      ru: "Разработка PrestaShop: кастомные модули, темы, миграции и оптимизация. Официальный партнёр Thirty Bees.",
    },
  },
  {
    slug: "wordpress-development",
    num: "03",
    icon: "Globe",
    title: {
      en: "WordPress & WooCommerce",
      uk: "WordPress та WooCommerce",
      ru: "WordPress и WooCommerce",
    },
    shortDesc: {
      en: "Custom themes, headless WordPress, WooCommerce stores and high-converting landing pages.",
      uk: "Кастомні теми, headless WordPress, WooCommerce-магазини та лендинги з високою конверсією.",
      ru: "Кастомные темы, headless WordPress, WooCommerce-магазины и лендинги с высокой конверсией.",
    },
    longDesc: {
      en: "We build WordPress sites that load fast and convert: custom Gutenberg blocks, ACF-powered editorial workflows, WooCommerce stores with custom checkout, and headless setups using Next.js or our TanStack stack.",
      uk: "Створюємо швидкі сайти на WordPress: кастомні Gutenberg-блоки, редакторські workflow на ACF, WooCommerce з кастомним checkout, headless-конфігурації на Next.js або TanStack.",
      ru: "Создаём быстрые сайты на WordPress: кастомные Gutenberg-блоки, редакторские workflow на ACF, WooCommerce с кастомным checkout, headless-конфигурации на Next.js или TanStack.",
    },
    deliverables: {
      en: ["Custom themes & blocks", "WooCommerce stores", "Headless WordPress", "Performance & Core Web Vitals", "SEO foundation", "Maintenance & security"],
      uk: ["Кастомні теми та блоки", "WooCommerce-магазини", "Headless WordPress", "Швидкість та Core Web Vitals", "SEO-основа", "Підтримка та безпека"],
      ru: ["Кастомные темы и блоки", "WooCommerce-магазины", "Headless WordPress", "Скорость и Core Web Vitals", "SEO-основа", "Поддержка и безопасность"],
    },
    stack: ["WordPress", "WooCommerce", "ACF", "Gutenberg", "Next.js"],
    metaDescription: {
      en: "WordPress and WooCommerce development: custom themes, headless setups, high-converting landing pages. Fast, SEO-optimized, scalable.",
      uk: "Розробка WordPress та WooCommerce: кастомні теми, headless, лендинги з високою конверсією. Швидко, SEO, масштабовано.",
      ru: "Разработка WordPress и WooCommerce: кастомные темы, headless, лендинги с высокой конверсией. Быстро, SEO, масштабируемо.",
    },
  },
  {
    slug: "mobile-apps",
    num: "04",
    icon: "Smartphone",
    title: {
      en: "Mobile Applications (iOS & Android)",
      uk: "Мобільні застосунки (iOS та Android)",
      ru: "Мобильные приложения (iOS и Android)",
    },
    shortDesc: {
      en: "Native and cross-platform apps with React Native and Swift/Kotlin. From MVP to App Store launch.",
      uk: "Нативні та кросплатформні застосунки на React Native і Swift/Kotlin. Від MVP до запуску в App Store.",
      ru: "Нативные и кросс-платформенные приложения на React Native и Swift/Kotlin. От MVP до запуска в App Store.",
    },
    longDesc: {
      en: "We design, build and ship mobile apps that users love. Offline-first architecture, push notifications, in-app payments, deep linking, and App Store / Play Store submission handled end-to-end.",
      uk: "Проектуємо, розробляємо та запускаємо мобільні застосунки, якими користуються щодня. Offline-архітектура, push-сповіщення, in-app платежі, deep links та публікація в App Store / Play Store.",
      ru: "Проектируем, разрабатываем и запускаем мобильные приложения, которыми пользуются каждый день. Offline-архитектура, push-уведомления, in-app платежи, deep links и публикация в App Store / Play Store.",
    },
    deliverables: {
      en: ["UX research & prototyping", "iOS & Android apps", "Backend API", "Push & analytics", "Store submission", "Updates & support"],
      uk: ["UX-дослідження та прототип", "iOS та Android-додатки", "Backend API", "Push та аналітика", "Публікація в сторах", "Оновлення та підтримка"],
      ru: ["UX-исследование и прототип", "iOS и Android-приложения", "Backend API", "Push и аналитика", "Публикация в сторах", "Обновления и поддержка"],
    },
    stack: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL"],
    metaDescription: {
      en: "Mobile app development for iOS and Android. React Native, Swift, Kotlin. From MVP to App Store launch.",
      uk: "Розробка мобільних застосунків iOS та Android. React Native, Swift, Kotlin. Від MVP до запуску.",
      ru: "Разработка мобильных приложений iOS и Android. React Native, Swift, Kotlin. От MVP до запуска.",
    },
  },
  {
    slug: "ux-ui-design",
    num: "05",
    icon: "Palette",
    title: {
      en: "UX/UI Design & Branding",
      uk: "UX/UI дизайн та брендинг",
      ru: "UX/UI дизайн и брендинг",
    },
    shortDesc: {
      en: "Interface design rooted in research. Conversion-driven, accessible, and visually distinctive.",
      uk: "Дизайн інтерфейсів на основі досліджень. З фокусом на конверсію, доступний та візуально виразний.",
      ru: "Дизайн интерфейсов на основе исследований. С фокусом на конверсию, доступный и визуально выразительный.",
    },
    longDesc: {
      en: "We design products that look premium and convert. User research, information architecture, design systems in Figma, prototypes, and developer handoff with tokens that map cleanly to code.",
      uk: "Створюємо продукти, які виглядають преміально та конвертують. Дослідження користувачів, IA, дизайн-системи у Figma, прототипи та handoff з токенами під розробку.",
      ru: "Создаём продукты, которые выглядят премиально и конвертируют. Исследование пользователей, IA, дизайн-системы во Figma, прототипы и handoff с токенами под разработку.",
    },
    deliverables: {
      en: ["User research & personas", "Wireframes & prototypes", "Visual design", "Design system", "Brand identity", "Developer handoff"],
      uk: ["Дослідження та персонажі", "Wireframe та прототипи", "Візуальний дизайн", "Дизайн-система", "Брендинг", "Handoff для розробників"],
      ru: ["Исследование и персонажи", "Wireframe и прототипы", "Визуальный дизайн", "Дизайн-система", "Брендинг", "Handoff для разработчиков"],
    },
    stack: ["Figma", "Framer", "Adobe Suite", "Webflow"],
    metaDescription: {
      en: "UX/UI design and branding for digital products. Research-driven, conversion-focused, premium visual quality.",
      uk: "UX/UI дизайн та брендинг для цифрових продуктів. Дослідження, конверсія, преміальна якість.",
      ru: "UX/UI дизайн и брендинг для цифровых продуктов. Исследование, конверсия, премиальное качество.",
    },
  },
  {
    slug: "seo-performance",
    num: "06",
    icon: "TrendingUp",
    title: {
      en: "Technical SEO & Performance",
      uk: "Технічне SEO та продуктивність",
      ru: "Техническое SEO и производительность",
    },
    shortDesc: {
      en: "Deep technical audits, Core Web Vitals optimization, structured data, and search rankings that actually move.",
      uk: "Глибокі технічні аудити, Core Web Vitals, структуровані дані та реальне зростання у пошуку.",
      ru: "Глубокие технические аудиты, Core Web Vitals, структурированные данные и реальный рост в поиске.",
    },
    longDesc: {
      en: "We audit, fix, and accelerate. From Lighthouse to LCP, INP and CLS. Structured data, hreflang for international sites, content architecture, and ongoing keyword tracking that translates to ranking improvements.",
      uk: "Аудитуємо, виправляємо, прискорюємо. Lighthouse, LCP, INP, CLS. Структуровані дані, hreflang для міжнародних сайтів, контентна архітектура та трекінг ключових слів з реальним зростанням позицій.",
      ru: "Аудитируем, исправляем, ускоряем. Lighthouse, LCP, INP, CLS. Структурированные данные, hreflang для международных сайтов, контентная архитектура и трекинг ключевых слов с реальным ростом позиций.",
    },
    deliverables: {
      en: ["Technical SEO audit", "Core Web Vitals fixes", "Structured data (JSON-LD)", "International SEO (hreflang)", "Content architecture", "Monthly tracking & reporting"],
      uk: ["Технічний SEO-аудит", "Виправлення Core Web Vitals", "Структуровані дані (JSON-LD)", "Міжнародне SEO (hreflang)", "Контентна архітектура", "Щомісячний трекінг та звіти"],
      ru: ["Технический SEO-аудит", "Исправление Core Web Vitals", "Структурированные данные (JSON-LD)", "Международное SEO (hreflang)", "Контентная архитектура", "Ежемесячный трекинг и отчёты"],
    },
    stack: ["Lighthouse", "Search Console", "Semrush", "Ahrefs", "Schema.org"],
    metaDescription: {
      en: "Technical SEO audits, Core Web Vitals optimization, structured data. Real ranking improvements, not vanity metrics.",
      uk: "Технічний SEO-аудит, оптимізація Core Web Vitals, структуровані дані. Реальне зростання позицій.",
      ru: "Технический SEO-аудит, оптимизация Core Web Vitals, структурированные данные. Реальный рост позиций.",
    },
  },
];

export function getService(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// ============ PORTFOLIO ============

export interface ProjectItem {
  slug: string;
  client: string;
  category: Record<Locale, string>;
  summary: Record<Locale, string>;
  year: string;
  tags: string[];
}

export interface ProjectItemWithImage extends ProjectItem {
  image: string;
  url?: string;
}

export const PROJECTS: ProjectItemWithImage[] = [
  {
    slug: "fintechx",
    client: "FINTECHX.IO",
    year: "2024",
    image: fintechxImg,
    url: "https://fintechx.io",
    category: { en: "SaaS / Fintech", uk: "SaaS / Фінтех", ru: "SaaS / Финтех" },
    summary: {
      en: "Real-time financial analytics platform with multi-currency wallets, automated reporting, and bank-grade security. Used by 12k+ businesses across Europe.",
      uk: "Платформа фінансової аналітики в реальному часі з мультивалютними гаманцями, автоматичною звітністю та банківським рівнем безпеки. Використовують 12k+ бізнесів по всій Європі.",
      ru: "Платформа финансовой аналитики в реальном времени с мультивалютными кошельками, автоматической отчётностью и банковским уровнем безопасности. Используют 12k+ бизнесов по всей Европе.",
    },
    tags: ["Laravel", "React", "PostgreSQL", "Redis", "AWS"],
  },
  {
    slug: "luxeboutique",
    client: "LUXEBOUTIQUE.COM",
    year: "2024",
    image: luxeBoutiqueImg,
    url: "https://luxeboutique.com",
    category: { en: "E-Commerce / Fashion", uk: "E-Commerce / Мода", ru: "E-Commerce / Мода" },
    summary: {
      en: "Premium fashion e-commerce with AI-powered recommendations, 3D product views, and a checkout flow that increased conversions by 340%.",
      uk: "Преміальний fashion e-commerce з AI-рекомендаціями, 3D-переглядом товарів та checkout, який збільшив конверсію на 340%.",
      ru: "Премиальный fashion e-commerce с AI-рекомендациями, 3D-просмотром товаров и checkout, который увеличил конверсию на 340%.",
    },
    tags: ["Next.js", "PrestaShop", "Stripe", "Algolia"],
  },
  {
    slug: "archstudio",
    client: "ARCHSTUDIO.UA",
    year: "2023",
    image: archstudioImg,
    url: "https://archstudio.ua",
    category: { en: "Portfolio / Architecture", uk: "Портфоліо / Архітектура", ru: "Портфолио / Архитектура" },
    summary: {
      en: "Award-winning architecture firm portfolio with immersive project galleries, 360° virtual tours, and a custom CMS for managing 200+ case studies.",
      uk: "Портфоліо архітектурного бюро з immersive-галереями проєктів, 360° віртуальними турами та кастомною CMS для керування 200+ кейсами.",
      ru: "Портфолио архитектурного бюро с immersive-галереями проектов, 360° виртуальными турами и кастомной CMS для управления 200+ кейсами.",
    },
    tags: ["WordPress", "Next.js", "Three.js", "ACF"],
  },
  {
    slug: "medconnect",
    client: "MEDCONNECT.HEALTH",
    year: "2023",
    image: medconnectImg,
    url: "https://medconnect.health",
    category: { en: "HealthTech / SaaS", uk: "HealthTech / SaaS", ru: "HealthTech / SaaS" },
    summary: {
      en: "Telemedicine platform connecting 500+ clinics with patients. Features video consultations, EHR integration, and AI symptom checker.",
      uk: "Телемедична платформа, що з'єднує 500+ клінік із пацієнтами. Відеоконсультації, інтеграція з ЕМК та AI-чекер симптомів.",
      ru: "Телемедицинская платформа, соединяющая 500+ клиник с пациентами. Видеоконсультации, интеграция с ЭМК и AI-чекер симптомов.",
    },
    tags: ["Laravel", "React Native", "WebRTC", "PostgreSQL"],
  },
];

// ============ BLOG ============

export interface BlogPost {
  slug: string;
  date: string; // ISO
  readMin: number;
  cover: string;
  category: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  /** Markdown-lite: paragraphs separated by \n\n, ## for h2, - for li */
  body: Record<Locale, string>;
  metaDescription: Record<Locale, string>;
}

export const POSTS: BlogPost[] = [
  {
    slug: "laravel-vs-symfony",
    cover: laravelSymfonyImg,
    date: "2026-03-12",
    readMin: 8,
    category: { en: "Backend", uk: "Backend", ru: "Backend" },
    title: {
      en: "Laravel vs Symfony in 2026: Which to Choose for Your Next SaaS",
      uk: "Laravel vs Symfony у 2026: що обрати для наступного SaaS",
      ru: "Laravel vs Symfony в 2026: что выбрать для следующего SaaS",
    },
    excerpt: {
      en: "Deep technical comparison of the two leading PHP frameworks across architecture, performance, ecosystem, and hiring.",
      uk: "Технічне порівняння двох провідних PHP-фреймворків за архітектурою, продуктивністю, екосистемою та наймом.",
      ru: "Техническое сравнение двух ведущих PHP-фреймворков по архитектуре, производительности, экосистеме и найму.",
    },
    body: {
      en: `## TL;DR\n\nLaravel for speed of delivery, Symfony for long-term complexity. Both are excellent in 2026, but the choice depends on team size, project scope, and what you mean by "scalable".\n\n## Architecture & Philosophy\n\nLaravel optimizes for developer happiness. Convention over configuration, expressive syntax, and an opinionated stack mean a small team can ship a working SaaS in weeks. Symfony optimizes for flexibility — every component is swappable, every decision is yours to make.\n\n## Performance\n\nIn raw benchmarks, Symfony edges ahead by 5–15%. In real-world production with OPcache, both handle thousands of requests per second on modest hardware. Bottlenecks live in database queries and external API calls, not the framework.\n\n## Ecosystem\n\nLaravel's ecosystem is unmatched for SaaS builders: Forge, Vapor, Cashier, Horizon, Telescope, Nova. Symfony's ecosystem is more academic but extremely robust for enterprise contexts.\n\n## Hiring\n\nLaravel developers are 3x more available globally. Symfony talent skews senior and concentrates in Europe.\n\n## Our recommendation\n\nLaravel for 90% of projects. Symfony when you have a 20+ person team, a 10-year roadmap, and complex domain logic that benefits from DDD and CQRS patterns.`,
      uk: `## Коротко\n\nLaravel — для швидкості розробки, Symfony — для довгострокової складності. Обидва — чудові у 2026, але вибір залежить від розміру команди, обсягу проекту та того, що ви розумієте під "масштабованим".\n\n## Архітектура та філософія\n\nLaravel оптимізує щастя розробника. Convention over configuration, виразний синтаксис та opinionated-стек дозволяють малій команді запустити SaaS за тижні. Symfony оптимізує гнучкість — кожен компонент можна замінити.\n\n## Продуктивність\n\nУ синтетичних бенчмарках Symfony випереджає на 5–15%. У реальному production з OPcache обидва витримують тисячі запитів на секунду на скромному залізі. Bottlenecks — у базі та зовнішніх API, а не у фреймворку.\n\n## Екосистема\n\nЕкосистема Laravel — найкраща для SaaS: Forge, Vapor, Cashier, Horizon, Telescope, Nova. Symfony — більш академічна, але дуже надійна для enterprise.\n\n## Найм\n\nLaravel-розробників у 3 рази більше у світі. Symfony-таланти — senior-рівень, переважно в Європі.\n\n## Наша рекомендація\n\nLaravel для 90% проектів. Symfony — коли у вас команда 20+, 10-річний roadmap та складна доменна логіка з DDD/CQRS.`,
      ru: `## Коротко\n\nLaravel — для скорости разработки, Symfony — для долгосрочной сложности. Оба — отличные в 2026, но выбор зависит от размера команды, объёма проекта и того, что вы понимаете под "масштабируемым".\n\n## Архитектура и философия\n\nLaravel оптимизирует счастье разработчика. Convention over configuration, выразительный синтаксис и opinionated-стек позволяют малой команде запустить SaaS за недели. Symfony оптимизирует гибкость — каждый компонент можно заменить.\n\n## Производительность\n\nВ синтетических бенчмарках Symfony опережает на 5–15%. В реальном production с OPcache оба выдерживают тысячи запросов в секунду на скромном железе. Bottlenecks — в базе и внешних API, а не во фреймворке.\n\n## Экосистема\n\nЭкосистема Laravel — лучшая для SaaS: Forge, Vapor, Cashier, Horizon, Telescope, Nova. Symfony — более академическая, но очень надёжная для enterprise.\n\n## Найм\n\nLaravel-разработчиков в 3 раза больше в мире. Symfony-таланты — senior-уровень, преимущественно в Европе.\n\n## Наша рекомендация\n\nLaravel для 90% проектов. Symfony — когда у вас команда 20+, 10-летний roadmap и сложная доменная логика с DDD/CQRS.`,
    },
    metaDescription: {
      en: "Laravel vs Symfony in 2026: deep technical comparison across architecture, performance, ecosystem, and hiring. Which PHP framework to choose for SaaS.",
      uk: "Laravel vs Symfony у 2026: технічне порівняння за архітектурою, продуктивністю та екосистемою. Що обрати для SaaS.",
      ru: "Laravel vs Symfony в 2026: техническое сравнение по архитектуре, производительности и экосистеме. Что выбрать для SaaS.",
    },
  },
  {
    slug: "prestashop-to-headless-migration",
    cover: prestashopHeadlessImg,
    date: "2025-02-24",
    readMin: 12,
    category: { en: "E-commerce", uk: "E-commerce", ru: "E-commerce" },
    title: {
      en: "Migrating PrestaShop to Headless: A Real-World Playbook",
      uk: "Міграція PrestaShop у headless: реальний playbook",
      ru: "Миграция PrestaShop в headless: реальный playbook",
    },
    excerpt: {
      en: "How we migrated a 50k-SKU PrestaShop store to a headless architecture and tripled conversion. Step-by-step.",
      uk: "Як ми мігрували PrestaShop з 50k SKU на headless-архітектуру та потроїли конверсію. Покроково.",
      ru: "Как мы мигрировали PrestaShop с 50k SKU на headless-архитектуру и утроили конверсию. Пошагово.",
    },
    body: {
      en: `## Why headless\n\nMonolithic PrestaShop themes are great for small catalogs. Past 10k SKUs, Smarty rendering and theme bloat become hard performance ceilings. Headless lets the storefront ride on a modern framework while PrestaShop stays the source of truth for products, stock, and orders.\n\n## Architecture\n\nWe kept PrestaShop as the back-office and exposed a custom REST API layer. The storefront runs on Next.js with ISR, deployed on Vercel. Search is handled by Algolia, payments by Stripe, sessions by NextAuth.\n\n## Results after 90 days\n\n- LCP dropped from 4.2s to 1.1s\n- Conversion rate +218%\n- Mobile bounce rate -41%\n- Lighthouse Performance: 38 → 96\n\n## What we'd do differently\n\nCache invalidation between PrestaShop and the headless layer was the hardest problem. We'd build the cache strategy first, before writing a single API endpoint.`,
      uk: `## Навіщо headless\n\nМонолітні теми PrestaShop добре працюють для малих каталогів. Після 10k SKU Smarty-рендеринг та bloat тем стають жорсткою стелею продуктивності. Headless дозволяє storefront жити на сучасному фреймворку, а PrestaShop залишається джерелом істини для товарів, складу та замовлень.\n\n## Архітектура\n\nЗалишили PrestaShop як back-office і додали кастомний REST API. Storefront — на Next.js з ISR на Vercel. Пошук — Algolia, платежі — Stripe, сесії — NextAuth.\n\n## Результати через 90 днів\n\n- LCP знизився з 4.2s до 1.1s\n- Конверсія +218%\n- Мобільний bounce rate -41%\n- Lighthouse Performance: 38 → 96\n\n## Що б ми зробили інакше\n\nІнвалідація кешу між PrestaShop та headless-шаром — найскладніша проблема. Спочатку б побудували cache strategy, а вже потім API.`,
      ru: `## Зачем headless\n\nМонолитные темы PrestaShop хороши для малых каталогов. После 10k SKU Smarty-рендеринг и bloat тем становятся жёстким потолком производительности. Headless позволяет storefront жить на современном фреймворке, а PrestaShop остаётся источником истины для товаров, склада и заказов.\n\n## Архитектура\n\nОставили PrestaShop как back-office и добавили кастомный REST API. Storefront — на Next.js с ISR на Vercel. Поиск — Algolia, платежи — Stripe, сессии — NextAuth.\n\n## Результаты через 90 дней\n\n- LCP снизился с 4.2s до 1.1s\n- Конверсия +218%\n- Мобильный bounce rate -41%\n- Lighthouse Performance: 38 → 96\n\n## Что бы мы сделали иначе\n\nИнвалидация кеша между PrestaShop и headless-слоем — самая сложная проблема. Сначала бы построили cache strategy, а уже потом API.`,
    },
    metaDescription: {
      en: "How to migrate a PrestaShop store to a headless architecture. Real metrics, architecture decisions, and pitfalls to avoid.",
      uk: "Як мігрувати PrestaShop-магазин на headless-архітектуру. Реальні метрики, рішення та підводні камені.",
      ru: "Как мигрировать PrestaShop-магазин на headless-архитектуру. Реальные метрики, решения и подводные камни.",
    },
  },
  {
    slug: "core-web-vitals",
    cover: coreWebVitalsImg,
    date: "2026-02-08",
    readMin: 7,
    category: { en: "Performance", uk: "Performance", ru: "Performance" },
    title: {
      en: "Core Web Vitals in 2026: What Actually Moves Rankings",
      uk: "Core Web Vitals у 2026: що реально впливає на позиції",
      ru: "Core Web Vitals в 2026: что реально влияет на позиции",
    },
    excerpt: {
      en: "After auditing 200+ sites, here's what consistently moves Core Web Vitals — and what doesn't matter as much as you think.",
      uk: "Після аудиту 200+ сайтів — ось що реально впливає на Core Web Vitals, а що не так важливо, як здається.",
      ru: "После аудита 200+ сайтов — вот что реально влияет на Core Web Vitals, а что не так важно, как кажется.",
    },
    body: {
      en: `## INP replaced FID — it's harder\n\nInteraction to Next Paint measures every interaction, not just the first. Long JavaScript tasks are now exposed everywhere. The fix: break up bundles, defer hydration, and avoid blocking the main thread with heavy synchronous work.\n\n## LCP is mostly about images\n\n80% of LCP failures are unoptimized hero images. Use AVIF or WebP, set explicit width/height, and preload the LCP candidate with fetchpriority="high".\n\n## CLS is solved by reservations\n\nReserve space for ads, embeds, fonts, and dynamic content. font-display: optional eliminates font swap CLS at the cost of some FOIT.\n\n## What doesn't matter (much)\n\n- Critical CSS extraction (modern bundlers handle it)\n- Lazy-loading below-fold images (browsers do this natively)\n- Service workers for vitals (negligible impact)\n\n## The audit checklist\n\n1. Image strategy (formats, dimensions, preload)\n2. JavaScript budget (per route, with bundle analyzer)\n3. Third-party scripts (audit, defer, or remove)\n4. Font loading (display: swap or optional)\n5. Layout reservations (CLS hotspots)`,
      uk: `## INP замінив FID — це складніше\n\nInteraction to Next Paint вимірює кожну взаємодію, а не тільки першу. Довгі JavaScript-задачі тепер видно скрізь. Виправлення: розбивайте бандли, відкладайте гідратацію та не блокуйте main thread важкими синхронними задачами.\n\n## LCP — це переважно про зображення\n\n80% проблем з LCP — неоптимізовані hero-зображення. Використовуйте AVIF або WebP, ставте явні width/height, preload LCP-кандидата з fetchpriority="high".\n\n## CLS вирішується резервуванням\n\nРезервуйте місце для реклами, embeds, шрифтів та динамічного контенту. font-display: optional прибирає CLS від font swap.\n\n## Що не так важливо\n\n- Critical CSS extraction (сучасні бандлери це роблять)\n- Lazy-loading під fold (браузери роблять нативно)\n- Service workers для vitals (незначний вплив)\n\n## Чекліст аудиту\n\n1. Стратегія зображень (формати, розміри, preload)\n2. JavaScript budget (на маршрут, з bundle analyzer)\n3. Сторонні скрипти (аудит, defer або видалити)\n4. Завантаження шрифтів (display: swap або optional)\n5. Резервування layout (CLS hotspots)`,
      ru: `## INP заменил FID — это сложнее\n\nInteraction to Next Paint измеряет каждое взаимодействие, а не только первое. Длинные JavaScript-задачи теперь видны везде. Исправление: разбивайте бандлы, откладывайте гидратацию и не блокируйте main thread тяжёлыми синхронными задачами.\n\n## LCP — это в основном про изображения\n\n80% проблем с LCP — неоптимизированные hero-изображения. Используйте AVIF или WebP, ставьте явные width/height, preload LCP-кандидата с fetchpriority="high".\n\n## CLS решается резервированием\n\nРезервируйте место для рекламы, embeds, шрифтов и динамического контента. font-display: optional убирает CLS от font swap.\n\n## Что не так важно\n\n- Critical CSS extraction (современные бандлеры это делают)\n- Lazy-loading под fold (браузеры делают нативно)\n- Service workers для vitals (незначительное влияние)\n\n## Чеклист аудита\n\n1. Стратегия изображений (форматы, размеры, preload)\n2. JavaScript budget (на маршрут, с bundle analyzer)\n3. Сторонние скрипты (аудит, defer или удалить)\n4. Загрузка шрифтов (display: swap или optional)\n5. Резервирование layout (CLS hotspots)`,
    },
    metaDescription: {
      en: "What actually moves Core Web Vitals in 2026. INP, LCP, CLS — practical fixes from auditing 200+ production sites.",
      uk: "Що реально впливає на Core Web Vitals у 2026. INP, LCP, CLS — практичні рішення з аудиту 200+ сайтів.",
      ru: "Что реально влияет на Core Web Vitals в 2026. INP, LCP, CLS — практические решения из аудита 200+ сайтов.",
    },
  },
  {
    slug: "wordpress-headless-with-tanstack",
    cover: wordpressBlocksImg,
    date: "2026-01-20",
    readMin: 9,
    category: { en: "WordPress", uk: "WordPress", ru: "WordPress" },
    title: {
      en: "Headless WordPress with TanStack Start: A 2026 Setup",
      uk: "Headless WordPress з TanStack Start: налаштування 2026",
      ru: "Headless WordPress с TanStack Start: настройка 2026",
    },
    excerpt: {
      en: "Replace your WordPress theme with a modern SSR React front-end. Faster, more flexible, and SEO-friendly out of the box.",
      uk: "Замініть WordPress-тему сучасним SSR React front-end. Швидше, гнучкіше та SEO-friendly з коробки.",
      ru: "Замените WordPress-тему современным SSR React front-end. Быстрее, гибче и SEO-friendly из коробки.",
    },
    body: {
      en: `## Why TanStack Start over Next.js\n\nNext.js is the default, but TanStack Start ships with file-based routing, full SSR, type-safe data loaders, and a clean server-function model. For content-heavy WordPress sites, the developer experience and the smaller bundle make it a strong choice.\n\n## The architecture\n\nWordPress headless via WPGraphQL. TanStack Start fetches posts in route loaders with query options + ensureQueryData. ISR-style revalidation via on-demand cache invalidation triggered by WP webhooks.\n\n## SEO setup\n\nPer-route head() functions read meta from WP custom fields. JSON-LD Article schema generated from post data. Sitemap.xml as a server route that queries WPGraphQL for all published posts.\n\n## Editor workflow stays intact\n\nGutenberg keeps working. Editors don't see the migration. The front-end is the only thing that changes.\n\n## Migration in 4 steps\n\n1. Install WPGraphQL and ACF.\n2. Scaffold the TanStack Start project, wire up the WP endpoint.\n3. Build route loaders + components for posts, pages, archives.\n4. Set up cache invalidation webhooks and deploy.`,
      uk: `## Чому TanStack Start, а не Next.js\n\nNext.js — стандарт, але TanStack Start має file-based роутинг, повний SSR, type-safe data loaders та чисту модель server functions. Для контентних WordPress-сайтів DX та менший bundle — вагомий аргумент.\n\n## Архітектура\n\nWordPress headless через WPGraphQL. TanStack Start завантажує пости у route loaders з queryOptions + ensureQueryData. ISR-revalidation через on-demand cache invalidation з WP webhooks.\n\n## SEO\n\nПер-route head() читає meta з WP custom fields. JSON-LD Article з даних поста. Sitemap.xml як server route, що запитує WPGraphQL.\n\n## Workflow редактора залишається\n\nGutenberg продовжує працювати. Редактори не помічають міграції — змінюється тільки front-end.\n\n## Міграція за 4 кроки\n\n1. Встановіть WPGraphQL та ACF.\n2. Створіть TanStack Start проект, підключіть WP endpoint.\n3. Напишіть route loaders + компоненти для постів, сторінок, архівів.\n4. Налаштуйте cache invalidation webhooks та задеплойте.`,
      ru: `## Почему TanStack Start, а не Next.js\n\nNext.js — стандарт, но TanStack Start имеет file-based роутинг, полный SSR, type-safe data loaders и чистую модель server functions. Для контентных WordPress-сайтов DX и меньший bundle — весомый аргумент.\n\n## Архитектура\n\nWordPress headless через WPGraphQL. TanStack Start загружает посты в route loaders с queryOptions + ensureQueryData. ISR-revalidation через on-demand cache invalidation с WP webhooks.\n\n## SEO\n\nПер-route head() читает meta из WP custom fields. JSON-LD Article из данных поста. Sitemap.xml как server route, запрашивающий WPGraphQL.\n\n## Workflow редактора остаётся\n\nGutenberg продолжает работать. Редакторы не замечают миграции — меняется только front-end.\n\n## Миграция за 4 шага\n\n1. Установите WPGraphQL и ACF.\n2. Создайте TanStack Start проект, подключите WP endpoint.\n3. Напишите route loaders + компоненты для постов, страниц, архивов.\n4. Настройте cache invalidation webhooks и задеплойте.`,
    },
    metaDescription: {
      en: "Build a headless WordPress front-end with TanStack Start. Faster, SEO-friendly, and editor workflow stays the same.",
      uk: "Створіть headless WordPress front-end на TanStack Start. Швидко, SEO-friendly, workflow редактора не міняється.",
      ru: "Создайте headless WordPress front-end на TanStack Start. Быстро, SEO-friendly, workflow редактора не меняется.",
    },
  },
  {
    slug: "ecommerce-conversion-checklist",
    cover: seoRankingsImg,
    date: "2024-12-15",
    readMin: 6,
    category: { en: "Conversion", uk: "Конверсія", ru: "Конверсия" },
    title: {
      en: "E-commerce Conversion Checklist: 24 Wins We Ship on Every Project",
      uk: "Чекліст e-commerce конверсії: 24 покращення, які ми робимо у кожному проекті",
      ru: "Чеклист e-commerce конверсии: 24 улучшения, которые мы делаем в каждом проекте",
    },
    excerpt: {
      en: "From cart abandonment to checkout speed — the 24 changes that consistently lift conversion across PrestaShop and WooCommerce stores.",
      uk: "Від cart abandonment до швидкості checkout — 24 зміни, що стабільно підвищують конверсію у PrestaShop та WooCommerce.",
      ru: "От cart abandonment до скорости checkout — 24 изменения, которые стабильно повышают конверсию в PrestaShop и WooCommerce.",
    },
    body: {
      en: `## Above the fold\n\n1. One primary CTA per page, contrasted against everything else\n2. Hero copy answers "what is this" in under 8 words\n3. Trust signal in the hero viewport (reviews, customer count, partner logos)\n\n## Product pages\n\n4. First image loads under 1s\n5. Price visible above the fold on mobile\n6. Add-to-cart sticky on scroll for mobile\n7. Reviews summary above the description\n8. Shipping cost calculated before checkout\n\n## Cart\n\n9. Persistent cart icon with item count\n10. Auto-apply discount codes when valid\n11. Cross-sell, not upsell (related items, not bigger versions)\n12. Free-shipping progress bar when close to threshold\n\n## Checkout\n\n13. Guest checkout enabled by default\n14. One-page checkout for under 3 fields total\n15. Auto-detect card type from number\n16. Order summary visible throughout\n17. Pay-later options (Klarna, Afterpay)\n\n## Post-purchase\n\n18. Transactional email under 30s\n19. Order tracking link in confirmation\n20. Asking for review at delivery, not purchase\n\n## Technical\n\n21. LCP under 2.5s on 3G\n22. INP under 200ms\n23. HTTPS, HSTS, modern TLS\n24. Sitemap submitted to GSC and Bing\n\nShip all 24. Measure before/after. The compound effect is usually 30–60% conversion lift.`,
      uk: `## Над fold\n\n1. Одна головна CTA на сторінку, контрастно виділена\n2. Hero copy відповідає на "що це" у 8 словах\n3. Trust signal у hero viewport (відгуки, кількість клієнтів, партнери)\n\n## Сторінки товарів\n\n4. Перше зображення вантажиться менше 1s\n5. Ціна над fold на мобільних\n6. Add-to-cart sticky при скролі на мобільних\n7. Огляд відгуків над описом\n8. Вартість доставки до checkout\n\n## Кошик\n\n9. Persistent іконка кошика з лічильником\n10. Автоматичне застосування промокодів\n11. Cross-sell, не upsell\n12. Прогрес-бар безкоштовної доставки\n\n## Checkout\n\n13. Guest checkout за замовчуванням\n14. One-page checkout до 3 полів\n15. Auto-detect карти за номером\n16. Order summary видний завжди\n17. Pay-later опції (Klarna, Afterpay)\n\n## Після купівлі\n\n18. Транзакційний email менше 30s\n19. Tracking-лінк у підтвердженні\n20. Запит відгуку після доставки, не купівлі\n\n## Технічне\n\n21. LCP менше 2.5s на 3G\n22. INP менше 200ms\n23. HTTPS, HSTS, modern TLS\n24. Sitemap у GSC та Bing\n\nЗробіть усі 24. Виміряйте до/після. Сумарний ефект — зазвичай 30–60% росту конверсії.`,
      ru: `## Над fold\n\n1. Одна главная CTA на страницу, контрастно выделена\n2. Hero copy отвечает на "что это" в 8 словах\n3. Trust signal в hero viewport (отзывы, количество клиентов, партнёры)\n\n## Страницы товаров\n\n4. Первое изображение загружается меньше 1s\n5. Цена над fold на мобильных\n6. Add-to-cart sticky при скролле на мобильных\n7. Обзор отзывов над описанием\n8. Стоимость доставки до checkout\n\n## Корзина\n\n9. Persistent иконка корзины со счётчиком\n10. Автоматическое применение промокодов\n11. Cross-sell, не upsell\n12. Прогресс-бар бесплатной доставки\n\n## Checkout\n\n13. Guest checkout по умолчанию\n14. One-page checkout до 3 полей\n15. Auto-detect карты по номеру\n16. Order summary виден всегда\n17. Pay-later опции (Klarna, Afterpay)\n\n## После покупки\n\n18. Транзакционный email меньше 30s\n19. Tracking-ссылка в подтверждении\n20. Запрос отзыва после доставки, не покупки\n\n## Техническое\n\n21. LCP меньше 2.5s на 3G\n22. INP меньше 200ms\n23. HTTPS, HSTS, modern TLS\n24. Sitemap в GSC и Bing\n\nСделайте все 24. Измерьте до/после. Суммарный эффект — обычно 30–60% роста конверсии.`,
    },
    metaDescription: {
      en: "24 conversion fixes for e-commerce sites. Tested across PrestaShop and WooCommerce — typical lift 30-60%.",
      uk: "24 фікси конверсії для e-commerce. Перевірено на PrestaShop та WooCommerce — типовий ріст 30–60%.",
      ru: "24 фикса конверсии для e-commerce. Проверено на PrestaShop и WooCommerce — типичный рост 30–60%.",
    },
  },
  {
    slug: "prestashop-vs-shopify",
    cover: prestashopHeadlessImg,
    date: "2026-07-23",
    readMin: 10,
    category: { en: "E-commerce", uk: "E-commerce", ru: "E-commerce" },
    title: {
      en: "PrestaShop vs Shopify: Which to Choose for an E-commerce Store",
      uk: "PrestaShop vs Shopify: що обрати для інтернет-магазину",
      ru: "PrestaShop vs Shopify: что выбрать для интернет-магазина",
    },
    excerpt: {
      en: "A detailed comparison of platforms by total cost of ownership (TCO), scalability, localization, and feature ownership.",
      uk: "Детальне порівняння платформ за вартістю володіння (TCO), масштабованістю, локалізацією та володінням кодом.",
      ru: "Детальное сравнение платформ по стоимости владения (TCO), масштабируемости, локализации и владению кодом.",
    },
    body: {
      en: `## Choosing Your Engine\n\nShopify vs PrestaShop is a classic clash between SaaS (Software as a Service) and Open Source. The right choice depends on your business maturity, inventory size, and your tech stack strategy.\n\n## Total Cost of Ownership (TCO)\n\nShopify feels cheap initially ($39/mo for basic plans). However, as you scale, the expenses mount: transaction fees (up to 2% if not using Shopify Payments), paid applications for features like multi-currency or reviews, and custom themes. PrestaShop is free to download, but you pay for hosting, SSL, custom modules, and developer support. For stores with over $100k in annual turnover, PrestaShop is often 40-60% cheaper to maintain than Shopify.\n\n## Customization and Integrations\n\nShopify is a walled garden. You cannot modify core code or implement custom checkout paths unless you pay $2,000+/mo for Shopify Plus. PrestaShop offers absolute code freedom. Need to integrate a local ERP system, write custom logic for B2B price tiers, or adapt a highly specific local payment gateway? PrestaShop allows full modular customization.\n\n## Scalability and Internationalization\n\nShopify handles multi-region selling via Shopify Markets, but you are limited by their payment rules and localization features. PrestaShop was built from the ground up for multi-store setups, multi-currency, and multilingual catalogs out of the box, making it the perfect choice for European e-commerce.\n\n## The Verdict\n\n- **Choose Shopify** if you have a budget under $5,000, want a quick launch, a standard design, and have a catalog of less than 1,000 products.\n- **Choose PrestaShop** if you want full control of your customer data, have 10,000+ SKUs, require deep ERP integrations, or expect your e-commerce store to scale into a custom B2B/B2C marketplace.`,
      uk: `## Вибір платформи\n\nShopify проти PrestaShop — це класичне протистояння SaaS (софт як сервіс) та Open Source (відкритий код). Правильний вибір залежить від зрілості вашого бізнесу, обсягу товарів та планів розвитку.\n\n## Вартість володіння (TCO)\n\nShopify здається дешевим на старті ($39/міс). Проте з масштабуванням витрати зростають: комісія за транзакції (до 2%), платні плагіни за базові функції (мультимовність, відгуки) та теми. PrestaShop безкоштовний для завантаження, але ви платите за хостинг, кастомні модулі та розробку. Для магазинів з оборотом понад $100k на рік PrestaShop часто обходиться на 40-60% дешевше у річному утриманні.\n\n## Кастомізація та інтеграції\n\nShopify — це «закрита екосистема». Ви не можете змінювати ядро сайту або кастомізувати checkout, якщо не платите $2000+/міс за Shopify Plus. PrestaShop дає повну свободу коду. Потрібно інтегрувати локальну CRM/ERP, налаштувати індивідуальні B2B ціни чи складні логістичні правила? PrestaShop дозволяє впровадити будь-яку бізнес-логіку.\n\n## Масштабованість та мультимовність\n\nShopify підтримує міжнародні продажі через Shopify Markets, але ви обмежені їхніми правилами. PrestaShop розроблений для multi-shop архітектури та мультимовності з коробки, що робить його ідеальним для e-commerce в Україні та Європі.\n\n## Вердикт\n\n- **Оберіть Shopify**, якщо бюджет на розробку до $5,000, вам потрібен швидкий старт, стандартний функціонал та у вас менше 1,000 товарів.\n- **Оберіть PrestaShop**, якщо ви хочете повністю володіти своїми даними, маєте каталог на 10,000+ SKU, потребуєте глибоких інтеграцій з ERP/складом або плануєте масштабувати проект у B2B-портал.`,
      ru: `## Выбор платформы\n\nShopify против PrestaShop — это классическое противостояние SaaS (софт как сервис) и Open Source (открытый код). Правильный выбор зависит от зрелости вашего бизнеса, объема товаров и планов развития.\n\n## Стоимость владения (TCO)\n\nShopify кажется дешевым на старте ($39/мес). Однако с масштабированием расходы растут: комиссия за транзакции (до 2%), платные плагины за базовые функции (мультиязычность, отзывы) и темы. PrestaShop бесплатен для загрузки, но вы платите за хостинг, кастомные модули и разработку. Для магазинов с оборотом более $100k в год PrestaShop часто обходится на 40-60% дешевле в годовом содержании.\n\n## Кастомизация и интеграции\n\nShopify — это «закрытая экосистема». Вы не можете изменять ядро сайта или кастомизировать checkout, если не платите $2000+/мес за Shopify Plus. PrestaShop дает полную свободу кода. Нужно интегрировать локальную CRM/ERP, настроить индивидуальные B2B цены или сложные логистические правила? PrestaShop позволяет внедрить любую бизнес-логику.\n\n## Масштабируемость и мультиязычность\n\nShopify поддерживает международные продажи через Shopify Markets, но вы ограничены их правилами. PrestaShop разработан для multi-shop архитектуры и мультиязычности из коробки, что делает его идеальным для e-commerce в Украине и Европе.\n\n## Вердикт\n\n- **Выберите Shopify**, если бюджет на разработку до $5,000, вам нужен быстрый старт, стандартный функционал и у вас менее 1,000 товаров.\n- **Выберите PrestaShop**, если вы хотите полностью владеть своими данными, имеете каталог на 10,000+ SKU, нуждаетесь в глубоких интеграциях с ERP/складом или планируете масштабировать проект в B2B-портал.`,
    },
    metaDescription: {
      en: "PrestaShop vs Shopify in 2026: total cost of ownership (TCO) comparison, code customization, ERP integrations, and scalability for e-commerce.",
      uk: "PrestaShop vs Shopify у 2026: порівняння вартості володіння (TCO), кастомізації коду та інтеграції з ERP для інтернет-магазину.",
      ru: "PrestaShop vs Shopify в 2026: сравнение стоимости владения (TCO), кастомизации кода и интеграции с ERP для интернет-магазина.",
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
