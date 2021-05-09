import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-footer")
export class MyFooter extends LitElement {
  render() {
    return html`<footer class="grid">
      <div class="bg-gray-100 w-full static sm:h-24"></div>
      <div class="col-span-full bg-blue-900 text-gray-200 pt-16 sm:pt-48">
        <div class="w-10/12 m-auto">
          <div class="pb-20 grid grid-cols-6 sm:grid-cols-12">
            <div class="col-span-6">
              <h3 class="text-lg">PT. Langgeng Prayadena Amini</h3>
              <p class="text-sm">
                PT. LPA adalah perusahaan manufaktur, pemasangan dan desain
                pintu dan jendela. Siap melayani dimanapun lokasi anda. Khusus
                wilayah Malang kami langsung datang!
              </p>
              <a class="mt-4 block">Baca seterusnya ...</a>
            </div>
            <div class="col-span-6 flex items-center justify-center">
              <div
                class="w-full flex items-center justify-items-center m-auto sm:float-right"
              >
                <img class="block w-full" src="/dist/img/lpaw.svg" alt="LPA" />
              </div>
            </div>
            <div class="col-span-full border-white border-b-[1px] mt-10"></div>
            <div class="col-span-full border-white border-b-[1px]">
              <div class="grid grid-cols-4 sm:grid-cols-12 col-span-full my-10">
                <div
                  class="col-span-4 flex flex-col items-center justify-center p-2"
                >
                  <a
                    href="tel:0341801296"
                    class="text-lg font-extrabold underline"
                    >(0341)801296</a
                  >
                  <a
                    href="tel:628123393111"
                    class="text-lg font-extrabold underline"
                    >(+62)8123393111</a
                  >
                  <p class="text-center my-4">
                    Kami melayani untuk seluruh wilayah Jawa.
                  </p>
                  <a
                    href="#"
                    class="bg-blue-600 my-4 py-2 mx-2 px-10 rounded text-white font-bold cursor-pointer"
                    >GRATIS ESTIMASI</a
                  >
                </div>
                <div
                  class="col-span-4 flex flex-col items-center justify-center my-4"
                >
                  <div
                    class="w-48 flex items-center justify-items-center flex-initial"
                  >
                    <img
                      class="block w-full"
                      src="/dist/img/lpaw.svg"
                      alt="LPA"
                    />
                  </div>
                  <p class="text-center">
                    Layanan Pintu dan Jendela uPVC terbaik.
                  </p>
                </div>
                <div
                  class="col-span-4 flex flex-col items-center p-2 text-center"
                >
                  <h4 class="font-extrabold text-lg">Servis & Jasa</h4>
                  <p class="my-4">Kreativitas tanpa batas.</p>
                  <a class="font-bold">Manufatur</a>
                  <a class="font-bold">Desain</a>
                  <a class="font-bold">Pemasangan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>`;
  }

  protected createRenderRoot() {
    return this;
  }
}
