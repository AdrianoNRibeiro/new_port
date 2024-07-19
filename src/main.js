import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Vuelidate } from 'vuelidate'

const app = createApp(App)

app.use(Vuelidate)

app.use(router)

app.mount('#app')
