import { gsap } from "gsap";
import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import Component from "../Component";

type ItemHandlers = {
  mouseEnter: EventListener;
  mouseLeave: EventListener;
  focusIn: EventListener;
};

class ProductionAndServices extends Component {
  private readonly items: HTMLElement[];
  private readonly previews: HTMLElement[];
  private readonly itemHandlers = new Map<HTMLElement, ItemHandlers>();
  private readonly mobileMediaQuery = window.matchMedia(
    `(max-width: ${MOBILE_BREAKPOINT}px)`
  );
  private requestedIndex = -1;
  private activeIndex = -1;
  private isTransitioning = false;
  private isInteractionEnabled = false;

  constructor(element: HTMLElement) {
    super(element);

    this.items = Array.from(
      this.element.querySelectorAll<HTMLElement>(".production-and-services__item")
    );
    this.previews = [];

    for (const item of this.items) {
      const preview = item.querySelector<HTMLElement>(
        ".production-and-services__item-preview"
      );

      if (!preview) {
        return;
      }

      this.previews.push(preview);
    }

    if (!this.items.length || this.items.length !== this.previews.length) {
      return;
    }

    gsap.set(this.previews, {
      autoAlpha: 0,
      y: 40,
      transformOrigin: "50% 50%",
    });
    this.items.forEach((item) => item.classList.remove("is-active"));

    this.items.forEach((item, index) => {
      const mouseEnter: EventListener = () => {
        this.request(index);
      };

      const mouseLeave: EventListener = (event) => {
        if (!(event instanceof MouseEvent)) {
          return;
        }

        const { relatedTarget } = event;

        if (relatedTarget instanceof Element) {
          const nextItem = relatedTarget.closest(".production-and-services__item");

          if (nextItem && this.element.contains(nextItem)) {
            return;
          }
        }

        this.request(-1);
      };

      const focusIn: EventListener = () => {
        this.request(index);
      };

      this.itemHandlers.set(item, { mouseEnter, mouseLeave, focusIn });
    });
    this.syncInteractionState();
    this.mobileMediaQuery.addEventListener("change", this.handleViewportChange);
  }

  public destroy() {
    this.mobileMediaQuery.removeEventListener("change", this.handleViewportChange);
    this.disableInteractions();

    this.itemHandlers.clear();
    gsap.killTweensOf(this.previews);
    this.unregister();
  }

  private readonly handleViewportChange = () => {
    this.syncInteractionState();
  };

  private readonly handleMouseLeave = (event: Event) => {
    const relatedTarget =
      event instanceof MouseEvent ? event.relatedTarget : null;

    if (relatedTarget instanceof Node && this.element.contains(relatedTarget)) {
      return;
    }

    this.request(-1);
  };

  private readonly handleFocusOut = (event: FocusEvent) => {
    const relatedTarget = event.relatedTarget;

    if (relatedTarget instanceof Node && this.element.contains(relatedTarget)) {
      return;
    }

    this.request(-1);
  };

  private request(index: number) {
    if (!this.isInteractionEnabled) {
      return;
    }

    if (index === this.requestedIndex) {
      return;
    }

    this.requestedIndex = index;
    this.processQueue();
  }

  private processQueue() {
    if (this.isTransitioning || this.requestedIndex === this.activeIndex) {
      return;
    }

    this.isTransitioning = true;
    this.hideActivePreview();
  }

  private hideActivePreview() {
    const currentIndex = this.activeIndex;

    if (currentIndex < 0) {
      this.showRequestedPreview();
      return;
    }

    const currentPreview = this.previews[currentIndex];

    if (!currentPreview) {
      this.activeIndex = -1;
      this.showRequestedPreview();
      return;
    }

    this.items[currentIndex]?.classList.remove("is-active");

    gsap.to(currentPreview, {
      autoAlpha: 0,
      y: -40,
      duration: 0.18,
      ease: "power2.in",
      overwrite: true,
      onComplete: () => {
        if (this.activeIndex === currentIndex) {
          this.activeIndex = -1;
        }

        this.showRequestedPreview();
      },
    });
  }

  private showRequestedPreview() {
    const nextIndex = this.requestedIndex;

    if (nextIndex < 0) {
      this.finishTransition();
      return;
    }

    const nextPreview = this.previews[nextIndex];

    if (!nextPreview) {
      this.finishTransition();
      return;
    }

    this.items[nextIndex]?.classList.add("is-active");

    gsap.set(nextPreview, { autoAlpha: 0, y: 40 });
    gsap.to(nextPreview, {
      autoAlpha: 1,
      y: 0,
      duration: 0.22,
      ease: "power2.out",
      overwrite: true,
      onComplete: () => {
        this.activeIndex = nextIndex;
        this.finishTransition();
      },
    });
  }

  private finishTransition() {
    this.isTransitioning = false;

    if (this.requestedIndex !== this.activeIndex) {
      this.processQueue();
    }
  }

  private syncInteractionState() {
    if (this.mobileMediaQuery.matches) {
      this.disableInteractions();
      return;
    }

    this.enableInteractions();
  }

  private enableInteractions() {
    if (this.isInteractionEnabled) {
      return;
    }

    this.itemHandlers.forEach((handlers, item) => {
      item.addEventListener("mouseenter", handlers.mouseEnter);
      item.addEventListener("mouseleave", handlers.mouseLeave);
      item.addEventListener("focusin", handlers.focusIn);
    });

    this.element.addEventListener("mouseleave", this.handleMouseLeave);
    this.element.addEventListener("focusout", this.handleFocusOut);
    this.isInteractionEnabled = true;
  }

  private disableInteractions() {
    if (this.isInteractionEnabled) {
      this.itemHandlers.forEach((handlers, item) => {
        item.removeEventListener("mouseenter", handlers.mouseEnter);
        item.removeEventListener("mouseleave", handlers.mouseLeave);
        item.removeEventListener("focusin", handlers.focusIn);
      });

      this.element.removeEventListener("mouseleave", this.handleMouseLeave);
      this.element.removeEventListener("focusout", this.handleFocusOut);
    }

    this.isInteractionEnabled = false;
    this.requestedIndex = -1;
    this.activeIndex = -1;
    this.isTransitioning = false;
    this.items.forEach((item) => item.classList.remove("is-active"));
    gsap.killTweensOf(this.previews);
    gsap.set(this.previews, { autoAlpha: 0, y: 40 });
  }
}

export default ProductionAndServices;
