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
              Pengisian Partai Tingkat Kota
            </h3>
            <div class="mt-10 grid lg:grid-cols-2 gap-6">
              <div>
                <label for="propinsi" class="text-gray-800 text-sm font-medium block mb-2">Pilih Provinsi</label>
                <div class="flex">
                  <input @focus="PreviewPropinsi" @change="PreviewPropinsi" id="propinsi" name="propinsi"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                  <svg @click="UlangListPropinsi" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
                <div id="listPropinsi" name="listPropinsi" v-if="mapBoxSearchResult"
                  class="w-[300px] h-[200px] overflow-scroll">
                  <p @click="IsiInput(resultKu.nama, resultKu.kode)" v-for="resultKu in mapBoxSearchResult.data"
                    :key="resultKu.id"
                    class="p-2 text-black font-semibold cursor-pointer hover:text-slate-500 bg-gradient-to-r from-yellow-200 to-white">
                    {{ resultKu.nama }}
                  </p>
                </div>
                <input type="hidden" id="kode_propinsi" name="kode_propinsi"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="kota" class="text-gray-800 text-sm font-medium block mb-2">Pilih Kota atau Kabupaten</label>
                <input id="kota" name="kota"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                <div id="listKota" name="listKota" v-if="mapBoxSearchResultKota"
                  class="w-[300px] h-[200px] overflow-scroll">
                  <p @click="IsiInputKota(resultKu.nama, resultKu.kode)" v-for="resultKu in mapBoxSearchResultKota.data"
                    :key="resultKu.id"
                    class="p-2 text-black font-semibold cursor-pointer hover:text-slate-500 bg-gradient-to-r from-yellow-200 to-white">
                    {{ resultKu.nama }}
                  </p>
                </div>
                <input type="hidden" id="kode_kota" name="kode_kota"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="alamat" class="text-gray-800 text-sm font-medium block mb-2">Alamat Kantor Resmi</label>
                <input type="text" id="alamat"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="notelp" class="text-gray-800 text-sm font-medium block mb-2">Kontak Resmi Partai</label>
                <input type="number" id="notelp"
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
              Pengisian Data Pengurus Partai Tingkat Kota/Kabupaten
            </h3>
            <div class="mt-10 grid lg:grid-cols-2 gap-6">
              <div>
                <label for="ketua" class="text-gray-800 text-sm font-medium block mb-2">Nama Ketua</label>
                <input type="text" id="ketua" name="ketua"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="nohpketua" class="text-gray-800 text-sm font-medium block mb-2">Kontak HP/WA Ketua</label>
                <input type="text" id="nohpketua" name="nohpketua"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="bendahara" class="text-gray-800 text-sm font-medium block mb-2">Nama Bendahara</label>
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
                <label for="emailbendahara" class="text-gray-800 text-sm font-medium block mb-2">Email Bendahara</label>
                <input type="email" id="emailbendahara" name="emailbendahara"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="situs" class="text-gray-800 text-sm font-medium block mb-2">Situs/Sosial Media</label>
                <input type="text" id="situs"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
          </div>
        </div>
        <button id="simpan_data"
          class="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 w-44 hover:bg-green-950 test-white p-2 border border-1 rounded-xl mt-10 border-slate-900"
          v-on:click="SubmitDataPartaiKota">
          Simpan Data
        </button>
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
const PropinsiID = ref(null);
const KotaID = ref(null);

const router = useRouter();

const PreviewPropinsi = () => {
  clearTimeout(queryTimeOut.value);
  queryTimeOut.value = setTimeout(async () => {
    try {
      const ResultPropinsi = await axios.get(`https://wilayah.rimang.id/propinsi`);
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
      const ResultKota = await axios.get(`https://wilayah.rimang.id/kota/${PropinsiID}`);
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
};

const SubmitDataPartaiKota = () => {
  const m_propinsi = document.getElementById("propinsi").value;
  const m_kode_propinsi = document.getElementById("kode_propinsi").value;
  const m_kota = document.getElementById("kota").value;
  const m_kode_kota = document.getElementById("kode_kota").value;
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
    kota: m_kota,
    id_registrasi: cookies.get("id"),
    email: cookies.get("email"),
    kode_kota: m_kode_kota,
    alamat: m_alamat,
    ketua: m_ketua,
    notelp: m_notelp,
    nohpketua: m_nohpketua,
    bendahara: m_bendahara,
    nohpbendahara: m_nohpbendahara,
    emailbendahara: m_emailbendahara,
    situs: m_situs,
  };
  clearTimeout(queryTimeOut.value);
  queryTimeOut.value = setTimeout(async () => {
    try {
      const ResultKota = await axios.post(
        `http://localhost:8080/inputpartaikota`,
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
  console.log(formValues);
  router.push("/uploadfile");
};
</script>

<style lang="scss" scoped></style>
