import { abakCatalogMenu } from "./abak-controllers.js";
import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const productDescription =
  "Модуль центрального процессора CPU.10.00.00 предназначен для централизованного сбора данных от модулей ввода/вывода по интерфейсам CAN, USB, RS-485, Ethernet, обработки и выполнения алгоритмов контроля и управления механизмами и технологическим оборудованием при помощи среды выполнения, а также информационного обмена с системами верхнего уровня.";

const documents = [
  {
    title: "Руководство",
    href: "#",
    linkText: "Смотреть все документы",
  },
  {
    title: "Программное обеспечение",
    href: "#",
    linkText: "Смотреть все документы",
  },
  {
    title: "Сертификаты",
    href: "#",
    linkText: "Смотреть все документы",
  },
];

const otherProducts = [
  {
    title: "Модуль CPU.10.00.00",
    text: productDescription,
    image: "/images/abak-plc/modules/3.webp",
    imageAlt: "Модуль центрального процессора АБАК в горизонтальном исполнении",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: productDescription,
    image: "/images/abak-plc/modules/5.webp",
    imageAlt: "Модуль центрального процессора АБАК, вид сзади",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: productDescription,
    image: "/images/abak-plc/modules/7.webp",
    imageAlt: "Модуль центрального процессора АБАК",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: productDescription,
    image: "/images/abak-plc/modules/9.webp",
    imageAlt: "Модуль центрального процессора АБАК, вид сверху",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: productDescription,
    image: "/images/abak-plc/modules/5.webp",
    imageAlt: "Модуль центрального процессора АБАК",
    href: "#",
  },
];

const productDetailContactUs = {
  ...contactUs,
  caption: "Свой проект",
  title: "Давайте обсудим<br>ваш проект",
  submitText: "Оставить заявку",
  className: "contact-us--product-detail",
};

export default {
  "/product-detail.html": {
    title: "Модуль CPU.10.00.00",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: productDetailContactUs,
    engineeringCenter,
    productDetailPage: {
      title: "Модуль CPU.10.00.00",
      subtitle: "модуль центрального процессора",
      description: productDescription,
      image: "/images/abak-plc/modules/7.webp",
      imageAlt: "Модуль центрального процессора АБАК CPU.10.00.00",
      backHref: "/abak-plc.html",
      backAriaLabel: "Вернуться к модулям АБАК ПЛК",
      catalogMenu: {
        ...abakCatalogMenu,
        dialogId: "product-detail-catalog-dialog",
        triggerIcon: "#product-catalog-toggle",
      },
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          { label: "Главная", href: "/" },
          { label: "Продукция и услуги", href: "/production-and-services.html" },
          { label: "Контроллеры АБАК", href: "/abak-controllers.html" },
          { label: "АБАК ПЛК", href: "/abak-plc.html" },
          { label: "Модули центрального процессора" },
        ],
      },
      order: {
        action: "#",
        quantity: 1,
        decreaseLabel: "Уменьшить количество",
        increaseLabel: "Увеличить количество",
        submitText: "Добавить в заказ",
      },
      tabs: [
        {
          id: "product-characteristics",
          label: "Технические характеристики",
          type: "specifications",
        },
        {
          id: "product-documents",
          label: "Документация и программное обеспечение",
          type: "documents",
          title: "Документация и программное обеспечение",
          items: documents,
        },
        {
          id: "product-model",
          label: "3D-модель",
          type: "model",
          title: "3D - модель",
          items: [
            {
              title: "3D - модель",
              href: "#",
              linkText: "Смотреть все документы",
            },
          ],
        },
      ],
      documents: {
        title: "Документация и программное обеспечение",
        items: documents,
      },
      modelDocuments: {
        title: "3D - модель",
        items: [
          {
            title: "3D - модель",
            href: "#",
            linkText: "Смотреть все документы",
          },
        ],
      },
      specifications: {
        title: "Технические характеристики",
        basic: {
          headers: [
            "Наименование характеристики, единица измерения",
            "Показатель",
          ],
          rows: [
            ["Габаритные размеры (Д × Ш × В), мм", "114 × 22,5 × 108"],
            ["Масса, кг, не более", "0,17"],
            ["Шинный соединитель", "TBUS-5"],
          ],
        },
        currentConversion: {
          title: "Преобразование тока",
          rows: [
            [
              "Расширенный диапазон измерения силы постоянного тока, мА, не более",
              "24",
            ],
            [
              "Пределы допускаемой основной приведенной погрешности при преобразовании входного аналогового сигнала силы постоянного тока в значение измеряемой физической величины в номинальных диапазонах, %",
              "± 0,1",
            ],
          ],
        },
        indication: {
          title: "Индикация",
          headers: ["Обозначение индикатора", "Индикация", "Условие возникновения"],
          rows: [
            ["Vc", "Включена зеленым цветом\n\nВыключена", "Есть электропитание\n\nНет электропитания"],
            ["STAT", "Включена желтым цветом\n\nВключается желтым цветом на 0,1 с, период", "Есть обмен с модулем CPU\n\nНет обмена с модулем CPU или"],
            ["Vc", "Включена зеленым цветом\n\nВыключена", "Есть электропитание\n\nНет электропитания"],
          ],
        },
      },
      contacts: [
        {
          title: "Техподдержка",
          phone: "+7 (800) 234-55-19",
          phoneHref: "tel:+78002345519",
          email: "support.abak@incomsystem.ru",
          emailHref: "mailto:support.abak@incomsystem.ru",
        },
        {
          title: "Отдел продаж",
          phone: "+7 (843) 212-50-10",
          phoneHref: "tel:+78432125010",
          email: "sales.abak@incomsystem.ru",
          emailHref: "mailto:sales.abak@incomsystem.ru",
        },
      ],
      documentationHoverImage: "/images/documentation/check-document.webp",
      cartAriaLabel: "Перейти к заказу, товаров: 2",
      cartCount: 2,
    },
    otherProducts: {
      title: "Другие товары",
      detailsText: "Подробнее",
      ariaLabel: "Другие товары",
      prevLabel: "Предыдущие товары",
      nextLabel: "Следующие товары",
      items: otherProducts,
    },
  },
};
