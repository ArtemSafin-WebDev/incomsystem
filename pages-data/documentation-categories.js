import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const categories = [
  {
    title: "Разрешительная документация",
    type: "PDF",
    count: "120 документов",
    href: "/documentation-category.html",
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

const activeCategories = [
  {
    title: "Разрешительная документация",
    count: "120 документов",
    href: "/documentation-category.html",
    linkText: "Смотреть все документы",
    active: true,
  },
  {
    title: "Техническая документация",
    count: "120 документов",
    href: "#",
    linkText: "Смотреть все документы",
  },
];

const subcategories = [
  {
    title: "Автоматизированные системы управления",
    href: "#",
    linkText: "Смотреть все документы",
  },
  {
    title: "Системы измерений и блочное оборудование",
    href: "#",
    linkText: "Смотреть все документы",
  },
  {
    title: "Аналитические системы",
    href: "/documentation-subcategory.html",
    linkText: "Смотреть все документы",
  },
  {
    title: "Метрология и сервис",
    href: "#",
    linkText: "Смотреть все документы",
  },
  {
    title: "Контроллеры АБАК",
    href: "#",
    linkText: "Смотреть все документы",
  },
  {
    title: "Разрешительная документация",
    href: "/documentation.html",
    linkText: "Смотреть все документы",
  },
];

const activeSubcategories = subcategories.map((category) => ({
  ...category,
  active: category.title === "Аналитические системы",
}));

const analyticDocumentsBase = [
  "ИВК АБАК + Сертификат ТР ТС 020/2011",
  "ИВК АБАК + Свидетельство об утверждении типа средств измерений",
  "ИВК АБАК + Заключение о подтверждении производства промышленной продукции на территории РФ",
  "Термошкафы ТШ Сертификат ТР ТС №012/2011",
];

const analyticDocuments = Array.from({ length: 3 }, () => analyticDocumentsBase)
  .flat()
  .map((title) => ({
    title,
    type: "PDF",
    size: "134 Кб",
    href: "#",
    downloadText: "Скачать",
    iconClass: "pdf",
    className: "document-card--format-neutral",
  }));

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
  "/documentation-category.html": {
    title: "Разрешительная документация",
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
            href: "/documentation-categories.html",
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
                id: "documentation-category-type-all",
                label: "Все",
                value: "",
                checked: true,
              },
              {
                id: "documentation-category-type-pdf",
                label: "PDF",
                value: "pdf",
              },
              {
                id: "documentation-category-type-docx",
                label: "DOCX",
                value: "docx",
              },
              {
                id: "documentation-category-type-jpeg",
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
                id: "documentation-category-product-all",
                label: "Все",
                value: "",
                checked: true,
              },
              {
                id: "documentation-category-product-analytics",
                label: "Процессная аналитика",
                value: "analytics",
              },
              {
                id: "documentation-category-product-automation",
                label: "Автоматизация",
                value: "automation",
              },
              {
                id: "documentation-category-product-service",
                label: "Сервис",
                value: "service",
              },
            ],
          },
        ],
        countText: "Всего 32 документа",
      },
      items: activeCategories,
      subcategories,
    },
  },
  "/documentation-subcategory.html": {
    title: "Аналитические системы",
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
            href: "/documentation-categories.html",
          },
          {
            label: "Разрешительная документация",
            href: "/documentation-category.html",
          },
          {
            label: "Аналитические системы",
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
                id: "documentation-subcategory-type-all",
                label: "Все",
                value: "",
                checked: true,
              },
              {
                id: "documentation-subcategory-type-pdf",
                label: "PDF",
                value: "pdf",
              },
              {
                id: "documentation-subcategory-type-docx",
                label: "DOCX",
                value: "docx",
              },
              {
                id: "documentation-subcategory-type-jpeg",
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
                id: "documentation-subcategory-product-all",
                label: "Все",
                value: "",
                checked: true,
              },
              {
                id: "documentation-subcategory-product-analytics",
                label: "Процессная аналитика",
                value: "analytics",
              },
              {
                id: "documentation-subcategory-product-automation",
                label: "Автоматизация",
                value: "automation",
              },
              {
                id: "documentation-subcategory-product-service",
                label: "Сервис",
                value: "service",
              },
            ],
          },
        ],
        countText: "Всего 32 документа",
      },
      items: activeCategories,
      subcategoriesTitle: "Разрешительная документация",
      subcategories: activeSubcategories,
      documents: {
        title: "Аналитические системы",
        items: analyticDocuments,
      },
    },
  },
};
