<template>
  <div class="px-5 flex mt-16 mx-auto">
    <div
      class="flex bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600">
      <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
        <button type="button"
          class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active"
          id="segment-item-1" data-hs-tab="#segment-1" aria-controls="segment-1" role="tab">
          Partai
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
              Pengisian Data Partai
            </h3>
            <div class="mt-10 grid lg:grid-cols-2 gap-6">
              <div>
                <label for="nama" class="text-gray-800 text-sm font-medium block mb-2">Nama Partai</label>
                <input type="text" id="nama" name="nama"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"/>
              </div>
              <div>
                <label for="alamat" class="text-gray-800 text-sm font-medium block mb-2">Alamat Kantor Resmi</label>
                <input type="text" id="alamat" name="alamat"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="akta" class="text-gray-800 text-sm font-medium block mb-2">Akta Pendirian Partai</label>
                <input type="text" id="akta"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="sk" class="text-gray-800 text-sm font-medium block mb-2">SK KemenKumHAM</label>
                <input type="text" id="sk"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="notelp" class="text-gray-800 text-sm font-medium block mb-2">Kontak Resmi Partai</label>
                <input type="number" id="notelp"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="email" class="text-gray-800 text-sm font-medium block mb-2">Email Resmi</label>
                <input type="email" id="email"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="situs" class="text-gray-800 text-sm font-medium block mb-2">Situs Resmi</label>
                <input type="text" id="situs"
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
              Pengisian Data Pengurus Partai
            </h3>
            <div class="mt-10 grid lg:grid-cols-2 gap-6">
              <div>
                <label for="ketua" class="text-gray-800 text-sm font-medium block mb-2">Nama Ketua / Presiden / Pimpinan
                  Tertinggi</label>
                <input type="text" id="ketua"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="nohpketua" class="text-gray-800 text-sm font-medium block mb-2">Kontak HP/WA Ketua</label>
                <input type="number" id="nohpketua"
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
                <input type="number" id="nohpbendahara"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label for="emailbendahara" class="text-gray-800 text-sm font-medium block mb-2">Email Bendahara</label>
                <input type="email" id="emailbendahara"
                  class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <button id="simpan_data"
                class="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 w-44 hover:bg-green-950 test-white p-2 border border-1 rounded-xl mt-10 border-slate-900"
                v-on:click="SubmitDataPartai">Simpan Data</button>

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

import router from "../router";
import { useCookies } from "vue3-cookies";


const { cookies } = useCookies();



const queryTimeOut = ref(null);
const hasilData = ref(null);
const mapBoxSearchResultKota = ref(null);

const SubmitDataPartai=()=>{
  const m_nama=document.getElementById("nama").value;
  
  const m_sk=document.getElementById("sk").value;
  const m_akta=document.getElementById("akta").value;
  const m_alamat=document.getElementById("alamat").value;
  const m_notelp=document.getElementById("notelp").value;
  const m_ketua=document.getElementById("ketua").value;
  const m_nohpketua=document.getElementById("nohpketua").value;
  const m_bendahara=document.getElementById("bendahara").value;
  const m_nohpbendahara=document.getElementById("nohpbendahara").value;
  const m_emailbendahara=document.getElementById("emailbendahara").value;
  const m_situs = document.getElementById("situs").value;

  const formValues={
    'nama': m_nama,
    'id_registrasi': cookies.get('id'),
    'email': cookies.get('email'),
    'sk': m_sk,
    'akta': m_akta,
    'alamat': m_alamat,
    'ketua': m_ketua,
    'notelp': m_notelp,
    'nohpketua': m_nohpketua,
    'bendahara': m_bendahara,
    'nohpbendahara': m_nohpbendahara,
    'emailbendahara': m_emailbendahara,
    'situs': m_situs,
  }

  
clearTimeout(queryTimeOut.value);
queryTimeOut.value = setTimeout(async () => {
  try {
    const ResultKota = await axios.post(
      `http://localhost:8080/inputpartai`,formValues,{
        Headers:{
          "Content-Type": "application/x-www-form-urlencoded",
        }
      }
    );
    mapBoxSearchResultKota.value = ResultKota.data;
    console.log(mapBoxSearchResultKota.value);
  } catch (error) {
    console.log(error);
    
  }

  return;
}, 300);

console.log(formValues);
router.push('/uploadfile');
}


</script>

<style lang="scss" scoped></style>
