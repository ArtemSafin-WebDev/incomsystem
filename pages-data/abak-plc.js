import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const moduleText =
  "Предназначен для централизованного сбора данных от модулей ввода-вывода по интерфейсам CAN, USB, RS-485, Ethernet, обработки и выполнения алгоритмов контроля и управления механизмами.";

const moduleItems = [
  {
    title: "Модуль CPU.10.00.00",
    text: moduleText,
    image: "/images/abak-plc/modules/3.webp",
    imageAlt: "Модуль центрального процессора АБАК",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: moduleText,
    image: "/images/abak-plc/modules/5.webp",
    imageAlt: "Корпус модуля АБАК с открытой задней частью",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: moduleText,
    image: "/images/abak-plc/modules/7.webp",
    imageAlt: "Модуль АБАК во взрывозащищенном исполнении",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: moduleText,
    image: "/images/abak-plc/modules/9.webp",
    imageAlt: "Модуль АБАК с верхней панели",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: moduleText,
    image: "/images/abak-plc/modules/3.webp",
    imageAlt: "Модуль центрального процессора АБАК",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: moduleText,
    image: "/images/abak-plc/modules/5.webp",
    imageAlt: "Корпус модуля АБАК с открытой задней частью",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: moduleText,
    image: "/images/abak-plc/modules/7.webp",
    imageAlt: "Модуль АБАК во взрывозащищенном исполнении",
    href: "#",
  },
  {
    title: "Модуль CPU.10.00.00",
    text: moduleText,
    image: "/images/abak-plc/modules/9.webp",
    imageAlt: "Модуль АБАК с верхней панели",
    href: "#",
  },
];

const otherCategoriesItems = [
  {
    title:
      "Автоматизированные системы управления технологическими процессами (АСУТП)",
    image: "/images/product-detail/categories/1.webp",
    imageAlt: "Мнемосхема автоматизированной системы управления",
    href: "/product-detail.html",
  },
  {
    title: "Автономные контролируемые пункты системы телемеханики (АКПСТ)",
    image: "/images/product-detail/categories/2.webp",
    imageAlt: "Автономный контролируемый пункт системы телемеханики",
    href: "#",
  },
  {
    title:
      "Автоматизированная система пожарной сигнализации и пожаротушения (АСПСиПТ)",
    image: "/images/product-detail/categories/3.webp",
    imageAlt: "Шкаф пожарной сигнализации и пожаротушения",
    href: "#",
  },
  {
    title:
      "Автоматизированные системы оперативного диспетчерского управления (АСОДУ)",
    image: "/images/product-detail/categories/4.webp",
    imageAlt: "Диспетчерский центр с экранами мониторинга",
    href: "#",
  },
  {
    title: "Автоматизированные системы управления энергообеспечением (АСУЭ)",
    image: "/images/product-detail/categories/3.webp",
    imageAlt: "Оборудование автоматизированной системы управления",
    href: "#",
  },
];

const abakPlcContactUs = {
  ...contactUs,
  caption: "Свой проект",
  title: "Давайте обсудим<br>ваш проект",
  submitText: "Оставить заявку",
  className: "contact-us--product-detail",
};

