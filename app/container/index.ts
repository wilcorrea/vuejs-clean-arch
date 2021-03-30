import DependencyManager from '../kernel/Container/DependencyManager'
import { ContainerDefinition } from '../definitions'

let container: DependencyManager

/**
 * @param {string} property
 * @param {ContainerDefinition} value
 * @return {DependencyManager}
 */
export function set (property: string, value: ContainerDefinition<DependencyManager>): DependencyManager {
  return instance().set(property, value)
}

/**
 * @param {string} property
 * @return {unknown}
 */
export function get (property: string): unknown {
  return instance().get(property)
}

/**
 * @param {string} alias
 * @return {unknown}
 */
export function resolve (alias: string): unknown {
  return instance().resolveDefinition(alias)
}

/**
 * @return {DependencyManager}
 */
export function instance (): DependencyManager {
  if (!container) {
    container = new DependencyManager()
  }
  return container
}
