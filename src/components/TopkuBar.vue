<template>
  <div>
    <nav class="shadow-lg bg-gradient-to-r from-buruh to-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto p-2">
        <img src="../img/logo_buruh.png" class="w-16 h-auto" />
        <a class="flex-none text-xl mx-5 font-bold font-Geologica text-slate-900 dark:text-white" href="#">Partai
          Buruh</a>

        <button data-collapse-toggle="mega-menu-full" type="button"
          class="inline-flex items-center p-2 w-6 h-6 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div id="mega-menu-full"
          class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page">Pengaturan</a>
            </li>
            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown"
                class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                Data Donatur
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
            <li>
              <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown2"
                class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                Data Awal
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"><span
                  class="font-bold text-green-900">Login:</span><span class="font-semibold text-slate-700">
                  ID:{{ coID }} {{ coEmail }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="mega-menu-full-dropdown"
        class="hidden mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold font-Geologica">Kelompok/Komunitas</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Donatur dari kelompok, komunitas, dan/atau
                  yayasan.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold font-Geologica">Perusahaan</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Data donatur dari perusahaan atau badan
                  usaha.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold font-Geologica">Perorangan</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Data donatur dari perorangan.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold font-Geologica">Partai Lain</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Donatur jika dimungknkan dari partai lain</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="mega-menu-full-dropdown2"
        class="hidden mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold font-Geologica">Caleg DPR RI</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Calon Legislatif untuk DPR RI.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold font-Geologica">Caleg DPRD I</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Calon Anggota Legislatif DPRD Propinsi.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold font-Geologica">Caleg DPRD II</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Calon Anggota Legislatif DPRD
                  Kota/Kabupaten.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold font-Geologica">DPP</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Pengurus Partai Tingkat Pusat / Nasional</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">DPW</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Pengurus Partai Daerah Tingkat
                  Wilayah/Propinsi</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">DPC</div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Pengurus Partai Daerah Tingkat Kota /
                  Kabupaten.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";

export default {
  data() {
    return {
      coEmail: "",
      coID: "",
    };
  },
  setup() {
    const { cookies } = useCookies();

    return {
      cookies,
    };
  },

  methods: {
    FunctionCoookies() {
      this.coEmail = this.cookies.get("email");
      this.coID = this.cookies.get("id");
      console.log(this.cookies.keys());
    },
  },

  created() {
    this.FunctionCoookies();
  },
};
</script>

<style lang="scss" scoped></style>
