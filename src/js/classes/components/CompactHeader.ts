import Component from "../Component";
import { MOBILE_BREAKPOINT } from "../../constants/breakpoints";

class CompactHeader extends Component {
  private static readonly COMPACT_SCROLL_OFFSET = 20;

  constructor(element: HTMLElement) {
    super(element);

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
    this.element.classList.toggle(
      "page-header--compact",
      this.shouldUseCompactMode()
    );
  }

  private shouldUseCompactMode(): boolean {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      return false;
    }

    return window.scrollY > CompactHeader.COMPACT_SCROLL_OFFSET;
  }
}

export default CompactHeader;
