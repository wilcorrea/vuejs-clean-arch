import Category from '../../Domain/Category'

import CategoryRepositoryInterface from '../../Contracts/CategoryRepository'

/**
 * @class {CategoryRepository}
 */
export default class CategoryRepository implements CategoryRepositoryInterface {
  /**
   * @param {Category} datum
   * @return {boolean}
   */
  create (datum: Category): boolean {
    console.log('~> datum', datum)
    return true
  }
}
