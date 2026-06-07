import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import Component from "../Component";

class HeaderContactsMenu extends Component {
  private readonly toggleButton: HTMLButtonElement | null;
  private readonly menuPanel: HTMLElement | null;
  private readonly menuLinks: HTMLAnchorElement[];
  private readonly mediaQuery = window.matchMedia(
    `(max-width: ${MOBILE_BREAKPOINT}px)`
  );
  private isOpen = false;

  constructor(element: HTMLElement) {
    super(element);

    this.toggleButton = this.element.querySelector<HTMLButtonElement>(
      ".js-header-contacts-toggle"
    );
    this.menuPanel = this.element.querySelector<HTMLElement>(
      ".js-header-contacts-panel"
    );
    this.menuLinks = Array.from(
      this.element.querySelectorAll<HTMLAnchorElement>(
        ".js-header-contacts-link"
      )
    );

    if (!this.toggleButton || !this.menuPanel) {
      return;
    }

    this.toggleButton.addEventListener("click", this.handleToggleClick);
    this.menuLinks.forEach((link) =>
      link.addEventListener("click", this.handleMenuLinkClick)
    );
    document.addEventListener("click", this.handleDocumentClick);
    document.addEventListener("keydown", this.handleKeydown);
    this.mediaQuery.addEventListener("change", this.handleViewportChange);

    this.syncState();
  }

  public destroy() {
    this.toggleButton?.removeEventListener("click", this.handleToggleClick);
    this.menuLinks.forEach((link) =>
      link.removeEventListener("click", this.handleMenuLinkClick)
    );
    document.removeEventListener("click", this.handleDocumentClick);
    document.removeEventListener("keydown", this.handleKeydown);
    this.mediaQuery.removeEventListener("change", this.handleViewportChange);

    this.isOpen = false;
    this.syncState();
    this.unregister();
  }

  private readonly handleToggleClick = () => {
    if (this.mediaQuery.matches) {
      return;
    }

    this.isOpen = !this.isOpen;
    this.syncState();
  };

  private readonly handleMenuLinkClick = () => {
    this.isOpen = false;
    this.syncState();
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

  private readonly handleViewportChange = (
    event: MediaQueryListEvent | MediaQueryList
  ) => {
    if (!event.matches || !this.isOpen) {
      return;
    }

    this.isOpen = false;
    this.syncState();
  };

  private syncState() {
    const shouldShowMenu = this.isOpen && !this.mediaQuery.matches;

    this.element.classList.toggle("is-open", shouldShowMenu);
    this.toggleButton?.setAttribute("aria-expanded", String(shouldShowMenu));
    this.menuPanel?.setAttribute("aria-hidden", String(!shouldShowMenu));
    this.menuPanel?.toggleAttribute("inert", !shouldShowMenu);
  }
}

export default HeaderContactsMenu;
