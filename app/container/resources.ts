import definitions from './definitions'

import Container from '../core/Container'
import { ContainerDefinition } from '../env'

let container: Container

/**
 * @param {string} property
 * @param {ContainerDefinition} value
 * @return {Container}
 */
export function set (property: string, value: ContainerDefinition<Container>): Container {
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
  return instance().resolve(alias)
}

/**
 * @return {Container}
 */
export function instance (): Container {
  if (!container) {
    container = new Container()
    definitions(container)
  }
  return container
}
