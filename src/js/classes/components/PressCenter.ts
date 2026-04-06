import { gsap } from "gsap";
import Swiper from "swiper";
import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import Component from "../Component";

class PressCenter extends Component {
  private readonly media = gsap.matchMedia();
  private readonly tabButtons: HTMLButtonElement[];
  private readonly tabPanels: HTMLElement[];
  private readonly tabButtonHandlers = new Map<
    HTMLButtonElement,
    EventListener
  >();
  private readonly sliders = new Map<HTMLElement, Swiper>();
  private activeIndex = -1;
  private isMobileMode = false;

  constructor(element: HTMLElement) {
    super(element);

    this.tabButtons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(
        ".js-press-center-tab-btn"
      )
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

    this.media.add(`(max-width: ${MOBILE_BREAKPOINT}px)`, () => {
      this.isMobileMode = true;
      this.syncSliderState();

      return () => {
        this.isMobileMode = false;
        this.unmountSliders();
      };
    });
  }

  public destroy() {
    this.media.revert();

    this.tabButtonHandlers.forEach((handler, button) => {
      button.removeEventListener("click", handler);
    });
    this.tabButtonHandlers.clear();

    this.unmountSliders();
    this.unregister();
  }

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
    if (!this.isMobileMode) {
      return;
    }

    const activePanel = this.tabPanels[this.activeIndex];

    if (!activePanel) {
      return;
    }

    const slider = this.mountSlider(activePanel);
    if (!slider) {
      return;
    }

    slider.update();
  }

  private mountSlider(panel: HTMLElement) {
    const existingSlider = this.sliders.get(panel);
    if (existingSlider) {
      return existingSlider;
    }

    const sliderElement = panel.querySelector<HTMLElement>(
      ".js-press-center-slider"
    );

    if (!sliderElement) {
      return null;
    }

    const slider = new Swiper(sliderElement, {
      slidesPerView: "auto",
      speed: 600,
    });

    this.sliders.set(panel, slider);
    return slider;
  }

  private unmountSliders() {
    this.sliders.forEach((slider) => {
      slider.destroy(true, true);
    });
    this.sliders.clear();
  }
}

export default PressCenter;
