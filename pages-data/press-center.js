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

export default {
  "/press-center.html": {
    title: "Пресс-центр",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: {
      ...contactUs,
      title: "Напишите <br>нам",
      description: "Наши специалисты свяжутся с вами",
    },
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
        image: "/images/press-center/hero-metrologist.webp",
        imageAlt: "Поздравление Инкомсистем с днем метролога",
        tags: ["События", "Выставка"],
        date: "4 мая 2026",
        datetime: "2026-05-04",
        title: "НИЦ «ИНКОМСИСТЕМ» – ЧЕМПИОН КАЗАНСКОГО МАРАФОНА-2026!",
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
            label: "Рубрика",
            name: "category",
            placeholder: "Выставка",
            ariaLabel: "Выберите рубрику",
            clearable: true,
            clearAriaLabel: "Очистить рубрику",
            options: [
              {
                id: "press-center-category-exhibition",
                label: "Выставка",
                value: "exhibition",
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
          {
            label: "Поиск по году",
            name: "year",
            placeholder: "2023",
            ariaLabel: "Выберите год",
            multiple: true,
            clearable: true,
            clearAriaLabel: "Очистить выбранный год",
            applyText: "Применить фильтр",
            options: [
              {
                id: "press-center-year-2023",
                label: "2023",
                value: "2023",
              },
              {
                id: "press-center-year-2024",
                label: "2024",
                value: "2024",
              },
              {
                id: "press-center-year-2025",
                label: "2025",
                value: "2025",
              },
            ],
          },
        ],
        countText: "Сбросить все фильтры",
      },
      foundText: "Найдено: 6",
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
      pagination: {
        ariaLabel: "Пагинация новостей",
        items: [
          {
            label: "1",
            href: "#",
            ariaLabel: "Перейти на страницу 1",
          },
          {
            label: "2",
            active: true,
          },
          {
            label: "3",
            href: "#",
            ariaLabel: "Перейти на страницу 3",
          },
          {
            label: "4",
            href: "#",
            ariaLabel: "Перейти на страницу 4",
          },
          {
            label: "5",
            href: "#",
            ariaLabel: "Перейти на страницу 5",
          },
          {
            label: "6",
            href: "#",
            ariaLabel: "Перейти на страницу 6",
          },
          {
            label: "7",
            href: "#",
            ariaLabel: "Перейти на страницу 7",
          },
        ],
      },
    },
  },
};
