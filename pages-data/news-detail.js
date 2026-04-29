import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

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

const otherArticleItems = [
  ...pressCenterItems,
  {
    title: "Инкомсистем расширяет линейку решений для промышленной автоматизации",
    image: "/images/press-center/1.webp",
    tag: "Оборудование",
    date: "12.01.2025",
    href: "#",
  },
  {
    title: "Новые подходы к подготовке инженерных команд для сложных проектов",
    image: "/images/press-center/2.webp",
    tag: "Статьи",
    date: "15.01.2025",
    href: "#",
  },
  {
    title: "Инкомсистем принял участие в отраслевой встрече производителей",
    image: "/images/press-center/3.webp",
    tag: "События",
    date: "20.01.2025",
    href: "#",
  },
  {
    title: "Практика внедрения отечественных контроллеров на объектах заказчиков",
    image: "/images/press-center/4.webp",
    tag: "Статьи",
    date: "24.01.2025",
    href: "#",
  },
];

const galleryImages = Array.from({ length: 8 }, (_, index) => ({
  src: "/images/news-detail/gallery.webp",
  alt: `Участники финала чемпионата «Профессионалы», фото ${index + 1}`,
}));

const newsDetailContactUs = {
  ...contactUs,
  className: "contact-us--press-center-subscribe",
  caption: "Подписка",
  title: "Подписывайтесь",
  description: "чтобы быть в курсе наших новостей",
  submitText: "Подписаться",
  fields: [
    {
      id: "news-detail-subscribe-email",
      name: "email",
      label: "Электронная почта",
      placeholder: "mail@company.ru",
      type: "email",
      autocomplete: "email",
      required: true,
    },
  ],
};

const newsDetailContent = {
  breadcrumbs: {
    ariaLabel: "Хлебные крошки",
    items: [
      {
        label: "Главная",
        href: "/",
      },
      {
        label: "Пресс-центр",
        href: "/press-center.html",
      },
      {
        label:
          "Чемпионат «Профессионалы»: итоги финала в Санкт-Петербурге",
      },
    ],
  },
  contentImage: {
    src: "/images/news-detail/content.webp",
    alt: "Участники чемпионата с флагом на трибунах",
  },
  sideImage: {
    src: "/images/news-detail/side.webp",
    alt: "Участники чемпионата на трибунах",
  },
  gallery: {
    ariaLabel: "Фотографии с финала чемпионата «Профессионалы»",
    prevLabel: "Предыдущее фото",
    nextLabel: "Следующее фото",
    images: galleryImages,
  },
};

const newsDetailHero = {
  tags: ["События", "Выставка"],
  date: "9.01.2025",
  datetime: "2025-01-09",
  title: "Чемпионат «Профессионалы»: итоги финала в Санкт-Петербурге",
};

export default {
  "/news-detail.html": {
    title: "Чемпионат «Профессионалы»: итоги финала в Санкт-Петербурге",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: newsDetailContactUs,
    engineeringCenter: {
      ...engineeringCenter,
      className: "engineering-center--press-center",
    },
    newsDetail: {
      ...newsDetailContent,
      hero: {
        ...newsDetailHero,
        image: "/images/news-detail/banner.webp",
        imageAlt:
          "Участники чемпионата «Профессионалы» на трибунах в Санкт-Петербурге",
      },
    },
    otherArticles: {
      title: "Другие статьи",
      ariaLabel: "Навигация по другим статьям",
      prevLabel: "Предыдущие статьи",
      nextLabel: "Следующие статьи",
      items: otherArticleItems,
    },
  },
  "/news-detail-no-image.html": {
    title: "Чемпионат «Профессионалы»: итоги финала в Санкт-Петербурге",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: newsDetailContactUs,
    engineeringCenter: {
      ...engineeringCenter,
      className: "engineering-center--press-center",
    },
    newsDetail: {
      ...newsDetailContent,
      hero: {
        ...newsDetailHero,
        isPlain: true,
      },
    },
    pressCenter: {
      title: "Другие статьи",
      topLinkText: "В пресс-центр",
      topLinkHref: "/press-center.html",
      scrollHintText: "Листайте влево/вправо",
      buttonText: "В пресс-центр",
      buttonHref: "/press-center.html",
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
  },
};
