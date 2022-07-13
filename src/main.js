import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import elementplus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/common.css'






let app = createApp(App)
app.use(router).use(store).use(elementplus)
app.mount('#app')


