import { engineeringCenter, footer, mobileMenu } from "./shared.js";

const cooperationLogos = [
  {
    src: "/images/cooperation/logos/gazprom.svg",
    alt: "Газпром",
  },
  {
    src: "/images/cooperation/logos/bashneft.svg",
    alt: "Башнефть",
  },
  {
    src: "/images/cooperation/logos/gazprom.svg",
    alt: "Газпром",
  },
];

const cooperationItems = [
  {
    image: "/images/cooperation/cards/2.webp",
    imageAlt: "Представитель заказчика на объекте",
    meta: "145 заказчиков",
    title: "Заказчики",
    description:
      "Центр активно сотрудничает с ведущими проектными институтами нефтегазовой отрасли.",
    href: "#",
    logosAriaLabel: "Логотипы заказчиков",
    logos: cooperationLogos,
  },
  {
    image: "/images/cooperation/cards/1.webp",
    imageAlt: "Партнер компании",
    meta: "25 партнеров",
    title: "Партнеры",
    description:
      "Центр активно сотрудничает с ведущими проектными институтами нефтегазовой отрасли.",
    href: "#",
    logosAriaLabel: "Логотипы партнеров",
    logos: cooperationLogos,
  },
  {
    image: "/images/cooperation/cards/3.webp",
    imageAlt: "Системный интегратор АБАК",
    meta: "9 организаций",
    title: "Системные интеграторы АБАК",
    description:
      "Центр активно сотрудничает с ведущими проектными институтами нефтегазовой отрасли.",
    href: "#",
    logosAriaLabel: "Логотипы системных интеграторов",
    logos: cooperationLogos,
  },
  {
    image: "/images/cooperation/cards/4.webp",
    imageAlt: "Представитель университета",
    meta: "5 организаций",
    title: "Сотрудничество с ВУЗами",
    description:
      "Центр активно сотрудничает с ведущими проектными институтами нефтегазовой отрасли.",
    href: "#",
    logosAriaLabel: "Логотипы вузов-партнеров",
    logos: cooperationLogos,
  },
];

const cooperationContactUs = {
  className: "contact-us--cooperation",
  caption: "Форма обратной связи",
  title: "Станьте партнером <br>НИИ Инкомсистем",
  description: "Если есть вопросы - напишите нам",
  background: "/images/contact-us/bg.webp",
  backgroundMobile: "/images/contact-us/bg-mobile.webp",
  formAction: "#",
  submitText: "Отправить",
  policyText: "Нажимая кнопку, вы даете согласие на обработку&nbsp;",
  policyLinkText: "персональных данных.",
  policyLinkHref: "https://incomsystem.ru/upload/uf/baa/pol.pdf",
  fields: [
    {
      id: "cooperation-name",
      name: "name",
      label: "Имя",
      placeholder: "Имя",
      type: "text",
      autocomplete: "name",
      required: true,
    },
    {
      id: "cooperation-email",
      name: "email",
      label: "Email",
      placeholder: "mail@company.ru",
      type: "email",
      autocomplete: "email",
      required: true,
    },
    {
      id: "cooperation-phone",
      name: "phone",
      label: "Телефон",
      placeholder: "Телефон",
      type: "tel",
      autocomplete: "tel",
      required: true,
    },
    {
      id: "cooperation-company",
      name: "company",
      label: "Компания",
      placeholder: "Компания",
      type: "text",
      autocomplete: "organization",
      required: true,
    },
    {
      id: "cooperation-message",
      name: "message",
      label: "Сообщение",
      placeholder: "Сообщение",
      isTextarea: true,
      required: true,
    },
  ],
};

export default {
  "/cooperation.html": {
    title: "Сотрудничество",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    engineeringCenter,
    careerHero: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Сотрудничество",
          },
        ],
      },
      title: "НИЦ «Инкомсистем»<br>приглашает к сотрудничеству",
      image: "/images/career/hero.webp",
      imageMobile: "/images/career/hero-mobile.webp",
      imageAlt: "Команда НИЦ Инкомсистем обсуждает сотрудничество",
      description:
        "Центр активно сотрудничает с ведущими проектными институтами нефтегазовой отрасли.",
      videoHref: "#",
      videoText: "Смотреть видео о компании",
      videoTextMobile: "Смотреть видео",
    },
    cooperationTypes: {
      detailsText: "Подробнее",
      items: cooperationItems,
    },
    contactUs: cooperationContactUs,
  },
};
