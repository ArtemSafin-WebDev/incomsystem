import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const products = [
  {
    title: "Автоматизированные системы управления",
    count: "10 услуг",
    href: "#",
    image: "/images/production-and-services-page/1.webp",
    imageAlt: "Проектная документация автоматизированной системы управления",
    services: [
      {
        label:
          "Автоматизированные системы управления технологическими процессами (АСУТП)",
        href: "#",
      },
      {
        label:
          "Автоматизированная система пожарной сигнализации и пожаротушения (АСПСиПТ)",
        href: "#",
      },
      {
        label:
          "Автоматизированные системы управления энергообеспечением (АСУЭ)",
        href: "#",
      },
      {
        label: "Системы телемеханики (СТМ)",
        href: "#",
      },
      {
        label:
          "Автономные контролируемые пункты системы телемеханики (АКПСТ)",
        href: "#",
      },
      {
        label:
          "Автоматизированные системы оперативного диспетчерского управления (АСОДУ)",
        href: "#",
      },
      {
        label:
          "Тренажерные комплексы для обучения и тестирования оперативного персонала Заказчика (КТК)",
        href: "#",
      },
      {
        label:
          "Тренажерные комплексы для обучения и тестирования оперативного персонала Заказчика (КТК)",
        href: "#",
      },
      {
        label: "Проектирование систем пожаротушения",
        href: "#",
      },
      {
        label: "Система автоматического контроля загазованности (САКЗ)",
        href: "#",
      },
    ],
  },
  {
    title: "Система измерений и блочное оборудование",
    count: "19 систем",
    href: "#",
    image: "/images/production-and-services-page/2.webp",
    imageAlt: "Блочное оборудование системы измерений",
    services: [
      {
        label: "Узлы учета (СИКН, СИКГ, СИКЖ)",
        href: "#",
      },
      {
        label: "Узел учета газа на морских платформах",
        href: "#",
      },
      {
        label: "Мобильные расходомерные установки",
        href: "#",
      },
      {
        label: "Блоки замера и регулирования газа",
        href: "#",
      },
      {
        label: "Блоки подготовки и распределения газа",
        href: "#",
      },
      {
        label: "Установки подготовки топливного газа",
        href: "#",
      },
      {
        label: "Газораспределительные станции",
        href: "#",
      },
      {
        label:
          "Системы автоматические измерения и учета показателей выбросов загрязняющих веществ",
        href: "#",
      },
      {
        label: "Блок подготовки топливного газа",
        href: "#",
      },
      {
        label: "Блоки очистки газа",
        href: "#",
      },
      {
        label: "Блоки дозирования одоранта",
        href: "#",
      },
      {
        label: "Газорегуляторные пункты",
        href: "#",
      },
      {
        label: "Пункты учета и редуцирования газа",
        href: "#",
      },
      {
        label: "Системы подготовки импульсного газа",
        href: "#",
      },
      {
        label: "Блоки фильтрации газа",
        href: "#",
      },
      {
        label: "Узел измерения расхода газа",
        href: "#",
      },
      {
        label: "Станции редуцирования и учета газа",
        href: "#",
      },
      {
        label: "Блоки технологические газовые",
        href: "#",
      },
      {
        label: "Системы контроля качества газа",
        href: "#",
      },
    ],
    hasHiddenServices: true,
  },
  {
    title: "Контроллеры АБАК",
    count: "4 контроллера",
    href: "#",
    image: "/images/production-and-services-page/3.webp",
    imageAlt: "Контроллеры АБАК в инженерном шкафу",
    services: [
      {
        label: "Измерительно-вычислительный комплекс АБАК+",
        href: "#",
      },
      {
        label: "Программируемый логический контроллер АБАК",
        href: "#",
      },
      {
        label: "Программно-технический комплекс АБАК",
        href: "#",
      },
      {
        label: "Терминальные платы",
        href: "#",
      },
    ],
  },
  {
    title: "Аналитические системы",
    count: "4 системы",
    href: "#",
    image: "/images/production-and-services-page/4.webp",
    imageAlt: "Компоненты аналитической системы",
    services: [
      {
        label: "Система подготовки пробы",
        href: "#",
      },
      {
        label: "Система ручного отбора пробы",
        href: "#",
      },
      {
        label: "Система автоматического отбора пробы",
        href: "#",
      },
      {
        label: "Аналитическая система",
        href: "#",
      },
    ],
  },
  {
    title: "Метрология и сервис",
    count: "4 системы",
    href: "#",
    image: "/images/production-and-services-page/5.webp",
    imageAlt: "Сервисное обслуживание оборудования",
  },
  {
    title: "Сульфинертное покрытие INCOMSTEEL",
    count: "4 системы",
    href: "#",
    image: "/images/production-and-services-page/6.webp",
    imageAlt: "Нанесение сульфинертного покрытия INCOMSTEEL",
  },
];

export default {
  "/production-and-services.html": {
    title: "Продукция и услуги",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    engineeringCenter,
    partnershipForm: {
      ...contactUs,
      caption: "Чем мы можем быть полезны?",
      title: "Станьте партнером<br>НИЦ Инкомсистем",
      background: "/images/production-and-services-page/7.webp",
      backgroundMobile: "/images/production-and-services-page/7.webp",
    },
    productionAndServicesPage: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Продукция и услуги",
          },
        ],
      },
      title: "Продукция<br>и услуги",
      detailsText: "Подробнее",
      moreText: "Еще",
      items: products,
    },
  },
};
