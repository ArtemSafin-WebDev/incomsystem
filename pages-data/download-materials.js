import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const documents = [
  {
    title:
      "Лицензия «Деятельность по монтажу, ТОиР средств обеспечения пожарной безопасности зданий и сооружений»",
    type: "PDF",
    size: "134 Кб",
    href: "#",
    downloadText: "Скачать",
    iconClass: "pdf",
  },
  {
    title:
      "Лицензия «Разработка, производства, распространения шифровальных (криптографических) средств, информационных систем и телекоммуникационных систем»",
    type: "JPEG",
    size: "134 Кб",
    href: "#",
    downloadText: "Скачать",
    iconClass: "jpeg",
  },
  {
    title:
      "Лицензия «Осуществление деятельности по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I-IV класса опасности»",
    type: "DOCX",
    size: "134 Кб",
    href: "#",
    downloadText: "Скачать",
    iconClass: "docx",
  },
  {
    title: "Аттестат аккредитации Метрологической Службы",
    type: "PDF",
    size: "134 Кб",
    href: "#",
    downloadText: "Скачать",
    iconClass: "pdf",
  },
  {
    title: "Siemens Solution Partners Certificate Process Analytics",
    type: "PDF",
    size: "134 Кб",
    href: "#",
    downloadText: "Скачать",
    iconClass: "pdf",
  },
  {
    title: "Лицензия ФСБ",
    type: "PDF",
    size: "134 Кб",
    href: "#",
    downloadText: "Скачать",
    iconClass: "pdf",
  },
  {
    title:
      "Лицензия «Осуществление деятельности по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I-IV класса опасности»",
    type: "DOCX",
    size: "134 Кб",
    href: "#",
    downloadText: "Скачать",
    iconClass: "docx",
  },
  {
    title: "Аттестат аккредитации Метрологической Службы",
    type: "PDF",
    size: "134 Кб",
    href: "#",
    downloadText: "Скачать",
    iconClass: "pdf",
  },
];

export default {
  "/download-materials.html": {
    title: "Материалы для скачивания",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs,
    engineeringCenter,
    downloadMaterialsPage: {
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
            label: "Материалы для скачивания",
          },
        ],
      },
      title: "Материалы для скачивания",
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
                id: "download-materials-type-all",
                label: "Все",
                value: "",
                checked: true,
              },
              {
                id: "download-materials-type-pdf",
                label: "PDF",
                value: "pdf",
              },
              {
                id: "download-materials-type-docx",
                label: "DOCX",
                value: "docx",
              },
              {
                id: "download-materials-type-jpeg",
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
                id: "download-materials-product-all",
                label: "Все",
                value: "",
                checked: true,
              },
              {
                id: "download-materials-product-analytics",
                label: "Процессная аналитика",
                value: "analytics",
              },
              {
                id: "download-materials-product-automation",
                label: "Автоматизация",
                value: "automation",
              },
              {
                id: "download-materials-product-service",
                label: "Сервис",
                value: "service",
              },
            ],
          },
        ],
        countText: "Всего 32 документа",
      },
      items: documents,
    },
  },
};
