import Component from "../Component";

class TrainingCenterCourses extends Component {
  private readonly toggleButtons: HTMLButtonElement[];

  constructor(element: HTMLElement) {
    super(element);

    this.toggleButtons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(
        ".js-training-course-toggle"
      )
    );

    this.toggleButtons.forEach((button) => {
      button.addEventListener("click", this.handleToggleClick);
    });
  }

  public destroy() {
    this.toggleButtons.forEach((button) => {
      button.removeEventListener("click", this.handleToggleClick);
    });
    this.unregister();
  }

  private readonly handleToggleClick = (event: MouseEvent) => {
    const button = event.currentTarget;

    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    const card = button.closest<HTMLElement>(".js-training-course");
    const details = card?.querySelector<HTMLElement>(
      ".training-course-card__details"
    );
    const buttonText = button.querySelector<HTMLElement>("span");

    if (!card || !details || !buttonText) {
      return;
    }

    const isOpen = card.classList.toggle("is-open");
    details.hidden = !isOpen;
    button.setAttribute("aria-expanded", String(isOpen));
    buttonText.textContent = isOpen
      ? button.dataset.openText || ""
      : button.dataset.closedText || "";
  };
}

export default TrainingCenterCourses;
