import ValidationErrors from 'app/kernel/Exceptions/ValidationErrors'

import HttpRepository from 'source/Infra/Adapters/Http/HttpRepository'

import Category from '../../Domain/Category'
import CategoryRepository from '../../Contracts/CategoryRepository'
import CategoryValidation from '../../Domain/CategoryValidation'

/**
 * @class {HttpCategoryRepository}
 */
export default class HttpCategoryRepository extends HttpRepository implements CategoryRepository {
  /**
   * @type {CategoryValidation}
   */
  private validator: CategoryValidation

  /**
   * @param {CategoryValidation} validator
   */
  constructor (validator: CategoryValidation) {
    super()

    this.validator = validator
  }

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
    const errors = this.validator.validate(category)
    if (errors) {
      throw new ValidationErrors(errors)
    }

    return this.add(category)
  }
}
