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
                    Pengurus
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
                            Pengisian Partai Tingkat Provinsi
                        </h3>
                        <div class="mt-10 grid lg:grid-cols-2 gap-6">
                            <div>
                                <label for="propinsi" class="text-gray-800 text-sm font-medium block mb-2">Pilih
                                    Provinsi</label>
                                <div class="flex">
                                    <input @focus="PreviewPropinsi" @change="PreviewPropinsi" id="propinsi" name="propinsi"
                                        class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                                    <svg @click="UlangListPropinsi" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </div>
                                <input type="hidden" id="kode_propinsi" name="kode_propinsi" />
                                <div id="listPropinsi" name="listPropinsi" v-if="mapBoxSearchResult"
                                    class="w-[300px] h-[200px] overflow-scroll">
                                    <p @click="IsiInput(resultKu.nama, resultKu.kode)"
                                        v-for="resultKu in mapBoxSearchResult.data" :key="resultKu.id"
                                        class="p-2 text-black font-semibold cursor-pointer hover:text-slate-500 bg-gradient-to-r from-yellow-200 to-white">
                                        {{ resultKu.nama }}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label for="alamat" class="text-gray-800 text-sm font-medium block mb-2">Alamat Kantor
                                    Resmi</label>
                                <input type="text" id="alamat"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="notelp" class="text-gray-800 text-sm font-medium block mb-2">Kontak Resmi
                                    Partai</label>
                                <input type="number" id="notelp"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="email" class="text-gray-800 text-sm font-medium block mb-2">Email Resmi</label>
                                <input type="email" id="email"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="segment-2" class="hidden" role="tabpanel" aria-labelledby="segment-item-2">
            <div class="flex flex-col gap-6">
                <div class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg">
                    <div class="p-4 md:p-5">
                        <h3 class="text-lg font-bold text-black dark:text-white">
                            Pengisian Data Pengurus Partai Tingkat Wilayah/Provinsi
                        </h3>
                        <div class="mt-10 grid lg:grid-cols-2 gap-6">
                            <div>
                                <label for="ketua" class="text-gray-800 text-sm font-medium block mb-2">Nama Ketua</label>
                                <input type="text" id="ketua"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="nohpketua" class="text-gray-800 text-sm font-medium block mb-2">Kontak HP/WA
                                    Ketua</label>
                                <input type="text" id="nohpketua"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="bendahara" class="text-gray-800 text-sm font-medium block mb-2">Nama
                                    Bendahara</label>
                                <input type="text" id="bendahara"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="nohpbendahara" class="text-gray-800 text-sm font-medium block mb-2">Kontak HP/WA
                                    Bendahara</label>
                                <input type="text" id="nohpbendahara"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="emailbendahara" class="text-gray-800 text-sm font-medium block mb-2">Email
                                    Bendahara</label>
                                <input type="email" id="emailbendahara"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <input type="hidden" id="id_partaipropinsi" name="id_partaipropinsi" />
                            <div>
                                <label for="situs" class="text-gray-800 text-sm font-medium block mb-2">Situs Resmi
                                    Partai</label>
                                <input type="text" id="situs"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <button id="simpan_data"
                                class="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 w-44 hover:bg-green-950 test-white p-2 border border-1 rounded-xl mt-10 border-slate-900"
                                v-on:click="SubmitUpdateDataPartaiPropinsi">
                                Update Data
                            </button>
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

import { useCookies } from "vue3-cookies";

