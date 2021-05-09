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
import {customElement} from "../_snowpack/pkg/lit/decorators.js";
export let MyContent = class extends LitElement {
  render() {
    return html` <article>
      <div class="grid-cols-12 grid col-span-full bg-white">
        <div
          class="sm:col-start-2 sm:col-span-4 block bg-white col-span-full prose sm:py-20 py-4 px-4"
        >
          <h1 class="uppercase">
            Kami Adalah Spesialis Pembuatan dan Pemasangan Pintu dan Jendela
            Rumah Anda!
          </h1>
          <p>
            <strong>PT. Langgeng Prayadena Amini</strong> adalah perusahan
            manufaktur dan pemasangan untuk pintu dan jendela hunian anda.
          </p>
          <p>
            Kami menawarkan produk dan jasa yang berkualitas tinggi dan memenuhi
            ekspetasi konsumer. Team kami dipilih dari orang-orang yang
            berpengalaman dalam mendesain, membuat dan memasang pintu dan
            jendela.
          </p>
          <p>
            Produk utama kami adalah Pintu dan Jendela berbahan material dasar
            UPVC. UPVC menggunakan material yang <strong>mudah</strong> untuk
            dirawat, dapat didesain dengan <strong>fleksibel </strong>,
            ketahanan material <strong>jangka panjang</strong> dan
            <strong>insulasi</strong> terhadap suhu dan suara yang terbaik.
          </p>
          <p>
            Fokus kami nomor 1 adalah Kualitas & Kenyamanan Rumah Anda. Kami
            akan berikan profesionalitas dan standar industri yang terbaik untuk
            berpartner dengan anda. Sampaikan kebutuhan dan keinginan anda kami
            akan berikan bimbingan dan saran untuk memenuhi kepuasan anda.
          </p>
        </div>
        <div
          class="sm:col-start-7 sm:col-span-6 bg-blue-900 col-span-full grid grid-cols-12 text-white pb-16 sm:text-left text-center"
        >
          <div
            class="sm:col-start-3 sm:col-span-5 col-span-full mx-2 py-10 sm:py-20"
          >
            <div class="border-white border-b-[1px] mb-6 block">
              <h6 class="text-2xl font-bold">Segera Kontak!</h6>
              <div class="inline-block w-full mt-10">
                <img
                  class="w-8 mr-4 inline"
                  src="/dist/img/telephone.svg"
                  alt="telephone"
                />
                <a
                  class="inline text-xl font-bold my-4 underline"
                  href="tel:0341801296"
                  >(0341)801296</a
                >
              </div>
              <div class="inline-block w-full mt-10">
                <a
                  href="https://wa.me/628123393111?text=Halo saya ingin bertanya"
                >
                  <img
                    class="w-8 inline"
                    src="/dist/img/whatsapp.svg"
                    alt="whatsapp"
                  />
                </a>
                <a
                  class="inline text-lg font-bold my-4 underline"
                  href="tel:628123393111"
                  >(+62)8123393111</a
                >
              </div>
              <p class="block mt-10">
                Kami melayani Seluruh Wilaya Jawa. Malang, Surabaya, Jogja,
                Solo, Semarang dan sekitarnya.
              </p>

              <a class="text-xl font-extrabold my-4 block">email@host.com</a>
            </div>
            <div class="border-white border-b-[1px] pb-6 block">
              <h6 class="text-xl font-extrabold mb-2">WORKSHOP & SHOWROOM</h6>
              <h3 class="text-lg font-bold">JL. RAYA KEPUH NOMOR 3</h3>
              <p>Untuk konsultasi dapat langsung datang atau dengan janji</p>
            </div>
            <div class="border-white border-b-[1px] py-6">
              <h6 class="text-lg font-bold">WAKTU OPERASI</h6>
              <ul>
                <li>Senin: 9.00 – 16.00</li>
                <li>Selasa: 9.00 – 16.00</li>
                <li>Rabu: 9.00 – 16.00</li>
                <li>Kamis: 9.00 – 16.00</li>
                <li>Jumat: 9.00 – 16.00</li>
                <li>Sabtu: 9.00 – 16.00</li>
                <li>Tutup hari minggu dan libur nasional</li>
              </ul>
            </div>
            <div>
              <div class="border-white border-b-[1px] py-4">
                <h6 class="text-xl font-bold">Sosial Media</h6>
                <div class="py-2">
                  <div class="inline-block w-10 mx-2">
                    <img src="/dist/img/instagram.svg" alt="instagram" />
                  </div>
                  <div class="inline-block w-10 mx-2">
                    <img src="/dist/img/facebook.svg" alt="facebook" />
                  </div>
                  <div class="inline-block w-10 mx-2">
                    <img src="/dist/img/email.svg" alt="email" />
                  </div>
                </div>
              </div>
              <h6 class="my-8 text-center font-bold">Divisi Marketing</h6>
              <div class="w-full flex items-center justify-items-center m-auto">
                <img
                  class="block w-full max-h-20"
                  src="/dist/img/lpaw.svg"
                  alt="LPA"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white relative">
        <div
          class="h-28 text-white text-2xl font-extrabold w-full bg-blue-600 flex sm:absolute sm:right-0 sm:-top-12 sm:w-11/12"
        >
          <h1 class="m-auto">SERVIS DAN JASA</h1>
        </div>
      </div>
      <div class="col-span-full bg-gray-200 sm:pt-20">
        <div class="p-20 h-64">
          <span class="flex items-center justify-center">Carousel</span>
        </div>
      </div>
      <div class="col-span-full bg-gray-100 pb-64">
        <div class="p-20 h-64">
          <div class="flex flex-col items-center justify-center">
            <h2 class="font-extrabold uppercase text-4xl text-gray-800">
              Award Winning, Licensed & Accredited
            </h2>
            <p class="text-xs text-gray-500">
              Recognized with an award from TrustedPros and accredited by the
              Better Business Bureau. Quality you can trust.
            </p>
            <p class="text-xs text-gray-500">
              *Signature Contracting possesses valid city licensing and is able
              to pull permits to complete work as required.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 relative">
        <div
          class="bg-blue-600 sm:float-left sm:absolute m-auto sm:w-10/12 py-4"
        >
          <div class="flex flex-col items-center justify-center m-auto w-8/12">
            <p class="text-center text-white uppercase font-bold">
              “Rizky, Ambon dan seluruh team adalah pekerja yang profesional
              terus berkomunikasi dengan kami ketika proyek berjalan. Mereka
              berikan waktu, informasi dan saran untuk hasil produk yang lebih
              baik.”
            </p>
            <p class="text-gray-300">Sugeng & Retno</p>
          </div>
        </div>
      </div>
    </article>`;
  }
  createRenderRoot() {
    return this;
  }
};
MyContent = __decorate([
  customElement("my-content")
], MyContent);
