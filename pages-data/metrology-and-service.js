import productCategoryPages from "./product-category.js";

const productCategoryPage = productCategoryPages["/product-category.html"];
const groupedServices = productCategoryPage.productCategory.services.slice(0, 4);

export default {
  "/metrology-and-service.html": {
    ...productCategoryPage,
    title: "Метрология и сервис",
    productCategory: {
      ...productCategoryPage.productCategory,
      title: "Метрология и сервис",
      breadcrumbs: {
        ariaLabel: "Хлебные крошки",
        items: [
          {
            label: "Главная",
            href: "/",
          },
          {
            label: "Продукция и услуги",
            href: "/production-and-services.html",
          },
          {
            label: "Метрология и сервис",
          },
        ],
      },
      serviceGroups: [
        {
          id: "metrology-services-title",
          title: "Метрологические услуги",
          items: groupedServices,
        },
        {
          id: "service-maintenance-title",
          title: "Сервисное обслуживание",
          items: groupedServices,
        },
      ],
    },
  },
};
