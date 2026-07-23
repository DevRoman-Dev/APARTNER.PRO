import type { Locale } from "./i18n";

export interface ServiceExtras {
  rating: { value: number; count: number };
  startingFrom: Record<Locale, string>;
  timeline: Record<Locale, string>;
  process: Record<Locale, { title: string; desc: string }[]>;
  faq: Record<Locale, { q: string; a: string }[]>;
  benefits: Record<Locale, string[]>;
}

const L = (en: string, uk: string, ru: string): Record<Locale, string> => ({ en, uk, ru });

export const SERVICE_EXTRAS: Record<string, ServiceExtras> = {
  "laravel-development": {
    rating: { value: 4.9, count: 87 },
    startingFrom: L("from $6,000", "від $6,000", "от $6,000"),
    timeline: L("4–16 weeks", "4–16 тижнів", "4–16 недель"),
    process: {
      en: [
        { title: "Discovery & architecture", desc: "Requirements, data modelling, sprint plan." },
        { title: "Backend & API", desc: "Laravel core, REST/GraphQL, queues, billing." },
        { title: "Admin & integrations", desc: "Dashboards, third-party services, auth." },
        { title: "QA, deploy, handover", desc: "Tests, CI/CD, docs, ongoing support." },
      ],
      uk: [
        { title: "Дослідження та архітектура", desc: "Вимоги, модель даних, план спринтів." },
        { title: "Backend та API", desc: "Laravel core, REST/GraphQL, черги, біллінг." },
        { title: "Адмін та інтеграції", desc: "Дашборди, сторонні сервіси, авторизація." },
        { title: "QA, деплой, передача", desc: "Тести, CI/CD, документація, підтримка." },
      ],
      ru: [
        { title: "Исследование и архитектура", desc: "Требования, модель данных, план спринтов." },
        { title: "Backend и API", desc: "Laravel core, REST/GraphQL, очереди, биллинг." },
        { title: "Админ и интеграции", desc: "Дашборды, сторонние сервисы, авторизация." },
        { title: "QA, деплой, передача", desc: "Тесты, CI/CD, документация, поддержка." },
      ],
    },
    faq: {
      en: [
        {
          q: "How much does Laravel development cost?",
          a: "Typical projects start from $6,000 for an MVP and scale based on complexity. We provide a fixed estimate after a 30-minute discovery call.",
        },
        {
          q: "Do you work with existing Laravel codebases?",
          a: "Yes. We audit, refactor and extend existing Laravel apps — including legacy 5.x / 6.x upgrades to Laravel 11.",
        },
        {
          q: "Will I own the code?",
          a: "Always. You receive the full repository, documentation and infrastructure access on day one.",
        },
        {
          q: "Do you offer ongoing support?",
          a: "Yes, monthly retainers from 20h cover bug fixes, monitoring and new features.",
        },
      ],
      uk: [
        {
          q: "Скільки коштує розробка на Laravel?",
          a: "Типові проєкти стартують від $6,000 за MVP і масштабуються від складності. Фіксовану оцінку даємо після 30-хвилинного дзвінка.",
        },
        {
          q: "Чи працюєте з існуючими Laravel-кодбазами?",
          a: "Так. Аудит, рефакторинг та розширення — включно з оновленням з 5.x / 6.x до Laravel 11.",
        },
        {
          q: "Чи буде код моїм?",
          a: "Завжди. Ви отримуєте повний репозиторій, документацію та доступи з першого дня.",
        },
        {
          q: "Чи є підтримка після запуску?",
          a: "Так, місячні retainer-плани від 20 годин — баги, моніторинг, нові фічі.",
        },
      ],
      ru: [
        {
          q: "Сколько стоит разработка на Laravel?",
          a: "Типовые проекты стартуют от $6,000 за MVP и масштабируются от сложности. Фиксированную оценку даём после 30-минутного звонка.",
        },
        {
          q: "Работаете ли с существующими Laravel-кодбазами?",
          a: "Да. Аудит, рефакторинг и расширение — включая обновление с 5.x / 6.x до Laravel 11.",
        },
        {
          q: "Будет ли код моим?",
          a: "Всегда. Вы получаете полный репозиторий, документацию и доступы с первого дня.",
        },
        {
          q: "Есть ли поддержка после запуска?",
          a: "Да, месячные retainer-планы от 20 часов — баги, мониторинг, новые фичи.",
        },
      ],
    },
    benefits: {
      en: [
        "Production-grade architecture from day one",
        "Typed code, automated tests, CI/CD by default",
        "Scales from MVP to millions of requests",
        "Senior engineers only — no juniors on your project",
      ],
      uk: [
        "Production-архітектура з першого дня",
        "Типізований код, автотести, CI/CD за замовчуванням",
        "Масштабується від MVP до мільйонів запитів",
        "Тільки senior-інженери — без джунів",
      ],
      ru: [
        "Production-архитектура с первого дня",
        "Типизированный код, автотесты, CI/CD по умолчанию",
        "Масштабируется от MVP до миллионов запросов",
        "Только senior-инженеры — без джунов",
      ],
    },
  },
  "prestashop-development": {
    rating: { value: 4.8, count: 64 },
    startingFrom: L("from $3,500", "від $3,500", "от $3,500"),
    timeline: L("2–10 weeks", "2–10 тижнів", "2–10 недель"),
    process: {
      en: [
        { title: "Audit & scope", desc: "Store audit, performance baseline, scope lock." },
        {
          title: "Theme / module build",
          desc: "Custom theme, modules, ERP & payment integrations.",
        },
        { title: "Migration & QA", desc: "Data migration, full regression QA, staging review." },
        { title: "Launch & support", desc: "Go-live, monitoring, SLA support." },
      ],
      uk: [
        {
          title: "Аудит та скоуп",
          desc: "Аудит магазину, baseline продуктивності, фіксація скоупу.",
        },
        { title: "Тема / модулі", desc: "Кастомна тема, модулі, ERP та платежі." },
        { title: "Міграція та QA", desc: "Міграція даних, регресійне QA, staging-перевірка." },
        { title: "Запуск і підтримка", desc: "Go-live, моніторинг, SLA-підтримка." },
      ],
      ru: [
        {
          title: "Аудит и скоуп",
          desc: "Аудит магазина, baseline производительности, фиксация скоупа.",
        },
        { title: "Тема / модули", desc: "Кастомная тема, модули, ERP и платежи." },
        { title: "Миграция и QA", desc: "Миграция данных, регресс QA, staging-проверка." },
        { title: "Запуск и поддержка", desc: "Go-live, мониторинг, SLA-поддержка." },
      ],
    },
    faq: {
      en: [
        {
          q: "Are you an official PrestaShop partner?",
          a: "Yes — official Thirty Bees partner with modules published on the PrestaShop Addons Marketplace.",
        },
        {
          q: "Can you migrate from PrestaShop 1.6 to 8.x?",
          a: "Yes. We have a tested migration playbook covering data, modules, themes and SEO redirects.",
        },
        {
          q: "Do you build custom checkout flows?",
          a: "Yes — one-page checkout, B2B quotes, multi-step, subscriptions, all production-tested.",
        },
        {
          q: "What about performance?",
          a: "Average client sees LCP drop below 1.5s and Lighthouse Performance above 90 after our optimization.",
        },
      ],
      uk: [
        {
          q: "Чи ви офіційний партнер PrestaShop?",
          a: "Так — офіційний партнер Thirty Bees, модулі опубліковані на PrestaShop Addons Marketplace.",
        },
        {
          q: "Чи можете мігрувати з PrestaShop 1.6 на 8.x?",
          a: "Так. Маємо перевірений playbook міграції: дані, модулі, теми та SEO-редіректи.",
        },
        {
          q: "Чи робите кастомний checkout?",
          a: "Так — one-page, B2B-quotes, multi-step, підписки, все перевірено в production.",
        },
        {
          q: "А продуктивність?",
          a: "У середньому клієнт отримує LCP менше 1.5s і Lighthouse Performance понад 90 після оптимізації.",
        },
      ],
      ru: [
        {
          q: "Вы официальный партнёр PrestaShop?",
          a: "Да — официальный партнёр Thirty Bees, модули опубликованы на PrestaShop Addons Marketplace.",
        },
        {
          q: "Можете мигрировать с PrestaShop 1.6 на 8.x?",
          a: "Да. Есть проверенный playbook миграции: данные, модули, темы и SEO-редиректы.",
        },
        {
          q: "Делаете кастомный checkout?",
          a: "Да — one-page, B2B-quotes, multi-step, подписки, всё проверено в production.",
        },
        {
          q: "А производительность?",
          a: "В среднем клиент получает LCP меньше 1.5s и Lighthouse Performance больше 90 после оптимизации.",
        },
      ],
    },
    benefits: {
      en: [
        "Official Thirty Bees partner",
        "Modules on PrestaShop Marketplace",
        "Migrations from 1.6 to 8.x with zero data loss",
        "24/7 priority support",
      ],
      uk: [
        "Офіційний партнер Thirty Bees",
        "Модулі на PrestaShop Marketplace",
        "Міграції з 1.6 на 8.x без втрати даних",
        "24/7 пріоритетна підтримка",
      ],
      ru: [
        "Официальный партнёр Thirty Bees",
        "Модули на PrestaShop Marketplace",
        "Миграции с 1.6 на 8.x без потери данных",
        "24/7 приоритетная поддержка",
      ],
    },
  },
  "wordpress-development": {
    rating: { value: 4.9, count: 112 },
    startingFrom: L("from $2,500", "від $2,500", "от $2,500"),
    timeline: L("2–8 weeks", "2–8 тижнів", "2–8 недель"),
    process: {
      en: [
        { title: "Strategy & wireframes", desc: "Goals, sitemap, conversion-first wireframes." },
        { title: "Design & blocks", desc: "Visual design, Gutenberg blocks, design tokens." },
        { title: "Build & content", desc: "Theme/WooCommerce build, content load, SEO setup." },
        { title: "Launch & care", desc: "Go-live, analytics, monthly maintenance." },
      ],
      uk: [
        { title: "Стратегія та wireframes", desc: "Цілі, sitemap, wireframes під конверсію." },
        { title: "Дизайн і блоки", desc: "Візуал, Gutenberg-блоки, дизайн-токени." },
        { title: "Розробка та контент", desc: "Тема/WooCommerce, контент, SEO-сетап." },
        { title: "Запуск і підтримка", desc: "Go-live, аналітика, щомісячна підтримка." },
      ],
      ru: [
        { title: "Стратегия и wireframes", desc: "Цели, sitemap, wireframes под конверсию." },
        { title: "Дизайн и блоки", desc: "Визуал, Gutenberg-блоки, дизайн-токены." },
        { title: "Разработка и контент", desc: "Тема/WooCommerce, контент, SEO-сетап." },
        { title: "Запуск и поддержка", desc: "Go-live, аналитика, ежемесячная поддержка." },
      ],
    },
    faq: {
      en: [
        {
          q: "Do you build custom themes or use page builders?",
          a: "Custom themes with native Gutenberg blocks. Page builders create performance debt — we avoid them.",
        },
        {
          q: "Can you do headless WordPress?",
          a: "Yes. Next.js / TanStack Start frontends with WordPress as a content API are a frequent setup for us.",
        },
        {
          q: "How fast will the site be?",
          a: "Target Lighthouse Performance 90+ and LCP under 2s on 4G. Most projects exceed this.",
        },
        {
          q: "Do you build WooCommerce stores?",
          a: "Yes — small to mid catalogue WooCommerce with custom checkout, subscriptions and payment integrations.",
        },
      ],
      uk: [
        {
          q: "Робите кастомні теми чи page builders?",
          a: "Кастомні теми з нативними Gutenberg-блоками. Page builders створюють performance debt — уникаємо їх.",
        },
        {
          q: "Чи можете зробити headless WordPress?",
          a: "Так. Next.js / TanStack Start фронтенди з WordPress як content API — наша часта конфігурація.",
        },
        {
          q: "Наскільки швидкий буде сайт?",
          a: "Ціль — Lighthouse Performance 90+ і LCP менше 2s на 4G. Більшість проєктів перевищують це.",
        },
        {
          q: "Робите магазини на WooCommerce?",
          a: "Так — невеликі та середні каталоги з кастомним checkout, підписками та платежами.",
        },
      ],
      ru: [
        {
          q: "Делаете кастомные темы или page builders?",
          a: "Кастомные темы с нативными Gutenberg-блоками. Page builders создают performance debt — избегаем их.",
        },
        {
          q: "Можете сделать headless WordPress?",
          a: "Да. Next.js / TanStack Start фронтенды с WordPress как content API — наша частая конфигурация.",
        },
        {
          q: "Насколько быстрый будет сайт?",
          a: "Цель — Lighthouse Performance 90+ и LCP меньше 2s на 4G. Большинство проектов превышают это.",
        },
        {
          q: "Делаете магазины на WooCommerce?",
          a: "Да — небольшие и средние каталоги с кастомным checkout, подписками и платежами.",
        },
      ],
    },
    benefits: {
      en: [
        "Custom themes — no bloated builders",
        "Headless setups with Next.js or TanStack",
        "Lighthouse 90+ guaranteed",
        "GDPR-ready & SEO-optimized",
      ],
      uk: [
        "Кастомні теми — без bloat-білдерів",
        "Headless на Next.js або TanStack",
        "Lighthouse 90+ гарантовано",
        "GDPR-ready і SEO-оптимізація",
      ],
      ru: [
        "Кастомные темы — без bloat-билдеров",
        "Headless на Next.js или TanStack",
        "Lighthouse 90+ гарантировано",
        "GDPR-ready и SEO-оптимизация",
      ],
    },
  },
  "mobile-apps": {
    rating: { value: 4.8, count: 53 },
    startingFrom: L("from $15,000", "від $15,000", "от $15,000"),
    timeline: L("8–20 weeks", "8–20 тижнів", "8–20 недель"),
    process: {
      en: [
        { title: "UX research", desc: "User interviews, journeys, prototype." },
        { title: "Design & architecture", desc: "Visual design, design system, technical plan." },
        {
          title: "iOS & Android build",
          desc: "React Native or native, backend API, integrations.",
        },
        {
          title: "Submission & updates",
          desc: "App Store & Play Store submission, updates, support.",
        },
      ],
      uk: [
        { title: "UX-дослідження", desc: "Інтерв'ю, customer journeys, прототип." },
        { title: "Дизайн та архітектура", desc: "Візуал, дизайн-система, технічний план." },
        { title: "iOS та Android", desc: "React Native або native, backend API, інтеграції." },
        { title: "Публікація та оновлення", desc: "App Store і Play Store, оновлення, підтримка." },
      ],
      ru: [
        { title: "UX-исследование", desc: "Интервью, customer journeys, прототип." },
        { title: "Дизайн и архитектура", desc: "Визуал, дизайн-система, технический план." },
        { title: "iOS и Android", desc: "React Native или native, backend API, интеграции." },
        {
          title: "Публикация и обновления",
          desc: "App Store и Play Store, обновления, поддержка.",
        },
      ],
    },
    faq: {
      en: [
        {
          q: "Native or React Native?",
          a: "We choose based on your needs. React Native for fast iteration and shared codebase; native Swift/Kotlin when deep platform integration or maximum performance matters.",
        },
        {
          q: "Will you handle App Store submission?",
          a: "Yes, end-to-end — from listing copy and assets to review responses and post-launch updates.",
        },
        {
          q: "Can you build the backend too?",
          a: "Yes. Most mobile projects ship with a Laravel or Node backend we build alongside the app.",
        },
        {
          q: "What about offline support?",
          a: "Offline-first architecture is standard for us. Local DB, sync queues, conflict resolution, all built in.",
        },
      ],
      uk: [
        {
          q: "Native чи React Native?",
          a: "Обираємо за вашими потребами. React Native — для швидкої ітерації та спільної кодбази; native Swift/Kotlin — коли потрібна глибока інтеграція або максимальна продуктивність.",
        },
        {
          q: "Чи робите публікацію в App Store?",
          a: "Так, від А до Я — listing, assets, відповіді на review, оновлення після релізу.",
        },
        {
          q: "Можете зробити і backend?",
          a: "Так. Більшість мобільних проєктів виходять із Laravel або Node-бекендом, який ми будуємо разом із застосунком.",
        },
        {
          q: "Як з offline?",
          a: "Offline-first архітектура — стандарт для нас. Локальна БД, sync queues, conflict resolution.",
        },
      ],
      ru: [
        {
          q: "Native или React Native?",
          a: "Выбираем по вашим потребностям. React Native — для быстрой итерации и общей кодбазы; native Swift/Kotlin — когда нужна глубокая интеграция или максимальная производительность.",
        },
        {
          q: "Делаете публикацию в App Store?",
          a: "Да, от А до Я — listing, assets, ответы на review, обновления после релиза.",
        },
        {
          q: "Можете сделать и backend?",
          a: "Да. Большинство мобильных проектов выходят с Laravel или Node-бекендом, который мы строим вместе с приложением.",
        },
        {
          q: "Как с offline?",
          a: "Offline-first архитектура — стандарт. Локальная БД, sync queues, conflict resolution.",
        },
      ],
    },
    benefits: {
      en: [
        "Native and React Native expertise",
        "Offline-first architecture by default",
        "Full App Store / Play Store submission",
        "Backend included if needed",
      ],
      uk: [
        "Експертиза native і React Native",
        "Offline-first архітектура за замовчуванням",
        "Повна публікація в App Store / Play Store",
        "Backend — за потреби",
      ],
      ru: [
        "Экспертиза native и React Native",
        "Offline-first архитектура по умолчанию",
        "Полная публикация в App Store / Play Store",
        "Backend — при необходимости",
      ],
    },
  },
  "ux-ui-design": {
    rating: { value: 5.0, count: 41 },
    startingFrom: L("from $2,000", "від $2,000", "от $2,000"),
    timeline: L("2–6 weeks", "2–6 тижнів", "2–6 недель"),
    process: {
      en: [
        { title: "Research", desc: "User interviews, competitive audit, personas." },
        { title: "Wireframes", desc: "IA, flows, low-fi prototypes, validation." },
        { title: "Visual design", desc: "Design system, hi-fi mocks, interactive prototype." },
        { title: "Handoff", desc: "Tokens, components, dev handoff in Figma." },
      ],
      uk: [
        { title: "Дослідження", desc: "Інтерв'ю, аналіз конкурентів, персонажі." },
        { title: "Wireframes", desc: "IA, flows, low-fi прототипи, валідація." },
        {
          title: "Візуальний дизайн",
          desc: "Дизайн-система, hi-fi mocks, інтерактивний прототип.",
        },
        { title: "Handoff", desc: "Токени, компоненти, передача розробникам у Figma." },
      ],
      ru: [
        { title: "Исследование", desc: "Интервью, анализ конкурентов, персонажи." },
        { title: "Wireframes", desc: "IA, flows, low-fi прототипы, валидация." },
        {
          title: "Визуальный дизайн",
          desc: "Дизайн-система, hi-fi mocks, интерактивный прототип.",
        },
        { title: "Handoff", desc: "Токены, компоненты, передача разработчикам в Figma." },
      ],
    },
    faq: {
      en: [
        {
          q: "Do you do branding from scratch?",
          a: "Yes — logo, brand system, typography, voice. Often paired with a launch website.",
        },
        {
          q: "Will I get a design system?",
          a: "Every project ships with a Figma design system: tokens, components, documentation.",
        },
        {
          q: "Can your team also build the design?",
          a: "Yes — full design-to-code handoff with our in-house frontend team.",
        },
        {
          q: "Do you do user research?",
          a: "Yes — user interviews, usability tests, analytics review. Research budget scales with project size.",
        },
      ],
      uk: [
        {
          q: "Чи робите брендинг з нуля?",
          a: "Так — лого, brand system, типографіка, голос. Часто разом із сайтом запуску.",
        },
        {
          q: "Чи отримаю дизайн-систему?",
          a: "Кожен проєкт виходить із Figma-дизайн-системою: токени, компоненти, документація.",
        },
        {
          q: "Чи можете і розробити сайт?",
          a: "Так — повний design-to-code handoff з нашою frontend-командою.",
        },
        {
          q: "Чи робите user research?",
          a: "Так — інтерв'ю, usability-тести, аналітика. Бюджет дослідження масштабується від розміру проєкту.",
        },
      ],
      ru: [
        {
          q: "Делаете брендинг с нуля?",
          a: "Да — лого, brand system, типографика, голос. Часто вместе с сайтом запуска.",
        },
        {
          q: "Получу ли дизайн-систему?",
          a: "Каждый проект выходит с Figma-дизайн-системой: токены, компоненты, документация.",
        },
        {
          q: "Можете и разработать сайт?",
          a: "Да — полный design-to-code handoff с нашей frontend-командой.",
        },
        {
          q: "Делаете user research?",
          a: "Да — интервью, usability-тесты, аналитика. Бюджет исследования масштабируется от размера проекта.",
        },
      ],
    },
    benefits: {
      en: [
        "Research-driven, not opinion-driven",
        "Design systems with developer tokens",
        "Conversion-focused interfaces",
        "WCAG-accessible by default",
      ],
      uk: [
        "На основі досліджень, а не думок",
        "Дизайн-системи з токенами для розробки",
        "Інтерфейси під конверсію",
        "WCAG-доступність за замовчуванням",
      ],
      ru: [
        "На основе исследований, а не мнений",
        "Дизайн-системы с токенами для разработки",
        "Интерфейсы под конверсию",
        "WCAG-доступность по умолчанию",
      ],
    },
  },
  "seo-performance": {
    rating: { value: 4.9, count: 76 },
    startingFrom: L("from $1,500/mo", "від $1,500/міс", "от $1,500/мес"),
    timeline: L(
      "ongoing or 4-week sprint",
      "постійно або 4-тижневий спринт",
      "постоянно или 4-недельный спринт",
    ),
    process: {
      en: [
        { title: "Audit", desc: "Technical + content + backlink audit, baseline metrics." },
        { title: "Quick wins", desc: "Crawl errors, meta, schema, Core Web Vitals fixes." },
        { title: "Content & links", desc: "Cluster planning, on-page work, outreach." },
        { title: "Reporting", desc: "Monthly ranking & traffic reports, roadmap updates." },
      ],
      uk: [
        { title: "Аудит", desc: "Технічний + контентний + backlink-аудит, baseline." },
        { title: "Quick wins", desc: "Crawl errors, meta, schema, Core Web Vitals." },
        { title: "Контент і лінки", desc: "Кластери, on-page робота, outreach." },
        { title: "Звітність", desc: "Щомісячні звіти по позиціях і трафіку, оновлення roadmap." },
      ],
      ru: [
        { title: "Аудит", desc: "Технический + контентный + backlink-аудит, baseline." },
        { title: "Quick wins", desc: "Crawl errors, meta, schema, Core Web Vitals." },
        { title: "Контент и линки", desc: "Кластеры, on-page работа, outreach." },
        {
          title: "Отчётность",
          desc: "Ежемесячные отчёты по позициям и трафику, обновления roadmap.",
        },
      ],
    },
    faq: {
      en: [
        {
          q: "How long until I see results?",
          a: "Quick wins land in 30–60 days. Sustained ranking growth typically shows in 3–6 months.",
        },
        {
          q: "Do you guarantee #1 rankings?",
          a: "Nobody can. We guarantee transparent reporting, real ranking improvements, and traffic that converts.",
        },
        {
          q: "Do you do international SEO?",
          a: "Yes — hreflang, multi-region content, localized link building.",
        },
        {
          q: "Do you build links?",
          a: "Yes, white-hat only — digital PR, niche placements, partnerships.",
        },
      ],
      uk: [
        {
          q: "Коли будуть результати?",
          a: "Quick wins — за 30–60 днів. Стабільне зростання позицій — за 3–6 місяців.",
        },
        {
          q: "Чи гарантуєте #1 позиції?",
          a: "Ніхто не може. Гарантуємо прозору звітність, реальне зростання позицій і трафік, що конвертує.",
        },
        {
          q: "Чи робите міжнародне SEO?",
          a: "Так — hreflang, мультирегіональний контент, локальний link building.",
        },
        {
          q: "Чи будуєте лінки?",
          a: "Так, тільки white-hat — digital PR, нішеві розміщення, партнерства.",
        },
      ],
      ru: [
        {
          q: "Когда будут результаты?",
          a: "Quick wins — за 30–60 дней. Стабильный рост позиций — за 3–6 месяцев.",
        },
        {
          q: "Гарантируете #1 позиции?",
          a: "Никто не может. Гарантируем прозрачную отчётность, реальный рост позиций и трафик, который конвертирует.",
        },
        {
          q: "Делаете международное SEO?",
          a: "Да — hreflang, мультирегиональный контент, локальный link building.",
        },
        {
          q: "Строите ссылки?",
          a: "Да, только white-hat — digital PR, нишевые размещения, партнёрства.",
        },
      ],
    },
    benefits: {
      en: [
        "Real ranking growth, not vanity metrics",
        "Core Web Vitals expertise",
        "International SEO with hreflang",
        "Transparent monthly reporting",
      ],
      uk: [
        "Реальне зростання позицій, а не vanity-метрики",
        "Експертиза Core Web Vitals",
        "Міжнародне SEO з hreflang",
        "Прозора щомісячна звітність",
      ],
      ru: [
        "Реальный рост позиций, а не vanity-метрики",
        "Экспертиза Core Web Vitals",
        "Международное SEO с hreflang",
        "Прозрачная ежемесячная отчётность",
      ],
    },
  },
};

export function getServiceExtras(slug: string): ServiceExtras | undefined {
  return SERVICE_EXTRAS[slug];
}
