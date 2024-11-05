import('preline')
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormInputPartai from '../views/FormInputPartai.vue'
import TableDaftarCaleg from '../views/TableDaftarCaleg.vue'
import FormInputPartaiPropinsi from '../views/FormInputPartaiPropinsi.vue'
import FormInputPartaiKota from '../views/FormInputPartaiKota.vue'
import FormInputCalegDprri from '../views/FormInputCalegDprri.vue'
import FormInputCalegPropinsi from '../views/FormInputCalegPropinsi.vue'
import FormInputCalegKota from '../views/FormInputCalegKota.vue'
import FormInputKelompok from '../views/FormInputKelompok.vue'
import FormInputParpolLain from '../views/FormInputParpolLain.vue'
import FormInputDataPerorangan from '../views/FormInputDataPerorangan.vue'
import FormInputRekAwalPartaiPusat from '../views/FormInputRekAwalPartaiPusat.vue'
import FormInputRekAwalPartaiPropinsi from '../views/FormInputRekAwalPartaiPropinsi.vue'
import FormInputRekAwalPartaiKota from '../views/FormInputRekAwalPartaiKota.vue'
import FormInputRekAwalCaleg from '../views/FormInputRekAwalCaleg.vue'
import FormRegister  from "../views/FormRegister.vue";
import FormInputPerusahaan from '../views/FormInputPerusahaan.vue'
import FormUploadFileTambahan from '../views/FormUpoadFileTambahan.vue'
import FormInputLogin from "../views/FormInputLogin.vue";
import FormGabung from "../views/FormGabung.vue";
import FormLoginDpc from '../views/FormLoginDpc.vue';
import FormLoginSaksi from '../views/FormLoginSaksi.vue';
import TableDataCalegPusatView from '../views/TableDataCalegPusatView.vue';
import TableCalegPropinsiView from '../views/TableCalegPropinsiView.vue';
import TableCalegKotaView from '../views/TableCalegKotaView.vue';
import TablePartaiPropinsiView from '../views/TablePartaiPropinsiView.vue'
import TablePartaiKotaView from '../views/TablePartaiKotaView.vue'
import ChartViewTest from '../views/ChartViewTest.vue'
import UpdateCalegPusatView from '../views/UpdateCalegPusatView.vue'
import UpdateCalegKotaView from '../views/UpdateCalegKotaView.vue'
import UpdateCalegPropinsiView from '../views/UpdateCalegPropinsiView.vue'
import UpdatePartaiPropinsiView from '../views/UpdatePartaiPropinsiView.vue'
import UpdatePartaiKotaView from '../views/UpdatePartaiKotaView.vue'
import ViewPartai from '../views/ViewPartai.vue'
import ViewPengeluaran from '../views/ViewPengeluaran.vue'
import ViewUpdatePengeluaran from '../views/ViewUpdatePengeluaran.vue'
import ViewInputBarang from '../views/ViewInputBarang.vue'
import ViewUpdateDataBarang from '../views/ViewUpdateDataBarang.vue'
import InputBarangVue from '../components/InputBarang.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeku',
      component: HomeView
    },
    {
      path: '/inputpartai',
      name: 'inputpartai',
      component: FormInputPartai,

    },
    {
      path: '/daftarcaleg',
      name: 'daftarcaleg',
      component: TableDaftarCaleg,

    },
    {
      path: '/inputpartaikota',
      name: 'inputpartaikota',
      component: FormInputPartaiKota,
    },
    {
      path: '/inputpartaipropinsi',
      name: 'inputpartaipropinsi',
      component: FormInputPartaiPropinsi,
    },
    {
      path: '/inputcalegpusat',
      name: 'inputpartaicaleg',
      component: FormInputCalegDprri,
    },
    {
      path: '/inputcalegpropinsi',
      name: 'inputcalegpropinsi',
      component: FormInputCalegPropinsi,
    },
    {
      path: '/inputcalegkota',
      name: 'inputcalegkota',
      component: FormInputCalegKota,
    },
    {
      path: '/inputkelompok',
      name: 'inputkelompok',
      component: FormInputKelompok,
    },
    {
      path: '/inputparpollain',
      name: 'inputparpollain',
      component: FormInputParpolLain,
    },
    {
      path: '/inputperorangan',
      name: 'inputperorangan',
      component: FormInputDataPerorangan,
    },
    {
      path:'/inputperusahaan',
      name: 'inputperusahaan',
      component: FormInputPerusahaan,
    },
    {
      path: '/isirekawalpartaipusat',
      name: 'isireakawalpartaipusat',
      component: FormInputRekAwalPartaiPusat,
    },{
      path: '/isirekawalpartaipropinsi',
      name: 'isirekawalpartaipropinsi',
      component: FormInputRekAwalPartaiPropinsi,
    },
    {
      path: '/isirekawalpartaikota',
      name: 'isirekawalpartaikota',
      component: FormInputRekAwalPartaiKota,
    },
    {
      path: '/isirekawalcaleg',
      name: 'isirekawalcaleg',
      component: FormInputRekAwalCaleg, 
    },
    {
      path: '/registrasi',
      name: 'registrasi',
      component: FormRegister,
    },{
      path: '/uploadfile',
      name: 'uploadfile',
      component: FormUploadFileTambahan,
    },{
      path: '/login',
      name: 'login',
      component: FormInputLogin,
    },{
      path: '/testform',
      name: 'testform',
      component: FormGabung,
    },{
      path: '/logindpc',
      name:'logindpc',
      component: FormLoginDpc,
    },
    {
      path: '/loginsaksi',
      name: 'loginsaksi',
      component: FormLoginSaksi,
    },{
      path: '/tablecalegpusat',
      name: 'tablecalegpusat',
      component: TableDataCalegPusatView,
    },{
      path: '/tablecalegpropinsi',
      name: 'tablecalegpropinsi',
      component: TableCalegPropinsiView,
    },{
      path: '/tablecalegkota',
      name:'tablecalegkota',
      component: TableCalegKotaView,
    },
    {
      path: '/tablepartaipropinsi',
      name:'tablepartaipropinsi',
      component: TablePartaiPropinsiView,
    },
    {
      path: '/tablepartaikota',
      name:'tablepartaikota',
      component: TablePartaiKotaView,
    },{
      path: '/home',
      name:'home',
      component: ChartViewTest,
    },{
      path: '/viewcalegpusat/:id',
      name: 'viewcalegpusat',
      component: UpdateCalegPusatView,
    },
    {
      path: '/viewcalegkota/:id',
      name: 'viewcalegkota',
      component: UpdateCalegKotaView,
    },
    {
      path: '/viewcalegpropinsi/:id',
      name: 'viewcalegpropinsi',
      component: UpdateCalegPropinsiView,
    },
  {
    path: '/viewpartaipropinsi/:id',
    name: 'viewpartaipropinsi',
    component: UpdatePartaiPropinsiView,
  },
  {
    path: '/viewpartaikota/:id',
    name: 'viepartaikota',
    component: UpdatePartaiKotaView,
  },
  {
    path: '/viewpartai',
    name: 'viewpartai',
    component: ViewPartai,
  },{
    path: '/viewpengeluaran',
    name: 'viewpengeluaran',
    component: ViewPengeluaran,
  },{
    path: '/viewupdatepengeluaran/:id',
    name: 'viewupdatepengeluaran',
    component: ViewUpdatePengeluaran,
  },
  {
    path: '/inputperusahaan',
    name: 'inputperusahaan',
    component: PerusahaanView,
  },

  {
    path: '/viewperusahaan',
    name: 'viewperusahaan',
    component: UpdatePerusahaan,
  },
  {
    path: '/inputbarang',
    name: 'barang',
    component: ViewInputBarang,
  },
  {
    path: '/viewupdatebarang',
    name: 'viewupdatebarang',
    component: ViewUpdateDataBarang,
  },
  
  ]
})

export default router
