import {
  engineeringCenter,
  footer,
  mobileMenu,
  referenceRequestContactUs,
} from "./shared.js";

const oilGasProjectTags = [
  {
    label: "Нефтегазовая отрасль",
    hasMarker: true,
  },
  {
    label: "Автоматизированные системы управления",
  },
  {
    label: "Аналитические системы",
  },
];

const oilGasProjects = [
  {
    title: "Система измерений количества сжиженного природного газа КриоПАГЗ",
    image: "/images/realised-projects/cards/1.webp",
    imageAlt: "Промышленная газовая установка на открытой площадке",
    href: "/project-detail.html",
    tagsAriaLabel: "Категории проекта",
    tags: oilGasProjectTags,
  },
  {
    title: "Автоматизированная система управления и регулирования расхода газлифтной скважины",
    image: "/images/realised-projects/cards/2.webp",
    imageAlt: "Мобильная промышленная установка Инкомсистем",
    href: "/project-detail.html",
    tagsAriaLabel: "Категории проекта",
    tags: oilGasProjectTags,
  },
  {
    title: "Установка поверочная автоматизированная УПА 1200",
    image: "/images/realised-projects/cards/3.webp",
    imageAlt: "Трубопроводное оборудование в производственном помещении",
    href: "/project-detail.html",
    tagsAriaLabel: "Категории проекта",
    tags: oilGasProjectTags,
  },
  {
    title: "Система измерений количества сжиженного природного газа КриоПАГЗ",
    image: "/images/realised-projects/cards/1.webp",
    imageAlt: "Промышленная газовая установка на открытой площадке",
    href: "/project-detail.html",
    tagsAriaLabel: "Категории проекта",
    tags: oilGasProjectTags,
  },
  {
    title: "Автоматизированная система управления и регулирования расхода газлифтной скважины",
    image: "/images/realised-projects/cards/2.webp",
    imageAlt: "Мобильная промышленная установка Инкомсистем",
    href: "/project-detail.html",
    tagsAriaLabel: "Категории проекта",
    tags: oilGasProjectTags,
  },
  {
    title: "Установка поверочная автоматизированная УПА 1200",
    image: "/images/realised-projects/cards/3.webp",
    imageAlt: "Трубопроводное оборудование в производственном помещении",
    href: "/project-detail.html",
    tagsAriaLabel: "Категории проекта",
    tags: oilGasProjectTags,
  },
];

const oilGasPaginationItems = Array.from({ length: 7 }, (_, index) => {
  const page = index + 1;

  return {
    label: String(page),
    href: "#",
    ariaLabel: `Страница ${page}`,
    active: page === 2,
  };
});

const realisedProjectsDownload = {
  text: "Скачать файл в формате PDF",
  document: {
    title: "Выполненные проекты",
    type: "PDF",
    size: "1.2 Мб",
    href: "#",
    downloadText: "Скачать",
  },
};

export default {
  "/realised-projects.html": {
    title: "Реализованные проекты по отраслям",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: referenceRequestContactUs,
    engineeringCenter,
    realisedProjectsPage: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Реализованные проекты по отраслям",
          },
        ],
      },
      title: "Реализованные проекты по отраслям",
      intro:
        "Система измерений количества и показателей качества природного газа предназначена для автоматизированного измерения с нормированной точностью расхода и количества газа при выполнении торговых операций и взаиморасчетов между Покупателем и Продавцом, а также оплаты услуг и налогов государству.",
    },
    homeProjectsDownload: realisedProjectsDownload,
    realisedProjectsIndustries: {
      detailsText: "Подробнее",
      items: [
        {
          title: "Нефтегазовая отрасль",
          image: "/images/realised-projects-industries/oil-gas.webp",
          href: "/realised-projects-by-industry.html",
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
  },
  "/realised-projects-by-industry.html": {
    title: "Реализованные проекты в нефтегазовой отрасли",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: referenceRequestContactUs,
    engineeringCenter,
    realisedProjectsPage: {
      className: "realised-projects-page--industry",
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Реализованные проекты по отраслям",
            href: "/realised-projects.html",
          },
          {
            label: "Нефтегазовая отрасль",
          },
        ],
      },
      title: "Реализованные проекты в нефтегазовой отрасли",
      intro:
        "Система измерений количества и показателей качества природного газа предназначена для автоматизированного измерения с нормированной точностью расхода и количества газа при выполнении торговых операций и взаиморасчетов между Покупателем и Продавцом, а также оплаты услуг и налогов государству.",
    },
    homeProjectsDownload: realisedProjectsDownload,
    realisedProjectsIndustry: {
      detailsText: "Подробнее",
      projects: oilGasProjects,
      pagination: {
        ariaLabel: "Пагинация проектов",
        items: oilGasPaginationItems,
      },
    },
  },
};
