import Swiper from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Component from "../Component";

class ArticleGallery extends Component {
  private readonly mainElement: HTMLElement | null;
  private readonly thumbsElement: HTMLElement | null;
  private readonly prevButton: HTMLButtonElement | null;
  private readonly nextButton: HTMLButtonElement | null;
  private readonly slideCount: number;
  private mainSlider: Swiper | null = null;
  private thumbsSlider: Swiper | null = null;

  constructor(element: HTMLElement) {
    super(element);

    this.mainElement = this.element.querySelector<HTMLElement>(
      ".js-article-gallery-main"
    );
    this.thumbsElement = this.element.querySelector<HTMLElement>(
      ".js-article-gallery-thumbs"
    );
    this.prevButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-prev");
    this.nextButton =
      this.element.querySelector<HTMLButtonElement>(".js-slider-next");
    this.slideCount =
      this.mainElement?.querySelectorAll(".swiper-slide").length ?? 0;

    if (
      !this.mainElement ||
      !this.thumbsElement ||
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
    if (
      !this.mainElement ||
      !this.thumbsElement ||
      !this.prevButton ||
      !this.nextButton
    ) {
      return;
    }

    this.unmountSlider();

    this.thumbsSlider = new Swiper(this.thumbsElement, {
      modules: [FreeMode],
      slidesPerView: "auto",
      speed: 600,
      freeMode: true,
      watchSlidesProgress: true,
    });

    this.mainSlider = new Swiper(this.mainElement, {
      modules: [Navigation, Thumbs],
      slidesPerView: 1,
      speed: 600,
      navigation: {
        prevEl: this.prevButton,
        nextEl: this.nextButton,
      },
      thumbs: {
        swiper: this.thumbsSlider,
      },
    });
  }

  private unmountSlider() {
    if (this.mainSlider) {
      this.mainSlider.destroy(true, true);
      this.mainSlider = null;
    }

    if (this.thumbsSlider) {
      this.thumbsSlider.destroy(true, true);
      this.thumbsSlider = null;
    }
  }
}

export default ArticleGallery;
