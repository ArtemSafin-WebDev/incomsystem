import {
  contactUs,
  engineeringCenter,
  footer,
  mobileMenu,
  mobileMenuSocials,
} from "./shared.js";

const contacts = [
  {
    title: "Адрес",
    items: [
      {
        text: "Республика Татарстан,<br>Казань, ул. Восстания,<br>зд. 104И",
      },
    ],
  },
  {
    title: "Телефон",
    items: [
      {
        text: "+7 (843) 212-50-10",
        href: "tel:+78432125010",
      },
      {
        text: "+7 (800) 234-55-19",
        href: "tel:+78002345519",
        note: "(тех. поддержка)",
      },
    ],
  },
  {
    title: "Электронная почта",
    items: [
      {
        text: "mail@incomsystem.ru",
        href: "mailto:mail@incomsystem.ru",
      },
      {
        text: "sales.abak@incomsystem.ru",
        href: "mailto:sales.abak@incomsystem.ru",
      },
      {
        text: "support.abak@incomsystem.ru",
        href: "mailto:support.abak@incomsystem.ru",
        note: "(тех. поддержка)",
      },
    ],
  },
  {
    title: "Соц сети и мессенджеры",
    socials: mobileMenuSocials,
  },
];

const partnerDetails = [
  {
    term: "Наименование юридического лица",
    value: 'АО НИЦ "Инкомсистем"',
  },
  {
    term: "Юридический адрес",
    value:
      "420029, Республика Татарстан, город Казань, Пионерская ул., д.17",
  },
  {
    term: "Фактический адрес",
    value:
      "Республика Татарстан, г. Казань, ул. Восстания, зд.104И (ранее ул.Восстания, 100, корпус 13)",
  },
  {
    term: "Телефон",
    value: "8 (843) 212-50-10",
  },
  {
    term: "Email",
    value: "mail@incomsystem.ru",
  },
  {
    term: "ИНН / КПП",
    value: "1660002574 / 166001001",
  },
  {
    term: "ОГРН",
    value: "1021603619091",
  },
  {
    term: "БИК",
    value: "-",
  },
  {
    term: "Расчетный счет",
    value: "-",
  },
  {
    term: "Корреспондентский счет",
    value: "-",
  },
  {
    term: "Наименование банка",
    value: "-",
  },
  {
    term: "Генеральный директор",
    value: "Аксенин Сергей Геннадьевич",
  },
  {
    term: "Главный бухгалтер",
    value: "-",
  },
];

const contactsContactUs = {
  ...contactUs,
  title: "Напишите <br>нам",
  description: "Наши специалисты свяжутся с вами",
};

const contactsFooter = {
  ...footer,
  email: "mail@incomsystem.ru",
};

export default {
  "/contacts.html": {
    title: "Контакты",
    headerCompactTheme: true,
    mobileMenu,
    contactUs: contactsContactUs,
    engineeringCenter,
    footer: contactsFooter,
    contactsPage: {
      title: "Контакты",
      infoAriaLabel: "Контактная информация",
      socialsAriaLabel: "Социальные сети и мессенджеры",
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Контакты",
          },
        ],
      },
      contacts,
      map: {
        caption: "Контакты",
        image: "/images/contacts/map.webp",
        pin: "/images/footer/pin.svg",
        href:
          "https://yandex.ru/maps/?text=%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B0%D0%BD,%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C,%20%D1%83%D0%BB.%20%D0%92%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%B8%D1%8F,%20104%D0%98",
        linkText: "Открыть в Яндекс Картах",
      },
      partner: {
        buttonText: "Карточка партнера",
        details: partnerDetails,
        document: {
          title: "Реквизиты",
          href: "#",
          downloadText: "Скачать",
        },
      },
    },
  },
};
