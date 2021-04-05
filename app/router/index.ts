import { createRouter, createWebHistory } from 'vue-router'

import RouteManager from 'app/kernel/Routing/RouteManager'

import welcome from 'routes/welcome'
import dashboard from 'routes/dashboard'

const router = RouteManager.build()

welcome(router)
dashboard(router)

const vueRouter = createRouter({
  history: createWebHistory(),
  routes: router.getRoutes()
})

export default vueRouter
