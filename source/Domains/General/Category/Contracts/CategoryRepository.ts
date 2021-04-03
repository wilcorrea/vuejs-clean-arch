import Category from '../Domain/Category'

/**
 * @interface {CategoryRepository}
 */
export default interface CategoryRepository {
  /**
   * @param {Category} category
   * @return {Promise<string>}
   */
  create (category: Category): Promise<string>
}
