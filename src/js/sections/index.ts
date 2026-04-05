import CompactHeader from "../classes/components/CompactHeader";
import PressCenter from "../classes/components/PressCenter";

export default function sections() {
  const header = document.querySelector<HTMLElement>(".page-header");

  if (header) {
    new CompactHeader(header);
  }

  const pressCenterSections = document.querySelectorAll<HTMLElement>(
    ".js-press-center"
  );

  pressCenterSections.forEach((section) => {
    new PressCenter(section);
  });
}
