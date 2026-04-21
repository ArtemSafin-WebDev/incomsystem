import AboutCompany from "../classes/components/AboutCompany";
import Awards from "../classes/components/Awards";
import CareerGallery from "../classes/components/CareerGallery";
import CareerStudents from "../classes/components/CareerStudents";
import CompanyHistory from "../classes/components/CompanyHistory";
import CompanyDepartments from "../classes/components/CompanyDepartments";
import CompanyLeadership from "../classes/components/CompanyLeadership";
import CompanyReviews from "../classes/components/CompanyReviews";
import HarshConditions from "../classes/components/HarshConditions";
import CompactHeader from "../classes/components/CompactHeader";
import IntroBackgroundVideo from "../classes/components/IntroBackgroundVideo";
import MobileMenu from "../classes/components/MobileMenu";
import PressCenter from "../classes/components/PressCenter";
import ProductionAndServices from "../classes/components/ProductionAndServices";
import RealisedProjects from "../classes/components/RealisedProjects";

export default function sections() {
  const header = document.querySelector<HTMLElement>(".page-header");
  const mobileMenu = document.querySelector<HTMLElement>(".js-mobile-menu");
  const introBackgrounds =
    document.querySelectorAll<HTMLElement>(".js-intro-bg");

  if (header) {
    new CompactHeader(header);
  }

  if (mobileMenu) {
    new MobileMenu(mobileMenu);
  }

  introBackgrounds.forEach((section) => {
    new IntroBackgroundVideo(section);
  });

  const pressCenterSections = document.querySelectorAll<HTMLElement>(
    ".js-press-center"
  );
  const awardsSections = document.querySelectorAll<HTMLElement>(".js-awards");
  const aboutCompanySections = document.querySelectorAll<HTMLElement>(
    ".js-about-company"
  );
  const careerGallerySections = document.querySelectorAll<HTMLElement>(
    ".js-career-gallery"
  );
  const careerStudentsSections = document.querySelectorAll<HTMLElement>(
    ".js-career-students"
  );
  const companyReviewsSections = document.querySelectorAll<HTMLElement>(
    ".js-company-reviews"
  );
  const companyLeadershipSections = document.querySelectorAll<HTMLElement>(
    ".js-company-leadership"
  );
  const companyDepartmentsSections = document.querySelectorAll<HTMLElement>(
    ".js-company-departments"
  );
  const productionAndServicesSections = document.querySelectorAll<HTMLElement>(
    ".js-production-and-services"
  );
  const companyHistorySections = document.querySelectorAll<HTMLElement>(
    ".js-company-history"
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

  aboutCompanySections.forEach((section) => {
    new AboutCompany(section);
  });

  awardsSections.forEach((section) => {
    new Awards(section);
  });

  careerGallerySections.forEach((section) => {
    new CareerGallery(section);
  });

  careerStudentsSections.forEach((section) => {
    new CareerStudents(section);
  });

  companyReviewsSections.forEach((section) => {
    new CompanyReviews(section);
  });

  companyLeadershipSections.forEach((section) => {
    new CompanyLeadership(section);
  });

  companyDepartmentsSections.forEach((section) => {
    new CompanyDepartments(section);
  });

  productionAndServicesSections.forEach((section) => {
    new ProductionAndServices(section);
  });

  companyHistorySections.forEach((section) => {
    new CompanyHistory(section);
  });

  harshConditionsSections.forEach((section) => {
    new HarshConditions(section);
  });

  realisedProjectsSections.forEach((section) => {
    new RealisedProjects(section);
  });
}
