import { createApp } from 'vue'
import 'normalize.css'
import './styles/reset'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
