import { createApp } from 'vue'
import App from '../presentation/views/App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
