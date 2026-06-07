import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import Component from "../Component";

class MobileMenu extends Component {
  private readonly toggleButton: HTMLButtonElement | null;
  private readonly closeButton: HTMLButtonElement | null;
  private readonly menuLinks: HTMLAnchorElement[];
  private readonly accordionButtons: HTMLButtonElement[];
  private readonly contactToggleButtons: HTMLButtonElement[];
  private readonly contactCloseButtons: HTMLButtonElement[];
  private readonly contactElement: HTMLElement | null;
  private readonly mediaQuery = window.matchMedia(
    `(max-width: ${MOBILE_BREAKPOINT}px)`
  );
  private readonly openLabel: string;
  private isOpen = false;
  private isContactPanelOpen = false;

  constructor(element: HTMLElement) {
    super(element);

    this.toggleButton = document.querySelector<HTMLButtonElement>(
      ".js-mobile-menu-toggle"
    );
    this.closeButton = this.element.querySelector<HTMLButtonElement>(
      ".js-mobile-menu-close"
    );
    this.menuLinks = Array.from(
      this.element.querySelectorAll<HTMLAnchorElement>(".js-mobile-menu-link")
    );
    this.accordionButtons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(
        ".js-mobile-menu-accordion"
      )
    );
    this.contactToggleButtons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".js-mobile-contact-toggle")
    );
    this.contactCloseButtons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(
        ".js-mobile-contact-close"
      )
    );
    this.contactElement =
      document.querySelector<HTMLElement>(".js-mobile-contact");

    this.openLabel =
      this.toggleButton?.dataset.openLabel?.trim() || "Открыть меню";

    if (!this.toggleButton || !this.closeButton) {
      return;
    }

    this.toggleButton.addEventListener("click", this.handleToggleClick);
    this.closeButton.addEventListener("click", this.handleCloseClick);
    this.menuLinks.forEach((link) =>
      link.addEventListener("click", this.handleMenuLinkClick)
    );
    this.accordionButtons.forEach((button) =>
      button.addEventListener("click", this.handleAccordionClick)
    );
    this.contactToggleButtons.forEach((button) =>
      button.addEventListener("click", this.handleContactToggleClick)
    );
    this.contactCloseButtons.forEach((button) =>
      button.addEventListener("click", this.handleContactCloseClick)
    );
    document.addEventListener("keydown", this.handleKeydown);
    this.mediaQuery.addEventListener("change", this.handleViewportChange);

    this.syncState();
  }

  public destroy() {
    this.toggleButton?.removeEventListener("click", this.handleToggleClick);
    this.closeButton?.removeEventListener("click", this.handleCloseClick);
    this.menuLinks.forEach((link) =>
      link.removeEventListener("click", this.handleMenuLinkClick)
    );
    this.accordionButtons.forEach((button) =>
      button.removeEventListener("click", this.handleAccordionClick)
    );
    this.contactToggleButtons.forEach((button) =>
      button.removeEventListener("click", this.handleContactToggleClick)
    );
    this.contactCloseButtons.forEach((button) =>
      button.removeEventListener("click", this.handleContactCloseClick)
    );
    document.removeEventListener("keydown", this.handleKeydown);
    this.mediaQuery.removeEventListener("change", this.handleViewportChange);

    this.isOpen = false;
    this.isContactPanelOpen = false;
    this.syncState();
    this.unregister();
  }

  private readonly handleToggleClick = () => {
    if (!this.mediaQuery.matches) {
      return;
    }

    this.isOpen = true;
    this.syncState();
  };

  private readonly handleCloseClick = () => {
    this.isOpen = false;
    this.isContactPanelOpen = false;
    this.syncState();
  };

  private readonly handleMenuLinkClick = () => {
    this.isOpen = false;
    this.isContactPanelOpen = false;
    this.syncState();
  };

  private readonly handleAccordionClick = (event: Event) => {
    const currentButton = event.currentTarget;

    if (!(currentButton instanceof HTMLButtonElement)) {
      return;
    }

    const isExpanded = currentButton.getAttribute("aria-expanded") === "true";

    this.accordionButtons.forEach((button) => {
      button.setAttribute(
        "aria-expanded",
        String(button === currentButton && !isExpanded)
      );
    });
  };

  private readonly handleContactToggleClick = () => {
    this.isContactPanelOpen = !this.isContactPanelOpen;
    this.syncContactPanelState();
  };

  private readonly handleContactCloseClick = () => {
    this.isContactPanelOpen = false;
    this.syncContactPanelState();
  };

  private readonly handleKeydown = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || !this.isOpen) {
      return;
    }

    if (this.isContactPanelOpen) {
      this.isContactPanelOpen = false;
      this.syncContactPanelState();
      return;
    }

    this.isOpen = false;
    this.syncState();
  };

  private readonly handleViewportChange = (
    event: MediaQueryListEvent | MediaQueryList
  ) => {
    const isMobileViewport = event.matches;

    if (!isMobileViewport && this.isOpen) {
      this.isOpen = false;
      this.isContactPanelOpen = false;
    } else if (!isMobileViewport && this.isContactPanelOpen) {
      this.isContactPanelOpen = false;
    }

    this.syncState();
  };

  private syncState() {
    if (!this.toggleButton) {
      return;
    }

    const shouldShowMenu = this.isOpen && this.mediaQuery.matches;

    this.element.classList.toggle("is-open", shouldShowMenu);
    this.toggleButton.setAttribute("aria-expanded", String(shouldShowMenu));
    this.toggleButton.setAttribute("aria-label", this.openLabel);
    this.element.setAttribute("aria-hidden", String(!shouldShowMenu));
    this.element.toggleAttribute("inert", !shouldShowMenu);

    if (!shouldShowMenu) {
      this.accordionButtons.forEach((button) =>
        button.setAttribute("aria-expanded", "false")
      );
    }

    this.syncContactPanelState();
  }

  private syncContactPanelState() {
    const shouldShowContactPanel =
      this.mediaQuery.matches && this.isContactPanelOpen;

    this.contactElement?.classList.toggle("is-open", shouldShowContactPanel);
    this.contactElement?.setAttribute(
      "aria-hidden",
      String(!shouldShowContactPanel)
    );
    this.contactElement?.toggleAttribute("inert", !shouldShowContactPanel);
    this.contactToggleButtons.forEach((button) =>
      button.setAttribute("aria-expanded", String(shouldShowContactPanel))
    );
    document.body.classList.toggle(
      "menu-open",
      (this.isOpen && this.mediaQuery.matches) || shouldShowContactPanel
    );
  }
}

export default MobileMenu;
