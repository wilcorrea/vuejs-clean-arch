import AddCategory from 'src/General/Category/UseCases/AddCategory'

import Container from '../core/Container'

/**
 * @param {Container} container
 */
export default function (container: Container): void {
  container.set('http', () => undefined)

  container.addDefinition('CategoryRepository', () => import('src/General/Category/Adapters/Http/CategoryRepository'))

  container.addDefinition('AddCategory', async function (container: Container): Promise<unknown> {
    const CategoryRepository = await container.resolveDefinition('CategoryRepository')
    // @ts-ignore
    return new AddCategory(new CategoryRepository())
  })
}
