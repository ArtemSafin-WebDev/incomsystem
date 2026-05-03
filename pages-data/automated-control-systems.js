import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const pressCenterItems = [
  {
    title:
      "Инкомсистем: вклад в программу импортозамещения измерительной техники",
    image: "/images/press-center/1.webp",
    tag: "События",
    date: "9.01.2025",
    href: "#",
    tabs: ["articles", "events", "gallery"],
  },
  {
    title: "АБАК ПЛК в Республике Беларусь!",
    image: "/images/press-center/2.webp",
    tag: "Оборудование",
    date: "9.01.2025",
    href: "#",
    tabs: ["articles", "news", "gallery"],
  },
  {
    title:
      "Игры с эмоциями: НИЦ Инкомсистем провел праздник «День защиты детей»",
    image: "/images/press-center/3.webp",
    tag: "События",
    date: "9.01.2025",
    href: "#",
    tabs: ["events", "gallery"],
  },
  {
    title:
      "НИЦ Инкомсистем на Всероссийской конференции «Промышленный искусственный интеллект»",
    image: "/images/press-center/4.webp",
    tag: "События",
    date: "9.01.2025",
    href: "#",
    tabs: ["news", "events", "gallery"],
  },
];

const getPressCenterItemsByTab = (tab) =>
  tab === "all"
    ? pressCenterItems
    : pressCenterItems.filter((item) => item.tabs.includes(tab));

const services = [
  {
    title:
      "Автоматизированные системы управления технологическими процессами (АСУТП)",
    image: "/images/automated-control-systems/categories/4.webp",
    imageAlt: "Мнемосхема автоматизированной системы управления",
    href: "/product-detail.html",
  },
  {
    title: "Автономные контролируемые пункты системы телемеханики (АКПСТ)",
    image: "/images/automated-control-systems/categories/1.webp",
    imageAlt: "Автономный контролируемый пункт системы телемеханики",
    href: "#",
  },
  {
    title:
      "Автоматизированная система пожарной сигнализации и пожаротушения (АСПСиПТ)",
    image: "/images/automated-control-systems/categories/2.webp",
    imageAlt: "Панель системы пожарной сигнализации",
    href: "#",
  },
  {
    title:
      "Автоматизированные системы оперативного диспетчерского управления (АСОДУ)",
    image: "/images/automated-control-systems/categories/3.webp",
    imageAlt: "Диспетчерский центр с экранами мониторинга",
    href: "#",
  },
  {
    title: "Автоматизированные системы управления энергообеспечением (АСУЭ)",
    image: "/images/automated-control-systems/categories/8.webp",
    imageAlt: "Мнемосхема системы управления энергообеспечением",
    href: "#",
  },
  {
    title:
      "Тренажерные комплексы для обучения и тестирования оперативного персонала Заказчика (КТК)",
    image: "/images/automated-control-systems/categories/6.webp",
    imageAlt: "Промышленный трубопроводный узел",
    href: "#",
  },
  {
    title: "Системы телемеханики (СТМ)",
    image: "/images/automated-control-systems/categories/5.webp",
    imageAlt: "Шкаф системы телемеханики",
    href: "#",
  },
  {
    title: "Проектирование систем пожаротушения",
    image: "/images/automated-control-systems/categories/7.webp",
    imageAlt: "Система пожаротушения в промышленном помещении",
    href: "#",
  },
  {
    title: "Система автоматического контроля загазованности (САКЗ)",
    image: "/images/automated-control-systems/categories/9.webp",
    imageAlt: "Мнемосхема системы автоматического контроля загазованности",
    href: "#",
  },
];

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

const categoryContactUs = {
  ...contactUs,
  className: "contact-us--category",
  title: "Станьте партнером<br>НИЦ Инкомсистем",
};

