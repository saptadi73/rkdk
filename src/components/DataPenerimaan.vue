<template>
    <div class="px-5 flex mt-16 mx-auto">
      <div
        class="flex bg-gradient-to-r from-slate-300 to-slate-200 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
          <div
            class="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-white font-medium rounded-md hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active"
            id="segment-item-1"
            data-hs-tab="#segment-1"
            aria-controls="segment-1"
            role="tab"
          >
            Data Penerimaan
          </div>
        </nav>
      </div>
    </div>
    <div class="px-5 mt-3 mx-auto text-sm sm:text-xs">
      <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
        <div class="flex flex-col gap-6">
          <div
            class="flex flex-col bg-gradient-to-r from-slate-200 to-slate-100 border shadow-sm rounded-lg"
          >
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-black dark:text-white">
                Tambah Pengeluaran Aktivitas
              </h3>
              <div class="mt-10 grid lg:grid-cols-2 gap-6">
                <!-- <div> -->
                  <!-- <label
                    for="email"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div> -->
                <div>
                  <label
                    for="id_penyumbang"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Aktivitas</label
                  >
                  <div class="flex">
                    <select
                      id="id_penyumbang"
                      class="form-select py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="RapatUmum">Rapat Umum</option>
                      <option value="1">
                        Pertemuan Terbatas
                      </option>
                      <option value="2">
                        Pertemuan Tatap Muka
                      </option>
                      <option value="3">
                        Penyebaran Bahan Partai Kampanye Partai Politik Kepada
                        Umum
                      </option>
                      <option value="4">
                        Penyebaran Bahan Partai Kampanye Calon Anggota Legislatif
                        Kepada Umum Umum
                      </option>
                      <option value="5">
                        Pembelian Kendaraan
                      </option>
                      <option value="6">
                        Pembelian Peralatan
                      </option>
                      <option value="7">
                        Pembayaran Utang Pembelian Barang
                      </option>
                      <option value="8">Administrasi Bank</option>
                      <option value="9">
                        Pemasangan Alat Peraga Kampanye Partai Politik Kepada Umum
                      </option>
                      <option value="10">
                        Pemasangan Alat Peraga Kampanye Calon Anggota Legislatif
                        Kepada Umum
                      </option>
                      <option value="11">
                        Pembuatan Bahan/Desaign dan Atau Alat Peraga Kampanye
                      </option>
                      <option value="12">Pengeluaran Lain</option>
                      <option value="13">
                        Kegiatan Lain Yang Tidak Melanggar Larangan Kampanye dan
                        Peraturab Perundang Undangan
                      </option>
                      <option value="14">
                        Pembuatan/Prod Iklan di Media Massa Elektronik, dan Media
                        Dalam Jaringan
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    for="deskripsi"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Description
                  </label>
                  <input
                    type="text"
                    id="deskripsi"
                    placeholder=""
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    required
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
                    id="tanggal"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="jumlah"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Jumlah</label
                  >
                  <input
                    type="text"
                    id="jumlah"
                    placeholder="Nomor Bukti Transaksi"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="jenis_penyumbang"
                    class="text-gray-800 text-sm font-medium block mb-2"
                    >Jenis Penyumbang</label
                  >
                  <input
                    type="text"
                    id="jenis_penyumbang"
                    placeholder="Jenis Penyumbang"
                    class="form-input py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <button id="simpan_data" class="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 w-44 hover:bg-green-950 test-white p-2 border border-1 rounded-xl mt-10 border-slate-900"
                v-on:click="InputPenerimaan">Simpan Data</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import {ref} from "vue";
  import axios from "axios";
  import {useRouter} from "vue-router";
  
  import { useCookies } from "vue3-cookies";
  
  export default{
      data(){
          return{
              fromValue:'',
              getResponse:'',
              Title:'',
              subTitle:'',
              Description:'',
          }
      },
      setup(){
          const {cookies} = useCookies();
          return{
              cookies,
          }
      },
      methods:{
        async InputPenerimaan(){
            
  
            this.formValues={
              'deskripsi': document.getElementById("deskripsi").value,
              'jumlah': document.getElementById("jumlah").value,
              'jenis_penyumbang': document.getElementById("jenis_penyumbang").value,
              'id_penyumbang': document.getElementById("id_penyumbang").value,
              'tanggal': document.getElementById("tanggal").value,
  
              'id_registrasi': this.cookies.get('id'),
              'email' : this.cookies.get('email'),
  
  
            };
  
            // console.log(this.formValues);
            await axios.post(`http://localhost:8080/inputpenerimaan`,this.formValues)
            .then((response)=>{
              console.log(response);
            })
      }
    }
  }
  </script>
  
  
  <style lang="scss" scoped></style>
  