import Component from "../Component";

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

class IntroBackgroundVideo extends Component {
  private readonly video: HTMLVideoElement | null;
  private readonly sources: HTMLSourceElement[];
  private readonly motionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );
  private observer: IntersectionObserver | null = null;
  private isInRange = false;
  private hasSources = false;

  constructor(element: HTMLElement) {
    super(element);

    this.video = this.element.querySelector<HTMLVideoElement>(
      ".js-intro-bg-video"
    );
    this.sources = this.video
      ? Array.from(this.video.querySelectorAll<HTMLSourceElement>("source"))
      : [];

    if (!this.video || this.sources.length === 0) {
      return;
    }

    this.video.muted = true;
    this.motionQuery.addEventListener("change", this.handleMotionChange);

    if (!("IntersectionObserver" in window)) {
      this.isInRange = true;
      this.syncPlayback();
      return;
    }

    this.observer = new IntersectionObserver(this.handleIntersect, {
      rootMargin: "320px 0px",
    });
    this.observer.observe(this.element);
  }

  public destroy() {
    this.observer?.disconnect();
    this.motionQuery.removeEventListener("change", this.handleMotionChange);
    this.pauseAndUnload();
    this.unregister();
  }

  private readonly handleIntersect = (entries: IntersectionObserverEntry[]) => {
    this.isInRange = entries.some((entry) => entry.isIntersecting);
    this.syncPlayback();
  };

  private readonly handleMotionChange = () => {
    this.syncPlayback();
  };

  private syncPlayback() {
    if (!this.video) {
      return;
    }

    if (!this.isInRange || this.shouldSkipVideo()) {
      this.pauseAndUnload();
      return;
    }

    this.loadSources();

    this.video.play().catch(() => undefined);
  }

  private loadSources() {
    if (!this.video || this.hasSources) {
      return;
    }

    this.sources.forEach((source) => {
      const sourceUrl = source.dataset.src;

      if (sourceUrl) {
        source.src = sourceUrl;
      }
    });
    this.video.load();
    this.hasSources = true;
  }

  private pauseAndUnload() {
    if (!this.video || !this.hasSources) {
      return;
    }

    this.video.pause();
    this.sources.forEach((source) => {
      source.removeAttribute("src");
    });
    this.video.load();
    this.hasSources = false;
  }

  private shouldSkipVideo(): boolean {
    const connection = (navigator as NavigatorWithConnection).connection;

    return this.motionQuery.matches || connection?.saveData === true;
  }
}

export default IntroBackgroundVideo;
