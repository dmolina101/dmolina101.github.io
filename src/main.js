import { createApp } from 'vue'

import App from './App.vue'
//import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
/*import { Tooltip } from "bootstrap"

const tooltips = new Tooltip(document.body, {
    selector: "[data-bs-toggle='tooltip']"
});*/

const app = createApp(App)

//app.use(router)
app.mount('#app')