export default {
  "/automated-control-systems.html": {
    title: "Автоматизированные системы управления",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    engineeringCenter,
    contactUs: categoryContactUs,
    categoryPage: {
      title: "Автоматизированные системы управления",
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
      referenceText: "Запрос референс листа",
      referenceHref: "#",
      servicesTitle: "Услуги направления",
      detailsText: "Подробнее",
      services,
      introMedia: {
        title:
          "Направление автоматизированных систем управления (АСУ) является одним из первых направлений деятельности НИЦ «ИНКОМСИСТЕМ» с момента создания в 1991 г.",
        text:
          "Являясь системным интегратором уже 30 лет, мы держим высочайшую планку качества, используем в своих проектах новейшее оборудование ведущих мировых и отечественных вендоров. Наработанный опыт позволяет предоставить Заказчику наилучшее решение с точки зрения цены, качества и соответствия необходимым техническим требованиям.",
        image: "/images/automated-control-systems/platform.webp",
        imageAlt: "Морская нефтегазовая платформа",
      },
      closingMedia: {
        className: "category-detail-media--closing",
        title:
          "НИЦ «ИНКОМСИСТЕМ» - синергия науки, инноваций и производства. Наши заказчики ценят в нас:",
        bullets: [
          "высокий профессионализм;",
          "неотступность от принятой планки по качеству;",
          "оперативное решение любых возникающих вопросов;",
          "четкое соблюдение поставленных сроков.",
        ],
        image: "/images/automated-control-systems/platform.webp",
        imageAlt: "Морская нефтегазовая платформа",
      },
      topicsCaption: "Направления деятельности",
      topicsAriaLabel: "Направления деятельности",
      topics: [
        {
          id: "asu-includes",
          label: "Сегодня направление АСУ включает в себя:",
          items: [
            "разработку и проектирование автоматизированных систем управления;",
            "производство шкафов, контроллерного оборудования и программно-технических комплексов;",
            "монтаж, пусконаладку и сопровождение систем на объектах Заказчика;",
            "метрологическое обеспечение, сервис и техническую поддержку.",
          ],
        },
        {
          id: "asu-products",
          label: "Основными продуктами направления АСУ являются:",
          items: [
            "АСУТП, АСОДУ, АСУЭ и системы телемеханики;",
            "автономные контролируемые пункты системы телемеханики;",
            "системы пожарной сигнализации, пожаротушения и контроля загазованности;",
            "тренажерные комплексы для обучения оперативного персонала.",
          ],
        },
        {
          id: "asu-tasks",
          label:
            "Направление АСУ способно выполнять широкий спектр задач по разработке проектов АСУТП в том числе совместно с иностранными проектными институтами и компаниями:",
          items: [
            "обследование объекта и подготовку исходных данных;",
            "разработку проектной, рабочей и эксплуатационной документации;",
            "подбор оборудования, программирование контроллеров и SCADA-систем;",
            "интеграцию со смежными системами предприятия и авторское сопровождение.",
          ],
        },
      ],
      cycle: {
        title: "Производственный цикл<br>контроллеров АСУ",
        items: [
          {
            number: "01",
            title: "Разработка<br>и проектирование",
            href: "#",
          },
          {
            number: "02",
            title: "Производство",
          text:
            "Современное и высокотехнологичное оборудование производства позволяет компании обеспечить полный производственный цикл выпуска изделий и осуществлять своевременную поставку высококачественной продукции",
          href: "#",
        },
          {
            number: "03",
            title: "Монтаж<br>и пусконаладка",
            href: "#",
          },
          {
            number: "04",
            title: "Метрологическое обеспечение",
            href: "#",
          },
          {
            number: "05",
            title: "Сервис<br>и поддержка",
            href: "#",
          },
        ],
      },
      documents: {
        title: "Разрешительная документация",
        items: documents,
      },
    },
    pressCenter: {
      className: "press-center--direction",
      title: "Новости направления",
      topLinkText: "Все новости",
      topLinkHref: "#",
      scrollHintText: "Листайте влево/вправо",
      buttonText: "Все новости",
      buttonHref: "#",
      tabs: [
        {
          key: "all",
          label: "Все",
          items: getPressCenterItemsByTab("all"),
        },
        {
          key: "articles",
          label: "Статьи",
          items: getPressCenterItemsByTab("articles"),
        },
        {
          key: "news",
          label: "Новости",
          items: getPressCenterItemsByTab("news"),
        },
        {
          key: "events",
          label: "События",
          items: getPressCenterItemsByTab("events"),
        },
        {
          key: "gallery",
          label: "Галерея",
          items: getPressCenterItemsByTab("gallery"),
        },
      ],
    },
    realisedProjects: {
      title: "Реализованные проекты",
      caption: "Последние",
      totalText: "600+ проектов реализовано",
      allProjectsText: "Все проекты",
      allProjectsHref: "#",
      detailsText: "Подробнее",
      scrollHintText: "Листайте влево/вправо",
      projects: [
        {
          year: "2018—2019",
          title:
            "Система измерений количества сжиженного природного газа КриоПАГЗ",
          image: "/images/realised-projects/cards/1.webp",
          logo: "/images/realised-projects/logos/1.webp",
          logoAlt: "Газпром",
          href: "#",
        },
        {
          year: "2018—2019",
          title:
            "Автоматизированная система управления и регулирования расхода газлифтной скважины",
          image: "/images/realised-projects/cards/2.webp",
          logo: "/images/realised-projects/logos/2.webp",
          logoAlt: "Криогенмаш",
          href: "#",
        },
        {
          year: "2018",
          title: "Установка поверочная автоматизированная УПА 1200",
          image: "/images/realised-projects/cards/3.webp",
          logo: "/images/realised-projects/logos/3.webp",
          logoAlt: "Инкомсистем",
          href: "#",
        },
      ],
    },
  },
};
