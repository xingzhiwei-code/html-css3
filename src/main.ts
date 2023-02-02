import { createApp } from 'vue'
import './assets/css/reset.css'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/lib/button/style';

import router from "@/router"


createApp(App).use(router).mount('#app')
