import Image from "next/image";
import EventSlider, { SliderData } from "@/components/home/EventSlider";
import CtaBanner from "@/components/CtaBanner";
import Button from "@/components/Button";
import { ArrowRightIcon, RadioButtonIcon, CalendarBlankIcon, BookOpenIcon } from "@phosphor-icons/react/dist/ssr";
import CategoryBlock from "@/components/CategoryBlock";
import NewsCard, { NewsData } from "@/components/NewsCard";
import EventCard, {EventData} from "@/components/EventCard";
import ArticleCard, {ArticleData} from "@/components/ArticleCard";

const MOCK_SLIDES: SliderData[] = [
  {
    id: "1",
    title: "Мультижанровий музичний фестиваль: Брудний Пес",
    imageSrc: "/images/mock_1.jpg",
    tagText: "Подія",
    buttonText: "Детально",
    buttonIntent: "primary",
    href: "/"
  },
  {
    id: "2",
    title: "Збір на авто для ЗСУ разом з AutoRIA",
    imageSrc: "/images/mock_2.png",
    tagText: "Збір",
    buttonText: "Задонатити",
    buttonIntent: "onContent",
    href: "/"
  }
];

const MOCK_NEWS: NewsData[] = [
  {
    id: "1",
    title: "NEUROLOGIC PATHOLOGY випускають сингл із майбутнього LP",
    description: "Днями брутал-дез-метал-гурт представив нову композицію \"Cadaverous Storm\", натхненну серією фільмів \"Пила\".",
    tags: ["Реліз"],
    imageSrc: "/images/mock_news_1.png",
    createdAt: "Сьогодні, 12:43",
    url: "/"
  },
  {
    id: "2",
    title: "ANNA: новий реліз та ребрендинг гурту",
    description: "Найближчим часом гурт представить абсолютно новий логотип. Паралельно вся дискографія, включаючи треки «Карматреш», «Ствердження» та «Виродок», переноситься на цифрові стрімінгові платформи.",
    tags: ["Реліз", "Гурт"],
    imageSrc: "/images/mock_news_2.png",
    createdAt: "16.06.2026",
    url: "/"
  },
  {
    id: "3",
    title: "“Група Корба” разом з “Туди-Сюди і Смерть” проводять перший концерт в Discord",
    description: "Отримати унікальний досвід можна буде на онлайн-концерті у соцмережі Discord у неділю, 21 червня о 18:00.",
    tags: ["Подія"],
    imageSrc: "/images/mock_news_3.png",
    createdAt: "15.06.2026",
    url: "/"
  }
];

const MOCK_EVENTS: EventData[] = [
  {
    id: "1",
    title: "КОНЦЕРТ ГУРТУ АННА ТА СПЕЦІАЛЬНІ ГОСТІ",
    participants: ["АННА", "0%MERCURY", "SHIP HER SON"],
    address: "КИЇВ, КЛУБ НА !FESTREPUBLIC",
    price: "750",
    date: "26 ЧЕРВНЯ / ПТ",
    imageSrc: "/images/mock_event_1.jpg",
    url: "/"
  },
  {
    id: "2",
    title: "РОЗКВІТ",
    participants: [
      "Avenue",
      "Pale Heaven",
      "Кожного Дня",
      "Nonsense's",
      "G.Inc",
      "sportcafe",
      "Haze",
      "Compass",
      "Merula",
      "composexigirl",
      "rhodobub",
      "fucking test"
    ],
    address: "ЧЕРНІВЦІ, ФАН ПАРК",
    price: "400/800",
    date: "27 ЧЕРВНЯ / СБ",
    imageSrc: "/images/mock_event_2.jpg",
    url: "/"
  }
];

const MOCK_ARTICLES: ArticleData[] = [
  {
    id: "1",
    title: "FAINE MISTO 2026: 15 ГУРТІВ, НА ЯКІ ВАРТО ЗВЕРНУТИ УВАГУ",
    description: "50 днів залишається до проведення \"Файного Міста\", а окремі категорії квитків уже близькі до солд-ауту. Тож чи варто поспішати купляти свій? Оглядаємо 15 гуртів, які можуть вплинути на ваше рішення.",
    imageSrc: "/images/mock_article_1.jpg",
    tags: ["рекомендуємо"],
    createdAt: "11.06.2026",
    timeToRead: "15 хв читання",
    url: "/"
  },
  {
    id: "2",
    title: "МУЗИКАНТИ У ВІЙСЬКУ: ВІД БРАКУ СНУ ДО ПЛАНІВ НА ДЕМОБІЛІЗАЦІЮ",
    description: "Чи мають українські музиканти в лавах ЗСУ змогу грати на улюбленому інструменті, чи хочуть творити й де бачать себе після демобілізації — про все це питаємо в них самих.",
    imageSrc: "/images/mock_article_2.jpg",
    tags: ["війна", "життя"],
    createdAt: "23.05.2026",
    timeToRead: "7 хв читання",
    url: "/"
  }
];

export default function Home() {
  return (
    <main className="flex flex-col pt-10 gap-14">
      <section id="hero" className="flex flex-col gap-6">
        <EventSlider slides={MOCK_SLIDES} />
        <CtaBanner
          title="Граєш у гурті, організовуєш гіг чи маєш крутий інфопривід?"
          description="Поділися свіжим релізом, анонсом події або власною статтею через коротку форму — і ми опублікуємо це в журналі."
        >
          <Button intent="onContent">
            Запропонувати
            <ArrowRightIcon weight="bold" size={12} />
          </Button>
        </CtaBanner>
      </section>

      <section id="news">
        <CategoryBlock
          title="Свіжі новини"
          icon={RadioButtonIcon}
          buttonText="Всі новини"
        >
          <div className="flex flex-col divide-y divide-content-muted">
            {MOCK_NEWS.map((news) => (
              <div key={news.id} className="pt-6 pb-6 first:pt-0 last:pb-0">
                <NewsCard newsData={news} />
              </div>
            ))}
          </div>
        </CategoryBlock>
      </section>

      <section id="events">
        <CategoryBlock
          title="Найближчі події"
          icon={CalendarBlankIcon}
          buttonText="Уся афіша подій"
        >
          <div className="grid grid-cols-2 gap-6">
            {MOCK_EVENTS.map((event) => (
              <EventCard key={event.id} eventData={event} />
            ))}
          </div>
        </CategoryBlock>
      </section>

      <section id="articles">
        <CategoryBlock
          title="Статті"
          icon={BookOpenIcon}
          buttonText="Читати всі статті"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_ARTICLES.map((article) => (
              <ArticleCard key={article.id} articleData={article} />
            ))}
          </div>
        </CategoryBlock>
      </section>
    </main>
  );
}