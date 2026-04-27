import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const directionOptions = [
  {
    id: "reference-direction-analytics",
    label: "Аналитические системы",
    value: "analytics-systems",
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
    id: "reference-direction-plc",
    label: "Контроллеры АБАК",
    value: "abak-controllers",
  },
];

const productOptions = [
  {
    id: "reference-product-measurement",
    label: "Система измерений",
    value: "measurement-system",
  },
  {
    id: "reference-product-block-equipment",
    label: "Блочное оборудование",
    value: "block-equipment",
  },
  {
    id: "reference-product-flow-metering",
    label: "Узел коммерческого учета",
    value: "commercial-metering-unit",
  },
  {
    id: "reference-product-service",
    label: "Сервисное сопровождение",
    value: "service-support",
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
      options: directionOptions,
    },
    {
      isSelect: true,
      label: "Выберите продукт",
      name: "product",
      placeholder: "Система измерений",
      ariaLabel: "Выберите продукт",
      className: "contact-us__select",
      useAltArrow: true,
      required: true,
      options: productOptions,
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
  ],
};

export default {
  "/realised-projects.html": {
    title: "Реализованные проекты",
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
            label: "Реализованные проекты",
          },
        ],
      },
      title: "Реализованные проекты",
      banner: {
        text: "Скачать файл с выполненными проектами в формате.",
        document: {
          title: "Выполненные проекты",
          type: "PDF",
          size: "1.2 Мб",
          href: "#",
          downloadText: "Скачать",
        },
      },
    },
  },
};
