<template>
    <div class="px-5 flex mt-16 mx-auto">
      <div
        class="flex bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
          
          <button
            type="button"
            class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300"
            id="segment-item-1"
            data-hs-tab="#segment-1"
            aria-controls="segment-1"
            role="tab"
          >
            Data Diri Donatur
          </button>
          <button
            type="button"
            class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text- font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300"
            id="segment-item-2"
            data-hs-tab="#segment-2"
            aria-controls="segment-2"
            role="tab"
          >
            Upload document
          </button>
        </nav>
      </div>
    </div>
    <div class="px-5 mt-3 mx-auto text-sm sm:text-xs">
      <div
        id="segment-1"
        class="hidden"
        role="tabpanel"
        aria-labelledby="segment-item-1"
      >
        <div class="flex flex-col gap-6">
          <div
            class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg"
          >
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-black dark:text-white">
                Pengisian Data Diri Donatur Perorangan
              </h3>
              <div class="mt-10 grid lg:grid-cols-2 gap-6">
                <div>
                  <label
                    for="nama"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Nama Donatur</label
                  >
                  <input
                    type="text"
                    id="nama"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="nik"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Nik</label
                  >
                  <input
                    type="number"
                    id="nik"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="alamat"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Alamat</label
                  >
                  <input
                    type="text"
                    id="alamat"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="tempat_lahir"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Tempat Lahir</label
                  >
                  <input
                    type="text"
                    id="tempat_lahir"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="tanggal_lahir"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Tanggal Lahir</label
                  >
                  <input
                    type="date"
                    id="tanggal_lahir"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="npwp"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >NPWP</label
                  >
                  <input
                    type="number"
                    id="npwp"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="situs"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Sosial Media</label
                  >
                  <input
                    type="text"
                    id="situs"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="nohp"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Situs</label
                  >
                  <input
                    type="number"
                    id="nohp"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="segment-2"
        class="hidden"
        role="tabpanel"
        aria-labelledby="segment-item-2"
      >
      <div class="px-2 mt-16 mx-auto">
        <div
          class="mt-3 overflow-hidden bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-5 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
        
          <div class="mt-10 grid lg:grid-cols-2 gap-6">
            <div>
              <label
                for="nama_dokumen"
                class="text-gray-800 text-sm font-medium block mb-2"
                >Nama Dokumen</label
              >
              <input
                type="text"
                id="nama_dokumen"
                name="nama_dokumen"
                class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
                >Upload file</label
              >
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                File tidak boleh lebih dari 2Mb
              </p>
            </div>
          </div>
          <div>
            <button
              class="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 w-44 hover:bg-green-950 text-white p-2 border border-1 rounded-xl mt-10 border-slate-900"
              @click="InputPerusahaan"
            >
              Kirim Data
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div id="modals" class="hidden relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <!-- Background backdrop -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <!-- Modal panel -->
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div
                                class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                    {{ Title }}
                                </h3>
                                <h4 class="text-sm font-semibold leading-6 text-gray-500">{{ subTitle }}</h4>
                                <div class="mt-2">
                                    <p class="text-sm text-black">
                                        {{Description}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <a href="/login"
                            class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">
                            login
                        </a>

                        <button id="tutupmodals" type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            @click="TutupModals">
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
            formValues: '',
            Title: '',
            subTitle: '',
            Description: '',
        }
    },
    setup() {
        const { cookies } = useCookies();
        return{
            cookies,
        }
    },
    methods: {
        InputPerusahaan(){
            alert("hallo");
        },
    }
}
</script>
  
  <style lang="scss" scoped></style>
  