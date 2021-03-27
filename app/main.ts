import { createApp } from 'vue'
import router from './router'
import store from './store'

import App from 'presentation/views/App.vue'
import 'presentation/styles/scss/main.scss'

import './registerServiceWorker'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
