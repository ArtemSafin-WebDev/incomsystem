import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import Component from "../Component";
import Tabs from "./Tabs";

class CompanyDepartments extends Component {
  private readonly tabButtons: HTMLButtonElement[];
  private readonly panels: HTMLElement[];
  private readonly sliderElements: HTMLElement[];
  private readonly prevButton: HTMLButtonElement | null;
  private readonly nextButton: HTMLButtonElement | null;
  private slider: Swiper | null = null;

  constructor(element: HTMLElement) {
    super(element);

    this.tabButtons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(".js-tabs-btn")
    );
    this.panels = Array.from(
      this.element.querySelectorAll<HTMLElement>(".js-tabs-item")
    );
    this.sliderElements = Array.from(
      this.element.querySelectorAll<HTMLElement>(".js-company-departments-slider")
    );
    this.prevButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-prev");
    this.nextButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-next");

    if (
      !this.prevButton ||
      !this.nextButton ||
      !this.tabButtons.length ||
      !this.panels.length ||
      this.tabButtons.length !== this.panels.length ||
      this.panels.length !== this.sliderElements.length
    ) {
      return;
    }

    new Tabs(this.element, {
      selectors: {
        root: ".js-company-departments",
        btn: ".js-tabs-btn",
        item: ".js-tabs-item",
      },
      onTabChange: (oldItem, _newItem, index) => {
        this.syncState(index);
        if (oldItem) {
          this.scrollTabIntoView(index);
        }
        this.mountSlider(index);
      },
    });
  }

  public destroy() {
    this.unmountSlider();
    this.unregister();
  }

  private syncState(index: number) {
    this.tabButtons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;

      button.setAttribute("aria-selected", String(isActive));
      button.tabIndex = isActive ? 0 : -1;
    });

    this.panels.forEach((panel, panelIndex) => {
      const isActive = panelIndex === index;

      panel.setAttribute("aria-hidden", String(!isActive));
    });
  }

  private scrollTabIntoView(index: number) {
    const button = this.tabButtons[index];

    if (!button || !window.matchMedia("(max-width: 576px)").matches) {
      return;
    }

    button.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }

  private mountSlider(index: number) {
    const sliderElement = this.sliderElements[index];

    if (!sliderElement || !this.prevButton || !this.nextButton) {
      return;
    }

    if (this.slider?.el === sliderElement) {
      this.slider.update();
      return;
    }

    this.unmountSlider();
    this.slider = new Swiper(sliderElement, {
      modules: [Navigation],
      slidesPerView: 1,
      speed: 600,
      watchOverflow: true,
      navigation: {
        prevEl: this.prevButton,
        nextEl: this.nextButton,
      },
    });
  }

  private unmountSlider() {
    if (!this.slider) {
      return;
    }

    this.slider.destroy(true, true);
    this.slider = null;
  }
}

export default CompanyDepartments;
