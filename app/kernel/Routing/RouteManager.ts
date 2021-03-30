import { RouteComponent, RouteRecordRaw } from 'vue-router'
import RouteDefinition from './RouteDefinition'

/**
 * @class {RouteManager}
 */
export default class RouteManager {
  private routes: RouteRecordRaw[] = []

  /**
   * @return {RouteManager}
   */
  static build (): RouteManager {
    return new this()
  }

  /**
   * @param {string} path
   * @param {RouteComponent} component
   * @return {RouteDefinition}
   */
  on (path: string, component: RouteComponent): RouteDefinition {
    const options = {
      path,
      component
    }
    const route = new RouteDefinition(options)
    this.routes.push(route)
    return route
  }

  /**
   * @param {string} path
   * @param {RouteComponent} component
   * @return {RouteDefinition}
   */
  route (path: string, component: RouteComponent): RouteDefinition {
    return this.on(path, component)
  }

  /**
   * @param {string} path
   * @param {RouteComponent} component
   * @param {(router: Router) => void} callback
   * @return {RouteDefinition}
   */
  group (path: string, component: RouteComponent, callback: (router: RouteManager) => void): RouteDefinition {
    const router = RouteManager.build()
    callback(router)
    const children = router.getRoutes()
    const options = {
      path,
      component,
      children
    }
    const route = new RouteDefinition(options)
    this.routes.push(route)
    return route
  }

  /**
   * @param {Record<string, unknown>} source
   * @return {RouteManager}
   */
  register (source: Record<string, unknown>): RouteManager {
    this.routes.push(new RouteDefinition(source))
    return this
  }

  /**
   * @return {RouteRecordRaw[]}
   */
  getRoutes (): RouteRecordRaw[] {
    return this.routes
  }
}
