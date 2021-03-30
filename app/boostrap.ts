import AddCategory from '@/General/Category/UseCases/AddCategory'

import DependencyManager from './kernel/Container/DependencyManager'

/**
 * @param {DependencyManager} container
 */
export default function (container: DependencyManager): void {
  container.set('http', () => undefined)

  container.addDefinition('CategoryRepository', () => import('@/General/Category/Adapters/Http/CategoryRepository'))

  container.addDefinition('AddCategory', async function (container: DependencyManager): Promise<unknown> {
    const CategoryRepository = await container.resolveDefinition('CategoryRepository')
    // @ts-ignore
    return new AddCategory(new CategoryRepository())
  })
}
