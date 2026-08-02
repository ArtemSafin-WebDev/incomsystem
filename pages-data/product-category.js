import {
  engineeringCenter,
  footer,
  mobileMenu,
  partnershipContactUs,
} from "./shared.js";

const services = [
  {
    title:
      "Автоматизированные системы управления технологическими процессами (АСУТП)",
    image: "/images/product-category/categories/4.webp",
    imageAlt: "Мнемосхема автоматизированной системы управления",
    href: "/product-detail.html",
  },
  {
    title: "Автономные контролируемые пункты системы телемеханики (АКПСТ)",
    image: "/images/product-category/categories/1.webp",
    imageAlt: "Автономный контролируемый пункт системы телемеханики",
    href: "#",
  },
  {
    title:
      "Автоматизированная система пожарной сигнализации и пожаротушения (АСПСиПТ)",
    image: "/images/product-category/categories/2.webp",
    imageAlt: "Панель системы пожарной сигнализации",
    href: "#",
  },
  {
    title:
      "Автоматизированные системы оперативного диспетчерского управления (АСОДУ)",
    image: "/images/product-category/categories/3.webp",
    imageAlt: "Диспетчерский центр с экранами мониторинга",
    href: "#",
  },
  {
    title: "Автоматизированные системы управления энергообеспечением (АСУЭ)",
    image: "/images/product-category/categories/8.webp",
    imageAlt: "Мнемосхема системы управления энергообеспечением",
    href: "#",
  },
  {
    title:
      "Тренажерные комплексы для обучения и тестирования оперативного персонала Заказчика (КТК)",
    image: "/images/product-category/categories/6.webp",
    imageAlt: "Промышленный трубопроводный узел",
    href: "#",
  },
  {
    title: "Системы телемеханики (СТМ)",
    image: "/images/product-category/categories/5.webp",
    imageAlt: "Шкаф системы телемеханики",
    href: "#",
  },
  {
    title: "Проектирование систем пожаротушения",
    image: "/images/product-category/categories/7.webp",
    imageAlt: "Система пожаротушения в промышленном помещении",
    href: "#",
  },
  {
    title: "Система автоматического контроля загазованности (САКЗ)",
    image: "/images/product-category/categories/9.webp",
    imageAlt: "Мнемосхема системы автоматического контроля загазованности",
    href: "#",
  },
];

const cycleItems = [
  {
    title: "Обследование проекта",
    image: "/images/product-category/cycle/inspection.webp",
  },
  {
    title: "Разработка технического задания",
    image: "/images/product-category/cycle/specification.webp",
  },
  {
    title: "Проектирование",
    image: "/images/product-category/cycle/design.webp",
  },
  {
    title: "Серийное производство",
    image: "/images/product-category/cycle/production.webp",
  },
  {
    title: "Сборка, монтаж, пусконаладка",
    image: "/images/product-category/cycle/design.webp",
  },
  {
    title: "Ввод в эксплуатацию",
    image: "/images/product-category/cycle/specification.webp",
  },
  {
    title: "Метрологическое обеспечение",
    image: "/images/product-category/cycle/inspection.webp",
  },
  {
    title: "Сервисное обслуживание",
    image: "/images/product-category/cycle/production.webp",
  },
];

const projectTags = [
  {
    label: "Нефтегазовая отрасль",
    hasMarker: true,
  },
  {
    label: "Автоматизированные системы управления",
  },
  {
    label: "Аналитические системы",
  },
];

const projects = [
  {
    title: "Система измерений количества сжиженного природного газа КриоПАГЗ",
    image: "/images/realised-projects/cards/1.webp",
    imageAlt: "Промышленная газовая установка на открытой площадке",
    href: "/project-detail.html",
    tagsAriaLabel: "Категории проекта",
    tags: projectTags,
  },
  {
    title:
      "Автоматизированная система управления и регулирования расхода газлифтной скважины",
    image: "/images/realised-projects/cards/2.webp",
    imageAlt: "Мобильная промышленная установка Инкомсистем",
    href: "/project-detail.html",
    tagsAriaLabel: "Категории проекта",
    tags: projectTags,
  },
  {
    title: "Установка поверочная автоматизированная УПА 1200",
    image: "/images/realised-projects/cards/3.webp",
    imageAlt: "Трубопроводное оборудование в производственном помещении",
    href: "/project-detail.html",
    tagsAriaLabel: "Категории проекта",
    tags: projectTags,
  },
  {
    title: "Система измерений количества сжиженного природного газа КриоПАГЗ",
    image: "/images/realised-projects/cards/1.webp",
    imageAlt: "Промышленная газовая установка на открытой площадке",
    href: "/project-detail.html",
    tagsAriaLabel: "Категории проекта",
    tags: projectTags,
  },
];

