import { Fancybox } from "@fancyapps/ui";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import Component from "../Component";

class UniversityCooperation extends Component {
  private readonly sliders = new Map<HTMLElement, Swiper>();
  private resizeFrame = 0;

  constructor(element: HTMLElement) {
    super(element);

    this.mountSliders();
    this.mountFancybox();
    window.addEventListener("resize", this.handleResize);
  }

  public destroy() {
    window.removeEventListener("resize", this.handleResize);
    cancelAnimationFrame(this.resizeFrame);
    this.unmountSliders();
    Fancybox.unbind(this.element, "[data-fancybox='university-cooperation-media']");
    this.unregister();
  }

  private mountSliders() {
    const sliderElements = this.element.querySelectorAll<HTMLElement>(
      ".js-university-media-slider"
    );

    sliderElements.forEach((sliderElement) => {
      const card = sliderElement.closest<HTMLElement>(
        ".university-institution-card__media-block"
      );
      const prevButton =
        card?.querySelector<HTMLButtonElement>(".js-slider-prev") ?? null;
      const nextButton =
        card?.querySelector<HTMLButtonElement>(".js-slider-next") ?? null;

      if (!card || !prevButton || !nextButton) {
        return;
      }

      const slider = new Swiper(sliderElement, {
        modules: [Navigation],
        slidesPerView: "auto",
        spaceBetween: this.getSpaceBetween(),
        speed: 600,
        watchOverflow: false,
        navigation: {
          prevEl: prevButton,
          nextEl: nextButton,
        },
      });

      this.sliders.set(sliderElement, slider);
    });
  }

  private mountFancybox() {
    Fancybox.bind(this.element, "[data-fancybox='university-cooperation-media']", {
      dragToClose: false,
    });
  }

  private readonly handleResize = () => {
    cancelAnimationFrame(this.resizeFrame);

    this.resizeFrame = requestAnimationFrame(() => {
      this.sliders.forEach((slider) => {
        slider.params.spaceBetween = this.getSpaceBetween();
        slider.update();
      });
    });
  };

  private getSpaceBetween(): number {
    const value = getComputedStyle(this.element)
      .getPropertyValue("--university-media-slider-space-between")
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

  private unmountSliders() {
    this.sliders.forEach((slider) => {
      slider.destroy(true, true);
    });
    this.sliders.clear();
  }
}

export default UniversityCooperation;
