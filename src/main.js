import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

app.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-right',
    theme: 'colored',
    // other options
})

app.use(store)
    .use(router)
    .mount('#app')