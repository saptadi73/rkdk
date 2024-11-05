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
                id="barang"
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
  
            <button
              v-on:click=""
              class="w-full bg-gradient-to-r from-buruh to-orange-300 hover:from-orange-700 hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Simpan Barang
            </button>
          </div>
        </div>
      </div>
    </div>
  
    <!-- <div class="px-5 flex mt-16 mx-auto justify-center">
      <div
        class="flex bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
          <div
            class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-4 px-56 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active"
            id="segment-item-1"
            data-hs-tab="#segment-1"
            aria-controls="segment-1"
            role="tab"
          >
            <h1 class="font-semibold text-xl">Input Barang</h1>
          </div>
        </nav>
      </div>
    </div>
    <div class="px-52 mt-3 mx-auto text-sm sm:text-xs">
      <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
        <div class="flex flex-col gap-6">
          <div
            class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg"
          >
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-black dark:text-white">
                Pengisian Daerah Pemilihan
              </h3>
              <div class="mt-10 block">
                <div>
                  <label
                    for="propinsi"
                    class="text-gray-800 text-sm font-medium mb-2"
                    >Pilih Propinsi</label
                  >
                  <div class="flex mb-8">
                    <input
                      @focus="PreviewPropinsi"
                      @change="PreviewPropinsi"
                      id="propinsi"
                      name="propinsi"
                      class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <svg
                      @click="UlangListPropinsi"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  <div
                    id="listPropinsi"
                    name="listPropinsi"
                    v-if="mapBoxSearchResult"
                    class="w-[300px] h-[200px] overflow-scroll"
                  >
                    <p
                      @click="IsiInput(resultKu.nama, resultKu.id)"
                      v-for="resultKu in mapBoxSearchResult.data"
                      :key="resultKu.id"
                      class="p-2 text-black font-semibold cursor-pointer hover:text-slate-500 bg-gradient-to-r from-yellow-200 to-white"
                    >
                      {{ resultKu.nama }}
                    </p>
                  </div>
                  <input
                    type="hidden"
                    id="kode_propinsi"
                    name="kode_propinsi"
                    class="form-input py-3 px-4 w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="dapil"
                    class="text-gray-800 text-sm font-medium mb-2"
                    >Nomor Dapil</label
                  >
                  <input
                    type="number"
                    id="dapil"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  