import { createApp } from 'vue'
import "bootstrap-icons/font/bootstrap-icons.min.css"
import '@/assets/jauri/styles/shared.css'
import router from '@/assets/jauri/scripts/router'
import App from './App.vue'

const domain = location.hostname.toLowerCase();
if(domain === "www.jauri.io" || domain === "jauri.zyneonapex.com" || domain === "www.jauri.dev" || domain === "jauri.dev" || domain === "www.jauri.app" || domain === "jauri.app") {
    window.location.href = "https://jauri.io" + window.location.pathname
}

const app = createApp(App)
app.use(router)
app.mount('#app')