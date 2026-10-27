import { createApp } from 'vue'
import "bootstrap-icons/font/bootstrap-icons.min.css"
import '@/assets/jauri/styles/shared.css'
import router from '@/assets/jauri/scripts/router'
import App from './App.vue'

const domain = location.hostname;
console.log(domain);

const app = createApp(App)
app.use(router)
app.mount('#app')