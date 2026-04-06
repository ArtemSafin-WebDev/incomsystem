import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import Component from "../Component";

class MobileMenu extends Component {
  private readonly toggleButton: HTMLButtonElement | null;
  private readonly closeButton: HTMLButtonElement | null;
  private readonly menuLinks: HTMLAnchorElement[];
  private readonly mediaQuery = window.matchMedia(
    `(max-width: ${MOBILE_BREAKPOINT}px)`
  );
  private readonly openLabel: string;
  private isOpen = false;

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
    document.removeEventListener("keydown", this.handleKeydown);
    this.mediaQuery.removeEventListener("change", this.handleViewportChange);

    this.isOpen = false;
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
    this.syncState();
  };

  private readonly handleMenuLinkClick = () => {
    this.isOpen = false;
    this.syncState();
  };

  private readonly handleKeydown = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || !this.isOpen) {
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
    document.body.classList.toggle("menu-open", shouldShowMenu);
  }
}

export default MobileMenu;
