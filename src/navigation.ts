import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

@customElement('my-nav')
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

  @query('nav')
  oke!: HTMLElement;

  @state()
  condition = false;

  @state()
  val = 0;

  isMobile() {
    return (this.condition = window.matchMedia('(max-width: 768px)').matches);
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
    return html`
      <nav
        class="px-4 lg:px-8 w-full m-auto fixed block z-50 py-4 sm:text-xl bg-white font-bold ${this
        .val > 10
        ? 'bg-white text-black shadow-md'
        : 'bg-white text-black lg:bg-transparent sm:text-white'}"
      >
        <div class="relative top-0 left-0 w-full">
          <div class="flex lg:hidden justify-between items-center">
            <div class="block w-32 md:w-48 lg:w-64">
              <a href="/">
        <img class="" src="/dist/img/lpa.svg" alt="LPA" />
              </a>
            </div>
            <div class="flex lg:hidden">
            <a
              href="https://wa.me/628123393111?text=Halo saya ingin bertanya"
              class="bg-blue-900 hover:bg-blue-500 text-white p-2 nowrap rounded"
            >
              GRATIS ESTIMASI
            </a>
            </div>
          </div>
          <div class="hidden lg:flex justify-between items-center">
            <div class="block w-32 md:w-48 lg:w-64">
              <a href="/">
                  <img class="" src="/dist/img/lpa.svg" alt="LPA" />
              </a>
              </div>
            <a
              href="https://wa.me/628123393111?text=Halo saya ingin bertanya"
              class="${!this._active &&
      'hidden'} lg:flex w-full lg:w-auto p-4 m-4 text-right font-bold self-center bg-blue-900 hover:bg-blue-500 text-white lg:rounded"
            >
              GRATIS ESTIMASI
            </a>
          </div>
        </div>
      </nav>
    `;
  }

  protected createRenderRoot() {
    return this;
  }
}
