import { contactUs as baseContactUs, mobileMenu } from "./shared.js";

const pressCenterItems = [
  {
    title:
      "Инкомсистем: вклад в программу импортозамещения измерительной техники",
    image: "/images/press-center/1.webp",
    tags: ["События", "Экспертные мнения"],
    date: "9 января 2025",
    href: "#",
    tabs: ["expert-opinions", "events", "gallery"],
  },
  {
    title: "АБАК ПЛК в Республике Беларусь!",
    image: "/images/press-center/2.webp",
    tag: "Оборудование",
    date: "9 января 2025",
    href: "#",
    tabs: ["news", "gallery"],
  },
  {
    title:
      "Игры с эмоциями: НИЦ Инкомсистем провел праздник «День защиты детей»",
    image: "/images/press-center/3.webp",
    tag: "События",
    date: "9 января 2025",
    href: "#",
    tabs: ["events", "gallery"],
  },
  {
    title:
      "НИЦ Инкомсистем на Всероссийской конференции «Промышленный искусственный интеллект»",
    image: "/images/press-center/4.webp",
    tag: "События",
    date: "9 января 2025",
    href: "#",
    tabs: ["news", "events", "gallery"],
  },
];

const getPressCenterItemsByTab = (tab) =>
  tab === "all"
    ? pressCenterItems
    : pressCenterItems.filter((item) => item.tabs.includes(tab));

const referenceDirectionOptions = [
  {
    id: "home-reference-direction-plc",
    label: "Контроллеры АБАК",
    value: "abak-controllers",
  },
  {
    id: "home-reference-direction-control",
    label: "Автоматизированные системы управления",
    value: "automated-control-systems",
  },
  {
    id: "home-reference-direction-measurement",
    label: "Системы измерений и блочное оборудование",
    value: "measurement-systems-and-block-equipment",
  },
  {
    id: "home-reference-direction-analytics",
    label: "Аналитические системы",
    value: "analytics-systems",
  },
  {
    id: "home-reference-direction-incomsteel",
    label: "Сульфинертное нанопокрытие incomsteel",
    value: "sulfinert-nanocoating-incomsteel",
  },
  {
    id: "home-reference-direction-metrology",
    label: "Метрология и сервис",
    value: "metrology-and-service",
  },
];

const referenceRequestFields = [
  {
    isSelect: true,
    label: "Выберите направление",
    name: "direction",
    placeholder: "Аналитические системы",
    ariaLabel: "Выберите направление",
    className: "contact-us__select",
    required: true,
    hideRequiredMark: true,
    options: referenceDirectionOptions,
  },
  {
    id: "home-reference-phone",
    name: "phone",
    label: "Телефон",
    placeholder: "Телефон",
    type: "tel",
    autocomplete: "tel",
    required: true,
  },
  {
    id: "home-reference-email",
    name: "email",
    label: "Электронная почта",
    placeholder: "mail@company.ru",
    type: "email",
    autocomplete: "email",
    required: true,
  },
  {
    id: "home-reference-message",
    name: "message",
    label: "Сообщение",
    placeholder: "Сообщение",
    type: "text",
    required: true,
    isTextarea: true,
  },
];

