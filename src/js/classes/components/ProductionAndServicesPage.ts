import Component from "../Component";

class ProductionAndServicesPage extends Component {
  private readonly moreButtons: HTMLButtonElement[];

  constructor(element: HTMLElement) {
    super(element);

    this.moreButtons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(
        ".js-production-and-services-page-more"
      )
    );

    this.moreButtons.forEach((button) => {
      button.addEventListener("click", this.handleMoreClick);
    });
  }

  public destroy() {
    this.moreButtons.forEach((button) => {
      button.removeEventListener("click", this.handleMoreClick);
    });

    this.unregister();
  }

  private readonly handleMoreClick = (event: Event) => {
    const button = event.currentTarget;

    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    const content = button.closest(".production-and-services-page__content");
    const services = content?.querySelector<HTMLElement>(
      ".js-production-and-services-page-services"
    );

    if (!services) {
      return;
    }

    services.classList.add("is-expanded");
    button.classList.add("is-hidden");
  };
}

export default ProductionAndServicesPage;
