import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseCard from './components/base/BaseCard.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.component('BaseCard', BaseCard)

app.mount('#app')