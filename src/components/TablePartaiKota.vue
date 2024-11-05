<template>
    <div class="mt-24">
        <div class="px-5 mt-3 mx-auto text-sm sm:text-xs">
            <div class="flex flex-col gap-6">
                <div class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg">
                    <div class="p-4 md:p-5">
                        <h3 class="text-lg font-bold text-black dark:text-white">
                            Data Table Caleg DPRD Provinsi
                        </h3>
                        <div class="mt-10 grid lg:grid-cols-2 gap-6">
                            <div>
                                <label for="propinsi">Pilih Daerah Pemilihan</label>
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
                                    <p @click="IsiInput(resultKu.nama, resultKu.kode)"
                                        v-for="resultKu in mapBoxSearchResult.data" :key="resultKu.id"
                                        class="p-2 text-black font-semibold cursor-pointer hover:text-slate-500 bg-gradient-to-r from-yellow-200 to-white">
                                        {{ resultKu.nama }}
                                    </p>
                                </div>
                                <input type="hidden" id="kode_propinsi" name="kode_propinsi"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />

                            </div>
                            <div>
                                <label for="kota">Pilih Kota atau Kabupaten</label>
                                <input id="kota" name="kota"
                                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                                <input type="hidden" id="kode_kota" name="kode_kota">
                                <div id="listKota" name="listKota" v-if="mapBoxSearchResultKota"
                                    class="w-[300px] h-[200px] overflow-scroll">
                                    <p @click="IsiInputKota(resultKu.nama, resultKu.kode)"
                                        v-for="resultKu in mapBoxSearchResultKota.data" :key="resultKu.id"
                                        class="p-2 text-black font-semibold cursor-pointer hover:text-slate-500 bg-gradient-to-r from-yellow-200 to-white">
                                        {{ resultKu.nama }}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10 w-full">


            <div class="relative p-10 overflow-x-auto shadow-md sm:rounded-lg">

                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                No
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Provinsi
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Alamat
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ketua
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Bendahara
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Hp. Ketua
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Hp. Bendahara
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email Bendahara
                            </th>

                        </tr>
                    </thead>
                    <tbody v-if="hasilData">
                        <tr v-for="(hasilku, index) in hasilData.data" :key="index"
                            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ index + 1 }}
                            </th>
                            <td class="px-6 py-4">
                                {{ hasilku.propinsi }}
                            </td>
                            <td class="px-6 py-4">
                                {{ hasilku.alamat }}
                            </td>
                            <td class="px-6 py-4">
                                {{ hasilku.ketua }}
                            </td>
                            <td class="px-6 py-4">
                                {{ hasilku.bendahara }}
                            </td>
                            <td class="px-6 py-4">
                                {{ hasilku.nohpketua }}
                            </td>
                            <td class="px-6 py-4">
                                {{ hasilku.nohpbendahara }}
                            </td>
                            <td class="px-6 py-4">
                                {{ hasilku.emailbendahara }}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";


const queryTimeOut = ref(null);
const hasilData = ref(null);
const mapBoxSearchResult = ref(null);
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
    PreviewKota(searchID);
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

const PreviewKota = (PropinsiID) => {
    clearTimeout(queryTimeOut.value);
    queryTimeOut.value = setTimeout(async () => {
        try {
            const ResultKota = await axios.get(
                `https://wilayah.rimang.id/kota/${PropinsiID}`
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
const IsiInputKota = (kota, searchID) => {
    document.getElementById("kota").value = kota;
    document.getElementById("kode_kota").value = searchID;
    document.getElementById("listKota").classList.add("hidden");
    cariDataCalegKota(searchID);
};

const cariDataCalegKota = (kode_kota) => {

    clearTimeout(queryTimeOut.value);
    queryTimeOut.value = setTimeout(async () => {
        try {
            const ResultCalegPropinsi = await axios.get(
                `http://localhost:8080/partaikota/${kode_kota}`
            );
            hasilData.value = ResultCalegPropinsi.data;

            console.log(hasilData.value);
        } catch (error) {
            console.log(error);
            searchError = true;
        }

        return;
    }, 300);
}


</script>

<style lang="scss" scoped></style>