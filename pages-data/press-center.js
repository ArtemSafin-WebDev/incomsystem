import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const pressCenterPageItems = [
  {
    title:
      "Инкомсистем: вклад в программу импортозамещения измерительной техники",
    image: "/images/press-center/1.webp",
    tag: "События",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
  {
    title: "АБАК ПЛК в Республике Беларусь!",
    image: "/images/press-center/2.webp",
    tag: "Оборудование",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
  {
    title:
      "Игры с эмоциями: НИЦ Инкомсистем провел праздник «День защиты детей»",
    image: "/images/press-center/3.webp",
    tag: "События",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
  {
    title:
      "НИЦ Инкомсистем на Всероссийской конференции «Промышленный искусственный интеллект»",
    image: "/images/press-center/4.webp",
    tag: "События",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
  {
    title:
      "Инкомсистем: вклад в программу импортозамещения измерительной техники",
    image: "/images/press-center/1.webp",
    tag: "События",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
  {
    title: "АБАК ПЛК в Республике Беларусь!",
    image: "/images/press-center/2.webp",
    tag: "Оборудование",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
  {
    title:
      "Игры с эмоциями: НИЦ Инкомсистем провел праздник «День защиты детей»",
    image: "/images/press-center/3.webp",
    tag: "События",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
  {
    title:
      "НИЦ Инкомсистем на Всероссийской конференции «Промышленный искусственный интеллект»",
    image: "/images/press-center/4.webp",
    tag: "События",
    date: "9.01.2025",
    datetime: "2025-01-09",
    href: "#",
  },
];

const pressCenterContactUs = {
  ...contactUs,
  className: "contact-us--press-center-subscribe",
  caption: "Подписка",
  title: "Подписывайтесь",
  description: "чтобы быть в курсе наших новостей",
  submitText: "Подписаться",
  fields: [
    {
      id: "press-center-subscribe-email",
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
  "/press-center.html": {
    title: "Пресс-центр",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: pressCenterContactUs,
    engineeringCenter: {
      ...engineeringCenter,
      className: "engineering-center--press-center",
    },
    pressCenterPage: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Пресс-центр",
          },
        ],
      },
      title: "Пресс-центр",
      hero: {
        image: "/images/press-center/banner.webp",
        imageAlt:
          "Участники чемпионата «Профессионалы» на трибунах в Санкт-Петербурге",
        tags: ["События", "Выставка"],
        date: "9.01.2025",
        datetime: "2025-01-09",
        title: "Чемпионат «Профессионалы»: итоги финала в Санкт-Петербурге",
        text:
          "В Санкт-Петербурге завершился финал Чемпионата по профессиональному мастерству «Профессионалы», который проходил с 26 по 30 ноября на площадке КВЦ «Экспофорум»",
        href: "#",
        linkText: "Подробнее",
      },
      filters: {
        action: "#",
        search: {
          label: "Поиск по новостям",
          name: "q",
          placeholder: "Введите ваш запрос",
        },
        selects: [
          {
            label: "Поиск по году",
            name: "year",
            placeholder: "2023",
            ariaLabel: "Выберите год",
            options: [
              {
                id: "press-center-year-2025",
                label: "2025",
                value: "2025",
              },
              {
                id: "press-center-year-2024",
                label: "2024",
                value: "2024",
              },
              {
                id: "press-center-year-2023",
                label: "2023",
                value: "2023",
              },
            ],
          },
          {
            label: "Рубрика",
            name: "category",
            placeholder: "Выберите рубрику",
            ariaLabel: "Выберите рубрику",
            clearable: true,
            clearAriaLabel: "Очистить рубрику",
            options: [
              {
                id: "press-center-category-exhibition",
                label: "Выставка",
                value: "exhibition",
                checked: true,
              },
              {
                id: "press-center-category-events",
                label: "События",
                value: "events",
              },
              {
                id: "press-center-category-equipment",
                label: "Оборудование",
                value: "equipment",
              },
            ],
          },
        ],
        countText: "Всего 8 новостей",
      },
      categoriesAriaLabel: "Категории пресс-центра",
      categories: [
        {
          label: "Все",
          href: "#",
          active: true,
        },
        {
          label: "Новости",
          href: "#",
        },
        {
          label: "События",
          href: "#",
        },
        {
          label: "Галерея",
          href: "#",
        },
        {
          label: "Статьи",
          href: "#",
        },
      ],
      items: pressCenterPageItems,
      moreHref: "#",
      moreText: "Загрузить еще",
    },
  },
};
