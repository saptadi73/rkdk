<template>
    <div class="px-5 flex mt-16 mx-auto">
        <div
            class="flex bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600">
            <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
                <button type="button"
                    class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active"
                    id="segment-item-1" data-hs-tab="#segment-1" aria-controls="segment-1" role="tab">
                    Pilihan Wilayah
                </button>
                <button type="button"
                    class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300"
                    id="segment-item-2" data-hs-tab="#segment-2" aria-controls="segment-2" role="tab">
                    Data Diri Caleg DPR RI
                </button>
            </nav>
        </div>
    </div>
    <div class="px-5 mt-3 mx-auto text-sm sm:text-xs">
        <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
            <div class="flex flex-col gap-6">
                <div class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg">
                    <div class="p-4 md:p-5">
                        <h3 class="text-lg font-bold text-black dark:text-white">
                            Pengisian Daerah Pemilihan
                        </h3>
                        <div class="mt-10 grid lg:grid-cols-2 gap-6">
                            <div>
                                <label for="propinsi">Pilih Propinsi</label>
                                <div class="flex">
                                    <input @focus="PreviewPropinsi" @change="PreviewPropinsi" id="propinsi" name="propinsi"
                                        class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                                    <svg @click="UlangListPropinsi" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </div>
                                <div id="listPropinsi" name="listPropinsi" v-if="mapBoxSearchResult"
                                    class="w-[300px] h-[200px] overflow-scroll">
                                    <p @click="IsiInput(resultKu.nama, resultKu.id)"
                                        v-for="resultKu in mapBoxSearchResult.data" :key="resultKu.id"
                                        class="p-2 text-black font-semibold cursor-pointer hover:text-slate-500 bg-gradient-to-r from-yellow-200 to-white">
                                        {{ resultKu.nama }}
                                    </p>
                                </div>
                                <input type="hidden" id="kode_propinsi" name="kode_propinsi"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="dapil" class="text-gray-800 text-sm font-medium block mb-2">Nomor Dapil</label>
                                <input type="number" id="dapil"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="urut_caleg" class="text-gray-800 text-sm font-medium block mb-2">Nomor
                                    Urut</label>
                                <input type="number" id="urut_caleg"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="segment-2" class="hidden" role="tabpanel" aria-labelledby="segment-item-2">
            <!--modals-->
            <div id="modals" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
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
                                        <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                            Login Successful
                                        </h3>
                                        <div class="mt-2">
                                            <p class="text-sm text-black">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <a href="/test"
                                    class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">
                                    Go Back to Dashboard
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

            <div class="flex flex-col gap-6 mb-20">
                <div class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg">
                    <div class="p-4 md:p-5">
                        <h3 class="text-lg font-bold text-black dark:text-white">
                            Pengisian Data Diri Caleg DPR RI
                        </h3>
                        <div class="mt-10 grid lg:grid-cols-2 gap-6">
                            <div>
                                <label for="nama" class="text-gray-800 text-sm font-medium block mb-2">Nama Caleg</label>
                                <input type="text" id="nama"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="nohp" class="text-gray-800 text-sm font-medium block mb-2">Kontak HP/WA
                                    Caleg</label>
                                <input type="number" id="nohp"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="alamat" class="text-gray-800 text-sm font-medium block mb-2">Alamat Caleg DPR
                                    RI</label>
                                <input type="text" id="alamat"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="nik" class="text-gray-800 text-sm font-medium block mb-2">NIK</label>
                                <input type="number" id="nik"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="pendidikan"
                                    class="text-gray-800 text-sm font-medium block mb-2">Pendidikan</label>
                                <select id="pendidikan"
                                    class="form-select py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500">
                                    <option value="S3">S3</option>
                                    <option value="S2">S2</option>
                                    <option value="S1">S1</option>
                                    <option value="D3">D3</option>
                                    <option value="SLTA">SLTA</option>
                                    <option value="SLTP">SLTP</option>
                                </select>
                            </div>
                            <div>
                                <label for="jeniskelamin" class="text-gray-800 text-sm font-medium block mb-2">Jenis
                                    Kelamin</label>
                                <select id="jeniskelamin"
                                    class="form-select py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500">
                                    <option value="L">Laki-laki</option>
                                    <option value="P">Perempuan</option>
                                </select>
                            </div>
                            <div>
                                <label for="tempat_lahir" class="text-gray-800 text-sm font-medium block mb-2">Tempat
                                    Lahir</label>
                                <input type="text" id="tempat_lahir"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="tanggal_lahir" class="text-gray-800 text-sm font-medium block mb-2">Tanggal
                                    Lahir</label>
                                <input type="date" id="tanggal_lahir"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label for="npwp" class="text-gray-800 text-sm font-medium block mb-2">NPWP</label>
                                <input type="text" id="npwp"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="pekerjaan"
                                    class="text-gray-800 text-sm font-medium block mb-2">Pekerjaan</label>
                                <input type="text" id="pekerjaan"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>

                            <div>
                                <button id="simpan" name="simpan"
                                    class="font-semibold text-sm mt-4 rounded-lg bg-yellow-300 p-4 hover:bg-yellow-500"
                                    v-on:click="SubmitDataCalegPusat">
                                    simpan data
                                </button>
                            </div>
                            <div>
                                <button id="munculmodals" name="munculmodals"
                                    class="font-semibold text-sm mt-4 rounded-lg bg-yellow-300 p-4 hover:bg-yellow-500"
                                    @click="MunculModals">
                                    Munculkan Modals
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
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const searchQuery = ref("");
const queryTimeOut = ref(null);
const mapBoxAPIkey = "https://wilayah.rimang.id/propinsi";
const mapBoxSearchResult = ref(null);
var searchError = false;
const mapBoxSearchResultKota = ref(null);

