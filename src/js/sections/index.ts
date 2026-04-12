import CompanyFeatures from "../classes/components/CompanyFeatures";
import HarshConditions from "../classes/components/HarshConditions";
import CompactHeader from "../classes/components/CompactHeader";
import MobileMenu from "../classes/components/MobileMenu";
import PressCenter from "../classes/components/PressCenter";
import ProductionAndServices from "../classes/components/ProductionAndServices";
import RealisedProjects from "../classes/components/RealisedProjects";

export default function sections() {
  const header = document.querySelector<HTMLElement>(".page-header");
  const mobileMenu = document.querySelector<HTMLElement>(".js-mobile-menu");

  if (header) {
    new CompactHeader(header);
  }

  if (mobileMenu) {
    new MobileMenu(mobileMenu);
  }

  const pressCenterSections = document.querySelectorAll<HTMLElement>(
    ".js-press-center"
  );
  const companyFeaturesSections = document.querySelectorAll<HTMLElement>(
    ".js-company-features"
  );
  const productionAndServicesSections = document.querySelectorAll<HTMLElement>(
    ".js-production-and-services"
  );
  const harshConditionsSections = document.querySelectorAll<HTMLElement>(
    ".js-harsh-conditions"
  );
  const realisedProjectsSections = document.querySelectorAll<HTMLElement>(
    ".js-realised-projects"
  );

  pressCenterSections.forEach((section) => {
    new PressCenter(section);
  });

  companyFeaturesSections.forEach((section) => {
    new CompanyFeatures(section);
  });

  productionAndServicesSections.forEach((section) => {
    new ProductionAndServices(section);
  });

  harshConditionsSections.forEach((section) => {
    new HarshConditions(section);
  });

  realisedProjectsSections.forEach((section) => {
    new RealisedProjects(section);
  });
}
