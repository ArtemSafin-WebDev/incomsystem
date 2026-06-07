import Component from "../Component";

class HeaderSearch extends Component {
  private readonly toggleButton: HTMLButtonElement | null;
  private readonly form: HTMLFormElement | null;
  private readonly input: HTMLInputElement | null;
  private readonly openLabel: string;
  private readonly closeLabel: string;
  private isOpen = false;

  constructor(element: HTMLElement) {
    super(element);

    this.toggleButton = this.element.querySelector<HTMLButtonElement>(
      ".js-page-header-search-toggle"
    );
    this.form = this.element.querySelector<HTMLFormElement>(
      ".js-page-header-search-form"
    );
    this.input = this.element.querySelector<HTMLInputElement>(
      ".js-page-header-search-input"
    );
    this.openLabel =
      this.toggleButton?.dataset.openLabel?.trim() || "Открыть поиск";
    this.closeLabel =
      this.toggleButton?.dataset.closeLabel?.trim() || "Закрыть поиск";

    if (!this.toggleButton || !this.form) {
      return;
    }

    this.toggleButton.addEventListener("click", this.handleToggleClick);
    document.addEventListener("click", this.handleDocumentClick);
    document.addEventListener("keydown", this.handleKeydown);

    this.syncState();
  }

  public destroy() {
    this.toggleButton?.removeEventListener("click", this.handleToggleClick);
    document.removeEventListener("click", this.handleDocumentClick);
    document.removeEventListener("keydown", this.handleKeydown);

    this.isOpen = false;
    this.syncState();
    this.unregister();
  }

  private readonly handleToggleClick = () => {
    this.isOpen = !this.isOpen;
    this.syncState();

    if (this.isOpen) {
      window.requestAnimationFrame(() => this.input?.focus());
    }
  };

  private readonly handleDocumentClick = (event: MouseEvent) => {
    if (!this.isOpen) {
      return;
    }

    const target = event.target;

    if (!(target instanceof Node) || this.element.contains(target)) {
      return;
    }

    this.isOpen = false;
    this.syncState();
  };

  private readonly handleKeydown = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || !this.isOpen) {
      return;
    }

    this.isOpen = false;
    this.syncState();
    this.toggleButton?.focus();
  };

  private syncState() {
    this.element.classList.toggle("is-open", this.isOpen);
    this.toggleButton?.setAttribute("aria-expanded", String(this.isOpen));
    this.toggleButton?.setAttribute(
      "aria-label",
      this.isOpen ? this.closeLabel : this.openLabel
    );
    this.form?.setAttribute("aria-hidden", String(!this.isOpen));
    this.form?.toggleAttribute("inert", !this.isOpen);
  }
}

export default HeaderSearch;
