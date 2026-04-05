import Swiper from "swiper";
import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import Component from "../Component";

class PressCenter extends Component {
  private readonly tabButtons: HTMLButtonElement[];
  private readonly tabPanels: HTMLElement[];
  private readonly tabButtonHandlers = new Map<HTMLButtonElement, EventListener>();
  private activeIndex = -1;
  private slider: Swiper | null = null;

  constructor(element: HTMLElement) {
    super(element);

    this.tabButtons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(".js-press-center-tab-btn")
    );
    this.tabPanels = Array.from(
      this.element.querySelectorAll<HTMLElement>(".js-press-center-tab-panel")
    );

    if (!this.tabButtons.length || !this.tabPanels.length) {
      return;
    }

    this.tabButtons.forEach((button, index) => {
      const handler: EventListener = (event) => {
        event.preventDefault();
        this.setActiveTab(index);
      };

      this.tabButtonHandlers.set(button, handler);
      button.addEventListener("click", handler);
    });

    this.setActiveTab(0);
    window.addEventListener("resize", this.handleResize);
  }

  public destroy() {
    window.removeEventListener("resize", this.handleResize);

    this.tabButtonHandlers.forEach((handler, button) => {
      button.removeEventListener("click", handler);
    });
    this.tabButtonHandlers.clear();

    this.unmountSlider();
    this.unregister();
  }

  private readonly handleResize = () => {
    this.syncSliderState();
  };

  private setActiveTab(index: number) {
    if (
      index < 0 ||
      index >= this.tabButtons.length ||
      index >= this.tabPanels.length ||
      index === this.activeIndex
    ) {
      return;
    }

    this.tabButtons.forEach((button) => button.classList.remove("active"));
    this.tabPanels.forEach((panel) => panel.classList.remove("active"));

    this.tabButtons[index]?.classList.add("active");
    this.tabPanels[index]?.classList.add("active");
    this.activeIndex = index;

    this.syncSliderState();
  }

  private syncSliderState() {
    if (!this.isMobile()) {
      this.unmountSlider();
      return;
    }

    const activePanel = this.tabPanels[this.activeIndex];

    if (!activePanel) {
      this.unmountSlider();
      return;
    }

    const sliderElement = activePanel.querySelector<HTMLElement>(
      ".js-press-center-slider"
    );

    if (!sliderElement) {
      this.unmountSlider();
      return;
    }

    if (this.slider?.el === sliderElement) {
      this.slider.update();
      return;
    }

    this.unmountSlider();
    this.slider = new Swiper(sliderElement, {
      slidesPerView: "auto",
      spaceBetween: 16,
      speed: 450,
    });
  }

  private unmountSlider() {
    if (!this.slider) {
      return;
    }

    this.slider.destroy(true, true);
    this.slider = null;
  }

  private isMobile() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }
}

export default PressCenter;
