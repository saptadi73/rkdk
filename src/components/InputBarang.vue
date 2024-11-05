<template>
    <div
      class="flex flex-col shadow-lg items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="flex mb-4 bg-gradient-to-r from-buruh to-orange-200 rounded-lg transition p-1"
      >
        <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
          <div
            class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-2 px-2 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active"
            id="segment-item-1"
            data-hs-tab="#segment-1"
            aria-controls="segment-1"
            role="tab"
          >
            <h1 class="font-semibold text-xl">Penginputan Barang</h1>
          </div>
        </nav>
      </div>
      <div
        class="w-full bg-slate-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white"
          >
            Masukan Nama Barang Beserta Satuan
          </h1>
          <div class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="barang"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nama Barang</label
              >
              <input
                type="text"
                name="barang"
                id="nama"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="uom"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Satuan Perunit</label
              >
              <select
                id="uom"
                class="form-select bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-3 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="kg">Kilogram(Kg)</option>
                <option value="m">Meter(M)</option>
                <option value="l">Liter(L)</option>
                <option value="bx">Box(Bx)</option>
                <option value="set">Set</option>
              </select>
            </div>
            <div>
              <label
                for="id-kpu"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Id Kpu</label
              >
              <input
                type="text"
                id="id_kpu"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              v-on:click="InputBarang"
              class="w-full bg-gradient-to-r from-buruh to-orange-300 hover:from-orange-700 hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Simpan Barang
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="modals"
      class="hidden relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!-- Background backdrop -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
      <!-- Modal panel -->
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <svg
                    class="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    class="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {{ Title }}
                  </h3>
                  <h4 class="text-sm font-semibold leading-6 text-gray-500">
                    {{ subTitle }}
                  </h4>
                  <div class="mt-2">
                    <p class="text-sm text-black">
                      {{ Description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <a
                href="/login"
                class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
              >
                login
              </a>
  
              <button
                id="tutupmodals"
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                @click="TutupModals"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";
  import { useCookies } from "vue3-cookies";
  
  export default {
    data() {
      return {
        formValue: "",
        getResponse: "",
        Title: "",
        subTitle: "",
        Description: "",
      };
    },
    setup() {
      const { cookies } = useCookies();
  
      return {
        cookies,
      };
    },
    methods: {
      async InputBarang() {
        this.formValue = {
          nama: document.getElementById("nama").value,
          uom: document.getElementById("uom").value,
          id_kpu: document.getElementById("id_kpu").value,
          id_registrasi: this.cookies.get("id"),
          email: this.cookies.get("email"),
        };
  
        // console.log(this.formValue);
        await axios
          .post(`http://localhost:8080/inputbarang`, this.formValue)
          .then((response) => {
            console.log(response);
          });
      },
    },
    // created() {
    //   this.InputBarang();
    // },
  };
  </script>
  
  <style lang="scss" scoped></style>
  