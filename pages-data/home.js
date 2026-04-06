const pressCenterItems = [
  {
    title:
      "Инкомсистем: вклад в программу импортозамещения измерительной техники",
    image: "/images/press-center/1.webp",
    tag: "События",
    date: "9.01.2025",
    href: "#",
    tabs: ["articles", "events", "gallery"],
  },
  {
    title: "АБАК ПЛК в Республике Беларусь!",
    image: "/images/press-center/2.webp",
    tag: "Оборудование",
    date: "9.01.2025",
    href: "#",
    tabs: ["articles", "news", "gallery"],
  },
  {
    title:
      "Игры с эмоциями: НИЦ Инкомсистем провел праздник «День защиты детей»",
    image: "/images/press-center/3.webp",
    tag: "События",
    date: "9.01.2025",
    href: "#",
    tabs: ["events", "gallery"],
  },
  {
    title:
      "НИЦ Инкомсистем на Всероссийской конференции «Промышленный искусственный интеллект»",
    image: "/images/press-center/4.webp",
    tag: "События",
    date: "9.01.2025",
    href: "#",
    tabs: ["news", "events", "gallery"],
  },
];

const getPressCenterItemsByTab = (tab) =>
  tab === "all"
    ? pressCenterItems
    : pressCenterItems.filter((item) => item.tabs.includes(tab));

const contactUsFields = [
  {
    id: "contact-name",
    name: "name",
    label: "Имя",
    placeholder: "Имя",
    type: "text",
    autocomplete: "name",
    required: true,
  },
  {
    id: "contact-company",
    name: "company",
    label: "Компания",
    placeholder: "Компания",
    type: "text",
    autocomplete: "organization",
    required: true,
  },
  {
    id: "contact-phone",
    name: "phone",
    label: "Телефон",
    placeholder: "Телефон",
    type: "tel",
    autocomplete: "tel",
    required: true,
  },
  {
    id: "contact-email",
    name: "email",
    label: "Электронная почта",
    placeholder: "mail@company.ru",
    type: "email",
    autocomplete: "email",
    required: true,
  },
  {
    id: "contact-message",
    name: "message",
    label: "Сообщение",
    placeholder: "Сообщение",
    required: true,
  },
];

const engineeringCenterNavigation = [
  {
    label: "Продукция и услуги",
    href: "#",
  },
  {
    label: "Проекты",
    href: "#",
    active: true,
  },
  {
    label: "О компании",
    href: "#",
  },
  {
    label: "Документация",
    href: "#",
  },
  {
    label: "Контакты",
    href: "#",
  },
];

const engineeringCenterDocuments = [
  {
    title: "Каталог продукции",
    type: "PDF",
    size: "1.5 Мб",
    href: "#",
    downloadText: "Скачать",
  },
  {
    title: "Презентация компании",
    type: "PDF",
    size: "1.2 Мб",
    href: "#",
    downloadText: "Скачать",
  },
];

