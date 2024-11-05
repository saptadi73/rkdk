<template>
    <div class="px-5 flex mt-16 mx-auto">
        <div
            class="flex bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600">
            <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
                <div class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active"
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
                        <div class="mt-10 grid lg:grid-cols-2 gap-6">
                            <div>
                                <label for="aktivitas"
                                    class="text-gray-800 text-sm font-medium block mb-2">Aktivitas</label>
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
                                        <option value="PenyebaranBahanLegislatif">
                                            Pembelian Kendaraan
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label for="kegiatan" class="text-gray-800 text-sm font-medium block mb-2">Kegiatan Kampanye
                                </label>
                                <input type="text" id="kegiatan" placeholder=""
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="tanggal_transaksi" class="text-gray-800 text-sm font-medium block mb-2">Tanggal
                                    Transaksi</label>
                                <input type="date" id="tanggal_transaksi"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="bukti_transaksi" class="text-gray-800 text-sm font-medium block mb-2">Bukti
                                    Transaksi</label>
                                <input type="text" id="bukti_transaksi" placeholder="Nomor Bukti Transaksi"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="Uraian" class="text-gray-800 text-sm font-medium block mb-2">Uraian</label>
                                <input type="text" id="Uraian" placeholder="Uraian Singkat Kegiatan"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup></script>
  
<style lang="scss" scoped></style>
  