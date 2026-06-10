import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

export default {
  "/search.html": {
    title: "Поиск по сайту",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs,
    engineeringCenter,
    searchPage: {
      title: "Поиск по сайту",
      resultsTitle: "Результаты по запросу «Система»",
      resultsAriaLabel: "Результаты поиска",
      results: [
        {
          title:
            "Система измерений количества сжиженного природного газа КриоПАГЗ",
          href: "#",
        },
        {
          title:
            "Автоматизированная система управления и регулирования расхода газлифтной скважины",
          href: "#",
        },
      ],
    },
  },
  "/search-not-found.html": {
    title: "Поиск по сайту — ничего не найдено",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs,
    engineeringCenter,
    searchPage: {
      title: "Поиск по сайту",
      isEmpty: true,
      emptyMessage: "По вашему запросу ничего не найдено",
      emptyLinkText: "На главную",
      emptyLinkHref: "/",
    },
  },
};
