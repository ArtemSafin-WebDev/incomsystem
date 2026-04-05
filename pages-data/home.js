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
  },
};
