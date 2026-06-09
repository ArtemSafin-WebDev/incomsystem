import { engineeringCenter, footer, mobileMenu } from "./shared.js";

const courseDetails = [
  {
    title: "Первый день базового курса",
    text: "Знакомимся с компанией, продуктами и кейсами, разбираем оборудование «АБАК ПЛК» (типы корпусов, индикация, отличия), делаем первичную настройку ПЛК (подключение, ПО, сеть, интерфейсы, лицензии), осваиваем базу CoDeSys (создание проекта, структура, языки, работа с I/O, компиляция и отладка)",
  },
  {
    title: "Второй день базового курса",
    text: "Изучаем диагностику ПЛК (параметры, CAN, модули, CodeSys), выполняем калибровку модулей ввода/вывода, настраиваем резервирование (роли CPU, алгоритмы, практика), отрабатываем «горячую» замену модулей и CPU, разбираем и выполняем обновление ПО контроллера и модулей",
  },
];

const courses = [
  {
    title: "Расширенный курс по «АБАК ПЛК»",
    duration: "2 дня",
    description:
      "Обучение проводится в течение двух дней. Записаться и пройти данный курс можно только после успешного прохождения базового курса по «АБАК ПЛК». После прохождения курса обучающийся получит углубленные знания для работы с «АБАК ПЛК». Курс рекомендован для пусконаладчиков и программистов.",
    image: "/images/training-center/courses/abak-plc.webp",
    imageAlt: "Инженер работает с контроллером АБАК ПЛК",
    signupHref: "#training-center-contact",
    programHref: "#",
    details: courseDetails,
  },
  {
    title: "Расширенный курс по «АБАК ПЛК»",
    duration: "2 дня",
    description:
      "Обучение проводится в течение двух дней. Записаться и пройти данный курс можно только после успешного прохождения базового курса по «АБАК ПЛК». После прохождения курса обучающийся получит углубленные знания для работы с «АБАК ПЛК». Курс рекомендован для пусконаладчиков и программистов.",
    image: "/images/training-center/courses/abak-plc.webp",
    imageAlt: "Инженер работает с контроллером АБАК ПЛК",
    signupHref: "#training-center-contact",
    programHref: "#",
    details: courseDetails,
  },
  {
    title: "Расширенный курс по «АБАК ПЛК»",
    duration: "2 дня",
    description:
      "Обучение проводится в течение двух дней. Записаться и пройти данный курс можно только после успешного прохождения базового курса по «АБАК ПЛК». После прохождения курса обучающийся получит углубленные знания для работы с «АБАК ПЛК». Курс рекомендован для пусконаладчиков и программистов.",
    image: "/images/training-center/courses/abak-plc.webp",
    imageAlt: "Инженер работает с контроллером АБАК ПЛК",
    signupHref: "#training-center-contact",
    programHref: "#",
    details: courseDetails,
  },
];

const gallerySlides = [
  {
    image: "/images/training-center/gallery/1.webp",
    imageAlt: "Участники обучения на практическом занятии",
  },
  {
    image: "/images/training-center/gallery/2.webp",
    imageAlt: "Демонстрация оборудования АБАК на выставочном стенде",
  },
  {
    image: "/images/training-center/gallery/1.webp",
    imageAlt: "Участники обучения на практическом занятии",
  },
  {
    image: "/images/training-center/gallery/2.webp",
    imageAlt: "Демонстрация оборудования АБАК на выставочном стенде",
  },
  {
    image: "/images/training-center/gallery/1.webp",
    imageAlt: "Участники обучения на практическом занятии",
  },
];

const partners = [
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/training-center/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "#",
    ariaLabel: "Смотреть видео о сотрудничестве с АНО ДПО Учебный центр Синетик",
    isVideo: true,
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/training-center/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "#",
    ariaLabel: "Открыть карточку АНО ДПО Учебный центр Синетик",
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/training-center/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "#",
    ariaLabel: "Смотреть видео о сотрудничестве с АНО ДПО Учебный центр Синетик",
    isVideo: true,
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/training-center/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "#",
    ariaLabel: "Открыть карточку АНО ДПО Учебный центр Синетик",
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/training-center/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "#",
    ariaLabel: "Открыть карточку АНО ДПО Учебный центр Синетик",
  },
];

