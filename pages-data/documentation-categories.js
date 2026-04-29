import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const categories = [
  {
    title: "Разрешительная документация",
    type: "PDF",
    count: "120 документов",
    href: "/documentation.html",
    linkText: "Смотреть все документы",
  },
  {
    title: "Техническая документация",
    type: "PDF",
    count: "120 документов",
    href: "#",
    linkText: "Смотреть все документы",
  },
];

export default {
  "/documentation-categories.html": {
    title: "Документация",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs,
    engineeringCenter,
    documentationCategoriesPage: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Документация",
            href: "#",
          },
          {
            label: "Разрешительная документация",
          },
        ],
      },
      title: "Разрешительная документация",
      filters: {
        action: "#",
        search: {
          label: "Поиск по документам",
          name: "q",
          placeholder: "Введите ваш запрос",
        },
        selects: [
          {
            label: "Тип документа",
            name: "type",
            placeholder: "Все",
            ariaLabel: "Выберите тип документа",
            clearable: true,
            clearAriaLabel: "Очистить тип документа",
            options: [
              {
                id: "documentation-categories-type-all",
                label: "Все",
                value: "",
                checked: true,
              },
              {
                id: "documentation-categories-type-pdf",
                label: "PDF",
                value: "pdf",
              },
              {
                id: "documentation-categories-type-docx",
                label: "DOCX",
                value: "docx",
              },
              {
                id: "documentation-categories-type-jpeg",
                label: "JPEG",
                value: "jpeg",
              },
            ],
          },
          {
            label: "Продукция",
            name: "product",
            placeholder: "Все",
            ariaLabel: "Выберите продукцию",
            clearable: true,
            clearAriaLabel: "Очистить продукцию",
            options: [
              {
                id: "documentation-categories-product-all",
                label: "Все",
                value: "",
                checked: true,
              },
              {
                id: "documentation-categories-product-analytics",
                label: "Процессная аналитика",
                value: "analytics",
              },
              {
                id: "documentation-categories-product-automation",
                label: "Автоматизация",
                value: "automation",
              },
              {
                id: "documentation-categories-product-service",
                label: "Сервис",
                value: "service",
              },
            ],
          },
        ],
        countText: "Всего 32 документа",
      },
      items: categories,
    },
  },
};
