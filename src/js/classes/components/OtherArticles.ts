import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import Component from "../Component";

class OtherArticles extends Component {
  private readonly sliderElement: HTMLElement | null;
  private readonly prevButton: HTMLButtonElement | null;
  private readonly nextButton: HTMLButtonElement | null;
  private slider: Swiper | null = null;

  constructor(element: HTMLElement) {
    super(element);

    this.sliderElement = this.element.querySelector<HTMLElement>(
      ".js-other-articles-slider"
    );
    this.prevButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-prev");
    this.nextButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-next");

    if (!this.sliderElement) {
      return;
    }

    this.mountSlider();
  }

  public destroy() {
    this.unmountSlider();
    this.unregister();
  }

  private mountSlider() {
    if (!this.sliderElement) {
      return;
    }

    this.unmountSlider();

    const navigation =
      this.prevButton && this.nextButton
        ? {
            prevEl: this.prevButton,
            nextEl: this.nextButton,
          }
        : false;

    this.slider = new Swiper(this.sliderElement, {
      modules: [Navigation],
      slidesPerView: "auto",
      speed: 600,
      navigation,
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

export default OtherArticles;
