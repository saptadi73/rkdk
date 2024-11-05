<template>
  <section
    class="mt-0 bg-gradient-to-b from-orange-500 to-orange-300 dark:bg-gray-900"
  >
    <div
      class="flex flex-col shadow-lg items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0"
    >
      <a
        href="#"
        class="mt-10 flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="mt-5 w-36 h-auto mr-2"
          src="../img/logo_buruh.png"
          alt="logo"
        />
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Login Saksi
          </h1>
          <button
            class="rounded-lg bg-orange-400 border border-orange-600 p-1 text-xs font-Poppins font-bold text-green-600"
          >
            Reset Ulang Pengisian
          </button>

          <div>
            <label
              for="propinsi"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Pilih Nama Propinsi</label
            >
            <input
              @focus="PreviewPropinsi"
              type="text"
              name="propinsi"
              id="propinsi"
              class="form-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
            <ul
              id="listPropinsi"
              name="listPropinsi"
              v-if="mapBoxSearchResult"
              class="overflow-scroll h-[200px] p-2 shadow-md rounded-md bg-gradient-to-r from-cyan-300 to-cyan-50"
            >
              <h1 class="font-bold text-slate-700">List Propinsi</h1>
              <li
                v-for="resultPropinsiku in mapBoxSearchResult.data"
                :key="resultPropinsiku.id"
                @click="
                  isiInputPropinsi(resultPropinsiku.name, resultPropinsiku.id)
                "
                class="font-semibold text-red-600 hover:text-yellow-300 hover:font-bold cursor-pointer"
              >
                {{ resultPropinsiku.name }}
              </li>
            </ul>
          </div>
          <div>
            <label
              for="kota"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Pilih Kota</label
            >
            <input
              type="text"
              name="kota"
              @focus="PreviewKota"
              id="kota"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
            <ul
              id="listKota"
              name="listKota"
              v-if="mapBoxSearchResultKota"
              class="overflow-scroll h-[200px] p-2 shadow-md rounded-md bg-gradient-to-r from-cyan-300 to-cyan-50"
            >
              <h1 class="font-bold text-slate-700">List Kota</h1>
              <li
                v-for="resultKotaku in mapBoxSearchResultKota.data"
                :key="resultKotaku.id"
                @click="isiInputKota(resultKotaku.name, resultKotaku.id)"
                class="font-semibold text-red-600 hover:text-yellow-300 hover:font-bold cursor-pointer"
              >
                {{ resultKotaku.name }}
              </li>
            </ul>
          </div>
          <div>
            <label
              for="kecamatan"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Pilih Kecamatan</label
            >
            <input
              type="text"
              name="kecamatan"
              @focus="previewKecamatan"
              id="kecamatan"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
            <ul
              id="listKecamatan"
              name="listKecamatan"
              v-if="mapBoxSearchResultKecamatan"
              class="overflow-scroll h-[200px] p-2 shadow-md rounded-md bg-gradient-to-r from-cyan-300 to-cyan-50"
            >
              <h1 class="font-bold text-slate-700">List Kota</h1>
              <li
                v-for="resultKecamatanku in mapBoxSearchResultKecamatan.data"
                :key="resultKecamatanku.id"
                @click="
                  isiInputKecamatan(
                    resultKecamatanku.name,
                    resultKecamatanku.id
                  )
                "
                class="font-semibold text-red-600 hover:text-yellow-300 hover:font-bold cursor-pointer"
              >
                {{ resultKecamatanku.name }}
              </li>
            </ul>
          </div>

          <div>
            <label
              for="kelurahan"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Pilih Kelurahan</label
            >
            <input
              type="text"
              name="kelurahan"
              @focus="PreviewKelurahan"
              id="kelurahan"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
            <ul
              id="listKelurahan"
              name="listKelurahan"
              v-if="mapBoxSearchResultKelurahan"
              class="overflow-scroll h-[200px] p-2 shadow-md rounded-md bg-gradient-to-r from-cyan-300 to-cyan-50"
            >
              <h1 class="font-bold text-slate-700">List Kelurahan</h1>
              <li
                v-for="resultKelurahanku in mapBoxSearchResultKelurahan.data"
                :key="resultKelurahanku.id"
                @click="
                  isiInputKelurahan(
                    resultKelurahanku.name,
                    resultKelurahanku.id
                  )
                "
                class="font-semibold text-red-600 hover:text-yellow-300 hover:font-bold cursor-pointer"
              >
                {{ resultKelurahanku.name }}
              </li>
            </ul>
          </div>

          <div>
            <label
              for="tps"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >No. TPS</label
            >
            <input
              type="number"
              name="tps"
              id="tps"
              class="form-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>

          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              class="form-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start"></div>
          </div>
          <button
            @click="submitForm"
            class="w-full text-slate-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import router from "../router";