const engineeringCenterNavigation = [
  {
    label: "Продукция и услуги",
    href: "#",
  },
  {
    label: "Реализованные проекты",
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
      socials: mobileMenu.socials,
    },
    productionAndServices: {
      title: "Продукция <br>и услуги",
      background: "/images/production-and-services/bg.webp",
      backgroundMobile: "/images/production-and-services/bg-mobile.webp",
      buttonText: "Продукция и услуги",
      buttonHref: "/production-and-services.html",
      items: [
        {
          title: "Контроллеры АБАК",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Контроллеры АБАК",
        },
        {
          title: "Автоматизированные системы управления",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Автоматизированные системы управления",
        },
        {
          title: "Системы измерения и блочное оборудование",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Системы измерения и блочное оборудование",
        },
        {
          title: "Аналитические системы",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Аналитические системы",
        },
        {
          title: "Сульфинертное нанопокрытие incomsteel",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Сульфинертное нанопокрытие incomsteel",
        },
        {
          title: "Метрология и сервис",
          href: "#",
          image: "/images/production-and-services/items/plc-abak.webp",
          imageAlt: "Метрология и сервис",
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
      buttonHref: "#",
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
    realisedProjectsIndustries: {
      title: "Реализованные проекты <br>по отраслям",
      detailsText: "Подробнее",
      items: [
        {
          title: "Нефтегазовая отрасль",
          image: "/images/realised-projects-industries/oil-gas.webp",
          href: "#",
        },
        {
          title: "Химическая отрасль",
          image: "/images/realised-projects-industries/chemical.webp",
          href: "#",
        },
        {
          title: "Металлургическая отрасль",
          image: "/images/realised-projects-industries/metallurgy.webp",
          href: "#",
        },
        {
          title: "Горнодобывающая отрасль",
          image: "/images/realised-projects-industries/mining.webp",
          href: "#",
        },
        {
          title: "Сельскохозяйственная отрасль",
          image: "/images/realised-projects-industries/agriculture.webp",
          href: "#",
        },
        {
          title: "Энергетика",
          image: "/images/realised-projects-industries/energy.webp",
          href: "#",
        },
      ],
    },
    homeProjectsDownload: {
      text: "Скачать файл в формате PDF",
      document: {
        title: "Выполненные проекты",
        type: "PDF",
        size: "1.2 Мб",
        href: "#",
        downloadText: "Скачать",
      },
    },
    pressCenter: {
      title: "Пресс-центр",
      buttonText: "В пресс-центр",
      buttonHref: "#",
      tabs: [
        {
          key: "all",
          label: "Все",
          items: getPressCenterItemsByTab("all"),
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
        {
          key: "expert-opinions",
          label: "Экспертные мнения",
          items: getPressCenterItemsByTab("expert-opinions"),
        },
      ],
    },
    homeVideos: {
      title:
        "Научный потенциал, тесные связи с проектными институтами, инновационные решения, позволили Инкомсистем создать безупречную репутацию, которой доверяют ключевые заказчики нефтегазовой отрасли",
      navigationAriaLabel: "Навигация по видео",
      previousSlideLabel: "Предыдущее видео",
      nextSlideLabel: "Следующее видео",
      items: [
        {
          caption: "Решения НИЦ «ИНКОМСИСТЕМ» на РМЭФ-2026",
          image: "/images/home-videos/1.webp",
          mobileImage: "/images/home-videos/mobile-source.webp",
          imageAlt:
            "Стенд Инкомсистем с оборудованием АБАК на отраслевом мероприятии",
          videoHref: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          videoType: "youtube",
          ariaLabel:
            "Открыть видео «Решения НИЦ Инкомсистем на РМЭФ-2026»",
        },
        {
          caption: "Решения НИЦ «ИНКОМСИСТЕМ» на РМЭФ-2026",
          image: "/images/home-videos/2.webp",
          mobileImage: "/images/home-videos/mobile-source.webp",
          imageAlt: "Промышленный контроллер АБАК крупным планом",
          videoHref: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
          videoType: "youtube",
          ariaLabel:
            "Открыть тестовое видео о промышленных решениях Инкомсистем",
        },
        {
          caption: "Решения НИЦ «ИНКОМСИСТЕМ» на РМЭФ-2026",
          image: "/images/home-videos/1.webp",
          mobileImage: "/images/home-videos/mobile-source.webp",
          imageAlt:
            "Демонстрация оборудования Инкомсистем на выставочном стенде",
          videoHref: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
          videoType: "youtube",
          ariaLabel:
            "Открыть тестовое видео с демонстрацией оборудования Инкомсистем",
        },
      ],
    },
    referenceRequestContactUs: {
      className: "contact-us--reference-request",
      caption: "Референс лист",
      title: "Запрос <br>референс <br>листа",
      description: "",
      background: "/images/contact-us/bg.webp",
      backgroundMobile: "/images/contact-us/bg-mobile.webp",
      formAction: "#",
      submitText: "Запросить",
      policyText:
        "Нажимая «Запросить», Вы даете свое согласие на&nbsp;обработку персональных данных и принимаете&nbsp;",
      policyLinkText: "условия политики конфиденциальности",
      policyLinkHref: "https://incomsystem.ru/upload/uf/baa/pol.pdf",
      fields: referenceRequestFields,
    },
    contactUs: {
      ...baseContactUs,
      title: "Напишите <br>нам",
      description: "Наши специалисты свяжутся с вами",
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
    mobileMenu,
    footer: {
      mapImage: "/images/footer/map.webp",
      mapImageMobile: "/images/footer/map-mobile.webp",
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
      socials: mobileMenu.socials,
      copyright: "©1991-2025 АО «Научно-инженерный центр «ИНКОМСИСТЕМ»",
      policyText: "Политика в отношении обработки персональных данных",
      policyLink: "https://incomsystem.ru/upload/uf/baa/pol.pdf",
      developer: {
        href: "https://markweber.pro/",
        text: "Дизайн и разработка сайта — Mark Weber",
        logo: "/images/markweber.svg",
        logoAlt: "Mark Weber",
      },
    },
  },
};
