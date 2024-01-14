import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia, Pinia} from "pinia";
import ToastPlugin from 'vue-toast-notification';

const pinia: Pinia = createPinia();
createApp(App).use(pinia).use(ToastPlugin).use(router).mount('#app')
