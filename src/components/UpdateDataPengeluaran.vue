<template>
  <div class="px-5 flex mt-16 mx-auto">
    <div
      class="flex bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600">
      <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
        <div
          class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active"
          id="segment-item-1" data-hs-tab="#segment-1" aria-controls="segment-1" role="tab">
          Pengeluaran
        </div>
      </nav>
    </div>
  </div>
  <div class="px-5 mt-3 mx-auto text-sm sm:text-xs">
    <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-black dark:text-white">
              Tambah Pengeluaran Aktivitas
            </h3>

            <div>
              <label for="aktivitas" class="text-gray-800 text-sm font-medium block mb-2">Aktivitas</label>
              <div class="flex">
                <select id="aktivitas"
                  class="form-select py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="RapatUmum">Rapat Umum</option>
                  <option value="PertemuanTerbatas">
                    Pertemuan Terbatas
                  </option>
                  <option value="PertemuanTatapMuka">
                    Pertemuan Tatap Muka
                  </option>
                  <option value="PenyebaranBahan">
                    Penyebaran Bahan Partai Kampanye Partai Politik Kepada
                    Umum
                  </option>
                  <option value="PenyebaranBahanLegislatif">
                    Penyebaran Bahan Partai Kampanye Calon Anggota Legislatif
                    Kepada Umum Umum
                  </option>
                  <option value="PembelianKendaraan">
                    Pembelian Kendaraan
                  </option>
                  <option value="PembelianPeralatan">
                    Pembelian Peralatan
                  </option>
                  <option value="PembayaranHutang">
                    Pembayaran Utang Pembelian Barang
                  </option>
                  <option value="Administrasi">Administrasi Bank</option>
                  <option value="AlatPeraga">
                    Pemasangan Alat Peraga Kampanye Partai Politik Kepada Umum
                  </option>
                  <option value="AlatPeragaKampanye">
                    Pemasangan Alat Peraga Kampanye Calon Anggota Legislatif
                    Kepada Umum
                  </option>
                  <option value="PembuatanDesain">
                    Pembuatan Bahan/Desaign dan Atau Alat Peraga Kampanye
                  </option>
                  <option value="PengeluaranLain">Pengeluaran Lain</option>
                  <option value="KegiatanLain">
                    Kegiatan Lain Yang Tidak Melanggar Larangan Kampanye dan
                    Peraturab Perundang Undangan
                  </option>
                  <option value="Prod">
                    Pembuatan/Prod Iklan di Media Massa Elektronik, dan Media
                    Dalam Jaringan
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label for="kegiatan" class="text-gray-800 text-sm font-medium block mb-2">Kegiatan Kampanye
              </label>
              <input type="text" id="kegiatan" placeholder=""
                class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                required />
            </div>
            <div>
              <label for="tanggal" class="text-gray-800 text-sm font-medium block mb-2">Tanggal Transaksi</label>
              <input type="date" id="tanggal"
                class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                required />
            </div>
            <div>
              <label for="bukti" class="text-gray-800 text-sm font-medium block mb-2">Bukti Transaksi</label>
              <input type="text" id="bukti" placeholder="Nomor Bukti Transaksi"
                class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                required />
            </div>
            <div>
              <label for="uraian" class="text-gray-800 text-sm font-medium block mb-2">Uraian</label>
              <input type="text" id="uraian" placeholder="Uraian Singkat Kegiatan"
                class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                required />
            </div>
            <div>
              <label for="nominal" class="text-gray-800 text-sm font-medium block mb-2">Nominal</label>
              <input type="number" id="nominal" placeholder=""
                class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                required />
            </div>
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
      formValue: '',
      getResponse: '',
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

  }
}
</script>
  
<style lang="scss" scoped></style>
  