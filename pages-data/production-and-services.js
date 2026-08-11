import { contactUs as baseContactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const products = [
  {
    title: "Контроллеры АБАК",
    image: "/images/production-and-services-page/1.webp",
    href: "/abak-controllers.html",
  },
  {
    title: "Автоматизированные системы управления",
    image: "/images/production-and-services-page/2.webp",
    href: "/product-category.html",
  },
  {
    title: "Системы измерений и блочное оборудование",
    image: "/images/production-and-services-page/3.webp",
    href: "#",
  },
  {
    title: "Аналитические системы",
    image: "/images/production-and-services-page/4.webp",
    href: "#",
  },
  {
    title: "Сульфинертное нанопокрытие INCOMSTEEL",
    image: "/images/production-and-services-page/5.webp",
    href: "#",
  },
  {
    title: "Метрология и сервис",
    image: "/images/production-and-services-page/6.webp",
    href: "/metrology-and-service.html",
  },
];

export default {
  "/production-and-services.html": {
    title: "Продукция и услуги",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    engineeringCenter,
    contactUs: {
      ...baseContactUs,
      title: "Напишите <br>нам",
      description: "Наши специалисты свяжутся с вами",
    },
    productionAndServicesPage: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Продукция и услуги",
          },
        ],
      },
      title: "Продукция и услуги",
    },
    productionAndServicesCards: {
      className: "realised-projects-industries--production-and-services",
      disableMobileReveal: true,
      detailsText: "Подробнее",
      items: products,
    },
  },
};
