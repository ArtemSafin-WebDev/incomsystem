import { engineeringCenter, footer, mobileMenu } from "./shared.js";

const pressCenterItems = [
  {
    title:
      "Инкомсистем: вклад в программу импортозамещения измерительной техники",
    image: "/images/press-center/1.webp",
    tags: ["События", "Экспертные мнения"],
    date: "9 января 2025",
    href: "#",
    tabs: ["expert-opinions", "events", "gallery"],
  },
  {
    title: "АБАК ПЛК в Республике Беларусь!",
    image: "/images/press-center/2.webp",
    tag: "Оборудование",
    date: "9 января 2025",
    href: "#",
    tabs: ["news", "gallery"],
  },
  {
    title:
      "Игры с эмоциями: НИЦ Инкомсистем провел праздник «День защиты детей»",
    image: "/images/press-center/3.webp",
    tag: "События",
    date: "9 января 2025",
    href: "#",
    tabs: ["events", "gallery"],
  },
  {
    title:
      "НИЦ Инкомсистем на Всероссийской конференции «Промышленный искусственный интеллект»",
    image: "/images/press-center/4.webp",
    tag: "События",
    date: "9 января 2025",
    href: "#",
    tabs: ["news", "events", "gallery"],
  },
];

const getPressCenterItemsByTab = (tab) =>
  tab === "all"
    ? pressCenterItems
    : pressCenterItems.filter((item) => item.tabs.includes(tab));

const careerSuccessStoriesItems = [
  {
    name: "Иван Петров",
    position: "Менеджер по продажам",
    image: "/images/about-company/company-leadership/1.webp",
    imageAlt: "Сотрудник компании",
    videoHref: "#",
    videoAriaLabel: "Смотреть историю успеха Ивана Петрова",
  },
  {
    name: "Петр Иванов",
    position: "Менеджер по продажам",
    image: "/images/about-company/company-leadership/2.webp",
    imageAlt: "Сотрудник компании",
    videoHref: "#",
    videoAriaLabel: "Смотреть историю успеха Петра Иванова",
  },
  {
    name: "Елена Смирнова",
    position: "Менеджер по продажам",
    image: "/images/about-company/company-leadership/3.webp",
    imageAlt: "Сотрудник компании",
    videoHref: "#",
    videoAriaLabel: "Смотреть историю успеха Елены Смирновой",
  },
  {
    name: "Иван Петров",
    position: "Менеджер по продажам",
    image: "/images/about-company/company-leadership/1.webp",
    imageAlt: "Сотрудник компании",
    videoHref: "#",
    videoAriaLabel: "Смотреть историю успеха Ивана Петрова",
  },
  {
    name: "Петр Иванов",
    position: "Менеджер по продажам",
    image: "/images/about-company/company-leadership/2.webp",
    imageAlt: "Сотрудник компании",
    videoHref: "#",
    videoAriaLabel: "Смотреть историю успеха Петра Иванова",
  },
];

const careerVacanciesItems = [
  {
    city: "Казань",
    title: "Менеджер по продажам промышленного оборудования",
    salary: "от 120&nbsp;000 до 300&nbsp;000 ₽",
    href: "#",
    linkText: "Подробнее",
    detailsAriaLabel: "Параметры вакансии",
    details: [
      {
        icon: "vacancy-briefcase",
        label: "Опыт работы:",
        value: "3 года",
      },
      {
        icon: "vacancy-calendar",
        label: "График работы:",
        value: "полная занятость, полный день",
      },
    ],
  },
  {
    city: "Казань",
    title: "Водитель автомобиля",
    salary: "Уровень дохода не указан",
    href: "#",
    linkText: "Подробнее",
    detailsAriaLabel: "Параметры вакансии",
    details: [
      {
        icon: "vacancy-briefcase",
        label: "Опыт работы:",
        value: "3 года",
      },
      {
        icon: "vacancy-calendar",
        label: "График работы:",
        value: "полная занятость, полный день",
      },
    ],
  },
  {
    city: "Казань",
    title: "Специалист по сертификации технической продукциии",
    salary: "65&nbsp;000 – 92&nbsp;000 ₽",
    href: "#",
    linkText: "Подробнее",
    detailsAriaLabel: "Параметры вакансии",
    details: [
      {
        icon: "vacancy-briefcase",
        label: "Опыт работы:",
        value: "3 года",
      },
      {
        icon: "vacancy-calendar",
        label: "График работы:",
        value: "полная занятость, полный день",
      },
    ],
  },
  {
    city: "Казань",
    title: "Менеджер по продажам промышленного оборудования",
    salary: "от 120&nbsp;000 до 300&nbsp;000 ₽",
    href: "#",
    linkText: "Подробнее",
    detailsAriaLabel: "Параметры вакансии",
    details: [
      {
        icon: "vacancy-briefcase",
        label: "Опыт работы:",
        value: "3 года",
      },
      {
        icon: "vacancy-calendar",
        label: "График работы:",
        value: "полная занятость, полный день",
      },
    ],
  },
];

