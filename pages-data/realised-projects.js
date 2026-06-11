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
