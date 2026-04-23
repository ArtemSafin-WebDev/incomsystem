import Select from "../classes/components/Select";

export default function selects() {
  const selectElements = document.querySelectorAll<HTMLElement>(".js-select");

  selectElements.forEach((select) => {
    new Select(select);
  });
}
