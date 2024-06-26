import { createApp } from 'vue'
import store from "./store/storage"
import App from './App.vue'
import router from './router'

createApp(App).use(store).use(router).mount('#app')