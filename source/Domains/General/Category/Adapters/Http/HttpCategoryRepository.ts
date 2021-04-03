import ValidationError from 'app/kernel/Exceptions/ValidationError'

import HttpRepository from 'source/Infra/Adapters/Http/HttpRepository'

import Category from '../../Domain/Category'
import CategoryRepository from '../../Contracts/CategoryRepository'

/**
 * @class {HttpCategoryRepository}
 */
export default class HttpCategoryRepository extends HttpRepository implements CategoryRepository {
  /**
   * @return {string}
   */
  resource (): string {
    return '/5c19c2b7-39f5-4243-af3c-04c55a282ce0'
  }

  /**
   * @param {Category} category
   * @return {Promise<string>}
   */
  async create (category: Category): Promise<string> {
    if (!category.name) {
      throw new ValidationError('name', 'required')
    }

    return this.add(category)
  }
}
