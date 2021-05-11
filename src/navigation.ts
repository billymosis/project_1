import { html, LitElement } from "lit";
import { customElement, query, state } from "lit/decorators.js";

@customElement("my-nav")
export class MyNavigation extends LitElement {
  @state()
  protected _active = false;

  toggle_button() {
    if (this._active) {
      this._active = false;
    } else {
      this._active = true;
    }
  }

  @query("nav")
  oke!: HTMLElement;

  @state()
  condition = false;

  @state()
  val = 0;

  isMobile() {
    console.log(window.matchMedia("(max-width: 768px)").matches);
    return (this.condition = window.matchMedia("(max-width: 768px)").matches);
  }
  firstUpdated() {
    window.onscroll = () => {
      let winScroll = document.documentElement.scrollTop;
      let maxPageY =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let ScrollValue = (winScroll / maxPageY) * 100;
      this.val = ScrollValue;
    };
    this.isMobile();
  }

  render() {
    return html`<nav
      @click=${() => {
        console.log(this.val > 10 || this.condition);
        console.log(this.val > 10);
        console.log(this.condition);
      }}
      class="m-auto fixed block z-50 container py-4 sm:text-xlbg-white font-bold ${this
        .val > 10
        ? "bg-white text-black shadow-md"
        : "bg-white text-black sm:bg-transparent sm:text-white"}"
    >
      <div class="relative top-0 left-0 w-full">
        <div class="flex flex-wrap justify-between px-4">
          <div class="block w-32 md:w-48 lg:w-64">
            <a href="/">
              ${this.val > 10 || this.condition
                ? html`<img class="" src="/dist/img/lpa.svg" alt="LPA" />`
                : html`<img class="" src="/dist/img/lpaw.svg" alt="LPA" />`}
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
            class="${!this._active &&
            "hidden"}  lg:flex w-full lg:w-auto text-right mt-5 lg:mt-0 border-t-2 lg:border-none "
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

          <a
            href="https://wa.me/628123393111?text=Halo saya ingin bertanya"
            class="${!this._active &&
            "hidden"} lg:flex w-full lg:w-auto p-4 text-right font-bold self-center bg-blue-900 hover:bg-blue-500 text-white lg:rounded"
          >
            GRATIS ESTIMASI
          </a>
        </div>
      </div>
    </nav>`;
  }

  protected createRenderRoot() {
    return this;
  }
}
