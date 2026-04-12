import { footer, mobileMenu } from "./shared.js";

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
      title: "Карьера в НИЦ «Инкомсистем»",
      image: "/images/career/hero.webp",
      imageAlt: "",
      description:
        "НИЦ «Инкомсистем» ищет талантливых и перспективных соискателей для реализации масштабных производственных задач",
      videoText: "Смотреть видео о компании",
      videoHref: "#",
    },
    mobileMenu,
    footer,
  },
};
