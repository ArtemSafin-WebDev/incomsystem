import { Fancybox } from "@fancyapps/ui";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import Component from "../Component";

class HomeVideos extends Component {
  private readonly sliderElement: HTMLElement | null;
  private readonly prevButton: HTMLButtonElement | null;
  private readonly nextButton: HTMLButtonElement | null;
  private slider: Swiper | null = null;
  private resizeFrame = 0;

  constructor(element: HTMLElement) {
    super(element);

    this.sliderElement = this.element.querySelector<HTMLElement>(
      ".js-home-videos-slider"
    );
    this.prevButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-prev");
    this.nextButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-next");

    if (!this.sliderElement || !this.prevButton || !this.nextButton) {
      return;
    }

    this.mountSlider();
    this.mountFancybox();
  }

  public destroy() {
    window.removeEventListener("resize", this.handleResize);
    cancelAnimationFrame(this.resizeFrame);
    this.unmountSlider();
    Fancybox.unbind(this.element, "[data-fancybox='home-videos']");
    this.unregister();
  }

  private mountSlider() {
    if (!this.sliderElement || !this.prevButton || !this.nextButton) {
      return;
    }

    this.slider = new Swiper(this.sliderElement, {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: this.getSpaceBetween(),
      speed: 600,
      navigation: {
        prevEl: this.prevButton,
        nextEl: this.nextButton,
      },
    });

    window.addEventListener("resize", this.handleResize);
  }

  private mountFancybox() {
    Fancybox.bind(this.element, "[data-fancybox='home-videos']", {
      dragToClose: false,
    });
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
      .getPropertyValue("--home-videos-space-between")
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

export default HomeVideos;