const careerFaqItems = [
  {
    id: "career-faq-minimum-wage",
    isOpen: true,
    question:
      "Памятка о минимальной заработной плате труда в Республике Татарстан с 1 января 2022 года",
    answer:
      "Мы приветствуем молодых специалистов и предлагаем стажировки, практику и трудоустройство для студентов и выпускников без опыта работы, помогая им стать профессионалами.",
  },
  {
    id: "career-faq-question-2",
    question: "Вопрос 2",
    answer: "Ответ на вопрос будет добавлен позже.",
  },
  {
    id: "career-faq-question-3",
    question: "Вопрос 3",
    answer: "Ответ на вопрос будет добавлен позже.",
  },
];

const careerContactUs = {
  className: "contact-us--career",
  caption: "Форма обратной связи",
  title: "Не нашли <br>подходящей <br>вакансии?",
  description: "Отправьте свое резюме и наши специалисты свяжутся с вами",
  background: "/images/contact-us/bg.webp",
  backgroundMobile: "/images/contact-us/bg-mobile.webp",
  formAction: "#",
  submitText: "Отправить",
  policyText:
    "Нажимая «Отправить», Вы даете свое согласие на&nbsp;обработку персональных данных и принимаете&nbsp;",
  policyLinkText: "условия политики конфиденциальности",
  policyLinkHref: "https://incomsystem.ru/upload/uf/baa/pol.pdf",
  fields: [
    {
      id: "career-contact-name",
      name: "name",
      label: "Имя",
      placeholder: "Имя",
      type: "text",
      autocomplete: "name",
      required: true,
    },
    {
      id: "career-contact-phone",
      name: "phone",
      label: "Телефон",
      placeholder: "Телефон",
      type: "tel",
      autocomplete: "tel",
      required: true,
    },
    {
      id: "career-contact-email",
      name: "email",
      label: "Электронная почта",
      placeholder: "mail@company.ru",
      type: "email",
      autocomplete: "email",
      required: true,
    },
    {
      id: "career-contact-resume",
      name: "resume",
      label: "Прикрепить резюме",
      isFile: true,
      placeholder: "Antonov.pdf",
      type: "file",
      accept: ".pdf,.doc,.docx",
      required: true,
    },
  ],
};