const trainingVideos = [
  {
    title: "Название видео",
    text: "Короткое описание",
    image: "/images/training-center/videos/1.webp",
    imageAlt: "Презентация оборудования АБАК на учебном стенде",
    href: "#",
    ariaLabel: "Смотреть полезное видео по работе с оборудованием АБАК",
  },
  {
    title: "Название видео",
    text: "Короткое описание",
    image: "/images/training-center/videos/1.webp",
    imageAlt: "Презентация оборудования АБАК на учебном стенде",
    href: "#",
    ariaLabel: "Смотреть полезное видео по работе с оборудованием АБАК",
  },
  {
    title: "Название видео",
    text: "Короткое описание",
    image: "/images/training-center/videos/1.webp",
    imageAlt: "Презентация оборудования АБАК на учебном стенде",
    href: "#",
    ariaLabel: "Смотреть полезное видео по работе с оборудованием АБАК",
  },
];

const trainingContactUs = {
  id: "training-center-contact",
  caption: "Форма обратной связи",
  title: "Напишите <br>нам",
  description:
    "Если вы не нашли нужный курс, наши специалисты помогут",
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
      id: "training-contact-name",
      name: "name",
      label: "Имя",
      placeholder: "Имя",
      type: "text",
      autocomplete: "name",
      required: true,
    },
    {
      id: "training-contact-company",
      name: "company",
      label: "Компания",
      placeholder: "Компания",
      type: "text",
      autocomplete: "organization",
    },
    {
      id: "training-contact-phone",
      name: "phone",
      label: "Телефон",
      placeholder: "Телефон",
      type: "tel",
      autocomplete: "tel",
      required: true,
    },
    {
      id: "training-contact-email",
      name: "email",
      label: "Электронная почта",
      placeholder: "mail@company.ru",
      type: "email",
      autocomplete: "email",
      required: true,
    },
    {
      id: "training-contact-message",
      name: "message",
      label: "Сообщение",
      placeholder: "Сообщение",
      type: "text",
      required: true,
    },
  ],
};

export default {
  "/training-center.html": {
    title: "Учебный центр",
    headerCompactTheme: true,
    trainingCenterHero: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Учебный центр",
          },
        ],
      },
      title: "Учебный центр<br>«Инкомсистем»",
      poster: "/images/training-center/hero/video-poster.webp",
      posterAlt: "",
      videoText: "Смотреть видео",
      videoHref: "#",
      videoAriaLabel: "Смотреть видео об учебном центре Инкомсистем",
    },
    trainingCenterGallery: {
      ariaLabel: "Фотографии учебного центра Инкомсистем",
      navigationAriaLabel: "Навигация галереи учебного центра",
      previousSlideLabel: "Предыдущая фотография",
      nextSlideLabel: "Следующая фотография",
      slides: gallerySlides,
    },
    trainingCenterAbout: {
      ariaLabel: "Об учебном центре Инкомсистем",
      lead: "Учебный центр НИЦ «Инкомсистем» — это точка входа в современные технологии автоматизации для нефтегазовой отрасли и смежных направлений. Мы обучаем работе с контроллерами АБАК, системами телемеханики и тренажёрными комплексами, которые используются на реальных производственных объектах.",
      text: "Программы разрабатываются специалистами НИЦ «Инкомсистем» совместно с ведущими вузами и промышленными предприятиями и ориентированы на практические навыки: от разработки проектов в MasterSCADA и программирования в CoDeSys до эксплуатации АСУТП и отработки действий в нештатных ситуациях.",
    },
    trainingCenterCourses: {
      title: "Курсы",
      signupText: "Записаться",
      detailsText: "Подробнее",
      collapseText: "Свернуть",
      downloadText: "Скачать программу курса",
      items: courses,
    },
    trainingCenterPartners: {
      title: "Сотрудничество с учебными заведениями",
      navigationAriaLabel: "Навигация слайдера сотрудничества с учебными заведениями",
      previousSlideLabel: "Предыдущий материал",
      nextSlideLabel: "Следующий материал",
      items: partners,
    },
    trainingCenterVideos: {
      title: "Полезное видео по работе с оборудованием АБАК",
      navigationAriaLabel: "Навигация полезных видео по оборудованию АБАК",
      previousSlideLabel: "Предыдущее видео",
      nextSlideLabel: "Следующее видео",
      items: trainingVideos,
    },
    contactUs: trainingContactUs,
    engineeringCenter,
    mobileMenu,
    footer,
  },
};
