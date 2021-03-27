import CategoryModel from '../CategoryModel'
import CategoryRepository from '../Contracts/CategoryRepository'

export default class AddCategory {
  /**
   * @param {CategoryRepository} repository
   */
  constructor (readonly repository: CategoryRepository) {}

  /**
   * @param {CategoryModel} record
   * @return {boolean}
   */
  add (record: CategoryModel): boolean {
    return this.repository.create(record)
  }
}
