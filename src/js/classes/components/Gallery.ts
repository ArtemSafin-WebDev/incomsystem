import { Fancybox } from "@fancyapps/ui";
import Component from "../Component";

class Gallery extends Component {
  constructor(element: HTMLElement) {
    super(element);

    this.mountFancybox();
  }

  public destroy() {
    Fancybox.unbind(this.element, "[data-fancybox='gallery']");
    this.unregister();
  }

  private mountFancybox() {
    Fancybox.bind(this.element, "[data-fancybox='gallery']", {
      dragToClose: false,
    });
  }
}

export default Gallery;
