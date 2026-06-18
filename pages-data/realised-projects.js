import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const directionOptions = [
  {
    id: "reference-direction-plc",
    label: "Контроллеры АБАК",
    value: "abak-controllers",
  },
  {
    id: "reference-direction-control",
    label: "Автоматизированные системы управления",
    value: "automated-control-systems",
  },
  {
    id: "reference-direction-measurement",
    label: "Системы измерений и блочное оборудование",
    value: "measurement-systems-and-block-equipment",
  },
  {
    id: "reference-direction-analytics",
    label: "Аналитические системы",
    value: "analytics-systems",
  },
  {
    id: "reference-direction-incomsteel",
    label: "Сульфинертное нанопокрытие incomsteel",
    value: "sulfinert-nanocoating-incomsteel",
  },
  {
    id: "reference-direction-metrology",
    label: "Метрология и сервис",
    value: "metrology-and-service",
  },
];

const realisedProjectsContactUs = {
  ...contactUs,
  className: "contact-us--reference-request",
  caption: "Референс лист",
  title: "Запрос <br>референс <br>листа",
  description: "",
  submitText: "Запросить",
  fields: [
    {
      isSelect: true,
      label: "Выберите направление",
      name: "direction",
      placeholder: "Аналитические системы",
      ariaLabel: "Выберите направление",
      className: "contact-us__select",
      useAltArrow: true,
      required: true,
      hideRequiredMark: true,
      options: directionOptions,
    },
    {
      id: "reference-request-phone",
      name: "phone",
      label: "Телефон",
      placeholder: "Телефон",
      type: "tel",
      autocomplete: "tel",
      required: true,
    },
    {
      id: "reference-request-email",
      name: "email",
      label: "Электронная почта",
      placeholder: "mail@company.ru",
      type: "email",
      autocomplete: "email",
      required: true,
    },
    {
      id: "reference-request-message",
      name: "message",
      label: "Сообщение",
      placeholder: "Сообщение",
      type: "text",
      required: true,
      isTextarea: true,
    },
  ],
};

export default {
  "/realised-projects.html": {
    title: "Реализованные проекты по отраслям",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: realisedProjectsContactUs,
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
    realisedProjectsIndustries: {
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
  },
};
