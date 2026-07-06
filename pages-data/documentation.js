import { contactUs, engineeringCenter, footer, mobileMenu } from "./shared.js";

const documentationContactUs = {
  ...contactUs,
  title: "Напишите <br>нам",
  description: "Наши специалисты свяжутся с вами",
};

const cardLinkText = "Смотреть все документы";

export default {
  "/documentation.html": {
    title: "Документация",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: documentationContactUs,
    engineeringCenter,
    documentationPage: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Документация",
          },
        ],
      },
      title: "Документация",
      hoverImage: "/images/documentation/check-document.webp",
      sections: [
        {
          title: "Промышленные контроллеры АБАК",
          items: [
            {
              title: "Материалы для скачивания по АБАК ПЛК",
              href: "#",
              linkText: cardLinkText,
            },
            {
              title: "Материалы для скачивания по ИВК АБАК+",
              href: "#",
              linkText: cardLinkText,
            },
            {
              title: "Среда программирования",
              href: "#",
              linkText: cardLinkText,
            },
            {
              title: "Онлайн руководство по настройке и программированию АБАК ПЛК",
              href: "#",
              linkText: cardLinkText,
            },
            {
              title: "Онлайн руководство по эксплуатации АБАК ПЛК",
              href: "#",
              linkText: cardLinkText,
            },
            {
              title: "Презентации и рефлисты",
              href: "#",
              linkText: cardLinkText,
            },
          ],
        },
        {
          title: "Документация департаментов",
          items: [
            {
              title: "Аналитические системы",
              href: "#",
              linkText: cardLinkText,
            },
            {
              title: "Автоматизированные системы управления",
              href: "#",
              linkText: cardLinkText,
            },
            {
              title: "Системы измерений и блочное оборудование",
              href: "#",
              linkText: cardLinkText,
            },
            {
              title: "Метрология и сервис",
              href: "#",
              linkText: cardLinkText,
            },
            {
              title: "Сульфинертное нанопокрытие incomsteel",
              href: "#",
              linkText: cardLinkText,
            },
          ],
        },
        {
          title: "Корпоративная документация",
          items: [
            {
              title: "Система менеджмента",
              href: "#",
              linkText: cardLinkText,
            },
            {
              title: "Охрана труда",
              href: "#",
              linkText: cardLinkText,
            },
          ],
        },
      ],
    },
  },
};
