import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia, Pinia} from "pinia";

const pinia: Pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app')
