import { RouteComponent, RouteRecordRaw } from 'vue-router'
import RouterRecord from './RouterRecord'

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
   * @return {RouterRecord}
   */
  on (path: string, component: RouteComponent): RouterRecord {
    const options = {
      path,
      component
    }
    const route = new RouterRecord(options)
    this.routes.push(route)
    return route
  }

  /**
   * @param {string} path
   * @param {RouteComponent} component
   * @return {RouterRecord}
   */
  route (path: string, component: RouteComponent): RouterRecord {
    return this.on(path, component)
  }

  /**
   * @param {string} path
   * @param {RouteComponent} component
   * @param {(router: Router) => void} callback
   * @return {RouterRecord}
   */
  group (path: string, component: RouteComponent, callback: (router: RouteManager) => void): RouterRecord {
    const router = RouteManager.build()
    callback(router)
    const children = router.getRoutes()
    const options = {
      path,
      component,
      children
    }
    const route = new RouterRecord(options)
    this.routes.push(route)
    return route
  }

  /**
   * @param {Record<string, unknown>} source
   * @return {RouteManager}
   */
  register (source: Record<string, unknown>): RouteManager {
    this.routes.push(new RouterRecord(source))
    return this
  }

  /**
   * @return {RouteRecordRaw[]}
   */
  getRoutes (): RouteRecordRaw[] {
    return this.routes
  }
}
