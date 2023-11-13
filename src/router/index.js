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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
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
    }
  
  ]
})

export default router
