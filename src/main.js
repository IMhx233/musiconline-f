import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'


const app=createApp(App)
app.use(router).mount('#app')

console.log(navigator.userAgent)