export default {
  "/abak-plc.html": {
    title: "ИВК АБАК+",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: abakPlcContactUs,
    engineeringCenter,
    abakPlcPage: {
      title: "ИВК АБАК+",
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
            href: "#",
          },
          {
            label: "ИВК АБАК+",
          },
        ],
      },
      banner: {
        ariaLabel: "Первый экран ИВК АБАК+",
        image: "/images/abak-plc/banner.webp",
        imageAlt: "Промышленный контроллер АБАК с клеммами и органами управления",
        text:
          "Программируемый логический контроллер – это промышленный цифровой компьютер, усиленный и адаптированный для управления различными производственными процессами.",
      },
      filters: {
        ariaLabel: "Фильтр модулей",
        selects: [
          {
            label: "Версия",
            name: "version",
            placeholder: "К1",
            ariaLabel: "Выберите версию",
            clearable: true,
            clearAriaLabel: "Очистить выбранную версию",
            options: [
              {
                id: "abak-plc-version-k1",
                label: "К1",
                value: "k1",
                checked: true,
              },
              {
                id: "abak-plc-version-k2",
                label: "К2",
                value: "k2",
              },
            ],
          },
          {
            label: "Версия",
            name: "module",
            placeholder: "Модуль центрального процессора",
            ariaLabel: "Выберите тип модуля",
            clearable: true,
            clearAriaLabel: "Очистить тип модуля",
            options: [
              {
                id: "abak-plc-module-cpu",
                label: "Модуль центрального процессора",
                value: "cpu",
                checked: true,
              },
              {
                id: "abak-plc-module-io",
                label: "Модуль ввода-вывода",
                value: "io",
              },
              {
                id: "abak-plc-module-interface",
                label: "Интерфейсный модуль",
                value: "interface",
              },
            ],
          },
        ],
      },
      modules: {
        detailsText: "Подробнее",
        moreText: "Загрузить еще",
        items: moduleItems,
      },
      advantages: {
        caption: "Почему стоит выбрать наши модули",
        title: "Преимущества",
        items: [
          "Резервирование и «горячая» замена ЦПУ и модулей ввода-вывода",
          "Подключение до 100 модулей ввода/вывода",
          "Скорость опроса модулей 10 миллисекунд",
          "Встроенная поддержка HART-протокола",
          "Встроенная поддержка контроля цепей",
          "Диапазон рабочих температур от -40 до +70 °С, потребление 4 Вт = высокая автономность",
          "Программирование на 5 языках стандарта МЭК 61131",
          "АБАК ПЛК поддерживают протокол PROFINET Controller/Device, что позволяет обеспечить обмен данными в системах на базе контроллеров Siemens.",
        ],
      },
      characteristics: {
        title: "Основные характеристики",
        items: [
          "Встроенная современная система программирования",
          "Диапазон рабочих температур",
          "Потребление от 4 Вт",
          "Потребление от 4 Вт",
          "Поддержка HART-протокола",
          "Встроенный контроль цепей",
          "Встроенные интерфейсы",
          "USB порты с поддержкой режима «host»",
          "Резервирование и «горячая» замена",
          "Резервирование внутренней шины связи",
          "Встроенная индустриальная microSD карта",
          "Функция блока программного управления автоматическими клапанами и устройствами",
        ],
      },
      topicsAriaLabel: "Материалы о контроллере АБАК",
      topics: [
        {
          id: "abak-plc-connection",
          label: "Общая схема подключений АБАК ПЛК",
          paragraphs: [
            "АБАК ПЛК поддерживает подключение модулей ввода-вывода, исполнительных механизмов и верхнего уровня системы через промышленные интерфейсы и сетевые протоколы.",
          ],
        },
        {
          id: "abak-plc-features",
          label: "Технические особенности и преимущества оборудования",
          items: [
            "резервирование ключевых узлов;",
            "поддержка промышленных протоколов обмена;",
            "работа в расширенном температурном диапазоне;",
            "возможность горячей замены модулей.",
          ],
        },
        {
          id: "abak-plc-purpose",
          label: "Назначение программируемого контроллера АБАК ПЛК",
          paragraphs: [
            "Контроллер применяется для автоматизации технологических объектов, сбора данных, локального управления оборудованием и передачи параметров в диспетчерские системы.",
          ],
        },
        {
          id: "abak-plc-buy",
          label: "Где можно купить АБАК ПЛК",
          paragraphs: [
            "Оборудование АБАК поставляется НИЦ «ИНКОМСИСТЕМ». Для подбора конфигурации и подготовки предложения оставьте заявку через форму обратной связи.",
          ],
        },
      ],
      companySnippet:
        "Компания «ИНКОМСИСТЕМ» является одним из ведущих поставщиков промышленного оборудования в городах России: Москва, Санкт-Петербург, Новосибирск, Екатеринбург, Нижний Новгород, Казань, Челябинск, Омск, Самара, Ростов-на-Дону, Уфа, Красноярск, Пермь, Воронеж, Волгоград, Краснодар.",
    },
    otherCategories: {
      title: "Другие категории",
      detailsText: "Подробнее",
      ariaLabel: "Другие категории",
      prevLabel: "Предыдущие категории",
      nextLabel: "Следующие категории",
      items: otherCategoriesItems,
    },
  },
};
