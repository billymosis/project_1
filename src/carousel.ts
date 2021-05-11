import { css, html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";
import Glide from "@glidejs/glide";
import { glide } from "./mystyle";
@customElement("my-carousel")
export class MyCarousel extends LitElement {
  static styles = [
    glide,
    css`
      .glide__slides {
        margin: 0px;
        transform: translate3d(0, 0, 0) !important;
      }

      .glide__slide {
        position: absolute;
        top: 0;
        left: 0;
        order: 2;
        opacity: 0;
        transition: opacity 250ms ease-in-out;
      }

      .glide__slide.glide__slide--active {
        position: relative;
        order: 1;
        opacity: 1;
        z-index: 1;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
      @media (min-width: 640px) {
        img {
          height: 400px;
        }
      }
      @media (min-width: 768px) {
        img {
          height: 400px;
        }
      }
      @media (min-width: 1024px) {
        img {
          height: 600px;
        }
      }
      @media (min-width: 1280px) {
        img {
          height: 600px;
        }
      }
      @media (min-width: 1536px) {
        img {
          height: 600px;
        }
      }
    `,
  ];

  @query(".glide")
  _mantab!: any;

  sources = [
    "dist/img/jumbotron/1.jpg",
    "dist/img/jumbotron/2.jpg",
    "dist/img/jumbotron/3.jpg",
    "dist/img/jumbotron/4.jpg",
    "dist/img/jumbotron/5.jpg",
    "dist/img/jumbotron/6.jpg",
  ];

  firstUpdated() {
    const glide = new Glide(this._mantab, {
      type: "carousel",
      autoplay: 3000,
      gap: 0,
    });

    glide.mount();
  }

  render() {
    return html`
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            ${this.sources.map(
              (x) => html`<li class="glide__slide"><img src="${x}" /></li>`
            )}
          </ul>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            ${this.sources.map(
              (_, i) =>
                html`<button
                  class="glide__bullet"
                  data-glide-dir="=${i}"
                ></button>`
            )}
          </div>
        </div>
      </div>
    `;
  }
}
