import FileField from "../classes/components/FileField.ts";

export default function fileFields() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-file-field")
  );

  elements.forEach((element) => {
    new FileField(element);
  });
}
