import Component from "../Component";

class FeedbackModal extends Component {
  private readonly openButtons: HTMLAnchorElement[];
  private readonly closeButtons: HTMLButtonElement[];
  private readonly dialog: HTMLElement | null;
  private readonly courseTitleElement: HTMLElement | null;
  private readonly courseInput: HTMLInputElement | null;
  private readonly defaultCourseTitle: string;
  private readonly focusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
  private previouslyFocusedElement: HTMLElement | null = null;
  private isOpen = false;

  constructor(element: HTMLElement) {
    super(element);

    this.dialog = this.element.querySelector<HTMLElement>(
      ".feedback-modal__dialog"
    );
    this.courseTitleElement = this.element.querySelector<HTMLElement>(
      ".js-feedback-modal-course-title"
    );
    this.courseInput = this.element.querySelector<HTMLInputElement>(
      ".js-feedback-modal-course-input"
    );
    this.defaultCourseTitle =
      this.courseTitleElement?.dataset.defaultTitle ??
      this.courseTitleElement?.textContent?.trim() ??
      "";
    this.openButtons = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".js-feedback-modal-open")
    );
    this.closeButtons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(
        ".js-feedback-modal-close"
      )
    );

    this.openButtons.forEach((button) =>
      button.addEventListener("click", this.handleOpenClick)
    );
    this.closeButtons.forEach((button) =>
      button.addEventListener("click", this.handleCloseClick)
    );
    this.element.addEventListener("feedback-modal:open", this.handleOpenEvent);
    this.element.addEventListener(
      "feedback-modal:close",
      this.handleCloseEvent
    );
    document.addEventListener("keydown", this.handleKeydown);

    this.syncState();
  }

  public destroy() {
    this.openButtons.forEach((button) =>
      button.removeEventListener("click", this.handleOpenClick)
    );
    this.closeButtons.forEach((button) =>
      button.removeEventListener("click", this.handleCloseClick)
    );
    this.element.removeEventListener(
      "feedback-modal:open",
      this.handleOpenEvent
    );
    this.element.removeEventListener(
      "feedback-modal:close",
      this.handleCloseEvent
    );
    document.removeEventListener("keydown", this.handleKeydown);

    this.isOpen = false;
    this.syncState();
    this.unregister();
  }

  private readonly handleOpenClick = (event: MouseEvent) => {
    const target = event.currentTarget;

    if (!(target instanceof HTMLAnchorElement)) {
      return;
    }

    const href = target.getAttribute("href");

    if (href !== `#${this.element.id}`) {
      return;
    }

    event.preventDefault();
    this.applyCourseTitle(target.dataset.courseTitle);
    this.open();
  };

  private readonly handleCloseClick = () => {
    this.close();
  };

  private readonly handleOpenEvent = () => {
    this.applyCourseTitle();
    this.open();
  };

  private readonly handleCloseEvent = () => {
    this.close();
  };

  private readonly handleKeydown = (event: KeyboardEvent) => {
    if (!this.isOpen) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      this.close();
      return;
    }

    if (event.key === "Tab") {
      this.keepFocusInside(event);
    }
  };

  private open() {
    this.previouslyFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    this.isOpen = true;
    this.syncState();
    requestAnimationFrame(() => this.focusInitialElement());
    window.setTimeout(() => this.focusInitialElement(), 100);
  }

  private close() {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;
    this.syncState();
    this.previouslyFocusedElement?.focus();
    this.previouslyFocusedElement = null;
  }

  private applyCourseTitle(courseTitle?: string) {
    if (!this.courseTitleElement && !this.courseInput) {
      return;
    }

    const title = courseTitle?.trim() || this.defaultCourseTitle;

    if (!title) {
      return;
    }

    if (this.courseTitleElement) {
      this.courseTitleElement.textContent = title;
    }

    if (this.courseInput) {
      this.courseInput.value = title;
    }
  }

  private syncState() {
    this.element.classList.toggle("is-open", this.isOpen);
    this.element.setAttribute("aria-hidden", String(!this.isOpen));
    this.element.toggleAttribute("inert", !this.isOpen);
    document.body.classList.toggle("modal-open", this.isOpen);
  }

  private getFocusableElements(): HTMLElement[] {
    if (!this.dialog) {
      return [];
    }

    return Array.from(
      this.dialog.querySelectorAll<HTMLElement>(this.focusableSelector)
    ).filter((element) => element.getClientRects().length > 0);
  }

  private focusInitialElement() {
    const designatedElement = this.dialog?.querySelector<HTMLElement>(
      "[data-modal-initial-focus]"
    );
    const firstInput = this.dialog?.querySelector<HTMLInputElement>(
      ".contact-us__form-input"
    );
    const firstFocusable = this.getFocusableElements()[0];

    (designatedElement ?? firstInput ?? firstFocusable ?? this.dialog)?.focus();
  }

  private keepFocusInside(event: KeyboardEvent) {
    const focusableElements = this.getFocusableElements();

    if (focusableElements.length === 0) {
      event.preventDefault();
      this.dialog?.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement;

    if (event.shiftKey && activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
}

export default FeedbackModal;
