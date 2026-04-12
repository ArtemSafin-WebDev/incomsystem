import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import Component from "../Component";

class Awards extends Component {
  private readonly sliderElement: HTMLElement | null;
  private readonly prevButton: HTMLButtonElement | null;
  private readonly nextButton: HTMLButtonElement | null;
  private slider: Swiper | null = null;

  constructor(element: HTMLElement) {
    super(element);

    this.sliderElement =
      this.element.querySelector<HTMLElement>(".js-awards-slider");
    this.prevButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-prev");
    this.nextButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-next");

    if (!this.sliderElement || !this.prevButton || !this.nextButton) {
      return;
    }

    this.mountSlider();
  }

  public destroy() {
    this.unmountSlider();
    this.unregister();
  }

  private mountSlider() {
    if (!this.sliderElement || !this.prevButton || !this.nextButton) {
      return;
    }

    if (this.slider?.el === this.sliderElement) {
      this.slider.update();
      return;
    }

    this.unmountSlider();
    this.slider = new Swiper(this.sliderElement, {
      modules: [Navigation],
      slidesPerView: "auto",
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

export default Awards;
