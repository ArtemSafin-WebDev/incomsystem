import AboutCompany from "../classes/components/AboutCompany";
import ArticleGallery from "../classes/components/ArticleGallery";
import Awards from "../classes/components/Awards";
import CareerGallery from "../classes/components/CareerGallery";
import CareerStudents from "../classes/components/CareerStudents";
import CompanyHistory from "../classes/components/CompanyHistory";
import CompanyDepartments from "../classes/components/CompanyDepartments";
import CompanyLeadership from "../classes/components/CompanyLeadership";
import CompanyReviews from "../classes/components/CompanyReviews";
import HarshConditions from "../classes/components/HarshConditions";
import CompactHeader from "../classes/components/CompactHeader";
import FeedbackModal from "../classes/components/FeedbackModal";
import HeaderContactsMenu from "../classes/components/HeaderContactsMenu";
import HeaderProductsMenu from "../classes/components/HeaderProductsMenu";
import HeaderSearch from "../classes/components/HeaderSearch";
import HomeVideos from "../classes/components/HomeVideos";
import IntroBackgroundVideo from "../classes/components/IntroBackgroundVideo";
import MobileMenu from "../classes/components/MobileMenu";
import OtherArticles from "../classes/components/OtherArticles";
import OtherProjects from "../classes/components/OtherProjects";
import PressCenter from "../classes/components/PressCenter";
import PressCenterFilters from "../classes/components/PressCenterFilters";
import ProductionAndServices from "../classes/components/ProductionAndServices";
import ProductionAndServicesPage from "../classes/components/ProductionAndServicesPage";
import RealisedProjects from "../classes/components/RealisedProjects";
import SimpleSlider from "../classes/components/SimpleSlider";
import ScrollReveal from "../classes/components/ScrollReveal";
import TrainingCenterCourses from "../classes/components/TrainingCenterCourses";

const SKIP_SCROLL_REVEAL_SELECTOR =
  ".js-about-company, [data-scroll-reveal-ignore]";

export default function sections() {
  const header = document.querySelector<HTMLElement>(".page-header");
  const headerProductsMenus = document.querySelectorAll<HTMLElement>(
    ".js-header-products-menu"
  );
  const headerContactsMenus = document.querySelectorAll<HTMLElement>(
    ".js-header-contacts"
  );
  const headerSearches = document.querySelectorAll<HTMLElement>(
    ".js-page-header-search"
  );
  const mobileMenu = document.querySelector<HTMLElement>(".js-mobile-menu");
  const feedbackModals =
    document.querySelectorAll<HTMLElement>(".js-feedback-modal");
  const introBackgrounds =
    document.querySelectorAll<HTMLElement>(".js-intro-bg");

  if (header) {
    new CompactHeader(header);
  }

  headerProductsMenus.forEach((menu) => {
    new HeaderProductsMenu(menu);
  });

  headerContactsMenus.forEach((menu) => {
    new HeaderContactsMenu(menu);
  });

  headerSearches.forEach((search) => {
    new HeaderSearch(search);
  });

  if (mobileMenu) {
    new MobileMenu(mobileMenu);
  }

  feedbackModals.forEach((modal) => new FeedbackModal(modal));

  introBackgrounds.forEach((section) => {
    new IntroBackgroundVideo(section);
  });

  const pressCenterSections = document.querySelectorAll<HTMLElement>(
    ".js-press-center"
  );
  const pressCenterFilters = document.querySelectorAll<HTMLElement>(
    ".js-press-center-filters"
  );
  const articleGalleries = document.querySelectorAll<HTMLElement>(
    ".js-article-gallery"
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
  const productionAndServicesPageSections =
    document.querySelectorAll<HTMLElement>(".js-production-and-services-page");
  const companyHistorySections = document.querySelectorAll<HTMLElement>(
    ".js-company-history"
  );
  const harshConditionsSections = document.querySelectorAll<HTMLElement>(
    ".js-harsh-conditions"
  );
  const homeVideosSections =
    document.querySelectorAll<HTMLElement>(".js-home-videos");
  const realisedProjectsSections = document.querySelectorAll<HTMLElement>(
    ".js-realised-projects"
  );
  const otherProjectsSections =
    document.querySelectorAll<HTMLElement>(".js-other-projects");
  const otherArticlesSections = document.querySelectorAll<HTMLElement>(
    ".js-other-articles"
  );
  const simpleSliderSections =
    document.querySelectorAll<HTMLElement>(".js-simple-slider");
  const trainingCenterCoursesSections =
    document.querySelectorAll<HTMLElement>(".js-training-center-courses");

  pressCenterSections.forEach((section) => {
    new PressCenter(section);
  });

  pressCenterFilters.forEach((form) => {
    new PressCenterFilters(form);
  });

  articleGalleries.forEach((gallery) => {
    new ArticleGallery(gallery);
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

  productionAndServicesPageSections.forEach((section) => {
    new ProductionAndServicesPage(section);
  });

  companyHistorySections.forEach((section) => {
    new CompanyHistory(section);
  });

  harshConditionsSections.forEach((section) => {
    new HarshConditions(section);
  });

  homeVideosSections.forEach((section) => {
    new HomeVideos(section);
  });

  realisedProjectsSections.forEach((section) => {
    new RealisedProjects(section);
  });

  otherProjectsSections.forEach((section) => {
    new OtherProjects(section);
  });

  otherArticlesSections.forEach((section) => {
    new OtherArticles(section);
  });

  simpleSliderSections.forEach((section) => {
    new SimpleSlider(section);
  });

  trainingCenterCoursesSections.forEach((section) => {
    new TrainingCenterCourses(section);
  });

  document
    .querySelectorAll<HTMLElement>(".page-main section")
    .forEach((section) => {
      if (section.matches(SKIP_SCROLL_REVEAL_SELECTOR)) {
        return;
      }

      new ScrollReveal(section);
    });
}
