import CookieBanner from "../classes/components/CookieBanner";

export default function cookieBanner() {
  const element = document.querySelector<HTMLElement>(".js-cookie-banner");

  if (!element) {
    return;
  }

  new CookieBanner(element);
}
