import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const galleryItems = [
  {
    src: "/images/news-detail/regatta/gallery/1.webp",
    alt: "Яхта с красным парусом на парусной регате",
  },
  {
    src: "/images/news-detail/regatta/gallery/7.webp",
    alt: "Парусная яхта на волнах во время регаты",
  },
  {
    src: "/images/news-detail/regatta/gallery/2.webp",
    alt: "Несколько яхт на дистанции регаты",
  },
  {
    src: "/images/news-detail/regatta/gallery/3.webp",
    alt: "Экипаж яхты во время гонки",
  },
  {
    src: "/images/news-detail/regatta/gallery/4.webp",
    alt: "Яркие паруса и буй на дистанции парусной регаты",
    isWide: true,
  },
  {
    src: "/images/news-detail/regatta/gallery/5.webp",
    alt: "Экипаж у борта яхты с красным парусом",
  },
  {
    src: "/images/news-detail/regatta/gallery/3.webp",
    alt: "Команда яхты во время маневра",
  },
  {
    src: "/images/news-detail/regatta/gallery/1.webp",
    alt: "Яхта с красным парусом вблизи",
  },
  {
    src: "/images/news-detail/regatta/gallery/5.webp",
    alt: "Спортсмены на борту яхты во время гонки",
  },
  {
    src: "/images/news-detail/regatta/gallery/2.webp",
    alt: "Парусные яхты на воде в солнечный день",
  },
  {
    src: "/images/news-detail/regatta/gallery/6.webp",
    alt: "Паруса и буй на фоне воды",
  },
  {
    src: "/images/news-detail/regatta/gallery/7.webp",
    alt: "Яхта под белым парусом на дистанции",
  },
  {
    src: "/images/news-detail/regatta/gallery/5.webp",
    alt: "Участники регаты на палубе яхты",
  },
  {
    src: "/images/news-detail/regatta/gallery/4.webp",
    alt: "Широкий кадр с парусами и буем на акватории",
    isWide: true,
  },
];

const albumItems = [
  {
    title:
      "Инкомсистем: вклад в программу импортозамещения измерительной техники",
    image: "/images/news-detail/regatta/albums/1.webp",
    tag: "События",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
  {
    title: "АБАК ПЛК в Республике Беларусь!",
    image: "/images/news-detail/regatta/albums/2.webp",
    tag: "Оборудование",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
  {
    title:
      "Игры с эмоциями: НИЦ Инкомсистем провел праздник «День защиты детей»",
    image: "/images/news-detail/regatta/albums/3.webp",
    tag: "События",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
  {
    title:
      "НИЦ Инкомсистем на Всероссийской конференции «Промышленный искусственный интеллект»",
    image: "/images/news-detail/regatta/albums/4.webp",
    tag: "События",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
];

const galleryContactUs = {
  ...contactUs,
  className: "contact-us--press-center-subscribe",
  caption: "Подписка",
  title: "Подписывайтесь",
  description: "чтобы быть в курсе наших новостей",
  submitText: "Подписаться",
  fields: [
    {
      id: "gallery-subscribe-email",
      name: "email",
      label: "Электронная почта",
      placeholder: "mail@company.ru",
      type: "email",
      autocomplete: "email",
      required: true,
    },
  ],
};

export default {
  "/gallery.html": {
    title: "Парусная регата - 2024",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: galleryContactUs,
    engineeringCenter: {
      ...engineeringCenter,
      className: "engineering-center--press-center",
    },
    gallery: {
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
            label: "Парусная регата-2024",
          },
        ],
      },
      hero: {
        image: "/images/news-detail/regatta/banner.webp",
        imageAlt: "Парусная регата на акватории в Казани",
        tags: ["События", "Выставка"],
        date: "9.01.2025",
        datetime: "2025-01-09",
        title: "Парусная регата - 2024",
      },
      gallery: {
        ariaLabel: "Фотографии с парусной регаты 2024",
        buttonText: "Загрузить еще",
        items: galleryItems,
      },
    },
    otherAlbums: {
      title: "Другие альбомы",
      ariaLabel: "Навигация по другим альбомам",
      prevLabel: "Предыдущие альбомы",
      nextLabel: "Следующие альбомы",
      items: albumItems,
    },
  },
};
