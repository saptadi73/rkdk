<template>
  <div class="px-5 flex mt-16 mx-auto">
    <div
      class="flex bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
        <button
          type="button"
          class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active"
          id="segment-item-1"
          data-hs-tab="#segment-1"
          aria-controls="segment-1"
          role="tab"
        >
          Pilihan Wilayah
        </button>
        <button
          type="button"
          class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300"
          id="segment-item-2"
          data-hs-tab="#segment-2"
          aria-controls="segment-2"
          role="tab"
        >
          Data Diri Caleg Propinsi
        </button>
        <button
          type="button"
          class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text- font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300"
          id="segment-item-3"
          data-hs-tab="#segment-3"
          aria-controls="segment-3"
          role="tab"
        >
          Upload document
        </button>
      </nav>
    </div>
  </div>
  <div class="px-5 mt-3 mx-auto text-sm sm:text-xs">
    <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
      <div class="flex flex-col gap-6">
        <div
          class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg"
        >
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-black dark:text-white">
              Pengisian Daerah Pemilihan
            </h3>
            <div class="mt-10 grid lg:grid-cols-2 gap-6">
              <InputSelectCalegPropinsi></InputSelectCalegPropinsi>

              <div>
                <label
                  for="dapil"
                  class="text-gray-800 text-sm font-medium block mb-2"
                  >Nomor Dapil</label
                >
                <input
                  type="number"
                  id="dapil"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  for="urut"
                  class="text-gray-800 text-sm font-medium block mb-2"
                  >Nomor Urut</label
                >
                <input
                  type="number"
                  id="urut"
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
      <div class="flex flex-col gap-6">
        <div
          class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg"
        >
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-black dark:text-white">
              Pengisian Data Diri Caleg Propinsi
            </h3>
            <div class="mt-10 grid lg:grid-cols-2 gap-6">
              <div>
                <label
                  for="nama"
                  class="text-gray-800 text-sm font-medium block mb-2"
                  >Nama Caleg</label
                >
                <input
                  type="text"
                  id="nama"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  for="nohp"
                  class="text-gray-800 text-sm font-medium block mb-2"
                  >Kontak HP/WA Caleg</label
                >
                <input
                  type="number"
                  id="nohp"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  for="alamat"
                  class="text-gray-800 text-sm font-medium block mb-2"
                  >Alamat Caleg</label
                >
                <input
                  type="text"
                  id="alamat"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  for="nik"
                  class="text-gray-800 text-sm font-medium block mb-2"
                  >NIK</label
                >
                <input
                  type="number"
                  id="nik"
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
                  type="text"
                  id="npwp"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  for="situs"
                  class="text-gray-800 text-sm font-medium block mb-2"
                  >Situs Resmi/Sosial Media</label
                >
                <input
                  type="text"
                  id="situs"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="segment-3"
      class="hidden"
      role="tabpanel"
      aria-labelledby="segment-item-3"
    >
      <div class="px-5 mt-16 mx-auto">
        <div
          class="mt-3 overflow-hidden bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600"
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
            >
              Kirim Data
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputSelectCalegPropinsi from "./InputSelectCalegPropinsi.vue";
</script>

<style lang="scss" scoped></style>
