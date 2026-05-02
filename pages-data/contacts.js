import { contactUs, engineeringCenter, mobileMenu } from "./shared.js";

const contacts = [
  {
    title: "Адрес",
    items: [
      {
        text: "Республика Татарстан,<br>Казань, ул. Восстания,<br>зд. 104И",
        note: "(ранее ул.Восстания, 100, корпус 13)",
      },
    ],
  },
  {
    title: "Телефон",
    items: [
      {
        text: "+7 (843) 212-50-10",
        href: "tel:+78432125010",
        note: "(тех. поддержка)",
      },
      {
        text: "+7 (800) 234-55-19",
        href: "tel:+78002345519",
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
        text: "marketing@incomsystem.ru",
        href: "mailto:marketing@incomsystem.ru",
      },
      {
        text: "sales.abak@incomsystem.ru",
        href: "mailto:sales.abak@incomsystem.ru",
      },
    ],
  },
  {
    title: "График работы",
    items: [
      {
        text: "Пн-Пт 8:00 - 17:00",
      },
    ],
    socials: [
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
    ],
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

export default {
  "/contacts.html": {
    title: "Контакты",
    headerCompactTheme: true,
    mobileMenu,
    contactUs,
    engineeringCenter,
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
          title: "Реквизиты<br>центра",
          type: "PDF",
          size: "1.2 Мб",
          href: "#",
          downloadText: "Скачать",
        },
      },
    },
  },
};
