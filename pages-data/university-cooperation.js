import { engineeringCenter, footer, mobileMenu } from "./shared.js";

const cooperationText =
  "Обучение проводится в течение двух дней. Записаться и пройти данный курс можно только после успешного прохождения базового курса по «АБАК ПЛК». После прохождения курса обучающийся получит углубленные знания для работы с «АБАК ПЛК». Курс рекомендован для пусконаладчиков и программистов.";

const gallerySlides = [
  {
    image: "/images/university-cooperation/gallery/1.webp",
    imageAlt: "Парусная яхта на воде",
  },
  {
    image: "/images/university-cooperation/gallery/2.webp",
    imageAlt: "Команда на парусной яхте",
  },
  {
    image: "/images/university-cooperation/gallery/1.webp",
    imageAlt: "Парусная яхта на воде",
  },
  {
    image: "/images/university-cooperation/gallery/2.webp",
    imageAlt: "Команда на парусной яхте",
  },
];

const institutionDefaults = {
  navigationAriaLabel: "Навигация медиа учебного заведения",
  previousSlideLabel: "Предыдущий материал учебного заведения",
  nextSlideLabel: "Следующий материал учебного заведения",
};

const universityCooperationContactUs = {
  caption: "Форма обратной связи",
  title: "Станьте партнером<br>НИЦ «Инкомсистем»",
  description: "Наши специалисты свяжутся с вами",
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
      id: "university-cooperation-name",
      name: "name",
      label: "Имя",
      placeholder: "Имя",
      type: "text",
      autocomplete: "name",
      required: true,
    },
    {
      id: "university-cooperation-company",
      name: "company",
      label: "Компания",
      placeholder: "Компания",
      type: "text",
      autocomplete: "organization",
    },
    {
      id: "university-cooperation-phone",
      name: "phone",
      label: "Телефон",
      placeholder: "Телефон",
      type: "tel",
      autocomplete: "tel",
      required: true,
    },
    {
      id: "university-cooperation-email",
      name: "email",
      label: "Электронная почта",
      placeholder: "mail@company.ru",
      type: "email",
      autocomplete: "email",
      required: true,
    },
    {
      id: "university-cooperation-message",
      name: "message",
      label: "Сообщение",
      placeholder: "Сообщение",
      type: "text",
      required: true,
      isTextarea: true,
    },
  ],
};

const partnerItems = [
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/university-cooperation/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "/videos/intro-bg.mp4",
    ariaLabel: "Смотреть видео о сотрудничестве с АНО ДПО Учебный центр Синетик",
    fancyboxType: "html5video",
    isVideo: true,
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/university-cooperation/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "/images/university-cooperation/partners/1.webp",
    ariaLabel: "Открыть фото сотрудничества с АНО ДПО Учебный центр Синетик",
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/university-cooperation/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "/videos/intro-bg.mp4",
    ariaLabel: "Смотреть видео о сотрудничестве с АНО ДПО Учебный центр Синетик",
    fancyboxType: "html5video",
    isVideo: true,
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/university-cooperation/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "/images/university-cooperation/partners/1.webp",
    ariaLabel: "Открыть фото сотрудничества с АНО ДПО Учебный центр Синетик",
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/university-cooperation/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "/videos/intro-bg.mp4",
    ariaLabel: "Смотреть видео о сотрудничестве с АНО ДПО Учебный центр Синетик",
    fancyboxType: "html5video",
    isVideo: true,
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/university-cooperation/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "/images/university-cooperation/partners/1.webp",
    ariaLabel: "Открыть фото сотрудничества с АНО ДПО Учебный центр Синетик",
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/university-cooperation/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "/videos/intro-bg.mp4",
    ariaLabel: "Смотреть видео о сотрудничестве с АНО ДПО Учебный центр Синетик",
    fancyboxType: "html5video",
    isVideo: true,
  },
  {
    title: "АНО ДПО “Учебный центр Синетик”",
    image: "/images/university-cooperation/partners/1.webp",
    imageAlt: "Демонстрация решений АБАК на стенде учебного центра",
    href: "/images/university-cooperation/partners/1.webp",
    ariaLabel: "Открыть фото сотрудничества с АНО ДПО Учебный центр Синетик",
  },
];

