import {
  NavigationGuardWithThis,
  RouteComponent,
  RouteMeta,
  RouteRecordName,
  RouteRecordRaw,
  RouteRecordRedirectOption
} from 'vue-router'
import RouteManager from './RouteManager'

/**
 */
export default class RouterRecord {
  /**
   * Path of the record. Should start with `/` unless the record is the child of
   * another record.
   *
   * @example `/users/:id` matches `/users/1` as well as `/users/username`.
   */
  path: string

  /**
   * Component to display when the URL matches this route.
   */
  component: RouteComponent

  /**
   * Where to redirect if the route is directly matched. The redirection happens
   * before any navigation guard and triggers a new navigation with the new
   * target location.
   */
  redirect?: RouteRecordRedirectOption

  /**
   * Array of nested routes.
   */
  children?: RouteRecordRaw[]

  /**
   * Aliases for the record. Allows defining extra paths that will behave like a
   * copy of the record. Allows having paths shorthands like `/users/:id` and
   * `/u/:id`. All `alias` and `path` values must share the same params.
   */
  alias?: string | string[]

  /**
   * Name for the route record.
   */
  name?: RouteRecordName

  /**
   * Before Enter guard specific to this record. Note `beforeEnter` has no
   * effect if the record has a `redirect` property.
   */
  beforeEnter?: NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[]

  /**
   * Arbitrary data attached to the record.
   */
  meta?: RouteMeta

  /**
   * @param {Record<string, unknown>} options
   */
  constructor (options: Record<string, unknown>) {
    this.path = options.path as string
    this.component = options.component as RouteComponent
    if (options.children) {
      this.children = options.children as RouteRecordRaw[]
    }

    if (options.redirect) {
      this.redirect = options.redirect as RouteRecordRedirectOption
    }
    if (options.children) {
      this.children = options.children as RouteRecordRaw[]
    }
    if (options.alias) {
      this.alias = options.alias as string | string[]
    }
    if (options.name) {
      this.name = options.name as RouteRecordName
    }
    if (options.beforeEnter) {
      this.beforeEnter = options.beforeEnter as NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[]
    }
    if (options.meta) {
      this.meta = options.meta as RouteMeta
    }
  }

  /**
   * @param {(callback: (router: RouteManager) => void} callback
   * @return {this}
   */
  addChildren (callback: (router: RouteManager) => void): RouterRecord {
    const router = RouteManager.build()
    callback(router)
    const children = router.getRoutes()
    this.setChildren(children)
    return this
  }

  /**
   * @return {string}
   */
  getPath (): string {
    return this.path
  }

  /**
   * @param {string} path
   * @return {this}
   */
  setPath (path: string): RouterRecord {
    this.path = path
    return this
  }

  /**
   * @return {RouteComponent}
   */
  getComponent (): RouteComponent {
    return this.component
  }

  /**
   * @param {RouteComponent} component
   * @return {this}
   */
  setComponent (component: RouteComponent): RouterRecord {
    this.component = component
    return this
  }

  /**
   * @return {RouteRecordRedirectOption | undefined}
   */
  getRedirect (): RouteRecordRedirectOption | undefined {
    return this.redirect
  }

  /**
   * @param {RouteRecordRedirectOption} redirect
   * @return {this}
   */
  setRedirect (redirect: RouteRecordRedirectOption): RouterRecord {
    this.redirect = redirect
    return this
  }

  /**
   * @return {RouteRecordRaw[] | undefined}
   */
  getChildren (): RouteRecordRaw[] | undefined {
    return this.children
  }

  /**
   * @param {RouteRecordRaw} children
   * @return {this}
   */
  setChildren (children: RouteRecordRaw[]): RouterRecord {
    this.children = children
    return this
  }

  /**
   * @return {string | string[] | undefined}
   */
  getAlias (): string | string[] | undefined {
    return this.alias
  }

  /**
   * @param {string} alias
   * @return {this}
   */
  setAlias (alias: string | string[]): RouterRecord {
    this.alias = alias
    return this
  }

  /**
   * @return {RouteRecordName | undefined}
   */
  getName (): RouteRecordName | undefined {
    return this.name
  }

  /**
   * @param {RouteRecordName} name
   * @return {this}
   */
  setName (name: RouteRecordName): RouterRecord {
    this.name = name
    return this
  }

  /**
   * @return {NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[] | undefined}
   */
  getBeforeEnter (): NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[] | undefined {
    return this.beforeEnter
  }

  /**
   * @param {NavigationGuardWithThis} beforeEnter
   * @return {this}
   */
  setBeforeEnter (beforeEnter: NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[]): RouterRecord {
    this.beforeEnter = beforeEnter
    return this
  }

  /**
   * @return {RouteMeta | undefined}
   */
  getMeta (): RouteMeta | undefined {
    return this.meta
  }

  /**
   * @param {RouteMeta} meta
   * @return {this}
   */
  setMeta (meta: RouteMeta): RouterRecord {
    this.meta = meta
    return this
  }
}
