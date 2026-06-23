import { engineeringCenter, footer, mobileMenu } from "./shared.js";

const cooperationMarqueeLogos = [
  {
    src: "/images/cooperation/logos-marquee/lukoil.svg",
    alt: "Лукойл",
    width: 24.7,
  },
  {
    src: "/images/cooperation/logos-marquee/rosneft.svg",
    alt: "Роснефть",
    width: 30.2,
  },
  {
    src: "/images/cooperation/logos-marquee/novatek.svg",
    alt: "Новатэк",
    width: 27.1,
  },
  {
    src: "/images/cooperation/logos-marquee/sibur.svg",
    alt: "Сибур",
    width: 19.2,
  },
  {
    src: "/images/cooperation/logos-marquee/tatneft.svg",
    alt: "Татнефть",
    width: 26.4,
  },
  {
    src: "/images/cooperation/logos-marquee/irkutsk-oil.svg",
    alt: "Иркутская нефтяная компания",
    width: 21.3,
  },
  {
    src: "/images/cooperation/logos-marquee/russian-railways.svg",
    alt: "Российские железные дороги",
    width: 17.7,
  },
  {
    src: "/images/cooperation/logos-marquee/alrosa.svg",
    alt: "Алроса",
    width: 21.6,
  },
  {
    src: "/images/cooperation/logos-marquee/surgutneftegas.svg",
    alt: "Сургутнефтегаз",
    width: 20.3,
  },
];

const cooperationItems = [
  {
    title: "Заказчики",
    href: "#",
    hoverImage: "/images/cooperation/hover/customers.webp",
  },
  {
    title: "Партнеры",
    href: "#",
    hoverImage: "/images/cooperation/hover/partners.webp",
  },
  {
    title: "Системные интеграторы АБАК",
    href: "#",
    hoverImage: "/images/cooperation/hover/integrators.webp",
  },
  {
    title: "Сотрудничество с ВУЗами",
    href: "#",
    hoverImage: "/images/cooperation/hover/universities.webp",
  },
];

const cooperationContactUs = {
  caption: "Форма обратной связи",
  title: "Станьте партнером <br>НИИ Инкомсистем",
  description: "Если есть вопросы - напишите нам",
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
    },
    {
      id: "cooperation-message",
      name: "message",
      label: "Сообщение",
      placeholder: "Сообщение",
      type: "text",
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
    cooperationHero: {
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
      title: "НИЦ «<span>Инкомсистем</span>»<br>приглашает к сотрудничеству",
      description:
        "Центр активно сотрудничает с ведущими проектными институтами нефтегазовой отрасли.",
    },
    cooperationTypes: {
      detailsText: "Подробнее",
      logosAriaLabel: "Логотипы компаний-партнеров",
      items: cooperationItems,
      logos: cooperationMarqueeLogos,
    },
    contactUs: cooperationContactUs,
  },
};