export default {
    data() {
        return {
            id: "",
            hasil: "",
            hasilku: "",
            resultKu: "",
            hasilupdate: "",
            formValues: "",
            Title: "",
            subTitle: "",
            Description: "",
        };
    },
    created() {
        this.UpdatePartaiPropinsi();
    },
    setup() {
        const { cookies } = useCookies();

        const searchQuery = ref("");
        const queryTimeOut = ref(null);

        const mapBoxSearchResult = ref(null);
        var searchError = false;
        const mapBoxSearchResultKota = ref(null);
        const mapBoxSearchResultUpdateKota = ref(null);

        return {
            searchQuery,
            queryTimeOut,
            mapBoxSearchResult,
            mapBoxSearchResultUpdateKota,
            mapBoxSearchResultKota,
            searchError,
            cookies,
        };
    },
    methods: {
        async PreviewPropinsi() {
            await axios.get(`https://wilayah.rimang.id/propinsi`).then((response) => {
                this.hasil = response.data;
                console.log(this.hasil);
            });
        },
        IsiInput(searchQuery, searchID) {
            document.getElementById("propinsi").value = searchQuery;
            document.getElementById("kode_propinsi").value = searchID;
            document.getElementById("listPropinsi").classList.add("hidden");
            this.PreviewKota(searchID);
        },
        UlangListPropini() {
            let listPropinsi = document.getElementById("listPropinsi");

            let Propinsi = document.getElementById("propinsi");
            Propinsi.value = "Ulangi Pilih Propinsi";

            if (listPropinsi.classList.contains("hidden")) {
                listPropinsi.classList.remove("hidden");
            } else {
                listPropinsi.classList.add("hidden");
            }

            Kota.value = "Ulangi pilih kota/kab";
        },

        async SubmitUpdateDataPartaiPropinsi() {
            if (this.hasilupdate.data.id_registrasi == this.cookies.get("id")) {
                const m_propinsi = document.getElementById("propinsi").value;
                const m_kode_propinsi = document.getElementById("kode_propinsi").value;
                const m_id_partaipropinsi = document.getElementById("id_partaipropinsi").value;
                const m_alamat = document.getElementById("alamat").value;
                const m_notelp = document.getElementById("notelp").value;
                const m_ketua = document.getElementById("ketua").value;
                const m_nohpketua = document.getElementById("nohpketua").value;
                const m_bendahara = document.getElementById("bendahara").value;
                const m_nohpbendahara = document.getElementById("nohpbendahara").value;
                const m_emailbendahara = document.getElementById("emailbendahara").value;
                const m_situs = document.getElementById("situs").value;

                const formValues = {
                    propinsi: m_propinsi,
                    kode_propinsi: m_kode_propinsi,

                    id_partaipropinsi: m_id_partaipropinsi,
                    alamat: m_alamat,
                    ketua: m_ketua,
                    notelp: m_notelp,
                    nohpketua: m_nohpketua,
                    bendahara: m_bendahara,
                    nohpbendahara: m_nohpbendahara,
                    emailbendahara: m_emailbendahara,
                    situs: m_situs,
                };

                await axios
                    .post(`http://localhost:8080/updatepartaipropinsi`, formValues, {
                        Headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    })
                    .then((response) => {
                        console.log(response);
                        this.hasilupdate = response.data;
                    });

                this.$router.push("/home");
            } else {
                document.getElementById("modals").classList.remove("hidden");
                this.Title = "Anda tidak diperkenankan untuk mengubah data ini";
                this.subTitle =
                    "Lakukan Log in terlebih dahulu dan pastikan hak perubahan data ini milik anda";
            }
        },

        async UpdatePartaiPropinsi() {
            this.id = this.$route.params.id;

            await axios
                .get(`http://localhost:8080/findpartaipropinsi/${this.id}`, {
                    Headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                .then((response) => {
                    console.log(response);
                    this.hasilupdate = response.data;
                    document.getElementById("propinsi").value = this.hasilupdate.data.propinsi;
                    document.getElementById(
                        "kode_propinsi"
                    ).value = this.hasilupdate.data.kode_propinsi;

                    document.getElementById(
                        "id_partaipropinsi"
                    ).value = this.hasilupdate.data.id_partaipropinsi;

                    document.getElementById("alamat").value = this.hasilupdate.data.alamat;
                    document.getElementById("notelp").value = this.hasilupdate.data.notelp;
                    document.getElementById("email").value = this.hasilupdate.data.email;
                    document.getElementById("ketua").value = this.hasilupdate.data.ketua;
                    document.getElementById("nohpketua").value = this.hasilupdate.data.nohpketua;
                    document.getElementById("bendahara").value = this.hasilupdate.data.bendahara;
                    document.getElementById(
                        "nohpbendahara"
                    ).value = this.hasilupdate.data.nohpbendahara;
                    document.getElementById(
                        "emailbendahara"
                    ).value = this.hasilupdate.data.emailbendahara;
                    document.getElementById("situs").value = this.hasilupdate.data.situs;
                });
        },

        TutupModals() {
            document.getElementById("modals").classList.add("hidden");
        },
    },
};
</script>
  