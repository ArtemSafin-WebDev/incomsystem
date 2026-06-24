import Component from "../Component";

type CookieBannerChoice = "accepted" | "rejected" | "dismissed";

const DEFAULT_STORAGE_KEY = "incomsystem-cookie-consent";

class CookieBanner extends Component {
  private readonly acceptButton: HTMLButtonElement | null;
  private readonly rejectButton: HTMLButtonElement | null;
  private readonly closeButton: HTMLButtonElement | null;
  private readonly storageKey: string;

  constructor(element: HTMLElement) {
    super(element);

    this.acceptButton = this.element.querySelector<HTMLButtonElement>(
      ".js-cookie-banner-accept"
    );
    this.rejectButton = this.element.querySelector<HTMLButtonElement>(
      ".js-cookie-banner-reject"
    );
    this.closeButton = this.element.querySelector<HTMLButtonElement>(
      ".js-cookie-banner-close"
    );
    this.storageKey =
      this.element.dataset.storageKey?.trim() || DEFAULT_STORAGE_KEY;

    if (this.getStoredChoice()) {
      this.hide();
      return;
    }

    this.show();

    this.acceptButton?.addEventListener("click", this.handleAcceptClick);
    this.rejectButton?.addEventListener("click", this.handleRejectClick);
    this.closeButton?.addEventListener("click", this.handleCloseClick);
  }

  public destroy() {
    this.acceptButton?.removeEventListener("click", this.handleAcceptClick);
    this.rejectButton?.removeEventListener("click", this.handleRejectClick);
    this.closeButton?.removeEventListener("click", this.handleCloseClick);
    this.unregister();
  }

  private readonly handleAcceptClick = () => {
    this.saveChoice("accepted");
    this.hide();
  };

  private readonly handleRejectClick = () => {
    this.saveChoice("rejected");
    this.hide();
  };

  private readonly handleCloseClick = () => {
    this.saveChoice("dismissed");
    this.hide();
  };

  private getStoredChoice(): CookieBannerChoice | null {
    try {
      const value = window.localStorage.getItem(this.storageKey);

      if (
        value === "accepted" ||
        value === "rejected" ||
        value === "dismissed"
      ) {
        return value;
      }
    } catch {
      return null;
    }

    return null;
  }

  private saveChoice(choice: CookieBannerChoice) {
    try {
      window.localStorage.setItem(this.storageKey, choice);
    } catch {
      return;
    }
  }

  private hide() {
    this.element.classList.remove("is-shown");
    this.element.setAttribute("aria-hidden", "true");
  }

  private show() {
    this.element.classList.add("is-shown");
    this.element.setAttribute("aria-hidden", "false");
  }
}

export default CookieBanner;
