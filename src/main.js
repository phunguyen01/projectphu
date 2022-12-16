import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"

import router from "./router"

const app = createApp(App)
app.use(router)
app.use(bootstrap).mount('#app')
