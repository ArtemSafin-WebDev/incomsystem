import { footer, mobileMenu } from "./shared.js";
import productCategoryPages from "./product-category.js";

const productCategoryPage = productCategoryPages["/product-category.html"];

const productImage =
  "/images/abak-controllers/catalog-menu/k2-fm-00-08-00.webp";

const moduleGroups = [
  { id: "central-processors", label: "Модули центрального процессора" },
  { id: "discrete-input", label: "Модули дискретного ввода" },
  { id: "discrete-output", label: "Модули дискретного вывода" },
  { id: "analog-input", label: "Модули аналогового ввода" },
  { id: "analog-output", label: "Модули аналогового вывода" },
  {
    id: "terminal-connection",
    label: "Модули терминально-соединительные",
  },
  { id: "functional-modules", label: "Модули функциональные" },
];

const catalogCategories = [
  {
    id: "abak-plc",
    label: "АБАК ПЛК",
    variants: [
      { id: "k2", label: "АБАК ПЛК К2" },
      { id: "k3", label: "АБАК ПЛК К3" },
      { id: "paz", label: "АБАК ПЛК для систем ПАЗ" },
      { id: "le", label: "АБАК ПЛК LE" },
    ],
    groups: moduleGroups,
  },
  {
    id: "ivk-abak",
    label: "ИВК АБАК+",
    variants: [
      { id: "standard", label: "ИВК АБАК+ стандарт" },
      { id: "compact", label: "ИВК АБАК+ компакт" },
      { id: "explosion-proof", label: "Взрывозащищённое исполнение" },
    ],
    groups: [
      { id: "calculation", label: "Вычислительные модули" },
      { id: "interfaces", label: "Интерфейсные модули" },
      { id: "power", label: "Модули питания" },
    ],
  },
  {
    id: "terminal-boards",
    label: "Терминальные платы АБАК",
    variants: [
      { id: "k2", label: "Платы для АБАК ПЛК К2" },
      { id: "k3", label: "Платы для АБАК ПЛК К3" },
      { id: "universal", label: "Универсальные платы" },
    ],
    groups: [
      { id: "analog", label: "Платы аналоговых сигналов" },
      { id: "discrete", label: "Платы дискретных сигналов" },
      { id: "interface", label: "Интерфейсные платы" },
    ],
  },
  {
    id: "operator-panels",
    label: "Панели оператора АБАК HMI",
    variants: [
      { id: "seven", label: "АБАК HMI 7”" },
      { id: "ten", label: "АБАК HMI 10”" },
      { id: "fifteen", label: "АБАК HMI 15”" },
    ],
    groups: [
      { id: "standard", label: "Стандартное исполнение" },
      { id: "industrial", label: "Промышленное исполнение" },
      { id: "accessories", label: "Аксессуары и крепления" },
    ],
  },
  {
    id: "software",
    label: "Программное обеспечение",
    variants: [
      { id: "studio", label: "АБАК Studio" },
      { id: "scada", label: "АБАК SCADA" },
      { id: "diagnostics", label: "АБАК Diagnostics" },
    ],
    groups: [
      { id: "licenses", label: "Лицензии" },
      { id: "distributions", label: "Дистрибутивы" },
      { id: "updates", label: "Обновления" },
    ],
  },
  {
    id: "hardware-software-systems",
    label: "Программно-аппаратные комплексы АБАК",
    variants: [
      { id: "telemechanics", label: "Комплексы телемеханики" },
      { id: "gas-lift", label: "Комплексы газлифта" },
      { id: "safety", label: "Комплексы безопасности" },
    ],
    groups: [
      { id: "controllers", label: "Контроллерное оборудование" },
      { id: "communication", label: "Оборудование связи" },
      { id: "cabinets", label: "Шкафное оборудование" },
    ],
  },
];

const getPanelId = (...parts) => parts.filter(Boolean).join("-");

