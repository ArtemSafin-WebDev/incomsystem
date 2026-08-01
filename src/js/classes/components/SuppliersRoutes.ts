import { Fancybox } from "@fancyapps/ui";
import Component from "../Component";

class SuppliersRoutes extends Component {
  constructor(element: HTMLElement) {
    super(element);

    Fancybox.bind(this.element, "[data-fancybox='supplier-routes']", {
      dragToClose: false,
    });
  }

  public destroy() {
    Fancybox.unbind(this.element, "[data-fancybox='supplier-routes']");
    this.unregister();
  }
}

export default SuppliersRoutes;
