import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  @property()
  name = "Somebody";

  render() {
    return html` <div class="bg-pink-900">
      <h2 class="text-black bg-red-700">RESPOasdNSIVE</h2>
      <h1>mantab</h1>
      <p>Hello, ${this.name}!</p>
    </div>`;
  }

  protected createRenderRoot() {
    return this;
  }
}
