import type { Locale } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { localePath } from "@/lib/i18n";

const CONTENT = {
  en: {
    title: "We stand with Ukraine!",
    subtitle: "We stand with Ukraine!",
    p1: "We are Ukrainians.",
    p2: "Our history began with the founding of Kyiv in the year 482. We are an ancient nation state filled with the wisdom of the ages. We are a young democracy, creative, resolute and strong. We lived our own lives, explored our past, looked for answers to the challenges of the modern world, and created our own solutions.",
    p3: "On February 24, 2022, our world changed. From this day on, all Ukrainians are like a single organism. We are warriors.",
    p4: "We are fighting for our safety, freedom, rights to life and happiness. We resist oppression every minute of our lives. From the first minute of the full-scale Russian invasion, from the first minute of the Russian-Ukrainian war, we have been fighting for our freedom and independence. But we are also fighting for the freedom and independence of the entire democratic world.",
    p5: "This war is a test for all of us. The people of Ukraine have received critical assistance from the entire civilized world. But the people of Ukraine also bear incredible losses. We are warriors.",
    p6: "Our military and our civilians, our women and our children, everyone is in the line of fire and everyone is fighting for independence, for the right to freedom, happiness and the right to create one's own life.",
    p7: "From the first day of the war, we mobilized people, resources, time and even space - everything was organized towards our Victory.",
    p8: "Ukraine is winning. Ukraine’s victory is the world’s victory. Our victory ensures the opportunities to continue development, to create new things, to improve the existing ones. Come back to life. Defeat the autocracy and restore the stability of the world order. To bring back to life Ukraine with its incredible human and intellectual resources, with its thirst for innovation and freedom of creation. We are creators.",
    p9: "Ukraine is winning. Ukraine’s victory is the world’s victory. Our victory ensures the opportunities to continue development, to create new things, to improve the existing ones. Come back to life. Defeat the autocracy and restore the stability of the world order. To bring back to life Ukraine with its incredible human and intellectual resources, with its thirst for innovation and freedom of creation. We are creators.", // Original text had this repeated
    p10: "We are creators.",
    p11: "Creators of a free and just world for all of us, where there is an independent Ukraine, and dignity and freedom for every state that respects the values of life and happiness.",
    p12: "We are winning. Together.",
    btn: "SUPPORT UKRAINE"
  },
  uk: {
    title: "Ми підтримуємо Україну!",
    subtitle: "Ми підтримуємо Україну!",
    p1: "Ми — українці.",
    p2: "Наша історія почалася із заснування Києва в 482 році. Ми — давня національна держава, сповнена мудрістю віків. Ми — молода демократія, творча, рішуча та сильна. Ми жили своїм життям, досліджували наше минуле, шукали відповіді на виклики сучасного світу та створювали власні рішення.",
    p3: "24 лютого 2022 року наш світ змінився. Відтоді всі українці діють як єдиний організм. Ми — воїни.",
    p4: "Ми боремося за нашу безпеку, свободу, право на життя і щастя. Ми чинимо спротив гнобленню щохвилини нашого життя. З першої хвилини повномасштабного російського вторгнення, з першої хвилини російсько-української війни ми боремося за нашу свободу і незалежність. Але ми також боремося за свободу і незалежність усього демократичного світу.",
    p5: "Ця війна — випробування для всіх нас. Народ України отримав критичну допомогу від усього цивілізованого світу. Але народ України також несе неймовірні втрати. Ми — воїни.",
    p6: "Наші військові та наші цивільні, наші жінки та наші діти — усі на лінії вогню, і кожен бореться за незалежність, за право на свободу, щастя та право самостійно творити власне життя.",
    p7: "З першого дня війни ми мобілізували людей, ресурси, час і навіть простір — усе було підпорядковано нашій Перемозі.",
    p8: "Україна перемагає. Перемога України — це перемога світу. Наша перемога гарантує можливості для подальшого розвитку, створення нового, вдосконалення існуючого. Повернутися до життя. Перемогти автократію та відновити стабільність світового порядку. Повернути до життя Україну з її неймовірним людським та інтелектуальним ресурсом, з її жагою до інновацій та свободою творчості. Ми — творці.",
    p9: "Україна перемагає. Перемога України — це перемога світу. Наша перемога гарантує можливості для подальшого розвитку, створення нового, вдосконалення існуючого. Повернутися до життя. Перемогти автократію та відновити стабільність світового порядку. Повернути до життя Україну з її неймовірним людським та інтелектуальним ресурсом, з її жагою до інновацій та свободою творчості. Ми — творці.",
    p10: "Ми — творці.",
    p11: "Творці вільного і справедливого світу для всіх нас, де існує незалежна Україна, а також гідність і свобода для кожної держави, яка поважає цінності життя і щастя.",
    p12: "Ми перемагаємо. Разом.",
    btn: "ПІДТРИМАТИ УКРАЇНУ"
  },
  ru: {
    title: "Мы поддерживаем Украину!",
    subtitle: "Мы поддерживаем Украину!",
    p1: "Мы — украинцы.",
    p2: "Наша история началась с основания Киева в 482 году. Мы — древнее национальное государство, наполненное мудростью веков. Мы — молодая демократия, творческая, решительная и сильная. Мы жили своей жизнью, исследовали наше прошлое, искали ответы на вызовы современного мира и создавали собственные решения.",
    p3: "24 февраля 2022 года наш мир изменился. С этого дня все украинцы действуют как единый организм. Мы — воины.",
    p4: "Мы боремся за нашу безопасность, свободу, право на жизнь и счастье. Мы сопротивляемся угнетению каждую минуту нашей жизни. С первой минуты полномасштабного российского вторжения, с первой минуты российско-украинской войны мы боремся за нашу свободу и независимость. Но мы также боремся за свободу и независимость всего демократического мира.",
    p5: "Эта война — испытание для всех нас. Народ Украины получил критическую помощь от всего цивилизованного мира. Но народ Украины также несет невероятные потери. Мы — воины.",
    p6: "Наши военные и наши гражданские, наши женщины и наши дети — все на линии огня, и каждый борется за независимость, за право на свободу, счастье и право самостоятельно творить собственную жизнь.",
    p7: "С первого дня войны мы мобилизовали людей, ресурсы, время и даже пространство — всё было подчинено нашей Победе.",
    p8: "Украина побеждает. Победа Украины — это победа мира. Наша победа гарантирует возможности для дальнейшего развития, создания нового, совершенствования существующего. Вернуться к жизни. Победить автократию и восстановить стабильность мирового порядка. Вернуть к жизни Украину с её невероятным человеческим и интеллектуальным ресурсом, с её жаждой инноваций и свободой творчества. Мы — творцы.",
    p9: "Украина побеждает. Победа Украины — это победа мира. Наша победа гарантирует возможности для дальнейшего развития, создания нового, совершенствования существующего. Вернуться к жизни. Победить автократию и восстановить стабильность мирового порядка. Вернуть к жизни Украину с её невероятным человеческим и интеллектуальным ресурсом, с её жаждой инноваций и свободой творчества. Мы — творцы.",
    p10: "Мы — творцы.",
    p11: "Творцы свободного и справедливого мира для всех нас, где существует независимая Украина, а также достоинство и свобода для каждого государства, уважающего ценности жизни и счастья.",
    p12: "Мы побеждаем. Вместе.",
    btn: "ПОДДЕРЖАТЬ УКРАИНУ"
  }
};

export function WeStandWithUkrainePage({ locale }: { locale: Locale }) {
  const content = CONTENT[locale];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link 
          to={localePath(locale, "/")} 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground mb-12 transition-colors"
        >
          <ArrowLeft className="size-4" /> Back to Home
        </Link>
        
        <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            {content.title}
          </h2>
          <h3 className="text-2xl font-bold mt-12 mb-6">
            {content.subtitle}
          </h3>
          <p>{content.p1}</p>
          <p>{content.p2}</p>
          <p>{content.p3}</p>
          <p>{content.p4}</p>
          <p>{content.p5}</p>
          <p>{content.p6}</p>
          <p>{content.p7}</p>
          <p>{content.p8}</p>
          <p>{content.p9}</p>
          <p>{content.p10}</p>
          <p>{content.p11}</p>
          <p>{content.p12}</p>
          
          <div className="mt-12">
            <a 
              href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi" 
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform rounded-sm"
              target="_blank" 
              rel="noreferrer"
            >
              {content.btn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
