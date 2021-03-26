import { createRouter, createWebHistory } from 'vue-router'

import Router from 'app/core/Router'
import home from 'routes/home'

const router = Router.build()

home(router)

const vueRouter = createRouter({
  history: createWebHistory(),
  routes: router.getRoutes()
})

export default vueRouter
