import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/_export.scss'

createApp(App).use(router).mount('#app')
