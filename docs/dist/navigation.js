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
import {html, LitElement} from "../_snowpack/pkg/lit.js";
import {customElement, state} from "../_snowpack/pkg/lit/decorators.js";
export let MyNavigation = class extends LitElement {
  constructor() {
    super(...arguments);
    this._active = false;
  }
  toggle_button() {
    if (this._active) {
      this._active = false;
    } else {
      this._active = true;
    }
  }
  render() {
    return html`<nav
      class="lg:text-white text-black font-bold m-auto bg-white lg:bg-transparent lg:absolute z-50 container py-4"
    >
      <div class="relative top-0 left-0 w-full">
        <div class="flex flex-wrap justify-between px-4">
          <div class="block w-32 md:w-48 lg:w-64">
            <a href="/">
              <img class="lg:block hidden" src="/dist/img/lpaw.svg" alt="LPA" />
              <img
                class="lg:hidden block  "
                src="/dist/img/lpa.svg"
                alt="LPA"
              />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button @click=${this.toggle_button}>
              <img
                class="w-8 ${this._active && "hidden"}"
                src="/dist/img/menu.svg"
                width="40"
                height="40"
              />
              <img
                class="w-8 ${!this._active && "hidden"}"
                src="/dist/img/close.svg"
                width="40"
                height="40"
              />
            </button>
          </div>
          <ul
            class="${!this._active && "hidden"} lg:flex w-full lg:w-auto text-right text-bold mt-5 lg:mt-0 border-t-2 lg:border-none"
          >
            <li
              class="block lg:inline-block self-center px-3 py-3 border-b-2 lg:border-none"
            >
              <a href="/about">About</a>
            </li>
            <li
              class="block lg:inline-block self-center px-3 py-3 border-b-2 lg:border-none"
            >
              <a>Services</a>
            </li>
            <li
              class="block lg:inline-block self-center px-3 py-3 border-b-2 lg:border-none"
            >
              <a>Showroom</a>
            </li>
            <li
              class="block lg:inline-block self-center px-3 py-3 border-b-2 lg:border-none"
            >
              <a>Contact</a>
            </li>
          </ul>

          <button
            class="${!this._active && "hidden"} lg:flex w-full lg:w-auto p-4 text-right font-bold self-center bg-blue-900 hover:bg-blue-500 text-white lg:rounded"
          >
            GRATIS ESTIMASI
          </button>
        </div>
      </div>
    </nav>`;
  }
  createRenderRoot() {
    return this;
  }
};
__decorate([
  state()
], MyNavigation.prototype, "_active", 2);
MyNavigation = __decorate([
  customElement("my-nav")
], MyNavigation);
