<template>
    <div class="px-5 mt-16 mx-auto">
      <div
        class="mt-3 overflow-hidden bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col gap-6">
          <div class="card">
            <div class="p-6">
              <h4
                class="card-title mb-4 text-slate-700 font-semibold font-Geologica"
              >
                Input Rekening Awal Partai Tingkat Kota/Kabupaten
              </h4>
              <div class="grid lg:grid-cols-2 gap-6">
                <InputSelectKota/>
                <div>
                  <label
                    for="norek"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >No. Rekening</label
                  >
                  <input
                    type="number"
                    id="norek"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    name="norek"
                  />
                </div>
                <div>
                  <label
                    for="bank"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Bank</label
                  >
                  <input
                    type="text"
                    id="norek"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    name="bank"
                  />
                </div>
                <div>
                  <label
                    for="amount"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Nominal</label
                  >
                  <input
                    type="number"
                    id="amount"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    name="amount"
                  />
                </div>
                <div>
                  <label
                    for="tanggal"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Tanggal</label
                  >
                  <input
                    type="date"
                    id="amount"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    name="tanggal"
                  />
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
      </div>
    </div>
  </template>
  
  <script setup>
  import InputSelectKota from "./InputSelectKota.vue";
  </script>
  
  <style lang="scss" scoped></style>
  