import { ref } from "vue";
import { reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  numeric,
} from "@vuelidate/validators";

const queryTimeOut = ref(null);
const mapBoxAPIkey = "a34e9921-fb48-5b3e-f168-fd13f6aa";
const mapBoxSearchResult = ref(null);
const mapBoxSearchResultKota = ref(null);
const mapBoxSearchResultKecamatan = ref(null);
const mapBoxSearchResultKelurahan = ref(null);

const PreviewPropinsi = () => {
  clearTimeout(queryTimeOut.value);
  queryTimeOut.value = setTimeout(async () => {
    try {
      const ResultPropinsi = await axios.get(
        `https://api.goapi.io/regional/provinsi?api_key=${mapBoxAPIkey}`
      );
      mapBoxSearchResult.value = ResultPropinsi.data;
      console.log(mapBoxSearchResult.value);
    } catch (error) {
      console.log(error);
    }
    return;
  }, 300);
};

const isiInputPropinsi = (searchQuery, searchID) => {
  document.getElementById("propinsi").value = searchQuery;
  document.getElementById("listPropinsi").classList.add("hidden");
  PreviewKota(searchID);
};

const PreviewKota = (PropinsiID) => {
  clearTimeout(queryTimeOut.value);
  queryTimeOut.value = setTimeout(async () => {
    try {
      const ResultKota = await axios.get(
        `https://api.goapi.io/regional/kota?api_key=${mapBoxAPIkey}&provinsi_id=${PropinsiID}`
      );
      mapBoxSearchResultKota.value = ResultKota.data;
      console.log(mapBoxSearchResultKota.value);
    } catch (error) {
      console.log(error);
    }
    return;
  }, 300);
};

const isiInputKota = (searchQuery, searchID) => {
  document.getElementById("kota").value = searchQuery;
  document.getElementById("listKota").classList.add("hidden");
  PreviewKecamatan(searchID);
};

const PreviewKecamatan = (KotaID) => {
  clearTimeout(queryTimeOut.value);
  queryTimeOut.value = setTimeout(async () => {
    try {
      const resultKecamatan = await axios.get(
        `https://api.goapi.io/regional/kecamatan?api_key=${mapBoxAPIkey}&kota_id=${KotaID}`
      );
      mapBoxSearchResultKecamatan.value = resultKecamatan.data;
      console.log(mapBoxSearchResultKecamatan.value);
    } catch (error) {
      console.log(error);
    }
    return;
  }, 300);
};

const isiInputKecamatan = (searchQuery, searchID) => {
  document.getElementById("kecamatan").value = searchQuery;
  document.getElementById("listKecamatan").classList.add("hidden");
  PreviewKelurahan(searchID)
};

const PreviewKelurahan = (KecamatanID) => {
  clearTimeout(queryTimeOut.value);
  queryTimeOut.value = setTimeout(async () => {
    try {
      const resultKelurahan = await axios.get(
        `https://api.goapi.io/regional/kelurahan?api_key=${mapBoxAPIkey}&kecamatan_id=${KecamatanID}`
      );
      mapBoxSearchResultKelurahan.value = resultKelurahan.data;
      console.log(mapBoxSearchResultKelurahan.value);
    } catch (error) {
      console.log(error);
    }
    return;
  }, 300);
};

const isiInputKelurahan = (searchQuery, searchID) => {
  document.getElementById("kelurahan").value = searchQuery;
  document.getElementById("listKelurahan").classList.add("hidden");
  // previewKelurahan(searchID)
};

const submitForm = (event) => {
  event.preventDefault();
  router.push("/inputpartaikota");
};
</script>
