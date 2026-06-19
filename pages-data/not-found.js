import {
  contactUs as baseContactUs,
  engineeringCenter,
  footer,
  mobileMenu,
} from "./shared.js";

export default {
  "/404.html": {
    title: "Страница не найдена",
    mobileMenu,
    footer,
    engineeringCenter,
    notFound: {
      title: "Что-то пошло не так!",
      description:
        "Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес.",
      linkText: "Вернуться на главную",
      linkHref: "/",
    },
    contactUs: {
      ...baseContactUs,
      title: "Напишите <br>нам",
      description: "Наши специалисты свяжутся с вами",
    },
  },
};
