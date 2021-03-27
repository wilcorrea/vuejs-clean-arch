import CategoryModel from '../CategoryModel'

/**
 * @interface {CategoryRepository}
 */
export default interface CategoryRepository {
  /**
   * @param {CategoryModel} record
   * @return {boolean}
   */
  create (record: CategoryModel): boolean
}
