import { Datum, Schema } from 'app/env'
import ValidationError from 'app/exceptions/ValidationError'

import CategoryRepository from '../Contracts/CategoryRepository'

export default class AddCategory {
  /**
   * @param {CategoryRepository} repository
   */
  constructor (readonly repository: CategoryRepository) {}

  /**
   * @param {Datum} datum
   * @param {Record<string, Schema>} schema
   * @return {boolean}
   */
  handle (datum: Datum, schema: Record<string, Schema>): boolean {
    const category = {
      name: datum?.name as string,
      active: datum?.active as boolean,
      description: datum?.description as string
    }

    // TODO: show how the reactivity can be explored
    schema.name.attrs.width = schema.name.attrs.width === 80 ? 50 : 80

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
