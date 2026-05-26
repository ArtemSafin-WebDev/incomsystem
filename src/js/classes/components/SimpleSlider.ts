import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import Component from "../Component";

class SimpleSlider extends Component {
  private readonly sliderElement: HTMLElement | null;
  private readonly prevButton: HTMLButtonElement | null;
  private readonly nextButton: HTMLButtonElement | null;
  private slider: Swiper | null = null;
  private resizeFrame = 0;

  constructor(element: HTMLElement) {
    super(element);

    this.sliderElement = this.element.querySelector<HTMLElement>(
      ".js-simple-slider-track"
    );
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
    window.removeEventListener("resize", this.handleResize);
    cancelAnimationFrame(this.resizeFrame);
    this.unmountSlider();
    this.unregister();
  }

  private mountSlider() {
    if (!this.sliderElement || !this.prevButton || !this.nextButton) {
      return;
    }

    this.unmountSlider();

    this.slider = new Swiper(this.sliderElement, {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: this.getSpaceBetween(),
      speed: 600,
      watchOverflow: false,
      navigation: {
        prevEl: this.prevButton,
        nextEl: this.nextButton,
      },
    });
    window.addEventListener("resize", this.handleResize);
  }

  private readonly handleResize = () => {
    cancelAnimationFrame(this.resizeFrame);

    this.resizeFrame = requestAnimationFrame(() => {
      if (!this.slider) {
        return;
      }

      this.slider.params.spaceBetween = this.getSpaceBetween();
      this.slider.update();
    });
  };

  private getSpaceBetween(): number {
    const value = getComputedStyle(this.element)
      .getPropertyValue("--simple-slider-space-between")
      .trim();

    if (!value) {
      return 0;
    }

    return this.resolveCssLength(value);
  }

  private resolveCssLength(value: string): number {
    const probe = document.createElement("div");
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    probe.style.width = value;
    this.element.append(probe);

    const width = probe.getBoundingClientRect().width;
    probe.remove();

    return width;
  }

  private unmountSlider() {
    if (!this.slider) {
      return;
    }

    this.slider.destroy(true, true);
    this.slider = null;
  }
}

export default SimpleSlider;
