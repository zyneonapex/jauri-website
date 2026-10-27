import { createApp } from 'vue'
import "bootstrap-icons/font/bootstrap-icons.min.css"
import '@/assets/jauri/styles/shared.css'
import router from '@/assets/jauri/scripts/router'
import App from './App.vue'

const domain = location.hostname.toLowerCase();
console.log(window.location.search)
if(domain === "www.jauri.io" || domain === "jauri.zyneonapex.com" || domain === "www.jauri.dev" || domain === "jauri.dev" || domain === "www.jauri.app" || domain === "jauri.app") {
    const pathname = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    let path = "";

    if(pathname && pathname !== "/") {
        path = window.location.pathname
    }

    if(urlParams) {
        path += "?" + urlParams.toString();
    }

    window.location.href = "https://jauri.io" + path;
}

const app = createApp(App)
app.use(router)
app.mount('#app')