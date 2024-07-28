import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Menu, List, Button, Drawer, message } from 'ant-design-vue'
import App from './App.vue'
import router from './router'

import './static/fontawesome-free-6.6.0-web/css/all.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Button)
app.use(Drawer)
app.use(List)
app.use(Menu)
app.mount('#app')

app.config.globalProperties.$message = message
