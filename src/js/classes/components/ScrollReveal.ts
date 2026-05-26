import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Component from "../Component";

gsap.registerPlugin(ScrollTrigger, SplitText);

const IGNORE_SELECTOR =
  "[data-scroll-reveal-ignore], .breadcrumbs, .select, .mobile-menu, [aria-hidden='true'], [hidden]";

const COLLECTION_ITEM_SELECTOR = [
  "ul[class*='__list'] > li",
  "ol[class*='__list'] > li",
  "ul[class*='__items'] > li",
  "ol[class*='__items'] > li",
  "[class*='__table'] > [class*='__row']",
  "[class*='__form-rows'] > [class*='__form-row']",
].join(", ");

const TEXT_SELECTOR = [
  "p[class*='__caption']",
  "p[class*='__description']",
  "p[class*='__text']",
  "p[class*='__hint']",
  "[class*='__text'] > p",
  "[class*='__text'] > ul",
  "[class*='__text'] > ol",
  ".article-content > p",
  ".article-content > ul",
  ".article-content > ol",
].join(", ");

const ACTION_SELECTOR = [
  ".btn",
  "a[class*='__btn']",
  "button[class*='__btn']",
  "a[class*='__link']",
  "button[class*='__link']",
].join(", ");

class ScrollReveal extends Component {
  private readonly ctx: gsap.Context;
  private readonly splits: SplitText[] = [];
  private readonly revealedSplits = new WeakSet<SplitText>();

  constructor(element: HTMLElement) {
    super(element);

    this.ctx = gsap.context(() => {
      this.initAnimation();
    }, this.element);
  }

  public destroy() {
    this.ctx.revert();
    this.revertSplits();
    this.unregister();
  }

  private initAnimation() {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      this.isInitiallyVisible()
    ) {
      return;
    }

    const collectionItems = this.getCollectionItems();
    const titleElements = this.getScopedElements<HTMLElement>("h1, h2").filter(
      (element) => !this.isInsideAny(element, collectionItems)
    );
    const textElements = this.getScopedElements<HTMLElement>(
      TEXT_SELECTOR
    ).filter((element) => !this.isInsideAny(element, collectionItems));
    const actionElements = this.getScopedElements<HTMLElement>(
      ACTION_SELECTOR
    ).filter((element) => !this.isInsideAny(element, collectionItems));

    if (
      !titleElements.length &&
      !textElements.length &&
      !collectionItems.length &&
      !actionElements.length
    ) {
      return;
    }

    this.animateSplitText(titleElements, {
      duration: 1.05,
      ease: "expo.out",
      stagger: 0.055,
      yPercent: 115,
    });
    this.animateSplitText(textElements, {
      duration: 0.85,
      ease: "power2.out",
      stagger: 0.035,
      yPercent: 70,
    });

    this.animateSupportingElements({
      actionElements,
      collectionItems,
    });
  }

  private animateSupportingElements({
    actionElements,
    collectionItems,
  }: {
    actionElements: HTMLElement[];
    collectionItems: HTMLElement[];
  }) {
    if (!collectionItems.length && !actionElements.length) {
      return;
    }

    gsap.set(collectionItems, {
      autoAlpha: 0,
      y: 34,
    });
    gsap.set(actionElements, {
      autoAlpha: 0,
      y: 22,
    });

    const timeline = gsap.timeline({
      defaults: {
        duration: 0.9,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: this.element,
        start: "top 78%",
        once: true,
      },
    });

    if (collectionItems.length) {
      timeline.to(
        collectionItems,
        {
          autoAlpha: 1,
          clearProps: "transform,opacity,visibility",
          duration: 0.82,
          ease: "power3.out",
          stagger: {
            amount: Math.min(collectionItems.length * 0.08, 0.55),
            from: "start",
          },
          y: 0,
        },
        0.12
      );
    }

    if (actionElements.length) {
      timeline.to(
        actionElements,
        {
          autoAlpha: 1,
          clearProps: "transform,opacity,visibility",
          duration: 0.68,
          ease: "power2.out",
          stagger: 0.05,
          y: 0,
        },
        "-=0.42"
      );
    }
  }

  private animateSplitText(
    elements: HTMLElement[],
    vars: {
      duration: number;
      ease: string;
      stagger: number;
      yPercent: number;
    }
  ) {
    if (!elements.length) {
      return;
    }

    const split = SplitText.create(elements, {
      aria: "auto",
      autoSplit: true,
      deepSlice: true,
      mask: "lines",
      onSplit: (self) => this.createSplitAnimation(self, vars),
      type: "lines",
    });

    this.splits.push(split);
  }

  private createSplitAnimation(
    split: SplitText,
    vars: {
      duration: number;
      ease: string;
      stagger: number;
      yPercent: number;
    }
  ) {
    const hasPlayed = this.revealedSplits.has(split);

    if (hasPlayed) {
      return gsap.set(split.lines, {
        autoAlpha: 1,
        clearProps: "transform,opacity,visibility",
        yPercent: 0,
      });
    }

    return gsap.from(
      split.lines,
      {
        autoAlpha: 0,
        duration: vars.duration,
        ease: vars.ease,
        stagger: vars.stagger,
        yPercent: vars.yPercent,
        onComplete: () => {
          this.revealedSplits.add(split);
          gsap.set(split.lines, {
            clearProps: "transform,opacity,visibility",
          });
        },
        scrollTrigger: {
          trigger: this.element,
          start: "top 78%",
          once: true,
        },
      }
    );
  }

  private getCollectionItems() {
    const items = this.getScopedElements<HTMLElement>(COLLECTION_ITEM_SELECTOR);

    return items.filter(
      (item) => !items.some((other) => other !== item && other.contains(item))
    );
  }

  private getScopedElements<T extends HTMLElement>(selector: string) {
    return Array.from(this.element.querySelectorAll<T>(selector)).filter(
      (element) =>
        this.isOwnedByCurrentSection(element) && !this.isIgnored(element)
    );
  }

  private isOwnedByCurrentSection(element: HTMLElement) {
    return element.closest("section") === this.element;
  }

  private isIgnored(element: HTMLElement) {
    return Boolean(element.closest(IGNORE_SELECTOR));
  }

  private isInsideAny(element: HTMLElement, containers: HTMLElement[]) {
    return containers.some(
      (container) => container !== element && container.contains(element)
    );
  }

  private isInitiallyVisible() {
    const rect = this.element.getBoundingClientRect();

    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  private revertSplits() {
    this.splits.forEach((split) => {
      split.revert();
    });
    this.splits.length = 0;
  }
}

export default ScrollReveal;
