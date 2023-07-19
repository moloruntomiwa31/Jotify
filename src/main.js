import { createApp } from 'vue'
import '../styles.css'
import App from './App.vue'
import router from "./router/index"

const app = createApp(App)
app.use(router)
app.mount('#app')

const open = document.getElementById("open")
open.addEventListener("click", (e) => {
    document.getElementById("close").style.display = "block"
    document.getElementById("open").style.display = "none"
    document.querySelector(".overlay").style.display = "block"
})
document.getElementById("close").addEventListener("click", () => {
    document.getElementById("close").style.display = "none"
    document.getElementById("open").style.display = "block"
    document.querySelector(".overlay").style.display = "none"
})
