export const mobileMenuLinks = [
  {
    label: "Продукция и услуги",
    href: "#",
  },
  {
    label: "Проекты",
    href: "#",
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

export const mobileMenuSocials = [
  {
    href: "#",
    label: "Telegram",
    icon: "social/telegram",
  },
  {
    href: "#",
    label: "ВКонтакте",
    icon: "social/vk",
  },
];

export const mobileMenu = {
  logoHref: "/",
  logoSrc: "/images/shared/logo.svg",
  logoAlt: "Инкомсистем",
  searchPlaceholder: "Поиск",
  menuAriaLabel: "Мобильное меню",
  links: mobileMenuLinks,
  socials: mobileMenuSocials,
  ctaText: "связаться с нами",
  ctaHref: "#",
  phoneHref: "#",
  phoneAriaLabel: "Позвонить",
  openAriaLabel: "Открыть меню",
  closeAriaLabel: "Закрыть меню",
};

export const footer = {
  caption: "Контакты",
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
  socials: mobileMenuSocials,
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
