import DependencyManager from './kernel/Container/DependencyManager'
import http from 'infra/http'

/**
 * @param {DependencyManager} container
 */
export default function (container: DependencyManager): void {
  container.set('http', http)

  container.addDefinition('CategoryRepository', () => import('source/Domains/General/Category/Adapters/Http/HttpCategoryRepository'))
  container.addDefinition('CategoryAddUseCase', () => import('source/Domains/General/Category/UseCases/AddCategory'))

  container.addDefinition('AddCategory', async function (container: DependencyManager): Promise<unknown> {
    const AddCategory = await container.resolveDefinition('CategoryAddUseCase')
    const CategoryRepository = await container.resolveDefinition('CategoryRepository')
    // @ts-ignore
    return new AddCategory(new CategoryRepository())
  })
}
