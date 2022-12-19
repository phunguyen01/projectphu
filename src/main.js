import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import router from "./router"

const app = createApp(App)
app.component('Datepicker-6', Datepicker);
app.use(router)
app.use(bootstrap).mount('#app')
