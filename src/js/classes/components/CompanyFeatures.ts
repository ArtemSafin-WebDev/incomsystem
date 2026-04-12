import { gsap } from "gsap";
import Swiper from "swiper";
import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import Component from "../Component";

class CompanyFeatures extends Component {
  private readonly media = gsap.matchMedia();
  private readonly sliderElement: HTMLElement | null;
  private slider: Swiper | null = null;

  constructor(element: HTMLElement) {
    super(element);

    this.sliderElement = this.element.querySelector<HTMLElement>(
      ".js-company-features-slider"
    );

    if (!this.sliderElement) {
      return;
    }

    this.media.add(`(max-width: ${MOBILE_BREAKPOINT}px)`, () => {
      this.mountSlider();

      return () => {
        this.unmountSlider();
      };
    });
  }

  public destroy() {
    this.media.revert();
    this.unmountSlider();
    this.unregister();
  }

  private mountSlider() {
    if (!this.sliderElement) {
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
}

export default CompanyFeatures;