export default {
  "/index.html": {
    title: "Главная страница",
    hero: {
      title: "Инкомсистем",
      description:
        "один из востребованных системных интеграторов и производителей систем коммерческого учета в Российской Федерации",
      caption: "Создан в 1991 году",
      socials: [
        {
          href: "#",
          label: "Telegram",
          icon: "social/telegram",
        },
        {
          href: "#",
          label: "ВКонтакте",
          icon: "social/vk",
        },
      ],
    },
    productionAndServices: {
      title: "Продукция <br>и услуги",
      caption: "6 направлений",
      description:
        "НИЦ «Инкомсистем» один из самых востребованных системных интеграторов",
      background: "/images/production-and-services/bg.webp",
      backgroundMobile: "/images/production-and-services/bg-mobile.webp",
      buttonText: "Продукция и услуги",
      buttonHref: "#",
      items: [
        {
          title: "Контроллеры АБАК",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Контроллеры АБАК",
        },
        {
          title: "Аналитические системы",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Аналитические системы",
        },
        {
          title: "Автоматизированные системы управления",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Автоматизированные системы управления",
        },
        {
          title: "Система измерений и блочное оборудование",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Система измерений и блочное оборудование",
        },
        {
          title: "Метрология и сервис",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Метрология и сервис",
        },
        {
          title: "Сульфинертное покрытие Incomsteel®",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Сульфинертное покрытие Incomsteel®",
        },
      ],
    },
    aboutCompany: {
      title: "О компании",
      description:
        "Научно-инженерный центр ИНКОМСИСТЕМ создан в&nbsp;1991 году на&nbsp;базе НПО Нефтепромавтоматика, которая с&nbsp;1959 года была головной организации МинПрибора СССР в&nbsp;области автоматизации нефтяной и&nbsp;газовой промышленности",
      stats: [
        {
          value: "600",
          suffix: "+",
          title: "проектов запущено",
          text: "Нам доверяют ключевые заказчики нефтегазовой отрасли",
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
      buttonText: "О компании",
    },
    realisedProjects: {
      title: "Реализованные проекты",
      caption: "Последние",
      totalText: "600+ проектов реализовано",
      allProjectsText: "Все проекты",
      allProjectsHref: "#",
      detailsText: "Подробнее",
      projects: [
        {
          year: "2018—2019",
          title:
            "Система измерений количества сжиженного природного газа КриоПАГЗ",
          image: "/images/realised-projects/cards/1.webp",
          logo: "/images/realised-projects/logos/1.webp",
          logoAlt: "Газпром",
          href: "#",
        },
        {
          year: "2018—2019",
          title:
            "Автоматизированная система управления и регулирования расхода газлифтной скважины",
          image: "/images/realised-projects/cards/2.webp",
          logo: "/images/realised-projects/logos/2.webp",
          logoAlt: "Криогенмаш",
          href: "#",
        },
        {
          year: "2018",
          title: "Установка поверочная автоматизированная УПА 1200",
          image: "/images/realised-projects/cards/3.webp",
          logo: "/images/realised-projects/logos/3.webp",
          logoAlt: "Инкомсистем",
          href: "#",
        },
      ],
    },
    pressCenter: {
      title: "Пресс-центр",
      topLinkText: "В пресс-центр",
      topLinkHref: "#",
      buttonText: "В пресс-центр",
      buttonHref: "#",
      tabs: [
        {
          key: "all",
          label: "Все",
          items: getPressCenterItemsByTab("all"),
        },
        {
          key: "articles",
          label: "Статьи",
          items: getPressCenterItemsByTab("articles"),
        },
        {
          key: "news",
          label: "Новости",
          items: getPressCenterItemsByTab("news"),
        },
        {
          key: "events",
          label: "События",
          items: getPressCenterItemsByTab("events"),
        },
        {
          key: "gallery",
          label: "Галерея",
          items: getPressCenterItemsByTab("gallery"),
        },
      ],
    },
    contactUs: {
      caption: "Форма обратной связи",
      title: "Свяжитесь <br>с нами",
      description: "Если есть вопросы — напишите нам",
      background: "/images/contact-us/bg.webp",
      formAction: "#",
      submitText: "Отправить",
      policyText: "Нажимая кнопку, вы даете согласие на обработку&nbsp;",
      policyLinkText: "персональных данных.",
      policyLinkHref: "https://incomsystem.ru/upload/uf/baa/pol.pdf",
      fields: contactUsFields,
    },
    engineeringCenter: {
      copyright: "© 1991—2025",
      documents: engineeringCenterDocuments,
      navigation: engineeringCenterNavigation,
      navigationAriaLabel: "Навигация по разделам",
      label: "Научно-инженерный центр",
      logo: "/images/incomsystem.svg",
      logoAlt: "Инкомсистем",
    },
    footer: {
      caption: "Контакты",
      mapImage: "/images/footer/map.webp",
      mapPin: "/images/footer/pin.svg",
      mapLinkText: "Открыть в Яндекс Картах",
      mapLinkHref:
        "https://yandex.ru/maps/?text=%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B0%D0%BD,%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C,%20%D1%83%D0%BB.%20%D0%92%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%B8%D1%8F,%20104%D0%98",
      companyDetails: [
        "НИЦ «ИНКОМСИСТЕМ»",
        "ИНН 1660002574",
        "ОГРН 1021603619091",
      ],
      addressTitle: "Адрес",
      address: "Республика Татарстан, Казань, ул. Восстания, зд. 104И",
      addressNote: "(ранее ул.Восстания, 100, корпус 13)",
      contactTitle: "Связаться",
      phone: "+7 843 212-50-10",
      phoneRaw: "+78432125010",
      email: "info@incomsteel.ru",
      socialsAriaLabel: "Социальные сети",
      socials: [
        {
          href: "#",
          label: "Telegram",
          icon: "social/telegram",
        },
        {
          href: "#",
          label: "ВКонтакте",
          icon: "social/vk",
        },
      ],
      copyright: "©1991-2025 АО «Научно-инженерный центр «ИНКОМСИСТЕМ»",
      policyText: "Политика в отношении обработки персональных данных",
      policyLink: "https://incomsystem.ru/upload/uf/baa/pol.pdf",
      developer: {
        href: "https://markweber.pro/",
        text: "Разработка сайта — Mark Weber",
        logo: "/images/markweber.svg",
        logoAlt: "Mark Weber",
      },
    },
  },
};
