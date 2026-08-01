import {
  engineeringCenter,
  footer,
  mobileMenu,
  partnershipContactUs,
} from "./shared.js";

const documents = [
  "Карта предприятия",
  "Типовой договор на поставку продукции",
  "Типовой договор на поставку услуг",
  "Памятка поставщику",
  "Памятка водителю",
].map((title) => ({
  title,
  href: "#",
  type: "PDF",
  downloadText: "Скачать",
}));

const routes = [
  {
    title: "Склад ДИСО",
    image: "/images/suppliers/routes/route-diso.webp",
    alt: "Схема проезда к складу ДИСО",
  },
  {
    title: "Склад ДАСУ",
    image: "/images/suppliers/routes/route-dasu.webp",
    alt: "Схема проезда к складу ДАСУ",
  },
  {
    title: "Склад ОСХ",
    image: "/images/suppliers/routes/route-osh.webp",
    alt: "Схема проезда к складу ОСХ",
  },
].map((route) => ({
  ...route,
  viewText: "Смотреть",
  downloadText: "Скачать",
  type: "PDF",
}));

export default {
  "/suppliers.html": {
    title: "Поставщикам НИЦ «Инкомсистем»",
    headerCompactTheme: true,
    mobileMenu,
    footer,
    contactUs: partnershipContactUs,
    engineeringCenter,
    suppliersPage: {
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "О компании",
            href: "/about-company.html",
          },
          {
            label: "Сотрудничество",
            href: "/cooperation.html",
          },
          {
            label: "Поставщикам",
          },
        ],
      },
      title: "Поставщикам<br>НИЦ «Инкомсистем»",
      hero: {
        image: "/images/suppliers/hero.webp",
        description:
          "Учебный центр НИЦ «Инкомсистем» — это точка входа в современные технологии автоматизации для нефтегазовой отрасли и смежных направлений. Мы обучаем работе с контроллерами АБАК, системами телемеханики и тренажёрными комплексами, которые используются на реальных производственных объектах.",
      },
      documents: {
        title: "Документация",
        items: documents,
      },
      routes: {
        title: "Схемы проезда к складам",
        items: routes,
      },
    },
  },
};
