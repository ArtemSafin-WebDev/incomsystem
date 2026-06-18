import Component from "../Component";

class PressCenterFilters extends Component {
  private resetButton: HTMLButtonElement | null;

  constructor(element: HTMLElement) {
    super(element);
    this.resetButton = this.element.querySelector<HTMLButtonElement>(
      ".js-press-center-filters-reset"
    );

    this.element.addEventListener("input", this.updateResetButtonState);
    this.element.addEventListener("change", this.updateResetButtonState);
    this.element.addEventListener("click", this.handleClick);
    this.element.addEventListener("reset", this.handleReset);
    this.updateResetButtonState();
  }

  public destroy() {
    this.element.removeEventListener("input", this.updateResetButtonState);
    this.element.removeEventListener("change", this.updateResetButtonState);
    this.element.removeEventListener("click", this.handleClick);
    this.element.removeEventListener("reset", this.handleReset);
    this.unregister();
  }

  private hasActiveFilters() {
    const fields = Array.from(
      this.element.querySelectorAll<HTMLInputElement>(
        'input[type="search"], input[type="radio"], input[type="checkbox"]'
      )
    );

    return fields.some((field) => {
      if (field.type === "search") {
        return field.value.trim().length > 0;
      }

      return field.checked;
    });
  }

  private updateResetButtonState = () => {
    if (!this.resetButton) return;
    this.resetButton.disabled = !this.hasActiveFilters();
  };

  private handleClick = () => {
    requestAnimationFrame(this.updateResetButtonState);
  };

  private handleReset = () => {
    requestAnimationFrame(this.updateResetButtonState);
  };
}

export default PressCenterFilters;
