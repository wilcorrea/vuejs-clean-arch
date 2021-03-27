import Container from '../core/Container'
import { ContainerDefinition } from '../definitions'

import AddCategory from 'src/General/Category/UseCases/AddCategory'

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

    container.set('http', () => undefined)

    container.addDefinition('CategoryRepository', () => import('src/General/Category/Adapters/Http/CategoryRepository'))

    container.addDefinition('AddCategory', async function (container: Container): Promise<unknown> {
      const CategoryRepository = await container.resolve('CategoryRepository')
      // @ts-ignore
      return new AddCategory(new CategoryRepository())
    })
  }
  return container
}
