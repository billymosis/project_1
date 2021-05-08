var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {html, css, LitElement} from "../_snowpack/pkg/lit.js";
import {customElement, property} from "../_snowpack/pkg/lit/decorators.js";
export let SimpleGreeting = class extends LitElement {
  constructor() {
    super(...arguments);
    this.name = "Somebody";
  }
  render() {
    return html` <div class="bg-pink-900">
      <h2 class="text-black bg-red-700">RESPOasdNSIVE</h2>
      <h1>mantab</h1>
      <p>Hello, ${this.name}!</p>
    </div>`;
  }
  createRenderRoot() {
    return this;
  }
};
SimpleGreeting.styles = css`
    p {
      color: blue;
    }
  `;
__decorate([
  property()
], SimpleGreeting.prototype, "name", 2);
SimpleGreeting = __decorate([
  customElement("simple-greeting")
], SimpleGreeting);
