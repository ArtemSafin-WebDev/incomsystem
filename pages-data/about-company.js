import { footer, mobileMenu } from "./shared.js";

const awardsItems = Array.from({ length: 6 }, () => ({
  title: "100 Лучших Товаров России",
  image: "/images/press-center/1.webp",
  tag: "Награды",
  date: "9.01.2025",
  href: "#",
}));

const leadershipProfiles = [
  {
    name: "Залаков Наиль Ринатович",
    position: "Генеральный директор",
    image: "/images/about-company/company-leadership/1.webp",
    imageAlt: "Залаков Наиль Ринатович",
  },
  {
    name: "Байбеков Адель Шамилевич",
    position: "Операционный директор",
    image: "/images/about-company/company-leadership/2.webp",
    imageAlt: "Байбеков Адель Шамилевич",
  },
  {
    name: "Саматов Фоат Фаргатович",
    position: "Операционный директор",
    image: "/images/about-company/company-leadership/3.webp",
    imageAlt: "Саматов Фоат Фаргатович",
  },
];

const companyLeadershipItems = [
  leadershipProfiles[0],
  leadershipProfiles[1],
  leadershipProfiles[2],
  { ...leadershipProfiles[0] },
  { ...leadershipProfiles[2] },
];

export default {
  "/about-company.html": {
    title: "О компании",
    headerCompactTheme: true,
    companyHero: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "О компании",
          },
        ],
      },
      title: "НИЦ “Инкомсистем”",
      caption: "Создана в 1991 году",
      image: "/images/company-hero/hero.webp",
      imageAlt: "",
      description:
        "Инкомсистем один из востребованных системных интеграторов и&nbsp;производителей систем коммерческого учета в&nbsp;Российской Федерации",
      videoText: "Смотреть видео о компании",
      videoHref: "#",
      statsCaption: "Цифры о компании",
      stats: [
        {
          value: "600",
          suffix: "+",
          title: "проектов запущено",
          text: "Нам доверяют ключевые заказчики нефтегазовой отрасли",
          accent: true,
        },
        {
          value: "30",
          suffix: "+",
          title: "лет на рынке",
          text: "Нам доверяют ключевые заказчики нефтегазовой отрасли",
        },
        {
          value: "700",
          suffix: "+",
          title: "человек в штате",
          text: "Нам доверяют ключевые заказчики нефтегазовой отрасли",
        },
      ],
    },
    companyFeatures: {
      caption: "Компания",
      title:
        "Начиная с 1991 года специалистами Центра внедрены сотни информационно-управляющих систем, обеспечивающих автоматизированное управление и&nbsp;противоаварийную защиту на&nbsp;предприятиях нефтегазодобычи и&nbsp;нефтехимии",
      items: [
        {
          title: "Более 30 лет опыта в&nbsp;ключевых отраслях",
          text: "Мы обладаем богатым опытом, накопленным более чем за&nbsp;30 лет работы в&nbsp;различных отраслях промышленности, включая энергетику, нефтехимию и&nbsp;другие стратегически важные секторы.",
        },
        {
          title: "Экспертиза в&nbsp;международных проектах",
          text: "Успешно реализуем проекты, соответствующие строгим международным стандартам, обеспечивая надежность и&nbsp;безопасность наших решений в&nbsp;глобальном масштабе.",
        },
        {
          title: "Решаем сложные задачи комплексно",
          text: "Наша команда профессионалов способна разрабатывать инновационные решения для задач любой сложности, предлагая комплексный подход, от&nbsp;проектирования до&nbsp;внедрения.",
        },
        {
          title: "Собственное производство высокотехнологичного оборудования",
          text: "Инвестируя в&nbsp;развитие, мы создали собственные производственные мощности для выпуска передовых контроллеров и&nbsp;вычислителей АБАК, гарантируя качество и&nbsp;контроль на&nbsp;каждом этапе.",
        },
        {
          title: "Автоматизация и&nbsp;реконструкция под&nbsp;ключ",
          text: "Обладаем уникальным опытом реконструкции устаревших систем автоматизации, внедряя современные решения для повышения эффективности и&nbsp;надежности производства.",
        },
        {
          title: "Гарантия качества на&nbsp;всех этапах",
          text: "Тщательно контролируем качество на&nbsp;всех этапах жизненного цикла проекта, от&nbsp;разработки документации до&nbsp;создания и&nbsp;поставки оборудования, обеспечивая соответствие самым высоким требованиям.",
        },
        {
          title: "Полное сервисное сопровождение",
          text: "Предоставляем комплексное сервисное обслуживание поставленного оборудования, включая техническую поддержку, программное обеспечение и&nbsp;обучение специалистов заказчика.",
        },
        {
          title: "Надежный партнер, ориентированный на&nbsp;результат",
          text: "Мы ценим доверие наших клиентов и&nbsp;несем полную ответственность за&nbsp;свои решения, гарантируя успешное достижение поставленных целей и&nbsp;долгосрочное сотрудничество.",
        },
      ],
    },
    companyHistory: {
      title: "История компании",
      navigationAriaLabel: "Навигация слайдера с историей компании",
      previousSlideLabel: "Предыдущий год",
      nextSlideLabel: "Следующий год",
      items: [
        {
          year: "1998",
          text: "Короткий текст, описывающий событие\\достижение\\значимый шаг и&nbsp;т.д.",
        },
        {
          year: "2000",
          text: "Короткий текст, описывающий событие\\достижение\\значимый шаг и&nbsp;т.д.",
        },
        {
          year: "2003",
          text: "Короткий текст, описывающий событие\\достижение\\значимый шаг и&nbsp;т.д.",
        },
        {
          year: "2006",
          text: "Короткий текст, описывающий событие\\достижение\\значимый шаг и&nbsp;т.д.",
        },
        {
          year: "2006",
          text: "Короткий текст, описывающий событие\\достижение\\значимый шаг и&nbsp;т.д.",
        },
      ],
    },
    harshConditions: {
      title:
        "Спроектированные и&nbsp;изготовленные системы эффективно эксплуатируются в&nbsp;самых сложных климатических условиях, на&nbsp;морских платформах, на&nbsp;арктических объектах",
      navigationAriaLabel: "Навигация слайдера с примерами эксплуатации",
      previousSlideLabel: "Предыдущий слайд",
      nextSlideLabel: "Следующий слайд",
      items: [
        {
          caption: "Морская платформа в море",
          image: "/images/harsh-conditions/1.webp",
          imageAlt: "",
        },
        {
          caption: "Морская платформа в море",
          image: "/images/harsh-conditions/2.webp",
          imageAlt: "",
        },
      ],
    },
    activityDirections: {
      className: "production-and-services--about-company",
      title: "Направления <br>деятельности",
      caption: "6 направлений",
      background: "/images/production-and-services/bg.webp",
      backgroundMobile: "/images/production-and-services/bg-mobile.webp",
      items: [
        {
          title: "Контроллеры АБАК",
          href: "#",
          image: "/images/about-company/activity-directions/plc-abak.webp",
          imageAlt: "Контроллеры АБАК",
        },
        {
          title: "Аналитические системы",
          href: "#",
          image: "/images/about-company/activity-directions/plc-abak.webp",
          imageAlt: "Аналитические системы",
        },
        {
          title: "Автоматизированные системы управления",
          href: "#",
          image: "/images/about-company/activity-directions/plc-abak.webp",
          imageAlt: "Автоматизированные системы управления",
        },
        {
          title: "Система измерений и блочное оборудование",
          href: "#",
          image: "/images/about-company/activity-directions/plc-abak.webp",
          imageAlt: "Система измерений и блочное оборудование",
        },
        {
          title: "Метрология и&nbsp;сервис",
          href: "#",
          image: "/images/about-company/activity-directions/plc-abak.webp",
          imageAlt: "Метрология и сервис",
        },
        {
          title: "Сульфинертное покрытие Incomsteel®",
          href: "#",
          image: "/images/about-company/activity-directions/plc-abak.webp",
          imageAlt: "Сульфинертное покрытие Incomsteel®",
        },
      ],
    },
    awards: {
      title: "Награды",
      navigationAriaLabel: "Навигация слайдера с наградами компании",
      previousSlideLabel: "Предыдущая награда",
      nextSlideLabel: "Следующая награда",
      items: awardsItems,
    },
    companyLeadership: {
      title: "Руководство",
      navigationAriaLabel: "Навигация слайдера с руководством компании",
      previousSlideLabel: "Предыдущая карточка руководителя",
      nextSlideLabel: "Следующая карточка руководителя",
      items: companyLeadershipItems,
      participation: {
        image: "/images/about-company/company-leadership/rostandart-emblem.png",
        imageAlt: "Герб",
        text: "Специалисты принимают активное участие в&nbsp;разработке государственных стандартов, методик измерения и&nbsp;входят в&nbsp;Технические Комитеты РОССТАНДАРТА",
      },
    },
    companyReviews: {
      title: "Отзывы",
      countLabel: "98 отзывов",
      navigationAriaLabel: "Навигация слайдера с отзывами клиентов",
      previousSlideLabel: "Предыдущий отзыв",
      nextSlideLabel: "Следующий отзыв",
      items: [
        {
          company: "Акционерное общество “Газпром Газэнергосеть”",
          href: "#",
          logo: "/images/company-reviews/gazprom.svg",
          image: "/images/company-reviews/review-letter.webp",
          imageAlt: "Письменный отзыв компании Газпром Газэнергосеть",
        },
        {
          company: "Акционерное общество “Башнефть”",
          href: "#",
          logo: "/images/company-reviews/bashneft.svg",
          image: "/images/company-reviews/review-letter.webp",
          imageAlt: "Письменный отзыв компании Башнефть",
        },
        {
          company: "Акционерное общество “Газпром Газэнергосеть”",
          href: "#",
          logo: "/images/company-reviews/gazprom.svg",
          image: "/images/company-reviews/review-letter.webp",
          imageAlt: "Письменный отзыв компании Газпром Газэнергосеть",
        },
        {
          company: "Акционерное общество “Газпром Газэнергосеть”",
          href: "#",
          logo: "/images/company-reviews/gazprom.svg",
          image: "/images/company-reviews/review-letter.webp",
          imageAlt: "Письменный отзыв компании Газпром Газэнергосеть",
        },
        {
          company: "Акционерное общество “Газпром Газэнергосеть”",
          href: "#",
          logo: "/images/company-reviews/gazprom.svg",
          image: "/images/company-reviews/review-letter.webp",
          imageAlt: "Письменный отзыв компании Газпром Газэнергосеть",
        },
      ],
    },
    mobileMenu,
    footer,
  },
};
