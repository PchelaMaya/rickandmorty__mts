import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

import '@/style.scss'
import App from '@/App.vue'

const pinia = createPinia()
createApp(App).use(pinia).use(router).mount('#app')
