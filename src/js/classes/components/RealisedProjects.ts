import Swiper from "swiper";
import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import Component from "../Component";

class RealisedProjects extends Component {
  private readonly sliderElement: HTMLElement | null;
  private slider: Swiper | null = null;

  constructor(element: HTMLElement) {
    super(element);

    this.sliderElement = this.element.querySelector<HTMLElement>(
      ".js-realised-projects-slider"
    );

    if (!this.sliderElement) {
      return;
    }

    this.syncSliderState();
    window.addEventListener("resize", this.handleResize);
  }

  public destroy() {
    window.removeEventListener("resize", this.handleResize);
    this.unmountSlider();
    this.unregister();
  }

  private readonly handleResize = () => {
    this.syncSliderState();
  };

  private syncSliderState() {
    if (!this.sliderElement) {
      return;
    }

    if (!this.isMobile()) {
      this.unmountSlider();
      return;
    }

    if (this.slider?.el === this.sliderElement) {
      this.slider.update();
      return;
    }

    this.unmountSlider();
    this.slider = new Swiper(this.sliderElement, {
      slidesPerView: "auto",
      speed: 600,
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

export default RealisedProjects;
