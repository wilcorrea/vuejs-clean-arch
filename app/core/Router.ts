import { RouteComponent, RouteRecordRaw } from 'vue-router'
import RouterRecord from './RouterRecord'

/**
 * @class {Router}
 */
export default class Router {
  private routes: RouteRecordRaw[] = []

  /**
   * @return {Router}
   */
  static build (): Router {
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
  group (path: string, component: RouteComponent, callback: (router: Router) => void): RouterRecord {
    const router = Router.build()
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
   * @return {Router}
   */
  register (source: Record<string, unknown>): Router {
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
