import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import('preline')
import 'flowbite'

const app = createApp(App)

app.use(router)

app.mount('#app')