export default {
  "/career.html": {
    title: "Карьера",
    headerCompactTheme: true,
    careerHero: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Карьера",
          },
        ],
      },
      title: "Карьера в НИЦ «ИНКОМСИСТЕМ»",
      image: "/images/career/hero.webp",
      imageMobile: "/images/career/hero-mobile.webp",
      imageAlt: "",
      description:
        "НИЦ «Инкомсистем» ищет талантливых и перспективных соискателей для реализации масштабных производственных задач",
      videoText: "Смотреть видео о компании",
      videoTextMobile: "Смотреть видео",
      videoHref: "#",
    },
    careerStudents: {
      title: "Для студентов:",
      ariaLabel: "Возможности для студентов в НИЦ «Инкомсистем»",
      buttonText: "Подробнее о взаимодействии с вузами",
      buttonHref: "#",
      items: [
        {
          title: "Индивидуальный график для совмещения с&nbsp;учёбой",
          image: "/images/career/students/1.webp",
          imageAlt: "Студентка составляет учебный план за ноутбуком",
        },
        {
          title: "Участие в&nbsp;семинарах в&nbsp;конференциях, выставках",
          image: "/images/career/students/2.webp",
          imageAlt: "Конференц-зал с мультимедийным оборудованием",
        },
        {
          title: "Участие в&nbsp;R&amp;D проектах (НИОКР, ОКР, патенты)",
          image: "/images/career/students/3.webp",
          imageAlt: "Работа с лабораторным оборудованием",
        },
        {
          title:
            "Стажировки в&nbsp;Центре компетенций (промышленные контроллеры АБАК, АСУТП)",
          image: "/images/career/students/4.webp",
          imageAlt: "Учебный класс Центра компетенций НИЦ «Инкомсистем»",
        },
      ],
    },
    companyFeatures: {
      className: "company-features--career",
      title: "8 причин выбрать нашу компанию",
      titleClassName: "company-features__title--mobile-large",
      showEmblem: false,
      items: [
        {
          title: "Конкурентная и&nbsp;стабильная оплата",
          text: "Мы предлагаем привлекательную заработную плату, официальное трудоустройство и&nbsp;гибкую систему мотивации, где ваш доход напрямую зависит от&nbsp;ваших результатов.",
        },
        {
          title:
            "Реальные<br class=\"company-feature-card__desktop-break\">возможности для<br class=\"company-feature-card__desktop-break\">карьерного роста",
          text: "Мы инвестируем в&nbsp;ваше обучение и&nbsp;развитие, предоставляя возможности повышения квалификации, карьерного продвижения и&nbsp;участия в&nbsp;интересных проектах.",
          className: "company-features__item--theme-dark",
        },
        {
          title: "Поддержка на&nbsp;старте карьеры",
          text: "Мы приветствуем молодых специалистов и&nbsp;предлагаем стажировки, практику и&nbsp;трудоустройство для студентов и&nbsp;выпускников без опыта работы, помогая им стать профессионалами.",
        },
        {
          title: "Забота о&nbsp;благополучии и&nbsp;комфорте",
          text: "Мы предоставляем расширенный пакет ДМС, включая стоматологию, частичную компенсацию фитнеса, льготы и&nbsp;гарантии, а&nbsp;также комфортные условия труда в&nbsp;современных офисах и&nbsp;производственных площадках.",
          className: "company-features__item--theme-soft",
        },
        {
          title:
            "Сильная<br class=\"company-feature-card__desktop-break\">корпоративная<br class=\"company-feature-card__desktop-break\">культура и&nbsp;сплоченный<br class=\"company-feature-card__desktop-break\">коллектив",
          text: "У нас создана благоприятная атмосфера, где ценятся взаимопомощь, командная работа и&nbsp;внерабочие мероприятия, объединяющие сотрудников.",
          className: "company-features__item--theme-soft",
        },
        {
          title:
            "Активная поддержка<br class=\"company-feature-card__desktop-break\">здорового образа<br class=\"company-feature-card__desktop-break\">жизни",
          text: "Мы поддерживаем спорт и&nbsp;ЗОЖ, предоставляя возможности для занятий различными видами спорта и&nbsp;участия в&nbsp;корпоративных соревнованиях.",
        },
        {
          title: "Участие в&nbsp;инновационных проектах",
          text: "Работа в&nbsp;нашей компании – это возможность приложить руку к&nbsp;созданию передовых технологий и&nbsp;решений для ключевых отраслей экономики.",
          className:
            "company-features__item--theme-dark company-features__item--number-blue",
        },
        {
          title:
            "Возможность влиять на&nbsp;развитие компании и&nbsp;получать признание",
          text: "Мы ценим инициативу и&nbsp;предлагаем сотрудникам участвовать в&nbsp;улучшении бизнес-процессов, получая вознаграждение за&nbsp;свои идеи и&nbsp;предложения.",
        },
      ],
    },
    careerSuccessStories: {
      title: "Истории успеха",
      navigationAriaLabel: "Навигация слайдера с историями успеха",
      previousSlideLabel: "Предыдущая история успеха",
      nextSlideLabel: "Следующая история успеха",
      items: careerSuccessStoriesItems,
    },
    careerGallery: {
      ariaLabel: "Фотографии команды НИЦ «Инкомсистем»",
      navigationAriaLabel: "Навигация по фотографиям команды",
      previousSlideLabel: "Предыдущая фотография",
      nextSlideLabel: "Следующая фотография",
      slides: [
        {
          image: "/images/career/photo-slider/1.webp",
          imageAlt: "Команда НИЦ «Инкомсистем» в офисе",
        },
        {
          image: "/images/career/hero.webp",
          imageAlt: "Фотография НИЦ «Инкомсистем»",
        },
      ],
    },
    careerVacancies: {
      title: "Вакансии",
      ariaLabel: "Открытые вакансии НИЦ «Инкомсистем»",
      counterText: "4 из 32 вакансий",
      buttonText: "Загрузить еще",
      items: careerVacanciesItems,
    },
    careerFaq: {
      title: "Часто задаваемые вопросы",
      ariaLabel: "Часто задаваемые вопросы о работе в НИЦ «Инкомсистем»",
      items: careerFaqItems,
    },
    pressCenter: {
      title: "Пресс-центр",
      buttonText: "В пресс-центр",
      buttonHref: "#",
      tabs: [
        {
          key: "all",
          label: "Все",
          items: getPressCenterItemsByTab("all"),
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
        {
          key: "expert-opinions",
          label: "Экспертные мнения",
          items: getPressCenterItemsByTab("expert-opinions"),
        },
      ],
    },
    contactUs: careerContactUs,
    engineeringCenter,
    mobileMenu,
    footer,
  },
};
