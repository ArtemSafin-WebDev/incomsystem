import Component from "../Component";

class FileField extends Component {
  private input: HTMLInputElement | null;
  private value: HTMLElement | null;
  private form: HTMLFormElement | null;

  constructor(element: HTMLElement) {
    super(element);

    this.input = element.querySelector<HTMLInputElement>('input[type="file"]');
    this.value = element.querySelector<HTMLElement>(".contact-us-form__file-value");
    this.form = this.input?.form ?? null;

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.input?.addEventListener("change", this.handleChange);
    this.form?.addEventListener("reset", this.handleReset);
    this.syncValue();
  }

  private handleChange() {
    this.syncValue();
  }

  private handleReset() {
    requestAnimationFrame(() => this.syncValue());
  }

  private syncValue() {
    if (!this.value) return;

    const placeholder = this.value.dataset.placeholder ?? "";
    const fileName = this.input?.files?.[0]?.name ?? "";
    const hasFile = fileName.length > 0;

    this.value.textContent = hasFile ? fileName : placeholder;
    this.value.classList.toggle(
      "contact-us-form__file-value--placeholder",
      !hasFile
    );
  }

  destroy() {
    this.input?.removeEventListener("change", this.handleChange);
    this.form?.removeEventListener("reset", this.handleReset);
    this.unregister();
  }
}

export default FileField;
