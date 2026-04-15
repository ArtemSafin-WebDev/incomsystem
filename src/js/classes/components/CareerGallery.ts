import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import Component from "../Component";

class CareerGallery extends Component {
  private readonly sliderElement: HTMLElement | null;
  private readonly prevButton: HTMLButtonElement | null;
  private readonly nextButton: HTMLButtonElement | null;
  private readonly slideCount: number;
  private slider: Swiper | null = null;

  constructor(element: HTMLElement) {
    super(element);

    this.sliderElement = this.element.querySelector<HTMLElement>(
      ".js-career-gallery-slider"
    );
    this.prevButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-prev");
    this.nextButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-next");
    this.slideCount =
      this.sliderElement?.querySelectorAll(".swiper-slide").length ?? 0;

    if (
      !this.sliderElement ||
      !this.prevButton ||
      !this.nextButton ||
      this.slideCount === 0
    ) {
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
      slidesPerView: 1,
      speed: 600,
      loop: this.slideCount > 1,
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

export default CareerGallery;
