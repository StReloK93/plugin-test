import './assets/main.css'
import i18nPlugin from './assets/plugin'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import money from 'v-money3'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(money)
app.use(router)
app.use(i18nPlugin, {
    greetings: {
        hello: 'Hello'
    }
})

app.mount('#app')