export default {
  "/university-cooperation.html": {
    title: "Сотрудничество с ВУЗами",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    engineeringCenter,
    trainingCenterHero: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Сотрудничество",
            href: "/cooperation.html",
          },
          {
            label: "Сотрудничество с ВУЗами",
          },
        ],
      },
      title: "Сотрудничество<br>с ВУЗами",
      poster: "/images/university-cooperation/hero/hero.webp",
      posterAlt: "Студенты складывают руки вместе",
      videoText: "Смотреть видео",
      videoHref: "/videos/intro-bg.mp4",
      videoAriaLabel: "Смотреть видео о сотрудничестве с ВУЗами",
    },
    trainingCenterGallery: {
      ariaLabel: "Фотографии проектов сотрудничества с ВУЗами",
      navigationAriaLabel: "Навигация галереи сотрудничества с ВУЗами",
      previousSlideLabel: "Предыдущая фотография",
      nextSlideLabel: "Следующая фотография",
      slides: gallerySlides,
    },
    universityCooperationAbout: {
      ariaLabel: "О сотрудничестве с ВУЗами",
      text: "Учебный центр НИЦ «Инкомсистем» — это точка входа в современные технологии автоматизации для нефтегазовой отрасли и смежных направлений. Мы обучаем работе с контроллерами АБАК, системами телемеханики и тренажерными комплексами, которые используются на реальных производственных объектах.",
    },
    universityCooperationInstitutions: {
      title: "Учебные заведения",
      fancyboxGroup: "university-cooperation-media",
      items: [
        {
          ...institutionDefaults,
          title: "МГСУ",
          location: "г. Москва",
          text: cooperationText,
          slides: [
            {
              image: "/images/university-cooperation/universities/mgsu.svg",
              imageAlt: "Логотип Московского государственного строительного университета",
              href: "/images/university-cooperation/universities/mgsu.svg",
              ariaLabel: "Открыть логотип МГСУ",
              isLogo: true,
            },
            {
              image: "/images/university-cooperation/gallery/1.webp",
              imageAlt: "Парусная яхта на воде",
              href: "/images/university-cooperation/gallery/1.webp",
              ariaLabel: "Открыть фото проекта МГСУ",
            },
          ],
        },
        {
          ...institutionDefaults,
          title: "МГТУ им. Баумана",
          location: "г. Москва",
          text: cooperationText,
          slides: [
            {
              image: "/images/university-cooperation/universities/baumanka.webp",
              imageAlt: "Логотип Московского государственного технического университета имени Н. Э. Баумана",
              href: "/videos/intro-bg.mp4",
              ariaLabel: "Смотреть видео МГТУ им. Баумана",
              fancyboxType: "html5video",
              isVideo: true,
              isLogo: true,
            },
            {
              image: "/images/university-cooperation/gallery/2.webp",
              imageAlt: "Команда на парусной яхте",
              href: "/images/university-cooperation/gallery/2.webp",
              ariaLabel: "Открыть фото проекта МГТУ им. Баумана",
            },
          ],
        },
        {
          ...institutionDefaults,
          title: "ЛЭТИ",
          location: "г. Санкт-Петербург",
          text: cooperationText,
          slides: [
            {
              image: "/images/university-cooperation/universities/leti.svg",
              imageAlt: "Логотип Санкт-Петербургского государственного электротехнического университета ЛЭТИ",
              href: "/images/university-cooperation/universities/leti.svg",
              ariaLabel: "Открыть логотип ЛЭТИ",
              isLogo: true,
            },
            {
              image: "/images/university-cooperation/gallery/2.webp",
              imageAlt: "Команда на парусной яхте",
              href: "/images/university-cooperation/gallery/2.webp",
              ariaLabel: "Открыть фото проекта ЛЭТИ",
            },
          ],
        },
      ],
    },
    trainingCenterPartners: {
      title: "Сотрудничество с учебными заведениями",
      navigationAriaLabel: "Навигация слайдера сотрудничества с учебными заведениями",
      previousSlideLabel: "Предыдущий материал",
      nextSlideLabel: "Следующий материал",
      fancyboxGroup: "university-cooperation-media",
      items: partnerItems,
    },
    contactUs: universityCooperationContactUs,
  },
};