const getProductCode = (categoryIndex, variantIndex, groupIndex) => {
  if (categoryIndex === 0 && variantIndex === 0 && groupIndex === 6) {
    return "K2.FM.00.08.00";
  }

  return `TEST.${String(categoryIndex + 1).padStart(2, "0")}.${String(
    variantIndex + 1
  ).padStart(2, "0")}.${String(groupIndex + 1).padStart(2, "0")}`;
};

const createCategoryPanels = (category, categoryIndex) => {
  const panels = [
    {
      id: category.id,
      parentId: "catalog-root",
      level: 2,
      mobileUppercase: true,
      title: category.label,
      items: category.variants.map((variant) => ({
        label: variant.label,
        targetPanel: getPanelId(category.id, variant.id),
      })),
    },
  ];

  category.variants.forEach((variant, variantIndex) => {
    const variantPanelId = getPanelId(category.id, variant.id);

    panels.push({
      id: variantPanelId,
      parentId: category.id,
      level: 3,
      title: variant.label,
      items: category.groups.map((group) => ({
        label: group.label,
        targetPanel: getPanelId(variantPanelId, group.id),
      })),
    });

    category.groups.forEach((group, groupIndex) => {
      const productCode = getProductCode(
        categoryIndex,
        variantIndex,
        groupIndex
      );

      panels.push({
        id: getPanelId(variantPanelId, group.id),
        parentId: variantPanelId,
        level: 4,
        title: group.label,
        items: [
          {
            label: productCode,
            href: "#",
            hasArrow: true,
            image: productImage,
            imageAlt: `Тестовый товар ${productCode}`,
          },
        ],
      });
    });
  });

  return panels;
};

const catalogPanels = [
  {
    id: "catalog-root",
    parentId: "",
    level: 1,
    isRoot: true,
    mobileUppercase: true,
    title: "Каталог",
    items: catalogCategories.map((category) => ({
      label: category.label,
      targetPanel: category.id,
    })),
  },
  ...catalogCategories.flatMap(createCategoryPanels),
];

export const abakCatalogMenu = {
  rootPanelId: "catalog-root",
  dialogId: "product-catalog-dialog",
  triggerLabel: "Каталог",
  dialogAriaLabel: "Каталог продукции АБАК",
  closeAriaLabel: "Закрыть каталог",
  backAriaLabel: "Вернуться на предыдущий уровень",
  level1Panels: catalogPanels.filter((panel) => panel.level === 1),
  level2Panels: catalogPanels.filter((panel) => panel.level === 2),
  level3Panels: catalogPanels.filter((panel) => panel.level === 3),
  level4Panels: catalogPanels.filter((panel) => panel.level === 4),
};

export default {
  "/abak-controllers.html": {
    ...productCategoryPage,
    title: "Контроллеры АБАК",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    productCatalogHero: {
      title: "Контроллеры АБАК",
      image: "/images/abak-controllers/hero/desktop.webp",
      imageMobile: "/images/abak-controllers/hero/mobile.webp",
      imageAlt: "Печатная плата электронного оборудования",
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Продукция и услуги",
            href: "/production-and-services.html",
          },
          {
            label: "Контроллеры АБАК",
          },
        ],
      },
      catalogMenu: abakCatalogMenu,
    },
    productIntroGallery: {
      titleId: "product-intro-gallery-title",
      title:
        "Направление автоматизированных систем управления (АСУ) является одним из первых направлений деятельности НИЦ «ИНКОМСИСТЕМ» с момента создания в 1991 г.",
      navigationAriaLabel: "Навигация по фотографиям оборудования АБАК",
      previousSlideLabel: "Показать предыдущую фотографию",
      nextSlideLabel: "Показать следующую фотографию",
      slides: [
        {
          image: "/images/abak-controllers/automated-systems/1.webp",
          imageAlt: "Электронная плата контроллера АБАК",
        },
        {
          image: "/images/abak-controllers/automated-systems/2.webp",
          imageAlt: "Панель измерительно-вычислительного комплекса АБАК+",
        },
      ],
    },
  },
};
