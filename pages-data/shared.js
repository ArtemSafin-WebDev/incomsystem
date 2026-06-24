export const mobileMenuLinks = [
  {
    label: "Продукция и услуги",
    id: "products",
    items: [
      {
        label: "Контроллеры АБАК",
        href: "/abak-plc.html",
      },
      {
        label: "Автоматизированные системы управления",
        href: "/automated-control-systems.html",
      },
      {
        label: "Система измерений и блочное оборудование",
        href: "/production-and-services.html",
      },
      {
        label: "Аналитические системы",
        href: "/production-and-services.html",
      },
      {
        label: "Метрология и сервис",
        href: "/production-and-services.html",
      },
      {
        label: "Сульфинертное нанопокрытие Incomsteel",
        href: "/production-and-services.html",
      },
    ],
  },
  {
    label: "О компании",
    id: "about",
    items: [
      {
        label: "О нас",
        href: "/about-company.html",
      },
      {
        label: "Учебный центр",
        href: "/training-center.html",
      },
      {
        label: "Сотрудничество",
        href: "/cooperation.html",
      },
      {
        label: "Пресс центр",
        href: "/press-center.html",
      },
      {
        label: "Карьера",
        href: "/career.html",
      },
      {
        label: "Реализованные проекты",
        href: "/realised-projects.html",
      },
      {
        label: "ИТ-аккредитация",
        href: "/it-accreditation.html",
      },
    ],
  },
  {
    label: "Документация",
    href: "/documentation.html",
  },
  {
    label: "Контакты",
    href: "/contacts.html",
  },
];

export const mobileMenuSocials = [
  {
    href: "#",
    label: "Habr",
    icon: "social/menu-habr",
  },
  {
    href: "#",
    label: "Telegram",
    icon: "social/menu-telegram",
  },
  {
    href: "#",
    label: "ВКонтакте",
    icon: "social/menu-vkontakte",
  },
  {
    href: "#",
    label: "Дзен",
    icon: "social/menu-dzen",
  },
  {
    href: "#",
    label: "Чат",
    icon: "social/menu-hz",
  },
];

export const footerSocials = mobileMenuSocials;

export const feedbackModalFields = [
  {
    id: "feedback-name",
    name: "name",
    label: "Имя *",
    placeholder: "Имя",
    type: "text",
    autocomplete: "name",
    required: true,
  },
  {
    id: "feedback-company",
    name: "company",
    label: "Компания",
    placeholder: "Компания",
    type: "text",
    autocomplete: "organization",
  },
  {
    id: "feedback-phone",
    name: "phone",
    label: "Телефон *",
    placeholder: "Телефон",
    type: "tel",
    autocomplete: "tel",
    required: true,
  },
  {
    id: "feedback-email",
    name: "email",
    label: "Электронная почта *",
    placeholder: "mail@company.ru",
    type: "email",
    autocomplete: "email",
    required: true,
  },
  {
    id: "feedback-message",
    name: "message",
    label: "Сообщение",
    placeholder: "Сообщение",
    type: "text",
    isTextarea: true,
  },
];

export const feedbackModal = {
  id: "feedback-modal",
  title: "Напишите <br>нам",
  description: "Наши специалисты свяжутся с вами",
  background: "/images/contact-us/bg.webp",
  backgroundMobile: "/images/contact-us/bg-mobile.webp",
  formAction: "#",
  submitText: "Отправить заявку",
  policyText:
    "Нажимая «Отправить заявку», Вы даете свое согласие на&nbsp;обработку персональных данных и принимаете&nbsp;",
  policyLinkText: "условия политики конфиденциальности",
  policyLinkHref: "https://incomsystem.ru/upload/uf/baa/pol.pdf",
  closeAriaLabel: "Закрыть форму обратной связи",
  fields: feedbackModalFields,
};

export const feedbackSuccessModal = {
  id: "feedback-success-modal",
  modifier: "success",
  isSuccess: true,
  title: "Спасибо!",
  description: "Ваша заявка успешно отправлена",
  background: "/images/contact-us/bg.webp",
  backgroundMobile: "/images/contact-us/bg-mobile.webp",
  closeAriaLabel: "Закрыть сообщение об успешной отправке",
};

