import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Component from "../Component";

gsap.registerPlugin(ScrollTrigger);

class AboutCompany extends Component {
  private readonly ctx: gsap.Context;

  constructor(element: HTMLElement) {
    super(element);

    this.ctx = gsap.context(() => {
      this.initAnimation();
    }, this.element);
  }

  public destroy() {
    this.ctx.revert();
    this.unregister();
  }

  private initAnimation() {
    const title = this.element.querySelector<HTMLElement>(
      ".about-company__title"
    );
    const description = this.element.querySelector<HTMLElement>(
      ".about-company__description"
    );
    const statsValueInners = Array.from(
      this.element.querySelectorAll<HTMLElement>(
        ".about-company__stats-value-inner"
      )
    );
    const statsTexts = Array.from(
      this.element.querySelectorAll<HTMLElement>(".about-company__stats-text")
    );
    const button = this.element.querySelector<HTMLElement>(
      ".about-company__btn"
    );

    const fadeSlideElements = [title, description, button].filter(
      (element): element is HTMLElement => Boolean(element)
    );

    gsap.set(fadeSlideElements, {
      autoAlpha: 0,
      y: 32,
    });
    gsap.set(statsTexts, {
      autoAlpha: 0,
    });
    gsap.set(statsValueInners, {
      autoAlpha: 0,
      yPercent: 115,
    });

    const timeline = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: this.element,
        start: "top 75%",
      },
    });

    timeline
      .to(title, {
        autoAlpha: 1,
        y: 0,
      })
      .to(
        description,
        {
          autoAlpha: 1,
          y: 0,
        },
        "-=0.55"
      )
      .to(
        statsValueInners,
        {
          autoAlpha: 1,
          duration: 0.95,
          ease: "power3.out",
          yPercent: 0,
          stagger: 0.22,
        },
        "-=0.35"
      )
      .to(
        statsTexts,
        {
          autoAlpha: 1,
          stagger: 0.22,
        },
        "<0.12"
      )
      .to(
        button,
        {
          autoAlpha: 1,
          y: 0,
        },
        "-=0.3"
      );
  }
}

export default AboutCompany;
