import { css, html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";
import Glide from "@glidejs/glide";
import { glide } from "./mystyle";
import { oye } from "./dataservice";

interface data {
  src: string;
  title: string;
  description: string;
  link: string;
}

@customElement("my-services")
export class MyServices extends LitElement {
  static styles = [
    glide,
    css`
      .card {
        width: 100%; /* half-width */
        height: 100%;
        padding: 10px 20px;
        margin-bottom: 10px;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .container {
        margin: auto;
        text-align: center;
      }
      img {
        object-fit: cover;
        width: 100%;
        box-shadow: 5px 5px  5px grey;
      }

      h4 {
        font-size: x-large;
        margin: 0;
      }
      .glide__bullets{
        bottom: 0.75em;
      }
    `,
  ];

  @query(".glide")
  _mantab!: any;

  dataku: data[] = oye;

  firstUpdated() {
    const glide = new Glide(this._mantab, {
      type: "carousel",
      perView: this.dataku.length,
      breakpoints: {
        768: {
          perView: 1,
        },
      },
    });

    glide.mount();
  }

  render() {
    return html`
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            ${this.dataku.map(
              (x) => html` <li class="glide__slide">
                <div class="card">
                  <img src="${x.src}" alt="Avatar" />
                  <div class="container">
                    <h4>
                      <b><strong>${x.title}</strong></b>
                    </h4>
                    <p>${x.description}</p>
                  </div>
                </div>
              </li>`
            )}
          </ul>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            ${this.dataku.map(
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
