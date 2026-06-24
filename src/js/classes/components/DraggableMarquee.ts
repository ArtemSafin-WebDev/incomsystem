import Component from "../Component";

class DraggableMarquee extends Component {
  private readonly track: HTMLElement | null;
  private resizeObserver: ResizeObserver | null = null;
  private frame = 0;
  private resizeFrame = 0;
  private offset = 0;
  private loopWidth = 0;
  private speed = 0;
  private lastFrameTime = 0;
  private pointerId: number | null = null;
  private pointerStartX = 0;
  private offsetStart = 0;
  private isDragging = false;

  constructor(element: HTMLElement) {
    super(element);

    this.track = this.element.querySelector<HTMLElement>(
      ".js-draggable-marquee-track"
    );

    if (!this.track) {
      return;
    }

    this.element.classList.add("is-marquee-ready");
    this.updateMetrics();
    this.mountEvents();
    this.start();
  }

  public destroy() {
    this.element.classList.remove("is-marquee-ready", "is-dragging");
    this.element.removeEventListener("pointerdown", this.handlePointerDown);
    window.removeEventListener("pointermove", this.handlePointerMove);
    window.removeEventListener("pointerup", this.handlePointerUp);
    window.removeEventListener("pointercancel", this.handlePointerUp);
    window.removeEventListener("resize", this.handleResize);
    this.resizeObserver?.disconnect();
    cancelAnimationFrame(this.frame);
    cancelAnimationFrame(this.resizeFrame);
    this.track?.style.removeProperty("transform");
    this.unregister();
  }

  private mountEvents() {
    this.element.addEventListener("pointerdown", this.handlePointerDown);
    window.addEventListener("pointermove", this.handlePointerMove);
    window.addEventListener("pointerup", this.handlePointerUp);
    window.addEventListener("pointercancel", this.handlePointerUp);
    window.addEventListener("resize", this.handleResize);

    this.resizeObserver = new ResizeObserver(this.handleResize);
    this.resizeObserver.observe(this.element);

    if (this.track) {
      this.resizeObserver.observe(this.track);
    }
  }

  private start() {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(this.tick);
  }

  private readonly tick = (time: number) => {
    if (!this.lastFrameTime) {
      this.lastFrameTime = time;
    }

    const delta = time - this.lastFrameTime;
    this.lastFrameTime = time;

    if (!this.isDragging && this.loopWidth > 0) {
      this.offset = this.normalizeOffset(this.offset + this.speed * delta);
      this.render();
    }

    this.frame = requestAnimationFrame(this.tick);
  };

  private readonly handlePointerDown = (event: PointerEvent) => {
    if (
      !event.isPrimary ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return;
    }

    if (this.loopWidth <= 0) {
      return;
    }

    this.isDragging = true;
    this.pointerId = event.pointerId;
    this.pointerStartX = event.clientX;
    this.offsetStart = this.offset;
    this.element.classList.add("is-dragging");
    this.element.setPointerCapture(event.pointerId);
  };

  private readonly handlePointerMove = (event: PointerEvent) => {
    if (!this.isDragging || event.pointerId !== this.pointerId) {
      return;
    }

    const deltaX = event.clientX - this.pointerStartX;
    this.offset = this.normalizeOffset(this.offsetStart - deltaX);
    this.render();
    event.preventDefault();
  };

  private readonly handlePointerUp = (event: PointerEvent) => {
    if (!this.isDragging || event.pointerId !== this.pointerId) {
      return;
    }

    if (this.element.hasPointerCapture(event.pointerId)) {
      this.element.releasePointerCapture(event.pointerId);
    }

    this.isDragging = false;
    this.pointerId = null;
    this.lastFrameTime = 0;
    this.element.classList.remove("is-dragging");
  };

  private readonly handleResize = () => {
    cancelAnimationFrame(this.resizeFrame);
    this.resizeFrame = requestAnimationFrame(() => {
      this.updateMetrics();
    });
  };

  private updateMetrics() {
    if (!this.track) {
      return;
    }

    const nextLoopWidth = this.track.scrollWidth / 2;

    if (nextLoopWidth <= 0) {
      return;
    }

    const progress = this.loopWidth > 0 ? this.offset / this.loopWidth : 0;
    this.loopWidth = nextLoopWidth;
    this.speed = this.loopWidth / this.getDuration();
    this.offset = this.normalizeOffset(progress * this.loopWidth);
    this.render();
  }

  private getDuration(): number {
    if (!this.track) {
      return 34_000;
    }

    const styles = getComputedStyle(this.track);
    const durationValue =
      styles.getPropertyValue("--cooperation-logos-duration") ||
      styles.animationDuration;
    const duration = this.parseDuration(durationValue);

    return duration > 0 ? duration : 34_000;
  }

  private parseDuration(value: string): number {
    const duration = value.split(",")[0]?.trim();

    if (!duration) {
      return 0;
    }

    if (duration.endsWith("ms")) {
      return Number.parseFloat(duration);
    }

    if (duration.endsWith("s")) {
      return Number.parseFloat(duration) * 1000;
    }

    return 0;
  }

  private normalizeOffset(value: number): number {
    if (this.loopWidth <= 0) {
      return 0;
    }

    const nextOffset = value % this.loopWidth;

    return nextOffset < 0 ? nextOffset + this.loopWidth : nextOffset;
  }

  private render() {
    this.track?.style.setProperty("transform", `translateX(${-this.offset}px)`);
  }
}

export default DraggableMarquee;
