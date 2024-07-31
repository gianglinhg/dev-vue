import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Input, Select, Avatar, Table, Card, Menu, List, Button, Drawer, message } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
window.axios = axios

window.url_b = 'http://127.0.0.1:8000/api/';

import './static/fontawesome-free-6.6.0-web/css/all.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Input)
app.use(Select)
app.use(Avatar)
app.use(Button)
app.use(Drawer)
app.use(List)
app.use(Menu)
app.use(Card)
app.use(Table)
app.mount('#app')

app.config.globalProperties.$message = message
