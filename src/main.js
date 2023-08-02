import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import {ComponentsRegister} from "./components/index.js";

const app = createApp(App)
app.use(router)
app.use(ComponentsRegister)
app.mount('#app')