export const mobileMenu = {
  logoHref: "/",
  logoSrc: "/images/shared/logo.svg",
  logoAlt: "Инкомсистем",
  searchPlaceholder: "Поиск",
  headerSearchLabel: "Введите поисковую фразу",
  headerSearchPlaceholder: "Например, контроллеры",
  headerSearchSubmitText: "Искать",
  headerSearchOpenAriaLabel: "Открыть поиск",
  headerSearchCloseAriaLabel: "Закрыть поиск",
  menuAriaLabel: "Мобильное меню",
  links: mobileMenuLinks,
  socials: mobileMenuSocials,
  ctaText: "связаться с нами",
  ctaHref: "#feedback-modal",
  feedbackModal,
  feedbackSuccessModal,
  phoneHref: "tel:+78432125010",
  phoneAriaLabel: "Позвонить",
  openAriaLabel: "Открыть меню",
  closeAriaLabel: "Закрыть меню",
  contactAriaLabel: "Контакты для связи",
  closeContactAriaLabel: "Закрыть контакты",
  contactLinks: [
    {
      label: "+7 843 212-50-10",
      href: "tel:+78432125010",
    },
    {
      label: "mail@incomsystem.ru",
      href: "mailto:mail@incomsystem.ru",
    },
  ],
};

export const contactUsFields = [
  {
    id: "contact-name",
    name: "name",
    label: "Имя",
    placeholder: "Имя",
    type: "text",
    autocomplete: "name",
    required: true,
  },
  {
    id: "contact-company",
    name: "company",
    label: "Компания",
    placeholder: "Компания",
    type: "text",
    autocomplete: "organization",
  },
  {
    id: "contact-phone",
    name: "phone",
    label: "Телефон",
    placeholder: "Телефон",
    type: "tel",
    autocomplete: "tel",
    required: true,
  },
  {
    id: "contact-email",
    name: "email",
    label: "Электронная почта",
    placeholder: "mail@company.ru",
    type: "email",
    autocomplete: "email",
    required: true,
  },
  {
    id: "contact-message",
    name: "message",
    label: "Сообщение",
    placeholder: "Сообщение",
    type: "text",
    required: true,
    isTextarea: true,
  },
];

export const contactUs = {
  caption: "Форма обратной связи",
  title: "Свяжитесь <br>с нами",
  description: "Если есть вопросы — напишите нам",
  background: "/images/contact-us/bg.webp",
  backgroundMobile: "/images/contact-us/bg-mobile.webp",
  formAction: "#",
  submitText: "Отправить",
  policyText:
    "Нажимая «Отправить», Вы даете свое согласие на&nbsp;обработку персональных данных и принимаете&nbsp;",
  policyLinkText: "условия политики конфиденциальности",
  policyLinkHref: "https://incomsystem.ru/upload/uf/baa/pol.pdf",
  fields: contactUsFields,
};

export const engineeringCenterDocuments = [
  {
    title: "Каталог продукции",
    type: "PDF",
    size: "1.5 Мб",
    href: "#",
    downloadText: "Скачать",
  },
  {
    title: "Презентация компании",
    type: "PDF",
    size: "1.2 Мб",
    href: "#",
    downloadText: "Скачать",
  },
];

export const engineeringCenterNavigation = [
  {
    label: "Продукция и услуги",
    href: "#",
  },
  {
    label: "Реализованные проекты",
    href: "#",
    active: true,
  },
  {
    label: "О компании",
    href: "#",
  },
  {
    label: "Документация",
    href: "#",
  },
  {
    label: "Контакты",
    href: "#",
  },
];

export const engineeringCenter = {
  copyright: "© 1991—2025",
  documents: engineeringCenterDocuments,
  navigation: engineeringCenterNavigation,
  navigationAriaLabel: "Навигация по разделам",
  label: "Научно-инженерный центр",
  logo: "/images/incomsystem.svg",
  logoAlt: "Инкомсистем",
};

export const footer = {
  mapImage: "/images/footer/map.webp",
  mapImageMobile: "/images/footer/map-mobile.webp",
  mapPin: "/images/footer/pin.svg",
  mapLinkText: "Открыть в Яндекс Картах",
  mapLinkHref:
    "https://yandex.ru/maps/?text=%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B0%D0%BD,%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C,%20%D1%83%D0%BB.%20%D0%92%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%B8%D1%8F,%20104%D0%98",
  companyDetails: [
    "НИЦ «ИНКОМСИСТЕМ»",
    "ИНН 1660002574",
    "ОГРН 1021603619091",
  ],
  addressTitle: "Адрес",
  address: "Республика Татарстан, Казань, ул. Восстания, зд. 104И",
  addressNote: "(ранее ул.Восстания, 100, корпус 13)",
  contactTitle: "Связаться",
  phone: "+7 843 212-50-10",
  phoneRaw: "+78432125010",
  email: "info@incomsteel.ru",
  socialsAriaLabel: "Социальные сети",
  socials: footerSocials,
  copyright: "©1991-2025 АО «Научно-инженерный центр «ИНКОМСИСТЕМ»",
  policyText: "Политика в отношении обработки персональных данных",
  policyLink: "https://incomsystem.ru/upload/uf/baa/pol.pdf",
  developer: {
    href: "https://markweber.pro/",
    text: "Дизайн и разработка сайта — Mark Weber",
    logo: "/images/markweber.svg",
    logoAlt: "Mark Weber",
  },
};

export default {};
