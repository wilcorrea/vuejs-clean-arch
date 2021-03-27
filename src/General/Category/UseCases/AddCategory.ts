import { Datum } from 'app/definitions'
import ValidationError from 'app/exceptions/ValidationError'

import CategoryRepository from '../Contracts/CategoryRepository'

export default class AddCategory {
  /**
   * @param {CategoryRepository} repository
   */
  constructor (readonly repository: CategoryRepository) {}

  /**
   * @param {Datum} datum
   * @return {boolean}
   */
  handle (datum: Datum): boolean {
    const category = {
      name: datum?.name as string,
      active: datum?.active as boolean,
      description: datum?.description as string
    }
    if (!category.name) {
      throw new ValidationError([
        {
          field: 'name',
          errors: [
            {
              message: 'required',
              value: ''
            }
          ]
        }
      ])
    }
    return this.repository.create(category)
  }
}
