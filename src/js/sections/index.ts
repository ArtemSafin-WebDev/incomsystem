import CompactHeader from "../classes/components/CompactHeader";

export default function sections() {
  const header = document.querySelector<HTMLElement>(".page-header");

  if (!header) {
    return;
  }

  new CompactHeader(header);
}
