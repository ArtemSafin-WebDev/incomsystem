import { footer, mobileMenu } from "./shared.js";

export default {
  "/about-company.html": {
    title: "О компании",
    headerCompactTheme: true,
    companyHero: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "О компании",
          },
        ],
      },
      title: "НИЦ “Инкомсистем”",
      caption: "Создана в 1991 году",
      image: "/images/company-hero/hero.webp",
      imageAlt: "",
      description:
        "Инкомсистем один из востребованных системных интеграторов и&nbsp;производителей систем коммерческого учета в&nbsp;Российской Федерации",
      videoText: "Смотреть видео о компании",
      videoHref: "#",
      statsCaption: "Цифры о компании",
      stats: [
        {
          value: "600",
          suffix: "+",
          title: "проектов запущено",
          text: "Нам доверяют ключевые заказчики нефтегазовой отрасли",
          accent: true,
        },
        {
          value: "30",
          suffix: "+",
          title: "лет на рынке",
          text: "Нам доверяют ключевые заказчики нефтегазовой отрасли",
        },
        {
          value: "700",
          suffix: "+",
          title: "человек в штате",
          text: "Нам доверяют ключевые заказчики нефтегазовой отрасли",
        },
      ],
    },
    mobileMenu,
    footer,
  },
};
