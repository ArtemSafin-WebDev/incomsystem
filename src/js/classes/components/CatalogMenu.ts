import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";
import Component from "../Component";

class CatalogMenu extends Component {
  private readonly trigger: HTMLButtonElement | null;
  private readonly surface: HTMLElement | null;
  private readonly panels: HTMLElement[];
  private readonly tracks: HTMLElement[];
  private readonly targetButtons: HTMLButtonElement[];
  private readonly leafLinks: HTMLAnchorElement[];
  private readonly backButtons: HTMLButtonElement[];
  private readonly closeButtons: HTMLButtonElement[];
  private readonly mediaQuery = window.matchMedia(
    `(max-width: ${MOBILE_BREAKPOINT}px)`
  );
  private readonly rootPanelId: string;
  private currentPanelId: string;
  private isOpen = false;
  private swapTimer: number | undefined;

  constructor(element: HTMLElement) {
    super(element);

    this.trigger = this.element.querySelector<HTMLButtonElement>(
      ".js-catalog-menu-trigger"
    );
    this.surface = this.element.querySelector<HTMLElement>(
      ".catalog-menu__surface"
    );
    this.panels = Array.from(
      this.element.querySelectorAll<HTMLElement>(".js-catalog-menu-panel")
    );
    this.tracks = Array.from(
      this.element.querySelectorAll<HTMLElement>(".js-catalog-menu-track")
    );
    this.targetButtons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(
        ".js-catalog-menu-target"
      )
    );
    this.leafLinks = Array.from(
      this.element.querySelectorAll<HTMLAnchorElement>(
        ".js-catalog-menu-leaf"
      )
    );
    this.backButtons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(".js-catalog-menu-back")
    );
    this.closeButtons = Array.from(
      this.element.querySelectorAll<HTMLButtonElement>(
        ".js-catalog-menu-close"
      )
    );
    this.rootPanelId = this.element.dataset.rootPanel || "";
    this.currentPanelId = this.rootPanelId;

    if (!this.trigger || !this.surface || !this.rootPanelId) {
      return;
    }

    this.trigger.addEventListener("click", this.handleTriggerClick);
    this.targetButtons.forEach((button) => {
      button.addEventListener("click", this.handleTargetClick);
      button.addEventListener("pointerenter", this.handleTargetPointerEnter);
      button.addEventListener("focus", this.handleTargetFocus);
    });
    this.leafLinks.forEach((link) => {
      link.addEventListener("click", this.handleLeafClick);
      link.addEventListener("pointerenter", this.handleLeafPointerEnter);
      link.addEventListener("focus", this.handleLeafFocus);
    });
    this.backButtons.forEach((button) =>
      button.addEventListener("click", this.handleBackClick)
    );
    this.closeButtons.forEach((button) =>
      button.addEventListener("click", this.handleCloseClick)
    );
    this.surface.addEventListener("pointerleave", this.handleSurfacePointerLeave);
    document.addEventListener("keydown", this.handleKeydown);
    this.mediaQuery.addEventListener("change", this.handleViewportChange);

    this.syncState();
  }

  public destroy() {
    this.trigger?.removeEventListener("click", this.handleTriggerClick);
    this.targetButtons.forEach((button) => {
      button.removeEventListener("click", this.handleTargetClick);
      button.removeEventListener("pointerenter", this.handleTargetPointerEnter);
      button.removeEventListener("focus", this.handleTargetFocus);
    });
    this.leafLinks.forEach((link) => {
      link.removeEventListener("click", this.handleLeafClick);
      link.removeEventListener("pointerenter", this.handleLeafPointerEnter);
      link.removeEventListener("focus", this.handleLeafFocus);
    });
    this.backButtons.forEach((button) =>
      button.removeEventListener("click", this.handleBackClick)
    );
    this.closeButtons.forEach((button) =>
      button.removeEventListener("click", this.handleCloseClick)
    );
    this.surface?.removeEventListener(
      "pointerleave",
      this.handleSurfacePointerLeave
    );
    document.removeEventListener("keydown", this.handleKeydown);
    this.mediaQuery.removeEventListener("change", this.handleViewportChange);

    this.isOpen = false;
    this.currentPanelId = this.rootPanelId;
    window.clearTimeout(this.swapTimer);
    this.panels.forEach((panel) => panel.classList.remove("is-swapping"));
    document.body.classList.remove("catalog-open");
    this.syncState();
    this.unregister();
  }

  private readonly handleTriggerClick = () => {
    if (!this.mediaQuery.matches) {
      return;
    }

    this.isOpen = true;
    this.currentPanelId = this.rootPanelId;
    this.syncState();
    this.focusCurrentPanel();
  };

  private readonly handleTargetClick = (event: MouseEvent) => {
    const button = event.currentTarget;

    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    this.openTarget(button);

    if (this.mediaQuery.matches) {
      this.focusCurrentPanel();
    }
  };

  private readonly handleTargetPointerEnter = (event: PointerEvent) => {
    if (this.mediaQuery.matches) {
      return;
    }

    const button = event.currentTarget;

    if (button instanceof HTMLButtonElement) {
      this.openTarget(button);
    }
  };

  private readonly handleTargetFocus = (event: FocusEvent) => {
    if (this.mediaQuery.matches) {
      return;
    }

    const button = event.currentTarget;

    if (button instanceof HTMLButtonElement) {
      this.openTarget(button);
    }
  };

  private readonly handleLeafClick = (event: MouseEvent) => {
    const link = event.currentTarget;

    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }

    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      return;
    }

    this.closeMobileMenu();
  };

  private readonly handleLeafPointerEnter = (event: PointerEvent) => {
    if (this.mediaQuery.matches) {
      return;
    }

    const link = event.currentTarget;

    if (link instanceof HTMLAnchorElement) {
      this.trimToElementPanel(link);
    }
  };

  private readonly handleLeafFocus = (event: FocusEvent) => {
    if (this.mediaQuery.matches) {
      return;
    }

    const link = event.currentTarget;

    if (link instanceof HTMLAnchorElement) {
      this.trimToElementPanel(link);
    }
  };

  private readonly handleBackClick = (event: MouseEvent) => {
    const button = event.currentTarget;

    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    const panel = button.closest<HTMLElement>(".js-catalog-menu-panel");
    const parentPanelId = panel?.dataset.parentPanel;

    if (!parentPanelId) {
      return;
    }

    this.currentPanelId = parentPanelId;
    this.syncState();
    this.focusCurrentPanel();
  };

  private readonly handleCloseClick = () => {
    this.closeMobileMenu();
  };

  private readonly handleSurfacePointerLeave = () => {
    if (this.mediaQuery.matches) {
      return;
    }

    this.currentPanelId = this.rootPanelId;
    this.syncState();
  };

  private readonly handleKeydown = (event: KeyboardEvent) => {
    if (event.key !== "Escape") {
      return;
    }

    if (this.mediaQuery.matches && this.isOpen) {
      this.closeMobileMenu();
      return;
    }

    if (!this.mediaQuery.matches && this.currentPanelId !== this.rootPanelId) {
      this.currentPanelId = this.rootPanelId;
      this.syncState();
    }
  };

  private readonly handleViewportChange = () => {
    this.isOpen = false;
    this.currentPanelId = this.rootPanelId;
    this.syncState();
  };

  private openTarget(button: HTMLButtonElement) {
    const targetPanelId = button.dataset.targetPanel;
    const targetPanel = targetPanelId ? this.getPanel(targetPanelId) : undefined;

    if (!targetPanelId || !targetPanel) {
      return;
    }

    if (!this.mediaQuery.matches) {
      const targetLevel = targetPanel.dataset.level;
      const activePanelAtLevel = this.getActivePath()
        .map((panelId) => this.getPanel(panelId))
        .find((panel) => panel?.dataset.level === targetLevel);

      if (
        activePanelAtLevel &&
        activePanelAtLevel.dataset.panelId !== targetPanelId
      ) {
        this.startPanelSwap(targetPanel);
      }
    }

    this.currentPanelId = targetPanelId;
    this.syncState();
  }

  private startPanelSwap(toPanel: HTMLElement) {
    window.clearTimeout(this.swapTimer);
    this.panels.forEach((panel) => panel.classList.remove("is-swapping"));
    toPanel.classList.add("is-swapping");
    toPanel
      .querySelector<HTMLElement>(".catalog-menu__list")
      ?.getBoundingClientRect();

    this.swapTimer = window.setTimeout(() => {
      toPanel.classList.remove("is-swapping");
      this.swapTimer = undefined;
    }, 600);
  }

  private trimToElementPanel(element: HTMLElement) {
    const panel = element.closest<HTMLElement>(".js-catalog-menu-panel");
    const panelId = panel?.dataset.panelId;

    if (!panelId) {
      return;
    }

    this.currentPanelId = panelId;
    this.syncState();
  }

  private closeMobileMenu() {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;
    this.currentPanelId = this.rootPanelId;
    this.syncState();
    this.trigger?.focus();
  }

  private focusCurrentPanel() {
    const panel = this.getPanel(this.currentPanelId);
    const focusTarget = panel?.querySelector<HTMLElement>(
      ".js-catalog-menu-back, .js-catalog-menu-target, .js-catalog-menu-leaf"
    );

    focusTarget?.focus();
  }

  private getPanel(panelId: string) {
    return this.panels.find((panel) => panel.dataset.panelId === panelId);
  }

  private getActivePath() {
    const activePath: string[] = [];
    let panel = this.getPanel(this.currentPanelId);

    while (panel) {
      const panelId = panel.dataset.panelId;

      if (!panelId || activePath.includes(panelId)) {
        break;
      }

      activePath.unshift(panelId);
      const parentId = panel.dataset.parentPanel;
      panel = parentId ? this.getPanel(parentId) : undefined;
    }

    if (!activePath.includes(this.rootPanelId)) {
      activePath.unshift(this.rootPanelId);
    }

    return activePath;
  }

  private syncState() {
    const isMobile = this.mediaQuery.matches;
    const shouldShowModal = isMobile && this.isOpen;
    const activePath = this.getActivePath();

    this.element.classList.toggle("is-open", shouldShowModal);
    this.element.dataset.activeLevel = String(activePath.length);
    this.trigger?.setAttribute("aria-expanded", String(shouldShowModal));
    this.surface?.setAttribute("role", isMobile ? "dialog" : "navigation");
    this.surface?.setAttribute("aria-hidden", String(isMobile && !this.isOpen));
    this.surface?.toggleAttribute("aria-modal", isMobile);

    this.panels.forEach((panel) => {
      const panelId = panel.dataset.panelId || "";
      const isVisible = isMobile
        ? shouldShowModal && panelId === this.currentPanelId
        : activePath.includes(panelId);

      panel.classList.toggle("is-active", isVisible);
      panel.setAttribute("aria-hidden", String(!isVisible));
      panel.toggleAttribute("inert", !isVisible);
    });

    this.tracks.forEach((track) => {
      const level = Number(track.dataset.levelTrack);
      const isTrackOpen = activePath.some((panelId) => {
        const panelLevel = Number(this.getPanel(panelId)?.dataset.level);

        return panelLevel >= level;
      });

      track.classList.toggle("is-open", !isMobile && isTrackOpen);
    });

    this.targetButtons.forEach((button) => {
      const targetPanelId = button.dataset.targetPanel || "";
      const isActive = activePath.includes(targetPanelId);

      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-expanded", String(isActive));
    });

    document.body.classList.toggle("catalog-open", shouldShowModal);
  }
}

export default CatalogMenu;
