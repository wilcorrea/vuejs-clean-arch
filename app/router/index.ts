import { createRouter, createWebHistory } from 'vue-router'

import Router from 'app/core/Router'

import home from 'routes/home'
import dashboard from 'routes/dashboard'

const router = Router.build()

home(router)
dashboard(router)

const vueRouter = createRouter({
  history: createWebHistory(),
  routes: router.getRoutes()
})

export default vueRouter