const newsItems = [
  {
    title:
      "Инкомсистем: вклад в программу импортозамещения измерительной техники",
    image: "/images/press-center/1.webp",
    tag: "События",
    date: "9.01.2025",
    href: "/news-detail.html",
  },
  {
    title: "АБАК ПЛК в Республике Беларусь!",
    image: "/images/press-center/2.webp",
    tag: "Оборудование",
    date: "9.01.2025",
    href: "/news-detail.html",
  },
  {
    title:
      "Игры с эмоциями: НИЦ Инкомсистем провел праздник «День защиты детей»",
    image: "/images/press-center/3.webp",
    tag: "События",
    date: "9.01.2025",
    href: "/news-detail.html",
  },
  {
    title:
      "НИЦ Инкомсистем на Всероссийской конференции «Промышленный искусственный интеллект»",
    image: "/images/press-center/4.webp",
    tag: "События",
    date: "9.01.2025",
    href: "/news-detail.html",
  },
];

export default {
  "/product-category.html": {
    title: "Автоматизированные системы управления",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    engineeringCenter,
    contactUs: partnershipContactUs,
    homeProjectsDownload: {
      text: "Документация по направлению",
      document: {
        title: "Смотреть документы",
        href: "/documentation.html",
        iconImage: "/images/documentation/check-document.webp",
      },
    },
    productCategory: {
      title: "Автоматизированные системы управления",
      detailsText: "Подробнее",
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
            label: "Автоматизированные системы управления",
          },
        ],
      },
      services,
      media: {
        title:
          "Направление автоматизированных систем управления (АСУ) является одним из первых направлений деятельности НИЦ «ИНКОМСИСТЕМ» с момента создания в 1991 г.",
        image: "/images/product-category/platform.webp",
        imageAlt: "Морская нефтегазовая платформа",
      },
      accordion: {
        ariaLabel: "Информация о направлении",
        items: [
          {
            id: "asu-includes",
            title: "Сегодня направление АСУ включает в себя:",
            content: `
              <p>Разработку, производство и внедрение комплексных автоматизированных систем управления для промышленных предприятий.</p>
              <ul>
                <li>обследование объектов и подготовку технических решений;</li>
                <li>разработку проектной и рабочей документации;</li>
                <li>производство, монтаж, пусконаладку и сервисное сопровождение.</li>
              </ul>
            `,
          },
          {
            id: "asu-products",
            title: "Основными продуктами направления АСУ являются:",
            content: `
              <p>АСУТП, АСОДУ, АСУЭ, системы телемеханики, пожарной безопасности и контроля загазованности.</p>
              <ul>
                <li>контроллерное и шкафное оборудование;</li>
                <li>программно-технические комплексы;</li>
                <li>тренажерные комплексы для оперативного персонала.</li>
              </ul>
            `,
          },
          {
            id: "asu-tasks",
            title:
              "Направление АСУ способно выполнять широкий спектр задач по разработке проектов АСУТП в том числе совместно с иностранными проектными институтами и компаниями:",
            content: `
              <p>Направление АСУ НИЦ «ИНКОМСИСТЕМ» выполняет <strong>полный цикл проектирования систем автоматизации</strong> (от локальных узлов до интегрированных систем безопасности). Компания адаптирует документацию под российские и международные стандарты, включая выпуск материалов на английском языке, и осуществляет разработку совместно с иностранными проектными институтами.</p>
              <ol>
                <li>В Санкт-Петербурге завершился финал Чемпионата по профессиональному мастерству «Профессионалы», который проходил с 26 по 30 ноября на площадке КВЦ «Экспофорум». Мероприятие впечатляет масштабами, ведь в финале встретились более 900 лучших студентов профессиональных учебных заведений со всей России.</li>
                <li>Задания выполнялись на оборудовании ведущих российских компаний.</li>
                <li>В том числе на контроллерном оборудовании АБАК ПЛК производства НИЦ «Инкомсистем».</li>
              </ol>
              <ul>
                <li>Компания НИЦ «Инкомсистем» выступила спонсором конкурса, обеспечив чемпионат оборудованием и технической поддержкой.</li>
                <li>15 комплектов оборудования было использовано для отработки навыков конкурсантов в компетенции «Промышленная автоматика».</li>
              </ul>
            `,
          },
        ],
      },
      cycle: {
        title: "Полный цикл работ",
        ariaLabel: "Этапы полного цикла работ. Ленту можно перетаскивать.",
        groups: [{ items: cycleItems }, { items: cycleItems }],
      },
      projects: {
        title: "Реализованные проекты",
        detailsText: "Подробнее",
        items: projects,
        buttonText: "Смотреть все проекты по отраслям",
        buttonHref: "/realised-projects.html",
      },
    },
    otherArticles: {
      title: "Новости направления",
      ariaLabel: "Новости направления",
      prevLabel: "Предыдущие новости",
      nextLabel: "Следующие новости",
      items: newsItems,
      buttonText: "В пресс-центр",
      buttonHref: "/press-center.html",
    },
  },
};
