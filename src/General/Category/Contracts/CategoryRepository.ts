import Category from '../Domain/Category'

/**
 * @interface {CategoryRepository}
 */
export default interface CategoryRepository {
  /**
   * @param {Category} category
   * @return {boolean}
   */
  create (category: Category): boolean
}
