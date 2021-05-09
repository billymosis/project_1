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
import {css, html, LitElement} from "../_snowpack/pkg/lit.js";
import {customElement, query} from "../_snowpack/pkg/lit/decorators.js";
import Glide from "../_snowpack/pkg/@glidejs/glide.js";
export let MyCarousel = class extends LitElement {
  constructor() {
    super(...arguments);
    this.sources = [
      "dist/img/1.jpg",
      "dist/img/2.jpg",
      "dist/img/3.jpg",
      "dist/img/1.jpg",
      "dist/img/2.jpg",
      "dist/img/3.jpg"
    ];
  }
  firstUpdated() {
    const glide = new Glide(this._mantab, {
      type: "carousel",
      autoplay: 3e3,
      gap: 0
    });
    glide.mount();
  }
  render() {
    return html`
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            ${this.sources.map((x) => html`<li class="glide__slide"><img src="${x}" /></li>`)}
          </ul>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            ${this.sources.map((_, i) => html`<button
                  class="glide__bullet"
                  data-glide-dir="=${i}"
                ></button>`)}
          </div>
        </div>
      </div>
    `;
  }
};
MyCarousel.styles = [
  css`
      .glide {
        position: relative;
        width: 100%;
        box-sizing: border-box;
      }
      .glide * {
        box-sizing: inherit;
      }
      .glide__track {
        overflow: hidden;
      }
      .glide__slides {
        background-color: black;
        position: relative;
        width: 100%;
        list-style: none;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        touch-action: pan-Y;
        overflow: hidden;
        padding: 0;
        white-space: nowrap;
        display: flex;
        flex-wrap: nowrap;
        will-change: transform;
      }
      .glide__slides--dragging {
        user-select: none;
      }
      .glide__slide {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        white-space: normal;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
      }
      .glide__slide a {
        user-select: none;
        -webkit-user-drag: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }
      .glide__arrows {
        -webkit-touch-callout: none;
        user-select: none;
      }
      .glide__bullets {
        -webkit-touch-callout: none;
        user-select: none;
      }
      .glide--rtl {
        direction: rtl;
      }

      .glide__arrow {
        position: absolute;
        display: block;
        top: 50%;
        z-index: 2;
        color: white;
        text-transform: uppercase;
        padding: 9px 12px;
        background-color: transparent;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 4px;
        box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
        text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);
        opacity: 1;
        cursor: pointer;
        transition: opacity 150ms ease, border 300ms ease-in-out;
        transform: translateY(-50%);
        line-height: 1;
      }
      .glide__arrow:focus {
        outline: none;
      }
      .glide__arrow:hover {
        border-color: white;
      }
      .glide__arrow--left {
        left: 2em;
      }
      .glide__arrow--right {
        right: 2em;
      }
      .glide__arrow--disabled {
        opacity: 0.33;
      }

      .glide__bullets {
        position: absolute;
        z-index: 2;
        bottom: 2em;
        left: 50%;
        display: inline-flex;
        list-style: none;
        transform: translateX(-50%);
      }

      .glide__bullet {
        background-color: rgba(255, 255, 255, 0.5);
        width: 9px;
        height: 9px;
        padding: 0;
        border-radius: 50%;
        border: 2px solid transparent;
        transition: all 300ms ease-in-out;
        cursor: pointer;
        line-height: 0;
        box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
        margin: 0 0.25em;
      }
      .glide__bullet:focus {
        outline: none;
      }
      .glide__bullet:hover,
      .glide__bullet:focus {
        border: 2px solid white;
        background-color: rgba(255, 255, 255, 0.5);
      }
      .glide__bullet--active {
        background-color: white;
      }

      .glide--swipeable {
        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;
      }

      .glide--dragging {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
      }
    `,
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

      .glide__slide.glide__slide--active {
        position: relative;
        order: 1;
        opacity: 1;
        z-index: 1;
      }
    `
];
__decorate([
  query(".glide")
], MyCarousel.prototype, "_mantab", 2);
MyCarousel = __decorate([
  customElement("my-carousel")
], MyCarousel);
