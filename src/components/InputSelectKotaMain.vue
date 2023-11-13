<template>
  <div>
    <main class="container text-black">
      <div class="ml-[100px] pt-4 mb-4">
        <div class="flex">
            <input
        id="propinsi" name="propinsi"
          class="py-2 px-1 w-[300px] bg-transparent border-b focus:border-weather-secondary focus:outline-none focus: shadow-[0px_1px_0_0_#004E71]"
          type="text"
          @focus="PreviewPropinsi" @change="PreviewPropinsi"
        />
        <svg @click="UlangListPropinsi" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          
        </div>
        
        <div id="listPropinsi" name="listPropinsi" v-if="mapBoxSearchResult" class="w-[300px] h-[200px] overflow-scroll">
            <p @click="IsiInput(resultKu.name,resultKu.id)" v-for="resultKu in mapBoxSearchResult.data" :key="resultKu.id" class="text-black font-semibold cursor-pointer hover:text-slate-500 bg-gradient-to-r from-yellow-200 to-white">{{resultKu.name}}</p>

        </div>
      </div>
      <div class="ml-[100px] pt-4 mb-4">
        <input
        id="kota" name="kota"
          class="py-2 px-1 w-[300px] bg-transparent border-b focus:border-weather-secondary focus:outline-none focus: shadow-[0px_1px_0_0_#004E71]"
          type="text"
        
        />
        <div id="listKota" name="listKota" v-if="mapBoxSearchResultKota" class="w-[300px] h-[200px] overflow-scroll">
            <p @click="IsiInputKota(resultKu.name,resultKu.id)" v-for="resultKu in mapBoxSearchResultKota.data" :key="resultKu.id" class="text-black font-semibold cursor-pointer hover:text-slate-500 bg-gradient-to-r from-yellow-200 to-white">{{resultKu.name}}</p>

        </div>
        
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const queryTimeOut = ref(null);
const mapBoxAPIkey = "a34e9921-fb48-5b3e-f168-fd13f6aa";
const mapBoxSearchResult = ref(null);
var searchError = false;
const mapBoxSearchResultKota=ref(null);
const PropinsiID=ref(null);
const KotaID=ref(null);

const router = useRouter();

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
      searchError = true;
    }

    return;
  },300);
};

const IsiInput=(searchQuery,searchID)=>{
    document.getElementById('propinsi').value=searchQuery;
    document.getElementById('listPropinsi').classList.add('hidden');
    PreviewKota(searchID);

    

    

}

const UlangListPropinsi=()=>{
    let listPropinsi = document.getElementById('listPropinsi');
    let listKota = document.getElementById('listKota');
    let Kota = document.getElementById('kota');
    let Propinsi = document.getElementById('propinsi');
    Propinsi.value='Ulangi Pilih Propinsi';

    if (listPropinsi.classList.contains('hidden')){
        listPropinsi.classList.remove('hidden');
        listKota.classList.remove('hidden');
    }else{
        listPropinsi.classList.add('hidden');
        listKota.classList.add('hidden');
    }

    Kota.value = "Ulangi pilih kota/kab";
}

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
      searchError = true;
    }

    return;
  },300);
}
  const IsiInputKota=(kota,searchID)=>{
    document.getElementById('kota').value=kota;
    document.getElementById('listKota').classList.add('hidden');
    
};
</script>

<style lang="scss" scoped></style>
