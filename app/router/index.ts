import { createRouter, createWebHistory } from 'vue-router'

import RouteManager from 'app/kernel/Routing/RouteManager'

import home from 'routes/home'
import dashboard from 'routes/dashboard'

const router = RouteManager.build()

home(router)
dashboard(router)

const vueRouter = createRouter({
  history: createWebHistory(),
  routes: router.getRoutes()
})

export default vueRouter