const router = useRouter();

const PreviewPropinsi = () => {
    clearTimeout(queryTimeOut.value);
    queryTimeOut.value = setTimeout(async () => {
        try {
            const ResultPropinsi = await axios.get(
                `https://wilayah.rimang.id/propinsi`
            );
            mapBoxSearchResult.value = ResultPropinsi.data;

            console.log(mapBoxSearchResult.value);
        } catch (error) {
            console.log(error);
            searchError = true;
        }

        return;
    }, 300);
};

const IsiInput = (searchQuery, searchID) => {
    document.getElementById("propinsi").value = searchQuery;
    document.getElementById("kode_propinsi").value = searchID;
    document.getElementById("listPropinsi").classList.add("hidden");
};

const UlangListPropinsi = () => {
    let listPropinsi = document.getElementById("listPropinsi");
    let listKota = document.getElementById("listKota");
    let Kota = document.getElementById("kota");
    let Propinsi = document.getElementById("propinsi");
    Propinsi.value = "Ulangi Pilih Propinsi";

    if (listPropinsi.classList.contains("hidden")) {
        listPropinsi.classList.remove("hidden");
        listKota.classList.remove("hidden");
    } else {
        listPropinsi.classList.add("hidden");
        listKota.classList.add("hidden");
    }

    Kota.value = "Ulangi pilih kota/kab";
};

const SubmitDataCalegPusat = () => {
    const m_propinsi = document.getElementById("propinsi").value;
    const m_kode_propinsi = document.getElementById("kode_propinsi").value;

    const m_tanggal_lahir = document.getElementById("tanggal_lahir").value;
    const m_dapil = document.getElementById("dapil").value;
    const m_urut = document.getElementById("urut").value;
    const m_nama = document.getElementById("nama").value;
    const m_nik = document.getElementById("nik").value;
    const m_pendidikan = document.getElementById("pendidikan").value;
    const m_jeniskelamin = document.getElementById("jeniskelamin").value;
    const m_alamat = document.getElementById("alamat").value;
    const m_tempat_lahir = document.getElementById("tempat_lahir").value;
    const m_nohp = document.getElementById("nohp").value;
    const m_npwp = document.getElementById("npwp").value;
    const m_pekerjaan = document.getElementById("pekerjaan").value;

    const formValues = {
        propinsi: m_propinsi,
        kode_propinsi: m_kode_propinsi,
        id_registrasi: cookies.get("id"),
        email: cookies.get("email"),
        tanggal_lahir: m_tanggal_lahir,
        tempat_lahir: m_tempat_lahir,
        dapil: m_dapil,
        urut: m_urut,
        nama: m_nama,
        nik: m_nik,
        pendidikan: m_pendidikan,
        jeniskelamin: m_jeniskelamin,
        alamat: m_alamat,
        nohp: m_nohp,
        npwp: m_npwp,
        pekerjaan: m_pekerjaan,
    };

    clearTimeout(queryTimeOut.value);
    queryTimeOut.value = setTimeout(async () => {
        try {
            const ResultKota = await axios.get(
                `http://localhost:8080/Inputcalegpusat`,
                formValues,
                {
                    Headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            mapBoxSearchResultKota.value = ResultKota.data;
            console.log(mapBoxSearchResultKota.value);
        } catch (error) {
            console.log(error);
            searchError = true;
        }

        return;
    }, 300);
};

const TutupModals = () => {
    document.getElementById("modals").classList.add("hidden");
};
</script>
  
<style lang="scss" scoped></style>
  