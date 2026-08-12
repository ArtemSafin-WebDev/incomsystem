import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import Component from "../Component";
import Tabs from "./Tabs";

class ProductDetail extends Component {
  private readonly buttons: HTMLButtonElement[];
  private readonly panels: HTMLElement[];
  private readonly quantityInput: HTMLInputElement | null;
  private readonly quantityDecreaseButton: HTMLButtonElement | null;
  private readonly quantityIncreaseButton: HTMLButtonElement | null;
  private readonly keyHandlers = new Map<HTMLButtonElement, EventListener>();
  private readonly quantityHandlers = new Map<
    HTMLButtonElement,
    EventListener
  >();
  private quantityInputHandler: EventListener | null = null;
  private tabs: Tabs | null = null;

  constructor(element: HTMLElement) {
    super(element);

    this.buttons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(".js-product-detail-tab")
    );
    this.panels = Array.from(
      this.element.querySelectorAll<HTMLElement>(".js-product-detail-panel")
    );
    this.quantityInput = this.element.querySelector<HTMLInputElement>(
      ".js-product-quantity-input"
    );
    this.quantityDecreaseButton =
      this.element.querySelector<HTMLButtonElement>(
        ".js-product-quantity-decrease"
      );
    this.quantityIncreaseButton =
      this.element.querySelector<HTMLButtonElement>(
        ".js-product-quantity-increase"
      );

    this.initQuantityCounter();

    if (!this.buttons.length || this.buttons.length !== this.panels.length) {
      return;
    }

    this.tabs = new Tabs(this.element, {
      selectors: {
        root: ".js-product-detail",
        btn: ".js-product-detail-tab",
        item: ".js-product-detail-panel",
      },
      onTabChange: (_oldPanel, _newPanel, index) => {
        this.syncState(index);
      },
    });

    this.buttons.forEach((button, index) => {
      const handler: EventListener = (event) => {
        this.handleKeydown(event as KeyboardEvent, index);
      };

      this.keyHandlers.set(button, handler);
      button.addEventListener("keydown", handler);
    });
  }

  public destroy() {
    this.keyHandlers.forEach((handler, button) => {
      button.removeEventListener("keydown", handler);
    });
    this.keyHandlers.clear();
    this.quantityHandlers.forEach((handler, button) => {
      button.removeEventListener("click", handler);
    });
    this.quantityHandlers.clear();
    if (this.quantityInput && this.quantityInputHandler) {
      this.quantityInput.removeEventListener("input", this.quantityInputHandler);
      this.quantityInputHandler = null;
    }
    this.tabs?.destroy();
    this.tabs = null;
    this.unregister();
  }

  private initQuantityCounter() {
    if (
      !this.quantityInput ||
      !this.quantityDecreaseButton ||
      !this.quantityIncreaseButton
    ) {
      return;
    }

    const decreaseHandler: EventListener = () => {
      this.changeQuantity("decrease");
    };
    const increaseHandler: EventListener = () => {
      this.changeQuantity("increase");
    };

    this.quantityHandlers.set(this.quantityDecreaseButton, decreaseHandler);
    this.quantityHandlers.set(this.quantityIncreaseButton, increaseHandler);
    this.quantityDecreaseButton.addEventListener("click", decreaseHandler);
    this.quantityIncreaseButton.addEventListener("click", increaseHandler);
    this.quantityInputHandler = () => {
      this.syncQuantityButtons();
    };
    this.quantityInput.addEventListener("input", this.quantityInputHandler);
    this.syncQuantityButtons();
  }

  private changeQuantity(direction: "decrease" | "increase") {
    if (!this.quantityInput) return;

    const previousValue = this.quantityInput.value;

    if (direction === "decrease") {
      this.quantityInput.stepDown();
    } else {
      this.quantityInput.stepUp();
    }

    if (this.quantityInput.value === previousValue) return;

    this.syncQuantityButtons();
    this.quantityInput.dispatchEvent(new Event("input", { bubbles: true }));
    this.quantityInput.dispatchEvent(new Event("change", { bubbles: true }));
  }

  private syncQuantityButtons() {
    if (
      !this.quantityInput ||
      !this.quantityDecreaseButton ||
      !this.quantityIncreaseButton
    ) {
      return;
    }

    const value = this.quantityInput.valueAsNumber;
    const min = this.quantityInput.min
      ? Number(this.quantityInput.min)
      : -Infinity;
    const max = this.quantityInput.max
      ? Number(this.quantityInput.max)
      : Infinity;

    this.quantityDecreaseButton.disabled = !Number.isFinite(value) || value <= min;
    this.quantityIncreaseButton.disabled = !Number.isFinite(value) || value >= max;
  }

  private syncState(activeIndex: number) {
    this.buttons.forEach((button, index) => {
      const isActive = index === activeIndex;

      button.setAttribute("aria-selected", String(isActive));
      button.tabIndex = isActive ? 0 : -1;
    });

    this.panels.forEach((panel, index) => {
      panel.setAttribute("aria-hidden", String(index !== activeIndex));
    });

    if (window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches) {
      this.buttons[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }

  private handleKeydown(event: KeyboardEvent, currentIndex: number) {
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % this.buttons.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex =
        (currentIndex - 1 + this.buttons.length) % this.buttons.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = this.buttons.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    this.tabs?.setActive(nextIndex);
    this.buttons[nextIndex]?.focus();
  }
}

export default ProductDetail;
