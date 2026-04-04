import Component from "../Component";

type HeaderTheme = "white" | "blue";

class CompactHeader extends Component {
  private readonly triggerSections: HTMLElement[];
  private readonly themedSections: HTMLElement[];

  constructor(element: HTMLElement) {
    super(element);

    this.triggerSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-compact-trigger]")
    );
    this.themedSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-header-theme]")
    );

    window.addEventListener("scroll", this.handleViewportChange, {
      passive: true,
    });
    window.addEventListener("resize", this.handleViewportChange);

    this.update();
  }

  public destroy() {
    window.removeEventListener("scroll", this.handleViewportChange);
    window.removeEventListener("resize", this.handleViewportChange);
    this.unregister();
  }

  private readonly handleViewportChange = () => {
    this.update();
  };

  private update() {
    const isCompact = this.shouldUseCompactMode();
    this.element.classList.toggle("page-header--compact", isCompact);

    if (!isCompact) {
      this.clearTheme();
      return;
    }

    this.applyTheme(this.resolveTheme());
  }

  private shouldUseCompactMode(): boolean {
    const firstTrigger = this.triggerSections[0];

    if (!firstTrigger) {
      return false;
    }

    return this.getScrollAnchor() >= firstTrigger.offsetTop;
  }

  private resolveTheme(): HeaderTheme {
    const anchor = this.getScrollAnchor();
    let theme: HeaderTheme = "white";

    this.themedSections.forEach((section) => {
      if (anchor < section.offsetTop) {
        return;
      }

      const sectionTheme = this.parseTheme(section.dataset.headerTheme);
      if (sectionTheme) {
        theme = sectionTheme;
      }
    });

    return theme;
  }

  private parseTheme(value?: string): HeaderTheme | null {
    if (value === "white" || value === "blue") {
      return value;
    }

    return null;
  }

  private applyTheme(theme: HeaderTheme) {
    this.element.classList.toggle("page-header--theme-white", theme === "white");
    this.element.classList.toggle("page-header--theme-blue", theme === "blue");
  }

  private clearTheme() {
    this.element.classList.remove("page-header--theme-white");
    this.element.classList.remove("page-header--theme-blue");
  }

  private getScrollAnchor(): number {
    return window.scrollY + this.element.offsetHeight;
  }
}

export default CompactHeader;
