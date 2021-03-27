import ValidationError from 'app/exceptions/ValidationError'

import Category from '../../Domain/Category'
import CategoryRepositoryInterface from '../../Contracts/CategoryRepository'

/**
 * @class {CategoryRepository}
 */
export default class CategoryRepository implements CategoryRepositoryInterface {
  /**
   * @param {Category} category
   * @return {boolean}
   */
  create (category: Category): boolean {
    if (!category.name) {
      throw new ValidationError('name', 'required')
    }
    console.log('~> category', category)
    return true
  }
}
